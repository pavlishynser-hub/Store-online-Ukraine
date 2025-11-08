const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://example-shop.example";

/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl,
  generateRobotsTxt: true,
  sitemapSize: 5000,
  autoLastmod: true,
  changefreq: "weekly",
  transform: async (_config, path) => {
    const normalizedPath = path === "/" ? "" : path;
    return {
      loc: `${siteUrl}${normalizedPath}`,
      changefreq: normalizedPath === "" ? "weekly" : "monthly",
      priority: normalizedPath === "" ? 1 : 0.7,
      lastmod: new Date().toISOString(),
    };
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    additionalSitemaps: [`${siteUrl}/sitemap.xml`],
  },
};

module.exports = config;
