import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, FileText, ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms and Conditions — Xdplax International" },
      {
        name: "description",
        content:
          "Terms of service and legal agreement governing the use of Xdplax International websites, applications, and services.",
      },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
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
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-foreground">
                Terms and Conditions
              </h1>
              <p className="text-xs text-muted-foreground mt-1">
                Last updated: January 2026 · Xdplax International
              </p>
            </div>
          </div>
        </div>

        <div className="prose prose-slate max-w-none text-sm text-muted-foreground leading-relaxed space-y-6 bg-card border border-border p-8 sm:p-12 rounded-3xl shadow-xs">
          <section className="space-y-3">
            <h2 className="text-lg font-heading font-bold text-foreground">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing and utilizing any websites, digital products, educational curricula, or
              consulting services provided by <strong>Xdplax International</strong>, you acknowledge
              that you have read, understood, and agreed to be bound by the terms, conditions, and
              notices contained herein.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-heading font-bold text-foreground">
              2. Intellectual Property Rights
            </h2>
            <p>
              All proprietary software, logos, trademarks, visual media, curriculum materials,
              source code, and design architecture associated with Xdplax International, XDFastComm,
              EduStow, PlaySafe, QuickSales, and FxMint are the exclusive intellectual property of
              Xdplax International. Unauthorized reproduction, reverse-engineering, or
              redistribution is strictly prohibited.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-heading font-bold text-foreground">
              3. Software Development Services &amp; SOWs
            </h2>
            <p>
              Custom engineering, app development, and ERP deployments are governed by explicit
              Statements of Work (SOWs) signed between Xdplax International and the client. Project
              milestones, payment schedules, intellectual property transfers, and SLA terms will be
              delineated in respective client agreements.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-heading font-bold text-foreground">
              4. Forex Academy &amp; Educational Disclaimer
            </h2>
            <p>
              The Xdplax Forex Academy provides educational and analytical information only. None of
              the educational content, live sessions, or trade breakdowns constitute individual
              financial, tax, or investment advice. Trading foreign currencies entails risk of
              capital loss.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-heading font-bold text-foreground">
              5. Governing Law &amp; Jurisdiction
            </h2>
            <p>
              These Terms and Conditions shall be governed by and construed in accordance with the
              laws of the Federal Republic of Nigeria. Any disputes arising in connection with these
              terms shall be subject to the exclusive jurisdiction of the appropriate courts in
              Calabar, Cross River State, Nigeria.
            </p>
          </section>

          <section className="space-y-3 pt-4 border-t border-border">
            <h2 className="text-lg font-heading font-bold text-foreground">
              6. Contact Information
            </h2>
            <p>
              For legal inquiries regarding these Terms, contact us at:
              <br />
              <strong>Xdplax International</strong>
              <br />
              27 Edgerly Road, Calabar, Cross River State, Nigeria
              <br />
              Email:{" "}
              <a
                href="mailto:info@xdplaxInternational.com"
                className="text-primary hover:underline"
              >
                info@xdplaxInternational.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
