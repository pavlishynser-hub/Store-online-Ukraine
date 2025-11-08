import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Доставка",
  description:
    "Умови та вартість доставки замовлень з онлайн-магазину TechNova по Україні."
};

const deliveryMethods = [
  {
    title: "Нова пошта",
    description:
      "Відправлення у відділення або курʼєром до дверей протягом 1-2 робочих днів.",
    details: [
      "Вартість згідно з тарифами перевізника та залежить від габаритів товару.",
      "Безкоштовне зберігання замовлення у відділенні протягом 7 днів.",
      "Можлива післяплата або попередня оплата через Prom.ua."
    ]
  },
  {
    title: "Укрпошта",
    description:
      "Доставка у відділення або курʼєром по всій Україні упродовж 2-4 робочих днів.",
    details: [
      "Оптимальний варіант для невеликих посилок та віддалених населених пунктів.",
      "Вартість розраховується згідно з тарифами Укрпошти.",
      "SMS та e-mail повідомлення про прибуття посилки."
    ]
  },
  {
    title: "Самовивіз у Києві",
    description:
      "Заберіть замовлення з точки видачі на Подолі (вул. Верхній Вал, 24).",
    details: [
      "Графік роботи: Пн-Сб з 10:00 до 20:00.",
      "Підготовка замовлення протягом 2 годин після підтвердження оплати.",
      "Оплата онлайн або при отриманні через POS-термінал."
    ]
  }
];

export default function DeliveryPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900">
          Доставка
        </h1>
        <p className="max-w-3xl text-sm text-slate-600">
          Ми оперативно доставляємо замовлення по всій території України партнерами
          Prom.ua. Обирайте зручний спосіб доставки та отримуйте замовлення у
          максимально короткі терміни.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {deliveryMethods.map((method) => (
          <article
            key={method.title}
            className="flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <div>
              <h2 className="text-xl font-semibold text-slate-900">
                {method.title}
              </h2>
              <p className="text-sm text-slate-600">{method.description}</p>
            </div>
            <ul className="space-y-2 text-sm text-slate-600">
              {method.details.map((detail) => (
                <li key={detail} className="flex items-start gap-2">
                  <span className="mt-1 inline-flex h-1.5 w-1.5 rounded-full bg-sky-500" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="rounded-3xl border border-dashed border-sky-200 bg-sky-50/40 p-6 text-sm text-slate-600">
        <h2 className="mb-3 text-lg font-semibold text-slate-900">
          Час обробки замовлення
        </h2>
        <p>
          Замовлення, підтверджені та оплачені до 16:00, відправляємо в той самий
          робочий день. Замовлення, оформлені після 16:00 або у вихідні, відправляємо
          наступного робочого дня. Після відправки ви отримуєте трек-номер у кабінеті
          Prom.ua та на e-mail.
        </p>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 text-sm text-slate-600">
        <h2 className="mb-3 text-lg font-semibold text-slate-900">
          Страхування та перевірка товару
        </h2>
        <p>
          Усі відправлення страхуються на повну вартість. При отриманні ви можете
          оглянути товар у присутності курʼєра або у відділенні перевізника. Виявивши
          пошкодження, оформіть акт і повідомте нашу службу підтримки протягом 24
          годин для швидкого врегулювання ситуації.
        </p>
      </section>
    </div>
  );
}
