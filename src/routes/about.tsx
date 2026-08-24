import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  CheckCircle2,
  Users,
  Target,
  Award,
  Globe,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Cpu,
  TrendingUp,
  MapPin,
  Clock,
  HeartHandshake,
} from "lucide-react";

import logoImg from "@/assets/xdplax/logo.png";
import slide1 from "@/assets/xdplax/slide-1.jpg";
import whyUs from "@/assets/xdplax/why-us.jpg";
import team1 from "@/assets/xdplax/team/team-1.jpg";
import team2 from "@/assets/xdplax/team/team-2.jpg";
import team3 from "@/assets/xdplax/team/team-3.jpeg";
import team4 from "@/assets/xdplax/team/team-4.jpeg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Xdplax International | Enterprise IT & Forex Powerhouse" },
      {
        name: "description",
        content:
          "Discover Xdplax International's journey, mission, core values, leadership team, and engineering capabilities delivering global IT solutions and Forex mastery.",
      },
      { property: "og:title", content: "About Us — Xdplax International" },
      {
        property: "og:description",
        content:
          "Learn about Xdplax International's multi-disciplinary engineering prowess, proprietary products, and Forex academy.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 lg:py-24 border-b border-border/60">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 opacity-35"
          style={{
            background:
              "radial-gradient(50% 50% at 15% 20%, oklch(0.35 0.15 258 / 0.5), transparent 70%), radial-gradient(45% 45% at 85% 30%, oklch(0.66 0.20 40 / 0.2), transparent 70%)",
          }}
        />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border bg-card/80 text-xs font-bold uppercase tracking-widest text-accent shadow-xs">
                <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
                About Xdplax International
              </div>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground leading-[1.1]">
                Pioneering Digital Innovation &amp; Financial Excellence
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
                Founded on the principles of engineering precision and financial empowerment, Xdplax
                International bridges the gap between enterprise software development, proprietary
                consumer technologies, and professional financial market mastery.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 h-12 px-7 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:brightness-110 shadow-md transition-all"
                >
                  Explore Capabilities
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 h-12 px-7 rounded-full border border-border bg-card hover:bg-muted text-foreground font-semibold text-sm transition-all"
                >
                  Contact Our Team
                </Link>
              </div>
            </div>

            {/* Standout Logo & Hero Graphic */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border border-border shadow-2xl bg-card">
                <img
                  src={slide1}
                  alt="Xdplax International Leadership & Excellence"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                <div className="absolute top-4 right-4 p-3 rounded-2xl bg-card/90 backdrop-blur-md border border-border shadow-xl flex items-center gap-3">
                  <img src={logoImg} alt="Xdplax Logo Mark" className="w-10 h-10 object-contain" />
                  <div>
                    <span className="block font-heading font-extrabold text-sm text-foreground">
                      XDPLAX INT&apos;L
                    </span>
                    <span className="block text-[10px] text-accent font-bold uppercase tracking-wider">
                      Verified Enterprise
                    </span>
                  </div>
                </div>
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-card/85 backdrop-blur-md border border-border">
                  <p className="text-xs text-muted-foreground uppercase font-bold tracking-widest text-accent">
                    Our Mission
                  </p>
                  <p className="mt-1 font-semibold text-sm text-foreground">
                    Empowering organizations and traders with scalable technology, data-driven
                    systems, and world-class market education.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Identity / The Story of the Logo */}
      <section className="py-20 border-b border-border/60 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative p-8 rounded-3xl bg-gradient-to-br from-card to-background border border-border/80 shadow-2xl flex flex-col items-center text-center max-w-xs w-full">
                <div className="absolute inset-0 rounded-3xl bg-primary/5 blur-xl pointer-events-none" />
                <div className="w-28 h-28 p-3 rounded-2xl bg-muted/60 border border-border shadow-inner flex items-center justify-center mb-5">
                  <img
                    src={logoImg}
                    alt="Refined Xdplax Isometric Cube Logo"
                    className="w-full h-full object-contain drop-shadow-md"
                  />
                </div>
                <h3 className="font-heading font-extrabold text-xl text-foreground">
                  The Xdplax Hexagon
                </h3>
                <span className="text-xs font-semibold text-accent uppercase tracking-widest mt-1">
                  Synergy · Ascent · Fortitude
                </span>
                <p className="text-xs text-muted-foreground mt-3 leading-relaxed">
                  Our isometric layered cube reflects multidimensional solutions: robust foundation,
                  vibrant catalyst, and elevated technological horizons.
                </p>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-5">
              <span className="text-xs font-bold uppercase tracking-widest text-accent">
                Our Heritage &amp; Ethos
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground">
                Building Resilient Systems for a Fast-Moving World
              </h2>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                Xdplax International was established to provide holistic digital transformation and
                financial education under one unified banner. We observed that modern businesses
                require not just code, but high-leverage strategic systems — from enterprise ERPs
                that run supply chains to smart fintech platforms that handle millions in
                transactions.
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                Simultaneously, through the Xdplax Forex Academy and FxMint Traders Circle, we
                opened up Wall Street-grade trading intelligence to aspiring individuals and
                institutional participants alike, demystifying the $5+ trillion daily currency
                market.
              </p>
              <div className="grid sm:grid-cols-3 gap-4 pt-4">
                <div className="p-4 rounded-2xl bg-card border border-border">
                  <div className="text-2xl font-heading font-extrabold text-primary">1,342+</div>
                  <div className="text-xs font-semibold text-foreground mt-1">
                    Satisfied Clients
                  </div>
                  <div className="text-[11px] text-muted-foreground mt-0.5">
                    Across Africa &amp; Worldwide
                  </div>
                </div>
                <div className="p-4 rounded-2xl bg-card border border-border">
                  <div className="text-2xl font-heading font-extrabold text-accent">521+</div>
                  <div className="text-xs font-semibold text-foreground mt-1">Digital Products</div>
                  <div className="text-[11px] text-muted-foreground mt-0.5">
                    Apps, ERPs &amp; Web Portals
                  </div>
                </div>
                <div className="p-4 rounded-2xl bg-card border border-border">
                  <div className="text-2xl font-heading font-extrabold text-primary">7,460+</div>
                  <div className="text-xs font-semibold text-foreground mt-1">Hours of Support</div>
                  <div className="text-[11px] text-muted-foreground mt-0.5">
                    Continuous Monitoring
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us & Team Culture */}
      <section className="py-20 border-b border-border/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-accent">
                Why Partner With Us
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground">
                Engineered with Precision, Driven by Results
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                Whether deploying a mission-critical mobile application, integrating secure fintech
                gateways, or participating in automated trading, our cross-functional team ensures
                unparalleled reliability and measurable ROI.
              </p>

              <div className="space-y-4 pt-2">
                {[
                  {
                    t: "End-to-End Product Lifecycle",
                    d: "From concept architecture and wireframing to production deployment and 24/7 reliability management.",
                  },
                  {
                    t: "Multi-Disciplinary Specialization",
                    d: "Full-stack engineers, cloud architects, UI/UX strategists, and seasoned financial market analysts under one roof.",
                  },
                  {
                    t: "Transparent Collaboration",
                    d: "Clear sprint milestones, real-time reporting, and zero hidden overheads across all contracts and initiatives.",
                  },
                  {
                    t: "Proven Track Record",
                    d: "Trusted by educational institutions, financial traders, retail operators, and healthcare innovators.",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3.5">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-foreground text-sm sm:text-base">
                        {item.t}
                      </h4>
                      <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden border border-border shadow-xl group">
                <img
                  src={whyUs}
                  alt="Collaborative teamwork at Xdplax International"
                  className="w-full h-[450px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-card/90 backdrop-blur-md border border-border shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase font-bold tracking-wider text-accent">
                        Engineering Hub
                      </p>
                      <h4 className="font-heading font-bold text-foreground">
                        Collaborative Development Center
                      </h4>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold">
                      Calabar, NG &amp; Remote
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Domain Expertise Pillars (Reusing team-1, team-2, team-3, team-4) */}
      <section className="py-20 border-b border-border/60 bg-muted/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-accent">
              Core Competencies
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground">
              Our Multi-Disciplinary Domain Expertise
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground">
              Explore the four cornerstones of Xdplax International&apos;s technological and market
              prowess.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-xs hover:shadow-lg hover:border-primary/50 transition-all group">
              <div className="h-44 overflow-hidden relative">
                <img
                  src={team1}
                  alt="Financial analytics and wealth growth"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
              </div>
              <div className="p-5 space-y-2">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-accent uppercase">
                  <TrendingUp className="w-3.5 h-3.5" /> Forex &amp; Trading
                </div>
                <h3 className="font-heading font-bold text-base text-foreground">
                  Forex Academy &amp; Market Intelligence
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Institutional trading mentorship, signal modeling, and risk-controlled copy
                  execution.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-xs hover:shadow-lg hover:border-primary/50 transition-all group">
              <div className="h-44 overflow-hidden relative">
                <img
                  src={team2}
                  alt="Mobile trading and fintech accessibility"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
              </div>
              <div className="p-5 space-y-2">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-accent uppercase">
                  <Globe className="w-3.5 h-3.5" /> Mobile Trading
                </div>
                <h3 className="font-heading font-bold text-base text-foreground">
                  FxMint Copier &amp; Mobile Freedom
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Seamless MetaTrader copier technology allowing users to earn on autopilot wherever
                  they go.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-xs hover:shadow-lg hover:border-primary/50 transition-all group">
              <div className="h-44 overflow-hidden relative">
                <img
                  src={team3}
                  alt="Application ecosystem and software development"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
              </div>
              <div className="p-5 space-y-2">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-accent uppercase">
                  <Cpu className="w-3.5 h-3.5" /> Software Dev
                </div>
                <h3 className="font-heading font-bold text-base text-foreground">
                  Web, Mobile &amp; Desktop Systems
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  High-performance custom software, responsive web portals, and cross-platform
                  native apps.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-xs hover:shadow-lg hover:border-primary/50 transition-all group">
              <div className="h-44 overflow-hidden relative">
                <img
                  src={team4}
                  alt="Cloud infrastructure and artificial intelligence"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
              </div>
              <div className="p-5 space-y-2">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-accent uppercase">
                  <ShieldCheck className="w-3.5 h-3.5" /> Cloud &amp; AI
                </div>
                <h3 className="font-heading font-bold text-base text-foreground">
                  Cybersecurity &amp; AI Analytics
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Enterprise penetration testing, hardened cloud infrastructure, and predictive
                  machine learning models.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Headquarter Coordinates & CTA */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-border bg-gradient-to-br from-card via-muted/40 to-card p-8 sm:p-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <div className="flex items-center gap-2 text-accent font-bold text-xs uppercase tracking-wider">
                <MapPin className="w-4 h-4" /> Global Reach · Local Roots
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-foreground">
                Visit Our Headquarters or Schedule a Virtual Discovery Session
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Located at <strong>27 Edgerly Road, Calabar, Cross River State, Nigeria</strong>. We
                welcome business leaders, students, and traders for in-person consultations and
                global video conferences.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:brightness-110 shadow-md transition-all"
              >
                Schedule Appointment
              </Link>
              <a
                href="https://wa.me/2347062028958"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-full border border-border bg-card hover:bg-muted text-foreground font-semibold text-sm transition-all"
              >
                WhatsApp Direct
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
