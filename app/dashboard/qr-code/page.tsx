"use client"

import { useState, useEffect } from "react"
import { QRCodeSVG } from "qrcode.react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import type { CardData } from "../types"
import type { FileItem } from "../types"

interface QRCodeItem {
  id: string
  name: string
  url: string
  type: "vcard" | "file"
}

export default function QRCodePage() {
  const [qrCodes, setQRCodes] = useState<QRCodeItem[]>([])

  useEffect(() => {
    // In a real app, this data would come from an API call or state management
    const fetchData = async () => {
      // Simulating API call for user's VCards
      const userVCards: CardData[] = [
        { id: "1", cardName: "Professional Card", name: "John Doe" } as CardData,
        // Add more cards as needed
      ]

      // Simulating API call for user's uploaded files
      const userFiles: FileItem[] = [
        { id: "1", name: "Resume.pdf", type: "application/pdf" } as FileItem,
        // Add more files as needed
      ]

      const vcardQRCodes = userVCards.map((card) => ({
        id: `vcard-${card.id}`,
        name: card.cardName,
        url: `https://example.com/vcard/${card.id}`,
        type: "vcard" as const,
      }))

      const fileQRCodes = userFiles.map((file) => ({
        id: `file-${file.id}`,
        name: file.name,
        url: `https://example.com/file/${file.id}`,
        type: "file" as const,
      }))

      setQRCodes([...vcardQRCodes, ...fileQRCodes])
    }

    fetchData()
  }, [])

  const downloadQRCode = (id: string) => {
    const svg = document.getElementById(id)
    if (svg) {
      const svgData = new XMLSerializer().serializeToString(svg)
      const canvas = document.createElement("canvas")
      const ctx = canvas.getContext("2d")
      const img = new Image()
      img.onload = () => {
        canvas.width = img.width
        canvas.height = img.height
        ctx?.drawImage(img, 0, 0)
        const pngFile = canvas.toDataURL("image/png")
        const downloadLink = document.createElement("a")
        downloadLink.download = `qr-code-${id}.png`
        downloadLink.href = `${pngFile}`
        downloadLink.click()
      }
      img.src = `data:image/svg+xml;base64,${btoa(svgData)}`
    }
  }

  const vcardQRCodes = qrCodes.filter((qr) => qr.type === "vcard")
  const fileQRCodes = qrCodes.filter((qr) => qr.type === "file")

  return (
    <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <Card className="w-full mx-auto bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white">QR Codes</CardTitle>
          <CardDescription className="text-gray-400">
            View and download QR codes for your VCards and shared files
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue={qrCodes.length > 0 ? "all" : "vcards"} className="text-white">
            <TabsList className="bg-gray-700">
              {qrCodes.length > 0 && <TabsTrigger value="all">All</TabsTrigger>}
              <TabsTrigger value="vcards">VCards</TabsTrigger>
              <TabsTrigger value="files">Files</TabsTrigger>
            </TabsList>
            {qrCodes.length > 0 && (
              <TabsContent value="all">
                <QRCodeGrid qrCodes={qrCodes} downloadQRCode={downloadQRCode} />
              </TabsContent>
            )}
            <TabsContent value="vcards">
              {vcardQRCodes.length > 0 ? (
                <QRCodeGrid qrCodes={vcardQRCodes} downloadQRCode={downloadQRCode} />
              ) : (
                <p className="text-center py-4 text-gray-400">
                  No VCards available. Create a VCard to generate a QR code.
                </p>
              )}
            </TabsContent>
            <TabsContent value="files">
              {fileQRCodes.length > 0 ? (
                <QRCodeGrid qrCodes={fileQRCodes} downloadQRCode={downloadQRCode} />
              ) : (
                <p className="text-center py-4 text-gray-400">
                  No files uploaded. Upload a file to generate a QR code.
                </p>
              )}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}

function QRCodeGrid({ qrCodes, downloadQRCode }: { qrCodes: QRCodeItem[]; downloadQRCode: (id: string) => void }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
      {qrCodes.map((qr) => (
        <Card key={qr.id} className="bg-gray-700 border-gray-600">
          <CardContent className="p-4 flex flex-col items-center">
            <QRCodeSVG id={qr.id} value={qr.url} size={150} bgColor="transparent" fgColor="#ffffff" />
            <h3 className="mt-2 font-semibold text-center text-white">{qr.name}</h3>
            <p className="text-sm text-gray-400 capitalize">{qr.type}</p>
            <Button onClick={() => downloadQRCode(qr.id)} className="mt-2 bg-cyan-500 hover:bg-cyan-600 text-white">
              <Download className="mr-2 h-4 w-4" /> Download
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

