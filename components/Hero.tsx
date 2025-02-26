// components/Hero.tsx
"use client";
import React from 'react';
import { motion } from 'motion/react';
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

const Hero = () => {
  return (
    <section className="py-12 px-4 text-center md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="container mx-auto"
      >
        <h1 className="text-4xl font-bold mb-4 md:text-6xl">WellScout</h1>
        <p className="text-lg mb-8 md:text-xl md:leading-relaxed">
          Your Guide to Informed Food Choices. Scan, search, and understand your products.
        </p>

        <div className="flex justify-center space-x-4 mb-8">
          <HoverCard>
            <HoverCardTrigger asChild>
              <Button asChild>
                <Link href={"#"} >
                  App Store (iOS)
                </Link>
              </Button>
            </HoverCardTrigger>
            <HoverCardContent>
              Coming Soon!
            </HoverCardContent>
          </HoverCard>

          <HoverCard>
            <HoverCardTrigger asChild>
              <Button asChild variant="outline">
                <Link href={"#"} >
                  Google Play (Android)
                </Link>
              </Button>
            </HoverCardTrigger>
            <HoverCardContent>
              Coming Soon!
            </HoverCardContent>
          </HoverCard>

        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-md"
        >
          <img
            src="/wellscout-mockup.png"  //<!-- Placeholder: Main screen mockup (e.g., scan screen) -->
            alt="WellScout App Mockup"
            className="rounded-3xl shadow-2xl"
          />
          {/* Add a mobile phone frame */}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
