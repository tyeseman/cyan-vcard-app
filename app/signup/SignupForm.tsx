"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"
import { useAuth } from "@/contexts/AuthContext"

export default function SignupForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")
  const router = useRouter()
  const { signUp } = useAuth()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!name || !email || !password || !confirmPassword) {
      setError("Please fill in all fields")
      return
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match")
      return
    }

    try {
      await signUp(email, password)
      router.push("/dashboard")
    } catch (error) {
      setError("Failed to create an account. Please try again.")
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Link href="/" className="absolute top-4 left-4 text-gray-400 hover:text-cyan-400">
        <ArrowLeft className="h-6 w-6" />
      </Link>
      <Card className="w-full max-w-md bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-white">Create your Cyan VCard account</CardTitle>
          <CardDescription className="text-center text-gray-400">
            Sign up to start creating your digital business card
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="name" className="text-gray-200">
                Full Name
              </Label>
              <Input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="mt-1 bg-gray-700 border-gray-600 text-white"
              />
            </div>
            <div>
              <Label htmlFor="email" className="text-gray-200">
                Email address
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 bg-gray-700 border-gray-600 text-white"
              />
            </div>
            <div>
              <Label htmlFor="password" className="text-gray-200">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-1 bg-gray-700 border-gray-600 text-white"
              />
            </div>
            <div>
              <Label htmlFor="confirmPassword" className="text-gray-200">
                Confirm Password
              </Label>
              <Input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="mt-1 bg-gray-700 border-gray-600 text-white"
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <Button type="submit" className="w-full bg-cyan-500 hover:bg-cyan-600 text-white">
              Sign up
            </Button>
          </form>
        </CardContent>
        <CardFooter className="justify-center">
          <p className="text-sm text-gray-400">
            Already have an account?{" "}
            <Link href="/login" className="font-medium text-cyan-400 hover:text-cyan-300">
              Log in
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}

