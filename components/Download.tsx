// components/Download.tsx
"use client"
import { motion } from "motion/react"
import { Button } from "@/components/ui/button"
import { AppleLogo, GooglePlayLogo } from "@phosphor-icons/react"
import { CustomButton } from "@/components/ui/custom-button"

const Download = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden" id="download">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent -z-10"></div>

      {/* Decorative circles */}
      <motion.div
        className="absolute -top-20 -left-20 w-40 h-40 bg-primary/5 rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute -bottom-20 -right-20 w-40 h-40 bg-primary/5 rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          delay: 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 md:text-5xl gradient-text inline-block">Get WellScout Now</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-[#0d7e84] mx-auto mt-4"></div>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <CustomButton 
            href="#"
            variant="primary"
            icon={<AppleLogo size={24} weight="fill" />}
            hoverCardContent={{
              title: "Coming Soon!",
              description: "Be the first to know when we launch on iOS."
            }}
          >
            App Store (iOS)
          </CustomButton>

          <CustomButton 
            href="#"
            variant="outline"
            icon={<GooglePlayLogo size={24} weight="fill" />}
            hoverCardContent={{
              title: "Coming Soon!",
              description: "Be the first to know when we launch on Android."
            }}
          >
            Google Play (Android)
          </CustomButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center max-w-md mx-auto p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl border border-primary/10 shadow-xl"
        >
          <h3 className="text-xl font-semibold mb-3 text-primary">Contact Information</h3>
          <p className="mb-4">{`Have questions? We're here to help!`}</p>
          <p className="text-sm opacity-75">(Coming Soon)</p>

          {/* Email subscription form could be added here */}
          <div className="mt-6">
            <Button className="bg-gradient-to-r from-primary to-[#0d7e84] hover:from-[#0d7e84] hover:to-primary transition-all duration-300">
              Join Waitlist
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Download


