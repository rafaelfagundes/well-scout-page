// app/page.tsx
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import TechSpecs from '@/components/TechSpecs';
import Download from '@/components/Download';
import Footer from '@/components/Footer';
import Navbar from '@/components/NavBar';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <TechSpecs />
      <Download />
      <Footer />
    </>
  );
}
