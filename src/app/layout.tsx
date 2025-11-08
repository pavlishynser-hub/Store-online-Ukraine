import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://example-shop.example";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Мрія Маркет — добірний український онлайн-магазин",
    template: "%s | Мрія Маркет",
  },
  description:
    "Мрія Маркет — онлайн-магазин стильних товарів із Prom.ua. Швидка доставка по Україні, оплата на Prom.ua, чесні умови повернення та підтримка щодня.",
  keywords: [
    "Prom.ua",
    "інтернет-магазин",
    "українські товари",
    "доставка по Україні",
    "купити онлайн",
  ],
  authors: [{ name: "Мрія Маркет" }],
  creator: "Мрія Маркет",
  openGraph: {
    title: "Мрія Маркет — стильні товари з Prom.ua",
    description:
      "Обирайте якісні товари від перевірених продавців Prom.ua та оформлюйте замовлення в один клік.",
    url: siteUrl,
    siteName: "Мрія Маркет",
    locale: "uk_UA",
    type: "website",
    images: [
      {
        url: "/images/banner.svg",
        width: 960,
        height: 640,
        alt: "Мрія Маркет",
      },
    ],
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0ea5e9",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen bg-slate-50 text-slate-900">
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">
            <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
              {children}
            </div>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
