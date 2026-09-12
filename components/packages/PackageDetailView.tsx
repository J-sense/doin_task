"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { PackageDetailData } from "./types";

interface PackageDetailViewProps {
  data: PackageDetailData;
}

export function PackageDetailView({ data }: PackageDetailViewProps) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams({
      title: data.title,
      name: formData.name,
      email: formData.email,
      company: formData.company,
      phone: formData.phone,
      message: formData.message,
      pills: data.title,
    });
    router.push(`/contact?${params.toString()}`);
  };

  return (
    <div className="w-full bg-white text-neutral-900 min-h-screen flex flex-col justify-between">
      {/* Top Header Spacing + Main Content */}
      <div className="pt-10 sm:pt-14 md:pt-16 pb-20 px-6 md:px-12 lg:px-20 max-w-[1440px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left Column (Package Detail Information) */}
          <div className="lg:col-span-6 xl:col-span-7 flex flex-col items-start pr-0 lg:pr-4">

            {/* Title */}
            <h1 className="font-sans font-black text-[40px] sm:text-[54px] lg:text-[66px] leading-[1.02] text-[#03182B] uppercase tracking-tight mb-6">
              {data.title}
            </h1>

            {/* Subtitle */}
            <p className="text-[#525252] font-sans font-bold text-base sm:text-lg leading-snug mb-6">
              {data.subtitle}
            </p>

            {/* Main Description */}
            <p className="text-[#737373] font-sans font-light text-sm sm:text-base leading-relaxed mb-10 max-w-2xl">
              {data.description}
            </p>

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

            {/* WHAT WE DELIVER Section */}
            {data.whatWeDeliver && data.whatWeDeliver.length > 0 && (
              <div className="mb-10 w-full">
                <span className="text-neutral-400 font-mono text-[10px] font-bold uppercase tracking-widest mb-4 block">
                  WHAT WE DELIVER
                </span>
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

            {/* Add to My Canvas Button */}
            <Link
              href={`/area/${data.slug}`}
              className="inline-flex items-center gap-2 bg-[#00dfb6] hover:bg-[#18d1ad] text-[#03182B] font-mono text-xs font-bold uppercase tracking-widest px-7 py-4 rounded-xs transition-colors duration-150 shadow-xs mt-2"
            >
              Add to My Canvas →
            </Link>
          </div>

          {/* Right Column (Enquiry Form Card) */}
          <div className="lg:col-span-6 xl:col-span-5 w-full">
            <div className="bg-white border border-neutral-100/90 rounded-xl p-6 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.06)]">
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
                  className="w-full bg-[#00dfb6] hover:bg-[#18d1ad] text-[#03182B] font-mono text-xs font-bold uppercase tracking-widest py-4 rounded-xs transition-colors duration-150 flex items-center justify-center gap-2 mt-2 cursor-pointer"
                >
                  Prepare My Enquiry →
                </button>

                {/* Footer Disclaimer */}
                <p className="text-[#737373] text-[11px] font-sans text-center font-light leading-relaxed">
                  You will be able to review the information before it is sent.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navy Banner */}
      <div className="w-full bg-[#03182B] py-14 md:py-16 px-6 md:px-12 lg:px-20 text-white">
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
              href="/area/business-growth"
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
