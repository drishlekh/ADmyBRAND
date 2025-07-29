"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowUp } from "lucide-react"

export function ScrollToTop() {
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 300], [0, 1])
  const scale = useTransform(scrollY, [0, 300], [0.8, 1])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <motion.div style={{ opacity, scale }} className="fixed bottom-8 right-8 z-40">
      <Button
        onClick={scrollToTop}
        size="lg"
        className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 group"
      >
        <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
      </Button>
    </motion.div>
  )
}
