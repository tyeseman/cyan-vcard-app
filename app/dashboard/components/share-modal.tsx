import { useState } from "react"
import { QRCodeSVG } from "qrcode.react"
import { Copy, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { generateVCard } from "../../utils/generateVCard"
import type { ShareModalProps } from "../types"

export default function ShareModal({ isOpen, onClose, cardData }: ShareModalProps) {
  const [copied, setCopied] = useState(false)

  const shareUrl = `http://cyanvcard.com/vcard/${cardData.cardName}`

  const handleCopy = () => {
    navigator.clipboard.writeText(shareUrl)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleSaveContact = () => {
    const vCardData = generateVCard(cardData)
    const blob = new Blob([vCardData], { type: "text/vcard;charset=utf-8" })
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.href = url
    link.setAttribute("download", `${cardData.name}.vcf`)
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Share your vCard</DialogTitle>
          <DialogDescription>
            Anyone with this link will be able to view your vCard. You can also download the vCard file or share the QR
            code.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col items-center space-y-4">
          <QRCodeSVG value={shareUrl} size={200} />
          <div className="flex w-full max-w-sm items-center space-x-2">
            <Input value={shareUrl} readOnly />
            <Button type="submit" size="sm" onClick={handleCopy}>
              {copied ? "Copied!" : <Copy className="h-4 w-4" />}
            </Button>
          </div>
          <Button onClick={handleSaveContact} className="w-full">
            <Download className="h-4 w-4 mr-2" />
            Save Contact
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

