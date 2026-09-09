import React from "react";
import Link from "next/link";

export default function ConsultationBanner() {
  return (
    <section className="relative w-full bg-white py-12 md:py-16 px-6 md:px-12 lg:px-20">
      <div className="mx-auto max-w-[1700px] w-full">
        <div className="relative isolate overflow-hidden rounded-sm bg-[#00233F] px-8 sm:px-12 py-8 sm:py-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
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

          {/* Left Side Heading */}
          <div className="relative z-10 max-w-xl">
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-[34px] tracking-tight leading-snug text-white">
              Find the gap
              <br />
              that matters most.
            </h2>
          </div>

          {/* Right Side CTA Button */}
          <div className="relative z-10 shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-sm bg-[#00B894] px-6 py-3.5 text-xs sm:text-sm font-bold tracking-wider text-slate-900 transition-all hover:bg-[#18d1ad] hover:scale-[1.02] shadow-[0_0_20px_rgba(0,223,182,0.18)] text-center"
            >
              Book a free consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
