"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { PackageDetailData } from "./types";

interface PackageDetailViewProps {
  data: PackageDetailData;
}

function renderIcon(iconName?: string) {
  switch (iconName) {
    case "trending-up":
      return (
        <svg
          className="w-6 h-6 text-[#00dfb6]"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 0 5.814-5.518l2.74-1.22m0 0-3.976-3.977m3.976 3.977-1.22 2.74"
          />
        </svg>
      );
    case "alert-circle":
      return (
        <svg
          className="w-6 h-6 text-[#00dfb6]"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" strokeLinecap="round" />
          <line x1="12" y1="16" x2="12.01" y2="16" strokeLinecap="round" strokeWidth="3" />
        </svg>
      );
    case "bar-chart":
      return (
        <svg
          className="w-6 h-6 text-[#00dfb6]"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <line x1="18" y1="20" x2="18" y2="10" strokeLinecap="round" />
          <line x1="12" y1="20" x2="12" y2="4" strokeLinecap="round" />
          <line x1="6" y1="20" x2="6" y2="14" strokeLinecap="round" />
        </svg>
      );
    case "rocket":
      return (
        <svg
          className="w-6 h-6 text-[#00dfb6]"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.63 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.58-5.84l5.96 5.96m-5.96-5.96L3 3"
          />
        </svg>
      );
    default:
      return (
        <svg
          className="w-6 h-6 text-[#00dfb6]"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          />
        </svg>
      );
  }
}

export function PackageDetailView({ data }: PackageDetailViewProps) {
  const router = useRouter();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Primary Package / Canvas:", data.title);
    console.log("Form Data:", formData);
    setIsSubmitted(true);
  };

  return (
    <div className="w-full bg-white text-neutral-900 min-h-screen flex flex-col justify-between">
      {/* Top Header Spacing + Main Content */}
      <div className="pt-10 sm:pt-14 md:pt-16 pb-20 px-6 md:px-12 lg:px-20 max-w-[1440px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column (Package Detail Information) */}
          <div className="lg:col-span-6 xl:col-span-7 flex flex-col items-start pr-0 lg:pr-4">
            {/* Title */}
            <h1 className="font-sans font-black text-[40px] sm:text-[54px] lg:text-[66px] leading-[1.02] text-[#03182B] uppercase tracking-tight mb-6 max-w-md">
              {data.title}
            </h1>

            {/* Subtitle */}
            <p className="text-[#525252] font-sans font-bold text-base sm:text-lg leading-snug mb-6">
              {data.subtitle}
            </p>

            {/* Main Description */}
            <p className="text-[#737373] font-sans font-light text-sm sm:text-base leading-relaxed mb-8 max-w-2xl">
              {data.description}
            </p>

            {/* Add to My Canvas Button */}
            <Link
              href={`/area/${data.slug}`}
              className="inline-flex items-center gap-2 bg-[#00dfb6] hover:bg-[#18d1ad] text-[#03182B] font-mono text-xs font-bold uppercase tracking-widest px-7 py-4 rounded-xs transition-colors duration-150 shadow-xs mb-14"
            >
              Add to My Canvas →
            </Link>

            {/* Target Audience Section */}
            {data.whoThisIsFor && data.whoThisIsFor.length > 0 && (
              <div className="w-full mb-10">
                <h2 className="font-sans font-bold text-2xl sm:text-[26px] text-[#03182B] tracking-tight mb-3">
                  Target Audience
                </h2>
                {data.whoThisIsForIntro && (
                  <p className="text-[#525252] font-sans font-light text-sm sm:text-base leading-relaxed mb-8 max-w-xl">
                    {data.whoThisIsForIntro}
                  </p>
                )}

                <div className="flex flex-col gap-7">
                  {data.whoThisIsFor.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="mt-0.5 shrink-0">
                        {renderIcon(item.icon)}
                      </div>
                      <div>
                        <h3 className="font-sans font-bold text-sm sm:text-base text-[#03182B] mb-1">
                          {item.title}
                        </h3>
                        <p className="font-sans font-light text-xs sm:text-sm text-[#737373] leading-relaxed max-w-md">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* RELEVANT GOALS Section */}
            {data.relevantGoals && data.relevantGoals.length > 0 && (
              <div className="mb-10 w-full">
                <span className="text-neutral-400 font-mono text-[10px] font-bold uppercase tracking-widest mb-3.5 block">
                  RELEVANT GOALS
                </span>
                <div className="flex flex-wrap gap-2.5">
                  {data.relevantGoals.map((goal, idx) => (
                    <div
                      key={idx}
                      className="bg-white border border-neutral-200 text-neutral-600 font-sans text-xs px-4 py-2 rounded-xs shadow-2xs select-none"
                    >
                      {goal}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* WHAT WE DELIVER / What Axudar Will Do Section */}
            {data.whatWeDeliver && data.whatWeDeliver.length > 0 && (
              <div className="mb-10 w-full">
                <h2 className="font-sans font-bold text-2xl sm:text-[26px] text-[#03182B] tracking-tight mb-6">
                  What Axudar Will Do
                </h2>
                <ul className="flex flex-col gap-3">
                  {data.whatWeDeliver.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2.5">
                      <span className="text-[#00dfb6] font-bold text-sm leading-none">
                        ✓
                      </span>
                      <span className="text-[#03182B] text-xs font-semibold uppercase tracking-tight">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* WHAT YOU COULD RECEIVE / Client Benefits & Outcomes Section */}
            {data.whatYouCouldReceive && data.whatYouCouldReceive.length > 0 && (
              <div className="w-full mt-8 mb-10">
                <h2 className="font-sans font-bold text-2xl sm:text-[26px] text-[#03182B] tracking-tight mb-6">
                  Client Benefits & Outcomes
                </h2>
                <div className="flex flex-col">
                  {data.whatYouCouldReceive.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-6 py-5 border-b border-neutral-100 last:border-none"
                    >
                      <span className="font-mono text-base sm:text-lg font-bold text-neutral-300 w-8 shrink-0">
                        {item.number}
                      </span>
                      <div className="flex flex-col gap-1">
                        <h3 className="font-sans font-bold text-sm sm:text-base text-[#03182B]">
                          {item.title}
                        </h3>
                        <p className="font-sans font-light text-xs sm:text-sm text-[#737373] leading-relaxed max-w-lg">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column (Enquiry Form Card) */}
          <div className="lg:col-span-6 xl:col-span-5 w-full sticky top-28">
            <div className="bg-white border border-neutral-100/90 rounded-xl p-6 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.06)]">
              {isSubmitted ? (
                <div className="flex flex-col items-start py-10 sm:py-12 px-2 sm:px-4">
                  <div className="w-12 h-12 bg-[#EAFBF5] border border-[#00dfb6]/30 flex items-center justify-center rounded-sm mb-8">
                    <svg className="w-5 h-5 text-[#00dfb6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-[#00dfb6] font-mono text-[10px] font-bold uppercase tracking-[2.5px] mb-4 block">
                    ENQUIRY PREPARED
                  </span>
                  <h3 className="font-sans font-bold text-[32px] sm:text-[40px] text-[#03182B] leading-tight mb-5">
                    Your enquiry has been sent.
                  </h3>
                  <p className="text-[#525252] font-sans text-[15px] font-light leading-relaxed mb-10 max-w-[450px]">
                    Axudar aims to respond within one working day. If your query is urgent, email <a href="mailto:hello@axudargroup.com" className="text-[#00dfb6] hover:underline">hello@axudargroup.com</a>.
                  </p>
                  <a
                    href="/"
                    className="border border-[#E5EBEA] hover:border-[#00dfb6] transition-colors duration-200 text-[#03182B] font-sans font-bold text-xs uppercase tracking-widest px-8 py-3.5 rounded-sm flex items-center justify-center gap-2 select-none"
                  >
                    <span>Return Home</span>
                    <span>➔</span>
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  {/* Row 1: Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] font-mono font-bold uppercase tracking-widest text-neutral-400 mb-2 block">
                        NAME *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Full name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full bg-[#FAFAFA] border border-neutral-200/90 rounded-xs px-4 py-3 text-xs text-neutral-800 placeholder-neutral-300 focus:outline-none focus:border-emerald-500 focus:bg-white transition-all"
                      />
                    </div>

                    <div>
                      <label className="text-[10px] font-mono font-bold uppercase tracking-widest text-neutral-400 mb-2 block">
                        EMAIL *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="hello@company.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full bg-[#FAFAFA] border border-neutral-200/90 rounded-xs px-4 py-3 text-xs text-neutral-800 placeholder-neutral-300 focus:outline-none focus:border-emerald-500 focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  {/* Row 2: Company & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] font-mono font-bold uppercase tracking-widest text-neutral-400 mb-2 block">
                        COMPANY
                      </label>
                      <input
                        type="text"
                        placeholder="Business name"
                        value={formData.company}
                        onChange={(e) =>
                          setFormData({ ...formData, company: e.target.value })
                        }
                        className="w-full bg-[#FAFAFA] border border-neutral-200/90 rounded-xs px-4 py-3 text-xs text-neutral-800 placeholder-neutral-300 focus:outline-none focus:border-emerald-500 focus:bg-white transition-all"
                      />
                    </div>

                    <div>
                      <label className="text-[10px] font-mono font-bold uppercase tracking-widest text-neutral-400 mb-2 block">
                        PHONE
                      </label>
                      <input
                        type="tel"
                        placeholder="+44..."
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full bg-[#FAFAFA] border border-neutral-200/90 rounded-xs px-4 py-3 text-xs text-neutral-800 placeholder-neutral-300 focus:outline-none focus:border-emerald-500 focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  {/* Row 3: Message */}
                  <div>
                    <label className="text-[10px] font-mono font-bold uppercase tracking-widest text-neutral-400 mb-2 block">
                      MESSAGE
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Any additional context, questions or background..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full bg-[#FAFAFA] border border-neutral-200/90 rounded-xs p-4 text-xs text-neutral-800 placeholder-neutral-300 focus:outline-none focus:border-emerald-500 focus:bg-white transition-all resize-none"
                    />
                  </div>

                  {/* Prepare My Enquiry Button */}
                  <button
                    type="submit"
                    className="w-full bg-white border border-[#00dfb6] hover:bg-[#00dfb6]/10 text-[#00ab8a] font-mono text-xs font-bold uppercase tracking-widest py-4 rounded-xs transition-colors duration-150 flex items-center justify-center gap-2 mt-2 cursor-pointer"
                  >
                    Prepare My Enquiry →
                  </button>

                  {/* Footer Disclaimer */}
                  <p className="text-[#737373] text-[11px] font-sans text-center font-light leading-relaxed">
                    You will be able to review the information before it is sent.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* RELEVANT GROWTH CANVAS OUTCOMES Section */}
        {data.relevantOutcomes && data.relevantOutcomes.length > 0 && (
          <div className="w-full mt-20 pt-8 border-t border-neutral-100/80">
            <h2 className="font-sans font-bold text-3xl sm:text-4xl text-[#03182B] tracking-tight leading-snug mb-10 max-w-md">
              Relevant Growth Canvas Outcomes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.relevantOutcomes.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#F8F9FA] p-7 flex flex-col justify-between min-h-[180px] rounded-xs transition-all hover:shadow-xs"
                >
                  <div>
                    <h3 className="font-sans font-bold text-base sm:text-[17px] text-[#03182B] mb-2.5">
                      {item.title}
                    </h3>
                    <p className="font-sans font-light text-xs sm:text-sm text-[#737373] leading-relaxed mb-6">
                      {item.subtitle}
                    </p>
                  </div>
                  <Link
                    href={item.href || `/contact?pills=${encodeURIComponent(item.title)}`}
                    className="font-mono text-[10.5px] font-bold uppercase tracking-wider text-[#00ab8a] hover:underline inline-flex items-center gap-1"
                  >
                    DISCUSS THIS AREA →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Bottom Navy Banner */}
      <div className="w-full bg-[#061B2D] py-14 md:py-16 px-6 md:px-12 lg:px-20 text-white mt-16 sm:mt-24">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <span className="text-[#00dfb6] font-mono text-[11px] font-extrabold uppercase tracking-widest block mb-2">
              START HERE
            </span>
            <h2 className="font-sans font-black text-2xl sm:text-3xl lg:text-4xl uppercase tracking-tight text-white max-w-xl leading-tight">
              YOUR GROWTH SHOULDN&apos;T LIVE IN SILOS.
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <Link
              href={`/area/${data.slug}`}
              className="bg-[#00dfb6] hover:bg-[#18d1ad] text-[#03182B] font-mono text-xs font-bold uppercase tracking-widest px-7 py-4 rounded-xs transition-colors duration-150 inline-block"
            >
              Build Your Growth Canvas →
            </Link>

            <Link
              href="/contact"
              className="border border-white/20 hover:border-white text-white font-mono text-xs font-bold uppercase tracking-widest px-7 py-4 rounded-xs transition-colors duration-150 inline-block"
            >
              Book A Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PackageDetailView;

