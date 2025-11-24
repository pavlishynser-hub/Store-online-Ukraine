import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { OrderForm } from "@/components/OrderForm";

import { getProductBySlug, products } from "@data/products";

const priceFormatter = new Intl.NumberFormat("uk-UA", {
  style: "currency",
  currency: "UAH",
  maximumFractionDigits: 0
});

type ProductPageProps = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug
  }));
}

export function generateMetadata({ params }: ProductPageProps): Metadata {
  const product = getProductBySlug(params.slug);

  if (!product) {
    return {
      title: "Товар не знайдено · AutoComfort Hub"
    };
  }

  return {
    title: `${product.name} · AutoComfort Hub`,
    description: product.subtitle,
    openGraph: {
      title: `${product.name} — AutoComfort Hub`,
      description: product.description,
      images: [
        {
          url: product.image,
          width: 800,
          height: 600,
          alt: product.name
        }
      ]
    }
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const { slug } = params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-4 pb-16 pt-8">
      <div className="flex items-center gap-3 text-sm text-blue-600">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition hover:text-slate-900"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="h-5 w-5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Назад
        </Link>
        <span className="text-slate-400">/</span>
        <span className="text-sm font-medium text-slate-500">{product.name}</span>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6 rounded-3xl bg-white p-6 shadow-sm">
          <div className="relative h-72 w-full overflow-hidden rounded-2xl bg-slate-100 sm:h-96">
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain p-8"
              priority
            />
          </div>

          <div className="space-y-4">
            <div>
              <p className="text-sm uppercase tracking-wide text-slate-500">Ціна</p>
              <p className="text-3xl font-semibold text-blue-600">
                {priceFormatter.format(product.price)}
              </p>
            </div>
            <p className="text-base text-slate-600">{product.description}</p>
            <ul className="space-y-2">
              {product.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3 text-sm text-slate-600">
                  <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-blue-500" />
                  {bullet}
                </li>
              ))}
            </ul>
          </div>

          <a
            href="#order-form"
            className="inline-flex w-full items-center justify-center rounded-2xl bg-blue-600 px-6 py-4 text-base font-semibold text-white shadow-md transition hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            Залишити заявку
          </a>
        </div>

        <div className="space-y-4">
          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">Оформлення замовлення</h2>
            <p className="text-sm text-slate-500">
              Залиште свої контакти — ми надішлемо підтвердження та домовимося про доставку.
            </p>
          </div>
          <div id="order-form">
            <OrderForm productName={product.name} />
          </div>
        </div>
      </div>
    </div>
  );
}
