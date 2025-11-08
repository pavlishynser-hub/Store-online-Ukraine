import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Контакти",
  description:
    "Зв’яжіться з командою NovaStore: телефон, email, графік роботи та реквізити для партнерів.",
};

export default function ContactsPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-8 px-4 pb-16 pt-12 sm:px-6">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
          Ми на зв’язку
        </p>
        <h1 className="text-4xl font-semibold text-zinc-900">Контакти</h1>
        <p className="text-sm leading-relaxed text-zinc-600">
          Наші менеджери завжди готові допомогти з вибором товарів, консультацією та обробкою замовлень.
        </p>
      </header>

      <section className="grid gap-6 sm:grid-cols-2">
        <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-zinc-900">Клієнтська підтримка</h2>
          <ul className="mt-4 space-y-2 text-sm text-zinc-600">
            <li>
              Телефон: <a className="font-semibold text-zinc-900" href="tel:+380441234567">+38 (044) 123-45-67</a>
            </li>
            <li>
              Email: <a className="font-semibold text-zinc-900" href="mailto:info@novastore.ua">info@novastore.ua</a>
            </li>
            <li>Графік роботи: Пн-Пт, 09:00–18:00</li>
          </ul>
        </div>
        <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-zinc-900">Юридична інформація</h2>
          <ul className="mt-4 space-y-2 text-sm text-zinc-600">
            <li>ТОВ «Нова Торгівля»</li>
            <li>ЄДРПОУ: 12345678</li>
            <li>Адреса: м. Київ, вул. Прикладна, 10</li>
          </ul>
        </div>
      </section>

      <section className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-semibold text-zinc-900">Соціальні мережі</h2>
        <p className="mt-3 text-sm leading-relaxed text-zinc-600">
          Слідкуйте за новинами, акціями та оглядами новинок у наших соціальних мережах.
        </p>
        <div className="mt-4 flex flex-wrap gap-3 text-sm font-semibold text-zinc-900">
          <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="rounded-full border border-zinc-200 px-4 py-2 transition hover:border-zinc-900">
            Facebook
          </Link>
          <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="rounded-full border border-zinc-200 px-4 py-2 transition hover:border-zinc-900">
            Instagram
          </Link>
          <Link href="https://t.me" target="_blank" rel="noopener noreferrer" className="rounded-full border border-zinc-200 px-4 py-2 transition hover:border-zinc-900">
            Telegram
          </Link>
        </div>
      </section>
    </div>
  );
}
