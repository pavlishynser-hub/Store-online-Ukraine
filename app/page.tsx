import Image from "next/image";
import Link from "next/link";
import { CatalogFilter } from "@/components/catalog-filter";
import { ProductCard } from "@/components/product-card";
import {
  getCategories,
  getFeaturedProducts,
  getProducts,
} from "@/lib/products";

const highlights = [
  {
    title: "Швидка доставка",
    description: "Відправляємо щодня Новою Поштою та Укрпоштою по всій Україні.",
    icon: (
      <svg
        width={28}
        height={28}
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <rect
          x="3"
          y="7"
          width="18"
          height="12"
          rx="3"
          fill="#1d4ed8"
          opacity="0.12"
        />
        <path
          d="M4 9.5A1.5 1.5 0 0 1 5.5 8h13A1.5 1.5 0 0 1 20 9.5v5A1.5 1.5 0 0 1 18.5 16h-13A1.5 1.5 0 0 1 4 14.5v-5Z"
          stroke="#1d4ed8"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.5 12h4"
          stroke="#1d4ed8"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Безпечні покупки",
    description: "Оформлюйте замовлення через Prom.ua з гарантією повернення.",
    icon: (
      <svg
        width={28}
        height={28}
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M12 4 5 7v4c0 4.284 2.89 8.288 7 9 4.11-.712 7-4.716 7-9V7l-7-3Z"
          stroke="#1e3a8a"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="M9.5 11.5 11.1 13l3.4-3.5"
          stroke="#1e3a8a"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Підтримка щодня",
    description: "Консультації менеджера у месенджерах та телефоном з 9:00 до 20:00.",
    icon: (
      <svg
        width={28}
        height={28}
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M4 11.5C4 7.357 7.134 4 11 4s7 3.357 7 7.5c0 1.197-.266 2.33-.74 3.343l1.51 3.207a1 1 0 0 1-1.324 1.35l-3.074-1.217A7.69 7.69 0 0 1 11 19C7.134 19 4 15.643 4 11.5Z"
          stroke="#0f172a"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="M9.5 12h3.75"
          stroke="#0f172a"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="9" cy="8.5" r=".75" fill="#0f172a" />
        <circle cx="13" cy="8.5" r=".75" fill="#0f172a" />
      </svg>
    ),
  },
];

export default function Home() {
  const featuredProducts = getFeaturedProducts(6);
  const allProducts = getProducts();
  const categories = getCategories();

  return (
    <div className="space-y-16 lg:space-y-20">
      <section className="relative overflow-hidden rounded-3xl bg-slate-900 text-white shadow-2xl shadow-slate-900/20">
        <Image
          src="/images/hero-banner.svg"
          alt="Головний банер Nova Market"
          width={1440}
          height={720}
          priority
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="relative z-10 grid gap-10 px-8 py-16 sm:px-12 lg:grid-cols-[1.2fr,1fr] lg:items-center lg:px-16 lg:py-20">
          <div className="space-y-6">
            <span className="inline-flex items-center rounded-full bg-white/15 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-sky-100">
              Нові колекції осінь-зима 2025
            </span>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
              Трендові гаджети, товари для дому та активного життя
            </h1>
            <p className="max-w-xl text-base text-slate-100/90 sm:text-lg">
              У Nova Market ви знайдете перевірені товари від українських та
              світових брендів. Обирайте, додавайте у кошик на Prom.ua і
              отримуйте доставку будь-якою службою по Україні.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/catalog"
                className="rounded-full bg-white px-6 py-3 text-center text-sm font-semibold text-slate-900 shadow-lg shadow-slate-900/20 transition hover:-translate-y-0.5 hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Перейти до каталогу
              </Link>
              <Link
                href="/delivery"
                className="rounded-full bg-white/10 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Дізнатись про доставку
              </Link>
            </div>
            <div className="grid gap-6 pt-6 sm:grid-cols-3">
              {[
                { value: "20+", label: "перевірених брендів" },
                { value: "48 год", label: "середній час доставки" },
                { value: "100%", label: "захист покупця Prom.ua" },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl bg-white/10 p-4">
                  <p className="text-2xl font-semibold text-white">
                    {item.value}
                  </p>
                  <p className="text-xs uppercase tracking-wide text-slate-200/80">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative hidden h-full rounded-3xl bg-white/10 p-6 shadow-inner shadow-slate-950/10 lg:flex lg:flex-col lg:gap-4">
            <p className="text-sm font-medium uppercase tracking-wide text-sky-100">
              Популярні категорії
            </p>
            <div className="grid gap-3">
              {categories.slice(0, 6).map((category) => (
                <Link
                  key={category}
                  href={`/catalog?category=${encodeURIComponent(category)}`}
                  className="flex items-center justify-between rounded-2xl bg-white/15 px-5 py-4 text-sm font-semibold text-white transition hover:bg-white/25"
                >
                  <span>{category}</span>
                  <span aria-hidden="true">→</span>
                </Link>
              ))}
            </div>
            <div className="mt-auto rounded-2xl bg-white px-6 py-5 text-slate-900 shadow-lg shadow-slate-900/30">
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                Оплата на Prom.ua
              </p>
              <p className="mt-2 text-sm text-slate-600">
                Ми одразу перенаправляємо вас до корзини Prom.ua, де оплата
                відбувається безпечно зі 100% підтримкою платформи.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
          Чому покупці обирають Nova Market
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl bg-white p-6 shadow-sm shadow-slate-100 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-slate-900">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-slate-900">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
              Нові надходження
            </h2>
            <p className="text-sm text-slate-600">
              Оновлюємо асортимент щотижня. Кількість товарів обмежена.
            </p>
          </div>
          <Link
            href="/catalog"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-5 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-900 hover:text-slate-900"
          >
            Переглянути всі товари
            <span aria-hidden="true">→</span>
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
            Каталог товарів
          </h2>
          <p className="text-sm text-slate-600">
            Використовуйте пошук та фільтри, щоб швидко знайти потрібний товар.
          </p>
        </div>
        <CatalogFilter products={allProducts} categories={categories} />
      </section>
    </div>
  );
}
