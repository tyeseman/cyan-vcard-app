import { Inter } from "next/font/google"
import { AuthProvider } from "../contexts/AuthContext"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className={`${inter.className} bg-gray-900 text-white`}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  )
}

