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

export const metadata: Metadata = {
  title: {
    default: "AutoComfort Hub — автоаксесуари для комфортної поїздки",
    template: "%s · AutoComfort Hub"
  },
  description:
    "AutoComfort Hub — добірка автоаксесуарів для щоденних поїздок із швидкою доставкою по Україні та оплатою при отриманні.",
  keywords: ["автоаксесуари", "органайзер в багажник", "подушка для авто", "масажер", "купити автоаксесуари"],
  openGraph: {
    title: "AutoComfort Hub — автоаксесуари для комфортної поїздки",
    description:
      "4 ретельно відібрані товари для порядку в авто, відпочинку спини та швидкого відновлення після поїздок.",
    url: "/",
    siteName: "AutoComfort Hub",
    locale: "uk_UA",
    type: "website",
    images: [
      {
        url: "/images/product-01.svg",
        width: 1200,
        height: 630,
        alt: "AutoComfort Hub — автоаксесуари для комфортної поїздки"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "AutoComfort Hub — автоаксесуари для комфортної поїздки",
    description:
      "Органайзери, масажер і ортопедична подушка — все для затишної дороги. Доставка по Україні та оплата при отриманні.",
    images: ["/images/product-01.svg"]
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-[#F5F7FA] text-slate-900 antialiased`}
      >
        <main>{children}</main>
      </body>
    </html>
  );
}
