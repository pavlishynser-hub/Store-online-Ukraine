'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Головна" },
  { href: "/catalog", label: "Каталог" },
  { href: "/delivery", label: "Доставка" },
  { href: "/return-policy", label: "Повернення" },
  { href: "/privacy", label: "Конфіденційність" },
  { href: "/terms", label: "Публічна оферта" },
  { href: "/contacts", label: "Контакти" }
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="text-xl font-semibold tracking-tight text-zinc-900">
          NovaStore
        </Link>
        <nav className="hidden gap-6 text-sm font-medium text-zinc-600 md:flex">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition hover:text-zinc-900 ${
                  isActive ? "text-zinc-900" : ""
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <Link
          href="/catalog"
          className="rounded-full bg-zinc-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-zinc-800"
        >
          До каталогу
        </Link>
      </div>
      <nav className="md:hidden">
        <ul className="mx-auto flex max-w-6xl gap-4 overflow-x-auto px-4 pb-3 text-sm font-medium text-zinc-600 sm:px-6">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`whitespace-nowrap rounded-full border border-transparent px-4 py-2 transition ${
                    isActive ? "border-zinc-900 text-zinc-900" : "hover:text-zinc-900"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
