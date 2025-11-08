import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Повернення товару",
  description:
    "Політика повернення товарів в онлайн-магазині NovaStore. Дізнайтеся про терміни, умови та порядок обміну або повернення.",
};

export default function ReturnPolicyPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-8 px-4 pb-16 pt-12 sm:px-6">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
          Гарантія та сервіс
        </p>
        <h1 className="text-4xl font-semibold text-zinc-900">Повернення товару</h1>
        <p className="text-sm leading-relaxed text-zinc-600">
          Ми дотримуємося Закону України «Про захист прав споживачів» та забезпечуємо прозорий процес повернення товарів.
        </p>
      </header>

      <section className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-semibold text-zinc-900">Терміни</h2>
        <p className="mt-3 text-sm leading-relaxed text-zinc-600">
          Ви можете повернути або обміняти товар протягом 14 календарних днів з моменту отримання, за умови збереження товарного вигляду та споживчих властивостей.
        </p>
      </section>

      <section className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-semibold text-zinc-900">Умови повернення</h2>
        <ul className="mt-4 space-y-3 text-sm text-zinc-600">
          <li>Товар має бути в оригінальній упаковці, без слідів використання.</li>
          <li>Необхідно надати чек або електронне підтвердження покупки з Prom.ua.</li>
          <li>Витрати на доставку повернення оплачує покупець, окрім випадків заводського браку.</li>
        </ul>
      </section>

      <section className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-semibold text-zinc-900">Порядок дій</h2>
        <ol className="mt-4 space-y-3 text-sm text-zinc-600">
          <li>Зв’яжіться з нами за телефоном або email та повідомте номер замовлення.</li>
          <li>Отримайте від менеджера інструкцію щодо упакування та адреси для повернення.</li>
          <li>Після отримання та перевірки товару кошти повертаються протягом 3 робочих днів.</li>
        </ol>
      </section>
    </div>
  );
}
