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

function PlusIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
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

  // Read ?canvas= from URL on mount (avoids useSearchParams + Suspense requirement)
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
  const enquiryHref = `/contact?canvas=${selected.join(",")}&primary=${primaryArea.id}`;

  return (
    <div className="flex flex-col lg:flex-row h-screen overflow-hidden bg-[#F7F8FA] font-sans">

      {/* LEFT PANEL */}
      <div className="flex-1 flex flex-col h-full overflow-y-auto">

        {/* HEADER */}
        <header className="sticky top-0 z-20 bg-white border-b border-neutral-100 shrink-0">
          <div className="flex items-center justify-between px-5 sm:px-8 h-14 sm:h-16">

            {/* Logo */}
            <Link href="/" className="flex items-center shrink-0">
              <Image
                src="/logo.svg"
                alt="Axudar"
                width={88}
                height={32}
                className="h-[26px] sm:h-[30px] w-auto object-contain"
                priority
              />
            </Link>

            {/* Breadcrumb — desktop */}
            <div className="hidden md:flex items-center gap-2 text-[11px] font-mono text-neutral-400">
              <Link href="/" className="hover:text-[#03182B] transition-colors duration-150">Home</Link>
              <span className="text-neutral-200">/</span>
              <span className="text-[#03182B] font-bold">{primaryArea.title}</span>
            </div>

            {/* Right actions */}
            <div className="flex items-center gap-3 sm:gap-4">
              {/* Canvas pill — mobile only */}
              <button
                onClick={() => setDrawerOpen(true)}
                className="lg:hidden flex items-center gap-2 bg-[#03182B] text-white text-[10px] font-mono font-bold uppercase tracking-widest px-3.5 py-2 rounded-sm"
              >
                <span className="w-4 h-4 rounded-full bg-emerald-500 flex items-center justify-center text-[9px] font-black shrink-0">
                  {selected.length}
                </span>
                Canvas
              </button>

              {/* Back */}
              <button
                onClick={() => router.back()}
                className="flex items-center gap-1.5 text-neutral-400 hover:text-[#03182B] text-[11px] font-mono font-bold uppercase tracking-widest transition-colors duration-150 whitespace-nowrap"
              >
                <BackArrow className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Back</span>
              </button>
            </div>
          </div>

          {/* Breadcrumb strip — mobile */}
          <div className="md:hidden border-t border-neutral-100 px-5 py-2 flex items-center gap-1.5 text-[10px] font-mono text-neutral-400">
            <Link href="/" className="hover:text-[#03182B] transition-colors">Home</Link>
            <span className="text-neutral-200">/</span>
            <span className="text-[#03182B] font-bold truncate">{primaryArea.title}</span>
          </div>
        </header>

        {/* MAIN CONTENT */}
        <div className="flex-1 px-5 sm:px-8 md:px-14 py-10 md:py-14 pb-32 lg:pb-14">

          <p className="text-emerald-600 font-mono font-bold text-[9.5px] uppercase tracking-[3px] mb-4">
            Step 02 — Your Recommended Support
          </p>

          <h1 className="text-[#03182B] font-black text-[30px] sm:text-[40px] md:text-[46px] uppercase leading-[1.0] tracking-tight mb-4">
            Recommended<br />Support.
          </h1>

          <p className="text-neutral-400 text-[13px] font-light leading-relaxed mb-10 max-w-lg">
            To help you{" "}
            <strong className="text-[#03182B] font-semibold">win more customers</strong>
            , these are the areas we recommend. Keep, remove or add any area.
          </p>

          {/* PRIMARY AREA */}
          <div className="mb-8">
            <p className="text-[9px] font-mono font-bold uppercase tracking-[3px] text-neutral-400 mb-3">
              Primary Area
            </p>
            <div className="bg-white border border-emerald-300 rounded-xl p-4 sm:p-5 flex items-center gap-4">
              <div className="w-5 h-5 rounded-sm bg-emerald-500 flex items-center justify-center shrink-0">
                <CheckIcon className="w-3 h-3 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[#03182B] font-bold text-[14px] sm:text-[15px] leading-tight truncate">
                  {primaryArea.title}
                </p>
                <p className="text-neutral-400 text-[11.5px] sm:text-[12px] font-light mt-0.5 leading-snug">
                  {primaryArea.shortDescription}
                </p>
              </div>
              <span className="shrink-0 text-[8.5px] font-mono font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-sm">
                Primary
              </span>
            </div>
          </div>

          {/* SUPPORTING AREAS */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <p className="text-[9px] font-mono font-bold uppercase tracking-[3px] text-neutral-400">
                Supporting Areas
              </p>
              <p className="text-[9px] font-mono text-neutral-300 sm:hidden">
                Tap to add
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {supporting.map((area) => {
                const isChecked = selected.includes(area.id);
                return (
                  <button
                    key={area.id}
                    onClick={() => toggle(area.id)}
                    className={[
                      "text-left bg-white rounded-xl w-full border overflow-hidden transition-all duration-150 active:scale-[0.99]",
                      isChecked
                        ? "border-emerald-300 ring-1 ring-emerald-100"
                        : "border-neutral-200 hover:border-neutral-300",
                    ].join(" ")}
                  >
                    <div className="flex items-stretch">
                      {/* Left accent bar */}
                      <div
                        className={[
                          "w-1 shrink-0 transition-colors duration-200",
                          isChecked ? "bg-emerald-500" : "bg-neutral-100",
                        ].join(" ")}
                      />

                      {/* Content */}
                      <div className="flex-1 flex items-center gap-3 px-4 py-4 sm:px-5 sm:py-5">
                        {/* Checkbox */}
                        <div
                          className={[
                            "w-6 h-6 sm:w-5 sm:h-5 rounded-sm border-2 flex items-center justify-center shrink-0 transition-all duration-150",
                            isChecked ? "bg-emerald-500 border-emerald-500" : "border-neutral-300",
                          ].join(" ")}
                        >
                          {isChecked && <CheckIcon className="w-3 h-3 text-white" />}
                        </div>

                        {/* Text */}
                        <div className="flex-1 min-w-0 text-left">
                          <div className="flex items-center justify-between gap-2">
                            <p className="text-[#03182B] font-bold text-[13.5px] sm:text-[13px] leading-tight">
                              {area.title}
                            </p>
                            {isChecked && (
                              <span className="shrink-0 text-[8px] font-mono font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-sm">
                                Added
                              </span>
                            )}
                          </div>
                          <p className="text-neutral-400 text-[12px] font-light mt-1 leading-snug">
                            {area.shortDescription}
                          </p>
                        </div>

                        {/* Plus icon hint — mobile only, unchecked */}
                        {!isChecked && (
                          <PlusIcon className="sm:hidden w-4 h-4 text-neutral-300 shrink-0" />
                        )}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDEBAR — desktop */}
      <div className="hidden lg:flex flex-col w-[340px] xl:w-[380px] bg-[#03182B] h-full shrink-0">
        <div className="h-16 border-b border-white/10 px-8 flex items-center shrink-0">
          <p className="text-white/30 font-mono font-bold text-[9px] uppercase tracking-[3px]">
            Your Growth Canvas
          </p>
        </div>

        <div className="flex flex-col flex-1 overflow-y-auto px-8 py-10">
          <h2 className="text-white font-black text-[17px] uppercase leading-tight tracking-tight mb-8">
            Your Recommended<br />Support
          </h2>

          <div className="flex flex-col flex-1">
            {canvasItems.map((item) => (
              <div key={item.id} className="flex items-center gap-3 border-b border-white/[0.07] py-4 group">
                <span className="text-white/25 font-mono font-bold text-[10px] w-6 shrink-0">
                  {item.number}
                </span>
                <span className="text-white font-medium text-[13px] flex-1 leading-snug">
                  {item.title}
                </span>
                {item.id !== primaryArea.id ? (
                  <button
                    onClick={() => toggle(item.id)}
                    className="text-white/20 hover:text-white/70 text-[11px] transition-colors duration-150 opacity-0 group-hover:opacity-100 px-1"
                    aria-label="Remove"
                  >
                    ✕
                  </button>
                ) : (
                  <span className="text-emerald-500/50 text-[8px] font-mono font-bold uppercase tracking-widest">
                    Primary
                  </span>
                )}
              </div>
            ))}
          </div>

          <p className="text-white/25 text-[11px] font-light leading-relaxed mt-6 mb-6">
            {selected.length === 1
              ? "Select supporting areas to build a joined-up growth plan."
              : `${selected.length} areas selected — we'll help you prioritise.`}
          </p>

          <Link
            href={enquiryHref}
            className="block w-full bg-emerald-500 hover:bg-emerald-600 text-white font-mono font-bold text-[10.5px] uppercase tracking-widest px-6 py-4 text-center rounded-sm transition-colors duration-150"
          >
            Discuss My Canvas →
          </Link>

          <p className="text-white/20 text-[10px] font-light text-center mt-4 leading-relaxed">
            No commitment. We&apos;ll reply within 1 working day.
          </p>
        </div>
      </div>

      {/* MOBILE CANVAS DRAWER */}
      {drawerOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setDrawerOpen(false)}
          />
          <div className="relative ml-auto w-full max-w-[340px] bg-[#03182B] h-full flex flex-col animate-in slide-in-from-right duration-300">
            <div className="h-14 border-b border-white/10 px-6 flex items-center justify-between shrink-0">
              <p className="text-white/40 font-mono font-bold text-[9px] uppercase tracking-[3px]">
                Your Canvas
              </p>
              <button
                onClick={() => setDrawerOpen(false)}
                className="text-white/40 hover:text-white text-lg transition-colors duration-150"
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            <div className="flex flex-col flex-1 overflow-y-auto px-6 py-8">
              <h2 className="text-white font-black text-[16px] uppercase leading-tight tracking-tight mb-7">
                Your Recommended<br />Support
              </h2>

              <div className="flex flex-col flex-1">
                {canvasItems.map((item) => (
                  <div key={item.id} className="flex items-center gap-3 border-b border-white/[0.07] py-4 group">
                    <span className="text-white/25 font-mono font-bold text-[10px] w-6 shrink-0">
                      {item.number}
                    </span>
                    <span className="text-white font-medium text-[13px] flex-1 leading-snug">
                      {item.title}
                    </span>
                    {item.id !== primaryArea.id ? (
                      <button
                        onClick={() => toggle(item.id)}
                        className="text-white/30 hover:text-white/70 text-[11px] transition-colors duration-150 px-1"
                        aria-label="Remove"
                      >
                        ✕
                      </button>
                    ) : (
                      <span className="text-emerald-500/50 text-[8px] font-mono font-bold uppercase tracking-widest">
                        Primary
                      </span>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-auto pt-8">
                <Link
                  href={enquiryHref}
                  onClick={() => setDrawerOpen(false)}
                  className="block w-full bg-emerald-500 hover:bg-emerald-600 text-white font-mono font-bold text-[10.5px] uppercase tracking-widest px-6 py-4 text-center rounded-sm transition-colors duration-150"
                >
                  Discuss My Canvas →
                </Link>
                <p className="text-white/20 text-[10px] font-light text-center mt-4 leading-relaxed">
                  No commitment. We&apos;ll reply within 1 working day.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
