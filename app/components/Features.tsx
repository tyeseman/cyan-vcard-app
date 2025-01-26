import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Zap, Share2, Globe, Leaf } from "lucide-react"

const features = [
  {
    title: "Instant Card Creation",
    description: "Design and customize your digital card in seconds.",
    icon: Zap,
  },
  {
    title: "Seamless Sharing",
    description: "Share your card via QR code, or URL.",
    icon: Share2,
  },
  {
    title: "Always Accessible",
    description: "Update and manage your card from any device, anywhere.",
    icon: Globe,
  },
  {
    title: "Eco-Friendly",
    description: "Reduce waste with digital alternatives to paper cards.",
    icon: Leaf,
  },
]

export default function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index}>
              <CardHeader>
                <feature.icon className="w-10 h-10 text-cyan-600 mb-2" />
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

