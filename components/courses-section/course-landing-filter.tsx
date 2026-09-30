"use client";

import { useState } from "react";
import { Filter, BarChart2, LayoutGrid, SlidersHorizontal } from "lucide-react";
import { CATEGORIES } from "./courses-data";

interface CourseLandingFilterProps {
  activeCategory: string;
  onSelectCategory: (category: string) => void;
}

export function CourseLandingFilter({
  activeCategory,
  onSelectCategory,
}: CourseLandingFilterProps) {
  const [selectedSort, setSelectedSort] = useState("Most relevant");
  const [activeLevel, setActiveLevel] = useState("All Levels");
  const [isLevelOpen, setIsLevelOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);

  return (
    <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 my-8 flex flex-col gap-6 select-none">
      {/* ================= ROW 1: TOOLBAR BUTTONS ================= */}
      <div className="w-full flex flex-wrap items-center justify-between gap-3 sm:gap-4">
        {/* Left Action Buttons: Filter, Level, Category */}
        <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
          {/* Filter Button */}
          <button
            type="button"
            className="px-4 py-2.5 bg-white rounded-3xl outline outline-1 outline-offset-[-1px] outline-neutral-300 inline-flex items-center justify-center gap-2 text-neutral-600 hover:text-neutral-900 text-sm sm:text-base font-medium  leading-5 shadow-xs hover:bg-neutral-50 transition-all cursor-pointer"
          >
            <Filter className="w-4 h-4 text-neutral-800 shrink-0" />
            <span>Filter</span>
          </button>

          {/* Level Dropdown Button */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setIsLevelOpen(!isLevelOpen)}
              className="px-4 py-2.5 bg-white rounded-3xl outline outline-1 outline-offset-[-1px] outline-neutral-300 inline-flex items-center justify-center gap-2 text-neutral-600 hover:text-neutral-900 text-sm sm:text-base font-medium  leading-5 shadow-xs hover:bg-neutral-50 transition-all cursor-pointer"
            >
              <BarChart2 className="w-4 h-4 text-neutral-800 shrink-0" />
              <span>Level</span>
            </button>
            {isLevelOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-2xl shadow-xl border border-neutral-200 py-2 z-30 animate-in fade-in duration-150">
                {["All Levels", "Beginner", "Intermediate", "Advanced"].map((level) => (
                  <button
                    key={level}
                    type="button"
                    onClick={() => {
                      setActiveLevel(level);
                      setIsLevelOpen(false);
                    }}
                    className={`w-full px-4 py-2 text-left text-xs sm:text-sm font-medium  hover:bg-neutral-100 ${activeLevel === level ? "text-blue-700 font-bold" : "text-neutral-700"
                      }`}
                  >
                    {level}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Category Button */}
          <button
            type="button"
            className="px-4 py-2.5 bg-white rounded-3xl outline outline-1 outline-offset-[-1px] outline-neutral-300 inline-flex items-center justify-center gap-2 text-neutral-600 hover:text-neutral-900 text-sm sm:text-base font-medium  leading-5 shadow-xs hover:bg-neutral-50 transition-all cursor-pointer"
          >
            <LayoutGrid className="w-4 h-4 text-neutral-800 shrink-0" />
            <span>Category</span>
          </button>
        </div>

        {/* Right Action Button: Most relevant */}
        <div className="relative">
          <button
            type="button"
            onClick={() => setIsSortOpen(!isSortOpen)}
            className="px-4 py-2.5 bg-white rounded-3xl outline outline-1 outline-offset-[-1px] outline-neutral-300 inline-flex items-center justify-center gap-2 text-neutral-600 hover:text-neutral-900 text-sm sm:text-base font-medium  leading-5 shadow-xs hover:bg-neutral-50 transition-all cursor-pointer"
          >
            <SlidersHorizontal className="w-4 h-4 text-neutral-800 shrink-0" />
            <span>{selectedSort}</span>
          </button>
          {isSortOpen && (
            <div className="absolute right-0 mt-2 w-52 bg-white rounded-2xl shadow-xl border border-neutral-200 py-2 z-30 animate-in fade-in duration-150">
              {["Most relevant", "Highest rated", "Newest", "Price: Low to High", "Price: High to Low"].map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => {
                    setSelectedSort(option);
                    setIsSortOpen(false);
                  }}
                  className={`w-full px-4 py-2 text-left text-xs sm:text-sm font-medium  hover:bg-neutral-100 ${selectedSort === option ? "text-blue-700 font-bold" : "text-neutral-700"
                    }`}
                >
                  {option}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* ================= ROW 2: CATEGORY FILTER PILLS ================= */}
      <div className="w-full flex items-center gap-2 sm:gap-3 overflow-x-auto pb-2 scrollbar-none">
        {CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => onSelectCategory(cat)}
              className={`px-5 py-2.5 rounded-3xl inline-flex justify-center items-center text-center text-sm sm:text-base font-medium  leading-5 transition-all duration-200 shrink-0 cursor-pointer ${isActive
                  ? "bg-[#D4FB20] text-neutral-900 shadow-xs hover:brightness-95 scale-[1.02]"
                  : "bg-[#F5F5F6] text-[#4B4C53] hover:bg-neutral-200"
                }`}
            >
              {cat}
            </button>
          );
        })}
      </div>
    </div>
  );
}
