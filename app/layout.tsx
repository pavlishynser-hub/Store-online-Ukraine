import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://autocomfort-hub.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "AutoComfort Hub — магазин автоаксесуарів",
    template: "%s · AutoComfort Hub"
  },
  description:
    "AutoComfort Hub — добірка автоаксесуарів, що роблять кожну поїздку комфортною. Швидка доставка по Україні та оплата при отриманні.",
  keywords: [
    "автоаксесуари",
    "органайзер для авто",
    "масажер для водіїв",
    "ортопедична подушка",
    "автомобільні товари",
    "комфорт у дорозі"
  ],
  openGraph: {
    title: "AutoComfort Hub — усе для зручної поїздки",
    description:
      "4 хітові автоаксесуари: органайзери, масажер-пістолет та ортопедична подушка для довгих поїздок.",
    url: "/",
    siteName: "AutoComfort Hub",
    locale: "uk_UA",
    type: "website",
    images: [
      {
        url: "/images/product-04.svg",
        width: 1200,
        height: 630,
        alt: "AutoComfort Hub — магазин автоаксесуарів"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "AutoComfort Hub — комфорт для водія",
    description: "Компактні автоаксесуари, швидка доставка та оплата при отриманні.",
    images: ["/images/product-04.svg"]
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
  themeColor: "#1D74F5"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body className={`${geistSans.variable} ${geistMono.variable} bg-[#F5F7FA] text-slate-900 antialiased`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
