import { Bell, HelpCircle } from "lucide-react"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export function Header() {
  return (
    <header className="fixed top-0 right-0 left-64 h-16 z-30 bg-[#131315]/80 backdrop-blur-xl border-b border-white/5 flex items-center justify-between px-10 shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
      <div className="flex items-center gap-4">
        <span className="text-white font-semibold tracking-tight text-md">Profile Settings</span>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-4 text-gray-400">
          <button className="hover:text-white transition-colors">
            <Bell className="w-5 h-5" />
          </button>
          <button className="hover:text-white transition-colors">
            <HelpCircle className="w-5 h-5" />
          </button>
        </div>
        
        <div className="h-8 w-8 rounded-full border border-white/10 p-[1px]">
          <Avatar className="h-full w-full">
            <AvatarImage src="/profile.jpg" alt="User Profile" />
            <AvatarFallback className="bg-zinc-800 text-[10px]">AS</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  )
}