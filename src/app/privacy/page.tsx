import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Політика конфіденційності",
  description:
    "Дізнайтеся, які дані ми збираємо та як захищаємо персональну інформацію клієнтів NovaStore відповідно до законодавства України.",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-8 px-4 pb-16 pt-12 sm:px-6">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
          Ваша безпека
        </p>
        <h1 className="text-4xl font-semibold text-zinc-900">Політика конфіденційності</h1>
        <p className="text-sm leading-relaxed text-zinc-600">
          Ми відповідально ставимося до обробки персональних даних та використовуємо їх лише для якісного обслуговування.
        </p>
      </header>

      <section className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm space-y-4">
        <div>
          <h2 className="text-2xl font-semibold text-zinc-900">Що ми збираємо</h2>
          <p className="mt-2 text-sm leading-relaxed text-zinc-600">
            Ми обробляємо дані, які ви добровільно надаєте: ім’я, контактний номер, адресу електронної пошти, адресу доставки та інформацію про замовлення.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-zinc-900">Як ми використовуємо дані</h2>
          <ul className="mt-2 space-y-2 text-sm text-zinc-600">
            <li>Обробка замовлень та організація доставки.</li>
            <li>Зв’язок щодо статусу замовлення та сервісної підтримки.</li>
            <li>Надсилання інформаційних повідомлень за вашої згоди.</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-zinc-900">Захист інформації</h2>
          <p className="mt-2 text-sm leading-relaxed text-zinc-600">
            Дані зберігаються на захищених серверах та передаються через шифровані канали. Ми не передаємо дані третім особам без вашої згоди, окрім партнерів-доставників.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-zinc-900">Ваші права</h2>
          <p className="mt-2 text-sm leading-relaxed text-zinc-600">
            Ви можете отримати доступ до своїх персональних даних, вимагати виправлення, обмеження обробки або видалення, звернувшись на info@novastore.ua.
          </p>
        </div>
      </section>
    </div>
  );
}
