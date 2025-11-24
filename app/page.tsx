import { ProductCard } from "@/components/ProductCard";
import { type Product } from "@/types/product";
import { products } from "../data/products";

const ctaBySlug: Record<string, string> = {
  "trunk-organizer": "Перейти до товару ›",
  "seat-gap-organizer": "Детальніше ›",
  "muscle-massage-gun": "Переглянути ›",
  "ortho-car-pillow": "Обрати подушку ›"
};

const featuredProducts: Product[] = products.slice(0, 4);

export default function HomePage() {
  return (
    <div className="relative min-h-[calc(100vh-4rem)] bg-[#F5F7FA]">
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-8 px-4 pb-32 pt-10 sm:px-6">
        <header className="rounded-3xl bg-white/90 p-6 text-center shadow-sm shadow-slate-200">
          <div className="mx-auto flex max-w-sm flex-col items-center gap-4 text-slate-900">
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg shadow-blue-500/40">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 12h18M5 12l2-6h10l2 6m-2 0 1.2 6H6.8L8 12"
                  />
                </svg>
              </span>
              <div className="text-left">
                <p className="text-lg font-semibold">AutoComfort Hub</p>
                <p className="text-sm text-slate-500">
                  Товари для комфортної поїздки кожного дня
                </p>
              </div>
            </div>
            <p className="text-left text-base text-slate-600 sm:text-center">
              Обирайте найкращі автоаксесуари, які роблять дорогу безпечнішою й комфортнішою. Усі
              позиції доступні онлайн із доставкою по Україні.
            </p>
          </div>
        </header>

        <section className="space-y-3">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              ctaLabel={ctaBySlug[product.slug] ?? "Перейти до товару ›"}
            />
          ))}
        </section>

        <section className="flex items-center gap-4 rounded-3xl bg-blue-600 p-5 text-white shadow-md shadow-blue-500/40">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 7h13l5 5-5 5H3V7Zm4 11v2m8-2v2"
              />
            </svg>
          </div>
          <div className="space-y-1 text-sm">
            <p className="font-semibold">Швидка доставка по всій Україні</p>
            <p className="text-white/80">Оплата при отриманні</p>
          </div>
        </section>
      </div>

      <div className="fixed bottom-0 left-0 right-0 z-10">
        <div className="mx-auto flex w-full max-w-md overflow-hidden rounded-t-3xl border border-slate-200 bg-white text-slate-900 shadow-2xl shadow-slate-900/10">
          <a
            href="https://tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-2 border-r border-slate-200 py-4 text-sm font-semibold hover:bg-slate-50"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-4 w-4"
              >
                <path d="M9.75 3c0 3.728 3.022 6.75 6.75 6.75h.75v-3A6.75 6.75 0 0 0 10.5 0h-3v12a3 3 0 1 0 3 3h3a6 6 0 1 1-6-6V3h1.5Z" />
              </svg>
            </span>
            TikTok
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-2 py-4 text-sm font-semibold hover:bg-slate-50"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="h-4 w-4"
              >
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <path d="M16 11.37a4 4 0 1 1-2.91-2.91" />
                <path d="M17.5 6.5h.01" />
              </svg>
            </span>
            Instagram
          </a>
        </div>
      </div>
    </div>
  );
}
