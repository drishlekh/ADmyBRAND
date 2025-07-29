"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { GlassCard } from "@/components/ui/glass-card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star, Play } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Marketing Director",
    company: "TechFlow Inc.",
    avatar: "/placeholder.svg?height=60&width=60",
    content:
      "ADmyBRAND AI Suite transformed our marketing ROI by 340% in just 3 months. The AI-generated campaigns consistently outperform our manual efforts.",
    rating: 5,
    hasVideo: true,
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    role: "Founder & CEO",
    company: "GrowthLab",
    avatar: "/placeholder.svg?height=60&width=60",
    content:
      "As a startup, we needed marketing automation that actually works. This platform gave us enterprise-level capabilities at a fraction of the cost.",
    rating: 5,
    hasVideo: false,
  },
  {
    id: 3,
    name: "Emily Watson",
    role: "Digital Marketing Manager",
    company: "RetailMax",
    avatar: "/placeholder.svg?height=60&width=60",
    content:
      "The predictive analytics feature helped us identify our best-performing audience segments before we even launched. Incredible accuracy.",
    rating: 5,
    hasVideo: true,
  },
  {
    id: 4,
    name: "David Kim",
    role: "VP of Marketing",
    company: "FinanceForward",
    avatar: "/placeholder.svg?height=60&width=60",
    content:
      "We reduced our campaign creation time by 80% while improving performance across all channels. The AI truly understands our brand voice.",
    rating: 5,
    hasVideo: false,
  },
  {
    id: 5,
    name: "Lisa Thompson",
    role: "Agency Owner",
    company: "Creative Catalyst",
    avatar: "/placeholder.svg?height=60&width=60",
    content:
      "Managing 50+ client campaigns became effortless with ADmyBRAND. Our team productivity increased 3x, and client satisfaction is at an all-time high.",
    rating: 5,
    hasVideo: true,
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  return (
    <section className="py-24 relative bg-white/5">
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
            Trusted by{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Marketing Leaders
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Join thousands of marketers who've transformed their campaigns with AI
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            <GlassCard className="p-8 md:p-12">
              <div className="text-center">
                {/* Stars */}
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                  "{testimonials[currentIndex].content}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center justify-center gap-4">
                  <img
                    src={testimonials[currentIndex].avatar || "/placeholder.svg"}
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 rounded-full border-2 border-white/20"
                  />
                  <div className="text-left">
                    <div className="flex items-center gap-2">
                      <h4 className="text-lg font-semibold text-white">{testimonials[currentIndex].name}</h4>
                      {testimonials[currentIndex].hasVideo && (
                        <Button size="sm" variant="ghost" className="text-purple-400 hover:text-purple-300 p-1">
                          <Play className="w-4 h-4" />
                        </Button>
                      )}
                    </div>
                    <p className="text-white/70">
                      {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                    </p>
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center justify-center mt-8 gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={prevTestimonial}
              className="text-white/70 hover:text-white hover:bg-white/10 rounded-full p-2"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-gradient-to-r from-purple-400 to-blue-400"
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="ghost"
              size="sm"
              onClick={nextTestimonial}
              className="text-white/70 hover:text-white hover:bg-white/10 rounded-full p-2"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
