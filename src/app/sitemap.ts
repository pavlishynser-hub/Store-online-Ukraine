import type { MetadataRoute } from "next";

import { getProducts } from "@/lib/products";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://novastore-shop.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/catalog",
    "/delivery",
    "/return-policy",
    "/privacy",
    "/terms",
    "/contacts",
  ].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.7,
  }));

  const productRoutes: MetadataRoute.Sitemap = getProducts().map((product) => ({
    url: `${siteUrl}/products/${product.id}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...productRoutes];
}
