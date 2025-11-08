import products from "@/data/products.json";
import type { Product } from "@/types/product";

const typedProducts = products as Product[];

export function getProducts(): Product[] {
  return typedProducts;
}

export function getFeaturedProducts(limit = 6): Product[] {
  return typedProducts.slice(0, limit);
}

export function getProductById(id: string): Product | undefined {
  return typedProducts.find((product) => product.id === id);
}

export function getCategories(): string[] {
  return Array.from(new Set(typedProducts.map((product) => product.category)));
}
