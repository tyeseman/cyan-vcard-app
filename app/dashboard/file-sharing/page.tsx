"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { Upload, File, FileText, ImageIcon, FileIcon as PdfFile, Trash2, Share2, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Progress } from "@/components/ui/progress"
import ShareFileModal from "../components/share-file-modal"
import FilePreviewModal from "../components/file-preview-modal"
import type { FileItem } from "../types"

const MAX_STORAGE_MB = 500
const MAX_STORAGE_BYTES = MAX_STORAGE_MB * 1024 * 1024

const getFileIcon = (fileType: string) => {
  if (fileType.startsWith("image/")) return ImageIcon
  if (fileType === "application/pdf") return PdfFile
  if (fileType.includes("word")) return FileText
  return File
}

export default function FileSharingPage() {
  const [files, setFiles] = useState<FileItem[]>([])
  const [shareModalOpen, setShareModalOpen] = useState(false)
  const [previewModalOpen, setPreviewModalOpen] = useState(false)
  const [selectedFile, setSelectedFile] = useState<FileItem | null>(null)
  const [totalSize, setTotalSize] = useState(0)
  const [isStorageExceeded, setIsStorageExceeded] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const newTotalSize = files.reduce((acc, file) => acc + (file.size || 0), 0)
    setTotalSize(newTotalSize)
    setIsStorageExceeded(newTotalSize > MAX_STORAGE_BYTES)
  }, [files])

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFiles = event.target.files
    if (uploadedFiles) {
      const newFiles: FileItem[] = Array.from(uploadedFiles).map((file) => ({
        id: `${Date.now()}-${file.name}`,
        name: file.name,
        type: file.type,
        size: file.size,
        file: file,
      }))

      const newTotalSize = totalSize + newFiles.reduce((acc, file) => acc + (file.size || 0), 0)

      if (newTotalSize > MAX_STORAGE_BYTES) {
        setIsStorageExceeded(true)
        return
      }

      setFiles((prevFiles) => [...prevFiles, ...newFiles])
    }
  }

  const handleDeleteFile = (fileId: string) => {
    setFiles((prevFiles) => prevFiles.filter((file) => file.id !== fileId))
  }

  const handleShareFile = (file: FileItem) => {
    setSelectedFile(file)
    setShareModalOpen(true)
  }

  const handlePreviewFile = (file: FileItem) => {
    setSelectedFile(file)
    setPreviewModalOpen(true)
  }

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const sizes = ["Bytes", "KB", "MB", "GB", "TB"]
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
  }

  const usedStoragePercentage = (totalSize / MAX_STORAGE_BYTES) * 100

  return (
    <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
      <Card className="w-full max-w-3xl mx-auto bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white">File Sharing</CardTitle>
          <CardDescription className="text-gray-400">Upload, preview, and manage your shared files</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-gray-300">
                  Storage used: {formatFileSize(totalSize)} / {MAX_STORAGE_MB} MB
                </span>
                <span className="text-sm font-medium text-gray-300">{usedStoragePercentage.toFixed(1)}%</span>
              </div>
              <Progress
                value={usedStoragePercentage}
                className="w-full bg-gray-700"
                style={{ "--progress-background": "hsl(var(--cyan-500))" } as React.CSSProperties}
              />
            </div>

            {isStorageExceeded && (
              <Alert variant="destructive" className="bg-red-900 border-red-700 text-white">
                <AlertTitle>Storage limit exceeded</AlertTitle>
                <AlertDescription>
                  You have exceeded the {MAX_STORAGE_MB} MB storage limit. Please delete some files before uploading
                  more.
                </AlertDescription>
              </Alert>
            )}

            <div className="flex items-center justify-center w-full">
              <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-600 border-dashed rounded-lg cursor-pointer bg-gray-700 hover:bg-gray-600"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <Upload className="w-10 h-10 mb-3 text-gray-400" />
                  <p className="mb-2 text-sm text-gray-400">
                    <span className="font-semibold">Click to upload</span> or drag and drop
                  </p>
                  <p className="text-xs text-gray-500">Images, PDFs, DOCs, and other common file types accepted</p>
                </div>
                <Input
                  id="dropzone-file"
                  type="file"
                  className="hidden"
                  onChange={handleFileUpload}
                  multiple
                  accept="image/*,.pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.txt,.csv"
                  ref={fileInputRef}
                  disabled={isStorageExceeded}
                />
              </label>
            </div>

            {files.length > 0 && (
              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-2 text-white">Uploaded Files</h3>
                <ul className="space-y-2">
                  {files.map((fileItem) => {
                    const FileIcon = getFileIcon(fileItem.type)
                    return (
                      <li key={fileItem.id} className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
                        <div className="flex items-center">
                          <FileIcon className="w-5 h-5 mr-2 text-cyan-500" />
                          <span className="text-sm font-medium text-gray-200 truncate max-w-[150px] sm:max-w-[200px] md:max-w-[300px]">
                            {fileItem.name}
                          </span>
                          <span className="ml-2 text-xs text-gray-400">{formatFileSize(fileItem.size || 0)}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button variant="ghost" size="sm" onClick={() => handlePreviewFile(fileItem)}>
                            <Eye className="w-4 h-4 text-cyan-500" />
                          </Button>
                          <Button variant="ghost" size="sm" onClick={() => handleShareFile(fileItem)}>
                            <Share2 className="w-4 h-4 text-green-500" />
                          </Button>
                          <Button variant="ghost" size="sm" onClick={() => handleDeleteFile(fileItem.id)}>
                            <Trash2 className="w-4 h-4 text-red-500" />
                          </Button>
                        </div>
                      </li>
                    )
                  })}
                </ul>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
      {selectedFile && (
        <>
          <ShareFileModal
            isOpen={shareModalOpen}
            onClose={() => setShareModalOpen(false)}
            fileName={selectedFile.name}
          />
          <FilePreviewModal
            isOpen={previewModalOpen}
            onClose={() => setPreviewModalOpen(false)}
            file={selectedFile.file}
          />
        </>
      )}
    </div>
  )
}

