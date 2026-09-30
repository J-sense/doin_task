"use client";

import { Search } from "lucide-react";
import { useRouter } from "next/navigation";

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
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/courses");
  };

  return (
    <div
      className={`w-full flex-1 flex flex-col items-center justify-start text-center px-4 sm:px-6 pt-2 sm:pt-12 lg:pt-20 select-none ${className}`}
    >
      <div className="relative z-30 max-w-[935px] mx-auto flex flex-col items-center space-y-3 sm:space-y-4 lg:space-y-5">
        {/* Figma Headline */}
        <h1 className="w-full max-w-[935px] text-center justify-start text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight sm:leading-tight lg:leading-[86.40px] text-balance">
          Get Access to Hundreds<br />
          Courses Available
        </h1>

        {/* Figma Subtitle */}
        <p className="text-center justify-start text-zinc-200 text-sm sm:text-base lg:text-lg font-normal leading-relaxed sm:leading-7 max-w-4xl mx-auto text-balance px-2 sm:px-0">
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
        </p>

        {/* Figma Search Bar */}
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-2xl mx-auto pt-2 sm:pt-4 pointer-events-auto flex items-center justify-center gap-2 sm:gap-3 px-1 sm:px-0"
        >
          {/* Input Pill */}
          <div className="w-full max-w-[461px] h-11 sm:h-12 px-4 sm:px-6 py-2.5 sm:py-3 bg-white rounded-3xl inline-flex justify-start items-center gap-2 focus-within:ring-2 focus-within:ring-[#d4ff00] transition-all">
            <Search className="size-5 sm:size-6 text-gray-500 shrink-0" />
            <input
              type="text"
              placeholder="Course, topic, creator"
              className="w-full bg-transparent text-gray-500 placeholder:text-gray-500 text-sm sm:text-lg font-normal leading-7 focus:outline-none min-w-0"
            />
          </div>

          {/* Search Button Pill */}
          <button
            type="submit"
            className="h-11 sm:h-[52px] px-5 sm:px-9 rounded-full bg-[#d4ff00] text-black font-semibold text-xs sm:text-sm md:text-base tracking-tight transition-all duration-200 hover:bg-[#e0ff33] hover:scale-105 active:scale-95 shadow-[0_8px_30px_rgba(0,0,0,0.2)] shrink-0 cursor-pointer flex items-center justify-center"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
}
