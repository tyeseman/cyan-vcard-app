"use client"

import { useState } from "react"
import DashboardSidebar from "./components/dashboard-sidebar"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex h-screen bg-gray-900">
      <DashboardSidebar open={sidebarOpen} setOpen={setSidebarOpen} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-gray-800 lg:hidden">
          <div className="px-4 py-2 flex items-center">
            <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(true)} className="text-white">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </header>
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-900">{children}</main>
      </div>
    </div>
  )
}

