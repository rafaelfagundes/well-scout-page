// components/TechSpecs.tsx
"use client"
import { motion } from "motion/react"
import { Code, DeviceMobile, Robot, Barcode, Sparkle, Gauge, Heart } from "@phosphor-icons/react"

const TechSpecs = () => {
  return (
    <section className="py-20 px-4 relative" id="tech-specs">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent -z-10"></div>

      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 md:text-5xl gradient-text inline-block">Technical Specifications</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-[#0d7e84] mx-auto mt-4"></div>
        </motion.div>

        <div className="grid gap-12 md:grid-cols-2 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-xl border border-primary/10"
          >
            <div className="flex items-center mb-6">
              <DeviceMobile size={32} weight="duotone" className="text-primary mr-4" />
              <h3 className="text-2xl font-semibold">Supported Platforms</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
                <span>iOS</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
                <span>Android</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
                <span>Web (Limited Functionality - Camera access may vary)</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-xl border border-primary/10"
          >
            <div className="flex items-center mb-6">
              <Code size={32} weight="duotone" className="text-primary mr-4" />
              <h3 className="text-2xl font-semibold">Key Technologies</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
                <span>React Native</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
                <span>Expo</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
                <span>Redux Toolkit</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
                <span>Open Food Facts API</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
                <span>Google Gemini API</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
                <span>Vision Camera</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
                <span>Expo Router</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
                <span>React Native SVG</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
                <span>Reanimated</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
                <span>AsyncStorage</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Tech icons floating */}
        <div className="relative h-32 mt-16 overflow-hidden">
          <motion.div
            className="absolute left-1/4 top-1/2"
            animate={{ y: [0, -10, 0], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          >
            <Gauge size={36} weight="duotone" className="text-primary" />
          </motion.div>
          <motion.div
            className="absolute left-1/3 top-1/4"
            animate={{ y: [0, -15, 0], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.5 }}
          >
            <Robot size={36} weight="duotone" className="text-primary" />
          </motion.div>
          <motion.div
            className="absolute left-1/2 top-1/2"
            animate={{ y: [0, -12, 0], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 4.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
          >
            <Barcode size={36} weight="duotone" className="text-primary" />
          </motion.div>
          <motion.div
            className="absolute left-2/3 top-1/3"
            animate={{ y: [0, -8, 0], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 3.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1.5 }}
          >
            <Heart size={36} weight="duotone" className="text-primary" />
          </motion.div>
          <motion.div
            className="absolute left-3/4 top-1/2"
            animate={{ y: [0, -10, 0], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2 }}
          >
            <Sparkle size={36} weight="duotone" className="text-primary" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default TechSpecs


