import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductCard } from "@/components/product-card";
import { getProductById, getProducts } from "@/lib/products";
import type { Product } from "@/types/product";

type ProductPageProps = {
  params: {
    id: string;
  };
};

export function generateStaticParams() {
  return getProducts().map((product) => ({ id: product.id }));
}

export function generateMetadata({ params }: ProductPageProps): Metadata {
  const product = getProductById(params.id);
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
      type: "website",
      images: [
        {
          url: product.image,
        },
      ],
    },
  };
}

function RelatedProducts({ currentProduct }: { currentProduct: Product }) {
  const products = getProducts().filter(
    (product) =>
      product.category === currentProduct.category &&
      product.id !== currentProduct.id,
  );

  if (products.length === 0) {
    return null;
  }

  return (
    <section className="mt-16 space-y-6">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-semibold text-slate-900">
          Схожі товари у категорії «{currentProduct.category}»
        </h2>
        <p className="text-sm text-slate-600">
          Підберіть альтернативи з тієї ж категорії, якщо шукаєте натхнення.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.slice(0, 3).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProductById(params.id);

  if (!product) {
    notFound();
  }

  return (
    <div className="space-y-10">
      <nav
        aria-label="Хлібні крихти"
        className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wide text-slate-500"
      >
        <Link href="/" className="transition hover:text-slate-900">
          Головна
        </Link>
        <span aria-hidden="true">/</span>
        <Link href="/catalog" className="transition hover:text-slate-900">
          Каталог
        </Link>
        <span aria-hidden="true">/</span>
        <span className="text-slate-900">{product.name}</span>
      </nav>

      <div className="grid gap-12 lg:grid-cols-[1.1fr,0.9fr] lg:items-start">
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm shadow-slate-100">
          <Image
            src={product.image}
            alt={product.name}
            width={960}
            height={720}
            className="h-auto w-full object-cover"
            priority
          />
        </div>

        <div className="space-y-6">
          <div className="space-y-3">
            <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
              {product.category}
            </span>
            <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
              {product.name}
            </h1>
            <p className="text-base text-slate-600">{product.description}</p>
          </div>
          <div className="rounded-2xl bg-slate-900/90 p-6 text-white shadow-lg shadow-slate-900/20">
            <p className="text-sm uppercase tracking-wide text-slate-200/80">
              Ціна
            </p>
            <p className="mt-2 text-3xl font-semibold">
              {product.price.toLocaleString("uk-UA", {
                style: "currency",
                currency: "UAH",
                maximumFractionDigits: 0,
              })}
            </p>
            <p className="mt-4 text-sm text-slate-100/80">
              Натискаючи «Купити на Prom.ua», ви переходите до офіційної сторінки
              товару на платформі Prom.ua, де можна завершити покупку та оплату.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={product.promLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 rounded-full bg-white px-6 py-3 text-center text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Купити на Prom.ua
              </a>
              <Link
                href="/delivery"
                className="flex-1 rounded-full border border-white/30 px-6 py-3 text-center text-sm font-semibold text-white transition hover:border-white hover:text-white hover:opacity-80"
              >
                Умови доставки
              </Link>
            </div>
          </div>
          <div className="grid gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-100 sm:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Оплата
              </p>
              <ul className="mt-2 space-y-2 text-sm text-slate-600">
                <li>• Банківська картка або Apple Pay / Google Pay</li>
                <li>• Післяплата з передоплатою 200 грн</li>
                <li>• Безпечна оплата Prom.ua з гарантією повернення</li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Доставка
              </p>
              <ul className="mt-2 space-y-2 text-sm text-slate-600">
                <li>• Нова Пошта, Укрпошта, Justin</li>
                <li>• Відправлення впродовж 24 годин</li>
                <li>• Можливість самовивозу в Києві за попередньою домовленістю</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <RelatedProducts currentProduct={product} />
    </div>
  );
}
