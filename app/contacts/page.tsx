import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Контакти",
  description:
    "Контактна інформація інтернет-магазину TechNova: телефони, адреса шоуруму, графік роботи та канали підтримки."
};

const contacts = [
  {
    title: "Головний офіс",
    lines: ["м. Київ, вул. Верхній Вал, 24", "Шоурум та точка видачі замовлень"],
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
          d="M12 21c-3.866 0-7-2.985-7-6.667C5 8.008 12 3 12 3s7 5.008 7 11.333C19 18.015 15.866 21 12 21Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 11.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
        />
      </svg>
    )
  },
  {
    title: "Підтримка клієнтів",
    lines: ["+420776384669", "+420776384669", "2015maxetavel@seznam.cz"],
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
  },
  {
    title: "Графік роботи",
    lines: ["Пн-Сб: 10:00 — 20:00", "Нд: 11:00 — 18:00", "Онлайн-підтримка 24/7"],
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
          d="M12 6v6l3.5 2.1M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z"
        />
      </svg>
    )
  }
];

export default function ContactsPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900">
          Контакти
        </h1>
        <p className="max-w-3xl text-sm text-slate-600">
          Потрібна консультація чи допомога з оформленням замовлення? Напишіть або
          зателефонуйте — наша команда оперативно відповість на всі питання.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-3">
        {contacts.map((contact) => (
          <article
            key={contact.title}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-100 to-indigo-100 text-sky-600">
              {contact.icon}
            </div>
            <h2 className="text-lg font-semibold text-slate-900">
              {contact.title}
            </h2>
            <ul className="mt-3 space-y-1 text-sm text-slate-600">
              {contact.lines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 text-sm text-slate-600">
          <h2 className="mb-3 text-lg font-semibold text-slate-900">
            Як доїхати
          </h2>
          <p className="mb-4">
            Ми знаходимось за 5 хвилин від станції метро Контрактова площа. Поруч
            зручна парковка, кавʼярні та сервісні центри партнерів.
          </p>
          <Link
            href="https://maps.app.goo.gl/placeholder"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-sky-500/30 transition hover:from-sky-600 hover:to-indigo-600 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
          >
            Відкрити на Google Maps
          </Link>
        </div>
        <div className="rounded-3xl border border-dashed border-slate-200 bg-slate-50/80 p-6 text-sm text-slate-600">
          <h2 className="mb-3 text-lg font-semibold text-slate-900">
            Канали звʼязку
          </h2>
          <ul className="space-y-2">
            <li>
              <span className="font-semibold text-slate-900">Telegram:</span>{" "}
              <Link href="https://t.me/technova_support" target="_blank">
                @technova_support
              </Link>
            </li>
            <li>
              <span className="font-semibold text-slate-900">Viber:</span>{" "}
              +420776384669
            </li>
            <li>
              <span className="font-semibold text-slate-900">Facebook:</span>{" "}
              <Link href="https://facebook.com/technova.ua" target="_blank">
                facebook.com/technova.ua
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
