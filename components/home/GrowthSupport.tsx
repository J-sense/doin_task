"use client";

import React from "react";
import Link from "next/link";

interface SupportCard {
  id: string;
  slug: string;
  title: string;
  description: string;
}

const supportCards: SupportCard[] = [
  {
    id: "business-growth",
    slug: "business-growth",
    title: "BUSINESS GROWTH",
    description: "Sales, commercial strategy, pricing, profitability and new business.",
  },
  {
    id: "strategy-planning",
    slug: "strategy-planning",
    title: "STRATEGY",
    description: "Business strategy alignment, OKRs, market positioning and priority planning.",
  },
  {
    id: "marketing",
    slug: "marketing",
    title: "MARKETING",
    description: "Lead generation, paid media, CRM setup and campaign performance.",
  },
  {
    id: "seo-ai-visibility",
    slug: "seo-ai-visibility",
    title: "SEO & AI VISIBILITY",
    description: "Technical SEO audits, AI search engine optimization, keywords and GEO.",
  },
  {
    id: "social-media",
    slug: "social-media",
    title: "SOCIAL MEDIA",
    description: "Social strategy, content creation, short-form video and community engagement.",
  },
  {
    id: "website-conversion",
    slug: "website-conversion",
    title: "WEBSITE & CONVERSION",
    description: "Website design, landing page funnels, conversion tracking and UX optimization.",
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
            Each service area can be engaged individually or as part of the full Growth Engine.
          </p>
        </div>

        {/* 6 Package Cards Grid */}
        <div className="mt-14 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {supportCards.map((card) => (
              <Link
                key={card.id}
                href={`/packages/${card.slug}`}
                className="bg-[#FAFAFA] border border-slate-200/60 rounded-md p-7 sm:p-8 flex flex-col justify-between shadow-xs hover:border-[#00B894] hover:shadow-md transition-all group cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-sans font-extrabold text-sm sm:text-base tracking-wider uppercase text-slate-900 group-hover:text-[#00B894] transition-colors">
                      {card.title}
                    </h3>
                    <span className="text-slate-400 group-hover:text-[#00B894] transition-colors text-xs font-bold">
                      ➔
                    </span>
                  </div>
                  <p className="text-slate-500 text-xs sm:text-[13px] leading-relaxed font-normal">
                    {card.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default GrowthSupport;
