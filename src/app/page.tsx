import Link from "next/link";

import { Hero } from "@/components/Hero";
import { ProductCard } from "@/components/ProductCard";
import { getFeaturedProducts } from "@/lib/products";

export const revalidate = 3600;

export default function Home() {
  const featuredProducts = getFeaturedProducts(4);

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-16 px-4 pb-16 pt-12 sm:px-6">
      <Hero />

      <section className="grid gap-10 rounded-3xl bg-white p-10 shadow-sm sm:grid-cols-3">
        <div className="space-y-3 sm:col-span-1">
          <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
            Чому NovaStore
          </p>
          <h2 className="text-2xl font-semibold text-zinc-900">
            сервіс, якому довіряють покупці
          </h2>
          <p className="text-sm leading-relaxed text-zinc-600">
            Оперативна доставка, клієнтська підтримка та гарантія якості на всі
            товари.
          </p>
        </div>
        <div className="space-y-4 sm:col-span-2">
          <div className="rounded-2xl border border-zinc-100 p-6">
            <h3 className="text-base font-semibold text-zinc-900">
              Швидка доставка по Україні
            </h3>
            <p className="mt-1 text-sm text-zinc-600">
              Надсилаємо замовлення в день оплати або наступного робочого дня з
              SMS-повідомленням.
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-100 p-6">
            <h3 className="text-base font-semibold text-zinc-900">
              Гарантія та повернення
            </h3>
            <p className="mt-1 text-sm text-zinc-600">
              Повернення без зайвих питань упродовж 14 днів відповідно до Закону
              України.
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-100 p-6">
            <h3 className="text-base font-semibold text-zinc-900">
              Безпечні оплати
            </h3>
            <p className="mt-1 text-sm text-zinc-600">
              Оформлюйте покупку на Prom.ua з офіційним захистом платежів та
              відстеженням замовлення.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
              Вибране
            </p>
            <h2 className="text-3xl font-semibold text-zinc-900">
              Хіти продажів тижня
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-zinc-600">
              Підберіть ідеальний подарунок або корисну дрібничку для себе.
            </p>
          </div>
          <Link
            href="/catalog"
            className="inline-flex items-center justify-center rounded-full border border-zinc-200 px-5 py-2 text-sm font-semibold text-zinc-900 transition hover:border-zinc-900"
          >
            Весь каталог
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
