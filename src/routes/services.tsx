import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Globe,
  Smartphone,
  Monitor,
  Database,
  Brain,
  ShieldCheck,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Layers,
  Code2,
  Cpu,
  Lock,
  BarChart3,
  Server,
  Zap,
} from "lucide-react";

import slide4 from "@/assets/xdplax/slide-4.jpg";
import slide5 from "@/assets/xdplax/slide-5.jpg";
import team3 from "@/assets/xdplax/team/team-3.jpeg";
import team4 from "@/assets/xdplax/team/team-4.jpeg";
import logoImg from "@/assets/xdplax/logo.png";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Enterprise Services — Xdplax International | Software, Cloud & AI" },
      {
        name: "description",
        content:
          "Explore Xdplax International's end-to-end technology services: custom responsive web development, mobile apps, desktop software, ERP/CRM, AI/ML data analytics, and cybersecurity.",
      },
      { property: "og:title", content: "Enterprise Services — Xdplax International" },
    ],
  }),
  component: ServicesPage,
});

const SERVICES = [
  {
    id: "web-dev",
    number: "01",
    icon: Globe,
    title: "Responsive Website & Web App Development",
    subtitle: "High-Performance, Scalable & Conversion-Focused",
    description:
      "We design and build bespoke web portals, progressive web applications (PWAs), and enterprise dashboards that look exceptional on every screen size while delivering sub-second load times and robust SEO.",
    deliverables: [
      "Custom Single-Page & Multi-Page Web Applications",
      "Progressive Web Apps (PWAs) with Offline Caching",
      "Headless CMS & Dynamic API Integrations",
      "Enterprise SaaS Portals & Admin Dashboards",
      "Core Web Vitals & Search Engine Optimization",
    ],
    tech: ["React", "Next.js", "TanStack Start", "TypeScript", "Tailwind CSS", "Node.js"],
  },
  {
    id: "mobile-dev",
    number: "02",
    icon: Smartphone,
    title: "Native & Cross-Platform Mobile Applications",
    subtitle: "iOS & Android Engineered for Engagement",
    description:
      "From consumer fintech to internal corporate field utilities, our mobile engineering team crafts fluid, responsive, and secure mobile apps published to the Apple App Store and Google Play Store.",
    deliverables: [
      "iOS (Swift) & Android (Kotlin) Native Builds",
      "Cross-Platform Flutter & React Native Solutions",
      "Biometric Authentication & Payment Gateway Hooks",
      "Real-Time Push Notifications & Live Sync",
      "App Store & Google Play Release Lifecycle",
    ],
    tech: ["Flutter", "React Native", "Swift", "Kotlin", "Firebase", "WebSockets"],
  },
  {
    id: "desktop-dev",
    number: "03",
    icon: Monitor,
    title: "High-Performance Desktop Applications",
    subtitle: "Mission-Critical Local & Networked Software",
    description:
      "Robust, hardware-accelerated desktop solutions tailored for specialized workflows, offline transaction logging, local hardware peripherals, and trading execution.",
    deliverables: [
      "Cross-Platform Windows, macOS, and Linux Support",
      "Hardware Peripheral & POS Interfacing",
      "Low-Latency Execution & Multithreading",
      "Automated Auto-Update & Crash Reporting",
      "Enterprise Local Database Encryption",
    ],
    tech: ["Electron", "Tauri", "C# / .NET", "Python / Qt", "SQLite", "Rust"],
  },
  {
    id: "erp-crm",
    number: "04",
    icon: Database,
    title: "Custom CRM, ERP & E-Commerce Systems",
    subtitle: "Unifying Operations, Inventory & Revenue Pipelines",
    description:
      "Eliminate fragmented spreadsheets and third-party vendor lock-in with unified Enterprise Resource Planning (ERP), Customer Relationship Management (CRM), and multi-vendor e-commerce engines.",
    deliverables: [
      "Multi-Warehouse Inventory & Supply Chain Tracking",
      "Automated Invoicing, Payroll & Ledger Accounting",
      "Customer Lifecycle, Lead Funnels & Pipeline CRM",
      "Multi-Currency Payment Gateway Processing",
      "Role-Based Access Control (RBAC) & Audit Trails",
    ],
    tech: ["PostgreSQL", "Prisma / Drizzle", "Redis", "Stripe / Paystack", "Docker", "GraphQL"],
  },
  {
    id: "ai-analytics",
    number: "05",
    icon: Brain,
    title: "Artificial Intelligence, Machine Learning & Analytics",
    subtitle: "Transform Raw Data into Competitive Predictive Power",
    description:
      "Harness the latest in machine learning, natural language processing, and big data warehousing to automate complex tasks, forecast market behavior, and generate actionable business intelligence.",
    deliverables: [
      "Predictive Forecasting & Trend Modeling",
      "Generative AI & LLM Workflow Automation",
      "Real-Time Business Intelligence & Executive Dashboards",
      "Computer Vision & Automated Document Parsing",
      "Data Lakehouse & ETL Pipeline Architecture",
    ],
    tech: ["Python", "TensorFlow", "PyTorch", "BigQuery", "Pandas", "Gemini API"],
  },
  {
    id: "cybersecurity",
    number: "06",
    icon: ShieldCheck,
    title: "Information Security, Auditing & Cloud Hardening",
    subtitle: "Protect Your Digital Assets & Customer Data",
    description:
      "Rigorous cybersecurity assessments, automated vulnerability scanning, cloud configuration hardening, and penetration testing to defend against breaches and satisfy global compliance standards.",
    deliverables: [
      "Web & Mobile Application Penetration Testing",
      "Cloud Infrastructure (AWS / GCP) Security Reviews",
      "Data Encryption at Rest and in Transit",
      "API Security & Rate-Limiting Architecture",
      "Disaster Recovery & Redundant Backup Strategies",
    ],
    tech: ["OWASP Standards", "AWS IAM", "Cloudflare", "Docker Security", "Vault", "SSL/TLS"],
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    name: "Discovery & Architecture",
    desc: "We analyze your business objectives, map user journeys, and architect a robust technical blueprint.",
  },
  {
    step: "02",
    name: "UI/UX & Prototyping",
    desc: "Interactive wireframes and polished UI designs ensure seamless user experience before code is written.",
  },
  {
    step: "03",
    name: "Agile Sprint Development",
    desc: "Bi-weekly sprint deliverables with continuous testing, clean modular code, and direct client visibility.",
  },
  {
    step: "04",
    name: "QA & Security Audit",
    desc: "Comprehensive automated unit tests, cross-browser compatibility, and vulnerability penetration checks.",
  },
  {
    step: "05",
    name: "Deployment & CI/CD",
    desc: "Zero-downtime production deployment with automated continuous integration and cloud autoscaling.",
  },
  {
    step: "06",
    name: "SLA & Growth Support",
    desc: "Ongoing 24/7 technical monitoring, security patches, performance tuning, and feature scaling.",
  },
];

function ServicesPage() {
  return (
    <div className="pt-24 pb-20">
      {/* Hero Header */}
      <section className="relative overflow-hidden py-16 lg:py-24 border-b border-border/60">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 opacity-30"
          style={{
            background:
              "radial-gradient(50% 50% at 20% 20%, oklch(0.48 0.16 258 / 0.4), transparent 70%), radial-gradient(40% 40% at 80% 30%, oklch(0.66 0.20 40 / 0.2), transparent 70%)",
          }}
        />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border bg-card/80 text-xs font-bold uppercase tracking-widest text-accent shadow-xs">
              <Sparkles className="w-3.5 h-3.5" />
              Enterprise Engineering Services
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground leading-[1.1]">
              Architecting Digital Products That Move Markets
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              From high-frequency trading tools to full-scale enterprise ERPs and consumer mobile
              applications, Xdplax International delivers engineering excellence that accelerates
              revenue and streamlines operations.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 h-12 px-7 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:brightness-110 shadow-md transition-all"
              >
                Request a Custom Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="#services-grid"
                className="inline-flex items-center gap-2 h-12 px-7 rounded-full border border-border bg-card hover:bg-muted text-foreground font-semibold text-sm transition-all"
              >
                Browse All 6 Divisions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services-grid" className="py-20 border-b border-border/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {SERVICES.map((srv) => {
              const Icon = srv.icon;
              return (
                <div
                  key={srv.id}
                  id={srv.id}
                  className="rounded-3xl border border-border bg-card p-8 sm:p-10 shadow-sm hover:shadow-xl hover:border-primary/50 transition-all flex flex-col justify-between group"
                >
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-border flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                        <Icon className="w-7 h-7 text-primary" />
                      </div>
                      <span className="font-mono text-xl font-bold text-accent">{srv.number}</span>
                    </div>

                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-accent">
                        {srv.subtitle}
                      </span>
                      <h3 className="font-heading text-2xl font-bold text-foreground mt-1">
                        {srv.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                        {srv.description}
                      </p>
                    </div>

                    <div className="space-y-2.5 pt-2">
                      <p className="text-xs uppercase font-bold tracking-wider text-foreground">
                        Key Capabilities:
                      </p>
                      <ul className="space-y-2">
                        {srv.deliverables.map((d, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2.5 text-xs sm:text-sm text-muted-foreground"
                          >
                            <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-8 mt-8 border-t border-border/70 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-1.5">
                      {srv.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-md bg-muted text-[11px] font-mono text-foreground/80 border border-border/50"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:text-accent transition-colors"
                    >
                      Inquire Now →
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Visual Feature Spotlight (slide-4 & slide-5) */}
      <section className="py-20 border-b border-border/60 bg-muted/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-accent">
                Unified Ecosystem
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground">
                One Engineering Partner. Every Modern Device &amp; Form Factor.
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Whether deploying responsive web applications, high-converting checkout funnels,
                educational portals like EduStow, or fintech utilities like XDFastComm, we build
                interconnected ecosystems that delight users and withstand immense scale.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-card border border-border">
                  <div className="font-heading font-bold text-foreground">
                    Responsive Web &amp; Desktop
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Cross-browser, zero layout shift, accessibility compliant.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-card border border-border">
                  <div className="font-heading font-bold text-foreground">
                    iOS, Android &amp; Tablets
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Native performance, push sync, offline persistence.
                  </p>
                </div>
              </div>
              <div className="pt-2">
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:gap-3 transition-all"
                >
                  View our proprietary product portfolio →
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden border border-border shadow-2xl bg-card">
                <img
                  src={slide5}
                  alt="Multi-device applications engineered by Xdplax International"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-card/85 backdrop-blur-md border border-border">
                  <span className="text-xs font-bold uppercase tracking-wider text-accent">
                    Multi-Platform Deployment
                  </span>
                  <p className="text-xs font-semibold text-foreground mt-0.5">
                    Live client deployments across web, tablets, and smartphones.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6-Stage Process */}
      <section className="py-20 border-b border-border/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-accent">
              Methodology &amp; Execution
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground">
              Our 6-Stage Agile Engineering Lifecycle
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground">
              Predictable, transparent, and battle-tested development workflows designed to deliver
              high-quality software on time and within budget.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROCESS_STEPS.map((p) => (
              <div
                key={p.step}
                className="p-7 rounded-2xl border border-border bg-card shadow-xs hover:border-primary/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs font-mono font-bold text-accent">STAGE {p.step}</div>
                  <h3 className="font-heading font-bold text-lg text-foreground mt-2">{p.name}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-2 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Banner */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-border bg-gradient-to-r from-card via-primary/5 to-accent/5 p-8 sm:p-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-2 max-w-2xl">
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-foreground">
                Have a Complex Technical Project in Mind?
              </h3>
              <p className="text-sm text-muted-foreground">
                Let our senior software architects assess your requirements, recommend the ideal
                stack, and provide a clear timeline and milestone breakdown.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:brightness-110 shadow-md transition-all shrink-0"
            >
              <span>Get Free Technical Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
