import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, Lock, AlertTriangle, ArrowLeft } from "lucide-react";
import { buildSeoMeta, buildBreadcrumbSchema, SITE_URL } from "@/lib/seo";

export const Route = createFileRoute("/privacy")({
  head: () =>
    buildSeoMeta({
      title: "Privacy Policy & Risk Disclosure — Data Security Standards",
      description:
        "Understand how Xdplax International protects user data, adheres to global privacy standards, and discloses risk considerations for foreign exchange market participants.",
      path: "/privacy",
      keywords: ["Privacy Policy", "Data Protection GDPR", "Forex Risk Disclosure"],
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
            name: "Privacy Policy & Risk Disclosure — Xdplax International",
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
                Privacy Policy &amp; Risk Disclosure
              </h1>
              <p className="text-xs text-muted-foreground mt-1">
                Data Protection and Financial Notice · Xdplax International
              </p>
            </div>
          </div>
        </div>

        <div className="prose prose-slate max-w-none text-sm text-muted-foreground leading-relaxed space-y-6 bg-card border border-border p-8 sm:p-12 rounded-3xl shadow-xs">
          {/* Risk Alert Box */}
          <div className="p-6 rounded-2xl bg-destructive/5 border border-destructive/20 text-foreground space-y-2">
            <div className="flex items-center gap-2 font-bold text-sm text-accent uppercase tracking-wider">
              <AlertTriangle className="w-4 h-4" />
              Important Forex &amp; Financial Risk Notice
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Trading Foreign Exchange (Forex) on margin carries a high level of risk and may not be
              suitable for all investors. The high degree of leverage can work against you as well
              as for you. Before deciding to trade foreign exchange, you should carefully consider
              your investment objectives, level of experience, and risk appetite. Past results
              produced by FxMint or educational strategies are no guarantee of future returns.
            </p>
          </div>

          <section className="space-y-3">
            <h2 className="text-lg font-heading font-bold text-foreground">
              1. Information Collection
            </h2>
            <p>
              We collect information that you provide directly to us when filling out consultation
              forms, enrolling in our educational courses, or communicating via WhatsApp/email. This
              information may include your name, email address, phone number, and project scope
              details.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-heading font-bold text-foreground">
              2. How We Use Your Information
            </h2>
            <p>
              We utilize collected data to respond to your inquiries, deliver software updates,
              facilitate student course access, provide technical support, and maintain the security
              and operational integrity of our platforms.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-heading font-bold text-foreground">
              3. Data Security &amp; Encryption
            </h2>
            <p>
              We implement industry-standard administrative, technical, and physical safeguards to
              protect personal information against unauthorized access, destruction, loss, or
              alteration. All web transmissions are protected using TLS/SSL encryption.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-heading font-bold text-foreground">
              4. Third-Party Links &amp; Broker Partners
            </h2>
            <p>
              Our website may contain links to partner brokerage platforms. Xdplax International is
              not responsible for the privacy practices, account opening terms, or content of
              third-party platforms. We recommend reviewing each third-party provider&apos;s privacy
              policy before submitting personal funds or data.
            </p>
          </section>

          <section className="space-y-3 pt-4 border-t border-border">
            <h2 className="text-lg font-heading font-bold text-foreground">
              5. Contacting the Privacy Officer
            </h2>
            <p>
              If you have any questions or concerns regarding our privacy practices, please contact
              us at:
              <br />
              Email:{" "}
              <a
                href="mailto:info@xdplaxInternational.com"
                className="text-primary hover:underline"
              >
                info@xdplaxInternational.com
              </a>
              <br />
              Address: 27 Edgerly Road, Calabar, Cross River State, Nigeria
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
