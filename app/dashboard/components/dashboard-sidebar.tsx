"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { UserCircle, FileIcon, QrCode, Info, ChevronLeft, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"
import type { SidebarItem } from "../types"

const sidebarItems: SidebarItem[] = [
  { icon: UserCircle, label: "VCard", href: "/dashboard/edit-vcard" },
  { icon: FileIcon, label: "File Sharing", href: "/dashboard/file-sharing" },
]

const sharingItems: SidebarItem[] = [
  { icon: QrCode, label: "QR Codes", href: "/dashboard/qr-code" },
  { icon: Info, label: "About", href: "/dashboard/about" },
]

interface DashboardSidebarProps {
  open: boolean
  setOpen: (open: boolean) => void
}

export default function DashboardSidebar({ open, setOpen }: DashboardSidebarProps) {
  const pathname = usePathname()

  return (
    <div
      className={cn(
        "lg:relative fixed inset-y-0 left-0 z-50 w-64 bg-gray-800 border-r border-gray-700 flex flex-col transition-transform duration-300 ease-in-out transform",
        open ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
      )}
    >
      <div className="p-4 border-b border-gray-700 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <ChevronLeft className="h-4 w-4 text-gray-400 mr-2" />
          <span className="font-medium text-gray-200">Cyan VCard</span>
        </Link>
        <Button variant="ghost" size="icon" onClick={() => setOpen(false)} className="lg:hidden text-gray-400">
          <X className="h-6 w-6" />
        </Button>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        <div className="space-y-6">
          <div>
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">CONTENT</h3>
            <nav className="space-y-1">
              {sidebarItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "flex items-center px-3 py-2 text-sm font-medium rounded-md",
                    pathname === item.href
                      ? "bg-gray-700 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                  )}
                >
                  <item.icon className="h-5 w-5 mr-3" />
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">SHARING</h3>
            <nav className="space-y-1">
              {sharingItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "flex items-center px-3 py-2 text-sm font-medium rounded-md",
                    pathname === item.href
                      ? "bg-gray-700 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                  )}
                >
                  <item.icon className="h-5 w-5 mr-3" />
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>

      <div className="p-4 border-t border-gray-700">
        <div className="flex items-center">
          <Avatar className="h-8 w-8 mr-2">
            <AvatarImage src="/placeholder.svg" alt="User" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
          <span className="font-medium text-gray-200">User Name</span>
        </div>
      </div>
    </div>
  )
}

