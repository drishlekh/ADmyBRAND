import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface GlassCardProps {
  children: ReactNode
  className?: string
}

export function GlassCard({ children, className }: GlassCardProps) {
  return (
    <div className={cn("bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-xl", className)}>
      {children}
    </div>
  )
}
