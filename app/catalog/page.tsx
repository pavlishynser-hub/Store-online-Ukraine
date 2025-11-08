import type { Metadata } from "next";
import products from "../../data/products.json";
import { ProductCard, type Product } from "@/components/ProductCard";

const productList = products as Product[];

export const metadata: Metadata = {
  title: "Каталог товарів",
  description:
    "Перегляньте повний каталог гаджетів та аксесуарів у TechNova. Купуйте онлайн з оплатою через Prom.ua та доставкою по всій Україні."
};

export default function CatalogPage() {
  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <span className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold uppercase text-indigo-600">
          Повна колекція
        </span>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900">
              Каталог гаджетів
            </h1>
            <p className="max-w-2xl text-sm text-slate-600">
              Обирайте смарт-пристрої, аксесуари та техніку для дому. Кожна
              позиція доступна для швидкої купівлі через Prom.ua та доставку до
              будь-якого міста України.
            </p>
          </div>
          <div className="flex items-center gap-3 rounded-full border border-slate-200 bg-white px-5 py-2 text-sm text-slate-600 shadow-sm">
            <span className="inline-flex h-2 w-2 items-center justify-center rounded-full bg-emerald-400" />
            В наявності {productList.length} товарів
          </div>
        </div>
      </section>

      <section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {productList.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
