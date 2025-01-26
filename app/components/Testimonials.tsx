import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    quote: "Cyan VCard has revolutionized how I network. It's so easy to share my information and stay connected!",
    author: "Sarah Johnson",
    title: "Marketing Director",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    quote: "As an entrepreneur, time is precious. Cyan VCard saves me time and helps me make a great first impression.",
    author: "Michael Chen",
    title: "Startup Founder",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    quote: "I love how eco-friendly this solution is. No more paper cards ending up in the trash!",
    author: "Emma Rodriguez",
    title: "Environmental Consultant",
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="flex flex-col justify-between">
              <CardContent className="pt-6">
                <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
              </CardContent>
              <CardFooter className="flex items-center">
                <Avatar className="mr-3">
                  <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                  <AvatarFallback>{testimonial.author[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.title}</p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

