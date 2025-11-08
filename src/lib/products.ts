import productsData from "../../data/products.json";
import type { Product } from "@/types/product";

const products = productsData as Product[];

export function getProducts(): Product[] {
  return products;
}

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id);
}

export function getFeaturedProducts(limit = 4): Product[] {
  return products.slice(0, limit);
}
