import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

// Needs massive refactor - specially after API communication stablished
export function ContextualSidebar() {
  return (
    <aside className="hidden xl:flex flex-col w-72 ml-8 space-y-8">
      <div className="bg-[#1c1b1d] rounded-xl p-6 border border-white/5">
        <h4 className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-6">Trending Systems</h4>
        <div className="space-y-5">
          {["KineticMonolith", "EditorialPrecision", "AuthV2"].map((tag) => (
            <div key={tag} className="group cursor-pointer">
              <p className="text-xs font-bold text-white mb-1 group-hover:text-gray-400 transition-colors">#{tag}</p>
              <p className="text-[10px] text-gray-600 font-medium">Mapped Activities</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#1c1b1d] rounded-xl p-6 border border-white/5">
        <h4 className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-6">Who to follow</h4>
        <div className="flex items-center gap-3">
          <Avatar className="h-8 w-8 rounded-md border border-white/5">
            <AvatarFallback>DC</AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-bold text-white truncate">David Chen</p>
            <p className="text-[10px] text-gray-600 truncate">@dchen_dev</p>
          </div>
          <Button variant="outline" className="h-7 px-3 text-[10px] font-bold border-white/10 hover:bg-white/5">
            Follow
          </Button>
        </div>
      </div>
    </aside>
  )
}