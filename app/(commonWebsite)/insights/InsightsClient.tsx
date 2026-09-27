"use client";

import React, { useState } from 'react';
import Link from 'next/link';

import { insights } from './data';

const filters = [
  'ALL',
  'Business Growth',
  'Strategy',
  'Marketing',
  'SEO & AI Visibility',
  'Social Media',
  'Website & Conversion'
];

export default function InsightsClient() {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const filteredInsights = activeFilter === 'ALL'
    ? insights
    : insights.filter(insight => insight.category === activeFilter);

  return (
    <>
      {/* Filter Bar */}
      <section className="border-b border-gray-200 bg-white sticky top-[71px] z-10 ">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-4 overflow-x-auto scrollbar-hide">
          <div className="flex items-center gap-6 md:gap-10 min-w-max">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`text-[11px] font-bold uppercase tracking-widest ${activeFilter === filter
                  ? 'bg-[#0f172a] text-white px-5 py-2.5 rounded-sm'
                  : 'text-gray-400 hover:text-gray-900 transition-colors py-2.5'
                  }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Insights Grid */}
      <section className="py-16 px-6 md:px-12 lg:px-24">
        {filteredInsights.length > 0 ? (
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredInsights.map((insight) => (
              <div key={insight.id} className="bg-white rounded-sm border border-gray-100 p-8 flex flex-col h-full">
                <div className="mb-4">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#00dfb6]">
                    {insight.category} · {insight.readTime}
                  </span>
                </div>

                <h3 className="text-[20px] font-bold text-[#03182B] mb-4 leading-snug">
                  {insight.title}
                </h3>

                <p className="text-[14px] text-gray-500 leading-relaxed mb-8 flex-grow">
                  {insight.excerpt}
                </p>

                <Link
                  href={`/insights/${insight.slug}`}
                  className="inline-flex items-center text-[10px] uppercase font-bold tracking-widest text-[#03182B] hover:text-[#00dfb6] transition-colors mt-auto"
                >
                  READ ARTICLE <span className="ml-1">➔</span>
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <div className="max-w-7xl mx-auto py-16 text-center text-gray-500">
            No articles found for this category.
          </div>
        )}
      </section>
    </>
  );
}
