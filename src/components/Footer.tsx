import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-12 sm:px-6 lg:px-8 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-sm space-y-4">
          <p className="text-lg font-semibold text-slate-900">Мрія Маркет</p>
          <p className="text-sm leading-6 text-slate-600">
            Український онлайн-магазин добірних товарів для дому, подорожей та
            натхнення. Ми добираємо актуальні позиції з Prom.ua та пропонуємо
            зручний сервіс замовлення в один клік.
          </p>
        </div>

        <div className="grid flex-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              Магазин
            </p>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>
                <Link href="/catalog" className="hover:text-slate-900">
                  Каталог товарів
                </Link>
              </li>
              <li>
                <Link href="/delivery" className="hover:text-slate-900">
                  Доставка
                </Link>
              </li>
              <li>
                <Link href="/return-policy" className="hover:text-slate-900">
                  Повернення
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              Юридична інформація
            </p>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>
                <Link href="/privacy" className="hover:text-slate-900">
                  Політика конфіденційності
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-slate-900">
                  Публічна оферта
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              Контакти
            </p>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>
                <a href="mailto:hello@mriyashop.ua" className="hover:text-slate-900">
                  hello@mriyashop.ua
                </a>
              </li>
              <li>
                <a href="tel:+380441234567" className="hover:text-slate-900">
                  +38 (044) 123 45 67
                </a>
              </li>
              <li>
                <span>пн-пт 09:00–18:00</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-200 bg-white/80 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Мрія Маркет. Усі права захищено.
      </div>
    </footer>
  );
}
