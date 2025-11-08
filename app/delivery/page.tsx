import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Доставка",
  description:
    "Умови доставки Nova Market: відправлення по всій Україні, терміни, вартість та служби доставки.",
};

export default function DeliveryPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
          Доставка по Україні
        </h1>
        <p className="text-sm text-slate-600">
          Ми прагнемо, щоб ваші замовлення прибували максимально швидко та
          безпечно. Нижче ви знайдете всі деталі щодо вартості, термінів та
          варіантів доставки.
        </p>
      </div>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-100">
        <h2 className="text-xl font-semibold text-slate-900">
          Основні служби доставки
        </h2>
        <ul className="mt-4 space-y-3 text-sm text-slate-600">
          <li>
            <span className="font-semibold text-slate-800">Нова Пошта:</span>{" "}
            відправлення щодня, орієнтовний термін доставки 1–2 дні.
          </li>
          <li>
            <span className="font-semibold text-slate-800">Укрпошта:</span>{" "}
            економний варіант для невеликих міст, термін 2–4 дні.
          </li>
          <li>
            <span className="font-semibold text-slate-800">Justin:</span> швидка
            доставка у великі міста, термін 1–2 дні.
          </li>
        </ul>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-100">
          <h3 className="text-lg font-semibold text-slate-900">
            Терміни доставки
          </h3>
          <p className="mt-2 text-sm text-slate-600">
            Ми збираємо та передаємо замовлення перевізнику впродовж 24 годин з
            моменту підтвердження оплати на Prom.ua. У період акцій можливі
            незначні затримки на 1 день.
          </p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-100">
          <h3 className="text-lg font-semibold text-slate-900">
            Вартість доставки
          </h3>
          <p className="mt-2 text-sm text-slate-600">
            Вартість доставки розраховується перевізником при отриманні. Для
            замовлень від 2500 грн доставку «Нова Пошта» ми оплачуємо за вас.
          </p>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-100">
        <h3 className="text-lg font-semibold text-slate-900">
          Самовивіз у Києві
        </h3>
        <p className="mt-2 text-sm text-slate-600">
          Самовивіз доступний за попередньою домовленістю з менеджером за
          адресою: м. Київ, вул. Січових Стрільців, 23. Графік видачі: Пн-Сб,
          10:00–19:00.
        </p>
      </section>

      <div className="rounded-3xl bg-slate-900/95 p-8 text-white shadow-xl shadow-slate-900/20">
        <h2 className="text-2xl font-semibold">Залишилися запитання?</h2>
        <p className="mt-2 text-sm text-slate-100/80">
          Зверніться до менеджера в розділі{" "}
          <Link href="/contacts" className="underline decoration-slate-200">
            «Контакти»
          </Link>{" "}
          або напишіть нам у Telegram — відповідаємо протягом 30 хвилин у робочий
          час.
        </p>
      </div>
    </div>
  );
}
