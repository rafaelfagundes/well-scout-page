// components/Hero.tsx
"use client"

import { useEffect, useState } from "react"
import { motion } from "motion/react"
import { Button } from "@/components/ui/button"
import { MoonStar, Sun, Rocket, ArrowRight } from "lucide-react"
import { useTheme } from "next-themes"
import Image from "next/image"
import { CustomButton } from "@/components/ui/custom-button"
import { AvatarCircles } from "./magicui/avatar-circles"

const avatars = [
  {
    imageUrl: "https://i.pravatar.cc/36?img=1",
    profileUrl: "https://github.com/user1",
  },
  {
    imageUrl: "https://i.pravatar.cc/36?img=2",
    profileUrl: "https://github.com/user2",
  },
  {
    imageUrl: "https://i.pravatar.cc/36?img=3",
    profileUrl: "https://github.com/user3",
  },
  {
    imageUrl: "https://i.pravatar.cc/36?img=4",
    profileUrl: "https://github.com/user4",
  },
  {
    imageUrl: "https://i.pravatar.cc/36?img=5",
    profileUrl: "https://github.com/user5",
  },
  {
    imageUrl: "https://i.pravatar.cc/36?img=6",
    profileUrl: "https://github.com/user6",
  },
];

const Hero = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="py-16 px-4 relative overflow-hidden md:py-28">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/20 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-primary/20 blur-3xl"></div>
      </div>

      {/* Theme Toggle */}
      {mounted && (
        <div className="absolute top-4 right-4 z-10">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-full"
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <MoonStar className="h-5 w-5" />}
          </Button>
        </div>
      )}

      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-12">
          {/* Left Content */}
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1
              className="text-5xl font-bold mb-4 md:text-7xl gradient-text"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              SkyLaunch
            </motion.h1>

            <motion.p
              className="text-lg mb-8 md:text-xl md:leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              Elevate your digital experience to new heights. Our platform helps you build, launch, and scale your ideas faster than ever before.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="flex flex-wrap gap-6 mb-8">
              <AvatarCircles avatarUrls={avatars} numPeople={250}></AvatarCircles>
            </motion.div>
            
            <motion.div
              className="flex flex-wrap gap-6 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            >
              <CustomButton
                href="#"
                variant="primary"
                icon={<Rocket size={20} />}
                hoverCardContent={{
                  title: "Launch Your Project",
                  description: "Get started with our powerful platform today."
                }}
              >
                Get Started
              </CustomButton>

              <CustomButton
                href="#"
                variant="outline"
                icon={<ArrowRight size={20} />}
                hoverCardContent={{
                  title: "Learn More",
                  description: "Discover how our platform can help you succeed."
                }}
              >
                Learn More
              </CustomButton>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="relative md:w-1/2"
          >
            <div className="relative">
              <Image
                src="/images/dashboard-mockup.png"
                alt="SkyLaunch Dashboard"
                width={600}
                height={450}
                className="rounded-lg shadow-2xl"
              />
            </div>

            {/* Decorative elements */}
            <motion.div
              className="absolute -top-8 -left-8 w-16 h-16 bg-primary/10 rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.7, 0.9, 0.7],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />

            <motion.div
              className="absolute -bottom-8 -right-8 w-16 h-16 bg-primary/10 rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.7, 0.9, 0.7],
              }}
              transition={{
                duration: 4,
                delay: 1,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero


