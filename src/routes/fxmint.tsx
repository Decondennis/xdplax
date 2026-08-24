import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Sparkles,
  TrendingUp,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Lock,
  ArrowRight,
  HelpCircle,
  Clock,
  Smartphone,
  BarChart4,
  AlertTriangle,
} from "lucide-react";

import slide3 from "@/assets/xdplax/slide-3.jpg";
import team2 from "@/assets/xdplax/team/team-2.jpg";
import logoImg from "@/assets/xdplax/logo.png";

export const Route = createFileRoute("/fxmint")({
  head: () => ({
    meta: [
      { title: "FxMint Traders Circle — Xdplax International | Automated Copy Trading" },
      {
        name: "description",
        content:
          "Join FxMint Traders Circle by Xdplax International. Professional Forex copy trading with zero upfront fees, strict risk controls, and automated MetaTrader copier.",
      },
      { property: "og:title", content: "FxMint Traders Circle — Xdplax International" },
    ],
  }),
  component: FxMintPage,
});

const STEPS = [
  {
    step: "01",
    title: "Open Account with Partner Broker",
    desc: "Create and verify your live trading account with our regulated partner broker. Your capital remains under your complete personal custody.",
  },
  {
    step: "02",
    title: "Link to FxMint Copier System",
    desc: "Provide your MT4/MT5 trading account credentials to our secure cloud copier server. We only receive execution rights — withdrawals remain strictly yours.",
  },
  {
    step: "03",
    title: "Automated Trade Execution",
    desc: "Whenever Xdplax senior analysts execute high-probability trades, the orders are mirrored on your account within milliseconds with proportional lot sizes.",
  },
  {
    step: "04",
    title: "Enjoy High-Return Consistency",
    desc: "Monitor your account growth real-time from your phone or desktop. Benefit from professional risk parameters without staring at charts all day.",
  },
];

const FEATURES = [
  {
    icon: Lock,
    title: "100% Capital Custody",
    desc: "You never deposit funds with Xdplax. Your money stays in your personal name with the regulated broker. You can deposit or withdraw anytime.",
  },
  {
    icon: ShieldCheck,
    title: "Strict Stop-Loss & Risk Caps",
    desc: "Every trade is safeguarded by hard stop-losses and predefined risk exposure (1%-2% max). No dangerous martingales or unhedged grids.",
  },
  {
    icon: Zap,
    title: "Sub-Second Cloud Synchronization",
    desc: "Our enterprise VPS infrastructure situated in London and New York data centers ensures near-zero latency execution.",
  },
  {
    icon: Sparkles,
    title: "No-Win, No-Fee Alignment",
    desc: "No expensive upfront monthly subscriptions. We only succeed when your account makes profit — a genuine win-win partnership.",
  },
];

function FxMintPage() {
  return (
    <div className="pt-24 pb-20">
      {/* Hero Header */}
      <section className="relative overflow-hidden py-16 lg:py-24 border-b border-border/60">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 opacity-35"
          style={{
            background:
              "radial-gradient(50% 50% at 20% 20%, oklch(0.66 0.20 40 / 0.35), transparent 70%), radial-gradient(45% 45% at 85% 35%, oklch(0.48 0.16 258 / 0.35), transparent 70%)",
          }}
        />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border bg-card/80 text-xs font-bold uppercase tracking-widest text-accent shadow-xs">
                <Sparkles className="w-3.5 h-3.5" />
                Flagship Trade Copier Service
              </div>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground leading-[1.1]">
                Let the Professionals Trade for You
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
                Stop wasting hours analyzing charts or falling for unreliable signal groups. Connect
                your broker account to <strong>FxMint Traders Circle</strong> and mirror the exact
                setups of Xdplax&apos;s senior market analysts in real time.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="https://wa.me/2347062028958?text=Hello%20FxMint,%20I%20want%20to%20join%20the%20FxMint%20Traders%20Circle%20copier"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 h-12 px-7 rounded-full bg-accent text-accent-foreground font-bold text-sm hover:brightness-110 shadow-md hover:shadow-accent/25 transition-all"
                >
                  <Sparkles className="w-4 h-4" />
                  Join FxMint Traders Circle
                </a>
                <a
                  href="#how-it-works"
                  className="inline-flex items-center gap-2 h-12 px-7 rounded-full border border-border bg-card hover:bg-muted text-foreground font-semibold text-sm transition-all"
                >
                  How It Works
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-border shadow-2xl bg-card">
                <img
                  src={slide3}
                  alt="FxMint Traders Circle Live Trading Strategy"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
                <div className="absolute top-4 right-4 p-3 rounded-2xl bg-card/90 backdrop-blur-md border border-border shadow-md flex items-center gap-2.5">
                  <img src={logoImg} alt="FxMint by Xdplax" className="w-8 h-8 object-contain" />
                  <div>
                    <span className="block font-heading font-bold text-xs text-foreground">
                      FXMINT COPIER
                    </span>
                    <span className="block text-[10px] text-accent font-bold uppercase">
                      Audited Performance
                    </span>
                  </div>
                </div>
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-card/85 backdrop-blur-md border border-border">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-accent">
                        Live Performance
                      </span>
                      <p className="text-sm font-bold text-foreground mt-0.5">
                        Consistent Weekly Compounding
                      </p>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-bold">
                      Zero Upfront Fee
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Freedom Feature (Reusing team-2) */}
      <section className="py-16 border-b border-border/60 bg-muted/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5">
              <div className="rounded-3xl overflow-hidden border border-border shadow-xl group">
                <img
                  src={team2}
                  alt="Mobile trading and financial independence with FxMint"
                  className="w-full h-[360px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-accent">
                Complete Freedom
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground">
                Earn Wherever You Are Without Staring at Charts
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Whether you are commuting, running your business, or spending time with family,
                FxMint replicates trades automatically in the background. You retain full mobile
                access to inspect your MetaTrader positions at any second.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-card border border-border">
                  <div className="font-heading font-bold text-foreground">
                    Hands-Free Automation
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Zero manual button clicking or signal delay execution.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-card border border-border">
                  <div className="font-heading font-bold text-foreground">
                    Complete Withdrawal Control
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Withdraw profits directly to your bank account anytime.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Step Process */}
      <section id="how-it-works" className="py-20 border-b border-border/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-accent">
              Onboarding Process
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground">
              How to Get Started in 4 Easy Steps
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground">
              Simple, transparent, and completely secured through regulated brokerage partners.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STEPS.map((s) => (
              <div
                key={s.step}
                className="p-7 rounded-2xl border border-border bg-card shadow-xs hover:border-accent/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs font-mono font-bold text-accent">STEP {s.step}</div>
                  <h3 className="font-heading font-bold text-lg text-foreground mt-2">{s.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-2 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Features Grid */}
      <section className="py-20 border-b border-border/60 bg-muted/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-accent">
              Safety &amp; Architecture
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground">
              Institutional Risk Controls &amp; Investor Protection
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURES.map((f, idx) => {
              const Icon = f.icon;
              return (
                <div
                  key={idx}
                  className="p-7 rounded-2xl border border-border bg-card shadow-xs hover:border-primary/50 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-heading font-bold text-base text-foreground">{f.title}</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground mt-2 leading-relaxed">
                      {f.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Risk Disclosure Notice */}
      <section className="py-12 border-b border-border/60">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="p-6 rounded-2xl border border-border bg-card flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-accent shrink-0 mt-1" />
            <div className="space-y-1 text-xs text-muted-foreground leading-relaxed">
              <span className="font-bold text-foreground uppercase tracking-wider block">
                Forex Risk Disclosure
              </span>
              Trading Foreign Exchange (Forex) and Contracts for Difference (CFDs) carries a high
              level of risk and may not be suitable for all investors. Past performance of FxMint or
              any trade copier is not indicative of future results. Never invest money you cannot
              afford to lose.
            </div>
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-border bg-gradient-to-r from-card via-accent/10 to-primary/10 p-8 sm:p-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-foreground">
                Ready to Join FxMint Traders Circle?
              </h3>
              <p className="text-sm text-muted-foreground">
                Get the partner broker registration link, copier server setup guide, and onboarding
                assistance on WhatsApp now.
              </p>
            </div>
            <a
              href="https://wa.me/2347062028958?text=Hello%20FxMint,%20please%20send%20me%20the%20onboarding%20link%20for%20FxMint%20Traders%20Circle"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-full bg-accent text-accent-foreground font-bold text-sm hover:brightness-110 shadow-md transition-all shrink-0"
            >
              <Sparkles className="w-4 h-4" />
              <span>Connect on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
