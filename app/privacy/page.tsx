import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Політика конфіденційності",
  description:
    "Дізнайтеся, як Nova Market збирає, використовує та захищає персональні дані користувачів згідно із законодавством України та GDPR.",
};

export default function PrivacyPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
          Політика конфіденційності
        </h1>
        <p className="text-sm text-slate-600">
          Цей документ пояснює, які персональні дані ми збираємо, навіщо це
          робимо, як їх обробляємо та зберігаємо. Використовуючи наш сайт або
          оформлюючи замовлення, ви погоджуєтеся з умовами політики.
        </p>
      </div>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-100">
        <h2 className="text-xl font-semibold text-slate-900">
          Які дані ми збираємо
        </h2>
        <ul className="mt-3 space-y-2 text-sm text-slate-600">
          <li>• Ім’я, прізвище та контактні дані, які ви надаєте при замовленні.</li>
          <li>
            • Дані про замовлення і платежі, необхідні для обробки та доставки.
          </li>
          <li>
            • Інформацію про взаємодію з сайтом (файли cookies, IP-адреса,
            geolocation) для покращення сервісу.
          </li>
        </ul>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-100">
          <h3 className="text-lg font-semibold text-slate-900">
            Як ми використовуємо ваші дані
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>• Для обробки замовлень та організації доставки.</li>
            <li>• Для індивідуальних пропозицій та промоакцій (за згодою).</li>
            <li>• Для покращення роботи сайту та аналітики.</li>
          </ul>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-100">
          <h3 className="text-lg font-semibold text-slate-900">
            Захист і зберігання даних
          </h3>
          <p className="mt-3 text-sm text-slate-600">
            Ми застосовуємо технічні та організаційні заходи захисту згідно з
            вимогами GDPR. Доступ до персональних даних обмежений лише
            уповноваженим співробітникам.
          </p>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-100">
        <h3 className="text-lg font-semibold text-slate-900">
          Передача даних третім сторонам
        </h3>
        <p className="mt-3 text-sm text-slate-600">
          Ми не продаємо та не передаємо ваші персональні дані третім особам.
          Передача можлива лише платіжним системам або службам доставки для
          виконання замовлення, а також у випадках, передбачених законодавством
          України.
        </p>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-100">
        <h3 className="text-lg font-semibold text-slate-900">
          Ваші права як суб’єкта даних
        </h3>
        <ul className="mt-3 space-y-2 text-sm text-slate-600">
          <li>• Отримувати інформацію про обробку своїх персональних даних.</li>
          <li>• Вимагати виправлення або видалення даних.</li>
          <li>• Відкликати згоду на обробку та подати скаргу до наглядових органів.</li>
        </ul>
      </section>

      <section className="rounded-3xl bg-slate-900/95 p-8 text-white shadow-xl shadow-slate-900/20">
        <h2 className="text-2xl font-semibold">Зв’язок із нами</h2>
        <p className="mt-2 text-sm text-slate-100/80">
          Якщо у вас є питання щодо обробки персональних даних, напишіть на
          privacy@novamarket.ua. Ми відповімо протягом 48 годин.
        </p>
      </section>
    </div>
  );
}
