import Image from "next/image";
import Link from "next/link";

import type { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
}

const priceFormatter = new Intl.NumberFormat("uk-UA", {
  style: "currency",
  currency: "UAH",
});

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl border border-zinc-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="relative aspect-[3/2] w-full overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition duration-700 group-hover:scale-105"
          sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 100vw"
        />
      </div>
      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="space-y-2">
          <Link
            href={`/products/${product.id}`}
            className="text-lg font-semibold text-zinc-900 transition hover:text-zinc-700"
          >
            {product.name}
          </Link>
          <p className="text-sm leading-relaxed text-zinc-600">{product.description}</p>
        </div>
        <div className="mt-auto flex items-center justify-between">
          <p className="text-lg font-semibold text-zinc-900">
            {priceFormatter.format(product.price)}
          </p>
          <a
            href={product.promLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full bg-zinc-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-zinc-800"
          >
            Купити на Prom.ua
          </a>
        </div>
      </div>
    </article>
  );
}
