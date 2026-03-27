"use client"

import { Shield, ChevronRight } from "lucide-react"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
// import { cn } from "@/lib/utils"

interface PreferenceItemProps {
  id: string
  title: string
  description: string
  defaultChecked?: boolean
}

const preferences: PreferenceItemProps[] = [
  {
    id: "dark-mode",
    title: "Dark Mode",
    description: "Optimize for low-light environments",
    defaultChecked: true,
  },
  {
    id: "notifications",
    title: "Notifications",
    description: "Real-time alerts for profile activity",
    defaultChecked: false,
  },
  {
    id: "privacy",
    title: "Privacy",
    description: "Hide online status from public view",
    defaultChecked: true,
  },
]

export function SystemPrefs() {
  return (
    <div className="space-y-8 w-full">
      <div>
        <h3 className="text-lg font-bold text-white mb-8 tracking-tight">
          System Preferences
        </h3>
        
        <div className="space-y-4">
          {preferences.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-4 bg-[#1c1b1d] rounded-xl border border-white/5 hover:border-white/10 transition-colors"
            >
              <div className="space-y-1">
                <Label 
                  htmlFor={item.id} 
                  className="text-sm font-semibold text-white cursor-pointer"
                >
                  {item.title}
                </Label>
                <p className="text-xs text-gray-500 font-medium">
                  {item.description}
                </p>
              </div>
              <Switch 
                id={item.id} 
                defaultChecked={item.defaultChecked}
                className="data-[state=checked]:bg-white data-[state=unchecked]:bg-[#353437]"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Security Tier Card */}
      <Card className="p-6 bg-[#353437]/20 rounded-xl border border-dashed border-white/10 mt-10 shadow-none">
        <div className="flex items-center gap-3 mb-4">
          <Shield className="w-5 h-5 text-gray-400" strokeWidth={2.5} />
          <h4 className="text-sm font-bold text-white uppercase tracking-wider">
            Security Tier
          </h4>
        </div>
        
        <p className="text-xs text-gray-400 leading-relaxed mb-6">
          Your account is currently protected by two-factor authentication. 
          Last login was from <span className="text-gray-300">192.168.1.1</span> (San Francisco).
        </p>

        <button className="group flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white hover:opacity-80 transition-opacity">
          Manage Security Keys
          <ChevronRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
        </button>
      </Card>
    </div>
  )
}