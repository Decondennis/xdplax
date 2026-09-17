import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { SITE_URL, COMPANY_DETAILS } from "../lib/seo";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-background px-4 py-20">
      <div className="max-w-md text-center">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-destructive/10 text-destructive border border-destructive/20 mb-4">
          Error 404
        </span>
        <h1 className="text-6xl font-extrabold tracking-tighter text-foreground">404</h1>
        <h2 className="mt-4 text-2xl font-bold font-heading">Page Not Found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you are looking for does not exist or has been relocated to another section of
          Xdplax International.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground hover:brightness-110 transition shadow-sm"
          >
            Return to Homepage
          </Link>
          <Link
            to="/services"
            className="inline-flex items-center justify-center rounded-full border border-border bg-card px-6 py-2.5 text-sm font-semibold text-foreground hover:bg-muted transition"
          >
            Explore Services
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-background px-4 py-20">
      <div className="max-w-md text-center">
        <h1 className="text-2xl font-bold font-heading tracking-tight">System Notice</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          An unexpected error occurred while loading this page. Our engineers have been alerted.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground hover:brightness-110 transition shadow-sm"
          >
            Try Again
          </button>
          <Link
            to="/"
            className="rounded-full border border-border bg-card px-6 py-2.5 text-sm font-semibold hover:bg-muted transition"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, viewport-fit=cover" },
      { name: "theme-color", content: "#090d16" },
      { name: "color-scheme", content: "dark light" },
      { name: "format-detection", content: "telephone=no" },
      {
        title: "Xdplax International — Enterprise Software, IT Solutions & Forex Academy",
      },
      {
        name: "description",
        content:
          "Xdplax International is a premier technology and financial education provider offering custom web & mobile apps, ERP/CRM platforms, AI analytics, cybersecurity, Forex Academy, and FxMint automated copy trading.",
      },
      { name: "author", content: "Xdplax International" },
      { name: "publisher", content: "Xdplax International" },
      {
        name: "robots",
        content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      },
      {
        name: "googlebot",
        content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
      },
      {
        name: "bingbot",
        content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
      },
      {
        name: "google-site-verification",
        content: "googleed871dcfc5b2265a",
      },
      // Geographic Metadata
      { name: "geo.region", content: "NG-CR" },
      { name: "geo.placename", content: "Calabar, Cross River State, Nigeria" },
      {
        name: "geo.position",
        content: `${COMPANY_DETAILS.geo.latitude};${COMPANY_DETAILS.geo.longitude}`,
      },
      {
        name: "ICBM",
        content: `${COMPANY_DETAILS.geo.latitude}, ${COMPANY_DETAILS.geo.longitude}`,
      },
      // OpenGraph
      { property: "og:site_name", content: "Xdplax International" },
      {
        property: "og:title",
        content: "Xdplax International — Enterprise Software, IT Solutions & Forex Academy",
      },
      {
        property: "og:description",
        content:
          "Enterprise Software Engineering · Responsive Web & Mobile Apps · CRM/ERP · AI/ML · Forex Academy · FxMint Automated Copier.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
      { property: "og:locale", content: "en_US" },
      { property: "og:locale:alternate", content: "en_GB" },
      { property: "og:locale:alternate", content: "en_NG" },
      { property: "og:image", content: `${SITE_URL}/og-image.png` },
      { property: "og:image:secure_url", content: `${SITE_URL}/og-image.png` },
      { property: "og:image:alt", content: "Xdplax International Corporate Portal" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      // Twitter Card
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Xdplax International — Enterprise Software, IT Solutions & Forex Academy",
      },
      {
        name: "twitter:description",
        content:
          "Enterprise Software Engineering, Forex Academy, and FxMint Automated Copier by Xdplax International.",
      },
      { name: "twitter:image", content: `${SITE_URL}/og-image.png` },
      { name: "twitter:image:alt", content: "Xdplax International" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "canonical", href: SITE_URL },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
      { rel: "apple-touch-icon", href: "/favicon.png" },
      { rel: "manifest", href: "/site.webmanifest" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&family=Raleway:wght@400;500;600;700;800&family=Open+Sans:wght@400;500;600;700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": ["Organization", "Corporation", "LocalBusiness"],
              "@id": `${SITE_URL}/#organization`,
              name: COMPANY_DETAILS.name,
              legalName: COMPANY_DETAILS.legalName,
              url: SITE_URL,
              logo: {
                "@type": "ImageObject",
                url: COMPANY_DETAILS.logo,
                width: "512",
                height: "512",
              },
              image: `${SITE_URL}/og-image.png`,
              description: COMPANY_DETAILS.description,
              email: COMPANY_DETAILS.email,
              telephone: COMPANY_DETAILS.telephones,
              address: {
                "@type": "PostalAddress",
                streetAddress: COMPANY_DETAILS.address.streetAddress,
                addressLocality: COMPANY_DETAILS.address.addressLocality,
                addressRegion: COMPANY_DETAILS.address.addressRegion,
                postalCode: COMPANY_DETAILS.address.postalCode,
                addressCountry: COMPANY_DETAILS.address.addressCountry,
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: COMPANY_DETAILS.geo.latitude,
                longitude: COMPANY_DETAILS.geo.longitude,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "08:00",
                  closes: "18:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Saturday"],
                  opens: "09:00",
                  closes: "15:00",
                },
              ],
              sameAs: COMPANY_DETAILS.sameAs,
              priceRange: "$$",
            },
            {
              "@type": "WebSite",
              "@id": `${SITE_URL}/#website`,
              url: SITE_URL,
              name: "Xdplax International",
              description: COMPANY_DETAILS.description,
              publisher: {
                "@id": `${SITE_URL}/#organization`,
              },
              potentialAction: {
                "@type": "SearchAction",
                target: `${SITE_URL}/products?query={search_term_string}`,
                "query-input": "required name=search_term_string",
              },
            },
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}
