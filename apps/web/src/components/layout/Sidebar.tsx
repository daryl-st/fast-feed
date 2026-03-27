"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Compass, Bell, Settings, Plus } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "Explore", href: "/explore", icon: Compass },
  { name: "Notifications", href: "/notifications", icon: Bell },
  { name: "Settings", href: "/settings", icon: Settings },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="fixed left-0 top-0 h-full w-64 z-40 bg-[#1c1b1d]/60 backdrop-blur-md border-r border-white/10 flex flex-col py-8 px-4 shadow-2xl">
      <div className="mb-10 px-4">
        <h1 className="text-xl font-black text-white tracking-tighter">ActivityEngine</h1>
        <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-1 font-bold">v1.0.4</p>
      </div>

      <nav className="flex-1 space-y-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-4 py-3 transition-all duration-300 rounded-md group",
                isActive 
                  ? "bg-gradient-to-r from-white/10 to-transparent border-l-2 border-white text-white shadow-[0_0_15px_rgba(255,255,255,0.05)]" 
                  : "text-gray-500 hover:text-gray-300 hover:bg-white/5"
              )}
            >
              <item.icon className="w-5 h-5" strokeWidth={isActive ? 2.5 : 2} />
              <span className="text-xs tracking-wide uppercase font-bold">{item.name}</span>
            </Link>
          )
        })}
      </nav>

      <div className="pt-4 mt-auto border-t border-white/5">
        <Button className="w-full bg-white text-black hover:bg-gray-200 text-xs font-black uppercase tracking-widest py-6 rounded-md transition-transform active:scale-95">
          New Event
        </Button>
      </div>
    </aside>
  )
}