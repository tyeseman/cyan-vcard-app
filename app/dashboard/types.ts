export type CardData = {
  userId: string
  cardName: string
  cardLayout: string
  name: string
  pronouns?: string
  jobTitle?: string
  company?: string
  location?: string
  bio?: string
  profilePicture?: string
  coverPhoto?: string
  companyLogo?: string
  theme?: string
  phone?: string
  email?: string
  whatsapp?: string
  linkedin?: string
  instagram?: string
  facebook?: string
  website?: string
  address?: string
}

export interface SidebarItem {
  icon: React.ComponentType
  label: string
  href: string
}

export interface EditorProps {
  cardData: CardData
  setCardData: (data: CardData) => void
}

export interface PreviewProps {
  cardData: CardData
}

export interface ShareModalProps {
  isOpen: boolean
  onClose: () => void
  cardData: CardData
}

export interface FileItem {
  id: string
  name: string
  type: string
  size?: number
  file?: File
}

