import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Повернення товару",
  description:
    "Політика повернення та обміну товарів в інтернет-магазині TechNova відповідно до законодавства України."
};

const steps = [
  {
    title: "Зверніться до нас",
    description:
      "Напишіть на support@technova.ua або зателефонуйте за номером +38 (044) 123-45-67 протягом 14 днів з моменту отримання товару."
  },
  {
    title: "Підготуйте замовлення",
    description:
      "Збережіть товар у первинному вигляді, додайте чек Prom.ua, гарантійний талон та усі комплектуючі."
  },
  {
    title: "Відправте посилку",
    description:
      "Поверніть товар на склад Нової пошти №123, м. Київ. Вартість пересилання оплачує покупець, окрім випадків виробничого браку."
  }
];

const nonReturnableItems = [
  "Програмне забезпечення, відкриті ліцензійні ключі та цифрові підписки.",
  "Товари особистої гігієни (наушники-вкладиші, зубні щітки тощо), якщо порушено пломбування.",
  "Товари з механічними пошкодженнями або слідами використання.",
  "Продукція, виготовлена на індивідуальне замовлення."
];

export default function ReturnPolicyPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900">
          Повернення товару
        </h1>
        <p className="max-w-3xl text-sm text-slate-600">
          Ми гарантуємо якість нашої продукції та дотримуємось Закону України «Про
          захист прав споживачів». Ви можете повернути або обміняти товар протягом 14
          календарних днів з моменту отримання, якщо він не був у використанні.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-3">
        {steps.map((step, index) => (
          <article
            key={step.title}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-100 to-indigo-100 text-lg font-semibold text-sky-600">
              {index + 1}
            </div>
            <h2 className="text-lg font-semibold text-slate-900">{step.title}</h2>
            <p className="mt-2 text-sm text-slate-600">{step.description}</p>
          </article>
        ))}
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 text-sm text-slate-600">
        <h2 className="mb-3 text-lg font-semibold text-slate-900">
          Умови повернення коштів
        </h2>
        <p className="mb-2">
          Після отримання повернення ми перевіряємо товар протягом 1-2 робочих днів.
          У випадку позитивного висновку кошти зараховуються на картку, з якої
          здійснювалось замовлення на Prom.ua, протягом 3-5 банківських днів. Якщо
          товар виявиться з механічними пошкодженнями або зі слідами користування,
          повернення коштів може бути відхилено.
        </p>
        <p>
          У разі виявлення виробничого браку всі витрати на доставку оплачує TechNova.
          Підтвердженням браку є акт сервісного центру або відеофіксація розпакування.
        </p>
      </section>

      <section className="rounded-3xl border border-dashed border-rose-200 bg-rose-50/40 p-6 text-sm text-slate-600">
        <h2 className="mb-3 text-lg font-semibold text-rose-600">
          Товари, що не підлягають поверненню
        </h2>
        <ul className="list-disc space-y-2 pl-5">
          {nonReturnableItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
