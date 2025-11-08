"use client";

import { useEffect, useMemo, useState } from "react";
import type { Product } from "@/types/product";
import { ProductCard } from "./product-card";

type CatalogFilterProps = {
  products: Product[];
  categories: string[];
  initialCategory?: string | null;
  initialQuery?: string | null;
};

export function CatalogFilter({
  products,
  categories,
  initialCategory = null,
  initialQuery = null,
}: CatalogFilterProps) {
  const [query, setQuery] = useState(initialQuery ?? "");
  const [selectedCategory, setSelectedCategory] =
    useState<string | null>(initialCategory);

  useEffect(() => {
    setSelectedCategory(initialCategory);
  }, [initialCategory]);

  useEffect(() => {
    setQuery(initialQuery ?? "");
  }, [initialQuery]);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        !selectedCategory || product.category === selectedCategory;
      const matchesQuery =
        !query ||
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [products, query, selectedCategory]);

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 rounded-2xl bg-slate-50/80 p-6 shadow-sm shadow-slate-100 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-1 flex-wrap gap-3">
          <button
            type="button"
            onClick={() => setSelectedCategory(null)}
            aria-pressed={selectedCategory === null}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
              selectedCategory === null
                ? "bg-slate-900 text-white"
                : "bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900"
            }`}
          >
            Всі товари
          </button>
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() =>
                setSelectedCategory(
                  selectedCategory === category ? null : category,
                )
              }
              aria-pressed={selectedCategory === category}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                selectedCategory === category
                  ? "bg-slate-900 text-white"
                  : "bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="max-w-sm flex-1">
          <label className="sr-only" htmlFor="catalog-search">
            Пошук товарів
          </label>
          <input
            id="catalog-search"
            type="search"
            placeholder="Пошук товарів..."
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            className="w-full rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm text-slate-700 outline-none ring-slate-900/10 transition focus:border-slate-900 focus:ring-2"
          />
        </div>
      </div>

      {filteredProducts.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-8 py-16 text-center text-slate-500">
          Нічого не знайдено. Спробуйте змінити категорію або запит.
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
