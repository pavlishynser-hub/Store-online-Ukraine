import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Контакти",
  description:
    "Зв’яжіться з Nova Market: телефони, email, месенджери, графік роботи і реквізити для співпраці.",
};

const contactItems = [
  {
    title: "Головний офіс",
    details: [
      "м. Київ, вул. Січових Стрільців, 23",
      "Графік: Пн-Сб 9:00 — 20:00",
    ],
  },
  {
    title: "Телефони",
    details: ["+38 (050) 000-00-00", "+38 (067) 000-00-00"],
  },
  {
    title: "Email",
    details: ["support@novamarket.ua", "b2b@novamarket.ua"],
  },
];

const messengerItems = [
  {
    name: "Telegram",
    url: "https://t.me/novamarket",
    username: "@NovaMarket",
  },
  {
    name: "Viber",
    url: "viber://chat?number=+380500000000",
    username: "+38 (050) 000-00-00",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/novamarket.ua",
    username: "@novamarket.ua",
  },
];

export default function ContactsPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
          Контакти Nova Market
        </h1>
        <p className="text-sm text-slate-600">
          Ми відкриті до співпраці та завжди раді вашим зверненням. Зв’яжіться з
          менеджером у зручний спосіб — відповідаємо протягом робочого дня.
        </p>
      </div>

      <section className="grid gap-6 md:grid-cols-3">
        {contactItems.map((item) => (
          <div
            key={item.title}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-100"
          >
            <h2 className="text-lg font-semibold text-slate-900">{item.title}</h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              {item.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-100">
        <h2 className="text-xl font-semibold text-slate-900">
          Месенджери та соцмережі
        </h2>
        <p className="mt-2 text-sm text-slate-600">
          Напишіть нам у будь-який месенджер — швидко відповідаємо на питання про
          наявність, статус замовлення та партнерство.
        </p>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {messengerItems.map((item) => (
            <a
              key={item.name}
              href={item.url}
              className="rounded-2xl border border-slate-200 bg-slate-50/80 px-5 py-4 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-900 hover:text-slate-900"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="block text-base text-slate-900">{item.name}</span>
              <span className="text-xs text-slate-500">{item.username}</span>
            </a>
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[2fr,3fr]">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-100">
          <h2 className="text-xl font-semibold text-slate-900">
            Реквізити компанії
          </h2>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>• ФОП «Новак Андрій Юрійович»</li>
            <li>• ЄДРПОУ 1234567890</li>
            <li>• Р/р UA00 1234 5678 9012 3456 7890 1234 в АТ «Монобанк»</li>
            <li>• Призначення платежу: за товар без ПДВ</li>
          </ul>
        </div>
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm shadow-slate-100">
          <iframe
            title="Nova Market на карті"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2538.9999999999995!2d30.495!3d50.450!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sNova%20Market!5e0!3m2!1suk!2sua!4v1700000000000!5m2!1suk!2sua"
            className="h-[360px] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </div>
  );
}
