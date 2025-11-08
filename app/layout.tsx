import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap"
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap"
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "TechNova — товари, що допомагають у житті",
    template: "%s · TechNova"
  },
  description:
    "TechNova — український онлайн-магазин товарів, що допомагають у повсякденному житті, з доставкою по всій Україні та миттєвою оплатою через Prom.ua.",
  keywords: [
    "товари для життя",
    "інтернет-магазин",
    "товари для дому",
    "Prom.ua",
    "корисні речі",
    "аксесуари"
  ],
  openGraph: {
    title: "TechNova — товари, що допомагають у житті",
    description:
      "Добірка корисних товарів, аксесуарів та новинок для щоденного комфорту з гарантією та оплатою через Prom.ua.",
    url: "/",
    siteName: "TechNova",
    locale: "uk_UA",
    type: "website",
    images: [
      {
        url: "/images/product-01.svg",
        width: 1200,
        height: 630,
        alt: "TechNova — товари, що допомагають у житті"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "TechNova — товари, що допомагають у житті",
    description:
      "Швидка доставка, прозорі умови та оплата через Prom.ua. Обирайте корисні речі для себе та близьких.",
    images: ["/images/product-01.svg"]
  },
  alternates: {
    canonical: "/",
    languages: {
      uk: "/"
    }
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true
    }
  }
};

export const viewport = {
  themeColor: "#0ea5e9"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex min-h-screen flex-col`}
      >
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">
            <div className="mx-auto w-full max-w-6xl px-4 py-10 md:px-6 lg:px-8">
              {children}
            </div>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
