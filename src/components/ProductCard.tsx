import Image from "next/image";
import Link from "next/link";

import type { Product as AutoProduct } from "@data/products";

export type Product = {
  id: string;
  title: string;
  price: number;
  image: string;
};

type ProductCardProps = {
  product: AutoProduct;
  ctaLabel: string;
};

export function ProductCard({ product, ctaLabel }: ProductCardProps) {
  return (
    <Link
      href={`/product/${product.slug}`}
      className="group flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 sm:gap-5 sm:rounded-3xl sm:p-5"
    >
      <span className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-slate-100 sm:h-20 sm:w-20">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="80px"
          className="object-contain p-3"
          priority={product.id === 1}
        />
      </span>

      <div className="flex flex-1 flex-col">
        <div className="space-y-1.5">
          <p className="text-base font-semibold text-slate-900 sm:text-lg">
            {product.name}
          </p>
          <p className="text-sm text-slate-500 sm:text-base">{product.subtitle}</p>
        </div>
        <span className="mt-3 inline-flex items-center text-sm font-semibold text-blue-600 sm:text-base">
          {ctaLabel}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="ml-1 h-4 w-4 transition group-hover:translate-x-0.5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m0 0l-4-4m4 4-4 4" />
          </svg>
        </span>
      </div>
    </Link>
  );
}

export { ProductCard, Product };
