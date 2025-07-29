"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { GlassCard } from "@/components/ui/glass-card"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "How does the AI campaign generation work?",
    answer:
      "Our AI analyzes your brand voice, target audience, and campaign objectives to generate high-converting campaigns. It uses advanced natural language processing and machine learning models trained on millions of successful marketing campaigns to create personalized content that resonates with your audience.",
  },
  {
    question: "Can I integrate with my existing marketing tools?",
    answer:
      "Yes! ADmyBRAND AI Suite integrates with 50+ popular marketing platforms including Meta Ads, Google Ads, TikTok, LinkedIn, HubSpot, Salesforce, and many more. Our API also allows for custom integrations with your existing tech stack.",
  },
  {
    question: "What kind of results can I expect?",
    answer:
      "Our customers typically see a 200-400% improvement in campaign ROI within the first 3 months. Results include increased click-through rates, better audience targeting, reduced cost per acquisition, and significant time savings in campaign creation and management.",
  },
  {
    question: "Is there a free trial available?",
    answer:
      "Yes! We offer a 14-day free trial with full access to all features. No credit card required. You can create up to 5 campaigns and generate 100 AI-powered marketing assets during your trial period.",
  },
  {
    question: "How secure is my data?",
    answer:
      "We take data security seriously. All data is encrypted in transit and at rest using industry-standard AES-256 encryption. We're SOC 2 Type II compliant and GDPR compliant. Your campaign data and customer information are never shared with third parties.",
  },
  {
    question: "Do you offer custom AI model training?",
    answer:
      "Yes, our Enterprise plan includes custom AI model training tailored to your specific industry, brand voice, and campaign objectives. This ensures even better performance and more accurate predictions for your unique business needs.",
  },
  {
    question: "What support options are available?",
    answer:
      "We offer multiple support channels: email support for all plans, priority support for Growth and Enterprise customers, and dedicated success managers for Enterprise clients. We also provide comprehensive documentation, video tutorials, and regular webinars.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer:
      "You can cancel your subscription at any time with no cancellation fees. If you cancel, you'll continue to have access to your account until the end of your current billing period. We also offer a 30-day money-back guarantee for annual plans.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

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
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Everything you need to know about ADmyBRAND AI Suite
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <GlassCard className="overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                  <ChevronDown
                    className={`w-5 h-5 text-white/70 transition-transform duration-300 flex-shrink-0 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? "auto" : 0,
                    opacity: openIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6">
                    <p className="text-white/80 leading-relaxed">{faq.answer}</p>
                  </div>
                </motion.div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
