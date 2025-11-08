import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://novastore-shop.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "NovaStore — сучасний онлайн-магазин",
    template: "%s | NovaStore",
  },
  description:
    "NovaStore — інтернет-магазин стильних гаджетів, аксесуарів та товарів для дому з доставкою по всій Україні.",
  keywords: [
    "NovaStore",
    "онлайн-магазин",
    "купити гаджети",
    "аксесуари для дому",
    "Prom.ua",
  ],
  openGraph: {
    title: "NovaStore — сучасний онлайн-магазин",
    description:
      "Вибирайте перевірені товари для щоденного комфорту. Швидка доставка, безпечні покупки.",
    url: siteUrl,
    siteName: "NovaStore",
    type: "website",
    locale: "uk_UA",
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-zinc-50 text-zinc-900 antialiased`}
      >
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1 bg-zinc-50">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
