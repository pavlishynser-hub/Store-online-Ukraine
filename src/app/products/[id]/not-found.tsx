import Link from "next/link";

export default function ProductNotFound() {
  return (
    <div className="mx-auto max-w-3xl px-4 pb-16 pt-12 text-center sm:px-6">
      <h1 className="text-4xl font-semibold text-zinc-900">Товар не знайдено</h1>
      <p className="mt-4 text-sm leading-relaxed text-zinc-600">
        На жаль, сторінка товару недоступна або була видалена. Спробуйте повернутися до каталогу й обрати інший товар.
      </p>
      <div className="mt-6 flex justify-center gap-4">
        <Link href="/" className="rounded-full border border-zinc-200 px-5 py-2 text-sm font-semibold text-zinc-900 transition hover:border-zinc-900">
          На головну
        </Link>
        <Link href="/catalog" className="rounded-full bg-zinc-900 px-5 py-2 text-sm font-semibold text-white transition hover:bg-zinc-800">
          Переглянути каталог
        </Link>
      </div>
    </div>
  );
}
