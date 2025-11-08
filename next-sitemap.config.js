/** @type {import('next-sitemap').IConfig} */
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://nova-market-store.vercel.app";

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  outDir: "public",
  sitemapSize: 5000,
  changefreq: "weekly",
  priority: 0.7,
  transform: async (config, path) => {
    const priority = path === "/" ? 1.0 : config.priority ?? 0.7;
    return {
      loc: path,
      changefreq: config.changefreq ?? "weekly",
      priority,
      lastmod: new Date().toISOString(),
    };
  },
};
