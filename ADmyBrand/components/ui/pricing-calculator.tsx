"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { GlassCard } from "@/components/ui/glass-card"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Calculator, Users, DollarSign, Zap } from "lucide-react"

export function PricingCalculator() {
  const [users, setUsers] = useState([5])
  const [monthlySpend, setMonthlySpend] = useState([10000])
  const [campaigns, setCampaigns] = useState([20])

  const calculatePrice = () => {
    const basePrice = 149
    const userMultiplier = Math.max(1, users[0] / 5)
    const spendMultiplier = Math.max(1, monthlySpend[0] / 10000)
    const campaignMultiplier = Math.max(1, campaigns[0] / 20)

    return Math.round(basePrice * userMultiplier * spendMultiplier * campaignMultiplier * 0.8)
  }

  const estimatedPrice = calculatePrice()
  const estimatedSavings = Math.round(estimatedPrice * 0.3)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <GlassCard className="p-8">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Calculator className="w-6 h-6 text-purple-400" />
            <h3 className="text-2xl font-bold text-white">Pricing Calculator</h3>
          </div>
          <p className="text-white/70">Customize your plan based on your specific needs</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Controls */}
          <div className="space-y-8">
            {/* Users */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Users className="w-5 h-5 text-purple-400" />
                <label className="text-white font-semibold">Team Members: {users[0]}</label>
              </div>
              <Slider value={users} onValueChange={setUsers} max={50} min={1} step={1} className="w-full" />
              <div className="flex justify-between text-sm text-white/60 mt-2">
                <span>1</span>
                <span>50+</span>
              </div>
            </div>

            {/* Monthly Spend */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <DollarSign className="w-5 h-5 text-purple-400" />
                <label className="text-white font-semibold">
                  Monthly Ad Spend: ${monthlySpend[0].toLocaleString()}
                </label>
              </div>
              <Slider
                value={monthlySpend}
                onValueChange={setMonthlySpend}
                max={100000}
                min={1000}
                step={1000}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-white/60 mt-2">
                <span>$1K</span>
                <span>$100K+</span>
              </div>
            </div>

            {/* Campaigns */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Zap className="w-5 h-5 text-purple-400" />
                <label className="text-white font-semibold">Active Campaigns: {campaigns[0]}</label>
              </div>
              <Slider value={campaigns} onValueChange={setCampaigns} max={100} min={5} step={5} className="w-full" />
              <div className="flex justify-between text-sm text-white/60 mt-2">
                <span>5</span>
                <span>100+</span>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-xl p-6 border border-purple-400/20">
            <h4 className="text-xl font-bold text-white mb-6">Your Custom Plan</h4>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center">
                <span className="text-white/70">Estimated Monthly Cost:</span>
                <span className="text-2xl font-bold text-white">${estimatedPrice}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/70">Estimated Monthly Savings:</span>
                <span className="text-lg font-semibold text-green-400">${estimatedSavings}</span>
              </div>
              <div className="border-t border-white/20 pt-4">
                <div className="flex justify-between items-center">
                  <span className="text-white/70">ROI Improvement:</span>
                  <span className="text-lg font-semibold text-purple-400">
                    +{Math.round((estimatedSavings / estimatedPrice) * 100 + 200)}%
                  </span>
                </div>
              </div>
            </div>

            <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3">
              Get Started with Custom Plan
            </Button>

            <p className="text-xs text-white/60 text-center mt-3">14-day free trial • No setup fees • Cancel anytime</p>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  )
}
