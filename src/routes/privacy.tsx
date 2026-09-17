import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, Lock, AlertTriangle, ArrowLeft, Cookie, ExternalLink, UserCheck } from "lucide-react";
import { buildSeoMeta, buildBreadcrumbSchema, SITE_URL } from "@/lib/seo";

export const Route = createFileRoute("/privacy")({
  head: () =>
    buildSeoMeta({
      title: "Privacy Policy, Cookie Disclosure & Financial Notice",
      description:
        "Understand how Xdplax International protects user data, adheres to global GDPR/CCPA standards, discloses Google AdSense and third-party cookie usage, and communicates risk considerations.",
      path: "/privacy",
      keywords: [
        "Privacy Policy", 
        "Google AdSense Cookies", 
        "Data Protection GDPR", 
        "Cookie Policy", 
        "Forex Risk Disclosure"
      ],
      jsonLd: {
        "@context": "https://schema.org",
        "@graph": [
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Privacy Policy", path: "/privacy" },
          ]),
          {
            "@type": "WebPage",
            "@id": `${SITE_URL}/privacy/#webpage`,
            url: `${SITE_URL}/privacy`,
            name: "Privacy Policy & Cookie Disclosure — Xdplax International",
            isPartOf: { "@id": `${SITE_URL}/#website` },
          },
        ],
      },
    }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <div className="pt-28 pb-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-primary transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-primary/10 text-primary border border-primary/20">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-foreground">
                Privacy Policy &amp; Cookie Notice
              </h1>
              <p className="text-xs text-muted-foreground mt-1">
                Last Updated: September 2026 · Xdplax International Ltd.
              </p>
            </div>
          </div>
        </div>

        <div className="prose prose-slate dark:prose-invert max-w-none text-sm text-muted-foreground leading-relaxed space-y-6 bg-card border border-border p-8 sm:p-12 rounded-3xl shadow-xs">
          {/* Risk Alert Box */}
          <div className="p-6 rounded-2xl bg-destructive/5 border border-destructive/20 text-foreground space-y-2">
            <div className="flex items-center gap-2 font-bold text-sm text-accent uppercase tracking-wider">
              <AlertTriangle className="w-4 h-4" />
              Important Financial Education &amp; Risk Disclosure
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Foreign exchange (Forex) and financial derivatives trading involve substantial risk of loss and are not suitable for all investors. All software tools, algorithmic educational materials, and technical research provided by Xdplax International and FxMint are strictly for technical, informational, and educational purposes. Past performance is no guarantee of future returns.
            </p>
          </div>

          <section className="space-y-3">
            <h2 className="text-lg font-heading font-bold text-foreground">
              1. Overview and Scope
            </h2>
            <p>
              This Privacy Policy explains how Xdplax International (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) collects, uses, shares, and protects your information across our website (<strong>xdplax.com</strong>), enterprise software products (including PlaySafe and XDFastComm), and associated online services.
            </p>
          </section>

          {/* Section 2: Cookies and Google AdSense */}
          <section className="space-y-4 p-6 rounded-2xl bg-muted/40 border border-border/80">
            <h2 className="flex items-center gap-2 font-heading font-bold text-foreground text-base">
              <Cookie className="w-5 h-5 text-primary" />
              2. Cookies &amp; Third-Party Advertising Disclosure (Google AdSense)
            </h2>
            <p className="leading-relaxed">
              We use cookies, web beacons, and similar tracking technologies to enhance your experience, maintain session state, analyze site traffic, and deliver relevant advertisements to our visitors.
            </p>
            <div className="space-y-3 pt-2 text-xs">
              <p className="font-semibold text-foreground">
                Notice Regarding Google Advertising &amp; DoubleClick Cookies:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Third-Party Vendors:</strong> Third-party vendors, including <strong>Google</strong>, use cookies to serve ads based on a user&apos;s prior visits to this website or other websites across the internet.
                </li>
                <li>
                  <strong>Personalized Advertising:</strong> Google&apos;s use of advertising cookies enables it and its partners to serve ads to users based on their visit to our site and/or other sites on the Internet.
                </li>
                <li>
                  <strong>Opting Out of Personalized Advertising:</strong> Users may opt out of personalized advertising at any time by visiting the{" "}
                  <a
                    href="https://www.google.com/settings/ads"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary font-semibold underline inline-flex items-center gap-0.5"
                  >
                    Google Ads Settings <ExternalLink className="w-3 h-3" />
                  </a>.
                </li>
                <li>
                  Alternatively, you can opt out of a third-party vendor&apos;s use of cookies for personalized advertising by visiting the{" "}
                  <a
                    href="https://www.aboutads.info/choices/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary font-semibold underline inline-flex items-center gap-0.5"
                  >
                    www.aboutads.info <ExternalLink className="w-3 h-3" />
                  </a>{" "}
                  or the Network Advertising Initiative opt-out page at{" "}
                  <a
                    href="https://www.networkadvertising.org/choices/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary font-semibold underline inline-flex items-center gap-0.5"
                  >
                    networkadvertising.org <ExternalLink className="w-3 h-3" />
                  </a>.
                </li>
              </ul>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-heading font-bold text-foreground">
              3. Information We Collect
            </h2>
            <p>
              We collect information that you directly provide when filling out contact forms, requesting software engineering consultations, enrolling in academy courses, or communicating with us. This includes:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Full Name, Corporate Email Address, and Phone Number.</li>
              <li>Project scope specifications and technical requirements.</li>
              <li>Device metadata (IP address, browser type, operating system) captured automatically for security auditing and diagnostic logs.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-heading font-bold text-foreground">
              4. How We Use Collected Data
            </h2>
            <p>Collected information is utilized strictly to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Respond to inquiries and fulfill client software engineering contracts.</li>
              <li>Ensure the security, stability, and diagnostic integrity of our cloud infrastructure.</li>
              <li>Deliver technical publications, blog updates, and educational materials.</li>
              <li>Comply with regulatory obligations and prevent fraudulent activity.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-heading font-bold text-foreground">
              5. Data Protection, Security &amp; Encryption
            </h2>
            <p>
              Xdplax International implements enterprise-grade administrative, technical, and physical safeguards. All web communication is encrypted using modern TLS/SSL cryptographic protocols. Access to customer records is restricted under strict Role-Based Access Control (RBAC) and least-privilege principles.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-heading font-bold text-foreground">
              6. User Rights (GDPR &amp; Global Data Protection)
            </h2>
            <p>
              Depending on your jurisdiction, you possess explicit rights regarding your personal information, including:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>The right to access, rectify, or update your personal records.</li>
              <li>The right to request complete data erasure (&quot;Right to be Forgotten&quot;).</li>
              <li>The right to restrict or object to automated data processing.</li>
              <li>The right to data portability.</li>
            </ul>
          </section>

          <section className="space-y-3 pt-4 border-t border-border">
            <h2 className="text-lg font-heading font-bold text-foreground">
              7. Contacting Our Data Protection Officer
            </h2>
            <p>
              For privacy inquiries, cookie preferences, or to exercise your statutory data protection rights, contact us at:
              <br />
              <strong>Email:</strong>{" "}
              <a
                href="mailto:info@xdplax.com"
                className="text-primary hover:underline font-semibold"
              >
                info@xdplax.com
              </a>
              <br />
              <strong>Office:</strong> 27 Edgerly Road, Calabar, Cross River State, Nigeria
              <br />
              <strong>Direct Phone:</strong> +234 706 202 8958 / +234 81 265 73209
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
