// components/Download.tsx
"use client"
import React from 'react';
import { Button } from "@/components/ui/button"
import Link from 'next/link';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
const Download = () => {
  return (
    <section className="py-12 px-4 text-center" id="download">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 md:text-4xl">Get WellScout Now</h2>

        <div className="flex justify-center space-x-4 mb-8">
          <HoverCard>
            <HoverCardTrigger asChild>
              <Button asChild className="animate-bounce-hover" variant="default" size="lg">
                <Link href="#">App Store (iOS)</Link>
              </Button>
            </HoverCardTrigger>
            <HoverCardContent>
              Coming Soon!
            </HoverCardContent>
          </HoverCard>

          <HoverCard>
            <HoverCardTrigger asChild>
              <Button asChild variant="outline" size="lg">
                <Link href="#">Google Play (Android)</Link>
              </Button>
            </HoverCardTrigger>
            <HoverCardContent>
              Coming Soon!
            </HoverCardContent>
          </HoverCard>

        </div>
        <p className='text-sm'>Contact Information</p>
        <p className='text-sm'>(Coming Soon)</p>

      </div>
    </section>
  );
};

export default Download;
