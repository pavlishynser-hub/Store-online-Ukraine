import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://nova-market-store.vercel.app";

const manrope = Manrope({
  subsets: ["cyrillic", "latin"],
  display: "swap",
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Nova Market — Онлайн-магазин з інтеграцією Prom.ua",
    template: "%s | Nova Market",
  },
  description:
    "Nova Market — сучасний онлайн-магазин із добіркою трендових товарів, зручним каталогом та можливістю купівлі на Prom.ua.",
  keywords: [
    "онлайн-магазин",
    "Prom.ua",
    "купити онлайн",
    "доставка по Україні",
    "Nova Market",
  ],
  openGraph: {
    title: "Nova Market — Онлайн-магазин з інтеграцією Prom.ua",
    description:
      "Стильний інтернет-магазин для покупок в Україні. Зручний каталог, швидка доставка, безпечні оплати через Prom.ua.",
    url: siteUrl,
    siteName: "Nova Market",
    locale: "uk_UA",
    type: "website",
    images: [
      {
        url: `${siteUrl}/images/hero-banner.svg`,
        width: 1440,
        height: 720,
        alt: "Nova Market — головний банер",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nova Market — Онлайн-магазин з інтеграцією Prom.ua",
    description:
      "Знайдіть гаджети, товари для дому та активного життя. Оплачуйте безпечно на Prom.ua.",
    images: [`${siteUrl}/images/hero-banner.svg`],
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body className={`${manrope.variable} bg-slate-50 font-sans text-slate-900 antialiased`}>
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">
            <div className="mx-auto w-full max-w-6xl px-6 py-12 lg:px-10">
              {children}
            </div>
          </main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
