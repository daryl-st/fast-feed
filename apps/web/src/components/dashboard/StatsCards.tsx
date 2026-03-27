// import { TrendingUp, Minus } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const stats = [
  { label: "Total Posts", value: "142", trend: "+12%", color: "text-emerald-500" },
  { label: "Engagement Rate", value: "4.8%", trend: "+0.4", color: "text-emerald-500" },
  { label: "Profile Views", value: "2.4k", trend: "Stable", color: "text-gray-500" },
]

export function StatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
      {stats.map((stat) => (
        <Card key={stat.label} className="bg-[#1c1b1d] border-white/5 hover:border-white/20 transition-all">
          <CardContent className="p-6">
            <p className="text-[10px] text-gray-500 font-bold tracking-widest uppercase mb-4">
              {stat.label}
            </p>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-black">{stat.value}</span>
              <span className={`text-xs font-bold ${stat.color}`}>{stat.trend}</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
