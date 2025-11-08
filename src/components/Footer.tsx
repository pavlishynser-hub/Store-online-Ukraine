import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 text-sm text-zinc-600 sm:px-6 lg:flex-row lg:items-start lg:justify-between">
        <div className="space-y-2">
          <p className="text-lg font-semibold text-zinc-900">NovaStore</p>
          <p className="max-w-sm leading-relaxed">
            Онлайн-магазин сучасних товарів для активного та комфортного життя. Ми надихаємо обирати якісні речі щодня.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">Сторінки</p>
            <ul className="space-y-2">
              <li>
                <Link href="/catalog" className="transition hover:text-zinc-900">
                  Каталог
                </Link>
              </li>
              <li>
                <Link href="/delivery" className="transition hover:text-zinc-900">
                  Доставка
                </Link>
              </li>
              <li>
                <Link href="/return-policy" className="transition hover:text-zinc-900">
                  Повернення
                </Link>
              </li>
              <li>
                <Link href="/terms" className="transition hover:text-zinc-900">
                  Публічна оферта
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">Контакти</p>
            <ul className="space-y-2">
              <li>Телефон: <a href="tel:+380441234567" className="transition hover:text-zinc-900">+38 (044) 123-45-67</a></li>
              <li>Email: <a href="mailto:info@novastore.ua" className="transition hover:text-zinc-900">info@novastore.ua</a></li>
              <li>Графік: Пн-Пт, 09:00–18:00</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-zinc-100 bg-zinc-50 py-4">
        <p className="mx-auto max-w-6xl px-4 text-xs text-zinc-500 sm:px-6">
          © {new Date().getFullYear()} NovaStore. Всі права захищено.
        </p>
      </div>
    </footer>
  );
}
