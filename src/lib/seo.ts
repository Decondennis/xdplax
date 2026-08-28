export const SITE_URL = "https://xdplax.com";
export const SITE_NAME = "Xdplax International";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;

export const COMPANY_DETAILS = {
  name: "Xdplax International",
  legalName: "Xdplax International Ltd.",
  url: SITE_URL,
  logo: `${SITE_URL}/favicon.png`,
  description:
    "Global technology powerhouse and financial education provider offering custom enterprise software engineering, mobile apps, ERP/CRM platforms, AI analytics, cybersecurity, Forex Academy, and FxMint automated copy trading.",
  email: "info@xdplaxInternational.com",
  telephones: ["+234 706 202 8958", "+234 81 265 73209"],
  address: {
    streetAddress: "27 Edgerly Road",
    addressLocality: "Calabar",
    addressRegion: "Cross River State",
    postalCode: "540242",
    addressCountry: "NG",
  },
  geo: {
    latitude: 4.9757,
    longitude: 8.3417,
  },
  sameAs: [
    "https://facebook.com",
    "https://twitter.com",
    "https://linkedin.com",
    "https://instagram.com",
    "https://github.com/Decondennis/xdplax",
  ],
};

export interface SeoMetaOptions {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  ogType?: "website" | "article" | "profile";
  ogImage?: string;
  publishedTime?: string;
  modifiedTime?: string;
  noindex?: boolean;
  jsonLd?: Record<string, unknown> | Array<Record<string, unknown>>;
}

export function buildSeoMeta(options: SeoMetaOptions) {
  const canonicalUrl = options.path === "/" ? SITE_URL : `${SITE_URL}${options.path}`;
  const ogImageUrl = options.ogImage || DEFAULT_OG_IMAGE;
  const fullTitle =
    options.path === "/"
      ? `${SITE_NAME} — Enterprise Software Development, IT Solutions & Forex Academy`
      : `${options.title} | ${SITE_NAME}`;

  const defaultKeywords = [
    "Xdplax",
    "Xdplax International",
    "Enterprise Software Development",
    "Custom Web Development Nigeria",
    "Mobile App Development",
    "Forex Academy Nigeria",
    "FxMint Copy Trading",
    "Fintech Software Solutions",
    "EdTech Platforms",
    "XDFastComm",
    "EduStow",
    "PlaySafe App",
    "CRM and ERP Systems",
    "AI Analytics Solutions",
    "Cybersecurity Services Calabar",
    "IT Company Calabar Nigeria",
    "Smart Money Concepts Forex",
  ];

  const combinedKeywords = Array.from(
    new Set([...(options.keywords || []), ...defaultKeywords]),
  ).join(", ");

  const metaList: Array<Record<string, string>> = [
    { title: fullTitle },
    { name: "description", content: options.description },
    { name: "keywords", content: combinedKeywords },
    { name: "author", content: SITE_NAME },
    { name: "publisher", content: SITE_NAME },
    {
      name: "robots",
      content: options.noindex
        ? "noindex, nofollow"
        : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    },
    {
      name: "googlebot",
      content: options.noindex
        ? "noindex, nofollow"
        : "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    },
    {
      name: "bingbot",
      content: options.noindex
        ? "noindex, nofollow"
        : "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    },
    // Geo metadata
    { name: "geo.region", content: "NG-CR" },
    { name: "geo.placename", content: "Calabar, Cross River State, Nigeria" },
    {
      name: "geo.position",
      content: `${COMPANY_DETAILS.geo.latitude};${COMPANY_DETAILS.geo.longitude}`,
    },
    { name: "ICBM", content: `${COMPANY_DETAILS.geo.latitude}, ${COMPANY_DETAILS.geo.longitude}` },
    // OpenGraph
    { property: "og:site_name", content: SITE_NAME },
    { property: "og:title", content: fullTitle },
    { property: "og:description", content: options.description },
    { property: "og:url", content: canonicalUrl },
    { property: "og:type", content: options.ogType || "website" },
    { property: "og:locale", content: "en_US" },
    { property: "og:locale:alternate", content: "en_GB" },
    { property: "og:locale:alternate", content: "en_NG" },
    { property: "og:image", content: ogImageUrl },
    { property: "og:image:secure_url", content: ogImageUrl },
    { property: "og:image:alt", content: fullTitle },
    { property: "og:image:type", content: "image/png" },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    // Twitter
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: fullTitle },
    { name: "twitter:description", content: options.description },
    { name: "twitter:image", content: ogImageUrl },
    { name: "twitter:image:alt", content: fullTitle },
  ];

  if (options.publishedTime) {
    metaList.push({ property: "article:published_time", content: options.publishedTime });
  }
  if (options.modifiedTime) {
    metaList.push({ property: "article:modified_time", content: options.modifiedTime });
  }

  const scripts: Array<{ type: string; children: string }> = [];

  if (options.jsonLd) {
    scripts.push({
      type: "application/ld+json",
      children: JSON.stringify(options.jsonLd),
    });
  }

  return {
    meta: metaList,
    links: [{ rel: "canonical", href: canonicalUrl }],
    scripts,
  };
}

export function buildBreadcrumbSchema(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.path === "/" ? SITE_URL : `${SITE_URL}${item.path}`,
    })),
  };
}
