"use client";

import { useState } from "react";
import { Search, ChevronDown, Check } from "lucide-react";
import { GridBackground } from "@/components/shared/grid-background";
import { Navbar } from "@/components/layout/navbar";

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
    <section className="relative w-full overflow-hidden text-white select-none">
      <GridBackground className="w-full min-h-[380px] sm:min-h-[440px] flex flex-col justify-between pb-12 sm:pb-16">
        {/* Top Navbar */}
        <Navbar />

        {/* Hero Content */}
        <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 pt-6 sm:pt-10 flex flex-col items-center justify-center text-center space-y-6 sm:space-y-8">
          {/* Main Headline */}
          <h1 className="text-center justify-start text-neutral-100 text-3xl sm:text-4xl font-semibold  leading-10">
            Find Your Next Course
          </h1>

          {/* Search & Category Filter Row */}
          <div className="relative w-full max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-2">
            {/* White Search Input Pill */}
            <div className="flex-1 w-full flex items-center bg-white rounded-full px-5 sm:px-6 h-12 sm:h-14 shadow-lg focus-within:ring-2 focus-within:ring-[#D4FB20] transition-all">
              <Search className="w-5 h-5 text-neutral-400 mr-3 shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search"
                className="w-full bg-transparent text-sm sm:text-base text-neutral-800 placeholder:text-neutral-400 focus:outline-none "
              />
            </div>

            {/* Lime Dropdown Button Pill */}
            <div className="relative w-full sm:w-auto">
              <button
                type="button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full sm:w-auto h-12 sm:h-14 px-6 sm:px-8 bg-[#D4FB20] hover:brightness-95 active:scale-95 rounded-full inline-flex items-center justify-center gap-2 text-neutral-900 text-sm sm:text-base font-medium  shadow-lg transition-all duration-200 cursor-pointer shrink-0"
              >
                <span>{activeCategory === "All Courses" ? "Courses" : activeCategory}</span>
                <ChevronDown
                  className={`w-4 h-4 text-neutral-900 transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""
                    }`}
                />
              </button>

              {/* Dropdown Menu Popup */}
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-2xl py-2 z-50 border border-neutral-100 animate-in fade-in zoom-in-95 duration-150">
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => handleSelectCategory(cat)}
                      className="w-full px-4 py-2.5 text-left text-xs sm:text-sm font-medium  text-neutral-700 hover:bg-neutral-100 flex items-center justify-between transition-colors"
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
