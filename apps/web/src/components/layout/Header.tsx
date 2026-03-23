'use client'

import { Bell, Search, User } from 'lucide-react'

export function Header() {
  return (
    <header className="border-b border-outline-variant/10 bg-background/50 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search events..."
              className="w-full pl-10 pr-4 py-2 bg-surface-low rounded-md border border-outline-variant/10 focus:border-primary/30 focus:outline-none transition-all duration-200 text-sm text-zinc-200 placeholder:text-zinc-500"
            />
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <button className="p-2 rounded-md hover:bg-surface/30 transition-colors">
            <Bell className="w-5 h-5 text-zinc-400" />
          </button>
          <button className="flex items-center gap-2 p-2 rounded-md hover:bg-surface/30 transition-colors">
            <User className="w-5 h-5 text-zinc-400" />
          </button>
        </div>
      </div>
    </header>
  )
}