import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

interface FilePreviewModalProps {
  isOpen: boolean
  onClose: () => void
  file: File | null
}

export default function FilePreviewModal({ isOpen, onClose, file }: FilePreviewModalProps) {
  const [preview, setPreview] = useState<string | null>(null)

  useEffect(() => {
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreview(reader.result as string)
      }
      if (file.type.startsWith("image/")) {
        reader.readAsDataURL(file)
      } else {
        reader.readAsText(file)
      }
    }
  }, [file])

  const renderPreview = () => {
    if (!file || !preview) return null

    if (file.type.startsWith("image/")) {
      return (
        <img src={preview || "/placeholder.svg"} alt={file.name} className="max-w-full max-h-[70vh] object-contain" />
      )
    } else if (file.type === "application/pdf") {
      return <iframe src={preview} title={file.name} width="100%" height="500px" className="border-none" />
    } else {
      return <pre className="whitespace-pre-wrap max-h-[70vh] overflow-auto">{preview}</pre>
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[80vw]">
        <DialogHeader>
          <DialogTitle>Preview: {file?.name}</DialogTitle>
        </DialogHeader>
        <div className="mt-4">{renderPreview()}</div>
        <div className="mt-4 flex justify-end">
          <Button onClick={onClose}>Close</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

