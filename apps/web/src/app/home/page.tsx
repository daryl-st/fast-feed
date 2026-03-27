import { ContextualSidebar } from "@/components/home/ContextualSideBar";
import { CreatePost } from "@/components/home/CreatePost";
import { InfiniteFeed } from "@/components/home/InfiniteFeed";
import { PostCard } from "@/components/home/PostCard";

// Needs massive refactoring
export default function HomePage() {
  return (
    <div className="flex justify-center w-full min-h-screen">
      <div className="w-full max-w-150">
        <CreatePost /> {/* Will change this later */}
        
        <div className="space-y-4">
          <PostCard 
            author="Alex Rivera"
            role="SENIOR ARCHITECT"
            time="2H AGO"
            codeTag="Auth.js"
            content="Just integrated the new module into the ActivityEngine core. The latency dropped by nearly 40% across all edge nodes. Precision is the new velocity."
            images={["/tech-visual.jpg"]}
          />
          {/* This is rally good */}
          <InfiniteFeed />
          {/* ... more PostCards */}
        </div>
      </div>

      {/* This sidebar only appears on large screens */}
      <ContextualSidebar />
    </div>
  )
}