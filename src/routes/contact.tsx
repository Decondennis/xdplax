import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  MapPin,
  Mail,
  Phone,
  MessageSquare,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Building2,
  Sparkles,
} from "lucide-react";

import { sendContactMessage } from "@/lib/contact";
import logoImg from "@/assets/xdplax/logo.png";
import { buildSeoMeta, buildBreadcrumbSchema, SITE_URL, COMPANY_DETAILS } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () =>
    buildSeoMeta({
      title: "Contact & Consultations — Calabar Head Office & Global Inquiries",
      description:
        "Connect with Xdplax International for custom enterprise software development, mobile app engineering, Forex Academy enrollment, or FxMint copy trading consultations.",
      path: "/contact",
      keywords: [
        "Contact Xdplax International",
        "Software Development Company Calabar Phone Number",
        "Xdplax Office Address 27 Edgerly Road",
        "Forex Academy Admission Nigeria",
        "IT Consultation Cross River State",
      ],
      jsonLd: {
        "@context": "https://schema.org",
        "@graph": [
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Contact Us", path: "/contact" },
          ]),
          {
            "@type": "ContactPage",
            "@id": `${SITE_URL}/contact/#webpage`,
            url: `${SITE_URL}/contact`,
            name: "Contact Xdplax International",
            description:
              "Connect with Xdplax International for custom enterprise software development, mobile app engineering, Forex Academy enrollment, or FxMint copy trading consultations.",
            mainEntity: {
              "@type": "LocalBusiness",
              name: COMPANY_DETAILS.name,
              telephone: COMPANY_DETAILS.telephones,
              email: COMPANY_DETAILS.email,
              address: {
                "@type": "PostalAddress",
                streetAddress: COMPANY_DETAILS.address.streetAddress,
                addressLocality: COMPANY_DETAILS.address.addressLocality,
                addressRegion: COMPANY_DETAILS.address.addressRegion,
                addressCountry: COMPANY_DETAILS.address.addressCountry,
              },
            },
          },
          {
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Where is Xdplax International headquartered?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Our corporate headquarters is located at 27 Edgerly Road, Calabar, Cross River State, Nigeria. We also operate distributed engineering nodes serving global clients.",
                },
              },
              {
                "@type": "Question",
                name: "How soon will I receive a response to my project inquiry?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Our technical and advisory teams reply to all form submissions and emails within 1 business day. For immediate assistance, you can reach out directly via WhatsApp (+234 706 202 8958).",
                },
              },
              {
                "@type": "Question",
                name: "How does the free Forex Academy Earn-As-You-Learn program work?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "You can enroll in our foundational trading course completely free by opening and funding your trading account with our verified partner broker.",
                },
              },
              {
                "@type": "Question",
                name: "Can I commission a custom ERP or mobile application?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. We offer turnkey development services tailored to your exact industry specifications — complete with discovery, design, development, cloud deployment, and ongoing SLA maintenance.",
                },
              },
            ],
          },
        ],
      },
    }),
  component: ContactPage,
});

const FAQS = [
  {
    q: "Where is Xdplax International headquartered?",
    a: "Our corporate headquarters is located at 27 Edgerly Road, Calabar, Cross River State, Nigeria. We also operate distributed engineering nodes serving clients across the UK, US, and Europe.",
  },
  {
    q: "How soon will I receive a response to my project inquiry?",
    a: "Our technical and advisory teams reply to all form submissions and emails within 1 business day. For immediate assistance, feel free to reach out directly via WhatsApp (+234 706 202 8958).",
  },
  {
    q: "How does the free Forex Academy Earn-As-You-Learn program work?",
    a: "You can enroll in our foundational trading course completely free by opening and funding your trading account with our verified partner broker.",
  },
  {
    q: "Can I commission a custom ERP or mobile application?",
    a: "Yes. We offer turnkey development services tailored to your exact industry specifications — complete with discovery, design, development, cloud deployment, and ongoing SLA maintenance.",
  },
];

function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "sending") return;

    const form = e.currentTarget;
    const formData = new FormData(form);
    setStatus("sending");
    setErrorMessage("");

    try {
      await sendContactMessage({
        data: {
          name: String(formData.get("name") ?? ""),
          email: String(formData.get("email") ?? ""),
          phone: String(formData.get("phone") ?? ""),
          subject: String(formData.get("subject") ?? "Inquiry via Website"),
          message: String(formData.get("message") ?? ""),
          origin: window.location.origin,
        },
      });
      setStatus("sent");
      form.reset();
    } catch (err: unknown) {
      console.error("Submission failed", err);
      setStatus("error");
      const msg =
        err instanceof Error
          ? err.message
          : "Failed to transmit message. Please contact us via WhatsApp.";
      setErrorMessage(msg);
    }
  };

  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 lg:py-20 border-b border-border/60">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 opacity-30"
          style={{
            background:
              "radial-gradient(50% 50% at 20% 30%, oklch(0.48 0.16 258 / 0.4), transparent 70%), radial-gradient(40% 40% at 80% 40%, oklch(0.66 0.20 40 / 0.25), transparent 70%)",
          }}
        />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border bg-card/80 text-xs font-bold uppercase tracking-widest text-accent shadow-xs">
              <Sparkles className="w-3.5 h-3.5" />
              Direct Support &amp; Advisory
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground leading-[1.1]">
              Let&apos;s Build What&apos;s Next Together
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Have a software project in mind, need guidance on Forex training, or want to discuss
              enterprise product licensing? Our team is standing by.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content: Info & Form */}
      <section className="py-20 border-b border-border/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Left: Contact Coordinates */}
            <div className="lg:col-span-5 space-y-8">
              <div className="p-8 rounded-3xl border border-border bg-card shadow-sm space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-2xl bg-muted/60 border border-border">
                    <img
                      src={logoImg}
                      alt="Xdplax International"
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-foreground">
                      Xdplax International
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      Enterprise Technology &amp; Financial Education
                    </p>
                  </div>
                </div>

                <div className="space-y-4 pt-2">
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                        Head Office Address
                      </h4>
                      <p className="text-sm font-semibold text-foreground mt-0.5 leading-relaxed">
                        27 Edgerly Road, Calabar, Cross River State, Nigeria
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                        Customer Care &amp; WhatsApp Lines
                      </h4>
                      <div className="space-y-0.5 mt-1 text-sm font-semibold text-foreground">
                        <p>+234 706 202 8958 (Primary / WhatsApp)</p>
                        <p>+234 81 265 73209</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                        Official Emails
                      </h4>
                      <div className="space-y-0.5 mt-1 text-sm font-semibold text-foreground">
                        <p>
                          <a
                            href="mailto:info@xdplax.com"
                            className="hover:text-primary transition-colors"
                          >
                            info@xdplax.com
                          </a>
                        </p>
                        <p>
                          <a
                            href="mailto:contact@xdplax.com"
                            className="hover:text-primary transition-colors"
                          >
                            contact@xdplax.com
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-muted border border-border flex items-center justify-center text-muted-foreground shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                        Business Hours
                      </h4>
                      <p className="text-sm text-foreground mt-0.5">
                        Monday – Friday: 8:00 AM – 6:00 PM (WAT)
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        Emergency server ops &amp; FX trade desk: 24/7
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-border/70">
                  <a
                    href="https://wa.me/2347062028958?text=Hello%20Xdplax%20International,%20I%20would%20like%20to%20chat%20with%20an%20advisor"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 rounded-2xl bg-[#25D366] text-white font-bold text-sm shadow-md hover:brightness-110 transition-all"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Instant Chat on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Interactive Inquiry Form */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-10 rounded-3xl border border-border bg-card shadow-sm">
                <div className="mb-6">
                  <h3 className="font-heading text-2xl font-bold text-foreground">
                    Send a Message
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                    Fill in your details below and our team will get back to you promptly.
                  </p>
                </div>

                {status === "sent" ? (
                  <div className="p-8 rounded-2xl bg-primary/10 border border-primary/20 text-center space-y-4 animate-fade-up">
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h4 className="font-heading font-bold text-xl text-foreground">
                      Message Received!
                    </h4>
                    <p className="text-sm text-muted-foreground max-w-md mx-auto">
                      Thank you for reaching out to Xdplax International. A project director or
                      advisory specialist will contact you within one business day.
                    </p>
                    <button
                      type="button"
                      onClick={() => setStatus("idle")}
                      className="px-6 py-2.5 rounded-full bg-primary text-primary-foreground text-xs font-bold hover:brightness-110 transition"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold uppercase tracking-wider text-foreground">
                          Your Full Name <span className="text-accent">*</span>
                        </label>
                        <input
                          required
                          name="name"
                          type="text"
                          placeholder="e.g. Alexander Cole"
                          className="w-full h-12 px-4 rounded-xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none text-sm transition"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold uppercase tracking-wider text-foreground">
                          Email Address <span className="text-accent">*</span>
                        </label>
                        <input
                          required
                          name="email"
                          type="email"
                          placeholder="e.g. alexander@example.com"
                          className="w-full h-12 px-4 rounded-xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none text-sm transition"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold uppercase tracking-wider text-foreground">
                          Phone / WhatsApp Number
                        </label>
                        <input
                          name="phone"
                          type="tel"
                          placeholder="e.g. +234 800 000 0000"
                          className="w-full h-12 px-4 rounded-xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none text-sm transition"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold uppercase tracking-wider text-foreground">
                          Department / Topic
                        </label>
                        <select
                          name="subject"
                          className="w-full h-12 px-4 rounded-xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none text-sm transition"
                        >
                          <option value="Enterprise Software Inquiry">
                            Enterprise Software / App Dev
                          </option>
                          <option value="Forex Academy Enrollment">Forex Academy Enrollment</option>
                          <option value="FxMint Copy Trading Inquiry">FxMint Traders Circle</option>
                          <option value="Product Licensing (XDFastComm/EduStow)">
                            Product Licensing / Partnerships
                          </option>
                          <option value="General Corporate Inquiry">
                            General Corporate Inquiry
                          </option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-foreground">
                        Detailed Message <span className="text-accent">*</span>
                      </label>
                      <textarea
                        required
                        name="message"
                        rows={5}
                        placeholder="Tell us about your project scope, target timeline, or Forex questions..."
                        className="w-full p-4 rounded-xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none text-sm transition resize-none"
                      />
                    </div>

                    {status === "error" && (
                      <div className="p-4 rounded-xl bg-destructive/10 border border-destructive/20 text-xs text-destructive flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-12 px-8 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:brightness-110 shadow-md transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {status === "sending" ? (
                        <span>Transmitting Message...</span>
                      ) : (
                        <>
                          <span>Submit Message</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-accent">
              Assistance &amp; FAQs
            </span>
            <h2 className="font-heading text-3xl font-bold text-foreground">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-border bg-card shadow-xs space-y-2"
              >
                <div className="flex items-start gap-2.5">
                  <HelpCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <h4 className="font-heading font-bold text-base text-foreground">{faq.q}</h4>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed pl-7">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
