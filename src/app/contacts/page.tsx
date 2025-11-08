import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Контакти",
  description:
    "Зв'яжіться з командою Мрія Маркет: телефони, електронна пошта, месенджери та офіс.",
};

export default function ContactsPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-widest text-sky-600">
          Контакти
        </p>
        <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
          Як нас знайти
        </h1>
        <p className="max-w-2xl text-sm leading-6 text-slate-600">
          Команда Мрія Маркет працює щодня, щоб ви отримували замовлення вчасно
          та без стресу. Ми відповідаємо на дзвінки, листи та повідомлення в
          месенджерах у робочий час.
        </p>
      </header>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">
            Служба турботи
          </h2>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>
              Телефон:{" "}
              <a href="tel:+380441234567" className="text-sky-600">
                +38 (044) 123 45 67
              </a>{" "}
              (пн-пт 09:00–18:00)
            </li>
            <li>
              Email:{" "}
              <a href="mailto:hello@mriyashop.ua" className="text-sky-600">
                hello@mriyashop.ua
              </a>
            </li>
            <li>
              Telegram:{" "}
              <a
                href="https://t.me/mriyashop_care"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-600"
              >
                @mriyashop_care
              </a>
            </li>
            <li>
              Viber:{" "}
              <a
                href="viber://chat?number=+380441234567"
                className="text-sky-600"
              >
                +38 (044) 123 45 67
              </a>
            </li>
          </ul>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-inner shadow-slate-200/70">
          <h2 className="text-lg font-semibold text-slate-900">
            Офіс та реквізити
          </h2>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>Юридична адреса: м. Київ, вул. Набережно-Рибальська, 3</li>
            <li>Логістичний склад: м. Київ, вул. Новокостянтинівська, 18</li>
            <li>Графік: пн-пт 09:00–18:00, сб-нд за попереднім записом</li>
            <li>Код ЄДРПОУ: 3456789012</li>
            <li>IBAN: UA123456780000026007890123456</li>
          </ul>
        </div>
      </section>

      <section className="rounded-[2.25rem] border border-slate-200 bg-white p-8 shadow-lg shadow-slate-200/60">
        <h2 className="text-xl font-semibold text-slate-900">
          Зворотній зв&apos;язок
        </h2>
        <p className="mt-3 text-sm text-slate-600">
          Заповніть коротку форму, і ми зв&apos;яжемося з вами протягом робочого
          дня.
        </p>
        <form className="mt-6 grid gap-4 sm:grid-cols-2">
          <label className="flex flex-col gap-2 text-sm text-slate-600">
            Ім&apos;я
            <input
              type="text"
              name="name"
              placeholder="Ваше ім'я"
              className="h-11 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-700 outline-none transition focus:border-sky-400 focus:bg-white focus:ring-2 focus:ring-sky-100"
              required
            />
          </label>
          <label className="flex flex-col gap-2 text-sm text-slate-600">
            Телефон
            <input
              type="tel"
              name="phone"
              placeholder="+38 (0XX) XXX XX XX"
              className="h-11 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-700 outline-none transition focus:border-sky-400 focus:bg-white focus:ring-2 focus:ring-sky-100"
              required
            />
          </label>
          <label className="flex flex-col gap-2 text-sm text-slate-600 sm:col-span-2">
            Коментар
            <textarea
              name="message"
              placeholder="Опишіть питання або номер замовлення"
              className="min-h-[120px] rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-sky-400 focus:bg-white focus:ring-2 focus:ring-sky-100"
              required
            />
          </label>
          <div className="sm:col-span-2">
            <button type="submit" className="btn-primary w-full sm:w-auto">
              Надіслати запит
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
