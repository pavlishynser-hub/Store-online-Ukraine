import catalog from "../../data/products.json";
import { Product } from "@/types/product";

const products = catalog as Product[];

export const getProducts = (): Product[] => products;

export const getFeaturedProducts = (limit = 6): Product[] =>
  products.slice(0, limit);

export const getProductById = (id: string): Product | undefined =>
  products.find((product) => product.id === id);

export const getCategories = (): string[] =>
  Array.from(new Set(products.map((product) => product.category))).sort();

export const getRelatedProducts = (
  category: string,
  excludeId: string,
  limit = 4,
): Product[] =>
  products
    .filter(
      (product) => product.category === category && product.id !== excludeId,
    )
    .slice(0, limit);

export const getProductSlug = (product: Product): string => product.id;

export const formatCurrency = (value: number): string =>
  new Intl.NumberFormat("uk-UA", {
    style: "currency",
    currency: "UAH",
    maximumFractionDigits: 0,
  }).format(value);
