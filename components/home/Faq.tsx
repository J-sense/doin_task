"use client";

import React, { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

export function Faq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const faqData: FaqItem[] = [
    {
      question: "How is Axudar different from a traditional consulting firm?",
      answer:
        "Traditional consultancies advise. Axudar delivers. We embed our people, systems and methods into your business and stay accountable to measurable outcomes – not slide decks.",
    },
    {
      question: "How long does it take to see results?",
      answer:
        "Initial strategic direction and quick wins are visible within the first 30 days. Full integration and scaling outcomes are tracked over our 12-month partnership model.",
    },
    {
      question: "How long does a fundraiser run?",
      answer:
        "Typically, our growth campaigns and investor readiness programs run in alignment with your funding timeline, taking about 3 to 6 months to mature.",
    },
    {
      question: "Can we start with just one area of the ecosystem?",
      answer:
        "Yes, you can select one clear immediate priority or combine multiple channels. We help tailor a Growth Canvas to customize the exact support outline you need.",
    },
  ];

  const toggleIndex = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative w-full bg-white py-20 lg:py-28 px-6 md:px-12 lg:px-20 overflow-hidden border-t border-neutral-100">
      <div className="mx-auto max-w-7xl">

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left Column - Title */}
          <div className="lg:col-span-5 select-none">
            <h2 className="font-sans font-black text-[28px] sm:text-[36px] lg:text-[48px] leading-[1.1] text-[#03182B] uppercase tracking-tight">
              Before we
              <br />
              get <span className="text-[#00C89A]">started.</span>
            </h2>
          </div>

          {/* Right Column - Accordion */}
          <div className="lg:col-span-7 flex flex-col w-full divide-y divide-neutral-200/80">
            {faqData.map((item, idx) => {
              const isOpen = activeIndex === idx;
              return (
                <div key={idx} className="py-6 first:pt-0 last:pb-0">
                  {/* Question Header */}
                  <button
                    onClick={() => toggleIndex(idx)}
                    className="flex justify-between items-center w-full text-left focus:outline-none group"
                  >
                    <span className="font-sans font-bold text-[#03182B] text-sm sm:text-base tracking-tight transition-colors duration-200 group-hover:text-emerald-600">
                      {item.question}
                    </span>

                    {/* Chevron Icon */}
                    <span className="text-neutral-500 ml-4 shrink-0 transition-transform duration-300">
                      {isOpen ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2.5}
                          stroke="currentColor"
                          className="size-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 15.75l7.5-7.5 7.5 7.5"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2.5}
                          stroke="currentColor"
                          className="size-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      )}
                    </span>
                  </button>

                  {/* Answer (Slide Animation wrapper) */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"
                      }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-neutral-500 font-sans text-xs sm:text-sm font-light leading-relaxed max-w-2xl">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
