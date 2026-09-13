import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { 
  ArrowLeft, 
  Clock, 
  Calendar, 
  Share2, 
  Bookmark, 
  CheckCircle, 
  BookOpen,
  ArrowRight,
  ShieldCheck,
  User
} from "lucide-react";
import { getPostBySlug, getRelatedPosts, BLOG_POSTS } from "@/data/blogPosts";
import { buildSeoMeta, buildBreadcrumbSchema, SITE_URL } from "@/lib/seo";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPostBySlug(params.slug);
    if (!post) {
      throw notFound();
    }
    return { post };
  },
  head: ({ loaderData }) => {
    const post = loaderData?.post;
    if (!post) {
      return buildSeoMeta({
        title: "Article Not Found",
        description: "The requested publication could not be located.",
        path: "/blog",
        noindex: true,
      });
    }

    const canonicalPath = `/blog/${post.slug}`;
    return buildSeoMeta({
      title: `${post.title} — Tech & Architecture Deep Dive`,
      description: post.excerpt,
      path: canonicalPath,
      keywords: post.tags,
      ogType: "article",
      publishedTime: `${post.publishedAt}T08:00:00Z`,
      jsonLd: {
        "@context": "https://schema.org",
        "@graph": [
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: post.title, path: canonicalPath },
          ]),
          {
            "@type": "Article",
            "@id": `${SITE_URL}${canonicalPath}/#article`,
            url: `${SITE_URL}${canonicalPath}`,
            headline: post.title,
            description: post.excerpt,
            datePublished: `${post.publishedAt}T08:00:00Z`,
            dateModified: `${post.publishedAt}T08:00:00Z`,
            articleSection: post.category,
            keywords: post.tags.join(", "),
            author: {
              "@type": "Person",
              name: post.author.name,
              jobTitle: post.author.title,
            },
            publisher: {
              "@type": "Organization",
              name: "Xdplax International",
              url: SITE_URL,
              logo: {
                "@type": "ImageObject",
                url: `${SITE_URL}/favicon.png`,
              },
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `${SITE_URL}${canonicalPath}`,
            },
          },
        ],
      },
    });
  },
  component: BlogPostDetailPage,
});

function BlogPostDetailPage() {
  const { post } = Route.useLoaderData();
  const relatedPosts = getRelatedPosts(post.slug, 3);

  return (
    <div className="pt-28 pb-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumb Bar */}
        <div className="mb-8 flex items-center justify-between gap-4">
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Tech Journal
          </Link>
          <span className="px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs font-bold uppercase tracking-wider">
            {post.category}
          </span>
        </div>

        {/* Article Header */}
        <header className="space-y-6 pb-8 border-b border-border/80">
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight leading-[1.15]">
            {post.title}
          </h1>

          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed italic border-l-4 border-primary/60 pl-4 py-1">
            {post.excerpt}
          </p>

          {/* Author & Metadata Card */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-full bg-primary/15 text-primary flex items-center justify-center font-bold text-base border border-primary/30 shadow-xs">
                {post.author.name[0]}
              </div>
              <div>
                <p className="font-heading font-bold text-sm text-foreground">{post.author.name}</p>
                <p className="text-xs text-muted-foreground">{post.author.title}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-primary" />
                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-primary" />
                {post.readTime}
              </span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap items-center gap-2 pt-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-md bg-muted text-muted-foreground text-xs font-medium"
              >
                #{tag}
              </span>
            ))}
          </div>
        </header>

        {/* Main Formatted Content */}
        <main className="py-10">
          <div
            className="prose prose-slate dark:prose-invert max-w-none text-base leading-relaxed space-y-6"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </main>

        {/* Author Bio Box */}
        <section className="mt-12 p-8 rounded-3xl bg-card border border-border/80 shadow-xs space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm border border-primary/20">
              {post.author.name[0]}
            </div>
            <div>
              <h4 className="font-heading font-bold text-base text-foreground">{post.author.name}</h4>
              <p className="text-xs text-primary font-medium">{post.author.title}</p>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            {post.author.bio} Dennis and the Xdplax engineering team design and deploy high-availability enterprise architectures, digital health systems, and fintech infrastructure.
          </p>
        </section>

        {/* Related Articles Section */}
        {relatedPosts.length > 0 && (
          <section className="mt-16 pt-12 border-t border-border/80 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="font-heading font-bold text-2xl text-foreground">Related Publications</h3>
              <Link to="/blog" className="text-xs font-semibold text-primary hover:underline">
                View all articles &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((related) => (
                <div
                  key={related.id}
                  className="p-5 rounded-2xl bg-card border border-border/70 shadow-xs flex flex-col justify-between group hover:border-primary/40 transition-all"
                >
                  <div className="space-y-2">
                    <span className="text-[10px] font-bold text-primary uppercase tracking-wider">
                      {related.category}
                    </span>
                    <h5 className="font-heading font-bold text-sm text-foreground group-hover:text-primary transition-colors line-clamp-2">
                      <Link to={`/blog/${related.slug}`}>{related.title}</Link>
                    </h5>
                    <p className="text-xs text-muted-foreground line-clamp-2">{related.excerpt}</p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-border/50 flex items-center justify-between text-[11px] text-muted-foreground">
                    <span>{related.readTime}</span>
                    <Link
                      to={`/blog/${related.slug}`}
                      className="font-semibold text-primary flex items-center gap-1"
                    >
                      Read &rarr;
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
