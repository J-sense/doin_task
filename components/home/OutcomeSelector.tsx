"use client";

import React, { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { areas } from "@/components/home/areasData";

interface Outcome {
  id: string;
  label: string;
  areaIds: string[];
}

const outcomes: Outcome[] = [
  { id: "win-customers",     label: "Win more customers",       areaIds: ["business-growth", "marketing"] },
  { id: "increase-revenue",  label: "Increase revenue",          areaIds: ["business-growth"] },
  { id: "improve-profit",    label: "Improve profitability",     areaIds: ["business-growth", "strategy-planning"] },
  { id: "more-enquiries",    label: "Generate more enquiries",   areaIds: ["marketing", "seo-ai-visibility"] },
  { id: "convert-enquiries", label: "Convert more enquiries",    areaIds: ["website-conversion", "marketing"] },
  { id: "online-visibility", label: "Improve online visibility", areaIds: ["seo-ai-visibility", "social-media"] },
  { id: "improve-website",   label: "Improve our website",       areaIds: ["website-conversion"] },
  { id: "improve-marketing", label: "Improve our marketing",     areaIds: ["marketing", "social-media"] },
  { id: "social-presence",   label: "Grow social presence",      areaIds: ["social-media", "marketing"] },
  { id: "clearer-strategy",  label: "Create a clearer strategy", areaIds: ["strategy-planning"] },
  { id: "scale-business",    label: "Scale the business",        areaIds: ["business-growth", "strategy-planning"] },
  { id: "not-sure",          label: "Not sure where to start",   areaIds: ["business-growth"] },
];

function deriveAreas(selectedIds: string[]) {
  if (!selectedIds.length) return { primary: "business-growth", canvas: [] as string[] };
  const votes: Record<string, number> = {};
  for (const sid of selectedIds) {
    const o = outcomes.find((o) => o.id === sid);
    if (!o) continue;
    for (const aid of o.areaIds) votes[aid] = (votes[aid] ?? 0) + 1;
  }
  const ranked = areas
    .filter((a) => votes[a.id])
    .sort((a, b) => (votes[b.id] ?? 0) - (votes[a.id] ?? 0));
  if (!ranked.length) return { primary: "business-growth", canvas: [] as string[] };
  return { primary: ranked[0].id, canvas: ranked.map((a) => a.id) };
}

/* Split outcomes into two columns */
const col1 = outcomes.filter((_, i) => i % 2 === 0);
const col2 = outcomes.filter((_, i) => i % 2 === 1);

export function OutcomeSelector() {
  const router = useRouter();
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (id: string) =>
    setSelected((prev) => prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]);

  const { primary, canvas } = useMemo(() => deriveAreas(selected), [selected]);
  const suggestedAreas = useMemo(() => areas.filter((a) => canvas.includes(a.id)), [canvas]);

  const handleDiscuss = () => {
    const params = new URLSearchParams({ canvas: canvas.join(",") });
    router.push(`/area/${primary}?${params.toString()}`);
  };

  return (
    <section className="w-full bg-white py-20 lg:py-28 px-6 md:px-12 border-t border-neutral-100">
      <div className="mx-auto max-w-[1700px]">

        {/* Section header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-10">
          <div>
            <h2 className="text-[#03182B] font-sans font-black text-[24px] sm:text-[30px] leading-[1.15] tracking-tight">
              Start with the outcome.<br />
              Shape the right support.
            </h2>
          </div>
          <div className="lg:pt-1">
            <p className="text-neutral-500 text-[13.5px] font-light leading-relaxed max-w-lg">
              You do not need to know which service you need. Choose the change
              you want, review Axudar&apos;s suggested support areas, then add or
              remove anything before the first conversation.
            </p>
          </div>
        </div>

        {/* Card */}
        <div className="border border-neutral-200 rounded-2xl overflow-hidden">
          <div className="flex flex-col lg:flex-row">

            {/* ── LEFT: checkboxes ── */}
            <div className="flex-1 bg-white">
              {/* Card inner label */}
              <div className="px-6 sm:px-8 pt-6 pb-4 border-b border-neutral-100">
                <p className="text-[12px] font-sans font-semibold text-neutral-600">
                  What would you like to achieve?
                </p>
              </div>

              {/* 2-col checkbox grid */}
              <div className="flex divide-x divide-neutral-100">
                {/* Column 1 */}
                <div className="flex-1 flex flex-col divide-y divide-neutral-100">
                  {col1.map((outcome) => {
                    const checked = selected.includes(outcome.id);
                    return (
                      <button
                        key={outcome.id}
                        onClick={() => toggle(outcome.id)}
                        className={[
                          "flex items-center gap-3 px-6 sm:px-8 py-4 text-left w-full transition-colors duration-150",
                          checked ? "bg-neutral-50" : "bg-white hover:bg-neutral-50/60",
                        ].join(" ")}
                      >
                        <div
                          className={[
                            "w-4 h-4 rounded-sm border flex items-center justify-center shrink-0 transition-all duration-150",
                            checked
                              ? "bg-emerald-500 border-emerald-500"
                              : "border-neutral-300 bg-white",
                          ].join(" ")}
                        >
                          {checked && (
                            <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </div>
                        <span className={[
                          "text-[13px] font-sans",
                          checked ? "text-[#03182B] font-medium" : "text-neutral-600",
                        ].join(" ")}>
                          {outcome.label}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Column 2 */}
                <div className="flex-1 flex flex-col divide-y divide-neutral-100">
                  {col2.map((outcome) => {
                    const checked = selected.includes(outcome.id);
                    return (
                      <button
                        key={outcome.id}
                        onClick={() => toggle(outcome.id)}
                        className={[
                          "flex items-center gap-3 px-6 sm:px-8 py-4 text-left w-full transition-colors duration-150",
                          checked ? "bg-neutral-50" : "bg-white hover:bg-neutral-50/60",
                        ].join(" ")}
                      >
                        <div
                          className={[
                            "w-4 h-4 rounded-sm border flex items-center justify-center shrink-0 transition-all duration-150",
                            checked
                              ? "bg-emerald-500 border-emerald-500"
                              : "border-neutral-300 bg-white",
                          ].join(" ")}
                        >
                          {checked && (
                            <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </div>
                        <span className={[
                          "text-[13px] font-sans",
                          checked ? "text-[#03182B] font-medium" : "text-neutral-600",
                        ].join(" ")}>
                          {outcome.label}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* ── RIGHT: dark canvas panel ── */}
            <div className="lg:w-[300px] xl:w-[340px] bg-[#03182B] shrink-0 flex flex-col">
              <div className="flex-1 p-7 flex flex-col">

                <p className="text-emerald-500 font-mono font-bold text-[9px] uppercase tracking-[3px] mb-3">
                  Your Growth Canvas
                </p>

                <h3 className="text-white font-black text-[16px] uppercase leading-tight tracking-tight mb-6">
                  Your Recommended<br />Support
                </h3>

                {/* Suggested area list */}
                <div className="flex-1 flex flex-col mb-6 min-h-[80px]">
                  {selected.length === 0 ? (
                    <p className="text-white/25 text-[12px] font-light leading-relaxed">
                      Select outcomes on the left to see your recommended areas.
                    </p>
                  ) : (
                    suggestedAreas.map((area, i) => (
                      <div
                        key={area.id}
                        className="flex items-center gap-3 border-b border-white/[0.07] py-3"
                      >
                        <span className="text-white/30 font-mono font-bold text-[10px] w-5 shrink-0">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <div className="flex-1 min-w-0">
                          <p className="text-white font-medium text-[12.5px] leading-snug truncate">
                            {area.title}
                          </p>
                          {i === 0 && (
                            <span className="text-emerald-400/60 text-[8px] font-mono font-bold uppercase tracking-widest">
                              Primary
                            </span>
                          )}
                        </div>
                      </div>
                    ))
                  )}
                </div>

                {/* CTA button */}
                <button
                  onClick={handleDiscuss}
                  disabled={selected.length === 0}
                  className={[
                    "w-full flex items-center justify-between font-mono font-bold text-[10.5px] uppercase tracking-widest px-5 py-4 transition-all duration-150",
                    selected.length > 0
                      ? "bg-emerald-500 hover:bg-emerald-600 text-white cursor-pointer"
                      : "bg-white/10 text-white/30 cursor-not-allowed",
                  ].join(" ")}
                >
                  <span>Discuss My Canvas</span>
                  <span className="text-base leading-none">×</span>
                </button>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
