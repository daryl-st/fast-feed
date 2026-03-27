"use client"

import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import { PostCard } from "./PostCard"
import { Loader2 } from "lucide-react"
import { AnimatePresence } from "framer-motion"


// Mock API call
const fetchNextPosts = async (page: number) => {
  // In a real app: fetch(`/api/posts?page=${page}`)
  await new Promise(resolve => setTimeout(resolve, 1000));
  return [
    {
      id: Math.random(),
      author: "Marcus Thorne",
      role: "DESIGN SYSTEMS",
      time: "5H AGO",
      content: "The 'No-Line' rule is performing exceptionally well. User focus is now 100% on the data.",
      images: ["/ui-detail-1.jpg", "/ui-detail-2.jpg"]
    }
  ];
};

// This is super
export function InfiniteFeed() {
  const [posts, setPosts] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  
  // The 'ref' goes on a hidden div at the bottom of the list
  const { ref, inView } = useInView({
    threshold: 0.1, // Trigger when 10% of the marker is visible
  });

  useEffect(() => {
    if (inView && !loading) {
      loadMore();
    }
  }, [inView]);

  const loadMore = async () => {
    if (page > 3) return; // Mock: Stop after 3 pages
    setLoading(true);
    const newPosts = await fetchNextPosts(page);
    setPosts(prev => [...prev, ...newPosts]);
    setPage(prev => prev + 1);
    setLoading(false);
  };

  return (
    <div className="space-y-4">
        <AnimatePresence initial={false}>
        {posts.map((post) => (
          <PostCard key={post.id} {...post} />
        ))}
      </AnimatePresence>
      {posts.map((post) => (
        <PostCard key={post.id} {...post} />
      ))}

      {/* Trigger Point */}
      <div ref={ref} className="py-10 flex justify-center">
        {loading && (
          <div className="flex items-center gap-2 text-gray-500">
            <Loader2 className="w-4 h-4 animate-spin" />
            <span className="text-[10px] font-black uppercase tracking-widest">
              Syncing Core...
            </span>
          </div>
        )}
      </div>
    </div>
  )
}