import { Link } from "@tanstack/react-router";
import {
  MapPin,
  Mail,
  Phone,
  ArrowRight,
  ShieldCheck,
  Globe2,
  TrendingUp,
  Sparkles,
} from "lucide-react";
import logoImg from "@/assets/xdplax/logo.png";

export function Footer() {
  return (
    <footer className="border-t border-border/80 bg-card/60 backdrop-blur-md relative overflow-hidden">
      {/* Subtle background ambient gradients */}
      <div
        aria-hidden
        className="absolute top-0 right-0 -z-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute bottom-0 left-0 -z-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none"
      />

      {/* Pre-Footer Action Banner */}
      <div className="border-b border-border/60 bg-gradient-to-r from-primary/10 via-card/50 to-accent/10 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-accent/15 text-accent border border-accent/30">
              <Sparkles className="w-3.5 h-3.5" /> Start Your Project or FX Journey
            </span>
            <h3 className="mt-3 font-heading text-2xl sm:text-3xl font-bold text-foreground">
              Ready to build transformative software or master financial markets?
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Partner with Xdplax International for reliable IT engineering, bespoke product
              development, and professional Forex solutions.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 h-11 px-6 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:brightness-110 shadow-md transition-all"
            >
              <span>Schedule a Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/fxmint"
              className="inline-flex items-center gap-2 h-11 px-6 rounded-full border border-border bg-card hover:bg-muted text-foreground font-semibold text-sm transition-all"
            >
              <span>Join FxMint Copier</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-flex items-center gap-3 group">
              <div className="p-2 rounded-xl bg-card border border-border shadow-xs group-hover:border-primary/50 transition">
                <img
                  src={logoImg}
                  alt="Xdplax International Logo"
                  width={40}
                  height={40}
                  className="w-8 h-8 object-contain"
                />
              </div>
              <div>
                <span className="font-heading font-extrabold text-xl tracking-tight text-foreground">
                  XDPLAX <span className="text-accent">INT&apos;L</span>
                </span>
                <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-muted-foreground">
                  Technology · Innovation · Finance
                </p>
              </div>
            </Link>

            <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
              Xdplax International is a premier provider of enterprise software engineering, mobile
              &amp; web solutions, CRM/ERP platforms, AI analytics, and world-class Forex trading
              education &amp; copy services.
            </p>

            <div className="pt-2 space-y-2 text-xs text-muted-foreground">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span>27 Edgerly Road, Calabar, Cross River State, Nigeria</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-accent shrink-0" />
                <a
                  href="mailto:info@xdplax.com"
                  className="hover:text-foreground transition-colors"
                >
                  info@xdplax.com
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                <span>+234 706 202 8958 / +234 81 265 73209</span>
              </div>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-foreground mb-4">
              Enterprise Services
            </h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li>
                <Link to="/services" className="hover:text-primary transition-colors">
                  Custom Web Development
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary transition-colors">
                  Mobile App Development
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary transition-colors">
                  Desktop Applications
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary transition-colors">
                  CRM · ERP &amp; E-Commerce
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary transition-colors">
                  AI, ML &amp; Big Data Analytics
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary transition-colors">
                  Information &amp; Cloud Security
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Products & Initiatives */}
          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-foreground mb-4">
              Products &amp; Ecosystem
            </h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li>
                <Link
                  to="/products"
                  className="hover:text-primary transition-colors flex items-center gap-1.5"
                >
                  <span>XDFastComm</span>
                  <span className="text-[10px] bg-primary/10 text-primary px-1.5 py-0.2 rounded">
                    FinTech
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="hover:text-primary transition-colors flex items-center gap-1.5"
                >
                  <span>EduStow</span>
                  <span className="text-[10px] bg-primary/10 text-primary px-1.5 py-0.2 rounded">
                    EdTech
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="hover:text-primary transition-colors flex items-center gap-1.5"
                >
                  <span>PlaySafe</span>
                  <span className="text-[10px] bg-primary/10 text-primary px-1.5 py-0.2 rounded">
                    Health
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-primary transition-colors">
                  QuickSales Marketplace
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-primary transition-colors">
                  BizKit Suite
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-primary transition-colors">
                  DreamPropellers Initiative
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Forex & Company */}
          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-foreground mb-4">
              Forex &amp; Company
            </h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li>
                <Link to="/academy" className="hover:text-primary transition-colors">
                  Forex Academy
                </Link>
              </li>
              <li>
                <Link to="/fxmint" className="hover:text-primary transition-colors">
                  FxMint Traders Circle
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-primary transition-colors font-semibold text-primary">
                  Tech Journal &amp; Insights
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary transition-colors">
                  About Xdplax Int&apos;l
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary transition-colors">
                  Contact &amp; Support
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-foreground transition-colors font-semibold">Tech Journal</Link>
            <Link to="/terms" className="hover:text-primary transition-colors">
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-primary transition-colors">
                  Privacy Policy &amp; Risk
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Xdplax International. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/blog" className="hover:text-foreground transition-colors font-semibold">Tech Journal</Link>
            <Link to="/terms" className="hover:text-foreground transition-colors">
              Terms of Service
            </Link>
            <Link to="/privacy" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link to="/privacy" className="hover:text-foreground transition-colors">
              Risk Disclosure
            </Link>
            <Link to="/contact" className="hover:text-foreground transition-colors">
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
