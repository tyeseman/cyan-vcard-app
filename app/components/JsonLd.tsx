import { memo } from "react"

interface JsonLdProps {
  data: Record<string, any>
}

export const JsonLd = memo(({ data }: JsonLdProps) => (
  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
))

JsonLd.displayName = "JsonLd"

