"use client";

import React, { useState } from "react";
import Link from "next/link";
import { areas } from "@/components/home/areasData";

const allTags = [
  "STRATEGY & PLANNING",
  "SEO & AI VISIBILITY",
  "SOCIAL & CONTENT",
  "WEBSITE & CONVERSION",
  "CAMPAIGNS & LEADS",
  "COMMERCIAL GROWTH",
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
    <section className="w-full bg-white py-20 lg:py-28 px-6 md:px-12 border-t border-neutral-100">
      <div className="mx-auto max-w-[1700px]">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="font-sans font-black text-[26px] sm:text-[34px] lg:text-[40px] leading-[1.1] text-[#03182B] uppercase tracking-tight">
            WHAT CAN EACH AREA DO FOR YOUR{" "}
            <span className="text-emerald-500">BUSINESS?</span>
          </h2>
          <p className="mt-4 text-neutral-400 text-sm sm:text-[15px] font-light leading-relaxed max-w-2xl mx-auto">
            Explore the six areas of the Axudar Ecosystem. Choose an area you
            already know you need, or use the Growth Canvas and we will help
            identify the right combination for your business.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mb-10">
          {filtered.map((area) => {
            const inCanvas = canvas.includes(area.id);
            return (
              <div
                key={area.id}
                className="flex flex-col bg-white border border-neutral-200 rounded-xl hover:border-neutral-400 hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="flex flex-col flex-1 p-8">

                  {/* Number + Title */}
                  <div className="mb-7">
                    <span className="text-neutral-200 font-black text-5xl leading-none select-none block mb-2">
                      {area.number}
                    </span>
                    <h3 className="text-[#03182B] font-sans font-extrabold text-lg uppercase tracking-tight">
                      {area.title}
                    </h3>
                  </div>

                  {/* Two support sections */}
                  <div className="flex flex-col gap-6 flex-1">
                    {area.sections.map((section, si) => (
                      <div key={si}>
                        <p className="text-[#03182B] font-sans font-semibold text-[10.5px] uppercase tracking-widest mb-2.5">
                          {section.heading}
                        </p>
                        <ul className="flex flex-col gap-1.5">
                          {section.items.map((item, ii) => (
                            <li
                              key={ii}
                              className="flex items-start gap-2 text-neutral-500 text-[12.5px] font-light leading-snug"
                            >
                              <span className="mt-[5px] w-[5px] h-[5px] rounded-full border border-neutral-400 shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-neutral-100 my-6" />

                  {/* Action Buttons */}
                  <div className="flex items-center justify-between gap-3 pt-2">
                    <Link
                      href={`/packages/${area.id === "social-media" ? "social-content-growth" : area.id}`}
                      className="text-[10.5px] font-mono font-bold uppercase tracking-widest text-emerald-600 hover:text-emerald-700 transition-colors duration-150"
                    >
                      Explore this area →
                    </Link>
                    <Link
                      href={`/area/${area.id}`}
                      className="text-[10px] font-mono font-bold uppercase tracking-widest px-3.5 py-2 border rounded-sm transition-all duration-150 bg-white text-[#03182B] border-neutral-300 hover:border-neutral-500 hover:bg-neutral-50 shrink-0"
                    >
                      + Add to my Growth Canvas
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Tag Filter Pills */}
        <div className="flex flex-wrap gap-2.5">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(activeTag === tag ? null : tag)}
              className={`text-[10px] font-mono font-bold uppercase tracking-widest px-5 py-2.5 border rounded-sm transition-all duration-150 ${activeTag === tag
                  ? "bg-[#03182B] text-white border-[#03182B]"
                  : "bg-white text-neutral-400 border-neutral-200 hover:border-neutral-400 hover:text-neutral-600"
                }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Canvas summary bar */}
        {canvas.length > 0 && (
          <div className="mt-8 bg-[#03182B] rounded-xl px-8 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-emerald-400 mb-1">
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
              className="shrink-0 bg-white hover:bg-neutral-100 text-[#03182B] font-mono text-[10px] font-bold uppercase tracking-widest px-7 py-3 rounded-sm transition-colors duration-150"
            >
              Enquire about my canvas →
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
