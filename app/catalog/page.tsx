import type { Metadata } from "next";
import { CatalogFilter } from "@/components/catalog-filter";
import { getCategories, getProducts } from "@/lib/products";

export const metadata: Metadata = {
  title: "Каталог товарів",
  description:
    "Перегляньте повний каталог товарів Nova Market: гаджети, товари для дому, спорт та аксесуари з доставкою по всій Україні.",
};

type CatalogPageProps = {
  searchParams?: Record<string, string | string[] | undefined>;
};

export default function CatalogPage({ searchParams }: CatalogPageProps) {
  const products = getProducts();
  const categories = getCategories();
  const categoryParam = searchParams?.category;
  const queryParam = searchParams?.q;
  const resolvedCategory =
    typeof categoryParam === "string" ? categoryParam : null;
  const resolvedQuery = typeof queryParam === "string" ? queryParam : null;
  const initialCategory =
    resolvedCategory && categories.includes(resolvedCategory)
      ? resolvedCategory
      : null;
  const initialQuery = resolvedQuery ?? null;

  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
          Каталог Nova Market
        </h1>
        <p className="text-sm text-slate-600">
          Обирайте серед ретельно підібраних товарів. Натисніть кнопку «Купити
          на Prom.ua», щоб завершити замовлення у безпечному кошику Prom.ua.
        </p>
      </div>
      <CatalogFilter
        products={products}
        categories={categories}
        initialCategory={initialCategory}
        initialQuery={initialQuery}
      />
    </div>
  );
}
