import type React from "react"
import type { Metadata } from "next"
import { Cairo } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

// استخدام خط Cairo العربي للعنوان والنص
const cairo = Cairo({
  subsets: ["arabic", "latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "سدر الجوري - فوائد السدر للشعر والبشرة والجسم",
  description:
    "سدر الجوري - اكتشف فوائد السدر الطبيعي للشعر والبشرة والجسم. منتجات السدر الأصلية - عسل السدر، زيت السدر، ومنتجات العناية الطبيعية",
  keywords: "سدر الجوري، السدر، السدر للشعر، فوائد السدر، عسل السدر، زيت السدر، النبق، شجرة السدر",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "سدر الجوري - منتجات السدر الأصلية",
    description: "اكتشف فوائد السدر الطبيعي للشعر والبشرة والجسم",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${cairo.className} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
