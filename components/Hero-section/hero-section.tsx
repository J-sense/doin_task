"use client";

import { Search } from "lucide-react";

interface HeroSectionProps {
  className?: string;
}

/**
 * HeroSection (Client Component)
 * Replicates the Figma hero typography and search bar:
 * - Headline: "Get Access to Hundreds Courses Available"
 * - Subtitle: "Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses."
 * - Search bar: "Course, topic, creator" with electric lime "Search" button
 */
export function HeroSection({ className = "" }: HeroSectionProps) {
  return (
    <div
      className={`w-full flex-1 flex flex-col items-center justify-start text-center px-6 pt-6 sm:pt-10 select-none ${className}`}
    >
      <div className="relative z-30 max-w-3xl mx-auto flex flex-col items-center space-y-4 sm:space-y-5">
        {/* Figma Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.12] text-balance">
          Get Access to Hundreds<br />
          Courses Available
        </h1>

        {/* Figma Subtitle */}
        <p className="text-white/85 text-xs sm:text-sm md:text-base max-w-xl mx-auto font-normal leading-relaxed text-balance">
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
        </p>

        {/* Figma Search Bar */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-full max-w-lg sm:max-w-xl mx-auto pt-2 pointer-events-auto flex items-center justify-center gap-2.5 sm:gap-3.5"
        >
          {/* Input Pill */}
          <div className="flex-1 flex items-center bg-white rounded-full px-4 sm:px-6 h-[46px] sm:h-[52px] shadow-[0_8px_30px_rgba(0,0,0,0.2)] focus-within:ring-2 focus-within:ring-[#d4ff00] transition-all">
            <Search className="w-4 h-4 sm:w-5 sm:h-5 text-neutral-400 mr-2.5 sm:mr-3 shrink-0" />
            <input
              type="text"
              placeholder="Course, topic, creator"
              className="w-full bg-transparent text-xs sm:text-sm md:text-base text-neutral-900 placeholder:text-neutral-400 focus:outline-none"
            />
          </div>

          {/* Search Button Pill */}
          <button
            type="submit"
            className="h-[46px] sm:h-[52px] px-6 sm:px-9 rounded-full bg-[#d4ff00] text-black font-semibold text-xs sm:text-sm md:text-base tracking-tight transition-all duration-200 hover:bg-[#e0ff33] hover:scale-105 active:scale-95 shadow-[0_8px_30px_rgba(0,0,0,0.2)] shrink-0 cursor-pointer flex items-center justify-center"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
}
