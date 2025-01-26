import { useState } from "react"
import { Mail, Phone, Linkedin, Instagram, Facebook, Globe, MapPin, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import ShareModal from "./share-modal"
import { generateVCard } from "../../utils/generateVCard"
import type { PreviewProps } from "../types"

const getTextColor = (bgColor: string) => {
  // For darker backgrounds, we'll use light text
  return "text-gray-100"
}

export default function CardPreview({ cardData }: PreviewProps) {
  const [isShareModalOpen, setIsShareModalOpen] = useState(false)
  const textColorClass = getTextColor(cardData.theme)

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
    <div className="h-full flex flex-col bg-gray-800 text-white">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-sm font-medium text-gray-300">Card live preview</h2>
        <Button
          variant="outline"
          size="sm"
          className="text-cyan-400 border-cyan-400 hover:bg-cyan-400 hover:text-white"
          onClick={() => setIsShareModalOpen(true)}
        >
          Share card
        </Button>
      </div>

      <div
        className="flex-1 rounded-xl overflow-hidden shadow-lg w-full max-w-md mx-auto"
        style={{ backgroundColor: cardData.theme }}
      >
        <div className="relative h-0 pb-[56.25%]">
          <img
            src={cardData.coverPhoto || "/placeholder.svg"}
            alt="Cover"
            className="w-full h-full object-cover absolute top-0 left-0"
          />
          <div className="absolute -bottom-12 left-4 flex items-end space-x-2">
            <div className="relative w-24 h-24">
              <img
                src={cardData.profilePicture || "/placeholder.svg"}
                alt={cardData.name}
                className="w-full h-full rounded-full border-4 border-gray-800 object-cover"
              />
              <div className="absolute bottom-0 right-0 w-8 h-8 rounded-full border-2 border-gray-800 bg-gray-800 overflow-hidden">
                <img
                  src={cardData.companyLogo || "/placeholder.svg"}
                  alt={cardData.company}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className={`pt-14 px-4 pb-4 ${textColorClass}`}>
          <h1 className="text-xl font-bold">{cardData.name}</h1>
          <p className="text-gray-300">{cardData.jobTitle}</p>
          <p className="text-gray-300">{cardData.company}</p>
          <p className="text-gray-400 text-sm">{cardData.location}</p>

          <Button className="w-full mt-4 bg-cyan-500 text-white hover:bg-cyan-600" onClick={handleSaveContact}>
            Save Contact
          </Button>

          <div className="grid grid-cols-2 gap-2 mt-4">
            {cardData.email && (
              <Button
                variant="outline"
                className="w-full flex items-center justify-center gap-2 bg-gray-700 border-gray-600 text-gray-200 hover:bg-gray-600"
              >
                <Mail className="h-4 w-4" />
                Email
              </Button>
            )}
            {cardData.phone && (
              <Button
                variant="outline"
                className="w-full flex items-center justify-center gap-2 bg-gray-700 border-gray-600 text-gray-200 hover:bg-gray-600"
              >
                <Phone className="h-4 w-4" />
                Call
              </Button>
            )}
            {cardData.whatsapp && (
              <Button
                variant="outline"
                className="w-full flex items-center justify-center gap-2 bg-gray-700 border-gray-600 text-gray-200 hover:bg-gray-600"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </Button>
            )}
            {cardData.linkedin && (
              <Button
                variant="outline"
                className="w-full flex items-center justify-center gap-2 bg-gray-700 border-gray-600 text-gray-200 hover:bg-gray-600"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </Button>
            )}
            {cardData.instagram && (
              <Button
                variant="outline"
                className="w-full flex items-center justify-center gap-2 bg-gray-700 border-gray-600 text-gray-200 hover:bg-gray-600"
              >
                <Instagram className="h-4 w-4" />
                Instagram
              </Button>
            )}
            {cardData.facebook && (
              <Button
                variant="outline"
                className="w-full flex items-center justify-center gap-2 bg-gray-700 border-gray-600 text-gray-200 hover:bg-gray-600"
              >
                <Facebook className="h-4 w-4" />
                Facebook
              </Button>
            )}
            {cardData.website && (
              <Button
                variant="outline"
                className="w-full flex items-center justify-center gap-2 bg-gray-700 border-gray-600 text-gray-200 hover:bg-gray-600"
              >
                <Globe className="h-4 w-4" />
                Website
              </Button>
            )}
            {cardData.address && (
              <Button
                variant="outline"
                className="w-full flex items-center justify-center gap-2 bg-gray-700 border-gray-600 text-gray-200 hover:bg-gray-600"
              >
                <MapPin className="h-4 w-4" />
                Address
              </Button>
            )}
          </div>
        </div>
      </div>

      <ShareModal isOpen={isShareModalOpen} onClose={() => setIsShareModalOpen(false)} cardData={cardData} />
    </div>
  )
}

