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
      <section className="relative w-full bg-[#00233F] pt-24 pb-20 md:pt-28 md:pb-24 px-6 md:px-12 lg:px-20 overflow-hidden flex items-center min-h-[480px]">
        {/* Background glow layers */}
        {/* Center blur gradient glow */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[279px] bg-[#09799e] rounded-[58px] blur-[81.30px] pointer-events-none" />

        {/* Right diagonal green-teal accent strip */}
        <div className="absolute top-0 right-0 h-full w-[350px] ml-24 bg-gradient-to-br from-[#0DAE8759] to-transparent transform skew-x-[-16deg] origin-right-auto pointer-events-none" />

        <div className="mx-auto max-w-[1400px] w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Headings and Price */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <h1 className="font-sans font-black text-[28px] sm:text-[44px] lg:text-[50px] leading-tight text-white tracking-tight max-w-full">
                {data.title}
              </h1>

              <p className="mt-4 text-slate-300 text-base sm:text-lg font-light leading-relaxed max-w-xl">
                {data.subtitle}
              </p>

              <div className="flex items-baseline gap-3 mt-6">
                <span className="text-[#00dfb6] font-sans font-black text-4xl sm:text-5xl tracking-tight">
                  {price}
                </span>
                <span className="text-[#00dfb6]/90 font-mono text-sm sm:text-base font-medium">
                  {vatText}
                </span>
              </div>
            </div>

            {/* Right Column: Contact details card */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="w-full max-w-[380px] bg-[#03182B]/40 border border-white/5 rounded-sm p-8 backdrop-blur-md shadow-2xl flex flex-col gap-6">
                <h3 className="text-white font-sans font-bold text-lg sm:text-xl tracking-tight mb-2">
                  Clear answers. No pressure.
                </h3>

                {/* Info Items */}
                <div className="flex flex-col gap-5">
                  {/* Email */}
                  <div className="flex flex-col gap-1">
                    <span className="text-slate-500 text-[9px] font-mono uppercase tracking-widest font-semibold">
                      Email
                    </span>
                    <a
                      href="mailto:hello@axudargroup.com"
                      className="text-[#00dfb6] hover:text-[#18d1ad] font-sans font-bold text-sm tracking-wide transition-colors duration-200"
                    >
                      hello@axudargroup.com
                    </a>
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col gap-1">
                    <span className="text-slate-500 text-[9px] font-mono uppercase tracking-widest font-semibold">
                      Phone
                    </span>
                    <a
                      href="tel:03301335720"
                      className="text-[#00dfb6] hover:text-[#18d1ad] font-sans font-bold text-sm tracking-wide transition-colors duration-200"
                    >
                      0330 133 5720
                    </a>
                  </div>

                  {/* Business Hours */}
                  <div className="flex flex-col gap-1">
                    <span className="text-slate-500 text-[9px] font-mono uppercase tracking-widest font-semibold">
                      Business Hours
                    </span>
                    <span className="text-white font-sans font-bold text-sm tracking-wide">
                      Monday–Friday 8am–6pm
                    </span>
                  </div>
                </div>
              </div>
            </div>
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
            <div className="sticky top-28 bg-[#F2F6F5]  p-8 border border-neutral-200/50 shadow-xs flex flex-col justify-between">
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
                <h3

                  className="w-full bg-[#00dfb6] hover:bg-[#18d1ad] text-[#03182B] font-mono text-xs font-bold uppercase tracking-widest py-4 rounded-[4px] transition-colors duration-200 text-center block shadow-xs"
                >
                  Request This Package →
                </h3>

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
      <section className="relative w-full bg-white py-12 md:py-16 px-6 md:px-12 lg:px-20">
        <div className="mx-auto max-w-[1700px] w-full">
          <div className="relative isolate overflow-hidden rounded-sm bg-[#00233F] px-8 sm:px-12 py-12 sm:py-16 text-white shadow-xl flex flex-col items-center justify-center text-center gap-4">
            {/* Ambient Center Glow using #07506A */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#07506A] rounded-full blur-[90px] pointer-events-none z-0 opacity-80" />

            {/* Background Axudar Watermark Typography */}
            <div
              className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center overflow-hidden select-none"
              aria-hidden="true"
            >
              <span className="font-heading text-[160px] sm:text-[230px] md:text-[290px] lg:text-[340px] font-black leading-none tracking-tight text-white/[0.12] uppercase whitespace-nowrap translate-y-2">
                Axudar
              </span>
            </div>

            {/* Centered Heading */}
            <div className="relative z-10 max-w-3xl">
              <h2 className="font-heading font-extrabold text-2xl sm:text-4xl lg:text-[42px] tracking-tight leading-tight text-white mb-4">
                Practical support.
                <br />
                Built around your business.
              </h2>

              <p className="text-neutral-300 font-sans font-light text-[14px] sm:text-base leading-relaxed max-w-2xl mx-auto">
                Book a free 30-minute consultation and we will show you where{" "}
                can
                make the biggest commercial difference first.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ReadyMadePackageDetailView;
