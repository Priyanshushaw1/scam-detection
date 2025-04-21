import type React from "react"
import { Sidebar } from "@/components/sidebar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen bg-gray-50">
      <div className="w-64 hidden md:block">
        <Sidebar />
      </div>
      <div className="flex-1 overflow-auto">{children}</div>
    </div>
  )
}
