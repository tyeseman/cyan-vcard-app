import { Button } from "@/components/ui/button"

export default function CallToAction() {
  return (
    <section className="py-20 bg-cyan-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Elevate Your Networking?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join thousands of professionals who are already using Cyan VCard to make lasting impressions and grow their
          networks.
        </p>
        <Button size="lg" className="bg-white text-cyan-600 hover:bg-gray-100">
          Get Started Now
        </Button>
      </div>
    </section>
  )
}

