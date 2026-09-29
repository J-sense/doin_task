"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

interface PillOption {
  id: string;
  label: string;
  keywords: string[];
}

export function PackageEnquiryForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const [titleQuery, setTitleQuery] = useState<string | null>(null);
  const [priceQuery, setPriceQuery] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const allPills: PillOption[] = [
    { id: "strategy", label: "Strategy & Planning", keywords: ["strategy", "planning"] },
    { id: "commercial", label: "Commercial Growth", keywords: ["commercial", "business"] },
    { id: "seo", label: "SEO & AI Visibility", keywords: ["seo", "ai visibility", "search"] },
    { id: "social", label: "Social & Content", keywords: ["social", "content", "social media"] },
    { id: "website", label: "Website & Conversion", keywords: ["website", "conversion", "ux"] },
    { id: "campaigns", label: "Campaigns & Leads", keywords: ["campaigns", "leads", "marketing"] },
  ];

  const [activePillIds, setActivePillIds] = useState<string[]>([]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const rawTitle = params.get("title") || "Social Media Growth";
    const rawPrice = params.get("price");

    let displayTitle = rawTitle;
    let displayPrice = rawPrice;

    if (rawTitle.toLowerCase().includes("seo")) {
      displayTitle = "SEO & AI Visibility Growth";
      displayPrice = displayPrice ? (displayPrice.toUpperCase().startsWith("FROM") ? displayPrice : `FROM ${displayPrice}`) : "FROM £649 + VAT / month";
    } else if (rawTitle.toLowerCase().includes("social")) {
      displayTitle = "Social Media Growth";
      displayPrice = displayPrice ? (displayPrice.toUpperCase().startsWith("FROM") ? displayPrice : `FROM ${displayPrice}`) : "FROM £399 + VAT / month";
    } else {
      displayPrice = displayPrice ? (displayPrice.toUpperCase().startsWith("FROM") ? displayPrice : `FROM ${displayPrice}`) : "FROM £399 + VAT / month";
    }

    setTitleQuery(displayTitle);
    setPriceQuery(displayPrice);
  }, []);

  const togglePill = (id: string) => {
    setActivePillIds((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const selectedTopics = allPills
      .filter((p) => activePillIds.includes(p.id))
      .map((p) => p.label);

    console.log("Package Enquiry Submitted:", {
      package: titleQuery,
      price: priceQuery,
      name,
      email,
      company,
      phone,
      topics: selectedTopics,
      message,
    });

    setIsSubmitted(true);
  };

  return (
    <section className="relative w-full bg-white py-20 lg:py-28 px-6 md:px-12 lg:px-20 overflow-hidden border-t border-neutral-100">
      <div className="mx-auto max-w-[1500px]">
        {/* Header Grid Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left Column: Info & Messaging */}
          <div className="lg:col-span-4 flex flex-col items-start text-left lg:pr-8">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-[1.5px] bg-[#00dfb6]" />
              <span className="text-[#00dfb6] font-sans text-xs font-bold tracking-[2.75px] uppercase">
                Tell us what you need
              </span>
            </div>

            <h2 className="font-sans font-black text-[32px] sm:text-[36px] lg:text-[40px] leading-[1.1] text-[#03182B] uppercase tracking-tight mb-6 select-none">
              Let's talk
              <br />
              about your
              <br />
              growth.
            </h2>

            <p className="text-[#525252] text-xs sm:text-sm font-light leading-relaxed mb-10 max-w-sm">
              A short, structured conversation about where the business is and what's blocking progress. No pitch, no obligation.
            </p>

            {/* Contact details */}
            <div className="flex flex-col gap-5 w-full border-t border-neutral-100 pt-8">
              <div className="flex flex-col gap-1">
                <span className="text-[#061B2D8C] text-[12px] font-mono uppercase tracking-widest font-semibold">
                  Email
                </span>
                <a
                  href="mailto:hello@axudargroup.com"
                  className="text-[#03182B] font-sans font-bold text-xs hover:text-[#00dfb6] transition-colors"
                >
                  hello@axudargroup.com
                </a>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-[#061B2D8C] text-[12px] font-mono uppercase tracking-widest font-semibold">
                  Phone
                </span>
                <a
                  href="tel:03301335720"
                  className="text-[#03182B] font-sans font-bold text-xs hover:text-[#00dfb6] transition-colors"
                >
                  0330 133 5720
                </a>
              </div>

            </div>
          </div>

          {/* Right Column: Dedicated Package Form */}
          <div className="lg:col-span-8 flex justify-center w-full shadow-xl">
            <div className="w-full bg-white border border-[#E5EBEA]/60 rounded-lg p-6 sm:p-8 lg:p-10 shadow-[0_10px_30px_rgba(0,0,0,0.02)]">
              {isSubmitted ? (
                <div className="flex flex-col items-start py-10 sm:py-16 px-2 sm:px-6">
                  <div className="w-12 h-12 bg-[#EAFBF5] border border-[#00dfb6]/30 flex items-center justify-center rounded-sm mb-8">
                    <svg className="w-5 h-5 text-[#00dfb6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-[#00dfb6] font-mono text-[10px] font-bold uppercase tracking-[2.5px] mb-4 block">
                    ENQUIRY PREPARED
                  </span>
                  <h3 className="font-sans font-bold text-[32px] sm:text-[40px] text-[#03182B] leading-tight mb-5">
                    Your package enquiry has been sent.
                  </h3>
                  <p className="text-[#525252] font-sans text-[15px] font-light leading-relaxed mb-10 max-w-[450px]">
                    Axudar aims to respond within one working day regarding <strong className="font-semibold text-[#03182B]">{titleQuery}</strong>.
                  </p>
                  <Link
                    href="/"
                    className="border border-[#E5EBEA] hover:border-[#00dfb6] transition-colors duration-200 text-[#03182B] font-sans font-bold text-xs uppercase tracking-widest px-8 py-3.5 rounded-sm flex items-center justify-center gap-2 select-none"
                  >
                    <span>Return Home</span>
                    <span>➔</span>
                  </Link>
                </div>
              ) : (
                <>
                  {/* Green Selected Package Header Card */}
                  <div className="mb-8 p-6 sm:p-8 bg-[#EAFBF5] rounded-md flex flex-col items-start select-none border border-[#00DFB6]/20">
                    <span className="text-[#00B894] text-[10px] sm:text-[11px] font-sans font-bold uppercase tracking-[2px] mb-3 block">
                      SELECTED PACKAGE
                    </span>
                    <h3 className="font-sans font-bold text-xl sm:text-2xl text-[#03182B] leading-tight mb-1.5">
                      {titleQuery || "Social Media Growth"}
                    </h3>
                    <p className="text-neutral-500 font-sans text-xs sm:text-sm font-normal">
                      {priceQuery || "FROM £399 + VAT / month"}
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    {/* Name & Email Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[#061B2D8C] text-[12.5px] font-sans font-extrabold uppercase tracking-wider">
                          Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Full name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full bg-white border border-[#E5EBEA] rounded-md px-4 py-3.5 font-sans text-xs sm:text-sm text-[#03182B] focus:outline-none focus:border-[#00dfb6] placeholder:text-[#061B2D4D]"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[#061B2D8C] text-[12.5px] font-sans font-extrabold uppercase tracking-wider">
                          Email *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="hello@company.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full bg-white border border-[#E5EBEA] rounded-md px-4 py-3.5 font-sans text-xs sm:text-sm text-[#03182B] focus:outline-none focus:border-[#00dfb6] placeholder:text-[#061B2D4D]"
                        />
                      </div>
                    </div>

                    {/* Company & Phone Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[#061B2D8C] text-[12.5px] font-sans font-extrabold uppercase tracking-wider">
                          Company
                        </label>
                        <input
                          type="text"
                          placeholder="Business name"
                          value={company}
                          onChange={(e) => setCompany(e.target.value)}
                          className="w-full bg-white border border-[#E5EBEA] rounded-md px-4 py-3.5 font-sans text-xs sm:text-sm text-[#03182B] focus:outline-none focus:border-[#00dfb6] placeholder:text-[#061B2D4D]"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[#061B2D8C] text-[12.5px] font-sans font-extrabold uppercase tracking-wider">
                          Phone
                        </label>
                        <input
                          type="tel"
                          placeholder="+44 ..."
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full bg-white border border-[#E5EBEA] rounded-md px-4 py-3.5 font-sans text-xs sm:text-sm text-[#03182B] focus:outline-none focus:border-[#00dfb6] placeholder:text-[#061B2D4D]"
                        />
                      </div>
                    </div>

                    {/* What can we help with */}
                    <div className="flex flex-col gap-2.5">
                      <label className="text-[#061B2D8C] text-[12.5px] font-sans font-extrabold uppercase tracking-wider">
                        What can we help with?
                      </label>
                      <div className="flex flex-wrap gap-2 pt-1">
                        {allPills.map((pill) => {
                          const isActive = activePillIds.includes(pill.id);
                          return (
                            <button
                              key={pill.id}
                              type="button"
                              onClick={() => togglePill(pill.id)}
                              className={`px-4 py-3 rounded-[5px] font-sans text-[10.5px] font-bold uppercase tracking-wider transition-all duration-200 select-none ${isActive
                                  ? "bg-[#03182B] text-white border border-[#03182B] shadow-sm hover:bg-[#0c1a24]"
                                  : "bg-white border border-[#E5EBEA]/80 text-neutral-500 hover:border-neutral-300"
                                }`}
                            >
                              {pill.label}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Message Textarea */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[#061B2D8C] text-[12.5px] font-sans font-extrabold uppercase tracking-wider">
                        Message
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Any additional context, questions or background..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full bg-white border border-[#E5EBEA] rounded-md px-4 py-3.5 font-sans text-xs sm:text-sm text-[#03182B] focus:outline-none focus:border-[#00dfb6] placeholder:text-[#061B2D4D] resize-none font-sans"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-start mt-2">
                      <button
                        type="submit"
                        className="bg-[#00dfb6] hover:bg-[#18d1ad] transition-colors duration-200 text-[#02111c] font-sans font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-sm flex items-center justify-center gap-2 select-none"
                      >
                        <span>PREPARE MY ENQUIRY</span>
                        <span>➔</span>
                      </button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
