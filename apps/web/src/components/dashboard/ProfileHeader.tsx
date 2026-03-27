"use client"

import { MapPin, Link as LinkIcon, Edit2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export function ProfileHeader() {
  return (
    <div className="flex items-end gap-8 mb-16 pt-8">
      <div className="relative group">
        <div className="w-32 h-32 rounded-xl overflow-hidden shadow-2xl border border-white/10">
          <Avatar className="h-full w-full rounded-xl">
            <AvatarImage src="/profile-large.jpg" className="object-cover" />
            <AvatarFallback className="bg-zinc-800">AS</AvatarFallback>
          </Avatar>
        </div>
        <button className="absolute -bottom-2 -right-2 p-2 bg-[#353437] rounded-lg border border-white/10 hover:bg-[#39393b] transition-colors shadow-lg">
          <Edit2 className="w-3 h-3 text-white" />
        </button>
      </div>

      <div className="flex-1">
        <div className="flex items-center gap-3 mb-1">
          <h2 className="text-4xl font-extrabold tracking-tighter text-white">Alex Sterling</h2>
          <Badge className="bg-[#353437] hover:bg-[#353437] text-white text-[10px] font-bold tracking-widest px-2 py-0.5 rounded border-none">
            PRO
          </Badge>
        </div>
        <p className="text-gray-400 font-medium mb-4">Senior Technical Architect & Creative Strategist</p>
        
        <div className="flex gap-6">
          <div className="flex items-center gap-1.5 text-xs text-gray-500 font-semibold tracking-wider uppercase">
            <MapPin className="w-3.5 h-3.5" />
            <span>San Francisco, CA</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-gray-500 font-semibold tracking-wider uppercase">
            <LinkIcon className="w-3.5 h-3.5" />
            <span className="text-white hover:underline cursor-pointer">sterling.dev</span>
          </div>
        </div>
      </div>

      <Button className="px-6 py-2.5 bg-white text-black text-xs font-black uppercase tracking-widest rounded-md hover:opacity-90 transition-opacity">
        Save Changes
      </Button>
    </div>
  )
}