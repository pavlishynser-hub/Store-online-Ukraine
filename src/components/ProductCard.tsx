import Image from "next/image";
import Link from "next/link";

import { formatCurrency, getProductSlug } from "@/lib/products";
import { Product } from "@/types/product";

type ProductCardProps = {
  product: Product;
  withDescription?: boolean;
};

export function ProductCard({ product, withDescription = false }: ProductCardProps) {
  const slug = getProductSlug(product);
  return (
    <article className="flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg shadow-slate-300/20 transition hover:-translate-y-1 hover:shadow-xl">
      <Link href={`/catalog/${slug}`} className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover transition duration-500 hover:scale-105"
        />
        {product.badge && (
          <span className="absolute left-4 top-4 rounded-full bg-white/90 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-sky-700 shadow">
            {product.badge}
          </span>
        )}
      </Link>
      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-wide text-slate-500">
            {product.category}
          </p>
          <Link
            href={`/catalog/${slug}`}
            className="text-lg font-semibold text-slate-900 hover:text-sky-700"
          >
            {product.name}
          </Link>
          {withDescription && (
            <p className="text-sm leading-relaxed text-slate-600 line-clamp-3">
              {product.description}
            </p>
          )}
        </div>
        <div className="mt-auto space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xl font-semibold text-slate-900">
              {formatCurrency(product.price)}
            </span>
            <span
              className={`text-xs font-medium uppercase ${
                product.inStock ? "text-green-600" : "text-amber-600"
              }`}
            >
              {product.inStock ? "В наявності" : "Очікується"}
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            <a
              href={product.promLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full text-center text-xs uppercase"
            >
              Купити на Prom.ua
            </a>
            <Link
              href={`/catalog/${slug}`}
              className="btn-secondary w-full text-center text-xs uppercase"
            >
              Детальніше
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
