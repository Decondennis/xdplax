import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { 
  BookOpen, 
  Search, 
  Clock, 
  Calendar, 
  ArrowRight, 
  Sparkles, 
  Filter, 
  Tag, 
  User,
  Layers,
  ChevronRight,
  ShieldCheck
} from "lucide-react";
import { BLOG_POSTS, BLOG_CATEGORIES, BlogPost } from "@/data/blogPosts";
import { buildSeoMeta, buildBreadcrumbSchema, SITE_URL } from "@/lib/seo";

export const Route = createFileRoute("/blog/")({
  head: () =>
    buildSeoMeta({
      title: "Tech & Engineering Journal — Software Architecture, FinTech & HealthTech",
      description:
        "Authoritative engineering insights, enterprise microservices architectures, digital health algorithms, fintech transaction scaling, and cloud security from Xdplax International.",
      path: "/blog",
      keywords: [
        "Tech Blog Nigeria",
        "Software Engineering Articles",
        "Microservices Architecture Guides",
        "FinTech Transaction Processing",
        "Digital Health Tech Privacy",
        "Core Web Vitals Optimization",
        "Cloud Security Zero Trust",
      ],
      jsonLd: {
        "@context": "https://schema.org",
        "@graph": [
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog & Insights", path: "/blog" },
          ]),
          {
            "@type": "Blog",
            "@id": `${SITE_URL}/blog/#blog`,
            url: `${SITE_URL}/blog`,
            name: "Xdplax International Engineering & Tech Journal",
            description:
              "Technical publications, architectural case studies, and engineering research from Xdplax International.",
            publisher: {
              "@type": "Organization",
              name: "Xdplax International",
              url: SITE_URL,
            },
          },
        ],
      },
    }),
  component: BlogIndexPage,
});

function BlogIndexPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.tags.some((t) => t.toLowerCase().includes(q));

      const matchesCategory =
        selectedCategory === "All" || post.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const featuredPost = useMemo(() => {
    return BLOG_POSTS.find((p) => p.featured) || BLOG_POSTS[0];
  }, []);

  return (
    <div className="pt-28 pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Hero */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Engineering &amp; Technology Insights
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground leading-[1.15]">
            The Xdplax <span className="text-primary">Tech Journal</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            In-depth architectural blueprints, digital health algorithms, fintech scalability patterns,
            and cloud security best practices from our core engineering team.
          </p>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="mb-12 space-y-4">
          <div className="relative max-w-xl mx-auto">
            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
            <input
              type="text"
              placeholder="Search by topic, keyword, or technology (e.g. Microservices, FinTech, Privacy)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-full bg-card border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 shadow-xs"
            />
          </div>

          {/* Category Pills */}
          <div className="flex items-center justify-center flex-wrap gap-2 pt-2">
            {BLOG_CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground shadow-xs"
                    : "bg-card border border-border text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Post Highlight (Shown when no search/filter active) */}
        {!searchQuery && selectedCategory === "All" && featuredPost && (
          <div className="mb-16">
            <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-card via-card to-muted/50 p-8 sm:p-12 shadow-sm group hover:border-primary/40 transition-all duration-300">
              <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
                <div className="max-w-2xl space-y-4">
                  <div className="flex items-center gap-3 flex-wrap text-xs">
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-semibold border border-primary/20">
                      Featured Publication
                    </span>
                    <span className="text-muted-foreground flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {new Date(featuredPost.publishedAt).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                    <span className="text-muted-foreground flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {featuredPost.readTime}
                    </span>
                  </div>

                  <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground tracking-tight group-hover:text-primary transition-colors">
                    <Link to={`/blog/${featuredPost.slug}`}>
                      {featuredPost.title}
                    </Link>
                  </h2>

                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex items-center gap-3 pt-2">
                    <div className="w-9 h-9 rounded-full bg-primary/15 text-primary flex items-center justify-center font-bold text-sm border border-primary/30">
                      {featuredPost.author.name[0]}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-foreground">{featuredPost.author.name}</p>
                      <p className="text-[11px] text-muted-foreground">{featuredPost.author.title}</p>
                    </div>
                  </div>
                </div>

                <div className="shrink-0 flex flex-col justify-between self-stretch lg:self-center">
                  <Link
                    to={`/blog/${featuredPost.slug}`}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:brightness-110 transition shadow-sm"
                  >
                    <span>Read Deep Dive</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Articles Grid */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-border/60 pb-4">
            <h3 className="font-heading font-bold text-xl text-foreground flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-primary" />
              {selectedCategory === "All" ? "All Engineering Publications" : `${selectedCategory} Articles`}
              <span className="text-xs text-muted-foreground font-normal ml-2">
                ({filteredPosts.length} articles)
              </span>
            </h3>
          </div>

          {filteredPosts.length === 0 ? (
            <div className="text-center py-16 bg-card border border-border rounded-2xl">
              <p className="text-muted-foreground text-sm">No articles matched your search query.</p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
                className="mt-4 inline-flex items-center text-xs font-semibold text-primary hover:underline"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className="flex flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-xs hover:border-primary/40 hover:shadow-md transition-all duration-300 group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2 text-xs">
                      <span className="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary font-medium text-[11px] border border-primary/15">
                        {post.category}
                      </span>
                      <span className="text-muted-foreground flex items-center gap-1 text-[11px]">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>

                    <h4 className="font-heading font-bold text-lg text-foreground group-hover:text-primary transition-colors leading-snug line-clamp-2">
                      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                    </h4>

                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-border/60 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xs border border-primary/20">
                        {post.author.name[0]}
                      </div>
                      <span className="text-xs font-medium text-foreground truncate max-w-[130px]">
                        {post.author.name}
                      </span>
                    </div>

                    <Link
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:text-primary/80 transition-colors group/link"
                    >
                      <span>Read</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>

        {/* Bottom Consultation Card */}
        <div className="mt-20 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-primary/10 via-card to-accent/10 border border-primary/20 text-center max-w-4xl mx-auto">
          <h3 className="font-heading text-2xl sm:text-3xl font-bold text-foreground">
            Looking to Engineer Your Next Digital Platform?
          </h3>
          <p className="mt-2 text-sm sm:text-base text-muted-foreground max-w-xl mx-auto">
            From high-throughput fintech ledgers to privacy-first health apps, our engineering team brings architectural rigor to your vision.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground hover:brightness-110 transition shadow-sm"
            >
              <span>Schedule Architecture Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center rounded-full border border-border bg-card px-6 py-2.5 text-sm font-semibold text-foreground hover:bg-muted transition"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
