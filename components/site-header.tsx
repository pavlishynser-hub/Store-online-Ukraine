import Image from "next/image";
import Link from "next/link";

const navigation = [
  { href: "/catalog", label: "Каталог" },
  { href: "/delivery", label: "Доставка" },
  { href: "/return-policy", label: "Повернення" },
  { href: "/terms", label: "Публічна оферта" },
  { href: "/privacy", label: "Конфіденційність" },
  { href: "/contacts", label: "Контакти" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/60 bg-white/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-10">
        <Link
          href="/"
          className="flex items-center gap-3 text-lg font-semibold text-slate-900 hover:opacity-90"
        >
          <Image
            src="/images/logo-icon.svg"
            alt="Nova Market логотип"
            width={40}
            height={40}
            priority
          />
          <span className="hidden sm:flex flex-col leading-none">
            <span>Nova Market</span>
            <span className="text-xs font-normal text-slate-500">
              Онлайн-магазин
            </span>
          </span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative transition hover:text-slate-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/catalog"
          className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:-translate-y-0.5 hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 md:inline-flex"
        >
          До каталогу
        </Link>
      </div>
    </header>
  );
}
