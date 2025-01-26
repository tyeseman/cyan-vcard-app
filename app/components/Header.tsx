import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-cyan-600">
          Cyan VCard App
        </Link>
        <nav>
          <Link href="/login" passHref>
            <Button variant="outline" className="mr-2">
              Login
            </Button>
          </Link>
          <Link href="/signup" passHref>
            <Button>Sign Up</Button>
          </Link>
        </nav>
      </div>
    </header>
  )
}

