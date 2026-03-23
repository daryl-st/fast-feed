import { Button } from '@/components/ui/button'
import { Shield } from 'lucide-react'

export function SecurityTier() {
  return (
    <div className="bg-surface-low rounded-lg p-6 border border-outline-variant/10">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
        <div className="flex gap-3">
          <Shield className="w-5 h-5 text-success flex-shrink-0" />
          <div>
            <h2 className="text-lg font-semibold text-primary tracking-tight">
              SECURITY TIER
            </h2>
            <p className="text-sm text-zinc-400 mt-1 leading-relaxed">
              Your account is currently protected by two-factor authentication. 
              Last login was from 192.168.1.1 (San Francisco).
            </p>
          </div>
        </div>
        <Button variant="outline" className="shrink-0 border-outline-variant/20 text-zinc-300 hover:bg-surface/30">
          MANAGE SECURITY KEYS →
        </Button>
      </div>
    </div>
  )
}