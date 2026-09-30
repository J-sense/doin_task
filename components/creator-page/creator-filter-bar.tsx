"use client";

import { useState } from "react";
import { Filter, BarChart2, Share2, AlignLeft } from "lucide-react";

// Shared button style from Figma:
// px-4 py-3 · bg-white · rounded-3xl · outline outline-1 outline-offset-[-1px] outline-neutral-300
// icon: w-6 h-6 · text: text-neutral-600 text-base font-medium leading-5 · gap-1
const BTN =
  "px-4 py-3 bg-white rounded-3xl outline outline-1 outline-offset-[-1px] outline-neutral-300 inline-flex justify-center items-center gap-1 text-neutral-600 text-base font-medium leading-5 hover:bg-neutral-50 active:scale-95 transition-all cursor-pointer";

export function CreatorFilterBar() {
  const [activeSort, setActiveSort] = useState("Most relevant");

  return (
    <div className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6  pt-9 flex items-center justify-between gap-4">

        {/* Left: Filter · Level · Category */}
        <div className="flex items-center gap-2 flex-wrap">
          {/* Filter */}
          <button type="button" className={BTN}>
            <Filter className="w-6 h-6 text-neutral-800" strokeWidth={1.5} />
            Filter
          </button>

          {/* Level */}
          <button type="button" className={BTN}>
            <BarChart2 className="w-6 h-6 text-neutral-800" strokeWidth={1.5} />
            Level
          </button>

          {/* Category */}
          <button type="button" className={BTN}>
            <Share2 className="w-6 h-6 text-neutral-800 rotate-90" strokeWidth={1.5} />
            Category
          </button>
        </div>

        {/* Right: Most relevant */}
        <button
          type="button"
          onClick={() => setActiveSort("Most relevant")}
          className={`${BTN} shrink-0`}
        >
          <AlignLeft className="w-6 h-6 text-neutral-800" strokeWidth={1.5} />
          {activeSort}
        </button>

      </div>
    </div>
  );
}
