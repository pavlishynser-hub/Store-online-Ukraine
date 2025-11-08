/** @type {import('next-sitemap').IConfig} */
const siteUrl = process.env.SITE_URL || "https://example.com";

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 7000,
  exclude: ["/api/*"],
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: path === "/" ? "weekly" : "monthly",
      priority: path === "/" ? 1.0 : 0.7,
      lastmod: new Date().toISOString()
    };
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/"
      }
    ]
  }
};
