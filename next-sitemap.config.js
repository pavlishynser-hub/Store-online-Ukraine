/* eslint-disable @typescript-eslint/no-require-imports */

const products = require("./data/products.json");

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://novastore-shop.vercel.app",
  generateRobotsTxt: true,
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ["/api/*"],
  transform: async (config, path) => {
    const priorityMap = {
      "/": 1.0,
      "/catalog": 0.9,
      "/delivery": 0.6,
      "/return-policy": 0.6,
      "/privacy": 0.5,
      "/terms": 0.5,
      "/contacts": 0.7,
    };

    return {
      loc: path,
      changefreq: config.changefreq,
      priority: priorityMap[path] || config.priority,
      lastmod: new Date().toISOString(),
      alternateRefs: config.alternateRefs ?? [],
    };
  },
  additionalPaths: async (config) => {
    return products.map((product) => ({
      loc: `${config.siteUrl}/products/${product.id}`,
      changefreq: "weekly",
      priority: 0.8,
      lastmod: new Date().toISOString(),
    }));
  },
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
    ],
    additionalSitemaps: [
      `${process.env.NEXT_PUBLIC_SITE_URL || "https://novastore-shop.vercel.app"}/sitemap.xml`,
    ],
  },
};
