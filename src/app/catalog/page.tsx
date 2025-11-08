import type { Metadata } from "next";

import { ProductCard } from "@/components/ProductCard";
import { getProducts } from "@/lib/products";

export const metadata: Metadata = {
  title: "Каталог товарів",
  description:
    "Перегляньте повний каталог NovaStore: акуратний вибір гаджетів, аксесуарів та товарів для дому з офіційними посиланнями на Prom.ua.",
};

export const revalidate = 3600;

export default function CatalogPage() {
  const products = getProducts();

  return (
    <div className="mx-auto max-w-6xl space-y-10 px-4 pb-16 pt-12 sm:px-6">
      <header className="max-w-3xl space-y-4">
        <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
          Увесь асортимент
        </p>
        <h1 className="text-4xl font-semibold text-zinc-900">Каталог товарів</h1>
        <p className="text-sm leading-relaxed text-zinc-600">
          Знайдіть усе необхідне для дому, роботи та активного відпочинку. Кожен товар доступний для замовлення на Prom.ua з офіційною гарантією.
        </p>
      </header>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
