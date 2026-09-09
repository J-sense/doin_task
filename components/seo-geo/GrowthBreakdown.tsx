"use client";

import React from "react";
import { growthBreakdownCardsData } from "./data";

export function GrowthBreakdown() {
  return (
    <section className="relative w-full bg-[#F8FAFC] py-20 md:py-28 px-6 md:px-12 lg:px-20 text-slate-900">
      <div className="mx-auto max-w-[1700px] w-full">
        {/* Top Header Row */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-16">
          <div className="max-w-2xl">
            {/* Tag */}
            <span className="text-[#00B894] text-xs sm:text-sm font-bold tracking-wider uppercase block mb-4 font-sans">
              Start with the difference
            </span>
            {/* Main Heading */}
            <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-[42px] leading-[1.1] uppercase text-[#03182B] tracking-tight">
              <span className="text-[#009966]">GROWTH</span> BREAKS DOWN WHEN EVERYTHING WORKS SEPARATELY.
            </h2>
          </div>

          {/* Right Subtitle */}
          <p className="text-[#737373] text-sm sm:text-base font-normal leading-relaxed max-w-md lg:mb-1">
            Strategy without execution. Marketing without alignment. Digital without direction. Leadership without a shared growth agenda.
          </p>
        </div>

        {/* 3 Comparison Cards (Mapped using growthBreakdownCardsData) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {growthBreakdownCardsData.map((card) => (
            <div
              key={card.id}
              className={`relative overflow-hidden ${card.cardBg} border-t-4 ${card.borderTopColor} ${card.borderClass} rounded-sm p-7 sm:p-9 flex flex-col justify-between ${card.shadowClass}`}
            >
              {/* Left 45-degree angled background accent */}
              <div
                className={`absolute top-0 left-0 h-full w-full ${card.accentBg} pointer-events-none z-0`}
                style={{
                  clipPath: card.clipPath,
                }}
              />

              <div className="relative z-10 flex flex-col justify-between h-full">
                <div>
                  <span className={`${card.tagColor} text-[11px] font-bold tracking-widest uppercase block mb-3 font-sans`}>
                    {card.tag}
                  </span>
                  <h3 className={`font-heading font-black ${card.titleSize} ${card.titleColor} tracking-tight mb-2 uppercase ${card.isTitleBreak ? "leading-[1.02]" : ""}`}>
                    {card.isTitleBreak ? (
                      <>
                        {card.title}
                        <br />
                        TOGETHER
                      </>
                    ) : (
                      card.title
                    )}
                  </h3>
                  <p className="text-[#09799e] text-xs font-bold tracking-wider uppercase mb-5 font-sans">
                    {card.tagline}
                  </p>
                  <p className={`${card.descriptionColor} text-xs sm:text-sm leading-relaxed mb-8`}>
                    {card.description}
                  </p>
                </div>

                <div>
                  <hr className={`${card.dividerBorder} mb-6`} />
                  <ul className="flex flex-col gap-3">
                    {card.bullets.map((bullet, idx) => (
                      <li
                        key={idx}
                        className={`flex items-center gap-2.5 text-xs sm:text-[13px] font-bold ${card.bulletTextColor}`}
                      >
                        <span className="size-1.5 rounded-full bg-[#0DAE87] shrink-0" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Promise / Notice */}
        <div className="mt-12 flex items-start gap-3 text-xs sm:text-[13px] text-slate-600 leading-relaxed max-w-4xl">
          <span className="size-5 rounded-full bg-[#0DAE87] text-[#02111c] font-black text-xs flex items-center justify-center shrink-0 mt-0.5 select-none">
            !
          </span>
          <p>
            <strong className="font-bold text-slate-900">A clear promise:</strong>{" "}
            SEO and GEO improve your opportunity to be discovered, but no credible provider can guarantee a particular Google ranking or AI citation. We agree realistic measures, report transparently and keep improving the evidence.
          </p>
        </div>
      </div>
    </section>
  );
}
