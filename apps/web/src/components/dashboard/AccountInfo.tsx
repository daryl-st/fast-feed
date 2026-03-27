"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

const profileSchema = z.object({
  firstName: z.string().min(2, "Name too short"),
  lastName: z.string().min(2, "Name too short"),
  email: z.string().email("Invalid email"),
  bio: z.string().max(200, "Bio must be under 200 characters"),
})

type ProfileValues = z.infer<typeof profileSchema>

export function AccountInfo() {
  const { register, handleSubmit, formState: { errors } } = useForm<ProfileValues>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      firstName: "Alex",
      lastName: "Sterling",
      email: "alex@sterling.dev",
      bio: "I focus on building high-performance systems and editorial user interfaces. Passionate about minimalism, typography, and dark-mode aesthetics.",
    }
  })

  const onSubmit = (data: ProfileValues) => {
    console.log("Updated Profile:", data)
  }

  return (
    <div className="w-full">
      <h3 className="text-lg font-bold text-white mb-8 tracking-tight">Account Information</h3>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label className="text-[10px] text-gray-500 font-bold uppercase tracking-widest ml-1">First Name</Label>
            <Input 
              {...register("firstName")}
              className="bg-[#0e0e10] border-white/5 text-white focus:border-white focus:ring-0 h-12"
            />
          </div>
          <div className="space-y-2">
            <Label className="text-[10px] text-gray-500 font-bold uppercase tracking-widest ml-1">Last Name</Label>
            <Input 
              {...register("lastName")}
              className="bg-[#0e0e10] border-white/5 text-white focus:border-white focus:ring-0 h-12"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label className="text-[10px] text-gray-500 font-bold uppercase tracking-widest ml-1">Email Address</Label>
          <Input 
            {...register("email")}
            type="email"
            className="bg-[#0e0e10] border-white/5 text-white focus:border-white focus:ring-0 h-12"
          />
        </div>

        <div className="space-y-2">
          <Label className="text-[10px] text-gray-500 font-bold uppercase tracking-widest ml-1">Bio</Label>
          <Textarea 
            {...register("bio")}
            className="bg-[#0e0e10] border-white/5 text-white focus:border-white focus:ring-0 min-h-[120px] resize-none"
          />
          <p className="text-[9px] text-gray-600 font-medium italic">Supports Markdown for formatting.</p>
        </div>
      </form>
    </div>
  )
}