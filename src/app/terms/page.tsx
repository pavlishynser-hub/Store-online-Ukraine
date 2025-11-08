import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Публічна оферта",
  description:
    "Публічна оферта інтернет-магазину NovaStore: умови продажу, оплати та відповідальності сторін.",
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-8 px-4 pb-16 pt-12 sm:px-6">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
          Правові умови
        </p>
        <h1 className="text-4xl font-semibold text-zinc-900">Публічна оферта</h1>
        <p className="text-sm leading-relaxed text-zinc-600">
          Цей документ регулює правила покупки товарів у NovaStore та є офіційною пропозицією укласти договір купівлі-продажу.
        </p>
      </header>

      <section className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm space-y-4">
        <div>
          <h2 className="text-2xl font-semibold text-zinc-900">1. Загальні положення</h2>
          <p className="mt-2 text-sm leading-relaxed text-zinc-600">
            Приймаючи цю оферту, покупець підтверджує знайомство з асортиментом, цінами та умовами оплати на Prom.ua та погоджується з ними.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-zinc-900">2. Оформлення замовлення</h2>
          <p className="mt-2 text-sm leading-relaxed text-zinc-600">
            Замовлення оформлюється через Prom.ua. Після підтвердження менеджером договір вважається укладеним, а обраний товар резервується.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-zinc-900">3. Оплата</h2>
          <p className="mt-2 text-sm leading-relaxed text-zinc-600">
            Оплата здійснюється на Prom.ua через захищені платіжні сервіси або післяплатою. Розрахунковий документ покупець отримує разом із замовленням.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-zinc-900">4. Доставка та передача товару</h2>
          <p className="mt-2 text-sm leading-relaxed text-zinc-600">
            Передача товару відбувається у відділенні перевізника або за адресою доставки. Ризики переходять до покупця з моменту отримання товару.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-zinc-900">5. Гарантії та повернення</h2>
          <p className="mt-2 text-sm leading-relaxed text-zinc-600">
            Гарантійні зобов’язання визначаються виробником або умовами, зазначеними на Prom.ua. Процедура повернення описана у розділі «Повернення товару».
          </p>
        </div>
      </section>
    </div>
  );
}
