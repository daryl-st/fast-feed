import { TrendingUp, Minus } from 'lucide-react'

const stats = [
  {
    label: 'TOTALS POSTS',
    value: '142',
    change: '+12%',
    trend: 'up' as const,
  },
  {
    label: 'ENGAGEMENT RATE',
    value: '4.8%',
    change: '+0.4',
    trend: 'up' as const,
  },
  {
    label: 'PROFILE VIEWS',
    value: '2.4k',
    change: 'Stable',
    trend: 'neutral' as const,
  }
]

export function StatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="bg-surface-low rounded-lg p-6 border border-outline-variant/10 hover:border-outline-variant/20 transition-all duration-200"
        >
          <p className="text-xs text-zinc-500 uppercase tracking-wide mb-3">
            {stat.label}
          </p>
          <div className="flex items-baseline justify-between">
            <p className="text-3xl font-bold text-primary tracking-tight">
              {stat.value}
            </p>
            <div
              className={`flex items-center gap-1 text-xs ${
                stat.trend === 'up'
                  ? 'text-success'
                  : 'text-zinc-500'
              }`}
            >
              {stat.trend === 'up' && <TrendingUp className="w-3 h-3" />}
              {stat.trend === 'neutral' && <Minus className="w-3 h-3" />}
              <span>{stat.change}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}