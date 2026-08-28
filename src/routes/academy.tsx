import { createFileRoute, Link } from "@tanstack/react-router";
import {
  TrendingUp,
  BookOpen,
  Award,
  Users,
  CheckCircle,
  HelpCircle,
  ArrowRight,
  Sparkles,
  DollarSign,
  ShieldAlert,
  BarChart2,
  PieChart,
  MessageCircle,
} from "lucide-react";

import slide2 from "@/assets/xdplax/slide-2.jpg";
import slide3 from "@/assets/xdplax/slide-3.jpg";
import team1 from "@/assets/xdplax/team/team-1.jpg";
import logoImg from "@/assets/xdplax/logo.png";
import { buildSeoMeta, buildBreadcrumbSchema, SITE_URL } from "@/lib/seo";

export const Route = createFileRoute("/academy")({
  head: () =>
    buildSeoMeta({
      title: "Forex Academy — Professional FX Trading Education & Live Mentorship",
      description:
        "Master the foreign exchange market with Xdplax Forex Academy. Comprehensive 3-tier curriculum covering Forex fundamentals, institutional Smart Money Concepts (SMC), and advanced risk psychology with live trading desk access.",
      path: "/academy",
      keywords: [
        "Forex Academy Nigeria",
        "Learn Forex Trading Calabar",
        "Smart Money Concepts Course",
        "Earn As You Learn Forex",
        "MetaTrader 4 MT5 Mentorship",
        "Institutional FX Strategy",
      ],
      jsonLd: {
        "@context": "https://schema.org",
        "@graph": [
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Forex Academy", path: "/academy" },
          ]),
          {
            "@type": "Course",
            name: "Forex Fundamentals & Market Mechanics",
            description:
              "Foundational training into currency pair movements, pip valuations, margin calculations, and professional MetaTrader 4/5 setup.",
            provider: { "@id": `${SITE_URL}/#organization` },
            educationalCredentialAwarded: "Certificate of Fundamental Competency",
            isAccessibleForFree: true,
          },
          {
            "@type": "Course",
            name: "Technical Analysis & Smart Money Concepts (SMC)",
            description:
              "Institutional order blocks, liquidity sweeps, fair value gaps (FVG), multi-timeframe top-down market structure, and Fibonacci confluence.",
            provider: { "@id": `${SITE_URL}/#organization` },
            educationalCredentialAwarded: "Certificate of Technical Analysis",
            isAccessibleForFree: false,
          },
          {
            "@type": "Course",
            name: "Risk Management, Trading Psychology & Live Room",
            description:
              "Mastering mathematical risk-of-ruin models, high-probability execution psychology, prop firm funding preparation, and live daily market breakdowns.",
            provider: { "@id": `${SITE_URL}/#organization` },
            educationalCredentialAwarded: "Master Trader Certification",
            isAccessibleForFree: false,
          },
        ],
      },
    }),
  component: AcademyPage,
});

const CURRICULUM = [
  {
    tier: "Stage 01",
    title: "Forex Fundamentals & Market Mechanics",
    level: "Beginner · Free Earn-As-You-Learn",
    description:
      "A complete foundational immersion into how currency pairs move, reading pip values, calculating margin & leverage, and navigating MetaTrader 4 / MetaTrader 5 like a professional.",
    modules: [
      "The Structure of the $5+ Trillion Daily FX Market",
      "Major, Minor & Exotic Currency Pairs Explained",
      "Spread, Pips, Lots, Margin & Leverage Calculations",
      "Platform Mastery: MetaTrader 4, MetaTrader 5 & TradingView",
      "Order Types: Market, Limits, Stops & Trailing Exits",
    ],
  },
  {
    tier: "Stage 02",
    title: "Technical Analysis, Price Action & Market Structure",
    level: "Intermediate · Strategy Builder",
    description:
      "Uncover where institutional algorithms enter and exit trades. Learn high-probability price action patterns, liquidity sweeps, fair value gaps, and key support/resistance zones.",
    modules: [
      "Market Structure & Higher-Timeframe Trend Confirmation",
      "Smart Money Concepts (SMC): Order Blocks & Liquidity Sweeps",
      "Fibonacci Retracement, Extension & Confluence Trading",
      "Key Candlestick Formations & Chart Reversal Patterns",
      "Multi-Timeframe Top-Down Analysis (Weekly down to 15m/5m)",
    ],
  },
  {
    tier: "Stage 03",
    title: "Fundamental Analysis, Risk & Trading Psychology",
    level: "Masterclass · Institutional Discipline",
    description:
      "Transform from an emotional speculator into a disciplined, data-driven market operator. Master macroeconomic calendar releases and rigorous capital protection frameworks.",
    modules: [
      "Central Bank Policies, Interest Rates & CPI Inflation Reports",
      "Trading Non-Farm Payrolls (NFP) and FOMC Statements",
      "Mathematical Risk Management: Max 1% - 2% Risk Per Trade",
      "Trading Psychology: Overcoming FOMO, Revenge Trading & Fear",
      "Comprehensive Trade Journaling & Statistical Backtesting",
    ],
  },
];

const PERKS = [
  {
    icon: BookOpen,
    title: "Structured Self-Paced Modules",
    desc: "Bite-sized video lessons, PDF cheat-sheets, and step-by-step assignments accessible 24/7 on any device.",
  },
  {
    icon: BarChart2,
    title: "Daily Live Market Breakdowns",
    desc: "Join seasoned mentors every morning as they analyze EUR/USD, GBP/USD, Gold (XAU/USD), and US30 in real-time.",
  },
  {
    icon: Users,
    title: "Vibrant Traders Circle Community",
    desc: "Collaborate with thousands of like-minded students, share trade setups, and receive constructive mentor feedback.",
  },
  {
    icon: Sparkles,
    title: "Seamless FxMint Copier Integration",
    desc: "Learn the theory at your own pace while optionally copying our verified live trades via FxMint Traders Circle.",
  },
];

function AcademyPage() {
  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 lg:py-24 border-b border-border/60">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 opacity-35"
          style={{
            background:
              "radial-gradient(50% 50% at 20% 20%, oklch(0.48 0.16 258 / 0.4), transparent 70%), radial-gradient(40% 40% at 80% 40%, oklch(0.66 0.20 40 / 0.25), transparent 70%)",
          }}
        />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border bg-card/80 text-xs font-bold uppercase tracking-widest text-accent shadow-xs">
                <TrendingUp className="w-3.5 h-3.5" />
                Xdplax Forex Academy
              </div>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground leading-[1.1]">
                Master the $5+ Trillion Global FX Market
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
                Eliminate guesswork and emotion. The Xdplax Forex Academy provides a proven,
                step-by-step curriculum taught by seasoned financial traders to guide you from
                foundational concepts to consistent profitability.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="#curriculum"
                  className="inline-flex items-center gap-2 h-12 px-7 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:brightness-110 shadow-md transition-all"
                >
                  Explore Course Curriculum
                  <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  to="/fxmint"
                  className="inline-flex items-center gap-2 h-12 px-7 rounded-full bg-accent text-accent-foreground font-semibold text-sm hover:brightness-110 shadow-md transition-all"
                >
                  <Sparkles className="w-4 h-4" />
                  Try FxMint Copy Trading
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-border shadow-2xl bg-card">
                <img
                  src={slide2}
                  alt="Forex Trading Multi-Screen Desk and Candlestick Analysis"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
                <div className="absolute top-4 right-4 p-3 rounded-2xl bg-card/90 backdrop-blur-md border border-border shadow-md flex items-center gap-2.5">
                  <img src={logoImg} alt="Xdplax Academy" className="w-8 h-8 object-contain" />
                  <div>
                    <span className="block font-heading font-bold text-xs text-foreground">
                      XDPLAX FX ACADEMY
                    </span>
                    <span className="block text-[10px] text-accent font-bold uppercase">
                      Earn As You Learn
                    </span>
                  </div>
                </div>
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-card/85 backdrop-blur-md border border-border">
                  <span className="text-xs font-bold uppercase tracking-wider text-accent">
                    Free Entry Program
                  </span>
                  <p className="text-xs font-semibold text-foreground mt-0.5">
                    Open to beginners with zero prior financial background.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Pillars Strip (Reusing team-1) */}
      <section className="py-16 border-b border-border/60 bg-muted/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5">
              <div className="rounded-3xl overflow-hidden border border-border shadow-lg">
                <img
                  src={team1}
                  alt="Capital growth and Forex risk discipline"
                  className="w-full h-[320px] object-cover"
                />
              </div>
            </div>
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-accent">
                The Xdplax Edge
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground">
                Why Thousands of Students Choose Our Academy
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Most retail traders fail because they rely on unverified indicators and gamble
                without risk parameters. At Xdplax International, we teach institutional price
                delivery — the exact methodology used by bank liquidity providers.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-card border border-border">
                  <div className="font-heading font-bold text-foreground">
                    95% Practical Charting
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Real-time live market analysis instead of outdated textbook theories.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-card border border-border">
                  <div className="font-heading font-bold text-foreground">Strict Risk Defense</div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Preserve your capital first, compound high-probability gains second.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Breakdown */}
      <section id="curriculum" className="py-20 border-b border-border/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-accent">
              Syllabus
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground">
              Comprehensive 3-Stage Trading Curriculum
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground">
              Progress smoothly from basic pip calculations to institutional order flow mastery.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {CURRICULUM.map((c, idx) => (
              <div
                key={idx}
                className="rounded-3xl border border-border bg-card p-8 shadow-sm hover:shadow-xl hover:border-primary/50 transition-all flex flex-col justify-between"
              >
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono font-bold">
                      {c.tier}
                    </span>
                    <span className="text-[11px] font-bold text-accent uppercase">{c.level}</span>
                  </div>

                  <div>
                    <h3 className="font-heading font-bold text-xl text-foreground">{c.title}</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground mt-2.5 leading-relaxed">
                      {c.description}
                    </p>
                  </div>

                  <div className="pt-2 space-y-2">
                    <p className="text-xs uppercase font-bold tracking-wider text-foreground">
                      Included Modules:
                    </p>
                    <ul className="space-y-2">
                      {c.modules.map((m, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-xs text-muted-foreground"
                        >
                          <CheckCircle className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                          <span>{m}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-border/70">
                  <a
                    href="https://wa.me/2347062028958?text=Hello%20Xdplax%20Academy,%20I%20am%20interested%20in%20enrolling%20in%20Stage%20"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full bg-primary text-primary-foreground text-xs font-bold hover:brightness-110 transition shadow-xs"
                  >
                    <span>Enroll in This Stage</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Perks Grid */}
      <section className="py-20 border-b border-border/60 bg-muted/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-accent">
              Student Experience
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground">
              Everything You Need for Long-Term Market Success
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PERKS.map((p, i) => {
              const Icon = p.icon;
              return (
                <div
                  key={i}
                  className="p-7 rounded-2xl border border-border bg-card shadow-xs hover:border-primary/50 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-heading font-bold text-base text-foreground">{p.title}</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground mt-2 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Community CTA */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-border bg-gradient-to-br from-card via-muted/40 to-card p-8 sm:p-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-accent/15 text-accent">
                <MessageCircle className="w-3.5 h-3.5" /> Telegram &amp; WhatsApp Trading Rooms
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-foreground">
                Join the Xdplax Traders Circle Community Today
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Connect with mentors, ask technical questions on live charts, and receive timely
                market announcements on your mobile phone.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href="https://wa.me/2347062028958?text=Hello%20Xdplax,%20I%20want%20to%20join%20the%20Forex%20Academy%20community"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-full bg-[#25D366] text-white font-semibold text-sm hover:brightness-110 shadow-md transition-all"
              >
                Join via WhatsApp
              </a>
              <Link
                to="/fxmint"
                className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-full bg-accent text-accent-foreground font-semibold text-sm hover:brightness-110 shadow-md transition-all"
              >
                Explore FxMint Copier
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
