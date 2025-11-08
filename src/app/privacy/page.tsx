import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Політика конфіденційності",
  description:
    "Дізнайтеся, як Мрія Маркет обробляє персональні дані, захищає інформацію та використовує файли cookie.",
};

export default function PrivacyPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-widest text-sky-600">
          Конфіденційність
        </p>
        <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
          Політика конфіденційності Мрія Маркет
        </h1>
        <p className="max-w-2xl text-sm leading-6 text-slate-600">
          Ми дотримуємося вимог Закону України «Про захист персональних даних»
          та гарантуємо безпечне зберігання вашої інформації. Усі дані
          обробляються на серверах, розташованих у ЄС.
        </p>
      </header>

      <section className="space-y-6">
        {sections.map((section) => (
          <article
            key={section.title}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <h2 className="text-lg font-semibold text-slate-900">
              {section.title}
            </h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              {section.items.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="rounded-[2.25rem] border border-slate-200 bg-slate-50 p-8 shadow-inner shadow-slate-200/70">
        <h2 className="text-xl font-semibold text-slate-900">
          Ваші права як суб&apos;єкта персональних даних
        </h2>
        <p className="mt-3 text-sm text-slate-600">
          Ви можете звернутися до нас із запитом на оновлення, виправлення або
          видалення персональних даних, а також відмовитися від маркетингових
          розсилок. Для цього напишіть на{" "}
          <a href="mailto:privacy@mriyashop.ua" className="text-sky-600">
            privacy@mriyashop.ua
          </a>
          .
        </p>
      </section>
    </div>
  );
}

const sections = [
  {
    title: "Які дані ми збираємо",
    items: [
      "Контактна інформація: ім'я, номер телефону, електронна пошта.",
      "Адреса доставки та реквізити для виставлення рахунку.",
      "Ідентифікатори замовлень і історія покупок на Prom.ua.",
      "Дані сесії: IP-адреса, тип пристрою, налаштування браузера.",
    ],
  },
  {
    title: "Для чого використовуємо дані",
    items: [
      "Обробка замовлень і організація доставки.",
      "Комунікація щодо статусу замовлень та підтримка клієнтів.",
      "Покращення сервісу та персоналізація рекомендацій.",
      "Виконання вимог законодавства та бухгалтерський облік.",
    ],
  },
  {
    title: "Файли cookie та аналітика",
    items: [
      "Використовуємо cookie для відстеження сеансу авторизації.",
      "Аналітика відбувається через Google Analytics з анонімізацією IP.",
      "У будь-який момент ви можете відключити cookie у налаштуваннях браузера.",
    ],
  },
  {
    title: "Захист інформації",
    items: [
      "Доступ до даних мають лише уповноважені співробітники.",
      "Передача даних здійснюється за шифрованими каналами (HTTPS).",
      "Регулярно проводимо аудит систем безпеки та резервне копіювання.",
    ],
  },
] as const;
