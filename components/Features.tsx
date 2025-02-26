// components/Features.tsx
"use client"
import React from 'react';
import { motion } from 'motion/react';
import { Barcode, MagnifyingGlass, Brain, ListChecks, Heart } from '@phosphor-icons/react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

const featuresList = [
  {
    icon: <Barcode size={48} />,
    title: 'Scan & Discover',
    description: 'Instantly get product details by scanning barcodes.  Access comprehensive information from the Open Food Facts database.',
  },
  {
    icon: <MagnifyingGlass size={48} />,
    title: 'Intelligent Search',
    description: 'Find products by name or category.  Quickly locate the information you need.',
  },
  {
    icon: <Brain size={48} />,
    title: 'Personalized Advice',
    description: 'Receive AI-powered dietary recommendations from Google Gemini, tailored to your scanned products.',
  },
  {
    icon: <ListChecks size={48} />,
    title: 'Nutritional Insights',
    description: 'Explore detailed nutritional information, including Nutri-Score, ingredients, and additives.',
  },
  {
    icon: <Heart size={48} />,
    title: 'Favorites & History',
    description: 'Save your favorite products and easily track your scan history for personalized recommendations.',
  },
];
const Features = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-12 px-4 bg-gray-50 dark:bg-gray-800" id="features">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 md:text-4xl">Key Features</h2>
        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {featuresList.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card>
                <CardHeader className='flex flex-row gap-4 items-center'>
                  {feature.icon}
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>

                <CardContent>
                  <p>
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
