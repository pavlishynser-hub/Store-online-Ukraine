import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center gap-6 py-24 text-center">
      <span className="rounded-full bg-slate-100 px-5 py-2 text-xs font-semibold uppercase tracking-wide text-slate-600">
        404
      </span>
      <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
        Сторінку не знайдено
      </h1>
      <p className="max-w-md text-sm text-slate-600">
        На жаль, сторінка, яку ви шукаєте, була переміщена або тимчасово
        недоступна. Спробуйте повернутися на головну чи переглянути каталог.
      </p>
      <div className="flex flex-col gap-3 sm:flex-row">
        <Link
          href="/"
          className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:-translate-y-0.5 hover:bg-slate-800"
        >
          На головну
        </Link>
        <Link
          href="/catalog"
          className="rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-900 hover:text-slate-900"
        >
          До каталогу
        </Link>
      </div>
    </div>
  );
}
