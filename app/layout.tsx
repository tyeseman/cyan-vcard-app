import "./globals.css"
import { Inter } from "next/font/google"
import type { Metadata } from "next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Cyan VCard - Digital Business Cards",
    template: "%s | Cyan VCard",
  },
  description: "Create, manage, and share your digital business cards with ease using Cyan VCard.",
  keywords: ["digital business card", "vcard", "networking", "professional", "contact management"],
  authors: [{ name: "Leon C Tyes" }],
  creator: "Leon C Tyes",
  publisher: "Cyan VCard",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.cyanvcard.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.cyanvcard.com",
    siteName: "Cyan VCard",
    images: [
      {
        url: "https://www.cyanvcard.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Cyan VCard - Digital Business Cards",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@cyanvcard",
    creator: "@cyanvcard",
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-gray-900 text-white`}>{children}</body>
    </html>
  )
}

