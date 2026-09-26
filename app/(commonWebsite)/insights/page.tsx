import React from 'react';
import { Metadata } from 'next';
import InsightsClient from './InsightsClient';

export const metadata: Metadata = {
  title: 'Insights | Marketing Agency',
  description: 'Practical thinking on strategy, marketing, digital and leadership.',
};

export default function InsightsPage() {
  return (
    <main className="min-h-screen bg-[#f4f7f6]">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#02182b] to-[#043d52] text-white py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight max-w-2xl uppercase">
            IDEAS FOR WHAT<br />
            COMES <span className="text-[#00dfb6]">NEXT.</span>
          </h1>
          <p className="text-gray-300 max-w-md text-sm md:text-base leading-relaxed md:pb-2">
            Practical thinking on strategy, marketing, digital and leadership — for leaders who want to grow with clarity.
          </p>
        </div>
      </section>

      <InsightsClient />
    </main>
  );
}
