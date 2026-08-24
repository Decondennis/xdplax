import {
  CreditCard,
  GraduationCap,
  HeartPulse,
  ShoppingBag,
  HeartHandshake,
  type LucideIcon,
} from "lucide-react";

/**
 * Xdplax International — Products & Initiatives.
 *
 * Each entry renders as a card in the "Our Products & Initiatives" section.
 * To add a new product/initiative, add one object to `PRODUCTS` (and set
 * `enabled: true`). To hide a product temporarily without deleting its
 * configuration, set `enabled: false`.
 */

export type Product = {
  id: string;
  name: string;
  category: string;
  description: string;
  /** CTA button label. */
  cta: string;
  /**
   * Production website URL. Placeholder values below MUST be replaced with
   * the real production URLs. While empty, the CTA renders as a non-link
   * "coming soon" state instead of a broken link.
   */
  website: string;
  /**
   * Logo image path (served from /public). Leave unset while no logo exists —
   * the card shows the icon placeholder instead. To add a logo, drop the file
   * in `public/assets/products/` (e.g. `xdfastcomm-logo.png`) and set this to
   * e.g. "/assets/products/xdfastcomm-logo.png".
   */
  logo?: string;
  /** Icon shown as the visual placeholder when no logo is provided. */
  icon: LucideIcon;
  /** Parent-org attribution shown on the card. */
  brand: string;
  enabled: boolean;
};

export const PRODUCTS: Product[] = [
  {
    id: "xdfastcomm",
    name: "XDFastComm",
    category: "Digital Payments / FinTech Platform",
    description:
      "XDFastComm is a digital payment and utility services platform designed to simplify payments, airtime, data, bills, and other digital transactions through a convenient and reliable platform.",
    cta: "Visit XDFastComm",
    website: "https://www.xdfastcomm.com", // TODO: replace with production URL
    // logo: "/assets/products/xdfastcomm-logo.png" // set when logo available
    icon: CreditCard,
    brand: "Owned & developed by Xdplax International",
    enabled: true,
  },
  {
    id: "edustow",
    name: "EduStow",
    category: "School Management System",
    description:
      "EduStow is a comprehensive school management platform designed to help educational institutions manage students, teachers, academic activities, administration, records, and other essential school operations from one centralized system.",
    cta: "Visit EduStow",
    website: "https://www.edustow.com", // TODO: replace with production URL
    // logo: "/assets/products/edustow-logo.png" // set when logo available
    icon: GraduationCap,
    brand: "Owned & developed by Xdplax International",
    enabled: true,
  },
  {
    id: "playsafe",
    name: "PlaySafe",
    category: "Women's Reproductive Health / Wellness Platform",
    description:
      "PlaySafe is a smart reproductive health and wellness platform designed to help users track menstrual cycles, understand fertility patterns, monitor pregnancy-related information, and access useful reproductive health resources.",
    cta: "Visit PlaySafe",
    website: "https://www.playsafe.com", // TODO: replace with production URL
    // logo: "/assets/products/playsafe-logo.png" // set when logo available
    icon: HeartPulse,
    brand: "Owned & developed by Xdplax International",
    enabled: true,
  },
  {
    id: "quicksales",
    name: "QuickSales",
    category: "E-Commerce / Multi-Vendor Marketplace",
    description:
      "QuickSales is an e-commerce platform designed to connect buyers and sellers through a convenient digital marketplace, supporting product discovery, online shopping, vendor participation, and digital commerce.",
    cta: "Visit QuickSales",
    website: "https://www.quicksales.com", // TODO: replace with production URL
    // logo: "/assets/products/quicksales-logo.png" // set when logo available
    icon: ShoppingBag,
    brand: "Owned & developed by Xdplax International",
    enabled: true,
  },
  {
    id: "dreampropellers",
    name: "DreamPropellers International Initiative",
    category: "Non-Governmental / Social Impact Initiative",
    description:
      "DreamPropellers International Initiative is a social impact initiative focused on creating opportunities, empowering individuals and communities, and supporting meaningful development through innovative and sustainable initiatives.",
    cta: "Visit DreamPropellers",
    website: "https://www.dreampropellers.com", // TODO: replace with production URL
    // logo: "/assets/products/dreampropellers-logo.png" // set when logo available
    icon: HeartHandshake,
    brand: "Owned & developed by Xdplax International",
    enabled: true,
  },
];

export const ENABLED_PRODUCTS = PRODUCTS.filter((p) => p.enabled);
