import { MapPin, Globe } from 'lucide-react'

export function ProfileHeader() {
  return (
    <div className="bg-surface-low rounded-lg p-8 border border-outline-variant/10">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold text-primary tracking-tight">
            Alex Sterling
          </h1>
          <p className="text-zinc-400 mt-2 text-sm">
            Senior Technical Architect & Creative Strategist
          </p>
          <div className="flex items-center gap-4 mt-3 text-xs text-zinc-500 uppercase tracking-wide">
            <div className="flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              <span>SAN FRANCISCO, CA</span>
            </div>
            <div className="flex items-center gap-1">
              <Globe className="w-3 h-3" />
              <span>STERLING.DEV</span>
            </div>
          </div>
        </div>
        <div className="px-3 py-1 bg-primary/10 rounded-md border border-primary/20">
          <span className="text-xs font-semibold text-primary uppercase tracking-wide">PRO</span>
        </div>
      </div>
    </div>
  )
}