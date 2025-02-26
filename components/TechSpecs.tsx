// components/TechSpecs.tsx
import React from 'react';

const TechSpecs = () => {
  return (
    <section className="py-12 px-4 bg-gray-100 dark:bg-gray-800" id="tech-specs">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 md:text-4xl">Technical Specifications</h2>

        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-xl font-semibold mb-4">Supported Platforms</h3>
            <ul className="list-disc list-inside">
              <li>iOS</li>
              <li>Android</li>
              <li>Web (Limited Functionality - Camera access may vary)</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Key Technologies</h3>
            <ul className="list-disc list-inside">
              <li>React Native</li>
              <li>Expo</li>
              <li>Redux Toolkit (State Management)</li>
              <li>Open Food Facts API (Product Data)</li>
              <li>Google Gemini API (AI Advisor)</li>
              <li>react-native-vision-camera (Barcode/QR Scanning)</li>
              <li>expo-router (Navigation)</li>
              <li>react-native-svg (SVG Rendering)</li>
              <li>react-native-reanimated (Animations)</li>
              <li>AsyncStorage (Data Persistence)</li>

            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechSpecs;
