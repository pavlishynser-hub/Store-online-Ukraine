import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Публічна оферта",
  description:
    "Публічний договір купівлі-продажу Мрія Маркет. Умови співпраці, права та обов'язки сторін.",
};

export default function TermsPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-widest text-sky-600">
          Публічна оферта
        </p>
        <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
          Договір публічної оферти
        </h1>
        <p className="max-w-2xl text-sm leading-6 text-slate-600">
          Цей договір визначає умови купівлі-продажу товарів між інтернет-магазином
          «Мрія Маркет» та покупцем. Оформлення замовлення на Prom.ua означає
          повну згоду з умовами оферти.
        </p>
      </header>

      <section className="space-y-6">
        {termsSections.map((section) => (
          <article
            key={section.title}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <h2 className="text-lg font-semibold text-slate-900">
              {section.title}
            </h2>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-slate-600">
              {section.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </article>
        ))}
      </section>

      <section className="rounded-[2.25rem] border border-slate-200 bg-slate-50 p-8 shadow-inner shadow-slate-200/70">
        <h2 className="text-xl font-semibold text-slate-900">
          Реквізити продавця
        </h2>
        <ul className="mt-3 space-y-2 text-sm text-slate-600">
          <li>ФОП Петренко Марія Олександрівна</li>
          <li>ЄДРПОУ: 3456789012</li>
          <li>Р/р: UA123456780000026007890123456 в АТ «Приватбанк»</li>
          <li>Адреса: м. Київ, вул. Набережно-Рибальська, 3</li>
          <li>Телефон: +38 (044) 123 45 67, email: office@mriyashop.ua</li>
        </ul>
      </section>
    </div>
  );
}

const termsSections = [
  {
    title: "Предмет договору",
    items: [
      "Продавець продає, а Покупець купує товари, представлені на сайті mriyashop.ua та сторінках Prom.ua.",
      "Вартість товару визначається під час оформлення замовлення та зазначається у підтвердженні на Prom.ua.",
      "Продавець гарантує відповідність товару опису та зобов'язується передати товар належної якості.",
    ],
  },
  {
    title: "Порядок оформлення замовлення",
    items: [
      "Покупець оформлює замовлення через кошик Prom.ua або за допомогою менеджера магазину.",
      "Продавець підтверджує замовлення повідомленням у месенджері, електронною поштою чи телефоном.",
      "Оплата здійснюється на Prom.ua або шляхом безготівкового рахунку за домовленістю сторін.",
    ],
  },
  {
    title: "Права та обов'язки сторін",
    items: [
      "Продавець зобов'язується своєчасно відправити товар та надати трек-номер.",
      "Покупець зобов'язується перевірити комплектність товару при отриманні.",
      "У разі виявлення недоліків Покупець має право на ремонт, заміну або повернення коштів.",
    ],
  },
  {
    title: "Відповідальність сторін",
    items: [
      "Продавець несе відповідальність за несвоєчасну поставку, якщо інше не сталося з вини перевізника.",
      "Покупець несе відповідальність за достовірність наданих контактних даних.",
      "Сторони звільняються від відповідальності у випадку форс-мажорних обставин.",
    ],
  },
] as const;
