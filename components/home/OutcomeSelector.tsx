"use client";

import React, { useState, useMemo, useEffect } from "react";
import { useRouter } from "next/navigation";
import { areas } from "@/components/home/areasData";

interface Outcome {
  id: string;
  label: string;
  areaIds: string[];
}

const outcomes: Outcome[] = [
  { id: "win-customers", label: "Win more customers", areaIds: ["business-growth", "marketing"] },
  { id: "increase-revenue", label: "Increase revenue", areaIds: ["business-growth"] },
  { id: "improve-profit", label: "Improve profitability", areaIds: ["business-growth", "strategy-planning"] },
  { id: "more-enquiries", label: "Generate more enquiries", areaIds: ["marketing", "seo-ai-visibility"] },
  { id: "better-quality-enquiries", label: "Generate better quality enquiries", areaIds: ["marketing", "seo-ai-visibility", "strategy-planning"] },
  { id: "convert-enquiries", label: "Convert more enquiries into customers", areaIds: ["website-conversion", "marketing"] },
  { id: "online-visibility", label: "Improve online visibility", areaIds: ["seo-ai-visibility", "social-media"] },
  { id: "improve-website", label: "Get more from our website", areaIds: ["website-conversion"] },
  { id: "improve-marketing", label: "Improve our marketing", areaIds: ["marketing", "social-media"] },
  { id: "social-presence", label: "Build our social presence", areaIds: ["social-media", "marketing"] },
  { id: "clearer-strategy", label: "Create a clearer growth strategy", areaIds: ["strategy-planning"] },
  { id: "scale-business", label: "Scale the business", areaIds: ["business-growth", "strategy-planning"] },
  { id: "not-sure", label: "Not sure where to start", areaIds: ["business-growth"] },
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

export function OutcomeSelector() {
  const router = useRouter();
  const [selected, setSelected] = useState<string[]>([]);
  const [manualAdd, setManualAdd] = useState<string[]>([]);
  const [manualRemove, setManualRemove] = useState<string[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const savedOutcomes = sessionStorage.getItem("canvas_outcomes");
    const savedAdd = sessionStorage.getItem("canvas_add");
    const savedRemove = sessionStorage.getItem("canvas_remove");
    if (savedOutcomes) {
      try { setSelected(JSON.parse(savedOutcomes)); } catch (e) {}
    }
    if (savedAdd) {
      try { setManualAdd(JSON.parse(savedAdd)); } catch (e) {}
    }
    if (savedRemove) {
      try { setManualRemove(JSON.parse(savedRemove)); } catch (e) {}
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      sessionStorage.setItem("canvas_outcomes", JSON.stringify(selected));
      sessionStorage.setItem("canvas_add", JSON.stringify(manualAdd));
      sessionStorage.setItem("canvas_remove", JSON.stringify(manualRemove));
    }
  }, [selected, manualAdd, manualRemove, isLoaded]);

  const toggle = (id: string) => {
    setSelected((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  };

  const removeArea = (areaId: string) => {
    setManualRemove((prev) => [...prev, areaId]);
    setManualAdd((prev) => prev.filter(id => id !== areaId));
  };

  const { primary, canvas: derivedCanvas } = useMemo(() => deriveAreas(selected), [selected]);
  
  const finalCanvas = useMemo(() => {
    let result = [...derivedCanvas];
    for (const addId of manualAdd) {
      if (!result.includes(addId)) result.push(addId);
    }
    result = result.filter(id => !manualRemove.includes(id));
    return result;
  }, [derivedCanvas, manualAdd, manualRemove]);

  const suggestedAreas = useMemo(() => areas.filter((a) => finalCanvas.includes(a.id)), [finalCanvas]);

  const handleDiscuss = () => {
    const params = new URLSearchParams();
    params.set("title", "Growth Canvas");
    params.set("price", "Custom Strategy & Execution");
    const pillLabels = suggestedAreas.map((a) => a.title).join(",");
    params.set("pills", pillLabels);
    params.set("canvas", finalCanvas.join(","));
    router.push(`/contact?${params.toString()}`);
  };

  const gridOutcomes = outcomes.filter((o) => o.id !== "not-sure");
  const fullWidthOutcome = outcomes.find((o) => o.id === "not-sure");

  return (
    <section className="w-full bg-white py-16 md:py-24 px-6 md:px-12">
      <div className="mx-auto max-w-[1400px]">

        {/* ── Top Section Header ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          <div className="lg:col-span-6">
            <h2 className="text-[#111111] font-sans font-extrabold text-[28px] sm:text-[36px] lg:text-[40px] leading-[1.1] tracking-tight">
              Start with the outcome.<br />
              Shape the right support.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:pl-12 lg:pt-1">
            <p className="text-neutral-500 text-[14px] sm:text-[15px] font-normal leading-relaxed max-w-xl">
              You do not need to know which service you need. Choose the change
              you want, review Axudar&apos;s suggested support areas, then add or
              remove anything before the first conversation.
            </p>
          </div>
        </div>

        {/* ── Main Canvas Wrapper Card ── */}
        <div className="bg-[#f8f9fa] rounded-2xl p-6 sm:p-10 lg:p-12">

          <h3 className="text-[16px] font-sans font-bold text-[#111111] mb-6 uppercase tracking-wider">
            WHAT DO YOU WANT TO CHANGE?
          </h3>

          <div className="flex flex-col lg:flex-row gap-8 items-start">

            {/* ── LEFT: Checkboxes area ── */}
            <div className="flex-1 w-full space-y-3">

              {/* 2-Column Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {gridOutcomes.map((outcome) => {
                  const checked = selected.includes(outcome.id);
                  return (
                    <button
                      key={outcome.id}
                      type="button"
                      onClick={() => toggle(outcome.id)}
                      className={[
                        "flex items-center gap-3.5 px-5 py-4 rounded-xs border text-left transition-all duration-150 bg-white",
                        checked
                          ? "border-emerald-500 ring-1 ring-emerald-500 shadow-xs"
                          : "border-neutral-200/80 hover:border-neutral-300 shadow-[0_1px_2px_rgba(0,0,0,0.02)]",
                      ].join(" ")}
                    >
                      <div
                        className={[
                          "w-4 h-4 rounded-2xs border flex items-center justify-center shrink-0 transition-all duration-150",
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
                        "text-[13.5px] font-sans transition-colors",
                        checked ? "text-[#111111] font-semibold" : "text-[#061B2DBF] font-medium",
                      ].join(" ")}>
                        {outcome.label}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Full Width Item ("Not sure where to start") */}
              {fullWidthOutcome && (
                <button
                  key={fullWidthOutcome.id}
                  type="button"
                  onClick={() => toggle(fullWidthOutcome.id)}
                  className={[
                    "flex items-center gap-3.5 px-5 py-4 rounded-xs border text-left transition-all duration-150 bg-white w-full",
                    selected.includes(fullWidthOutcome.id)
                      ? "border-emerald-500 ring-1 ring-emerald-500 shadow-xs"
                      : "border-neutral-200/80 hover:border-neutral-300 shadow-[0_1px_2px_rgba(0,0,0,0.02)]",
                  ].join(" ")}
                >
                  <div
                    className={[
                      "w-4 h-4 rounded-2xs border flex items-center justify-center shrink-0 transition-all duration-150",
                      selected.includes(fullWidthOutcome.id)
                        ? "bg-emerald-500 border-emerald-500"
                        : "border-neutral-300 bg-white",
                    ].join(" ")}
                  >
                    {selected.includes(fullWidthOutcome.id) && (
                      <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                  <span className={[
                    "text-[13.5px] font-sans transition-colors",
                    selected.includes(fullWidthOutcome.id) ? "text-[#111111] font-semibold" : "text-neutral-700 font-medium",
                  ].join(" ")}>
                    {fullWidthOutcome.label}
                  </span>
                </button>
              )}

            </div>

            {/* ── RIGHT: Dark Canvas Card Panel ── */}
            <div className="w-full lg:w-[320px] xl:w-[350px] bg-black text-white shrink-0 rounded-md p-6 sm:p-7 shadow-2xl flex flex-col justify-between min-h-[220px]">
              <div>
                <p className="text-[#00c988] font-mono font-bold text-[9px] uppercase tracking-[2.5px] mb-3">
                  Your Growth Canvas
                </p>

                <h4 className="text-white font-extrabold text-[16px] sm:text-[18px] uppercase leading-tight tracking-tight mb-5">
                  Your Recommended<br />Support
                </h4>

                {/* Dynamically populated list */}
                <div className="space-y-2.5 mb-6">
                  {suggestedAreas.map((area, i) => {
                    const isPrimary = area.id === primary;
                    return (
                      <div
                        key={area.id}
                        className="bg-white text-[#111111] p-3 rounded-xs flex items-center justify-between gap-2 shadow-xs mb-2"
                      >
                        <div className="flex items-center gap-2 min-w-0">
                          <span className="text-[#10b981] font-bold text-[11px] shrink-0">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span className="font-bold text-[12px] truncate">
                            {area.title}
                          </span>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          {isPrimary && (
                            <span className="text-[#00c988] bg-[#00c988]/10 border border-[#00c988]/30 text-[8px] font-mono font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-xs shrink-0">
                              Primary
                            </span>
                          )}
                          <button
                            type="button"
                            onClick={() => removeArea(area.id)}
                            className="text-neutral-400 hover:text-red-500 text-xs px-1 transition-colors"
                            aria-label="Remove item"
                          >
                            ✕
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Action Button */}
              <button
                type="button"
                onClick={handleDiscuss}
                disabled={selected.length === 0}
                className={[
                  "w-full bg-[#0DAE87] flex items-center justify-between font-extrabold text-[16px] uppercase tracking-wider px-4 py-3.5 transition-all duration-150 rounded-2xs",
                  selected.length > 0
                    ? "bg-[#00c988] hover:bg-[#00b378] text-black cursor-pointer"
                    : "bg-[#00c988] opacity-90 text-black cursor-pointer",
                ].join(" ")}
              >
                <span className="text-[#00142D]">Discuss My Canvas</span>
                <span className="text-xs font-bold">↗</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}