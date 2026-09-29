import React from "react";
import Link from "next/link";

interface PackageData {
  tag: string;
  title: string;
  href: string;
  price: string;
  vatText: string;
  description: string;
  features: string[];
  idealFor: string;
  isFeatured: boolean;
}

export function Packages() {
  const packagesList: PackageData[] = [
    {
      tag: "01",
      title: "Social Media Growth",
      href: "/readyMadePackageDetails/social-content-growth",
      price: "£399",
      vatText: "+ VAT / month",
      description:
        "A managed social presence for businesses that want to stay visible, build trust and create consistent opportunities from organic content.",
      features: [
        "Initial channel audit, audience review and social media strategy",
        "Monthly content calendar and 12 original branded posts",
        "Two short-form video or Reel edits using agreed source footage",
        "Posting across up to four agreed channels",
        "Performance insight and quarterly review",
      ],
      idealFor:
        "A business that needs a credible, consistent social presence with managed delivery and clear reporting.",
      isFeatured: false,
    },
    {
      tag: "02",
      title: "SEO & AI Visibility Growth",
      href: "/readyMadePackageDetails/seo-ai-visibility",
      price: "£649",
      vatText: "+ VAT / month",
      description:
        "A practical SEO, local search and GEO programme that helps the right customers find and trust your business in both Google results and AI-generated answers.",
      features: [
        "Technical SEO, local visibility and AI-discovery audit",
        "Keyword, search-intent, topic and competitor strategy",
        "On-page optimisation, local citations and content recommendations",
        "Structured-data recommendations and Google Business Profile management",
        "GA4 and Search Console validation, visibility dashboard and strategy review",
      ],
      idealFor:
        "A business with a working website that needs stronger qualified visibility, clearer measurement and ongoing improvement.",
      isFeatured: true,
    },
  ];

  return (
    <section id="ready-made" className="relative w-full bg-white py-20 lg:py-28 px-6 md:px-12 lg:px-20 overflow-hidden border-t border-neutral-100">
      <div className="mx-auto max-w-[1700px]">
        {/* Header Grid Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          <div className="lg:col-span-7">
            <h2 className="font-sans font-black text-[28px] sm:text-[36px] lg:text-[40px] leading-[1.1] text-[#03182B] uppercase tracking-tight">
              ALREADY KNOW WHAT
              <br />
              YOU NEED?
            </h2>
          </div>

          <div className="lg:col-span-5 lg:pt-2">
            <p className="text-[#737373] text-sm sm:text-base font-light leading-relaxed max-w-xl">
              These packages are for businesses with one clear, immediate priority. If you need more than one area — or are unsure — build a Growth Canvas instead.
            </p>
          </div>
        </div>

        {/* Packages 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {packagesList.map((pkg, idx) => (
            <div
              key={idx}
              className={`flex flex-col justify-between  p-8 sm:p-10 transition-all duration-300 ${pkg.isFeatured
                ? "bg-[#03182B] text-white shadow-xl"
                : "bg-white border border-[#061B2D99] text-[#03182B]"
                }`}
            >
              <div>
                {/* Top Tag & Title */}
                <div className="border-b border-neutral-200/30 pb-6 mb-6">
                  <span
                    className={`font-mono text-[11px] font-bold uppercase tracking-widest block mb-3 ${pkg.isFeatured ? "text-[#00DFB6]" : "text-[#00B894]"
                      }`}
                  >
                    {pkg.tag}
                  </span>
                  <h3
                    className={`font-sans font-extrabold text-2xl sm:text-[26px] tracking-tight mb-4 ${pkg.isFeatured ? "text-white" : "text-[#03182B]"
                      }`}
                  >
                    {pkg.title}
                  </h3>
                  <div className="flex items-baseline gap-2">
                    <span className="font-sans text-md font-bold uppercase">
                      FROM
                    </span>
                    <span
                      className={`font-sans font-black text-2xl sm:text-2xl tracking-tight ${pkg.isFeatured ? "text-[#00DFB6]" : "text-[#03182B]"
                        }`}
                    >
                      {pkg.price}
                    </span>
                    <span
                      className={`text-xs font-light ${pkg.isFeatured ? "text-slate-400" : "text-neutral-400"
                        }`}
                    >
                      {pkg.vatText}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p
                  className={`text-xs sm:text-sm font-light leading-relaxed mb-8 ${pkg.isFeatured ? "text-slate-300" : "text-neutral-500"
                    }`}
                >
                  {pkg.description}
                </p>

                {/* What is Included */}
                <div className="mb-8">
                  <span
                    className={`text-[10px] font-sans font-bold uppercase tracking-widest block mb-4 ${pkg.isFeatured ? "text-slate-400" : "text-neutral-400"
                      }`}
                  >
                    WHAT IS INCLUDED
                  </span>
                  <ul className="flex flex-col gap-3">
                    {pkg.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3">
                        <span
                          className={`text-xs font-bold mt-0.5 ${pkg.isFeatured ? "text-[#00DFB6]" : "text-[#00B894]"
                            }`}
                        >
                          ✓
                        </span>
                        <span
                          className={`text-xs sm:text-[13px] font-light leading-snug ${pkg.isFeatured ? "text-slate-200" : "text-[#03182B]"
                            }`}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Ideal For */}
                <div className="mb-10">
                  <span
                    className={`text-[10px] font-sans font-bold uppercase tracking-widest block mb-3 ${pkg.isFeatured ? "text-slate-400" : "text-neutral-400"
                      }`}
                  >
                    IDEAL FOR
                  </span>
                  <div className="flex items-start gap-2.5">
                    <span
                      className={`text-xs font-bold mt-0.5 ${pkg.isFeatured ? "text-[#00DFB6]" : "text-[#00B894]"
                        }`}
                    >
                      •
                    </span>
                    <p
                      className={`text-xs sm:text-[13px] font-light leading-relaxed ${pkg.isFeatured ? "text-slate-300" : "text-neutral-500"
                        }`}
                    >
                      {pkg.idealFor}
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-auto pt-4">
                <Link
                  href={`/packages/enquiry?title=${encodeURIComponent(
                    pkg.title
                  )}&price=${encodeURIComponent(pkg.price + " " + pkg.vatText)}`}
                  className={`w-full font-sans text-xs font-bold uppercase tracking-wider py-4 px-6 rounded-sm flex items-center justify-between transition-colors duration-200 ${pkg.isFeatured
                    ? "bg-[#00DFB6] hover:bg-[#18D1AD] text-[#03182B]"
                    : "bg-white border border-neutral-200 hover:border-neutral-300 text-[#03182B]"
                    }`}
                >
                  <span>Request This Package</span>
                  <span className="text-sm">➔</span>
                </Link>
                <Link
                  href={pkg.href}
                  className={`block text-center text-[11px] font-light mt-3 transition-colors duration-200 ${pkg.isFeatured
                    ? "text-slate-400 hover:text-slate-200"
                    : "text-neutral-400 hover:text-neutral-600"
                    }`}
                >
                  Full package details ➔
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer Note */}
        <div className="hidden flex items-center gap-2 mb-12 text-[#737373] font-sans text-[14px] font-light">
          <span className="text-[#00B894] border border-[#00B894] rounded-full w-4 h-4 flex items-center justify-center text-[10px] font-bold shrink-0">
            i
          </span>
          <p>
            Both packages require a <strong className="font-bold text-[#061B2D]">12-month minimum term</strong>. Advertising spend is not included and is agreed in advance before any paid activity begins.
          </p>
        </div>

        {/* Bottom Banner */}
        <div className="bg-[#FAFAFA] rounded-xl p-8 font-sans sm:p-10 flex flex-col sm:flex-row justify-between items-center gap-6 border border-neutral-100">
          <div className="flex flex-col">
            <h4 className="text-[#525252] text-lg sm:text-xl  font-bold">
              Need more than one growth area?
            </h4>
            <p className="text-[#737373] text-xs sm:text-sm  mt-1 font-light">
              Build one joined-up Growth Canvas.
            </p>
          </div>

          <Link
            href="/#canvas"
            className="bg-[#001A33] hover:bg-[#0c1a24] text-white  font-bold text-xs uppercase tracking-widest px-8 py-4  transition-colors duration-200 shrink-0"
          >
            BUILD YOUR GROWTH CANVAS
          </Link>
        </div>
      </div>
    </section>
  );
}

