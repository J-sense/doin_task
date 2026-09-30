"use client";

import { useState } from "react";
import { Search, ChevronDown, Check } from "lucide-react";
import { GridBackground } from "@/components/shared/grid-background";

interface CourseHeroSectionProps {
  onSearchChange?: (query: string) => void;
  onCategoryChange?: (category: string) => void;
  selectedCategory?: string;
}

const CATEGORIES = [
  "All Courses",
  "UI/UX Design",
  "Development",
  "Business & Startup",
  "Marketing",
  "Finance & Crypto",
];

export function CourseHeroSection({
  onSearchChange,
  onCategoryChange,
  selectedCategory = "All Courses",
}: CourseHeroSectionProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(selectedCategory);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    if (onSearchChange) onSearchChange(value);
  };

  const handleSelectCategory = (cat: string) => {
    setActiveCategory(cat);
    setIsDropdownOpen(false);
    if (onCategoryChange) onCategoryChange(cat);
  };

  return (
    <section className="relative w-full text-white select-none z-30">
      <GridBackground
        overflowVisible={true}
        className="w-full min-h-[280px] sm:min-h-[420px] flex flex-col justify-center pb-10 sm:pb-20 pt-20 sm:pt-32 lg:pt-36"
      >
        {/* Hero Content */}
        <div className="relative z-30 max-w-4xl mx-auto px-4 sm:px-6 pt-2 sm:pt-6 flex flex-col items-center justify-center text-center space-y-4 sm:space-y-8">
          {/* Main Headline */}
          <h1 className="text-center justify-start text-neutral-100 text-2xl sm:text-4xl lg:text-5xl font-semibold leading-tight sm:leading-snug lg:leading-10">
            Find Your Next Course
          </h1>

          {/* Search & Category Filter Row (Side-by-side on all screens) */}
          <div className="relative w-full max-w-2xl mx-auto flex flex-row items-center justify-center gap-2 sm:gap-4 px-2 z-40">
            {/* White Search Input Pill */}
            <div className="flex-1 min-w-0 flex items-center bg-white rounded-full px-4 sm:px-6 h-11 sm:h-14 shadow-lg focus-within:ring-2 focus-within:ring-[#D4FB20] transition-all">
              <Search className="w-4 sm:w-5 h-4 sm:h-5 text-neutral-400 mr-2 sm:mr-3 shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search"
                className="w-full bg-transparent text-xs sm:text-base text-neutral-800 placeholder:text-neutral-400 focus:outline-none min-w-0"
              />
            </div>

            {/* Lime Dropdown Button Pill */}
            <div className="relative z-50 shrink-0">
              <button
                type="button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="h-11 sm:h-14 px-4 sm:px-8 bg-[#D4FB20] hover:brightness-95 active:scale-95 rounded-full inline-flex items-center justify-center gap-1.5 text-neutral-900 text-xs sm:text-base font-semibold shadow-lg transition-all duration-200 cursor-pointer shrink-0"
              >
                <span>{activeCategory === "All Courses" ? "Courses" : activeCategory}</span>
                <ChevronDown
                  className={`w-3.5 sm:w-4 h-3.5 sm:h-4 text-neutral-900 transition-transform duration-200 ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Dropdown Menu Popup */}
              {isDropdownOpen && (
                <div className="absolute right-0 top-full mt-2 w-48 sm:w-56 bg-white rounded-2xl shadow-2xl py-2 z-50 border border-neutral-100 animate-in fade-in zoom-in-95 duration-150">
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => handleSelectCategory(cat)}
                      className="w-full px-4 py-2.5 text-left text-xs sm:text-sm font-medium text-neutral-700 hover:bg-neutral-100 flex items-center justify-between transition-colors cursor-pointer"
                    >
                      <span>{cat}</span>
                      {activeCategory === cat && (
                        <Check className="w-4 h-4 text-blue-700" />
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </GridBackground>
    </section>
  );
}
