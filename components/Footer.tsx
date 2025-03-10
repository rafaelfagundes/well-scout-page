// components/Footer.tsx
"use client"
import { motion } from "motion/react"
import { ArrowUp, GithubLogo, InstagramLogo, LinkedinLogo, TwitterLogo } from "@phosphor-icons/react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import Image from "next/image"

const Footer = () => {
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show button when scrolled down more than 200px
      setShowButton(window.scrollY > 200)
    }

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll)

    // Initial check
    handleScroll()

    // Clean up
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="py-8 px-4 relative overflow-hidden bg-[#121212] text-white dark:bg-[#121212] dark:text-white">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a0a0a]/30 -z-10"></div>

      {/* Back to top button - positioned at bottom right, only shown when scrolled down */}
      {showButton && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <Button
            onClick={scrollToTop}
            variant="outline"
            size="icon"
            className="cursor-pointer rounded-full bg-black/80 border-white/20 hover:bg-white/10 hover:border-[#00DF82] hover:text-[#00DF82] shadow-lg"
          >
            <ArrowUp size={20} weight="bold" />
          </Button>
        </motion.div>
      )}

      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4 md:mb-0"
          >
            <Image src="/images/logo-light.svg" alt="WellScout Logo" width={137} height={27} />
            <p className="text-xs mt-1 text-[#00DF82] ">Your Guide to Informed Food Choices</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex space-x-3"
          >
            <a href="https://x.com/rafaelcflima" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                size="icon"
                className="cursor-pointer rounded-full border-white/20 bg-black hover:bg-black/10 hover:border-[#00DF82] hover:text-[#00DF82] h-8 w-8"
              >
                <TwitterLogo size={20} weight="fill" />
              </Button>
            </a>
            <a href="https://instagram.com/rafael_fagundes" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                size="icon"
                className="cursor-pointer rounded-full border-white/20 bg-black hover:bg-black/10 hover:border-[#00DF82] hover:text-[#00DF82] h-8 w-8"
              >
                <InstagramLogo size={20} weight="fill" />
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/rafaelcfl/" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                size="icon"
                className="cursor-pointer rounded-full border-white/20 bg-black hover:bg-black/10 hover:border-[#00DF82] hover:text-[#00DF82] h-8 w-8"
              >
                <LinkedinLogo size={20} weight="fill" />
              </Button>
            </a>
            <a href="https://github.com/rafaelfagundes" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                size="icon"
                className="cursor-pointer rounded-full border-white/20 bg-black hover:bg-black/10 hover:border-[#00DF82] hover:text-[#00DF82] h-8 w-8"
              >
                <GithubLogo size={20} weight="fill" />
              </Button>
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-x-6 gap-y-1 mb-5 text-xs"
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
          className="text-center text-xs text-white/70"
        >
          <p>© {new Date().getFullYear()} WellScout. All rights reserved.</p>
        </motion.div>

      </div>
    </footer>
  )
}

export default Footer


