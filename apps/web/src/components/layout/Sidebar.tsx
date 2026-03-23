'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, Compass, Bell, Settings, Zap, PlusCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useEffect, useRef } from 'react'

const navItems = [
  { name: 'HOME', href: '/', icon: Home },
  { name: 'EXPLORE', href: '/explore', icon: Compass },
  { name: 'NOTIFICATIONS', href: '/notifications', icon: Bell },
  { name: 'SETTINGS', href: '/settings', icon: Settings },
]

export function Sidebar() {
  const pathname = usePathname()
  const sidebarRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sidebarRef.current) {
        const rect = sidebarRef.current.getBoundingClientRect()
        const x = ((e.clientX - rect.left) / rect.width) * 100
        const y = ((e.clientY - rect.top) / rect.height) * 100
        sidebarRef.current.style.setProperty('--x', `${x}%`)
        sidebarRef.current.style.setProperty('--y', `${y}%`)
      }
    }

    const sidebar = sidebarRef.current
    if (sidebar) {
      sidebar.addEventListener('mousemove', handleMouseMove)
      return () => sidebar.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const handleNewEvent = () => {
    console.log('Create new event')
  }

  return (
    <aside 
      ref={sidebarRef}
      className="w-64 flex flex-col h-screen sticky top-0 glass-effect relative overflow-hidden"
      style={{ background: 'rgba(28, 27, 29, 0.6)' }}
    >
      {/* Spotlight effect overlay */}
      <div className="spotlight-glow absolute inset-0 pointer-events-none" />
      
      <div className="p-6 relative z-10">
        <div className="flex items-center gap-2">
          <Zap className="w-6 h-6 text-primary" />
          <span className="text-xl font-bold text-primary tracking-tight">ActivityEngine</span>
        </div>
        <p className="text-xs text-zinc-400 mt-1 uppercase tracking-wide">V1.0.4</p>
      </div>
      
      <nav className="flex-1 px-4 space-y-1 relative z-10">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          const Icon = item.icon
          
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-md transition-all duration-200 ${
                isActive
                  ? 'bg-surface-bright/20 text-primary'
                  : 'text-zinc-400 hover:bg-surface/30 hover:text-zinc-200'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium text-sm uppercase tracking-wide">{item.name}</span>
            </Link>
          )
        })}
      </nav>
      
      <div className="p-4 mt-auto relative z-10">
        <Button 
          onClick={handleNewEvent}
          className="w-full bg-primary text-on-primary hover:bg-zinc-200 hover-scale transition-all duration-200 shadow-ambient"
        >
          <PlusCircle className="w-4 h-4 mr-2" />
          NEW EVENT
        </Button>
      </div>
    </aside>
  )
}