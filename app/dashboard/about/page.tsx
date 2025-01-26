"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Copy } from "lucide-react"

export default function AboutPage() {
  const [copied, setCopied] = useState(false)
  const donationAddress = "0x939Ef051D0861554d8042cE4658b848033a5CbC2"

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(donationAddress)
      .then(() => {
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      })
      .catch((err) => {
        console.error("Failed to copy: ", err)
      })
  }

  return (
    <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <Card className="w-full max-w-3xl mx-auto bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white">About Cyan VCard</CardTitle>
          <CardDescription className="text-gray-400">
            Learn more about our platform and how to support us
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 text-gray-300">
          <div>
            <h3 className="text-lg font-semibold mb-2 text-white">Our Platform</h3>
            <p>
              Cyan VCard is a digital business card platform designed to streamline professional networking. Our
              platform allows users to create, manage, and share digital business cards effortlessly, making networking
              more efficient and eco-friendly.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2 text-white">Created by Leon C Tyes</h3>
            <p>
              Cyan VCard was created by Leon C Tyes, a visionary entrepreneur passionate about revolutionizing the way
              professionals connect and network in the digital age.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2 text-white">Support Us</h3>
            <p className="mb-4">
              If you find Cyan VCard valuable, you can support our ongoing development by donating USDT on the Ethereum
              Network to the following address:
            </p>
            <div className="bg-gray-700 p-4 rounded-md flex flex-col sm:flex-row items-center justify-between">
              <code className="text-sm break-all text-cyan-400 mb-2 sm:mb-0">{donationAddress}</code>
              <Button
                variant="outline"
                size="sm"
                onClick={copyToClipboard}
                className="text-cyan-400 border-cyan-400 hover:bg-cyan-400 hover:text-white"
              >
                <Copy className="h-4 w-4 mr-2" />
                {copied ? "Copied!" : "Copy"}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

