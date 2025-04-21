"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  Shield,
  LayoutDashboard,
  MessageSquare,
  AlertTriangle,
  HelpCircle,
  LogOut,
  User,
  Clock,
  Filter,
} from "lucide-react"

const navItems = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Scam Box",
    href: "/dashboard/scam-box",
    icon: AlertTriangle,
  },
  {
    name: "Non-Scam Box",
    href: "/dashboard/non-scam-box",
    icon: MessageSquare,
  },
  {
    name: "AI Filter Settings",
    href: "/dashboard/filter-settings",
    icon: Filter,
  },
  {
    name: "Activity Log",
    href: "/dashboard/activity-log",
    icon: Clock,
  },
  {
    name: "Profile",
    href: "/dashboard/profile",
    icon: User,
  },
  {
    name: "Help",
    href: "/dashboard/help",
    icon: HelpCircle,
  },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="flex flex-col h-full bg-white border-r">
      <div className="p-4">
        <Link href="/dashboard" className="flex items-center gap-2">
          <Shield className="h-6 w-6 text-green-600" />
          <span className="font-bold text-xl">TrueAlert</span>
        </Link>
      </div>

      <div className="flex-1 px-3 py-4">
        <nav className="space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                pathname === item.href ? "bg-green-100 text-green-700" : "text-gray-700 hover:bg-gray-100",
              )}
            >
              <item.icon className="h-5 w-5" />
              {item.name}
            </Link>
          ))}
        </nav>
      </div>

      <div className="p-4 border-t">
        <Link
          href="/"
          className="flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors"
        >
          <LogOut className="h-5 w-5" />
          Logout
        </Link>
      </div>
    </div>
  )
}
