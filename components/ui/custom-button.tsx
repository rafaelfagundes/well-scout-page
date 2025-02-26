"use client"

import { motion } from "motion/react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { ReactNode } from "react"

interface CustomButtonProps {
  href: string
  variant?: "primary" | "outline"
  icon?: ReactNode
  children: ReactNode
  hoverCardContent?: {
    title: string
    description: string
  }
}

export const CustomButton = ({
  href,
  variant = "primary",
  icon,
  children,
  hoverCardContent,
}: CustomButtonProps) => {
  const buttonStyles = {
    primary:
      "bg-gradient-to-r from-primary to-[#0d7e84] hover:from-[#0d7e84] hover:to-primary transition-all duration-300 shadow-lg hover:shadow-primary/20 h-14 px-8",
    outline: "border-primary hover:bg-primary/10 transition-all duration-300 h-14 px-8",
  }

  const buttonVariant = variant === "primary" ? "default" : "outline"

  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
          <Button asChild variant={buttonVariant} className={buttonStyles[variant]}>
            <Link href={href}>
              {icon && <span className="mr-2">{icon}</span>}
              {children}
            </Link>
          </Button>
        </motion.div>
      </HoverCardTrigger>
      {hoverCardContent && (
        <HoverCardContent className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border border-primary/20">
          <p className="font-medium text-primary">{hoverCardContent.title}</p>
          <p className="text-sm mt-1">{hoverCardContent.description}</p>
        </HoverCardContent>
      )}
    </HoverCard>
  )
}
