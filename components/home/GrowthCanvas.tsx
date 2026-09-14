"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

type OutcomeType =
  | "Win more business"
  | "Be more visible"
  | "Convert more interest"
  | "Build a strong business";

interface Pill {
  id: string;
  num: string;
  label: string;
  description: string;
}

export function GrowthCanvas() {
  const [selectedOutcome, setSelectedOutcome] =
    useState<OutcomeType>("Win more business");
  const [activePillIds, setActivePillIds] = useState<string[]>([]);

  const outcomes: OutcomeType[] = [
    "Win more business",
    "Be more visible",
    "Convert more interest",
    "Build a strong business",
  ];

  const allPills: Pill[] = [
    {
      id: "strategy",
      num: "01",
      label: "Strategy & Planning",
      description:
        "Direction, priorities, positioning and a practical roadmap.",
    },
    {
      id: "seo",
      num: "02",
      label: "SEO & AI Visibility",
      description:
        "Search, local discovery and visibility in AI-generated answers.",
    },
    {
      id: "social",
      num: "03",
      label: "Social & Content",
      description: "Consistent content that builds attention, trust and reach.",
    },
    {
      id: "website",
      num: "04",
      label: "Website & Conversion",
      description:
        "Clear journeys that turn interest into enquiries and opportunities.",
    },
    {
      id: "campaigns",
      num: "05",
      label: "Campaigns & Leads",
      description: "Focused demand generation, landing journeys and follow-up.",
    },
    {
      id: "commercial",
      num: "06",
      label: "Commercial Growth",
      description:
        "Pipeline discipline, sales performance and measurable growth.",
    },
  ];

  // Recommendations mapping (Matches Figma screenshot: Win more business -> Strategy, Campaigns, Commercial)
  const recommendationsMap: Record<OutcomeType, string[]> = {
    "Win more business": ["strategy", "campaigns", "commercial"],
    "Be more visible": ["seo", "social", "website"],
    "Convert more interest": ["website", "campaigns", "commercial"],
    "Build a strong business": ["strategy", "social", "commercial"],
  };

  // Sync active pills when dropdown selection changes
  useEffect(() => {
    setActivePillIds(recommendationsMap[selectedOutcome]);
  }, [selectedOutcome]);

  const togglePill = (id: string) => {
    if (activePillIds.includes(id)) {
      setActivePillIds(activePillIds.filter((p) => p !== id));
    } else {
      setActivePillIds([...activePillIds, id]);
    }
  };

  return (
    <section id="growth-canvas" className="relative w-full bg-white py-20 lg:py-28 px-6 md:px-12 lg:px-20 overflow-hidden border-t border-neutral-100">
      <div className="mx-auto max-w-[1700px]">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          <div className="lg:col-span-7">
            <h2 className=" font-black text-[28px] sm:text-[36px] lg:text-[40px] leading-[1.1] text-[#262626] uppercase tracking-tight">
              Start with the outcome.
              <br />
              Shape the right support.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pt-4">
            <p className="text-neutral-500 text-sm sm:text-base font-light leading-relaxed">
              You do not need to know which service you need. Choose the change
              you want, review Axudar’s suggested support areas, then add or
              remove anything before the first conversation.
            </p>
          </div>
        </div>

        {/* Workspace Card Grid */}
        <div className="bg-[#F8FAFC] rounded-2xl border border-neutral-200/60 p-6 sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            {/* Left Side: interactive selector */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <h3 className="text-[#03182B]  font-bold text-sm sm:text-base mb-4">
                  What would you like to achieve?
                </h3>

                {/* Select Dropdown */}
                <div className="relative w-full mb-8">
                  <select
                    value={selectedOutcome}
                    onChange={(e) =>
                      setSelectedOutcome(e.target.value as OutcomeType)
                    }
                    className="w-full bg-white border border-neutral-200 rounded-lg px-4 py-4 pr-10  text-sm text-[#03182B] font-medium appearance-none cursor-pointer focus:outline-none focus:border-[#00dfb6] shadow-sm"
                  >
                    {outcomes.map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                  {/* Chevron SVG */}
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4 text-[#03182B]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="size-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </div>
                </div>

                {/* Growth Options Pills Wrapper */}
                <div className="flex flex-wrap gap-3">
                  {allPills.map((pill) => {
                    const isActive = activePillIds.includes(pill.id);
                    return (
                      <button
                        key={pill.id}
                        onClick={() => togglePill(pill.id)}
                        className={`px-4 py-3 rounded-[5px]  text-[10.5px] font-bold uppercase tracking-wider transition-all duration-200 select-none ${isActive
                          ? "bg-[#03182B] text-white border border-[#03182B] shadow-sm hover:bg-[#0c1a24]"
                          : "bg-[#F8FAFC] border border-neutral-200/80 text-neutral-400 hover:border-neutral-300 hover:text-neutral-500"
                          }`}
                      >
                        {pill.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Side: Recommendation Board */}
            <div className="lg:col-span-5 bg-white border border-neutral-200/50 rounded-xl p-6 sm:p-8 flex flex-col justify-between shadow-sm">
              <div>
                <span className="text-[#00dfb6] text-[8px]  font-bold uppercase tracking-[2.75px] block mb-2">
                  YOUR GROWTH CANVAS
                </span>
                <h4 className="text-[#03182B]  font-black text-base sm:text-lg uppercase tracking-tight mb-6">
                  YOUR RECOMMENDED SUPPORT
                </h4>

                {/* Recommended list */}
                <div className="flex flex-col gap-3 min-h-[160px]">
                  {allPills
                    .filter((p) => activePillIds.includes(p.id))
                    .map((p, idx) => (
                      <div
                        key={p.id}
                        className="flex items-center gap-4 bg-[#F8FAFC] border-l-[3px] border-emerald-500 px-4 py-3.5 rounded-r-md transition-all duration-300 animate-fadeIn"
                      >
                        <span className="text-emerald-500  font-black text-[10px] tracking-wide">
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        <span className="text-[#03182B]  font-semibold text-xs">
                          {p.label}
                        </span>
                      </div>
                    ))}
                  {activePillIds.length === 0 && (
                    <div className="flex items-center justify-center h-[160px] border border-dashed border-neutral-200 rounded-lg">
                      <span className="text-neutral-400  text-xs">
                        Select options to build your custom support canvas.
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Discuss Canvas Button */}
              <Link
                href={`/contact?title=${encodeURIComponent(
                  `Growth Canvas (${selectedOutcome})`
                )}&price=${encodeURIComponent(
                  "Custom Strategy & Execution"
                )}&pills=${encodeURIComponent(activePillIds.join(","))}`}
                className="w-full bg-[#0DAE87] hover:bg-[#18d1ad] transition-colors duration-200 text-[#03182B]  font-bold text-xs uppercase tracking-widest py-4 rounded-lg flex items-center justify-center gap-2 mt-8 text-center"
              >
                <span className="text-[#00142D]">Discuss my Canvas</span>
                <span>➔</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
