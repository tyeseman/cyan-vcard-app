import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Facebook, Twitter, LinkedinIcon as LinkedIn, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-800/50 backdrop-blur-sm py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Cyan VCard</h3>
            <p className="text-gray-400">
              Streamlining professional networking with digital business cards. Free to use, supported by donations.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-cyan-400">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-cyan-400">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-cyan-400">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Stay Connected</h3>
            <form className="flex">
              <Input
                type="email"
                placeholder="Enter your email"
                className="mr-2 bg-gray-700 border-gray-600 text-white"
              />
              <Button type="submit" className="bg-cyan-500 hover:bg-cyan-600 text-white">
                Subscribe
              </Button>
            </form>
            <div className="flex mt-4 space-x-4">
              <Link href="#" className="text-gray-400 hover:text-cyan-400">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-cyan-400">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-cyan-400">
                <LinkedIn size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-cyan-400">
                <Instagram size={20} />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Cyan VCard. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

