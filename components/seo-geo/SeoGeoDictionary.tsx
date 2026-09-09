"use client";

import React, { useState } from "react";
import { Search, Check } from "lucide-react";
import { dictionaryData, dictionaryCategories } from "./data";

export function SeoGeoDictionary() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredItems = dictionaryData.filter((item) => {
    const matchesCategory =
      activeCategory === "ALL" || item.category === activeCategory;
    const matchesSearch =
      searchQuery === "" ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.inPlainEnglish.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.whyItMatters.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="relative w-full py-20 md:py-28 px-6 md:px-12 lg:px-20 text-slate-900 border-t border-slate-200/60">
      <div className="mx-auto max-w-[1700px] w-full">
        {/* Header Title */}
        <div className="text-center max-w-xl mx-auto">
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-[38px] uppercase tracking-tight text-slate-900 leading-tight">
            THE SEO &amp; GEO<br />DICTIONARY.
          </h2>
          <p className="mt-4 text-[#525252] text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-normal">
            Use the filters or search for any service you have seen in an Axudar
            package. Every explanation answers three things: what it means, why
            it matters and what is included.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mt-8 max-w-xl mx-auto relative">
          <Search className="size-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search"
            className="w-full bg-[#FAFAFA] rounded-sm py-3.5 pl-11 pr-4 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#0DAE87] focus:bg-white transition-colors"
          />
        </div>

        {/* Category Filter Tabs */}
        <div className="mt-10 overflow-x-auto no-scrollbar border-b border-slate-200/80">
          <div className="flex items-center justify-start md:justify-center gap-6 sm:gap-8 min-w-max pb-3 px-2">
            {dictionaryCategories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-xs font-bold uppercase tracking-wider transition-colors relative pb-1 ${
                    isActive
                      ? "text-[#0DAE87]"
                      : "text-slate-500 hover:text-slate-800"
                  }`}
                >
                  {cat}
                  {isActive && (
                    <span className="absolute left-0 bottom-[-13px] inset-x-0 h-[2.5px] bg-[#0DAE87]" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Dictionary Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-[#FFFFFF] rounded-sm p-6 sm:p-7 flex flex-col justify-between shadow-2xl hover:shadow-md transition-shadow"
            >
              <div>
                {/* Category & Badge */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-slate-100 border border-slate-200/60 text-slate-600 px-2 py-0.5 text-[9px] font-bold tracking-wider uppercase rounded-xs font-sans">
                    {item.badge}
                  </span>
                  <span className="text-[#0DAE87] text-[10px] font-bold tracking-widest uppercase font-sans">
                    {item.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-heading font-black text-xl sm:text-2xl text-slate-900 tracking-tight leading-snug uppercase mb-4">
                  {item.title}
                </h3>

                {/* In Plain English */}
                <div className="mb-4">
                  <span className="text-[#0DAE87] text-[10px] font-bold tracking-widest uppercase block mb-1 font-sans">
                    IN PLAIN ENGLISH
                  </span>
                  <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed font-normal">
                    {item.inPlainEnglish}
                  </p>
                </div>

                {/* Why It Matters */}
                <div className="mb-6">
                  <span className="text-[#0DAE87] text-[10px] font-bold tracking-widest uppercase block mb-1 font-sans">
                    WHY IT MATTERS
                  </span>
                  <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed font-normal">
                    {item.whyItMatters}
                  </p>
                </div>
              </div>

              <div>
                <hr className="border-slate-100 my-4" />
                {/* What You Get */}
                <div>
                  <span className="text-[#0DAE87] text-[10px] font-bold tracking-widest uppercase block mb-2 font-sans">
                    WHAT YOU GET
                  </span>
                  <ul className="flex flex-col gap-2">
                    {item.whatYouGet.map((bullet, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-xs sm:text-[13px] text-slate-700 leading-snug"
                      >
                        <Check className="size-3.5 text-[#0DAE87] shrink-0 mt-0.5 stroke-[2.5px]" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
