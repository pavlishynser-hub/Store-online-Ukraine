import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Повернення товару",
  description:
    "Строки та правила повернення товару в Мрія Маркет. Заповніть форму звернення та отримайте швидку підтримку.",
};

export default function ReturnPolicyPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-widest text-sky-600">
          Повернення
        </p>
        <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
          Правила повернення та обміну
        </h1>
        <p className="max-w-2xl text-sm leading-6 text-slate-600">
          Ми підтримуємо прозорі умови повернення у відповідності до Закону
          України «Про захист прав споживачів». Будь ласка, зберігайте чек та
          заводську упаковку до завершення періоду повернення.
        </p>
      </header>

      <section className="rounded-[2.25rem] border border-slate-200 bg-white p-8 shadow-lg shadow-slate-200/60">
        <h2 className="text-xl font-semibold text-slate-900">
          Строки та умови
        </h2>
        <ul className="mt-4 space-y-3 text-sm text-slate-600">
          <li>• Повернення або обмін можливі протягом 14 календарних днів.</li>
          <li>
            • Товар повинен бути у первісному стані без слідів використання, з
            повною комплектацією.
          </li>
          <li>
            • Розрахунковий документ (фіскальний чек або накладна) обов&apos;язковий.
          </li>
          <li>
            • Транспортні витрати на повернення бере на себе покупець, якщо
            інше не погоджено додатково.
          </li>
        </ul>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-inner shadow-slate-200/70">
          <h3 className="text-lg font-semibold text-slate-900">
            Порядок повернення
          </h3>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-slate-600">
            <li>Заповніть форму звернення або напишіть менеджеру в чат.</li>
            <li>Підготуйте фото товару та упаковки.</li>
            <li>
              Надішліть посилку на адресу, вказану менеджером, та повідомте
              номер ТТН.
            </li>
            <li>
              Повернення коштів здійснюємо протягом 3 робочих днів після
              отримання та перевірки товару.
            </li>
          </ol>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-900">
            Звернення до служби турботи
          </h3>
          <p className="mt-2 text-sm text-slate-600">
            Напишіть нам на <strong>support@mriyashop.ua</strong> або в Telegram{" "}
            <strong>@mriyashop_care</strong>. Вкажіть номер замовлення,
            контактний телефон та причину повернення.
          </p>
          <p className="mt-4 text-sm text-slate-600">
            Якщо товар виявився бракованим, ми покриємо всі витрати на
            доставку та оперативно оформимо обмін.
          </p>
        </div>
      </section>
    </div>
  );
}
