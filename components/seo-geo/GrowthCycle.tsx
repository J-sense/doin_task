"use client";

import React from "react";
import { growthCycleSteps } from "./data";

export function GrowthCycle() {
  return (
    <section className="relative w-full bg-white py-20 md:py-28 px-6 md:px-12 lg:px-20 text-slate-900 border-t border-slate-200/60">
      <div className="mx-auto max-w-[1400px] w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading & Subtitle */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <span className="text-[#0DAE87] text-xs sm:text-sm font-bold tracking-wider uppercase block mb-4 font-sans">
              What happens next
            </span>
            <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-[46px] tracking-tight leading-[1.1] text-slate-900">
              Not a one-off fix.
              <span className="text-[#0DAE87] block mt-1">A growth cycle.</span>
            </h2>

            <p className="mt-6 text-slate-500 text-sm sm:text-base font-normal leading-relaxed max-w-md">
              Strategy without execution. Marketing without alignment. Digital without direction. Leadership without a shared growth agenda.
            </p>
          </div>

          {/* Right Column: Process Steps Card */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="w-full max-w-xl bg-[#FAFAFA] border-slate-200/70 rounded-md p-7 sm:p-10 shadow-xs">
              <div className="flex flex-col gap-6">
                {growthCycleSteps.map((step, idx) => (
                  <div
                    key={step.number}
                    className={`flex items-start gap-6 ${
                      idx !== growthCycleSteps.length - 1
                        ? "border-b border-slate-200/80 pb-6"
                        : ""
                    }`}
                  >
                    <span className="font-heading font-bold text-[#C7C4C4] text-lg sm:text-xl shrink-0 w-8 select-none">
                      {step.number}
                    </span>
                    <div className="flex flex-col">
                      <h3 className="font-sans font-bold text-[#262626] text-base sm:text-lg tracking-tight">
                        {step.title}
                      </h3>
                      <p className="text-[#525252] text-xs sm:text-sm leading-relaxed mt-1 font-normal">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
