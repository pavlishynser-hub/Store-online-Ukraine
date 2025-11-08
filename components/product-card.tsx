import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/types/product";

type ProductCardProps = {
  product: Product;
  className?: string;
};

export function ProductCard({ product, className }: ProductCardProps) {
  return (
    <article
      className={`group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm shadow-slate-100 transition hover:-translate-y-1 hover:shadow-lg ${className ?? ""}`}
    >
      <Link href={`/catalog/${product.id}`} className="relative block">
        <Image
          src={product.image}
          alt={product.name}
          width={480}
          height={360}
          className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
          priority={false}
        />
      </Link>
      <div className="flex flex-1 flex-col gap-4 px-6 py-5">
        <div className="flex items-center justify-between">
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
            {product.category}
          </span>
          <span className="text-lg font-semibold text-slate-900">
            {product.price.toLocaleString("uk-UA", {
              style: "currency",
              currency: "UAH",
              maximumFractionDigits: 0,
            })}
          </span>
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-slate-900">
            <Link href={`/catalog/${product.id}`}>{product.name}</Link>
          </h3>
          <p className="text-sm text-slate-600">
            {product.description}
          </p>
        </div>
        <div className="mt-auto flex items-center gap-3">
          <Link
            href={`/catalog/${product.id}`}
            className="flex-1 rounded-full border border-slate-200 px-4 py-2 text-center text-sm font-semibold text-slate-700 transition hover:border-slate-900 hover:text-slate-900"
          >
            Детальніше
          </Link>
          <a
            href={product.promLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 rounded-full bg-slate-900 px-4 py-2 text-center text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800"
          >
            Купити на Prom.ua
          </a>
        </div>
      </div>
    </article>
  );
}
