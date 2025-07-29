"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { PricingCard } from "@/components/ui/pricing-card"
import { PricingCalculator } from "@/components/ui/pricing-calculator"

const pricingPlans = [
  {
    name: "Starter",
    description: "Perfect for small businesses getting started with AI marketing",
    monthlyPrice: 49,
    yearlyPrice: 39,
    features: [
      "Up to 5 campaigns",
      "Basic AI insights",
      "2 platform integrations",
      "Email support",
      "1,000 AI generations/month",
      "Standard templates",
    ],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Growth",
    description: "Ideal for growing businesses ready to scale their marketing",
    monthlyPrice: 149,
    yearlyPrice: 119,
    features: [
      "Unlimited campaigns",
      "Advanced AI analytics",
      "10+ platform integrations",
      "Priority support",
      "10,000 AI generations/month",
      "Custom templates",
      "A/B testing suite",
      "Team collaboration",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    description: "For large organizations with complex marketing needs",
    monthlyPrice: 499,
    yearlyPrice: 399,
    features: [
      "Everything in Growth",
      "Custom AI model training",
      "Unlimited integrations",
      "Dedicated success manager",
      "Unlimited AI generations",
      "White-label options",
      "Advanced security",
      "Custom reporting",
    ],
    cta: "Contact Sales",
    popular: false,
  },
]

export function PricingSection() {
  const [isYearly, setIsYearly] = useState(false)

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Choose Your{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Perfect Plan
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto mb-8">
            Start free and scale as you grow. All plans include our core AI features with no setup fees.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-white/10 backdrop-blur-md rounded-xl p-1 border border-white/20">
            <Button
              variant={!isYearly ? "default" : "ghost"}
              onClick={() => setIsYearly(false)}
              className={`px-6 py-2 rounded-lg transition-all duration-300 ${
                !isYearly
                  ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg"
                  : "text-white/70 hover:text-white hover:bg-white/10"
              }`}
            >
              Monthly
            </Button>
            <Button
              variant={isYearly ? "default" : "ghost"}
              onClick={() => setIsYearly(true)}
              className={`px-6 py-2 rounded-lg transition-all duration-300 ${
                isYearly
                  ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg"
                  : "text-white/70 hover:text-white hover:bg-white/10"
              }`}
            >
              Yearly
              <span className="ml-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">Save 20%</span>
            </Button>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <PricingCard
                {...plan}
                price={isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                billing={isYearly ? "yearly" : "monthly"}
              />
            </motion.div>
          ))}
        </div>

        {/* Pricing Calculator */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <PricingCalculator />
        </motion.div>
      </div>
    </section>
  )
}
