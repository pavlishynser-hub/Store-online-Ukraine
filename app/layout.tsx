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
    default: "TechNova — магазин сучасних гаджетів",
    template: "%s · TechNova"
  },
  description:
    "TechNova — український онлайн-магазин гаджетів та аксесуарів із доставкою по всій Україні та миттєвою оплатою через Prom.ua.",
  keywords: [
    "гаджети",
    "інтернет-магазин",
    "купити гаджети",
    "Prom.ua",
    "аксесуари",
    "електроніка"
  ],
  openGraph: {
    title: "TechNova — магазин сучасних гаджетів",
    description:
      "Добірка актуальних гаджетів, аксесуарів та tech-новинок з гарантією та оплатою через Prom.ua.",
    url: "/",
    siteName: "TechNova",
    locale: "uk_UA",
    type: "website",
    images: [
      {
        url: "/images/product-01.svg",
        width: 1200,
        height: 630,
        alt: "TechNova — магазин сучасних гаджетів"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "TechNova — магазин сучасних гаджетів",
    description:
      "Швидка доставка, прозорі умови та оплата через Prom.ua. Обирайте краще для себе та близьких.",
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
