import { createFileRoute } from "@tanstack/react-router";

const BASE_URL = "https://xdplax.com";
const CURRENT_DATE = new Date().toISOString().split("T")[0];

function escapeXml(unsafe: string): string {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

interface SitemapEntry {
  path: string;
  changefreq: "daily" | "weekly" | "monthly" | "yearly";
  priority: string;
  images?: Array<{
    loc: string;
    title: string;
    caption: string;
  }>;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: SitemapEntry[] = [
          {
            path: "/",
            changefreq: "weekly",
            priority: "1.0",
            images: [
              {
                loc: `${BASE_URL}/og-image.png`,
                title: "Xdplax International Technology and Forex Hub",
                caption: "Enterprise Software, Forex Academy and FxMint Automated Copier",
              },
            ],
          },
          {
            path: "/about",
            changefreq: "monthly",
            priority: "0.9",
            images: [
              {
                loc: `${BASE_URL}/favicon.png`,
                title: "Xdplax International Brand Identity",
                caption: "About Xdplax International Engineering and Leadership",
              },
            ],
          },
          {
            path: "/services",
            changefreq: "weekly",
            priority: "0.9",
          },
          {
            path: "/products",
            changefreq: "weekly",
            priority: "0.9",
          },
          {
            path: "/academy",
            changefreq: "weekly",
            priority: "0.9",
          },
          {
            path: "/fxmint",
            changefreq: "weekly",
            priority: "0.9",
          },
          {
            path: "/contact",
            changefreq: "monthly",
            priority: "0.8",
          },
          {
            path: "/terms",
            changefreq: "yearly",
            priority: "0.5",
          },
          {
            path: "/privacy",
            changefreq: "yearly",
            priority: "0.5",
          },
        ];

        const urls = entries.map((e) => {
          const imageTags = (e.images || [])
            .map(
              (img) => `    <image:image>
      <image:loc>${escapeXml(img.loc)}</image:loc>
      <image:title>${escapeXml(img.title)}</image:title>
      <image:caption>${escapeXml(img.caption)}</image:caption>
    </image:image>`,
            )
            .join("\n");

          return `  <url>
    <loc>${escapeXml(`${BASE_URL}${e.path}`)}</loc>
    <lastmod>${CURRENT_DATE}</lastmod>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority}</priority>
${imageTags ? `${imageTags}\n` : ""}  </url>`;
        });

        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls.join("\n")}
</urlset>`;

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600, s-maxage=86400",
          },
        });
      },
    },
  },
});
