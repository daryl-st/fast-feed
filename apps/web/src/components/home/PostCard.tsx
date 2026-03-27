"use client"

import { Heart, MessageSquare, Share2, MoreHorizontal } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { cn } from "@/lib/utils";
import { motion } from "framer-motion"

// Animation Variants: Definition for how the component animates
const postVariants = {
  initial: { opacity: 0, y: 30 }, // Start state (hidden and slightly down)
  animate: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.5, // How long the animation takes
      ease: [0.22, 1, 0.36, 1] as const, // Smooth custom cubic-bezier easing
    } 
  },
}

interface PostProps {
  author: string;
  role: string;
  time: string;
  content: string;
  images?: string[];
  codeTag?: string;
}

export function PostCard({ author, role, time, content, images, codeTag }: PostProps) {
    // Use <motion.article> and attach the variants - for smooth render
  return (
    <motion.article
      layout // Crucial: Animates layout shifts when new items are added
      variants={postVariants}
      initial="initial"
      animate="animate"
      className="group bg-[#1c1b1d] rounded-xl overflow-hidden border border-white/5 hover:border-white/10 transition-colors duration-500 mb-8"
    >
      <div className="p-6">
        <header className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10 border border-white/5">
              <AvatarFallback>{author[0]}</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="text-sm font-bold text-white tracking-tight leading-none">{author}</h3>
              <span className="text-[9px] uppercase tracking-widest text-gray-500 font-bold mt-1.5 block">
                {role} • {time}
              </span>
            </div>
          </div>
          <button className="text-gray-600 hover:text-white transition-colors">
            <MoreHorizontal className="w-5 h-5" />
          </button>
        </header>

        <div className="space-y-4">
          <p className="text-[14px] leading-relaxed text-gray-300">
            {content} {codeTag && <code className="bg-[#353437] px-1.5 py-0.5 rounded text-white text-[11px] font-mono">{codeTag}</code>}
          </p>
          
          {images && images.length > 0 && (
            <div className={cn("grid gap-2", images.length > 1 ? "grid-cols-2" : "grid-cols-1")}>
              {images.map((img, i) => (
                <div key={i} className="aspect-video bg-[#353437]/20 rounded-lg overflow-hidden border border-white/5">
                  <img src={img} alt="Post content" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" />
                </div>
              ))}
            </div>
          )}
        </div>

        <footer className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2">
          {[
            { Icon: Heart, label: "Like" },
            { Icon: MessageSquare, label: "Comment" }
          ].map((item) => (
            <button key={item.label} className="flex items-center gap-2 text-gray-500 hover:text-white px-3 py-2 rounded-md transition-all group/btn">
              <item.Icon className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
              <span className="text-[10px] font-black uppercase tracking-widest">{item.label}</span>
            </button>
          ))}
          <button className="flex items-center gap-2 text-gray-500 hover:text-white px-3 py-2 rounded-md transition-all group/btn ml-auto">
            <Share2 className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
            <span className="text-[10px] font-black uppercase tracking-widest">Share</span>
          </button>
        </footer>
      </div>
    </motion.article>
  )
}