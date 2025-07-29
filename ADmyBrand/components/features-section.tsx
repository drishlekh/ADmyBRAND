"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { GlassCard } from "@/components/ui/glass-card"
import { Brain, Target, BarChart3, Zap, Users, Globe, TrendingUp, Sparkles } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "AI Campaign Generator",
    description:
      "Create high-converting campaigns in seconds with our advanced AI that understands your brand voice and audience.",
    category: "automation",
  },
  {
    icon: Target,
    title: "Smart Audience Segmentation",
    description: "Automatically identify and target your most valuable customer segments with precision AI analysis.",
    category: "targeting",
  },
  {
    icon: BarChart3,
    title: "Real-time Analytics Dashboard",
    description: "Monitor campaign performance with beautiful, actionable insights powered by machine learning.",
    category: "analytics",
  },
  {
    icon: Zap,
    title: "Automated A/B Testing",
    description: "Continuously optimize your campaigns with AI-driven split testing that learns and adapts.",
    category: "optimization",
  },
  {
    icon: Users,
    title: "Personalized Ad Suggestions",
    description: "Get AI-powered recommendations for ad creative, copy, and targeting based on your goals.",
    category: "personalization",
  },
  {
    icon: Globe,
    title: "Multi-platform Integration",
    description: "Seamlessly connect with Meta, Google, TikTok, LinkedIn, and 50+ marketing platforms.",
    category: "integration",
  },
  {
    icon: TrendingUp,
    title: "Predictive Performance",
    description: "Forecast campaign results and ROI before you launch with our predictive AI models.",
    category: "analytics",
  },
  {
    icon: Sparkles,
    title: "Creative AI Assistant",
    description: "Generate compelling ad copy, headlines, and creative concepts tailored to your brand.",
    category: "automation",
  },
]

const viewTypes = [
  { id: "marketer", label: "Marketer View" },
  { id: "business", label: "Business Owner View" },
]

export function FeaturesSection() {
  const [activeView, setActiveView] = useState("marketer")

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
            Powerful Features for{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Modern Marketers
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto mb-8">
            Everything you need to create, optimize, and scale your marketing campaigns with the power of AI
          </p>

          {/* View Toggle */}
          <div className="inline-flex bg-white/10 backdrop-blur-md rounded-xl p-1 border border-white/20">
            {viewTypes.map((view) => (
              <Button
                key={view.id}
                variant={activeView === view.id ? "default" : "ghost"}
                onClick={() => setActiveView(view.id)}
                className={`px-6 py-2 rounded-lg transition-all duration-300 ${
                  activeView === view.id
                    ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg"
                    : "text-white/70 hover:text-white hover:bg-white/10"
                }`}
              >
                {view.label}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <GlassCard className="p-6 h-full hover:bg-white/10 transition-all duration-300">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-white/70 leading-relaxed">{feature.description}</p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
