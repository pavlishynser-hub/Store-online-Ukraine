import Link from "next/link";
import Image from "next/image";
import products from "@/../data/products.json";
import { ProductCard, type Product } from "@/components/ProductCard";

const productList = products as Product[];
const featuredProducts = productList.slice(0, 3);

const highlights = [
  {
    title: "Гарантована оплата",
    description: "Оформлюйте замовлення та сплачуйте безпечно через Prom.ua.",
    icon: (
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
          d="M12 6v12m0 0-3.5-3.5M12 18l3.5-3.5M20.25 14.831A2.25 2.25 0 0 0 21 13.5v-3a2.25 2.25 0 0 0-.75-1.331l-7.5-6a2.25 2.25 0 0 0-3 0l-7.5 6A2.25 2.25 0 0 0 2.25 10.5v3c0 .69.312 1.34.75 1.831V19.5A1.5 1.5 0 0 0 4.5 21h3a1.5 1.5 0 0 0 1.5-1.5V16.5h6V19.5A1.5 1.5 0 0 0 16.5 21h3a1.5 1.5 0 0 0 1.5-1.5v-3.669Z"
        />
      </svg>
    )
  },
  {
    title: "Доставка до дверей",
    description: "Надсилаємо замовлення Новою поштою та Укрпоштою по всій Україні.",
    icon: (
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
          d="M3.75 7.5l6.75-3 6.75 3m-13.5 0l6.75 3 6.75-3m-13.5 0V16.5l6.75 3 6.75-3V7.5"
        />
      </svg>
    )
  },
  {
    title: "Підтримка 7 днів на тиждень",
    description: "Консультації щодо вибору, гарантії та налаштування обладнання.",
    icon: (
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
          d="M18 14v3a2 2 0 0 1-2 2h-1.268a2 2 0 0 0-1.664.89L12 22l-1.068-1.11A2 2 0 0 0 9.268 19H8a2 2 0 0 1-2-2v-3m12 0a3.5 3.5 0 0 0 0-7m0 7H6m0 0a3.5 3.5 0 1 1 0-7"
        />
      </svg>
    )
  }
];

export default function Home() {
  return (
    <div className="space-y-16 lg:space-y-24">
      <section className="relative overflow-hidden rounded-[40px] bg-white px-6 py-16 shadow-xl shadow-sky-100/50 sm:px-10 lg:px-16">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_#bae6fd,_transparent_60%)]" />
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-1 text-sm font-medium text-sky-700">
              Нові технології для кожного дня
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Обирайте гаджети, що підкреслюють ваш стиль життя
            </h1>
            <p className="max-w-xl text-lg text-slate-600">
              TechNova — це добірка трендових пристроїв, перевірені партнери та
              підтримка на кожному етапі. Купуйте безпечно та швидко завдяки
              інтеграції з Prom.ua.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/catalog"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-sky-500/30 transition hover:from-sky-600 hover:to-indigo-600 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
              >
                Перейти до каталогу
              </Link>
              <Link
                href="/delivery"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-sky-200 bg-white/80 px-6 py-3 text-base font-semibold text-sky-600 shadow-sm transition hover:border-sky-300 hover:bg-white"
              >
                Умови доставки
              </Link>
            </div>
            <div className="flex flex-wrap gap-6 text-sm text-slate-500">
              <span className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                Надійні постачальники
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-sky-400" />
                Захищені платежі
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-indigo-400" />
                Служба підтримки 24/7
              </span>
            </div>
          </div>
          <div className="relative mx-auto h-full w-full max-w-md">
            <div className="absolute inset-10 rounded-[40px] bg-gradient-to-br from-sky-200/60 via-white to-indigo-200/40 blur-3xl" />
            <div className="relative overflow-hidden rounded-[32px] border border-white/60 bg-white/90 shadow-2xl shadow-sky-200/50 backdrop-blur">
              <Image
                src="/images/product-01.svg"
                alt="TechNova hero"
                width={640}
                height={640}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {highlights.map((item) => (
          <div
            key={item.title}
            className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-sky-100 opacity-0 blur-lg transition group-hover:opacity-100" />
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-100 to-indigo-100 text-sky-600">
              {item.icon}
            </div>
            <h2 className="mb-2 text-xl font-semibold text-slate-900">
              {item.title}
            </h2>
            <p className="text-sm text-slate-600">{item.description}</p>
          </div>
        ))}
      </section>

      <section className="space-y-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
              Топ-позиції тижня
            </h2>
            <p className="text-sm text-slate-600">
              Хіти продажів, які обирають наші клієнти для роботи, відпочинку та
              подорожей.
            </p>
          </div>
          <Link
            href="/catalog"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2 text-sm font-semibold text-slate-600 transition hover:border-slate-300 hover:text-slate-900"
          >
            Переглянути весь каталог
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
