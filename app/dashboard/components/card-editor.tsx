import { useRef } from "react"
import { Pencil, HelpCircle, Upload } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import type { EditorProps } from "../types"

export default function CardEditor({ cardData, setCardData }: EditorProps) {
  const fileInputRefs = {
    profilePicture: useRef<HTMLInputElement>(null),
    coverPhoto: useRef<HTMLInputElement>(null),
    companyLogo: useRef<HTMLInputElement>(null),
  }

  const handleImageUpload = (field: keyof typeof cardData) => {
    fileInputRefs[field].current?.click()
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>, field: keyof typeof cardData) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setCardData({ ...cardData, [field]: reader.result as string })
      }
      reader.readAsDataURL(file)
    }
  }

  const themeColors = [
    { name: "gray", class: "bg-gray-700", value: "#374151" },
    { name: "red", class: "bg-red-700", value: "#B91C1C" },
    { name: "orange", class: "bg-orange-700", value: "#C2410C" },
    { name: "yellow", class: "bg-yellow-600", value: "#CA8A04" },
    { name: "green", class: "bg-green-700", value: "#15803D" },
    { name: "blue", class: "bg-blue-700", value: "#1D4ED8" },
    { name: "purple", class: "bg-purple-700", value: "#7E22CE" },
    { name: "custom", class: "bg-gray-600 border border-dashed border-gray-400", value: "#4B5563" },
  ]

  return (
    <div className="p-6 space-y-8 overflow-y-auto max-h-screen bg-gray-800 text-white">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Edit VCard</h2>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="cardName" className="flex items-center gap-2 text-gray-300">
              Card Name
              <Pencil className="h-3 w-3" />
            </Label>
            <Input
              id="cardName"
              value={cardData.cardName}
              onChange={(e) => setCardData({ ...cardData, cardName: e.target.value })}
              className="bg-gray-700 border-gray-600 text-white"
            />
          </div>
          <div>
            <Label htmlFor="cardLayout" className="flex items-center gap-2 text-gray-300">
              Card Layout
            </Label>
            <Select
              value={cardData.cardLayout}
              onValueChange={(value) => setCardData({ ...cardData, cardLayout: value })}
            >
              <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                <SelectValue placeholder="Select layout" />
              </SelectTrigger>
              <SelectContent className="bg-gray-700 border-gray-600 text-white">
                <SelectItem value="Left Aligned">Left Aligned</SelectItem>
                <SelectItem value="Centered">Centered</SelectItem>
                <SelectItem value="Right Aligned">Right Aligned</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div>
            <Label className="flex items-center gap-2 text-gray-300">
              Profile picture
              <HelpCircle className="h-4 w-4 text-gray-400" />
            </Label>
            <div className="mt-2">
              <div className="relative h-24 w-24">
                <img
                  src={cardData.profilePicture || "/placeholder.svg"}
                  alt="Profile"
                  className="rounded-full object-cover w-full h-full"
                />
                <button
                  className="absolute bottom-0 right-0 bg-white rounded-full p-1 shadow-md"
                  onClick={() => handleImageUpload("profilePicture")}
                >
                  <Upload className="h-4 w-4" />
                </button>
                <input
                  type="file"
                  ref={fileInputRefs.profilePicture}
                  className="hidden"
                  accept="image/*"
                  onChange={(e) => handleFileChange(e, "profilePicture")}
                />
              </div>
            </div>
          </div>

          <div>
            <Label className="flex items-center gap-2 text-gray-300">
              Cover photo
              <HelpCircle className="h-4 w-4 text-gray-400" />
            </Label>
            <div className="mt-2">
              <div className="relative h-24 w-40">
                <img
                  src={cardData.coverPhoto || "/placeholder.svg"}
                  alt="Cover"
                  className="rounded-lg object-cover w-full h-full"
                />
                <button
                  className="absolute bottom-2 right-2 bg-white rounded-full p-1 shadow-md"
                  onClick={() => handleImageUpload("coverPhoto")}
                >
                  <Upload className="h-4 w-4" />
                </button>
                <input
                  type="file"
                  ref={fileInputRefs.coverPhoto}
                  className="hidden"
                  accept="image/*"
                  onChange={(e) => handleFileChange(e, "coverPhoto")}
                />
              </div>
            </div>
          </div>

          <div>
            <Label className="flex items-center gap-2 text-gray-300">
              Company logo
              <HelpCircle className="h-4 w-4 text-gray-400" />
            </Label>
            <div className="mt-2">
              <div className="relative h-24 w-24">
                <img
                  src={cardData.companyLogo || "/placeholder.svg"}
                  alt="Company"
                  className="rounded-lg object-contain w-full h-full border border-gray-200"
                />
                <button
                  className="absolute bottom-2 right-2 bg-white rounded-full p-1 shadow-md"
                  onClick={() => handleImageUpload("companyLogo")}
                >
                  <Upload className="h-4 w-4" />
                </button>
                <input
                  type="file"
                  ref={fileInputRefs.companyLogo}
                  className="hidden"
                  accept="image/*"
                  onChange={(e) => handleFileChange(e, "companyLogo")}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <Label htmlFor="name" className="text-gray-300">
              Name
            </Label>
            <Input
              id="name"
              value={cardData.name}
              onChange={(e) => setCardData({ ...cardData, name: e.target.value })}
              className="bg-gray-700 border-gray-600 text-white"
            />
          </div>

          <div>
            <Label htmlFor="pronouns" className="text-gray-300">
              Pronouns
            </Label>
            <Input
              id="pronouns"
              value={cardData.pronouns}
              onChange={(e) => setCardData({ ...cardData, pronouns: e.target.value })}
              className="bg-gray-700 border-gray-600 text-white"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="jobTitle" className="text-gray-300">
                Job Title
              </Label>
              <Input
                id="jobTitle"
                value={cardData.jobTitle}
                onChange={(e) => setCardData({ ...cardData, jobTitle: e.target.value })}
                className="bg-gray-700 border-gray-600 text-white"
              />
            </div>
            <div>
              <Label htmlFor="company" className="text-gray-300">
                Company
              </Label>
              <Input
                id="company"
                value={cardData.company}
                onChange={(e) => setCardData({ ...cardData, company: e.target.value })}
                className="bg-gray-700 border-gray-600 text-white"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="location" className="text-gray-300">
              Location
            </Label>
            <Input
              id="location"
              value={cardData.location}
              onChange={(e) => setCardData({ ...cardData, location: e.target.value })}
              className="bg-gray-700 border-gray-600 text-white"
            />
          </div>

          <div>
            <Label htmlFor="bio" className="text-gray-300">
              Bio
            </Label>
            <Textarea
              id="bio"
              value={cardData.bio}
              onChange={(e) => setCardData({ ...cardData, bio: e.target.value })}
              placeholder="Write a short bio..."
              className="bg-gray-700 border-gray-600 text-white"
            />
          </div>

          <div>
            <Label htmlFor="phone" className="text-gray-300">
              Phone
            </Label>
            <Input
              id="phone"
              value={cardData.phone}
              onChange={(e) => setCardData({ ...cardData, phone: e.target.value })}
              className="bg-gray-700 border-gray-600 text-white"
            />
          </div>

          <div>
            <Label htmlFor="email" className="text-gray-300">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              value={cardData.email}
              onChange={(e) => setCardData({ ...cardData, email: e.target.value })}
              className="bg-gray-700 border-gray-600 text-white"
            />
          </div>

          <div>
            <Label htmlFor="whatsapp" className="text-gray-300">
              WhatsApp
            </Label>
            <Input
              id="whatsapp"
              value={cardData.whatsapp}
              onChange={(e) => setCardData({ ...cardData, whatsapp: e.target.value })}
              className="bg-gray-700 border-gray-600 text-white"
            />
          </div>

          <div>
            <Label htmlFor="linkedin" className="text-gray-300">
              LinkedIn
            </Label>
            <Input
              id="linkedin"
              value={cardData.linkedin}
              onChange={(e) => setCardData({ ...cardData, linkedin: e.target.value })}
              className="bg-gray-700 border-gray-600 text-white"
            />
          </div>

          <div>
            <Label htmlFor="instagram" className="text-gray-300">
              Instagram
            </Label>
            <Input
              id="instagram"
              value={cardData.instagram}
              onChange={(e) => setCardData({ ...cardData, instagram: e.target.value })}
              className="bg-gray-700 border-gray-600 text-white"
            />
          </div>

          <div>
            <Label htmlFor="facebook" className="text-gray-300">
              Facebook
            </Label>
            <Input
              id="facebook"
              value={cardData.facebook}
              onChange={(e) => setCardData({ ...cardData, facebook: e.target.value })}
              className="bg-gray-700 border-gray-600 text-white"
            />
          </div>

          <div>
            <Label htmlFor="website" className="text-gray-300">
              Website
            </Label>
            <Input
              id="website"
              value={cardData.website}
              onChange={(e) => setCardData({ ...cardData, website: e.target.value })}
              className="bg-gray-700 border-gray-600 text-white"
            />
          </div>

          <div>
            <Label htmlFor="address" className="text-gray-300">
              Address
            </Label>
            <Textarea
              id="address"
              value={cardData.address}
              onChange={(e) => setCardData({ ...cardData, address: e.target.value })}
              placeholder="Enter your full address..."
              className="bg-gray-700 border-gray-600 text-white"
            />
          </div>
        </div>

        <div>
          <Label className="text-gray-300">Choose Theme</Label>
          <div className="mt-2 flex gap-2">
            {themeColors.map((color) => (
              <button
                key={color.name}
                className={`w-8 h-8 rounded-full ${color.class} ${
                  cardData.theme === color.value ? "ring-2 ring-offset-2 ring-cyan-500" : ""
                }`}
                onClick={() => setCardData({ ...cardData, theme: color.value })}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

