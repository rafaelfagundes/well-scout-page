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
    <footer className="py-12 px-4 relative overflow-hidden bg-foreground text-background dark:bg-foreground dark:text-background">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/20 -z-10"></div>

      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6 md:mb-0"
          >
            <h3 className="text-2xl font-bold gradient-text mb-2">WellScout</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Your Guide to Informed Food Choices</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex space-x-4"
          >
            <Button variant="outline" size="icon" className="rounded-full border-background/20 hover:bg-background/10 hover:border-primary-foreground hover:text-primary-foreground">
              <TwitterLogo size={20} weight="fill" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full border-primary/20 hover:bg-primary/10">
              <InstagramLogo size={20} weight="fill" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full border-primary/20 hover:bg-primary/10">
              <LinkedinLogo size={20} weight="fill" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full border-primary/20 hover:bg-primary/10">
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
          <a href="#" className="text-background/80 hover:text-primary-foreground transition-colors dark:text-background/80">
            Home
          </a>
          <a href="#features" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
            How It Works
          </a>
          <a href="#tech-specs" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
            Tech Specs
          </a>
          <a href="#download" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
            Download
          </a>
          <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
            Terms of Service
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-sm text-background/80 dark:text-background/80"
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
            className="rounded-full border-background hover:bg-background/10 hover:border-primary-foreground hover:text-primary-foreground"
          >
            <ArrowUp size={20} weight="bold" />
          </Button>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer


