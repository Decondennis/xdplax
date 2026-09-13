import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, Phone, MessageSquare, Sparkles, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import logoImg from "@/assets/xdplax/logo.png";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/products", label: "Products & Initiatives" },
  { to: "/blog", label: "Insights & Blog" },
  { to: "/academy", label: "Forex Academy" },
  { to: "/fxmint", label: "FxMint" },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 15);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [currentPath]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-xl bg-background/85 border-b border-border/80 shadow-sm shadow-primary/5 py-2.5"
            : "bg-background/40 backdrop-blur-md border-b border-border/40 py-3.5"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Standout Logo */}
          <Link
            to="/"
            className="flex items-center gap-3.5 group relative focus:outline-none"
            aria-label="Xdplax International Home"
          >
            <div className="relative flex items-center justify-center p-1.5 rounded-xl bg-gradient-to-br from-card to-muted border border-border/80 shadow-md group-hover:shadow-lg group-hover:border-primary/50 group-hover:scale-105 transition-all duration-300">
              <div className="absolute inset-0 rounded-xl bg-accent/10 opacity-0 group-hover:opacity-100 blur-sm transition-opacity" />
              <img
                src={logoImg}
                alt="Xdplax International Logo"
                width={42}
                height={42}
                className="w-8 h-8 sm:w-9 sm:h-9 object-contain drop-shadow-sm relative z-10"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold tracking-tight text-lg sm:text-xl text-foreground group-hover:text-primary transition-colors flex items-center gap-1.5 leading-none">
                XDPLAX
                <span className="text-accent font-black tracking-normal">INT&apos;L</span>
              </span>
              <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-muted-foreground mt-0.5">
                Enterprise IT &amp; Forex
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.to === "/" ? currentPath === "/" : currentPath.startsWith(link.to);

              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-3 py-2 rounded-full text-sm font-medium transition-all duration-200 relative ${
                    isActive
                      ? "text-primary font-semibold bg-primary/10 border border-primary/20 shadow-xs"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/70"
                  }`}
                >
                  {link.label}
                  {link.to === "/fxmint" && (
                    <span className="ml-1.5 inline-flex items-center px-1.5 py-0.5 rounded-full text-[10px] font-bold bg-accent text-accent-foreground animate-pulse">
                      Hot
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Header Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://wa.me/2347062028958?text=Hello%20Xdplax%20International,%20I%20would%20like%20to%20inquire%20about%20your%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-border/80 bg-card hover:bg-muted text-foreground text-xs font-semibold shadow-xs hover:border-primary/40 transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-accent" />
              <span>WhatsApp</span>
            </a>
            <Link
              to="/fxmint"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-accent text-accent-foreground text-xs font-bold hover:brightness-110 shadow-sm hover:shadow-accent/25 transition-all"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Join FxMint</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl border border-border bg-card text-foreground hover:bg-muted transition"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer / Slide-over Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="fixed inset-0 bg-background/80 backdrop-blur-md transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-card border-l border-border p-6 shadow-2xl overflow-y-auto flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-border">
                <Link to="/" className="flex items-center gap-3">
                  <img
                    src={logoImg}
                    alt="Xdplax International Logo"
                    className="w-9 h-9 object-contain"
                  />
                  <div>
                    <span className="font-heading font-bold text-lg text-foreground">
                      XDPLAX <span className="text-accent">INT&apos;L</span>
                    </span>
                    <p className="text-[10px] text-muted-foreground uppercase tracking-wider">
                      IT, Software &amp; Forex
                    </p>
                  </div>
                </Link>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-lg border border-border text-muted-foreground hover:text-foreground"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="mt-6 flex flex-col gap-1.5">
                {NAV_LINKS.map((link) => {
                  const isActive =
                    link.to === "/" ? currentPath === "/" : currentPath.startsWith(link.to);
                  return (
                    <Link
                      key={link.to}
                      to={link.to}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold transition ${
                        isActive
                          ? "bg-primary text-primary-foreground shadow-sm"
                          : "text-foreground hover:bg-muted"
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronRight
                        className={`w-4 h-4 ${isActive ? "text-primary-foreground" : "text-muted-foreground"}`}
                      />
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="pt-6 border-t border-border mt-8 space-y-3">
              <Link
                to="/fxmint"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-accent text-accent-foreground font-bold text-sm shadow-md"
              >
                <Sparkles className="w-4 h-4" />
                Join FxMint Traders Circle
              </Link>
              <a
                href="https://wa.me/2347062028958"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-border bg-muted/60 text-foreground font-semibold text-sm hover:bg-muted"
              >
                <MessageSquare className="w-4 h-4 text-accent" />
                Chat on WhatsApp (+234 706 202 8958)
              </a>
              <p className="text-center text-xs text-muted-foreground pt-2">
                27 Edgerly Road, Calabar, Nigeria
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
