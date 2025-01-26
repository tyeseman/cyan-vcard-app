import { Card, CardContent } from "@/components/ui/card"
import type { CardData } from "../types"

interface CardThumbnailProps {
  card: CardData
}

export default function CardThumbnail({ card }: CardThumbnailProps) {
  return (
    <Card className="w-full cursor-pointer hover:shadow-md transition-shadow">
      <CardContent className="p-4">
        <div className="aspect-w-16 aspect-h-9 mb-2">
          <img
            src={card.coverPhoto || "/placeholder.svg"}
            alt={`${card.name}'s card`}
            className="object-cover rounded-md"
          />
        </div>
        <h3 className="font-semibold truncate">{card.cardName}</h3>
        <p className="text-sm text-gray-500 truncate">{card.name}</p>
      </CardContent>
    </Card>
  )
}

