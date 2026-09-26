"use client";

import React, { useState } from 'react';

const caseStudies = [
  {
    id: 1,
    isExample: true,
    tags: ['Business Growth', 'Strategy', 'Marketing'],
    title: 'Regional Services Business',
    subtitle: 'Professional Services',
    challenge: 'Declining new business pipeline and unclear differentiation in a competitive regional market.',
    plan: 'Prioritize commercial strategy and marketing fundamentals before spending on acquisition.',
    changed: 'Repositioned commercial strategy, rebuilt lead generation and aligned the sales and marketing function around a clear growth plan.',
    result: 'Consistent pipeline growth within 90 days of activation. New business enquiries increased by a measurable margin within the first quarter.'
  },
  {
    id: 2,
    isExample: true,
    tags: ['Marketing', 'Website & Conversion', 'SEO & AI Visibility'],
    title: 'Growth-Stage B2B Brand',
    subtitle: 'Technology',
    challenge: 'Isolated marketing activity generating traffic but failing to convert into qualified opportunities.',
    plan: 'Connect traffic channels to a robust website conversion journey.',
    changed: 'Connected content, SEO and demand generation into one coordinated programme with a defined lead journey and conversion architecture.',
    result: 'Improved conversion rate and measurable demand growth within two quarters of programme activation.'
  },
  {
    id: 3,
    isExample: true,
    tags: ['Marketing', 'SEO & AI Visibility', 'Website & Conversion'],
    title: 'Established Trade Business',
    subtitle: 'Construction & Trade',
    challenge: 'Over-reliant on word-of-mouth with no structured approach to digital or marketing activity.',
    plan: 'Establish local visibility and build a foundational digital footprint.',
    changed: 'Launched digital presence, activated SEO and local search, built a simple but effective sales pipeline structure.',
    result: 'New inbound enquiries within 6 weeks of launch. Pipeline visible for the first time in the business history.'
  },
  {
    id: 4,
    isExample: false,
    tags: ['Social Media', 'Marketing'],
    title: 'Athi Law LLP',
    subtitle: 'Legal Services',
    challenge: 'Limited LinkedIn visibility with no structured content strategy or consistent organic presence.',
    plan: 'Drive brand authority and audience engagement through a unified social content engine.',
    changed: 'Developed LinkedIn growth strategy with monthly original content programme and structured audience engagement framework.',
    result: '+1,104.1% LinkedIn impressions through organic strategy alone. Zero paid promotion.'
  },
  {
    id: 5,
    isExample: true,
    tags: ['Strategy', 'SEO & AI Visibility', 'Website & Conversion'],
    title: 'New Professional Services Firm',
    subtitle: 'Legal Services',
    challenge: 'New firm entering a competitive market with no existing digital presence or brand recognition.',
    plan: 'Build a strategic digital ecosystem from scratch to compete immediately.',
    changed: 'Built complete digital ecosystem from brief to launch — strategy, web platform, SEO foundation, content and lead capture.',
    result: 'Launched in 12 weeks. Organic enquiries within 8 weeks of go-live. First client acquired through digital channel within 90 days.'
  },
  {
    id: 6,
    isExample: true,
    tags: ['SEO & AI Visibility', 'Website & Conversion', 'Marketing'],
    title: 'E-commerce Retailer',
    subtitle: 'Retail',
    challenge: 'Over-reliant on paid advertising with no organic visibility or content authority.',
    plan: 'Reduce ad dependence by building long-term search dominance.',
    changed: 'Activated comprehensive SEO and content programme, built topical authority and restructured digital presence for organic growth.',
    result: 'Organic traffic doubled within six months. Paid advertising spend reduced while total revenue grew.'
  }
];

const filters = [
  'ALL',
  'Business Growth',
  'Strategy',
  'Marketing',
  'SEO & AI Visibility',
  'Social Media',
  'Website & Conversion'
];

export default function ResultsClient() {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const filteredStudies = activeFilter === 'ALL' 
    ? caseStudies 
    : caseStudies.filter(study => study.tags.includes(activeFilter));

  return (
    <>
      {/* Filter Bar */}
      <section className="border-b border-gray-200 bg-white sticky top-[71px] z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-4 overflow-x-auto scrollbar-hide">
          <div className="flex items-center gap-6 md:gap-10 min-w-max">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`text-[11px] font-bold uppercase tracking-widest ${
                  activeFilter === filter
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

      {/* Results Grid */}
      <section className="py-16 px-6 md:px-12 lg:px-24">
        {filteredStudies.length > 0 ? (
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredStudies.map((study) => (
              <div key={study.id} className="bg-white rounded-sm shadow-sm border border-gray-100 overflow-hidden flex flex-col h-full hover:shadow-md transition-shadow">
                {/* Card Header (Dark) */}
                <div className="bg-[#0b1325] p-8 text-white">
                  <div className="flex flex-wrap gap-2 mb-8">
                    {study.tags.map(tag => (
                      <span key={tag} className="text-[9px] uppercase font-semibold tracking-wider text-[#00e599] border border-[#00e599]/30 rounded-sm px-2.5 py-1">
                        {tag}
                      </span>
                    ))}
                    {study.isExample && (
                      <span className="text-[9px] uppercase font-semibold tracking-wider text-amber-400 border border-amber-400/30 rounded-sm px-2.5 py-1 bg-amber-400/10">
                        EXAMPLE
                      </span>
                    )}
                  </div>
                  <h3 className="text-[22px] font-bold mb-1.5 leading-snug">{study.title}</h3>
                  <p className="text-gray-400 text-xs tracking-wide">{study.subtitle}</p>
                </div>

                {/* Card Body (White) */}
                <div className="p-8 flex-grow flex flex-col">
                  <div className="mb-6">
                    <h4 className="text-[10px] uppercase font-bold tracking-widest text-gray-400 mb-2">The Problem</h4>
                    <p className="text-[13px] text-gray-600 leading-relaxed">{study.challenge}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-[10px] uppercase font-bold tracking-widest text-[#00e599] mb-2">Growth Canvas Plan</h4>
                    <p className="text-[13px] text-gray-600 leading-relaxed font-semibold">{study.plan}</p>
                  </div>
                  
                  <div className="mb-8">
                    <h4 className="text-[10px] uppercase font-bold tracking-widest text-gray-400 mb-2">What Axudar Did</h4>
                    <p className="text-[13px] text-gray-600 leading-relaxed">{study.changed}</p>
                  </div>

                  <div className="mt-auto pt-6 border-t border-gray-100/60">
                    <h4 className="text-[10px] uppercase font-bold tracking-widest text-[#00e599] mb-3">Result</h4>
                    <p className="text-[13px] font-bold text-gray-900 leading-relaxed">{study.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="max-w-7xl mx-auto py-16 text-center text-gray-500">
            No case studies found for this category.
          </div>
        )}
      </section>
    </>
  );
}
