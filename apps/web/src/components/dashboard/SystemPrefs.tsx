'use client'

import { Switch } from '@/components/ui/switch'
import { useTheme } from '@/components/providers/ThemeProvider'

export function SystemPrefs() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="bg-surface-low rounded-lg p-6 border border-outline-variant/10">
      <h2 className="text-lg font-semibold text-primary mb-6 tracking-tight">
        System Preferences
      </h2>
      <div className="space-y-4">
        <div className="flex items-center justify-between py-2">
          <div>
            <p className="font-medium text-zinc-200 text-sm">Dark Mode</p>
            <p className="text-xs text-zinc-500 mt-1">
              Optimize for low-light environments
            </p>
          </div>
          <Switch checked={theme === 'dark'} onCheckedChange={toggleTheme} />
        </div>
        
        <div className="flex items-center justify-between py-2">
          <div>
            <p className="font-medium text-zinc-200 text-sm">Notifications</p>
            <p className="text-xs text-zinc-500 mt-1">
              Real-time alerts for profile activity
            </p>
          </div>
          <Switch defaultChecked />
        </div>
        
        <div className="flex items-center justify-between py-2">
          <div>
            <p className="font-medium text-zinc-200 text-sm">Privacy</p>
            <p className="text-xs text-zinc-500 mt-1">
              Hide online status from public view
            </p>
          </div>
          <Switch />
        </div>
      </div>
    </div>
  )
}