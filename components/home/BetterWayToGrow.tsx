"use client";

import React from "react";
import Link from "next/link";

export function BetterWayToGrow() {
  return (
    <section className="relative w-full bg-[#03182B] py-16 sm:py-20 px-6 md:px-12 lg:px-20 overflow-hidden border-t border-white/5">
      <div className="mx-auto max-w-[1700px] flex flex-col lg:flex-row lg:items-center justify-between gap-8">
        {/* Left Side: Title & Quote */}
        <div className="flex flex-col max-w-2xl">
          <h2 className="font-sans font-black text-2xl sm:text-3xl lg:text-[34px] uppercase tracking-tight text-white">
            A BETTER WAY TO GROW.
          </h2>
          <p className="mt-3 text-slate-300 font-light text-sm sm:text-base leading-relaxed">
            &ldquo;We don&apos;t arrive with a predefined solution. We understand the business first, then connect the right capabilities around the opportunity.&rdquo;
          </p>
        </div>

        {/* Right Side: CTA Button */}
        <div className="shrink-0">
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center gap-2 bg-[#00dfb6] hover:bg-[#00f5d4] text-[#02111c] font-sans font-bold text-xs uppercase tracking-wider px-7 py-4 transition-all duration-200 hover:scale-[1.02] shadow-[0_0_25px_rgba(0,223,182,0.15)]"
          >
            <span>START A CONVERSATION</span>
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default BetterWayToGrow;
