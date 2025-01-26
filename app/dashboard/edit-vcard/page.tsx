import type { Metadata } from "next"
import EditVCardForm from "./EditVCardForm"
import { JsonLd } from "../../components/JsonLd"
import { metadata as pageMetadata } from "./metadata"

export const metadata: Metadata = pageMetadata

export default function EditVCardPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Edit VCard - Cyan VCard",
          description: "Create and edit your digital business card with Cyan VCard's easy-to-use editor.",
          url: "https://www.cyanvcard.com/dashboard/edit-vcard",
        }}
      />
      <EditVCardForm />
    </>
  )
}

