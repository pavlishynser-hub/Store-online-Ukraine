import Link from "next/link";

import { Hero } from "@/components/Hero";
import { ProductCard } from "@/components/ProductCard";
import {
  getCategories,
  getFeaturedProducts,
  getProducts,
} from "@/lib/products";

export default function Home() {
  return (
    <div className="space-y-16 pb-10">
      <Hero />

      <section className="grid gap-6 lg:grid-cols-3">
        {[
          {
            title: "Підтримка Prom.ua",
            description:
              "Оплачуйте замовлення безпечно через Prom.ua — ми одразу перенаправимо вас на сторінку продавця.",
            icon: "🛍️",
          },
          {
            title: "Швидке обслуговування",
            description:
              "Наш менеджер супроводжує покупку, відповідає на запитання та слідкує за статусом доставки.",
            icon: "⚡",
          },
          {
            title: "Гарантія повернення",
            description:
              "14 днів на повернення або обмін без зайвих питань. Готові надати всі підтверджуючі документи.",
            icon: "🤝",
          },
        ].map((feature) => (
          <div key={feature.title} className="glass-card space-y-3 p-6">
            <span className="text-3xl">{feature.icon}</span>
            <h2 className="text-lg font-semibold text-slate-900">
              {feature.title}
            </h2>
            <p className="text-sm leading-relaxed text-slate-600">
              {feature.description}
            </p>
          </div>
        ))}
      </section>

      <FeaturedProducts />
      <Categories />
      <WhyUs />
    </div>
  );
}

function FeaturedProducts() {
  const featured = getFeaturedProducts(6);

  return (
    <section className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold text-slate-900">
            Популярні товари
          </h2>
          <p className="text-sm text-slate-600">
            Вибрані позиції, які наші клієнти найчастіше замовляють через
            Prom.ua
          </p>
        </div>
        <Link href="/catalog" className="btn-secondary">
          Переглянути весь каталог
        </Link>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {featured.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

function Categories() {
  const categories = getCategories();
  const totalProducts = getProducts().length;

  return (
    <section className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold text-slate-900">
            Обирайте за категоріями
          </h2>
          <p className="text-sm text-slate-600">
            {totalProducts} товарів, які ми відібрали для вас із Prom.ua
          </p>
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {categories.map((category) => (
          <Link
            key={category}
            href={{ pathname: "/catalog", query: { category } }}
            className="group flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-sky-200 hover:shadow-lg"
          >
            <div>
              <p className="text-sm font-semibold text-slate-500">
                Категорія
              </p>
              <p className="mt-2 text-lg font-semibold text-slate-900">
                {category}
              </p>
            </div>
            <span className="mt-6 text-xs font-medium uppercase text-sky-600">
              Переглянути →
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section className="grid gap-8 rounded-[2.5rem] bg-white p-8 shadow-inner shadow-slate-200/80 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
      <div className="space-y-5">
        <h2 className="text-2xl font-semibold text-slate-900">
          Чому покупці обирають Мрія Маркет
        </h2>
        <p className="text-base leading-7 text-slate-600">
          Ми поєднуємо зручність онлайн-магазину та надійність сервісів Prom.ua.
          Замовляйте товари, які вам до душі, а ми подбаємо про оплату,
          логістику та підтримку.
        </p>
        <ul className="space-y-3 text-sm text-slate-600">
          {[
            "Постійний моніторинг актуальності товарів та цін.",
            "Офіційні фіскальні чеки та документи на вимогу.",
            "Сповіщення про статус доставки в месенджері.",
            "Персональні підбірки та корпоративні замовлення.",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-1 text-sky-600">●</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-3 pt-2">
          <Link href="/contacts" className="btn-primary">
            Зв’язатися з нами
          </Link>
          <a
            href="https://t.me/"
            className="btn-secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Telegram-підтримка
          </a>
        </div>
      </div>
      <div className="grid gap-4 rounded-[2rem] border border-slate-200 bg-gradient-to-br from-slate-50 to-sky-50 p-6 shadow-lg shadow-slate-300/30">
        {[
          {
            title: "Працюємо по всій Україні",
            description: "Нова Пошта, Укрпошта та кур'єрська доставка.",
          },
          {
            title: "Контроль якості",
            description:
              "Перевіряємо кожного продавця та читаємо відгуки клієнтів.",
          },
          {
            title: "Оплата на Prom.ua",
            description:
              "Жодних додаткових комісій — лише безпечна оплата на маркетплейсі.",
          },
        ].map((item) => (
          <div key={item.title} className="rounded-2xl bg-white/70 p-5 shadow">
            <p className="text-sm font-semibold text-sky-600">{item.title}</p>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
