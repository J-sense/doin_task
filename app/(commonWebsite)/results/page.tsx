import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Results | Marketing Agency',
  description: 'Real businesses. Real commercial challenges. Real outcomes.',
};

import ResultsClient from './ResultsClient';

export default function ResultsPage() {
  return (
    <main className="min-h-screen bg-[#f4f7f6]">
      {/* Hero Section */}
      <section className="relative w-full bg-[#03182B] text-white py-16 sm:py-20 lg:py-24 px-6 md:px-12 lg:px-20 overflow-hidden">
        {/* Central Radial Glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 65% 90% at 52% 50%, #01526D 0%, rgba(1, 82, 109, 0.3) 60%, rgba(3, 24, 43, 0) 100%)",
          }}
        />

        {/* Right Slanted Polygon Overlay */}
        <div
          className="absolute top-0 right-0 bottom-0 w-[24%] pointer-events-none hidden md:block"
          style={{
            background: "linear-gradient(160deg, rgba(1, 82, 109, 0.5) 0%, rgba(1, 82, 109, 0.15) 100%)",
            clipPath: "polygon(35% 0, 100% 0, 100% 100%, 0 100%)",
          }}
        />

        <div className="relative z-10 max-w-[1400px] mx-auto flex flex-col md:flex-row md:items-center justify-between gap-8 md:gap-12">
          <h1 className="font-sans font-black text-3xl sm:text-4xl md:text-5xl lg:text-[54px] tracking-tight leading-[1.08] uppercase">
            WHAT CHANGES<br />
            WHEN GROWTH<br />
            <span className="text-[#00B875]">CONNECTS.</span>
          </h1>
          <p className="text-[#A1B5CC] max-w-md text-xs sm:text-sm md:text-[15px] font-normal leading-relaxed">
            Real businesses. Real commercial challenges. Real outcomes.<br className="hidden sm:block" />
            Names and specific data are indicative — results vary by business, market and engagement scope.
          </p>
        </div>
      </section>

      <ResultsClient />
    </main>
  );
}

