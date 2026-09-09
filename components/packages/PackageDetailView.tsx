"use client";

import React from "react";
import Link from "next/link";
import { PackageDetailData } from "./types";

interface PackageDetailViewProps {
  data: PackageDetailData;
}

export function PackageDetailView({ data }: PackageDetailViewProps) {
  return (
    <div className="w-full bg-white text-slate-900">
      {/* Hero Section */}
      <section className="relative w-full bg-[#00233F] text-white overflow-hidden pt-36 pb-20 md:pt-44 md:pb-28 px-6 md:px-12 lg:px-20 min-h-[460px] flex items-center border-b border-white/5">
        {/* Glowing Center Light */}
        <div className="absolute left-1/3 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-[#01526D] rounded-[58px] blur-[85px] pointer-events-none opacity-80 z-0" />

        {/* Right diagonal green-teal solid/gradient panel */}
        <div
          className="absolute top-0 right-0 h-full w-[360px] sm:w-[480px] md:w-[560px] lg:w-[620px] bg-[#074b57] pointer-events-none z-0"
          style={{
            clipPath: "polygon(22% 0, 100% 0, 100% 100%, 0% 100%)",
          }}
        />

        <div className="mx-auto max-w-[1700px] w-full relative z-10">
          <div className="max-w-3xl">
            <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-[62px] tracking-tight leading-[1.05] uppercase text-white">
              {data.title}
            </h1>
            <p className="mt-5 text-slate-300 text-base sm:text-lg font-light leading-relaxed max-w-xl">
              {data.subtitle}
            </p>

            <div className="mt-8 flex items-baseline gap-2.5">
              <span className="text-[#00dfb6] font-heading font-black text-3xl sm:text-4xl lg:text-[42px]">
                {data.price}
              </span>
              <span className="text-slate-300 font-mono text-xs sm:text-sm tracking-wide">
                {data.vatText}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="relative w-full py-16 lg:py-24 px-6 md:px-12 lg:px-20 bg-white">
        <div className="mx-auto max-w-[1700px] w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Main Content Column */}
            <div className="lg:col-span-7 xl:col-span-8 flex flex-col">
              {/* Introduction Paragraph */}
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal mb-14 max-w-2xl">
                {data.intro}
              </p>

              {/* WHAT IS INCLUDED */}
              <div>
                <h2 className="font-heading font-black text-2xl sm:text-3xl uppercase tracking-tight text-[#03182B] mb-8">
                  WHAT IS INCLUDED
                </h2>

                <div className="space-y-6">
                  {data.whatsIncluded.map((item, idx) => (
                    <div
                      key={idx}
                      className="border-b border-slate-100 pb-6 flex items-start gap-4"
                    >
                      <div className="size-6 rounded-full bg-[#00B894] text-[#02111c] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 select-none">
                        ✓
                      </div>
                      <div>
                        <h3 className="font-heading font-extrabold text-sm sm:text-base text-slate-900 tracking-wide">
                          {item.title}
                        </h3>
                        <p className="text-slate-500 text-xs sm:text-sm font-normal mt-1 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* YOUR RESPONSIBILITIES */}
              <div className="mt-16">
                <h2 className="font-heading font-black text-2xl sm:text-3xl uppercase tracking-tight text-[#03182B] mb-6">
                  YOUR RESPONSIBILITIES
                </h2>

                <ul className="space-y-3.5">
                  {data.responsibilities.map((resp, idx) => (
                    <li
                      key={idx}
                      className="text-slate-700 text-xs sm:text-sm font-medium leading-relaxed flex items-start gap-3"
                    >
                      <span className="text-slate-400 font-bold">•</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* NOT INCLUDED */}
              <div className="mt-16">
                <h2 className="font-heading font-black text-2xl sm:text-3xl uppercase tracking-tight text-[#03182B] mb-6">
                  NOT INCLUDED
                </h2>

                <ul className="space-y-3.5">
                  {data.notIncluded.map((notInc, idx) => (
                    <li
                      key={idx}
                      className="text-slate-700 text-xs sm:text-sm font-medium leading-relaxed flex items-start gap-3"
                    >
                      <span className="text-slate-400 font-bold">•</span>
                      <span>{notInc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Sticky Sidebar Package Request Card */}
            <div className="lg:col-span-5 xl:col-span-4 sticky top-28">
              <div className="bg-[#F4F6F8] rounded-md p-8 sm:p-10 border border-slate-200/80 shadow-xs">
                <span className="text-[#00B894] font-mono text-[11px] font-extrabold uppercase tracking-widest block mb-3">
                  {data.tag}
                </span>

                <div className="flex items-baseline gap-2">
                  <span className="font-heading font-black text-3xl sm:text-4xl text-slate-900">
                    {data.price}
                  </span>
                  <span className="text-slate-500 font-mono text-xs">
                    {data.vatText}
                  </span>
                </div>
                <span className="text-slate-400 text-xs font-mono mt-1 block mb-8">
                  {data.commitmentNote}
                </span>

                <div className="mb-8 pt-6 border-t border-slate-200/80">
                  <span className="text-slate-500 text-[10px] font-mono font-bold uppercase tracking-widest block mb-2">
                    NEED BROADER SUPPORT?
                  </span>
                  <p className="text-slate-500 text-xs font-normal leading-relaxed">
                    {data.sidebarNote}
                  </p>
                </div>

                <Link
                  href={`/contact?title=${encodeURIComponent(data.title)}&price=${encodeURIComponent(data.price + " " + data.vatText)}`}
                  className="w-full bg-[#00B894] hover:bg-[#18d1ad] text-slate-900 font-mono text-xs sm:text-sm font-bold uppercase tracking-wider py-4 rounded-xs transition-all shadow-[0_0_20px_rgba(0,223,182,0.18)] flex items-center justify-center gap-2 text-center"
                >
                  Request This Package ➔
                </Link>

                <Link
                  href={`/contact?title=${encodeURIComponent(data.title)}&price=${encodeURIComponent(data.price + " " + data.vatText)}`}
                  className="w-full text-center text-xs font-mono text-slate-500 hover:text-slate-900 font-bold transition-colors mt-4 block"
                >
                  Ask a question first ➔
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PackageDetailView;
