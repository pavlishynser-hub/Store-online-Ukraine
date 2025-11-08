import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Повернення товару",
  description:
    "Політика повернення товарів Nova Market: строки, умови та інструкції щодо оформлення повернення.",
};

export default function ReturnPolicyPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
          Політика повернення товару
        </h1>
        <p className="text-sm text-slate-600">
          Ми дбаємо про ваш досвід покупки, тому гарантуємо можливість повернути
          або обміняти товар згідно із Законом України «Про захист прав
          споживачів».
        </p>
      </div>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-100">
        <h2 className="text-xl font-semibold text-slate-900">
          Термін повернення
        </h2>
        <p className="mt-2 text-sm text-slate-600">
          Ви можете повернути товар протягом 14 календарних днів з моменту
          отримання, якщо він не був у використанні, збережено товарний вигляд,
          усі пломби та заводська упаковка.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-100">
          <h3 className="text-lg font-semibold text-slate-900">
            Умови повернення
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>• Товар не має слідів використання, подряпин чи пошкоджень.</li>
            <li>• Збережено заводську упаковку, ярлики та пломби.</li>
            <li>• Є документ, що підтверджує покупку (лист Prom.ua або чек).</li>
          </ul>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-100">
          <h3 className="text-lg font-semibold text-slate-900">
            Товари, що не підлягають поверненню
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>• Засоби особистої гігієни, косметика та побутова хімія.</li>
            <li>• Пошкоджені з вини покупця або без заводської упаковки.</li>
            <li>• Цифрові товари після активації коду або ліцензії.</li>
          </ul>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-100">
        <h3 className="text-lg font-semibold text-slate-900">
          Алгоритм повернення
        </h3>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-slate-600">
          <li>
            Надішліть запит на повернення через ваш кабінет на Prom.ua або
            зверніться до нас у розділі «Контакти».
          </li>
          <li>
            Узгодьте з менеджером адресу та спосіб відправлення товару назад.
          </li>
          <li>
            Після отримання та перевірки товару ми оформляємо повернення коштів
            на ваш рахунок протягом 3 робочих днів.
          </li>
        </ol>
      </section>

      <section className="rounded-3xl bg-slate-900/95 p-8 text-white shadow-xl shadow-slate-900/20">
        <h2 className="text-2xl font-semibold">
          Потрібна консультація з повернення?
        </h2>
        <p className="mt-2 text-sm text-slate-100/80">
          Напишіть нам на support@novamarket.ua або зателефонуйте
          +38&nbsp;(050)&nbsp;000-00-00 — наші менеджери допоможуть вирішити
          будь-які питання.
        </p>
      </section>
    </div>
  );
}
