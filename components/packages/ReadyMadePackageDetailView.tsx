"use client";

import React from "react";
import Link from "next/link";
import { PackageDetailData } from "./types";

interface ReadyMadePackageDetailViewProps {
  data: PackageDetailData;
}

export function ReadyMadePackageDetailView({
  data,
}: ReadyMadePackageDetailViewProps) {
  const price = data.price || "£649";
  const vatText = data.vatText || "+ VAT / month";

  const contactUrl = `/contact?title=${encodeURIComponent(
    data.title
  )}&price=${encodeURIComponent(price + " " + vatText)}`;

  const questionUrl = `/contact?title=${encodeURIComponent(
    data.title
  )}&type=question`;

  // Fallbacks if package uses legacy structure
  const intro = data.introParagraph || data.description;
  const includedItems =
    data.whatIsIncluded && data.whatIsIncluded.length > 0
      ? data.whatIsIncluded
      : data.whatWeDeliver?.map((deliverable) => ({
          title: deliverable,
          description:
            "Delivered with ongoing measurement and alignment to your business growth goals.",
        })) || [];

  const responsibilities =
    data.yourResponsibilities && data.yourResponsibilities.length > 0
      ? data.yourResponsibilities
      : [
          "Supply brand assets: logo, colours, photography, product or team images",
          "Approve monthly deliverables within agreed timescales",
          "Share priority business updates, campaigns or news monthly",
        ];

  const notIncludedItems =
    data.notIncluded && data.notIncluded.length > 0
      ? data.notIncluded
      : [
          "Paid advertising budget or direct ad spend (agreed separately)",
          "Out-of-scope custom software or web application development",
          "Third-party media or production fees",
        ];

  return (
    <div className="w-full bg-white text-neutral-900 min-h-screen flex flex-col justify-between">
      {/* 1. HERO HEADER SECTION */}
      <section className="relative overflow-hidden bg-[#03182B] text-white pt-16 pb-20 px-6 sm:px-12 lg:px-20 border-b border-neutral-800/40">
        {/* Subtle Radial Teal Backdrop Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(0,223,182,0.14),transparent_70%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <h1 className="font-sans font-black text-3xl sm:text-5xl lg:text-[54px] text-white tracking-tight leading-[1.08] mb-4">
            {data.title}
          </h1>

          <p className="text-neutral-300 font-sans font-light text-base sm:text-xl leading-relaxed max-w-3xl mb-8">
            {data.subtitle}
          </p>

          <div className="flex items-baseline gap-3">
            <span className="text-[#00dfb6] font-sans font-black text-4xl sm:text-5xl tracking-tight">
              {price}
            </span>
            <span className="text-[#00dfb6]/90 font-mono text-sm sm:text-base font-medium">
              {vatText}
            </span>
          </div>
        </div>
      </section>

      {/* 2. MAIN CONTENT & SIDEBAR */}
      <main className="w-full bg-white py-16 px-6 sm:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* LEFT COLUMN */}
          <div className="lg:col-span-7 space-y-12">
            {/* Intro paragraph */}
            {intro && (
              <p className="text-neutral-600 font-sans text-sm sm:text-base font-light leading-relaxed">
                {intro}
              </p>
            )}

            {/* WHAT IS INCLUDED */}
            {includedItems.length > 0 && (
              <div className="pt-2">
                <h2 className="font-sans font-black text-2xl sm:text-[28px] text-[#03182B] uppercase tracking-tight mb-8">
                  WHAT IS INCLUDED
                </h2>

                <div className="space-y-6">
                  {includedItems.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-4 pb-6 border-b border-neutral-100 last:border-0 last:pb-0"
                    >
                      <div className="w-6 h-6 rounded-full bg-[#00dfb6] text-[#03182B] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                        ✓
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-sans font-bold text-sm sm:text-base text-[#03182B]">
                          {item.title}
                        </h3>
                        <p className="font-sans text-xs sm:text-sm text-neutral-500 font-light leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* YOUR RESPONSIBILITIES */}
            {responsibilities.length > 0 && (
              <div className="pt-4">
                <h2 className="font-sans font-black text-2xl sm:text-[28px] text-[#03182B] uppercase tracking-tight mb-6">
                  YOUR RESPONSIBILITIES
                </h2>

                <ul className="space-y-3.5">
                  {responsibilities.map((resp, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-neutral-700 text-xs sm:text-sm font-light"
                    >
                      <span className="text-neutral-400 font-bold select-none">
                        •
                      </span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* NOT INCLUDED */}
            {notIncludedItems.length > 0 && (
              <div className="pt-4">
                <h2 className="font-sans font-black text-2xl sm:text-[28px] text-[#03182B] uppercase tracking-tight mb-6">
                  NOT INCLUDED
                </h2>

                <ul className="space-y-3.5">
                  {notIncludedItems.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-neutral-700 text-xs sm:text-sm font-light"
                    >
                      <span className="text-neutral-400 font-bold select-none">
                        •
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* RIGHT COLUMN (STICKY SUMMARY CARD) */}
          <div className="lg:col-span-5">
            <div className="sticky top-28 bg-[#F4F7F6] rounded-xl p-8 border border-neutral-200/50 shadow-xs flex flex-col justify-between">
              <div>
                <span className="font-mono text-[11px] font-extrabold uppercase tracking-widest text-[#00dfb6] mb-3 block">
                  {data.tag || data.title}
                </span>

                <div className="flex items-baseline gap-2 mb-1">
                  <span className="font-sans font-black text-3xl sm:text-4xl text-[#03182B] uppercase tracking-tight">
                    {price}
                  </span>
                  <span className="font-mono text-xs text-neutral-500 font-light">
                    {vatText}
                  </span>
                </div>

                <span className="text-xs font-mono text-neutral-500 block mb-8">
                  {data.minimumTerm || "12 months minimum"}
                </span>

                <div className="h-[1px] w-full bg-neutral-200/70 mb-8" />

                <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-2 block">
                  NEED BROADER SUPPORT?
                </span>

                <p className="text-neutral-600 text-xs font-light leading-relaxed mb-8">
                  This package focuses on one area. For connected challenges
                  across multiple areas, a Growth Canvas is a better fit.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <Link
                  href={contactUrl}
                  className="w-full bg-[#00dfb6] hover:bg-[#18d1ad] text-[#03182B] font-mono text-xs font-bold uppercase tracking-widest py-4 rounded-[4px] transition-colors duration-200 text-center block shadow-xs"
                >
                  Request This Package →
                </Link>

                <Link
                  href={questionUrl}
                  className="w-full text-[#03182B] hover:text-emerald-700 font-mono text-xs font-bold tracking-wide py-2 text-center block transition-colors duration-200"
                >
                  Ask a question first →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* 3. BOTTOM NAVY CTA BANNER */}
      <section className="relative overflow-hidden bg-[#03182B] text-white py-20 px-6 sm:px-12 lg:px-20 text-center">
        {/* Subtle Watermark Overlay */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
          <span className="font-sans font-black text-[120px] sm:text-[200px] text-white tracking-tighter uppercase select-none">
            Axudar
          </span>
        </div>

        <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
          <h2 className="font-sans font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-4">
            Practical support.
            <br />
            Built around your business.
          </h2>

          <p className="text-neutral-300 font-sans font-light text-sm sm:text-base leading-relaxed max-w-2xl mb-8">
            Book a free 30-minute consultation and we will show you where{" "}
            <span className="text-[#00dfb6] font-medium">{data.title}</span> can
            make the biggest commercial difference first.
          </p>

          <Link
            href="/contact"
            className="bg-[#00dfb6] hover:bg-[#18d1ad] text-[#03182B] font-mono text-xs font-bold uppercase tracking-widest px-8 py-4 rounded-[4px] transition-colors duration-200 shadow-md inline-block"
          >
            Book Free Consultation →
          </Link>
        </div>
      </section>
    </div>
  );
}

export default ReadyMadePackageDetailView;
