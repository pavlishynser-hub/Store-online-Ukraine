import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { OrderForm } from "@/components/OrderForm";
import { products } from "../../../data/products";

type ProductPageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = params;
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return {
      title: "Товар не знайдено"
    };
  }

  return {
    title: `${product.title} · AutoComfort Hub`,
    description: product.description
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const { slug } = params;
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="bg-[#F5F7FA]">
      <div className="mx-auto w-full max-w-5xl px-4 pb-16 pt-8 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            className="h-4 w-4"
          >
            <path d="M15 5l-7 7 7 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Назад
        </Link>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <div className="rounded-3xl bg-white p-4 shadow-sm shadow-slate-200">
              <Image
                src={product.image}
                alt={product.title}
                width={720}
                height={540}
                className="h-full w-full rounded-2xl bg-slate-50 object-cover"
              />
            </div>

            <div className="space-y-4 rounded-3xl bg-white p-6 shadow-sm shadow-slate-200">
              <div>
                <h1 className="text-2xl font-bold text-slate-900">{product.title}</h1>
                <p className="text-sm text-slate-500">{product.subtitle}</p>
              </div>
              <p className="text-3xl font-semibold text-blue-600">{product.price}₴</p>
              <p className="text-sm text-slate-600">{product.description}</p>
              <ul className="list-disc space-y-1 pl-5 text-sm text-slate-600">
                {product.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              <a
                href="#order-form"
                className="inline-flex w-full items-center justify-center rounded-2xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Залишити заявку
              </a>
            </div>
          </div>

          <section id="order-form" className="space-y-4">
            <div className="rounded-3xl bg-white p-6 shadow-sm shadow-slate-200">
              <div className="mb-5 space-y-1">
                <h2 className="text-xl font-semibold text-slate-900">Оформлення замовлення</h2>
                <p className="text-sm text-slate-500">
                  Заповніть форму, і ми зв&apos;яжемося з вами протягом години.
                </p>
              </div>
              <OrderForm productName={product.title} />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
