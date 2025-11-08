import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Доставка по Україні",
  description:
    "Інформація про варіанти доставки Мрія Маркет: Нова Пошта, Укрпошта, кур'єр, строки та тарифи.",
};

export default function DeliveryPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-widest text-sky-600">
          Доставка
        </p>
        <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
          Як ми доставляємо ваші замовлення
        </h1>
        <p className="max-w-2xl text-sm leading-6 text-slate-600">
          Після оплати на Prom.ua ми одразу реєструємо відправлення та надсилаємо
          вам трек-номер. Працюємо лише з перевіреними службами доставки та
          контролюємо терміни.
        </p>
      </header>

      <section className="grid gap-6 lg:grid-cols-2">
        {[
          {
            title: "Нова Пошта",
            description:
              "Відправляємо щоденно. Термін доставки 1–3 робочі дні. Вартість — за тарифами перевізника, можлива післяплата.",
          },
          {
            title: "Укрпошта",
            description:
              "Доступно для населених пунктів без відділень Нової Пошти. Термін доставки 3–5 робочих днів.",
          },
          {
            title: "Кур'єр по Києву",
            description:
              "Доставка день у день за попереднім узгодженням. Вартість кур'єрської послуги від 120 грн.",
          },
          {
            title: "Самовивіз зі складу",
            description:
              "Безкоштовно з нашого складу в Києві (житловий комплекс Rybalsky), лише за попереднім підтвердженням менеджера.",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <h2 className="text-lg font-semibold text-slate-900">{item.title}</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              {item.description}
            </p>
          </div>
        ))}
      </section>

      <section className="rounded-[2.25rem] border border-slate-200 bg-slate-50 p-8 shadow-inner shadow-slate-200/70">
        <h2 className="text-xl font-semibold text-slate-900">
          Важлива інформація
        </h2>
        <ul className="mt-4 space-y-3 text-sm text-slate-600">
          <li>
            • Страхуємо відправлення на повну вартість товару для додаткового
            захисту.
          </li>
          <li>
            • Якщо товар в наявності, відправляємо в той самий або наступний
            робочий день.
          </li>
          <li>
            • Післяплата доступна для замовлень до 10 000 грн з передоплатою 10%.
          </li>
          <li>
            • Перевірку посилки на відділенні рекомендуємо проводити у присутності
            працівника служби доставки.
          </li>
        </ul>
      </section>
    </div>
  );
}
