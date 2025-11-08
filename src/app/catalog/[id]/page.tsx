import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  formatCurrency,
  getProductById,
  getProducts,
  getProductSlug,
  getRelatedProducts,
} from "@/lib/products";

type ProductPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export function generateStaticParams() {
  return getProducts().map((product) => ({
    id: getProductSlug(product),
  }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) {
    return {
      title: "Товар не знайдено",
    };
  }

  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: [
        {
          url: product.image,
          width: 960,
          height: 640,
          alt: product.name,
        },
      ],
    },
    alternates: {
      canonical: `/catalog/${product.id}`,
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  const related = getRelatedProducts(product.category, product.id);

  return (
    <div className="space-y-14">
      <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:items-start">
        <div className="glass-card relative aspect-[4/3] overflow-hidden rounded-[2.25rem]">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 1024px) 100vw, 640px"
            className="object-cover"
            priority
          />
        </div>
        <div className="space-y-6 rounded-[2.25rem] border border-slate-200 bg-white p-8 shadow-lg shadow-slate-200/60">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-sky-600">
              {product.category}
            </p>
            <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
              {product.name}
            </h1>
            <p className="text-base leading-7 text-slate-600">
              {product.description}
            </p>
            {product.tags && (
              <ul className="flex flex-wrap gap-2 pt-1">
                {product.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600"
                  >
                    #{tag}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="rounded-2xl bg-slate-50 p-6">
            <p className="text-xs uppercase text-slate-500">Ціна на Prom.ua</p>
            <p className="mt-2 text-3xl font-semibold text-slate-900">
              {formatCurrency(product.price)}
            </p>
            <p className="mt-2 text-sm text-slate-600">
              Оплата та доставка здійснюються через маркетплейс Prom.ua. Ми
              надішлемо підтвердження замовлення та будемо на зв&apos;язку до
              моменту отримання.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href={product.promLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-xs uppercase"
              >
                Купити на Prom.ua
              </a>
              <Link href="/contacts" className="btn-secondary text-xs uppercase">
                Поставити запитання
              </Link>
            </div>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-base font-semibold text-slate-900">
              Як працює замовлення
            </h2>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-slate-600">
              <li>Натисніть «Купити на Prom.ua» та оплатіть на сторінці продавця.</li>
              <li>
                Ми отримуємо повідомлення про оплату та координуємо відправлення.
              </li>
              <li>
                Ви отримуєте замовлення на обраній службі доставки. За потреби
                організуємо повернення.
              </li>
            </ol>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-slate-900">
              З цим товаром також купують
            </h2>
            <Link href="/catalog" className="btn-secondary text-xs uppercase">
              Увесь каталог
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {related.map((item) => (
              <div
                key={item.id}
                className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <Link
                  href={`/catalog/${item.id}`}
                  className="block text-sm font-semibold text-slate-900 hover:text-sky-600"
                >
                  {item.name}
                </Link>
                <p className="mt-2 text-xs uppercase text-slate-500">
                  {item.category}
                </p>
                <p className="mt-3 text-base font-semibold text-slate-900">
                  {formatCurrency(item.price)}
                </p>
                <a
                  href={item.promLink}
                  className="mt-4 inline-flex items-center gap-1 text-xs font-semibold uppercase text-sky-600 hover:text-sky-700"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Придбати на Prom.ua →
                </a>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
