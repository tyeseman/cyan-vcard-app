"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import CardEditor from "../components/card-editor"
import CardPreview from "../components/card-preview"
import type { CardData } from "../types"

const initialCard: CardData = {
  id: "1",
  cardName: "My VCard",
  cardLayout: "Left Aligned",
  name: "",
  pronouns: "",
  jobTitle: "",
  company: "",
  location: "",
  bio: "",
  profilePicture: "/placeholder.svg",
  coverPhoto: "/placeholder.svg",
  companyLogo: "/placeholder.svg",
  theme: "#1F2937", // Dark gray background
  phone: "",
  email: "",
  whatsapp: "",
  linkedin: "",
  instagram: "",
  facebook: "",
  website: "",
  address: "",
}

export default function EditVCardForm() {
  const [card, setCard] = useState<CardData>(initialCard)
  const [activeTab, setActiveTab] = useState<"edit" | "preview">("edit")

  useEffect(() => {
    // In a real app, you would fetch the user's VCard data here
    // For now, we'll use the initial card data
    setCard(initialCard)
  }, [])

  const handleUpdateCard = (updatedCard: CardData) => {
    setCard(updatedCard)
    // In a real app, you would save the updated card data to your backend here
    console.log("Saving updated card:", updatedCard)
  }

  return (
    <div className="flex flex-col h-full bg-gray-900 text-white">
      <div className="flex justify-center mb-4 lg:hidden">
        <Button
          onClick={() => setActiveTab("edit")}
          variant={activeTab === "edit" ? "default" : "outline"}
          className="mr-2"
        >
          Edit
        </Button>
        <Button onClick={() => setActiveTab("preview")} variant={activeTab === "preview" ? "default" : "outline"}>
          Preview
        </Button>
      </div>
      <div className="flex flex-col lg:flex-row h-full">
        <div
          className={`flex-1 overflow-y-auto border-b lg:border-b-0 lg:border-r border-gray-700 bg-gray-800 ${activeTab === "edit" ? "block" : "hidden lg:block"}`}
        >
          <CardEditor cardData={card} setCardData={setCard} />
          <div className="flex justify-end gap-4 p-4">
            <Button onClick={() => handleUpdateCard(card)} className="bg-cyan-500 hover:bg-cyan-600 text-white">
              Save
            </Button>
          </div>
        </div>
        <div
          className={`w-full lg:w-[400px] bg-gray-800 p-4 flex-shrink-0 ${activeTab === "preview" ? "block" : "hidden lg:block"}`}
        >
          <CardPreview cardData={card} />
        </div>
      </div>
    </div>
  )
}

