import Link from "next/link";

const infoLinks = [
  { href: "/delivery", label: "Доставка" },
  { href: "/return-policy", label: "Повернення товару" },
  { href: "/terms", label: "Публічна оферта" },
  { href: "/privacy", label: "Політика конфіденційності" },
];

const contactList = [
  { label: "Email", value: "support@novamarket.ua" },
  { label: "Телефон", value: "+38 (050) 000-00-00" },
  { label: "Графік", value: "Пн-Сб: 9:00 — 20:00" },
];

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-12 lg:px-10">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              Nova Market
            </p>
            <p className="text-sm text-slate-600">
              Сучасний онлайн-магазин з добіркою найкращих гаджетів, товарів
              для дому та активного життя. Замовляйте на Prom.ua безпечно та
              швидко.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              Інформація
            </p>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              {infoLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition hover:text-slate-900"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              Контакти
            </p>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              {contactList.map((item) => (
                <li key={item.label}>
                  <span className="font-medium text-slate-500">
                    {item.label}:
                  </span>{" "}
                  {item.value}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              Соціальні мережі
            </p>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-slate-900"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-slate-900"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://t.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-slate-900"
                >
                  Telegram
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-slate-200 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} Nova Market. Всі права захищені.</p>
          <p>
            Розроблено на Next.js 14 & Tailwind CSS. Готово до розміщення на
            Vercel.
          </p>
        </div>
      </div>
    </footer>
  );
}
