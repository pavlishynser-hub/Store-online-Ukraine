import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Доставка",
  description:
    "Інформація про способи та вартість доставки в онлайн-магазині NovaStore. Доставка Новою поштою, Укрпоштою та кур’єром по Києву.",
};

export default function DeliveryPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-8 px-4 pb-16 pt-12 sm:px-6">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
          Інформація для покупців
        </p>
        <h1 className="text-4xl font-semibold text-zinc-900">Доставка</h1>
        <p className="text-sm leading-relaxed text-zinc-600">
          Ми піклуємося про швидкість і надійність доставки. Нижче наведені доступні способи, строки та тарифи.
        </p>
      </header>

      <section className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-semibold text-zinc-900">Способи доставки</h2>
        <ul className="mt-4 space-y-3 text-sm text-zinc-600">
          <li>
            <span className="font-semibold text-zinc-900">Нова пошта</span>: доставка у відділення або кур’єром. Замовлення відправляємо щодня до 17:00.
          </li>
          <li>
            <span className="font-semibold text-zinc-900">Укрпошта</span>: економічне рішення для невеликих населених пунктів. Орієнтовний строк — 3-5 робочих днів.
          </li>
          <li>
            <span className="font-semibold text-zinc-900">Кур’єр по Києву</span>: доступно для замовлень, оформлених до 12:00. Доставка в той самий або наступний день.
          </li>
        </ul>
      </section>

      <section className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-semibold text-zinc-900">Вартість і строки</h2>
        <p className="mt-3 text-sm leading-relaxed text-zinc-600">
          Вартість доставки залежить від тарифів вибраного перевізника. При замовленні від 2000 грн доставка у відділення Нової пошти — безкоштовна.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-zinc-600">
          Для Києва кур’єрська доставка коштує від 120 грн. Оплата доставки здійснюється при отриманні або включається в рахунок, сформований на Prom.ua.
        </p>
      </section>

      <section className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-semibold text-zinc-900">Відстеження</h2>
        <p className="mt-3 text-sm leading-relaxed text-zinc-600">
          Після відправлення ви отримаєте SMS або email з номером експрес-накладної. Статус можна відстежувати в особистому кабінеті Prom.ua або на сайті перевізника.
        </p>
      </section>
    </div>
  );
}
