import type { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { getProductById, getProducts } from "@/lib/products";

interface ProductPageProps {
  params: { id: string };
}

export async function generateStaticParams() {
  return getProducts().map((product) => ({ id: product.id }));
}

export async function generateMetadata(
  { params }: ProductPageProps,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const product = getProductById(params.id);

  if (!product) {
    return {
      title: "Товар не знайдено",
    };
  }

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: [
        {
          url: product.image,
          width: 1200,
          height: 800,
          alt: product.name,
        },
        ...previousImages,
      ],
    },
  };
}

const priceFormatter = new Intl.NumberFormat("uk-UA", {
  style: "currency",
  currency: "UAH",
});

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProductById(params.id);

  if (!product) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-5xl px-4 pb-16 pt-12 sm:px-6">
      <nav className="text-sm text-zinc-500">
        <ol className="flex flex-wrap items-center gap-2">
          <li>
            <Link href="/" className="transition hover:text-zinc-900">
              Головна
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link href="/catalog" className="transition hover:text-zinc-900">
              Каталог
            </Link>
          </li>
          <li>/</li>
          <li className="text-zinc-900">{product.name}</li>
        </ol>
      </nav>

      <div className="mt-10 grid gap-12 lg:grid-cols-2">
        <div className="relative aspect-[3/2] overflow-hidden rounded-3xl bg-white shadow-sm">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
            priority
          />
        </div>

        <div className="flex flex-col gap-6">
          <div className="space-y-3">
            <h1 className="text-4xl font-semibold text-zinc-900">
              {product.name}
            </h1>
            <p className="text-lg text-zinc-600">{product.description}</p>
          </div>

          <div className="rounded-3xl border border-zinc-200 bg-white p-6">
            <p className="text-sm uppercase tracking-widest text-zinc-500">
              Ціна
            </p>
            <p className="mt-2 text-3xl font-semibold text-zinc-900">
              {priceFormatter.format(product.price)}
            </p>
            <p className="mt-4 text-sm text-zinc-600">
              Замовлення здійснюється через Prom.ua. Натисніть кнопку нижче, щоб оформити покупку на офіційній сторінці товару.
            </p>
            <a
              href={product.promLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800"
            >
              Купити на Prom.ua
            </a>
          </div>

          <div className="rounded-3xl border border-zinc-200 bg-white p-6">
            <p className="text-base font-semibold text-zinc-900">
              Що варто знати
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-zinc-600">
              <li>Офіційна гарантія 12 місяців або згідно з описом на Prom.ua.</li>
              <li>Можливість оплати онлайн на Prom.ua та післяплата у відділенні пошти.</li>
              <li>Доставка Новою поштою, Укрпоштою або кур’єром по Києву.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
