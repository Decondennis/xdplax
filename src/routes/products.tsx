import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  CreditCard,
  GraduationCap,
  HeartPulse,
  ShoppingBag,
  HeartHandshake,
  ExternalLink,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Zap,
  Globe2,
  CheckCircle2,
  Package,
} from "lucide-react";

import { ENABLED_PRODUCTS } from "@/lib/products";
import slide4 from "@/assets/xdplax/slide-4.jpg";
import slide5 from "@/assets/xdplax/slide-5.jpg";
import logoImg from "@/assets/xdplax/logo.png";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products & Initiatives — Xdplax International | Proprietary Tech" },
      {
        name: "description",
        content:
          "Discover Xdplax International's portfolio of proprietary products: XDFastComm, EduStow, PlaySafe, QuickSales, BizKit, and DreamPropellers.",
      },
      { property: "og:title", content: "Products & Initiatives — Xdplax International" },
    ],
  }),
  component: ProductsPage,
});

const ALL_PRODUCTS = [
  ...ENABLED_PRODUCTS,
  {
    id: "bizkit-sendme",
    name: "BizKit & SendMe",
    category: "Business Enablement & Logistics Suite",
    description:
      "BizKit provides micro and small enterprises with integrated bookkeeping, customer management, and digital errands/logistics dispatch via SendMe.",
    cta: "Explore BizKit",
    website: "https://www.xdplaxinternational.com",
    icon: Package,
    brand: "Owned & developed by Xdplax International",
    enabled: true,
  },
];

function ProductsPage() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Products" },
    { id: "FinTech", label: "FinTech & Payments" },
    { id: "Education", label: "EdTech" },
    { id: "Health", label: "Health & Wellness" },
    { id: "Commerce", label: "E-Commerce" },
    { id: "Social", label: "Social Impact" },
  ];

  const filtered = ALL_PRODUCTS.filter((p) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "FinTech")
      return p.category.includes("Payments") || p.category.includes("FinTech");
    if (activeFilter === "Education")
      return p.category.includes("School") || p.category.includes("Education");
    if (activeFilter === "Health")
      return p.category.includes("Health") || p.category.includes("Reproductive");
    if (activeFilter === "Commerce")
      return p.category.includes("Commerce") || p.category.includes("Marketplace");
    if (activeFilter === "Social")
      return p.category.includes("Social") || p.category.includes("Initiative");
    return true;
  });

  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 lg:py-24 border-b border-border/60">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 opacity-35"
          style={{
            background:
              "radial-gradient(50% 50% at 80% 20%, oklch(0.66 0.20 40 / 0.25), transparent 70%), radial-gradient(40% 40% at 20% 40%, oklch(0.48 0.16 258 / 0.35), transparent 70%)",
          }}
        />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border bg-card/80 text-xs font-bold uppercase tracking-widest text-accent shadow-xs">
              <Sparkles className="w-3.5 h-3.5" />
              Proprietary Ecosystem
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground leading-[1.1]">
              Products Built to Empower Industries &amp; Communities
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              In addition to custom client engineering, Xdplax International conceives, designs, and
              scales proprietary digital products across payments, education, healthcare,
              e-commerce, and non-profit development.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#products-catalog"
                className="inline-flex items-center gap-2 h-12 px-7 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:brightness-110 shadow-md transition-all"
              >
                Browse Product Suite
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 h-12 px-7 rounded-full border border-border bg-card hover:bg-muted text-foreground font-semibold text-sm transition-all"
              >
                Partner or License Our IP
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Mockup Visual Spotlight (slide-4 with Xdplax Watermark) */}
      <section className="py-16 border-b border-border/60 bg-muted/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <div className="relative rounded-3xl overflow-hidden border border-border shadow-2xl bg-card group">
                <img
                  src={slide4}
                  alt="XDFastComm, BizKit & Xdplax International ecosystem"
                  className="w-full h-[380px] sm:h-[430px] object-cover group-hover:scale-102 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-background/90 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-card/90 backdrop-blur-md border border-border shadow-lg">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <span className="text-xs uppercase font-bold tracking-wider text-accent">
                        Flagship FinTech Platform
                      </span>
                      <h3 className="font-heading font-bold text-lg text-foreground">
                        XDFastComm &amp; Explore BizKit
                      </h3>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        High-throughput VTU billing, utility payments &amp; enterprise merchant
                        accounts.
                      </p>
                    </div>
                    <a
                      href="https://www.xdfastcomm.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary text-primary-foreground text-xs font-bold shrink-0 hover:brightness-110 shadow-xs transition"
                    >
                      Visit Platform <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-5">
              <span className="text-xs font-bold uppercase tracking-widest text-accent">
                Production-Tested Architecture
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground">
                Engineered for 99.9% Uptime &amp; High Transaction Volumes
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                All Xdplax products share an enterprise-grade cloud foundation: microservices
                architecture, automated CI/CD pipelines, bank-grade encryption, and seamless mobile
                responsiveness.
              </p>
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-xs sm:text-sm text-foreground">
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                  <span>Sub-second payment processing &amp; real-time wallet settlement</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-foreground">
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                  <span>End-to-end data isolation &amp; role-based administrative control</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-foreground">
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                  <span>Accessible across Web, iOS, Android, and Desktop</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog & Filter Bar */}
      <section id="products-catalog" className="py-20 border-b border-border/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-accent">
                Directory
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mt-1">
                Explore the Xdplax Product Portfolio
              </h2>
              <p className="text-sm text-muted-foreground mt-2">
                Filter by domain or browse our entire product and social initiative collection.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setActiveFilter(c.id)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                    activeFilter === c.id
                      ? "bg-primary text-primary-foreground shadow-xs"
                      : "border border-border bg-card text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((product) => {
              const Icon = product.icon;
              return (
                <div
                  key={product.id}
                  className="rounded-3xl border border-border bg-card p-8 shadow-xs hover:shadow-xl hover:border-primary/50 transition-all flex flex-col justify-between group"
                >
                  <div className="space-y-5">
                    <div className="flex items-center justify-between">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-border flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
                        <Icon className="w-7 h-7 text-primary" />
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-accent text-right">
                        {product.category}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-heading text-2xl font-bold text-foreground">
                        {product.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                        {product.description}
                      </p>
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-border/60 flex items-center justify-between">
                    <span className="text-[11px] text-muted-foreground font-medium">
                      {product.brand}
                    </span>
                    {product.website ? (
                      <a
                        href={product.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary text-primary-foreground text-xs font-semibold hover:brightness-110 transition shadow-xs"
                      >
                        {product.cta} <ArrowRight className="w-3 h-3" />
                      </a>
                    ) : (
                      <span className="text-xs font-semibold text-muted-foreground">
                        Coming Soon
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Licensing & White-Label CTA */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-border bg-gradient-to-br from-card via-muted/30 to-card p-8 sm:p-12 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-accent/10 text-accent">
                <Sparkles className="w-3.5 h-3.5" /> Institutional Licensing &amp; White-Label
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-foreground">
                Deploy Xdplax Platforms for Your Organization
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Looking to deploy EduStow across your campus network, white-label XDFastComm for
                corporate payroll/airtime, or integrate PlaySafe APIs? Our enterprise team handles
                custom licensing and deployment.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:brightness-110 shadow-md transition-all shrink-0"
            >
              <span>Contact Enterprise Sales</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
