"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { areas, AreaData } from "@/components/home/areasData";

interface Props {
  primaryArea: AreaData;
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function BackArrow({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
    </svg>
  );
}

export function GrowthCanvasSelector({ primaryArea }: Props) {
  const router = useRouter();
  const supporting = areas.filter((a) => a.id !== primaryArea.id);
  const [selected, setSelected] = useState<string[]>([primaryArea.id]);
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Read ?canvas= from URL on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const canvasParam = params.get("canvas");
    if (!canvasParam) return;
    const ids = canvasParam
      .split(",")
      .filter((id) => areas.some((a) => a.id === id));
    if (ids.length) {
      setSelected(Array.from(new Set([primaryArea.id, ...ids])));
    }
  }, [primaryArea.id]);

  const toggle = (id: string) => {
    if (id === primaryArea.id) return;
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const canvasItems = areas.filter((a) => selected.includes(a.id));

  // Build contact URL
  const enquiryHref = (() => {
    const params = new URLSearchParams();
    params.set("title", primaryArea.title);
    params.set("price", "Growth Canvas");
    const pillLabels = canvasItems.map((a) => a.title).join(",");
    params.set("pills", pillLabels);
    params.set("canvas", selected.join(","));
    params.set("primary", primaryArea.id);
    return `/contact?${params.toString()}`;
  })();

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-[#111111]">
      <div className="mx-auto max-w-[1500px] p-6 md:p-12 lg:p-16">

        {/* TOP BACK BUTTON & HEADER */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-neutral-500 hover:text-black text-[13px] font-semibold transition-colors duration-150"
          >
            <BackArrow className="w-4 h-4" />
            <span>Back</span>
          </button>

          {/* Mobile Canvas Drawer Toggle */}
          <button
            onClick={() => setDrawerOpen(true)}
            className="lg:hidden flex items-center gap-2 bg-black text-white text-[11px] font-bold uppercase tracking-wider px-4 py-2 rounded-xs"
          >
            <span className="w-4 h-4 rounded-full bg-[#10b981] text-black flex items-center justify-center text-[9px] font-extrabold">
              {selected.length}
            </span>
            Canvas
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* ── LEFT CONTENT PANEL ── */}
          <div className="lg:col-span-7 xl:col-span-8">
            <p className="text-[#10b981]  font-bold text-[10px] uppercase tracking-[3px] mb-4">
              Step 02 — Your Recommended Support
            </p>

            <h1 className="text-[#03182B] font-extrabold text-[36px] sm:text-[48px] lg:text-[54px] uppercase leading-[0.98] tracking-tight mb-6">
              Recommended<br />Support.
            </h1>

            <div className="text-neutral-500 text-[13.5px] leading-relaxed mb-8 max-w-xl space-y-1">
              <p>
                To help you <strong className="text-[#03182B] font-bold">win more customers</strong>, these are the areas we recommend focusing on.
              </p>
              <p>Keep, remove or add any area.</p>
            </div>

            {/* PRIMARY AREA CARD */}
            <div className="mb-8">
              <p className="text-[10px]  font-bold uppercase tracking-[2.5px] text-[#10b981] mb-3">
                Primary Area
              </p>
              <div className="bg-[#f0fdf8] border-2 border-[#10b981] rounded-xs p-5 flex items-start gap-4">
                <div className="w-5 h-5 bg-[#10b981] rounded-2xs flex items-center justify-center shrink-0 mt-0.5">
                  <CheckIcon className="w-3.5 h-3.5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-[#03182B] font-bold text-[15px] leading-snug">
                    {primaryArea.title}
                  </h3>
                  <p className="text-neutral-500 text-[12.5px] mt-1 leading-normal">
                    {primaryArea.shortDescription}
                  </p>
                </div>
              </div>
            </div>

            {/* SUPPORTING AREAS GRID */}
            <div>
              <p className="text-[10px]  font-bold uppercase tracking-[2.5px] text-neutral-400 mb-4">
                Supporting Areas
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {supporting.map((area) => {
                  const isChecked = selected.includes(area.id);
                  return (
                    <button
                      key={area.id}
                      type="button"
                      onClick={() => toggle(area.id)}
                      className={[
                        "text-left rounded-xs p-5 transition-all duration-150 flex flex-col justify-between border",
                        isChecked
                          ? "bg-white border-neutral-300 shadow-2xs"
                          : "bg-[#f2f4f6]/70 border-transparent hover:border-neutral-200",
                      ].join(" ")}
                    >
                      <div className="flex items-start gap-3.5 mb-3">
                        <div
                          className={[
                            "w-4 h-4 rounded-2xs border flex items-center justify-center shrink-0 mt-0.5 transition-all",
                            isChecked
                              ? "border-neutral-400 bg-white"
                              : "border-neutral-300 bg-white",
                          ].join(" ")}
                        >
                          {isChecked && (
                            <CheckIcon className="w-3 h-3 text-neutral-600" />
                          )}
                        </div>
                        <div>
                          <p className="text-[#03182B] font-bold text-[14px] leading-tight">
                            {area.title}
                          </p>
                          <p className="text-neutral-500 text-[12px] mt-1 leading-snug">
                            {area.shortDescription}
                          </p>
                        </div>
                      </div>

                      {isChecked && (
                        <span className="text-[#10b981]  text-[9px] font-bold uppercase tracking-wider ml-7">
                          Suggested
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* ── RIGHT CANVAS PANEL (Desktop) ── */}
          <div className="hidden lg:block lg:col-span-5 xl:col-span-4 sticky top-12">
            <div className="bg-black text-white p-7 sm:p-8 rounded-xs shadow-2xl border border-neutral-900">
              <p className="text-[#10b981]  font-bold text-[9px] uppercase tracking-[2.5px] mb-3">
                Your Growth Canvas
              </p>

              <h2 className="text-white font-extrabold text-[18px] sm:text-[20px] uppercase leading-tight tracking-tight mb-6">
                Your Recommended Support
              </h2>

              {/* Items List as White Floating Boxes */}
              <div className="space-y-3 mb-8">
                {canvasItems.map((item, idx) => (
                  <div
                    key={item.id}
                    className="bg-white text-[#111111] p-4 rounded-xs flex items-center justify-between gap-3 shadow-xs"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span className="text-[#10b981]  font-bold text-[12px] shrink-0">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <span className="font-bold text-[13.5px] truncate">
                        {item.title}
                      </span>
                    </div>

                    {item.id !== primaryArea.id && (
                      <button
                        type="button"
                        onClick={() => toggle(item.id)}
                        className="text-neutral-400 hover:text-black text-xs px-1 transition-colors"
                        aria-label="Remove item"
                      >
                        ✕
                      </button>
                    )}
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Link
                href={enquiryHref}
                className="w-full bg-[#10b981] hover:bg-[#0ea5e9] text-black  font-bold text-[11px] uppercase tracking-widest px-5 py-4 flex items-center justify-between rounded-2xs transition-colors duration-150"
              >
                <span>Discuss My Canvas</span>
                <span className="text-sm font-bold">↗</span>
              </Link>
            </div>
          </div>

        </div>

      </div>

      {/* MOBILE DRAWER */}
      {drawerOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-xs"
            onClick={() => setDrawerOpen(false)}
          />
          <div className="relative ml-auto w-full max-w-[340px] bg-black text-white h-full p-6 flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-neutral-800 mb-6">
                <p className="text-[#10b981]  font-bold text-[9px] uppercase tracking-[2.5px]">
                  Your Growth Canvas
                </p>
                <button
                  type="button"
                  onClick={() => setDrawerOpen(false)}
                  className="text-neutral-400 hover:text-white text-lg"
                >
                  ✕
                </button>
              </div>

              <h2 className="text-white font-extrabold text-[18px] uppercase leading-tight mb-6">
                Your Recommended Support
              </h2>

              <div className="space-y-3 mb-6">
                {canvasItems.map((item, idx) => (
                  <div
                    key={item.id}
                    className="bg-white text-[#111111] p-3.5 rounded-xs flex items-center justify-between gap-3"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span className="text-[#10b981]  font-bold text-[11px] shrink-0">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <span className="font-bold text-[13px] truncate">
                        {item.title}
                      </span>
                    </div>

                    {item.id !== primaryArea.id && (
                      <button
                        type="button"
                        onClick={() => toggle(item.id)}
                        className="text-neutral-400 hover:text-black text-xs px-1"
                      >
                        ✕
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <Link
              href={enquiryHref}
              onClick={() => setDrawerOpen(false)}
              className="w-full bg-[#10b981] text-black  font-bold text-[11px] uppercase tracking-widest px-5 py-4 flex items-center justify-between rounded-2xs"
            >
              <span>Discuss My Canvas</span>
              <span className="text-sm font-bold">↗</span>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}