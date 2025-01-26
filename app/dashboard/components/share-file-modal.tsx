import { useState } from "react"
import { QRCodeSVG } from "qrcode.react"
import { Copy, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface ShareFileModalProps {
  isOpen: boolean
  onClose: () => void
  fileName: string
}

export default function ShareFileModal({ isOpen, onClose, fileName }: ShareFileModalProps) {
  const [copied, setCopied] = useState(false)

  // In a real app, this would be a proper URL to your shared file
  const shareUrl = `https://example.com/shared-file/${encodeURIComponent(fileName)}`

  const handleCopy = () => {
    navigator.clipboard.writeText(shareUrl)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleDownloadQR = () => {
    const svg = document.getElementById("share-qr-code")
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
        downloadLink.download = `${fileName}-qr-code.png`
        downloadLink.href = `${pngFile}`
        downloadLink.click()
      }
      img.src = `data:image/svg+xml;base64,${btoa(svgData)}`
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Share File: {fileName}</DialogTitle>
          <DialogDescription>Anyone with this link will be able to view and download the file.</DialogDescription>
        </DialogHeader>
        <div className="flex flex-col items-center space-y-4">
          <QRCodeSVG id="share-qr-code" value={shareUrl} size={200} />
          <div className="flex w-full max-w-sm items-center space-x-2">
            <Input value={shareUrl} readOnly />
            <Button type="submit" size="sm" onClick={handleCopy}>
              {copied ? "Copied!" : <Copy className="h-4 w-4" />}
            </Button>
          </div>
          <Button className="w-full" onClick={handleDownloadQR}>
            <Download className="h-4 w-4 mr-2" />
            Download QR Code
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

