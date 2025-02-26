// components/HowItWorks.tsx
import React from 'react';
import { Barcode, MagnifyingGlass, ListChecks, Brain } from '@phosphor-icons/react/dist/ssr';

interface StepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  isLast?: boolean; // Add isLast prop
}

const Step: React.FC<StepProps> = ({ icon, title, description, isLast }) => (
  <div className="relative flex items-start pl-12">
    <div className="absolute left-0 top-0 flex flex-col items-center">
      <div className="flex items-center justify-center w-8 h-8 bg-blue-500 text-white rounded-full">
        {icon}
      </div>
      {!isLast && (
        <div className="w-0.5 h-full bg-gray-300 dark:bg-gray-600" />
      )}
    </div>
    <div className="ml-4">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  </div>
);


const HowItWorks = () => {
  return (
    <section className="py-12 px-4 text-center" id="how-it-works">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 md:text-4xl">How It Works</h2>
        <div className="space-y-8">
          <Step icon={<Barcode size={24} />} title="Scan Products" description="Use your phone's camera to scan the barcode of any food product." />
          <Step icon={<MagnifyingGlass size={24} />} title="Search Products" description="Find products by their names or categories." />
          <Step icon={<ListChecks size={24} />} title="View Details" description="Check ingredients, nutritional info, and ratings." />
          <Step icon={<Brain size={24} />} title="Get Advice" description="Receive personalized dietary recommendations based on your scanned products." isLast={true} />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
