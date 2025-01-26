import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Networking Made Effortless with Digital Business Cards</h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Streamline your professional interactions with Cyan VCard. Create, share, and manage your digital business
          card with ease, making networking more efficient and eco-friendly.
        </p>
        <Link href="/signup" passHref>
          <Button size="lg" className="bg-white text-cyan-600 hover:bg-gray-100">
            Create Your Card Today
          </Button>
        </Link>
      </div>
    </section>
  )
}

