"use client";

import { CATEGORIES } from "./courses-data";

interface CategoryFilterProps {
  activeCategory: string;
  onSelectCategory: (category: string) => void;
}

export function CategoryFilter({
  activeCategory,
  onSelectCategory,
}: CategoryFilterProps) {
  return (
    <div className="w-full flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 max-w-5xl mx-auto px-4 my-8 select-none">
      {CATEGORIES.map((cat) => {
        const isActive = activeCategory === cat;
        return (
          <button
            key={cat}
            type="button"
            onClick={() => onSelectCategory(cat)}
            className={`px-4 py-2.5 sm:px-5 sm:py-3 rounded-3xl inline-flex justify-center items-center text-center text-sm sm:text-base font-medium leading-5 transition-all duration-200 select-none cursor-pointer ${
              isActive
                ? "bg-[#D4FB20] text-neutral-900 font-semibold shadow-xs hover:brightness-95 scale-[1.02]"
                : "bg-stone-100 text-stone-600 hover:bg-stone-200 hover:text-stone-900"
            }`}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}
