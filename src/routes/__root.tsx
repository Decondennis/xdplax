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
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        title: "Xdplax International — Premier IT, Forex Academy & Enterprise Software Development",
      },
      {
        name: "description",
        content:
          "Xdplax International is a global technology and financial education provider offering custom web and mobile apps, ERP/CRM solutions, AI analytics, cybersecurity, Forex Academy, and FxMint copy trading.",
      },
      { name: "author", content: "Xdplax International" },
      { property: "og:site_name", content: "Xdplax International" },
      {
        property: "og:title",
        content:
          "Xdplax International — Premier IT, Forex Academy & Enterprise Software Development",
      },
      {
        property: "og:description",
        content:
          "Enterprise Software Engineering · Responsive Web & Mobile Apps · CRM/ERP/Ecommerce · AI/ML · Forex Academy · FxMint Automated Copier.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content:
          "Xdplax International — Premier IT, Forex Academy & Enterprise Software Development",
      },
      {
        name: "twitter:description",
        content:
          "Enterprise Software Engineering, Forex Academy, and FxMint Automated Copier by Xdplax International.",
      },
      { property: "og:image", content: "/og-image.png" },
      { name: "twitter:image", content: "/og-image.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
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
          "@type": "Organization",
          name: "Xdplax International",
          description:
            "Provider of IT consulting, enterprise software development, proprietary fintech/edtech platforms, Forex Academy and FxMint Traders Circle.",
          url: "https://xdplaxinternational.com",
          address: {
            "@type": "PostalAddress",
            streetAddress: "27 Edgerly Road",
            addressLocality: "Calabar",
            addressRegion: "Cross River State",
            addressCountry: "NG",
          },
          telephone: ["+2347062028958", "+2348126573209"],
          email: "info@xdplaxInternational.com",
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
