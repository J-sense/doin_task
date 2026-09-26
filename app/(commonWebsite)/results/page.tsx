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
      <section className="bg-gradient-to-r from-[#02182b] to-[#043d52] text-white py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight max-w-2xl">
            WHAT CHANGES<br />
            WHEN GROWTH<br />
            <span className="text-[#00e599]">CONNECTS.</span>
          </h1>
          <p className="text-gray-300 max-w-lg text-sm md:text-base leading-relaxed md:pb-2">
            Real businesses. Real commercial challenges. Real outcomes.
          </p>
        </div>
      </section>

      <ResultsClient />
    </main>
  );
}
