import Link from "next/link";

const footerLinks = [
  {
    title: "Підтримка",
    items: [
      { label: "Доставка", href: "/delivery" },
      { label: "Повернення товару", href: "/return-policy" },
      { label: "Публічна оферта", href: "/terms" }
    ]
  },
  {
    title: "Компанія",
    items: [
      { label: "Головна", href: "/" },
      { label: "Каталог", href: "/catalog" },
      { label: "Контакти", href: "/contacts" }
    ]
  },
  {
    title: "Юридична інформація",
    items: [
      { label: "Конфіденційність", href: "/privacy" },
      { label: "Умови користування", href: "/terms" }
    ]
  }
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-4 md:px-6 lg:px-8">
        <div className="space-y-4">
          <span className="inline-flex items-center gap-2 text-lg font-semibold text-slate-900">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-tr from-sky-500 to-indigo-500 text-white">
              T
            </span>
            TechNova
          </span>
          <p className="text-sm text-slate-500">
            Корисні товари та аксесуари, що допомагають у щоденному житті.
            Доставляємо по всій Україні та гарантуємо сервіс Prom.ua.
          </p>
          <div className="text-xs text-slate-400">
            © {new Date().getFullYear()} TechNova. Всі права захищено.
          </div>
        </div>
        {footerLinks.map((column) => (
          <div key={column.title} className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
              {column.title}
            </h3>
            <ul className="space-y-3 text-sm text-slate-600">
              {column.items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-slate-900"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
}
