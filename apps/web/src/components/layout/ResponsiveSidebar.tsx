"use client"

import { useState } from "react"
import { Home, Compass, Bell, Settings, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export function ResponsiveSidebar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => setIsOpen(!isOpen)

  return (
    <>
      {/* 1. Mobile Toggle Button (Visible only on small screens) */}
      <Button 
        variant="ghost" 
        size="icon" 
        onClick={toggleSidebar}
        className="fixed top-3 left-4 z-[60] md:hidden text-white"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </Button>

      {/* 2. Backdrop Overlay (Visible only when mobile sidebar is open) */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[45] md:hidden" 
          onClick={toggleSidebar}
        />
      )}

      {/* 3. The Sidebar Core */}
      <aside className={cn(
        "fixed left-0 top-0 h-full w-64 z-50 bg-[#1c1b1d]/60 backdrop-blur-md border-r border-white/10 flex flex-col py-8 px-4 transition-transform duration-300 shadow-2xl",
        // Logic: Hidden on the left by default, shown on md screens, translated in on mobile toggle
        isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
      )}>
        <div className="mb-10 px-4">
          <h1 className="text-xl font-black text-white tracking-tighter">ActivityEngine</h1>
          <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-1 font-bold">v1.0.4</p>
        </div>

        <nav className="flex-1 space-y-1">
          {/* Navigation Items (same as before) */}
          <button className="flex items-center gap-4 px-4 py-3 rounded-lg text-white bg-white/5 border-l-2 border-white">
            <Home className="w-5 h-5" />
            <span className="text-xs uppercase font-bold">Home</span>
          </button>
        </nav>
      </aside>
    </>
  )
}