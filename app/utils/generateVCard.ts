import type { CardData } from "../dashboard/types"

export function generateVCard(data: CardData): string {
  const vCard = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `FN:${data.name}`,
    `N:${data.name.split(" ").reverse().join(";")}`,
    `TITLE:${data.jobTitle}`,
    `ORG:${data.company}`,
    `ADR:;;${data.address || data.location}`,
    `NOTE:${data.bio}`,
    `TEL;TYPE=CELL:${data.phone}`,
    `EMAIL:${data.email}`,
    `URL:${data.website}`,
    `X-SOCIALPROFILE;TYPE=linkedin:${data.linkedin}`,
    `X-SOCIALPROFILE;TYPE=instagram:${data.instagram}`,
    `X-SOCIALPROFILE;TYPE=facebook:${data.facebook}`,
    `X-WHATSAPP:${data.whatsapp}`,
    "END:VCARD",
  ].join("\n")

  return vCard
}

