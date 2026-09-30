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
    <div className="w-full flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 max-w-5xl mx-auto px-4 my-8">
      {CATEGORIES.map((cat) => {
        const isActive = activeCategory === cat;
        return (
          <button
            key={cat}
            onClick={() => onSelectCategory(cat)}
            className={`px-4 py-3 rounded-3xl inline-flex justify-center items-center text-center text-base font-medium leading-5 transition-all duration-200 select-none ${
              isActive
                ? "bg-[#D4FF00] text-neutral-800 font-semibold shadow-sm hover:brightness-95 scale-[1.02]"
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
