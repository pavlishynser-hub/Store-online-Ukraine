import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Конфіденційність",
  description:
    "Політика конфіденційності TechNova: як ми збираємо, зберігаємо та обробляємо персональні дані користувачів."
};

const sections = [
  {
    title: "Яку інформацію ми збираємо",
    content: [
      "Контактні дані: імʼя, номер телефону, електронна пошта, адреса доставки.",
      "Дані про замовлення: обрані товари, спосіб оплати, історія покупок.",
      "Технічні дані: файли cookie, IP-адреса, інформація про пристрій, дані Google Analytics."
    ]
  },
  {
    title: "Як ми використовуємо дані",
    content: [
      "Для обробки замовлень і організації доставки через партнерів Prom.ua.",
      "Щоб надавати консультації, повідомляти про статус замовлення та гарантійне обслуговування.",
      "Для аналітики та покращення роботи сайту, персоналізації пропозицій та маркетингових комунікацій (за вашою згодою)."
    ]
  },
  {
    title: "Передача третім сторонам",
    content: [
      "Платформа Prom.ua і платіжні сервіси для обробки замовлень та оплат.",
      "Логістичні компанії для доставки (Нова пошта, Укрпошта, курʼєрські служби).",
      "Аналітичні та рекламні сервіси (Google Analytics, Google Ads) з дотриманням політик безпеки."
    ]
  }
];

export default function PrivacyPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900">
          Політика конфіденційності
        </h1>
        <p className="max-w-3xl text-sm text-slate-600">
          Дана політика описує, як TechNova збирає, використовує та захищає персональні
          дані відвідувачів сайту. Ми дотримуємося законодавства України та стандартів
          безпеки Prom.ua.
        </p>
      </header>

      <section className="grid gap-6 lg:grid-cols-3">
        {sections.map((section) => (
          <article
            key={section.title}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <h2 className="text-lg font-semibold text-slate-900">
              {section.title}
            </h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              {section.content.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 text-sm text-slate-600">
        <h2 className="mb-3 text-lg font-semibold text-slate-900">
          Захист інформації
        </h2>
        <p className="mb-2">
          Ми використовуємо SSL-шифрування, щоб захистити передавання даних, та
          застосовуємо заходи контролю доступу до внутрішніх систем. Регулярно
          перевіряємо безпеку сервісів і співпрацюємо лише з надійними партнерами.
        </p>
        <p>
          Доступ до персональних даних отримують лише уповноважені працівники для
          обробки замовлень, консультацій і гарантійних звернень. Дані зберігаються
          протягом періоду, необхідного для виконання зобовʼязань або до відкликання
          вашої згоди.
        </p>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 text-sm text-slate-600">
        <h2 className="mb-3 text-lg font-semibold text-slate-900">
          Ваші права
        </h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>Отримати інформацію про обробку та зберігання персональних даних.</li>
          <li>Вимагати виправлення або видалення ваших даних.</li>
          <li>Відкликати згоду на маркетингові розсилки та повідомлення.</li>
          <li>Подати скаргу до Уповноваженого Верховної Ради України з прав людини.</li>
        </ul>
        <p className="mt-3">
          Для реалізації прав звʼяжіться з нами за адресою{" "}
          <a href="mailto:2015maxetavel@seznam.cz">
            2015maxetavel@seznam.cz
          </a>
          .
        </p>
      </section>
    </div>
  );
}
