"use client";

import React from "react";

interface JourneyStep {
  title: string;
  description: string;
}

const steps: JourneyStep[] = [
  {
    title: "1. STRATEGY & PLANNING",
    description: "Tell us what's happening and what you want to change.",
  },
  {
    title: "2. DIAGNOSE",
    description: "We identify what's helping or holding back growth.",
  },
  {
    title: "3. BUILD",
    description: "We create your Growth Canvas and agree priorities.",
  },
  {
    title: "04. DELIVER & IMPROVE",
    description: "We use the relevant parts of the Ecosystem, measure progress and adapt.",
  },
];

export function CustomerJourney() {
  return (
    <section id="how-it-works" className="relative w-full bg-white py-20 lg:py-28 px-6 md:px-12 lg:px-20 overflow-hidden border-t border-neutral-100">

      <div className="mx-auto max-w-[1500px] w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Heading & Subtitle */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <h2 className="font-sans font-black text-3xl sm:text-4xl lg:text-[40px] leading-[1.12] text-[#03182B] uppercase tracking-tight">
            A SIMPLE ROUTE FROM
            <br />
            INTEREST TO ACTION.
          </h2>
          <p className="mt-6 text-[#737373] text-sm sm:text-[15px] font-normal leading-relaxed max-w-md">
            A focused first conversation validates the route before a tailored proposal. No surprises, no pressure.
          </p>
        </div>

        {/* Right Column: 4 Journey Cards */}
        <div className="lg:col-span-7 flex flex-col gap-4 sm:gap-5">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-[#FAFAFA] border border-[#E5E7EB] p-6 sm:p-7 transition-all duration-200 hover:border-neutral-300 hover:shadow-sm"
            >
              <h3 className="font-sans font-extrabold text-sm sm:text-base text-[#03182B] uppercase tracking-wider">
                {step.title}
              </h3>
              <p className="mt-2 text-[#737373] text-xs sm:text-sm font-normal leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CustomerJourney;

