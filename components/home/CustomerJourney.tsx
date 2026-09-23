"use client";

import React from "react";

interface JourneyStep {
  number: string;
  title: string;
  description: string;
}

const steps: JourneyStep[] = [
  {
    number: "01",
    title: "TALK",
    description: "Tell us what's happening and what you want to change.",
  },
  {
    number: "02",
    title: "DIAGNOSE",
    description: "Find the real constraints holding growth back.",
  },
  {
    number: "03",
    title: "ALIGN",
    description: "Agree the priorities and the plan.",
  },
  {
    number: "04",
    title: "DELIVER",
    description: "Turn strategy into coordinated action.",
  },
  {
    number: "05",
    title: "MEASURE",
    description: "Track meaningful outcomes — not just activity.",
  },
  {
    number: "06",
    title: "SCALE",
    description: "Build sustainable momentum and optimise continuously.",
  },
];

export function CustomerJourney() {
  return (
    <section className="relative w-full bg-white py-20 lg:py-28 px-6 md:px-12 lg:px-20 border-t border-neutral-100 overflow-hidden">
      <div className="mx-auto max-w-[1500px] w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Heading & Quote */}
        <div className="lg:col-span-5 flex flex-col justify-start">
          <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#00b894] mb-4 block">
            THE AXUDAR CUSTOMER JOURNEY
          </span>
          <h2 className="font-sans font-black text-3xl sm:text-4xl lg:text-[40px] leading-[1.12] text-[#03182B] uppercase tracking-tight">
            A PARTNERSHIP
            <br />
            BUILT AROUND
            <br />
            PROGRESS.
          </h2>
          <p className="mt-6 text-[#737373] text-sm sm:text-[15px] font-light leading-relaxed max-w-md">
            &ldquo;We don&apos;t arrive with a predefined solution. We understand the business first, then connect the right capabilities around the opportunity.&rdquo;
          </p>
        </div>

        {/* Right Column: 6 Journey Steps */}
        <div className="lg:col-span-7 flex flex-col divide-y divide-neutral-200/80">
          {steps.map((step) => (
            <div key={step.number} className="py-5 sm:py-6 first:pt-0 last:pb-0 flex items-start gap-6">
              <span className="font-mono font-bold text-base sm:text-lg text-neutral-400 shrink-0 w-8 pt-0.5 select-none">
                {step.number}
              </span>
              <div className="flex flex-col">
                <h3 className="font-sans font-extrabold text-sm sm:text-[15px] text-[#03182B] uppercase tracking-wider mb-1">
                  {step.title}
                </h3>
                <p className="text-[#737373] text-xs sm:text-sm font-light leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CustomerJourney;
