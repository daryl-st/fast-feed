"use client"

import { Image, Paperclip, AtSign } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export function CreatePost() {
  return (
    <section className="bg-surface-low rounded-xl p-5 border border-white/5 shadow-xl mb-8">
      <div className="flex gap-4">
        <Avatar className="h-10 w-10 shrink-0 border border-white/5">
          <AvatarImage src="/user-avatar.jpg" />
          <AvatarFallback>A</AvatarFallback>
        </Avatar>
        <div className="flex-1 space-y-4">
          <Textarea 
            placeholder="Deploy a new update or share progress..." 
            className="bg-[#0e0e10] border-white/10 text-sm focus:border-gray-500/20 resize-none min-h-25"
          />
          <div className="flex items-center justify-between border-t border-white/5 pt-3">
            <div className="flex gap-1">
              {[Image, Paperclip, AtSign].map((Icon, i) => (
                <Button key={i} variant="ghost" size="icon" className="text-gray-500 hover:text-white hover:bg-white/5">
                  <Icon className="w-4 h-4" />
                </Button>
              ))}
            </div>
            <Button className="bg-white text-black hover:bg-gray-200 px-5 py-1.5 h-auto text-[10px] font-black uppercase tracking-widest">
              Post
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}