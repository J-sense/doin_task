"use client";

import React, { useState } from "react";
import Link from "next/link";
import { areas } from "@/components/home/areasData";

const allTags = [
  "Strategy",
  "SEO",
  "Social Media",
  "Business Growth",
  "Marketing",
  "Website",
];

export function EcosystemAreas() {
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [canvas, setCanvas] = useState<string[]>([]);

  const filtered =
    activeTag === null ? areas : areas.filter((a) => a.tag === activeTag);

  const toggleCanvas = (id: string) => {
    setCanvas((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  return (
    <section id="what-we-do" className="w-full bg-white py-20 lg:py-28 px-6 md:px-12 lg:px-20 border-t border-neutral-100">
      <div className="mx-auto max-w-[1600px]">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="font-sans font-black text-[26px] sm:text-[34px] lg:text-[42px] leading-[1.1] text-[#03182B] uppercase tracking-tight">
            WHAT CAN EACH AREA DO FOR YOUR{" "}
            <span className="text-[#009b5a]">BUSINESS?</span>
          </h2>
          <p className="mt-4 text-neutral-400 text-sm sm:text-[15px] font-light leading-relaxed max-w-2xl mx-auto">
            Explore the six areas of the Axudar Ecosystem. Choose an area you
            already know you need, or use the Growth Canvas and we will help
            identify the right combination for your business.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7 mb-12">
          {filtered.map((area) => {
            const inCanvas = canvas.includes(area.id);

            let displayTitle = area.title;
            if (area.id === "strategy-planning") displayTitle = "STRATEGY";

            return (
              <div
                key={area.id}
                className="group flex flex-col justify-between p-8 sm:p-9 min-h-[580px] rounded-none bg-[#f2f3f5] text-[#03182B] hover:bg-[#009b5a] hover:text-white hover:shadow-xl transition-all duration-300 ease-in-out cursor-pointer"
              >
                {/* Top Content: Title + Support Sections */}
                <div className="flex flex-col">
                  {/* Card Title */}
                  <h3 className="font-sans font-black text-2xl uppercase tracking-tight mb-8 text-[#03182B] group-hover:text-white transition-colors duration-300">
                    {displayTitle}
                  </h3>

                  {/* Two Support Sections */}
                  <div className="flex flex-col gap-7">
                    {area.sections.map((section, si) => (
                      <div key={si}>
                        <p className="font-sans font-bold text-[11px] uppercase tracking-widest mb-3 text-[#333333] group-hover:text-white/90 transition-colors duration-300">
                          {section.heading}
                        </p>
                        <ul className="flex flex-col gap-2.5">
                          {section.items.map((item, ii) => (
                            <li
                              key={ii}
                              className="flex items-start gap-2.5 text-[13px] font-normal leading-snug text-neutral-600 group-hover:text-white/95 transition-colors duration-300"
                            >
                              <span className="mt-[6px] size-1.5 rounded-full shrink-0 bg-neutral-600 group-hover:bg-white transition-colors duration-300" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Content: Link & Action Button */}
                <div className="flex flex-col gap-4 pt-8">
                  {/* Explore Link */}
                  <div className="text-center">
                    <Link
                      href={`/packages/${area.id === "social-media"
                        ? "social-content-growth"
                        : area.id
                        }`}
                      className="inline-flex items-center justify-center gap-1.5 font-sans font-bold text-[11px] uppercase tracking-widest text-[#009b5a] group-hover:text-white hover:underline transition-colors duration-300"
                    >
                      EXPLORE THIS AREA →
                    </Link>
                  </div>

                  {/* Add to Growth Canvas Link */}
                  <Link
                    href={`/area/${area.id}`}
                    className="block w-full py-3.5 px-4 text-center text-[10.5px] font-mono font-bold uppercase tracking-wider rounded-none bg-[#e5e8ec] border border-neutral-300/80 text-[#03182B] group-hover:bg-white group-hover:text-[#009b5a] group-hover:border-transparent group-hover:shadow-md transition-all duration-300"
                  >
                    + ADD TO MY GROWTH CANVAS
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Tag Filter Pills */}
        <div className="flex flex-wrap gap-2.5 mb-8">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(activeTag === tag ? null : tag)}
              className={`text-[10px] font-mono font-bold uppercase tracking-widest px-5 py-2.5 border rounded-sm transition-all duration-150 cursor-pointer ${activeTag === tag
                ? "bg-[#03182B] text-white border-[#03182B]"
                : "bg-white text-neutral-400 border-neutral-200 hover:border-neutral-400 hover:text-neutral-600"
                }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Canvas Summary Bar */}
        {canvas.length > 0 && (
          <div className="mt-4 bg-[#03182B] rounded-xl px-8 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 animate-in fade-in duration-300">
            <div>
              <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#009b5a] mb-1">
                Your Growth Canvas
              </p>
              <p className="text-sm font-light text-white/70">
                {canvas.length} area{canvas.length > 1 ? "s" : ""} selected:{" "}
                <span className="text-white font-medium">
                  {canvas
                    .map((id) => areas.find((a) => a.id === id)?.title)
                    .join(", ")}
                </span>
              </p>
            </div>
            <Link
              href={`/contact?canvas=${canvas.join(",")}`}
              className="shrink-0 bg-[#009b5a] hover:bg-[#00804a] text-white font-mono text-[10px] font-bold uppercase tracking-widest px-7 py-3 rounded-sm transition-colors duration-150"
            >
              Enquire about my canvas →
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}


