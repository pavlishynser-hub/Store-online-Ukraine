import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#F5F7FA] px-4">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 text-center shadow-sm shadow-slate-200">
        <p className="text-3xl">🛠️</p>
        <h1 className="mt-4 text-2xl font-semibold text-slate-900">Товар не знайдено</h1>
        <p className="mt-2 text-sm text-slate-500">
          Схоже, такого автоаксесуара ще немає в каталозі. Поверніться на головну, щоб обрати
          інший товар.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex items-center justify-center rounded-2xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          На головну
        </Link>
      </div>
    </div>
  );
}
