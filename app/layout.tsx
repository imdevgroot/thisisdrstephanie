import React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import PlausibleProvider from "next-plausible"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://thisisdrstephanie.com"),
  title: {
    default: "Dr. Stephanie Clark Rhoe | Christian Life Coach, Expert & Author",
    template: "%s | Dr. Stephanie Clark Rhoe",
  },
  description:
    "Empowering individuals through faith-centered coaching, the BRAVE Series, and transformational resources. Over 30 years of experience in mental health and social emotional learning.",
  keywords: [
    "Christian life coach",
    "faith-based coaching",
    "BRAVE Series",
    "mental health advocacy",
    "social emotional learning",
    "SEL expert",
    "women empowerment",
    "leadership coaching",
    "Dr. Stephanie",
    "Stephanie Clark Rhoe",
  ],
  authors: [{ name: "Dr. Stephanie Clark Rhoe" }],
  creator: "Dr. Stephanie Clark Rhoe",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "This Is Dr. Stephanie",
    title: "Dr. Stephanie Clark Rhoe | Christian Life Coach, Expert & Author",
    description:
      "Empowering individuals through faith-centered coaching, the BRAVE Series, and transformational resources.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Stephanie Clark Rhoe | Christian Life Coach, Expert & Author",
    description:
      "Empowering individuals through faith-centered coaching, the BRAVE Series, and transformational resources.",
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
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <PlausibleProvider
          domain={process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN || "thisisdrstephanie.com"}
          trackOutboundLinks
          taggedEvents
        />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
