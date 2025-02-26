// components/Hero.tsx
"use client"

import { useEffect, useState } from "react"
import { motion } from "motion/react"
import { Button } from "@/components/ui/button"
import { MoonStar, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import Image from "next/image"
import { AppleLogo, GooglePlayLogo } from "@phosphor-icons/react"
import { CustomButton } from "@/components/ui/custom-button"
import { AvatarCircles } from "./magicui/avatar-circles"


const avatars = [
  {
    imageUrl: "https://i.pravatar.cc/36?img=26",
    profileUrl: "https://github.com/rafaelfagundes",
  },
  {
    imageUrl: "https://i.pravatar.cc/36?img=68",
    profileUrl: "https://github.com/rafaelfagundes",
  },
  {
    imageUrl: "https://i.pravatar.cc/36?img=43",
    profileUrl: "https://github.com/rafaelfagundes",
  },
  {
    imageUrl: "https://i.pravatar.cc/36?img=29",
    profileUrl: "https://github.com/rafaelfagundes",
  },
  {
    imageUrl: "https://i.pravatar.cc/36?img=13",
    profileUrl: "https://github.com/rafaelfagundes",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/29810355",
    profileUrl: "https://github.com/rafaelfagundes",
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

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="container mx-auto"
      >
        <motion.h1
          className="text-5xl font-bold mb-4 md:text-7xl gradient-text text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          WellScout
        </motion.h1>

        <motion.p
          className="text-lg mb-8 md:text-xl md:leading-relaxed max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          Your Guide to Informed Food Choices. Scan, search, and understand your products.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-wrap justify-center gap-6 mb-12">
          <AvatarCircles avatarUrls={avatars} numPeople={99}></AvatarCircles>
        </motion.div>
        <motion.div
          className="flex flex-wrap justify-center gap-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
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
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
          className="relative mx-auto w-72 max-w-md"
        >
          <div className="relative">
            <div className=""></div>
            <Image
              src="/images/app-double.png"
              alt="WellScout App Mockup"
              width={1179}
              height={2556}
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
      </motion.div>
    </section>
  )
}

export default Hero


