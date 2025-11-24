import Image from "next/image";
import Link from "next/link";

import { Product } from "@/types/product";
export type { Product } from "@/types/product";

type ProductCardProps = {
  product: Product;
  ctaLabel?: string;
};

export function ProductCard({ product, ctaLabel = "Перейти до товару ›" }: ProductCardProps) {
  return (
    <Link
      href={`/product/${product.slug}`}
      className="block rounded-2xl bg-white p-4 shadow-sm shadow-slate-200/60 transition hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
    >
      <article className="flex items-center gap-4">
        <div className="relative flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
          <Image
            src={product.image}
            alt={product.title}
            width={64}
            height={64}
            className="h-12 w-12 object-contain"
          />
        </div>
        <div className="flex-1 space-y-2">
          <div>
            <h3 className="text-base font-semibold text-slate-900">{product.title}</h3>
            <p className="text-sm text-slate-500">{product.subtitle}</p>
          </div>
          <p className="text-sm font-semibold text-blue-600">{ctaLabel}</p>
        </div>
      </article>
    </Link>
  );
}
