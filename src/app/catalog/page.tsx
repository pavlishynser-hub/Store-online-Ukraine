import type { Metadata } from "next";
import type { ComponentProps, ReactNode } from "react";
import Link from "next/link";

import { ProductCard } from "@/components/ProductCard";
import { getCategories, getProducts } from "@/lib/products";

export const metadata: Metadata = {
  title: "Каталог товарів",
  description:
    "Оберіть товари з каталогу Мрія Маркет. Відібрані пропозиції з Prom.ua з доставкою по всій Україні.",
};

type CatalogPageProps = {
  searchParams?: Promise<{
    category?: string;
    q?: string;
  }>;
};

export default async function CatalogPage({
  searchParams,
}: CatalogPageProps) {
  const resolvedSearch = await searchParams;
  const category = resolvedSearch?.category;
  const query = resolvedSearch?.q?.toLowerCase().trim();

  const products = getProducts().filter((product) => {
    const matchCategory = category ? product.category === category : true;
    const matchQuery = query
      ? product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query)
      : true;
    return matchCategory && matchQuery;
  });

  const categories = getCategories();

  return (
    <div className="space-y-10">
      <header className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-widest text-sky-600">
          Каталог
        </p>
        <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
          Весь асортимент Мрія Маркет
        </h1>
        <p className="max-w-2xl text-sm leading-6 text-slate-600">
          Натискаючи кнопку &laquo;Купити на Prom.ua&raquo;, ви переходите на
          сторінку перевіреного продавця маркетплейсу та оформлюєте оплату
          безпосередньо там. Ми супроводжуємо кожне замовлення, щоб ви отримали
          свій товар вчасно.
        </p>
        <CatalogFilters activeCategory={category} categories={categories} />
        <CatalogSearch defaultValue={query ?? ""} activeCategory={category} />
      </header>

      <section className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3 text-sm text-slate-600">
          <span>
            Знайдено {products.length} товар
            {products.length === 1
              ? ""
              : products.length >= 2 && products.length <= 4
              ? "и"
              : "ів"}
            .
          </span>
          <span className="text-xs uppercase text-slate-400">
            Ціни вказані у гривнях (UAH).
          </span>
        </div>
        {products.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-12 text-center shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">
              Нічого не знайдено
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Спробуйте змінити пошуковий запит або поверніться до повного
              каталогу.
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-3">
              <Link href="/catalog" className="btn-primary text-xs uppercase">
                Показати всі товари
              </Link>
              <Link href="/contacts" className="btn-secondary text-xs uppercase">
                Попросити підбірку
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                withDescription
              />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

type CatalogFiltersProps = {
  categories: string[];
  activeCategory?: string;
};

function CatalogFilters({ categories, activeCategory }: CatalogFiltersProps) {
  return (
    <div className="flex flex-wrap gap-2 pt-2">
      <FilterLink href="/catalog" active={!activeCategory}>
        Усі
      </FilterLink>
      {categories.map((category) => (
        <FilterLink
          key={category}
          href={{ pathname: "/catalog", query: { category } }}
          active={activeCategory === category}
        >
          {category}
        </FilterLink>
      ))}
    </div>
  );
}

type FilterLinkProps = {
  href: ComponentProps<typeof Link>["href"];
  children: ReactNode;
  active: boolean;
};

function FilterLink({ href, children, active }: FilterLinkProps) {
  return (
    <Link
      href={href}
      className={`rounded-full px-4 py-2 text-sm font-medium transition ${
        active
          ? "bg-sky-600 text-white shadow shadow-sky-600/30"
          : "bg-slate-100 text-slate-700 hover:bg-sky-100"
      }`}
      scroll
    >
      {children}
    </Link>
  );
}

type CatalogSearchProps = {
  defaultValue: string;
  activeCategory?: string;
};

function CatalogSearch({ defaultValue, activeCategory }: CatalogSearchProps) {
  return (
    <form
      method="get"
      className="mt-4 flex flex-col gap-3 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm sm:flex-row sm:items-center"
    >
      <input
        type="search"
        name="q"
        defaultValue={defaultValue}
        placeholder="Пошук товарів за назвою або описом"
        className="h-12 flex-1 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-700 outline-none transition focus:border-sky-400 focus:bg-white focus:ring-2 focus:ring-sky-100"
      />
      {activeCategory && (
        <input type="hidden" name="category" value={activeCategory} />
      )}
      <button type="submit" className="btn-primary h-12 px-8">
        Знайти
      </button>
    </form>
  );
}
