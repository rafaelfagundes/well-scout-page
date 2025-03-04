// components/HowItWorks.tsx
"use client"

import type React from "react"
import { motion } from "motion/react"
import { Barcode, MagnifyingGlass, ListChecks, Brain } from "@phosphor-icons/react/dist/ssr"

interface StepProps {
  icon: React.ReactNode
  title: string
  description: string
  isLast?: boolean
  index: number
}

const Step: React.FC<StepProps> = ({ icon, title, description, isLast, index }) => (
  <motion.div
    className="relative flex items-start pl-16 md:pl-20"
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.2 }}
  >
    <div className="absolute left-0 top-0 flex flex-col items-center">
      <motion.div
        className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-primary to-[#0d7e84] text-white rounded-full shadow-lg shadow-primary/20"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        {icon}
      </motion.div>
      {!isLast && <div className="w-0.5 h-24 bg-gradient-to-b from-primary to-primary/10 mt-2" />}
    </div>
    <div className="ml-6 mb-12">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  </motion.div>
)

const HowItWorks = () => {
  return (
    <section className="px-4 relative overflow-hidden" id="how-it-works">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-primary/20 blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 md:text-5xl gradient-text inline-block">How It Works</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-[#0d7e84] mx-auto mt-4"></div>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <Step
            icon={<Barcode size={24} weight="bold" />}
            title="Scan Products"
            description="Use your phone's camera to scan the barcode of any food product. Our advanced recognition system works instantly."
            index={0}
          />
          <Step
            icon={<MagnifyingGlass size={24} weight="bold" />}
            title="Search Products"
            description="Find products by their names or categories with our intelligent search system that learns from your preferences."
            index={1}
          />

          <Step
            icon={<ListChecks size={24} weight="bold" />}
            title="View Details"
            description="Check ingredients, nutritional info, and ratings with our beautifully designed interface that highlights what matters to you."
            index={2}
          />

          <Step
            icon={<Brain size={24} weight="bold" />}
            title="Get Advice"
            description="Receive personalized dietary recommendations based on your scanned products, powered by advanced AI technology."
            isLast={true}
            index={3}
          />
        </div>
      </div>
    </section>
  )
}

export default HowItWorks


