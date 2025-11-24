import { ProductCard } from "@/components/ProductCard";

import { products } from "@data/products";

const ctaLabels = [
  "Перейти до товару ›",
  "Детальніше ›",
  "Переглянути ›",
  "Обрати подушку ›"
];

export default function Home() {
  const featured = products.slice(0, 4);

  return (
    <div className="relative mx-auto flex min-h-screen w-full max-w-xl flex-col gap-8 bg-transparent px-4 pb-32 pt-10 sm:max-w-2xl">
      <header className="flex flex-col gap-6 rounded-3xl bg-white/70 p-6 shadow-sm ring-1 ring-white/40">
        <div className="flex items-center gap-4">
          <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg shadow-blue-600/30">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="h-9 w-9"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 16h14M5 16l1.5-7.5A2 2 0 0 1 8.47 7H15.5a2 2 0 0 1 1.98 1.69L19 16m-8 0v3m-4 0h8"
              />
            </svg>
          </span>
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
              AutoComfort Hub
            </p>
            <h1 className="text-2xl font-bold text-slate-900">
              Товари для комфортної поїздки щодня
            </h1>
          </div>
        </div>
        <p className="text-base text-slate-600">
          Ми зібрали 4 найзручніші автоаксесуари, що допомагають тримати салон у
          порядку, розслаблятись після дороги та піклуватися про спину під час
          поїздок.
        </p>
      </header>

      <section className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
          Хіти AutoComfort
        </p>
        <div className="space-y-4">
          {featured.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              ctaLabel={ctaLabels[index] ?? "Детальніше ›"}
            />
          ))}
        </div>
      </section>

      <section className="flex items-center gap-4 rounded-3xl bg-blue-600 p-5 text-white shadow-md">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 7h13l4 5v5H3V7zm0 0V5h16v2"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7 16h.01M17 16h.01"
            />
          </svg>
        </span>
        <div>
          <p className="text-lg font-semibold">Швидка доставка по всій Україні</p>
          <p className="text-sm text-blue-100">Оплата при отриманні або онлайн</p>
        </div>
      </section>

      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 shadow-[0_-4px_20px_rgba(15,23,42,0.08)]">
        <div className="mx-auto flex w-full max-w-xl divide-x divide-slate-100 overflow-hidden rounded-t-3xl sm:max-w-2xl">
          <a
            href="https://tiktok.com"
            target="_blank"
            rel="noreferrer"
            className="flex w-1/2 items-center justify-center gap-2 bg-white py-4 text-base font-semibold text-slate-800 transition hover:bg-slate-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6 w-6 text-slate-900"
            >
              <path d="M12.5 3c1.1 1.6 2.6 2.7 4.5 3V9a6 6 0 1 1-5.1 9h.1a2.4 2.4 0 1 0 1.9-3.8V3H12.5Z" />
            </svg>
            TikTok
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="flex w-1/2 items-center justify-center gap-2 bg-white py-4 text-base font-semibold text-slate-800 transition hover:bg-slate-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="h-6 w-6 text-slate-900"
            >
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="3.5" />
              <circle cx="17" cy="7" r="1" fill="currentColor" />
            </svg>
            Instagram
          </a>
        </div>
      </div>
    </div>
  );
}
