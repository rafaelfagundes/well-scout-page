// components/Features.tsx
"use client"
import { motion } from "motion/react"
import { Barcode, MagnifyingGlass, ListChecks, Heart, Sparkle, Clock, Database } from "@phosphor-icons/react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

const featuresList = [
  {
    icon: <Barcode size={48} weight="duotone" />,
    title: "Scan & Discover",
    description:
      "Instantly get product details by scanning barcodes. Access comprehensive information from the Open Food Facts database.",
  },
  {
    icon: <MagnifyingGlass size={48} weight="duotone" />,
    title: "Intelligent Search",
    description: "Find products by name or category. Quickly locate the information you need.",
  },
  {
    icon: <Sparkle size={48} weight="duotone" />,
    title: "Personalized Advice",
    description: "Receive AI-powered dietary recommendations from Google Gemini, tailored to your scanned products.",
  },
  {
    icon: <ListChecks size={48} weight="duotone" />,
    title: "Nutritional Insights",
    description: "Explore detailed nutritional information, including Nutri-Score, ingredients, and additives.",
  },
  {
    icon: <Heart size={48} weight="duotone" />,
    title: "Favorites & History",
    description: "Save your favorite products and easily track your scan history for personalized recommendations.",
  },
  {
    icon: <Database size={48} weight="duotone" />,
    title: "Updated Database",
    description: "Stay informed with the latest product information and nutritional guidelines as our database continuously expands.",
  },
]

const Features = () => {
  return (
    <section className="py-20 px-4" id="features">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 md:text-5xl gradient-text inline-block">Key Features</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-[#0d7e84] mx-auto mt-4"></div>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {featuresList.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="h-full"
            >
              <Card className="h-full border border-primary/10 bg-gradient-to-b from-white to-primary/5 dark:from-gray-900 dark:to-primary/10 backdrop-blur-sm hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                <CardHeader className="flex flex-row gap-4 items-center">
                  <div className="text-primary">{feature.icon}</div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features


