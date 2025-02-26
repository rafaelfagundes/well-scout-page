// components/Footer.tsx
"use client"
import { motion } from "motion/react"
import { ArrowUp, GithubLogo, InstagramLogo, LinkedinLogo, TwitterLogo } from "@phosphor-icons/react"
import { Button } from "@/components/ui/button"

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="py-12 px-4 relative overflow-hidden bg-[#121212] text-white dark:bg-[#121212] dark:text-white">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a0a0a]/30 -z-10"></div>

      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6 md:mb-0"
          >
            <h3 className="text-2xl font-bold text-[#00DF82] mb-2">WellScout</h3>
            <p className="text-sm text-white/80">Your Guide to Informed Food Choices</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex space-x-4"
          >
            <Button
              variant="outline"
              size="icon"
              className="cursor-pointer rounded-full border-white/20 bg-black hover:bg-black/10 hover:border-[#00DF82] hover:text-[#00DF82]"
            >
              <TwitterLogo size={20} weight="fill" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="cursor-pointer rounded-full border-white/20 bg-black hover:bg-black/10 hover:border-[#00DF82] hover:text-[#00DF82]"
            >
              <InstagramLogo size={20} weight="fill" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="cursor-pointer rounded-full border-white/20 bg-black hover:bg-black/10 hover:border-[#00DF82] hover:text-[#00DF82]"
            >
              <LinkedinLogo size={20} weight="fill" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="cursor-pointer rounded-full border-white/20 bg-black hover:bg-black/10 hover:border-[#00DF82] hover:text-[#00DF82]"
            >
              <GithubLogo size={20} weight="fill" />
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-x-8 gap-y-2 mb-8 text-sm"
        >
          <a href="#" className="text-white/80 hover:text-[#00DF82] transition-colors">
            Home
          </a>
          <a href="#features" className="text-white/80 hover:text-[#00DF82] transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="text-white/80 hover:text-[#00DF82] transition-colors">
            How It Works
          </a>
          <a href="#tech-specs" className="text-white/80 hover:text-[#00DF82] transition-colors">
            Tech Specs
          </a>
          <a href="#download" className="text-white/80 hover:text-[#00DF82] transition-colors">
            Download
          </a>
          <a href="#" className="text-white/80 hover:text-[#00DF82] transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="text-white/80 hover:text-[#00DF82] transition-colors">
            Terms of Service
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-sm text-white/80"
        >
          <p>© {new Date().getFullYear()} WellScout. All rights reserved.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mt-8"
        >
          <Button
            onClick={scrollToTop}
            variant="outline"
            size="icon"
            className="cursor-pointer rounded-full bg-black border-white/20 hover:bg-white/10 hover:border-[#00DF82] hover:text-[#00DF82]"
          >
            <ArrowUp size={20} weight="bold" />
          </Button>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer


