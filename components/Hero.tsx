// components/Hero.tsx
"use client"

import { motion } from "motion/react"
import { AppleLogo, GooglePlayLogo } from "@phosphor-icons/react"
import Image from "next/image"
import { CustomButton } from "@/components/ui/custom-button"
import { AvatarCircles } from "./magicui/avatar-circles"
import { Ripple } from "./magicui/ripple"
import YoutubeVideo from "./YoutubeVideo"

const avatars = [
  {
    imageUrl: "https://i.pravatar.cc/36?img=26",
    profileUrl: "https://github.com/rafaelfagundes",
  },
  {
    imageUrl: "https://i.pravatar.cc/36?img=38",
    profileUrl: "https://github.com/rafaelfagundes",
  },
  {
    imageUrl: "https://i.pravatar.cc/36?img=68",
    profileUrl: "https://github.com/rafaelfagundes",
  },
  {
    imageUrl: "https://i.pravatar.cc/36?img=41",
    profileUrl: "https://github.com/rafaelfagundes",
  },
  {
    imageUrl: "https://i.pravatar.cc/36?img=56",
    profileUrl: "https://github.com/rafaelfagundes",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/29810355",
    profileUrl: "https://github.com/rafaelfagundes",
  },
];

const Hero = () => {
  return (
    <section className="relative overflow-hidden mt-10">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/20 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-primary/20 blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-12">
          {/* Left Content */}
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: 0 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="mb-6"
            >
              <Image src="/images/icon.png" alt="WellScout Logo" width={72} height={72} className="rounded-2xl" />
            </motion.div>
            <motion.h1
              className="text-5xl font-bold mb-4 md:text-7xl gradient-text"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              WellScout
            </motion.h1>

            <motion.p
              className="text-lg mb-8 md:text-xl md:leading-relaxed max-w-2xl"
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
              className="flex flex-wrap gap-6 mb-8">
              <AvatarCircles avatarUrls={avatars} numPeople={99}></AvatarCircles>
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
                icon={<AppleLogo size={24} weight="duotone" />}
                hoverCardContent={{
                  title: "Coming Soon!",
                  description: "Be the first to know when we launch on iOS."
                }}
              >
                App Store
              </CustomButton>

              <CustomButton
                href="#"
                variant="outline"
                icon={<GooglePlayLogo size={24} weight="duotone" />}
                hoverCardContent={{
                  title: "Coming Soon!",
                  description: "Be the first to know when we launch on Android."
                }}
              >
                Google Play
              </CustomButton>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="relative md:w-1/2 hidden sm:block"
          >
            <Ripple numCircles={4}></Ripple>
            <div className="relative">
              <Image
                src="/images/app-double.png"
                alt="SkyLaunch Dashboard"
                width={600}
                height={450}
                className="rounded-lg"
              />
            </div>
          </motion.div>
        </div>
      </div>
      <YoutubeVideo></YoutubeVideo>
    </section>
  )
}

export default Hero


