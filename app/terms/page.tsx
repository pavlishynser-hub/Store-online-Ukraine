import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Публічна оферта",
  description:
    "Публічний договір оферти Nova Market: права та обов'язки сторін, умови оплати, доставки та повернення.",
};

export default function TermsPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
          Публічна оферта
        </h1>
        <p className="text-sm text-slate-600">
          Цей документ регулює взаємовідносини між інтернет-магазином Nova
          Market та споживачами при замовленні товарів на нашому сайті та на
          платформі Prom.ua.
        </p>
      </div>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-100">
        <h2 className="text-xl font-semibold text-slate-900">
          1. Загальні положення
        </h2>
        <p className="mt-2 text-sm text-slate-600">
          Розміщуючи замовлення на сайті Nova Market або на Prom.ua, ви приймаєте
          умови цієї публічної оферти. Підтвердженням угоди є факт оплати
          замовлення.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-100">
          <h3 className="text-lg font-semibold text-slate-900">
            2. Оформлення замовлення
          </h3>
          <p className="mt-2 text-sm text-slate-600">
            Замовлення здійснюється через сайт Nova Market або Prom.ua. Менеджер
            зв’язується з клієнтом для підтвердження замовлення та узгодження
            деталей доставки.
          </p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-100">
          <h3 className="text-lg font-semibold text-slate-900">
            3. Оплата та доставка
          </h3>
          <p className="mt-2 text-sm text-slate-600">
            Оплата здійснюється через Prom.ua або післяплатою. Доставка
            організовується у строки та на умовах, описаних на сторінці «Доставка».
          </p>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-100">
        <h3 className="text-lg font-semibold text-slate-900">
          4. Повернення та гарантії
        </h3>
        <p className="mt-2 text-sm text-slate-600">
          Повернення можливе протягом 14 днів згідно із Законом України «Про
          захист прав споживачів». Детальні умови викладені на сторінці
          «Повернення товару».
        </p>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-100">
        <h3 className="text-lg font-semibold text-slate-900">
          5. Відповідальність сторін
        </h3>
        <p className="mt-2 text-sm text-slate-600">
          Продавець несе відповідальність за якість і відповідність товару.
          Покупець відповідає за достовірність наданої інформації та прийняття
          товару у відділенні перевізника.
        </p>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-100">
        <h3 className="text-lg font-semibold text-slate-900">
          6. Форс-мажор
        </h3>
        <p className="mt-2 text-sm text-slate-600">
          Сторони звільняються від відповідальності за невиконання зобов’язань у
          випадку форс-мажорних обставин (військові дії, надзвичайні ситуації,
          стихійні лиха тощо), що підтверджені органами державної влади.
        </p>
      </section>

      <section className="rounded-3xl bg-slate-900/95 p-8 text-white shadow-xl shadow-slate-900/20">
        <h2 className="text-2xl font-semibold">Контактні дані продавця</h2>
        <p className="mt-2 text-sm text-slate-100/80">
          ФОП «Новак Андрій Юрійович»<br />
          ЄДРПОУ 1234567890<br />
          Адреса: м. Київ, вул. Січових Стрільців, 23<br />
          Email: legal@novamarket.ua
        </p>
      </section>
    </div>
  );
}
