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
  title: {
    default: "سدر الجوري - منتجات السدر الطبيعية للشعر والبشرة",
    template: "%s | سدر الجوري",
  },
  description:
    "سدر الجوري - متجر السدر الطبيعي الأول في السعودية. اكتشف فوائد السدر للشعر والبشرة والجسم. عسل السدر الجبلي، زيت السدر، سدر مطحون، شامبو السدر ومنتجات طبيعية 100%",
  keywords:
    "سدر الجوري، السدر، سدر، السدر للشعر، فوائد السدر للشعر، ماسك السدر للشعر، عسل السدر، زيت السدر، النبق، شجرة السدر، سدر مطحون، شامبو السدر، ورق السدر، السدر للبشرة، السدر للوجه",
  authors: [{ name: "سدر الجوري" }],
  creator: "سدر الجوري",
  publisher: "سدر الجوري",
  formatDetection: {
    telephone: false,
  },
  metadataBase: new URL("https://sidr-aljouri.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ar_SA",
    url: "https://sidr-aljouri.com",
    siteName: "سدر الجوري",
    title: "سدر الجوري - منتجات السدر الطبيعية للشعر والبشرة",
    description: "متجر السدر الطبيعي الأول في السعودية. عسل السدر الجبلي، زيت السدر، سدر مطحون ومنتجات طبيعية 100%",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "سدر الجوري - منتجات السدر الطبيعية",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "سدر الجوري - منتجات السدر الطبيعية",
    description: "متجر السدر الطبيعي الأول في السعودية. منتجات طبيعية 100% للشعر والبشرة",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
    generator: 'v0.app'
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
