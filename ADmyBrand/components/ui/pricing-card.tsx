"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { GlassCard } from "@/components/ui/glass-card"
import { Check, Star } from "lucide-react"

interface PricingCardProps {
  name: string
  description: string
  price: number
  billing: "monthly" | "yearly"
  features: string[]
  cta: string
  popular: boolean
}

export function PricingCard({ name, description, price, billing, features, cta, popular }: PricingCardProps) {
  return (
    <motion.div whileHover={{ y: -5 }} className={`relative ${popular ? "scale-105" : ""}`}>
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1 shadow-lg">
            <Star className="w-4 h-4" />
            Best Value
          </div>
        </div>
      )}

      <GlassCard className={`p-8 h-full relative z-10 ${popular ? "border-purple-400/50 bg-white/15" : ""}`}>
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-white mb-2">{name}</h3>
          <p className="text-white/70 mb-4">{description}</p>
          <div className="flex items-baseline justify-center gap-1">
            <span className="text-4xl font-bold text-white">${price}</span>
            <span className="text-white/70">/{billing === "yearly" ? "year" : "month"}</span>
          </div>
          {billing === "yearly" && <p className="text-sm text-green-400 mt-1">Save 20% annually</p>}
        </div>

        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-3">
              <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
              <span className="text-white/80">{feature}</span>
            </li>
          ))}
        </ul>

        <Button
          className={`w-full py-3 font-semibold ${
            popular
              ? "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
              : "bg-white/10 hover:bg-white/20 text-white border border-white/20"
          }`}
        >
          {cta}
        </Button>
      </GlassCard>
    </motion.div>
  )
}
