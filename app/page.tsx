import Link from "next/link"
import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import AbstractAnimation from "./components/AbstractAnimation"
import AnimatedText from "./components/AnimatedText"
import FloatingIcons from "./components/FloatingIcons"
import { JsonLd } from "./components/JsonLd"

export const metadata: Metadata = {
  title: "Cyan VCard - Create Digital Business Cards",
  description:
    "Create, manage, and share your digital business cards with ease. Elevate your networking game with Cyan VCard's elegant and efficient solution.",
  openGraph: {
    title: "Cyan VCard - Create Digital Business Cards",
    description:
      "Create, manage, and share your digital business cards with ease. Elevate your networking game with Cyan VCard's elegant and efficient solution.",
  },
}

export default function Home() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Cyan VCard",
          url: "http://cyanvcard.com",
          description: "Create, manage, and share your digital business cards with ease.",
          potentialAction: {
            "@type": "SearchAction",
            target: "http://cyanvcard.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string",
          },
        }}
      />
      <main className="flex min-h-screen flex-col bg-gradient-to-br from-gray-900 via-cyan-900 to-gray-900 overflow-hidden">
        <div className="relative flex flex-1 flex-col items-center justify-center">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/20 via-gray-900/50 to-gray-900 z-0"></div>
          <AbstractAnimation />
          <FloatingIcons />
          <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
            <AnimatedText
              text="Welcome to Cyan VCard"
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
            />
            <p className="text-xl sm:text-2xl text-cyan-100 mb-8 max-w-3xl mx-auto">
              Create, manage, and share your digital business cards with ease. Elevate your networking game with our
              elegant and efficient solution.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/signup" passHref>
                <Button size="lg" className="w-full sm:w-auto bg-cyan-500 hover:bg-cyan-600 text-white">
                  Get Started
                </Button>
              </Link>
              <Link href="/login" passHref>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white"
                >
                  Log In
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <footer className="relative z-10 bg-gray-800/50 backdrop-blur-sm py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-cyan-200 mb-4 md:mb-0">© 2023 Cyan VCard. All rights reserved.</div>
              <nav className="flex gap-6">
                <Link href="/privacy" className="text-cyan-200 hover:text-cyan-400">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-cyan-200 hover:text-cyan-400">
                  Terms of Service
                </Link>
              </nav>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}

