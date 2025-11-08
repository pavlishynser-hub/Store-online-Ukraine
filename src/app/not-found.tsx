import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-2xl rounded-3xl border border-dashed border-slate-300 bg-white p-10 text-center shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-widest text-sky-600">
        404
      </p>
      <h1 className="mt-3 text-3xl font-semibold text-slate-900">
        На жаль, сторінку не знайдено
      </h1>
      <p className="mt-3 text-sm leading-6 text-slate-600">
        Можливо, посилання застаріло або було змінено. Поверніться на головну
        сторінку або перегляньте каталог товарів.
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <Link href="/" className="btn-primary text-xs uppercase">
          На головну
        </Link>
        <Link href="/catalog" className="btn-secondary text-xs uppercase">
          До каталогу
        </Link>
      </div>
    </div>
  );
}
