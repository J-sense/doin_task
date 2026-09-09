"use client";

import React from "react";

interface SupportCard {
  id: string;
  title: string;
  description: string;
}

const supportCards: SupportCard[] = [
  {
    id: "1",
    title: "STRATEGY & PLANNING",
    description: "Build a cleaner, stronger and more sustainable route to growth.",
  },
  {
    id: "2",
    title: "COMMERCIAL GROWTH",
    description: "Build a cleaner, stronger and more sustainable route to growth.",
  },
  {
    id: "3",
    title: "SEO & AI VISIBILITY",
    description: "Build a cleaner, stronger and more sustainable route to growth.",
  },
  {
    id: "4",
    title: "WEBSITE & CONVERSION",
    description: "Build a cleaner, stronger and more sustainable route to growth.",
  },
  {
    id: "5",
    title: "CAMPAIGNS & LEADS",
    description: "Build a cleaner, stronger and more sustainable route to growth.",
  },
];

export function GrowthSupport() {
  return (
    <section id="ecosystem" className="relative w-full bg-white py-20 lg:py-28 px-6 md:px-12 lg:px-20 border-t border-slate-100 overflow-hidden">
      <div className="mx-auto max-w-[1700px] w-full">
        {/* Centered Title & Description */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-[40px] uppercase tracking-tight text-[#03182B] leading-tight">
            CHOOSE WHERE YOU NEED <span className="text-[#00B894]">SUPPORT.</span>
          </h2>
          <p className="mt-4 text-slate-500 text-sm sm:text-base font-normal leading-relaxed max-w-2xl mx-auto">
            Each service area can be engaged individually or as part of the full Growth Engine. All are available at Foundation, Momentum and Transform levels.
          </p>
        </div>

        {/* 5 Cards Grid */}
        <div className="mt-14 max-w-6xl mx-auto space-y-6">
          {/* Top Row: 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {supportCards.slice(0, 3).map((card) => (
              <div
                key={card.id}
                className="bg-[#FAFAFA] border border-slate-200/60 rounded-md p-7 sm:p-8 flex flex-col justify-between shadow-xs hover:border-[#00B894]/40 hover:shadow-sm transition-all"
              >
                <div>
                  <h3 className="font-heading font-extrabold text-sm sm:text-base tracking-wider uppercase text-slate-900 mb-2 font-sans">
                    {card.title}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-[13px] leading-relaxed font-normal">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Row: 2 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {supportCards.slice(3, 5).map((card) => (
              <div
                key={card.id}
                className="bg-[#FAFAFA] border border-slate-200/60 rounded-md p-7 sm:p-8 flex flex-col justify-between shadow-xs hover:border-[#00B894]/40 hover:shadow-sm transition-all"
              >
                <div>
                  <h3 className="font-heading font-extrabold text-sm sm:text-base tracking-wider uppercase text-slate-900 mb-2 font-sans">
                    {card.title}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-[13px] leading-relaxed font-normal">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default GrowthSupport;
