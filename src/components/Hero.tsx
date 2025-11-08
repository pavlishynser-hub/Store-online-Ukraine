import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700 px-8 py-20 text-white sm:px-12 lg:px-16">
      <div className="max-w-2xl space-y-6">
        <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-white/80 backdrop-blur">
          Новинки сезону
        </span>
        <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
          Сучасні речі для вашого щоденного комфорту та натхнення
        </h1>
        <p className="text-lg text-white/80">
          Обирайте перевірені гаджети, аксесуари та товари для дому зі швидкою доставкою по всій Україні.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Link
            href="/catalog"
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-zinc-900 shadow-sm transition hover:bg-zinc-100"
          >
            Переглянути каталог
          </Link>
          <Link
            href="/delivery"
            className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Умови доставки
          </Link>
        </div>
      </div>
      <div className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 rounded-full bg-white/10 blur-3xl" aria-hidden />
    </section>
  );
}
