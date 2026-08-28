import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Sparkles,
  Globe,
  Smartphone,
  Monitor,
  Database,
  Brain,
  ShieldCheck,
  TrendingUp,
  CreditCard,
  GraduationCap,
  HeartPulse,
  ShoppingBag,
  HeartHandshake,
  CheckCircle2,
  Phone,
  MessageSquare,
  ChevronRight,
  Zap,
  Lock,
  Layers,
} from "lucide-react";

import logoImg from "@/assets/xdplax/logo.png";
import slide1 from "@/assets/xdplax/slide-1.jpg";
import slide2 from "@/assets/xdplax/slide-2.jpg";
import slide3 from "@/assets/xdplax/slide-3.jpg";
import slide4 from "@/assets/xdplax/slide-4.jpg";
import slide5 from "@/assets/xdplax/slide-5.jpg";
import whyUs from "@/assets/xdplax/why-us.jpg";
import team1 from "@/assets/xdplax/team/team-1.jpg";
import team2 from "@/assets/xdplax/team/team-2.jpg";
import team3 from "@/assets/xdplax/team/team-3.jpeg";
import team4 from "@/assets/xdplax/team/team-4.jpeg";

import { ENABLED_PRODUCTS } from "@/lib/products";
import { buildSeoMeta, SITE_URL } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () =>
    buildSeoMeta({
      title: "Enterprise Software, IT Solutions & Forex Academy",
      description:
        "Xdplax International delivers high-performance enterprise software development, mobile & web applications, ERP/CRM engineering, AI analytics, Forex Academy, and FxMint automated copy trading.",
      path: "/",
      keywords: [
        "Software Development Company Nigeria",
        "Top IT Firm Calabar",
        "Custom Software Engineering Africa",
        "Best Forex Academy Nigeria",
        "FxMint Automated Copy Trading",
        "FinTech Development Nigeria",
        "EdTech Software EduStow",
        "Women Safety App PlaySafe",
      ],
      jsonLd: {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": `${SITE_URL}/#webpage`,
        url: SITE_URL,
        name: "Xdplax International — Enterprise Software, IT Solutions & Forex Academy",
        description:
          "Enterprise Software Engineering, Responsive Web & Mobile Apps, CRM/ERP, AI/ML, Forex Academy, and FxMint Automated Copier.",
        isPartOf: {
          "@id": `${SITE_URL}/#website`,
        },
        about: {
          "@id": `${SITE_URL}/#organization`,
        },
        mainEntity: {
          "@type": "OfferCatalog",
          name: "Xdplax International Services & Products",
          itemListElement: [
            {
              "@type": "OfferCatalog",
              name: "Software Engineering Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Custom Responsive Web Development",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Native & Cross-Platform Mobile Apps",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Enterprise ERP & CRM Platforms",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "AI & Big Data Analytics",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Cybersecurity & Cloud Hardening",
                  },
                },
              ],
            },
            {
              "@type": "OfferCatalog",
              name: "Financial Education & Copy Trading",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Xdplax Forex Academy",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "FxMint Traders Circle Copy Trading",
                  },
                },
              ],
            },
          ],
        },
      },
    }),
  component: HomePage,
});

/* ----------------------------- Primitives ----------------------------- */

function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 1400;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);

  return (
    <span ref={ref}>
      {n.toLocaleString()}
      {suffix}
    </span>
  );
}

/* -------------------------------- Hero -------------------------------- */

function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 lg:pt-36 lg:pb-28">
      {/* Background Radiance */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-35 pointer-events-none"
        style={{
          background:
            "radial-gradient(55% 55% at 15% 15%, oklch(0.48 0.16 258 / 0.5), transparent 70%), radial-gradient(50% 50% at 85% 25%, oklch(0.66 0.20 40 / 0.3), transparent 70%)",
        }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border bg-card/80 backdrop-blur-sm text-xs font-bold uppercase tracking-widest text-foreground shadow-xs">
                <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
                <span className="text-accent">Enterprise IT</span>
                <span className="text-muted-foreground">·</span>
                <span>Forex Academy</span>
                <span className="text-muted-foreground">·</span>
                <span>Software Lab</span>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground leading-[1.08] tracking-tight">
                Empowering Global Enterprises &amp; Traders with{" "}
                <span className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
                  Intelligent Technology
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
                Xdplax International designs and scales transformative digital products, bespoke
                enterprise software, and institutional-grade Forex trading intelligence for
                forward-thinking businesses and high-performing individuals worldwide.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 h-12 px-7 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:brightness-110 shadow-md transition-all"
                >
                  <span>Explore Services</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/academy"
                  className="inline-flex items-center gap-2 h-12 px-7 rounded-full border border-border bg-card hover:bg-muted text-foreground font-semibold text-sm transition-all"
                >
                  <TrendingUp className="w-4 h-4 text-accent" />
                  <span>Forex Academy</span>
                </Link>
                <Link
                  to="/fxmint"
                  className="inline-flex items-center gap-2 h-12 px-7 rounded-full bg-accent text-accent-foreground font-bold text-sm hover:brightness-110 shadow-md transition-all"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>FxMint Copier</span>
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="pt-6 grid grid-cols-3 gap-6 max-w-lg border-t border-border/60">
                <div>
                  <div className="text-3xl font-heading font-extrabold text-foreground">
                    <Counter to={1342} suffix="+" />
                  </div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">
                    Happy Clients
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-heading font-extrabold text-accent">
                    <Counter to={521} suffix="+" />
                  </div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">
                    Projects Shipped
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-heading font-extrabold text-primary">
                    <Counter to={7460} suffix="+" />
                  </div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">
                    Hours Support
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Hero Visual with Standout Logo Badge (slide-1) */}
          <div className="lg:col-span-5 relative">
            <Reveal delay={0.1}>
              <div className="relative rounded-3xl overflow-hidden border border-border shadow-2xl bg-card group">
                <img
                  src={slide1}
                  alt="Xdplax International Enterprise Digital Solutions"
                  className="w-full h-[440px] object-cover group-hover:scale-103 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-background/90 via-background/25 to-transparent" />

                {/* Standout Refined Logo Overlay */}
                <div className="absolute top-4 right-4 p-3 rounded-2xl bg-card/95 backdrop-blur-md border border-border shadow-xl flex items-center gap-3">
                  <div className="p-1 rounded-lg bg-muted border border-border/80">
                    <img src={logoImg} alt="Xdplax Logo" className="w-9 h-9 object-contain" />
                  </div>
                  <div>
                    <span className="block font-heading font-extrabold text-xs text-foreground tracking-tight">
                      XDPLAX INT&apos;L
                    </span>
                    <span className="block text-[10px] text-accent font-bold uppercase tracking-wider">
                      Verified Technology
                    </span>
                  </div>
                </div>

                {/* Floating FxMint Performance Pill */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-card/90 backdrop-blur-md border border-border shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[11px] uppercase font-bold tracking-wider text-accent">
                        FxMint Traders Circle
                      </span>
                      <p className="text-xs font-semibold text-foreground mt-0.5">
                        Automated, Hands-Free Trade Execution
                      </p>
                    </div>
                    <Link
                      to="/fxmint"
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-accent text-accent-foreground text-xs font-bold hover:brightness-110 transition"
                    >
                      Join →
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- Tech Marquee --------------------------- */

function TechMarquee() {
  const techs = [
    "React 19",
    "Next.js",
    "TanStack Start",
    "TypeScript",
    "Node.js",
    "Python",
    "TensorFlow",
    "PostgreSQL",
    "Flutter",
    "MetaTrader 5",
    "Docker",
    "AWS Cloud",
    "GraphQL",
    "Tailwind CSS",
    "Redis",
    "Cybersecurity Hardening",
  ];
  const list = [...techs, ...techs];

  return (
    <section className="py-10 border-y border-border/60 bg-muted/30 backdrop-blur-sm overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-4 flex items-center justify-between gap-6">
        <span className="text-xs font-bold uppercase tracking-[0.25em] text-muted-foreground">
          Enterprise Technology Stack
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-border via-border/50 to-transparent" />
      </div>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
        <div className="flex w-max animate-marquee gap-3 will-change-transform">
          {list.map((item, idx) => (
            <span
              key={idx}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-2 text-xs font-semibold text-foreground/90 shadow-xs"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------- About Preview ---------------------------- */

function AboutPreview() {
  return (
    <section className="py-20 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <Reveal>
              <span className="text-xs font-bold uppercase tracking-widest text-accent">
                Who We Are
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mt-2 leading-tight">
                A Multi-Disciplinary Powerhouse in Tech &amp; Finance
              </h2>
            </Reveal>

            <Reveal delay={0.05}>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Xdplax International is dedicated to helping organizations build scalable digital
                platforms while guiding individuals and traders to master modern financial markets
                through our proprietary academies and copier technology.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="space-y-3 pt-1">
                {[
                  "Custom Web, Mobile & High-Performance Desktop Engineering",
                  "Turnkey CRM, ERP, and Multi-Vendor E-Commerce Solutions",
                  "Artificial Intelligence, Predictive Modeling & Big Data Analytics",
                  "Forex Trading Academy & Fully Automated FxMint Copier",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 text-xs sm:text-sm text-foreground"
                  >
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="pt-4 flex items-center gap-4">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-accent transition-colors"
                >
                  <span>Learn more about our heritage &amp; leadership</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-6">
            <Reveal delay={0.1}>
              <div className="relative rounded-3xl overflow-hidden border border-border shadow-xl group">
                <img
                  src={whyUs}
                  alt="Xdplax Engineering Team Collaboration"
                  className="w-full h-[380px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-card/90 backdrop-blur-md border border-border shadow-lg flex items-center justify-between">
                  <div>
                    <span className="text-[11px] uppercase font-bold text-accent">
                      Engineering Culture
                    </span>
                    <p className="text-xs font-semibold text-foreground">
                      Precision, Transparency, and Scalable Delivery
                    </p>
                  </div>
                  <Link
                    to="/about"
                    className="px-3.5 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-bold hover:brightness-110 transition"
                  >
                    About Us
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------- Services Preview -------------------------- */

const FEATURED_SERVICES = [
  {
    icon: Globe,
    title: "Responsive Web Development",
    desc: "Single & multi-page applications, PWAs, and high-conversion enterprise portals built for speed and security.",
    link: "/services",
  },
  {
    icon: Smartphone,
    title: "Mobile App Engineering",
    desc: "Fluid iOS (Swift) and Android (Kotlin/Flutter) apps published with biometrics and offline sync.",
    link: "/services",
  },
  {
    icon: Monitor,
    title: "Desktop Applications",
    desc: "Hardware-accelerated, cross-platform desktop systems for specialized workflows and POS integration.",
    link: "/services",
  },
  {
    icon: Database,
    title: "CRM, ERP & E-Commerce",
    desc: "Unified business operations platforms, inventory systems, automated billing, and merchant pipelines.",
    link: "/services",
  },
  {
    icon: Brain,
    title: "AI, ML & Big Data Analytics",
    desc: "Predictive algorithms, business intelligence dashboards, and generative AI workflow automation.",
    link: "/services",
  },
  {
    icon: ShieldCheck,
    title: "Information & Cloud Security",
    desc: "Application penetration testing, vulnerability auditing, SSL hardening, and cloud compliance.",
    link: "/services",
  },
];

function ServicesPreview() {
  return (
    <section className="py-20 border-b border-border/60 bg-muted/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-accent">
              Core Capabilities
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-foreground">
              End-to-End Enterprise Services
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Discover our comprehensive engineering capabilities tailored to launch and scale
              ambitious digital initiatives.
            </p>
          </div>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border bg-card hover:bg-muted text-foreground text-xs font-bold shadow-xs shrink-0 transition"
          >
            <span>View All Services</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURED_SERVICES.map((s, idx) => {
            const Icon = s.icon;
            return (
              <Reveal key={idx} delay={idx * 0.05}>
                <div className="h-full rounded-2xl border border-border bg-card p-7 shadow-xs hover:shadow-xl hover:border-primary/50 hover:-translate-y-1 transition-all flex flex-col justify-between group">
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-heading font-bold text-xl text-foreground">{s.title}</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                  <div className="pt-6 mt-6 border-t border-border/60">
                    <Link
                      to={s.link}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-primary group-hover:text-accent transition-colors"
                    >
                      <span>Explore Service Details</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* -------------------------- Products Preview -------------------------- */

function ProductsPreview() {
  return (
    <section className="py-20 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-center mb-14">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-accent">
              Proprietary Ecosystem
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-foreground">
              Innovative Products Built by Xdplax
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              We engineer breakthrough consumer and enterprise platforms solving real-world
              challenges in FinTech, EdTech, Women&apos;s Health, E-Commerce, and Social Impact.
            </p>
          </div>
          <div className="lg:col-span-6 flex lg:justify-end">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 h-11 px-6 rounded-full bg-primary text-primary-foreground font-semibold text-xs hover:brightness-110 shadow-sm transition"
            >
              <span>Explore All Products &amp; Initiatives</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Featured Mockup Card (slide-5 with device mockups & Xdplax Logo) */}
        <div className="mb-10 rounded-3xl overflow-hidden border border-border shadow-xl bg-card">
          <div className="grid lg:grid-cols-12 items-center">
            <div className="lg:col-span-7 h-[340px] sm:h-[380px] overflow-hidden">
              <img
                src={slide5}
                alt="Xdplax Product Ecosystem Mockups"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="lg:col-span-5 p-8 sm:p-10 space-y-4">
              <span className="text-xs uppercase font-bold text-accent tracking-wider">
                Multi-Platform Suite
              </span>
              <h3 className="font-heading text-2xl font-bold text-foreground">
                XDFastComm, EduStow, PlaySafe &amp; BizKit
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Experience unified digital payment gateways, smart campus record administration, and
                wellness analytics built for high availability.
              </p>
              <div className="pt-2">
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent text-accent-foreground text-xs font-bold hover:brightness-110 shadow-xs transition"
                >
                  <span>View Product Catalog</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Flagship Product Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ENABLED_PRODUCTS.slice(0, 4).map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.id}
                className="p-6 rounded-2xl border border-border bg-card shadow-xs hover:border-primary/50 transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] uppercase font-bold text-accent block">
                    {p.category}
                  </span>
                  <h4 className="font-heading font-bold text-lg text-foreground">{p.name}</h4>
                  <p className="text-xs text-muted-foreground line-clamp-3 leading-relaxed">
                    {p.description}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-border/60">
                  <Link
                    to="/products"
                    className="text-xs font-bold text-primary hover:text-accent transition-colors flex items-center gap-1"
                  >
                    <span>Read More</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ------------------- Dual Forex Academy & FxMint Strip ----------------- */

function ForexAcademyAndFxMint() {
  return (
    <section className="py-20 border-b border-border/60 bg-muted/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-accent">
            Financial Division
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-foreground">
            Master the Currency Markets or Copy the Pros
          </h2>
          <p className="text-sm text-muted-foreground">
            Whether you want to trade independently with institutional knowledge or automate your
            portfolio via our trade copier.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Card 1: Forex Academy (slide-2) */}
          <div className="rounded-3xl border border-border bg-card overflow-hidden shadow-lg hover:border-primary/50 transition-all flex flex-col justify-between group">
            <div>
              <div className="h-56 overflow-hidden relative">
                <img
                  src={slide2}
                  alt="Xdplax Forex Academy Trading Station"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-card/90 backdrop-blur-md border border-border text-xs font-bold text-accent uppercase">
                  Education &amp; Mentorship
                </span>
              </div>
              <div className="p-8 space-y-4">
                <h3 className="font-heading text-2xl font-bold text-foreground">
                  Xdplax Forex Academy
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Learn how institutional order flow moves the $5+ trillion market. Comprehensive
                  3-tier curriculum covering price action, liquidity sweeps, risk psychology, and
                  daily live trading rooms.
                </p>
                <ul className="space-y-2 text-xs text-muted-foreground pt-1">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
                    <span>Free Earn-As-You-Learn starter program</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
                    <span>Daily live chart breakdowns &amp; trade ideas</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="p-8 pt-0">
              <Link
                to="/academy"
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full bg-primary text-primary-foreground text-xs font-bold hover:brightness-110 shadow-xs transition"
              >
                <span>Enroll in Forex Academy</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Card 2: FxMint Traders Circle (slide-3) */}
          <div className="rounded-3xl border border-border bg-card overflow-hidden shadow-lg hover:border-accent/50 transition-all flex flex-col justify-between group">
            <div>
              <div className="h-56 overflow-hidden relative">
                <img
                  src={slide3}
                  alt="FxMint Traders Circle Automated Copy Trading"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-card/90 backdrop-blur-md border border-border text-xs font-bold text-accent uppercase">
                  Automated Trade Copier
                </span>
              </div>
              <div className="p-8 space-y-4">
                <h3 className="font-heading text-2xl font-bold text-foreground">
                  FxMint Traders Circle
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Let senior analysts execute trades on your behalf. Sub-second cloud copy
                  technology links directly to your personal regulated broker account with zero
                  upfront fee.
                </p>
                <ul className="space-y-2 text-xs text-muted-foreground pt-1">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
                    <span>100% Personal capital custody &amp; withdrawals</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
                    <span>Strict stop loss &amp; hard risk controls on every position</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="p-8 pt-0">
              <Link
                to="/fxmint"
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full bg-accent text-accent-foreground text-xs font-bold hover:brightness-110 shadow-xs transition"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Join FxMint Traders Circle</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------- Consultation CTA ------------------------- */

function ConsultationCTA() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-border bg-gradient-to-br from-card via-muted/30 to-card p-8 sm:p-14 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="space-y-4 max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-accent/15 text-accent">
              <Sparkles className="w-3.5 h-3.5" /> Direct Advisory &amp; Consultations
            </div>
            <h3 className="font-heading text-3xl sm:text-4xl font-extrabold text-foreground leading-tight">
              Ready to Accelerate Your Technology or Trading Journey?
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Schedule a consultation with our software architects in Calabar or connect directly on
              WhatsApp to get started immediately.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:brightness-110 shadow-md transition-all"
            >
              <span>Contact Our Team</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://wa.me/2347062028958?text=Hello%20Xdplax%20International,%20I%20would%20like%20to%20inquire%20about%20your%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 h-12 px-8 rounded-full bg-[#25D366] text-white font-bold text-sm shadow-md hover:brightness-110 transition-all"
            >
              <Phone className="w-4 h-4" />
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- Home -------------------------------- */

function HomePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <TechMarquee />
      <AboutPreview />
      <ServicesPreview />
      <ProductsPreview />
      <ForexAcademyAndFxMint />
      <ConsultationCTA />
    </div>
  );
}
