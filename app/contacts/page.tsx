import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Контакти",
  description:
    "Контактна інформація інтернет-магазину TechNova: електронна пошта, телефон та Telegram для швидкого звʼязку."
};

const contacts = [
  {
    title: "Електронна пошта",
    lines: ["pavlishyn.ser@gmail.com", "Відповідаємо щодня з 09:00 до 21:00"],
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
          d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25H4.5a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0-9.75 6-9.75-6"
        />
      </svg>
    )
  },
  {
    title: "Телефон",
    lines: ["+38 (067) 777 48 17", "Дзвінки щодня з 09:00 до 21:00"],
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
          d="M2.25 6.75c0 8.284 6.716 15 15 15H18a2.25 2.25 0 0 0 2.25-2.25v-1.194a1.125 1.125 0 0 0-.853-1.09l-4.5-1.125a1.125 1.125 0 0 0-1.281.65l-.45 1.125a12.036 12.036 0 0 1-5.854-5.854l1.125-.45a1.125 1.125 0 0 0 .65-1.281l-1.125-4.5A1.125 1.125 0 0 0 7.694 3H6.5A2.25 2.25 0 0 0 4.25 5.25v1.5Z"
        />
      </svg>
    )
  },
  {
    title: "Telegram",
    lines: ["@Maks_pryjmak", "Напишіть нам у месенджері — відповімо оперативно"],
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
          d="M21 3 3 10.5l6.75 2.25M21 3l-7.5 18-3.75-8.25M9.75 12.75 21 3"
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
              Як ми працюємо
            </h2>
            <p className="mb-3">
              Магазин TechNova працює повністю онлайн. Оформлюйте замовлення у зручний час,
              а за потреби пишіть або телефонуйте — допоможемо підібрати найкраще рішення.
            </p>
            <p className="mb-4">
              Консультуємо з понеділка по неділю, відповідаємо протягом години у робочий час.
            </p>
            <Link
              href="mailto:pavlishyn.ser@gmail.com"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-sky-500/30 transition hover:from-sky-600 hover:to-indigo-600 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
            >
              Написати листа
            </Link>
          </div>
          <div className="rounded-3xl border border-dashed border-slate-200 bg-slate-50/80 p-6 text-sm text-slate-600">
            <h2 className="mb-3 text-lg font-semibold text-slate-900">
              Прямі контакти
            </h2>
            <ul className="space-y-2">
              <li>
                <span className="font-semibold text-slate-900">Email:</span>{" "}
                <Link href="mailto:pavlishyn.ser@gmail.com">
                  pavlishyn.ser@gmail.com
                </Link>
              </li>
              <li>
                <span className="font-semibold text-slate-900">Телефон:</span>{" "}
                <Link href="tel:+380677774817">+38 (067) 777 48 17</Link>
              </li>
              <li>
                <span className="font-semibold text-slate-900">Telegram:</span>{" "}
                <Link href="https://t.me/Maks_pryjmak" target="_blank">
                  @Maks_pryjmak
                </Link>
              </li>
            </ul>
          </div>
        </section>
    </div>
  );
}
