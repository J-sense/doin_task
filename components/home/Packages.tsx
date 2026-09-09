import Link from "next/link";

interface PackageData {
  title: string;
  href: string;
  price: string;
  vatText: string;
  bestFor: string;
  features: string[];
  isFeatured: boolean;
}

export function Packages() {
  const packagesList: PackageData[] = [
    {
      title: "Social & Content Growth",
      href: "/packages/social-content-growth",
      price: "£649",
      vatText: "+ vat per month",
      bestFor:
        "Businesses that need a credible, consistent social presence without building an in-house content team.",
      features: [
        "Monthly strategy sessions",
        "Growth diagnostic",
        "Leadership advisory",
        "Priority access",
      ],
      isFeatured: false,
    },
    {
      title: "SEO & Search Growth",
      href: "/packages/seo-ai-visibility",
      price: "£649",
      vatText: "+ vat per month",
      bestFor:
        "Businesses with a working website that need stronger qualified visibility, more relevant traffic and clearer measurement.",
      features: [
        "All Advisory features",
        "Embedded delivery team",
        "Multi-function coverage",
        "Quarterly reviews",
        "Executive sponsor",
      ],
      isFeatured: true,
    },
  ];

  return (
    <section id="ready-made" className="relative w-full bg-white py-20 lg:py-28 px-6 md:px-12 lg:px-20 overflow-hidden border-t border-neutral-100">
      <div className="mx-auto max-w-7xl">
        {/* Header Grid Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          <div className="lg:col-span-7">
            <h2 className="font-sans font-black text-[28px] sm:text-[36px] lg:text-[40px] leading-[1.1] text-[#03182B] uppercase tracking-tight">
              Two ready-made
              <br />
              ways to start.
            </h2>
          </div>

          <div className="lg:col-span-5 lg:pt-4">
            <p className="text-neutral-500 text-sm sm:text-base font-light leading-relaxed">
              These packages are for businesses with one clear, immediate
              priority. If you need more than one area — or are unsure — build a
              Growth Canvas instead.
            </p>
          </div>
        </div>

        {/* Packages Grid Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {packagesList.map((pkg, idx) => (
            <div
              key={idx}
              className={`flex flex-col justify-between rounded-xl overflow-hidden border transition-all duration-300 ${pkg.isFeatured
                  ? "border-[#00dfb6] shadow-[0_4px_20px_rgba(0,223,182,0.08)] bg-white"
                  : "border-neutral-200/60 bg-white"
                }`}
            >
              {/* Header Box */}
              <div
                className={`px-8 py-6 flex flex-col items-start ${pkg.isFeatured
                    ? "bg-[#00dfb6] text-[#03182B]"
                    : "bg-[#03182B] text-white"
                  }`}
              >
                <span className="font-mono text-[11px] font-extrabold uppercase tracking-widest mb-1.5 opacity-90">
                  {pkg.title}
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="font-sans font-black text-2xl uppercase tracking-tight">
                    {pkg.price}
                  </span>
                  <span className="font-mono text-[10px] font-light opacity-75">
                    {pkg.vatText}
                  </span>
                </div>
              </div>

              {/* Body Content */}
              <div className="p-8 flex-1 flex flex-col justify-between">
                {/* Best For Info Card */}
                <div>
                  <div
                    className={`p-4 border-l-[3px] mb-8 ${pkg.isFeatured
                        ? "bg-[#F8FAFC] border-[#00dfb6]"
                        : "bg-[#F8FAFC] border-[#03182B]"
                      }`}
                  >
                    <span
                      className={`text-[8.5px] font-sans font-bold uppercase tracking-widest block mb-1.5 ${pkg.isFeatured ? "text-emerald-600" : "text-[#03182B]"
                        }`}
                    >
                      Best for
                    </span>
                    <p className="text-neutral-500 text-[10.5px] font-light leading-relaxed">
                      {pkg.bestFor}
                    </p>
                  </div>

                  {/* Divider line */}
                  <div className="h-[1px] w-full bg-neutral-200/60 mb-6" />

                  {/* Features list */}
                  <ul className="flex flex-col gap-3.5 mb-8">
                    {pkg.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-3">
                        <span className="text-[#00dfb6] text-xs font-bold font-sans">
                          ✓
                        </span>
                        <span className="text-[#001A3399] text-xs font-sans font-medium">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Action buttons */}
                <div className="flex flex-col gap-2 mt-auto">
                  <Link
                    href={pkg.href}
                    className="w-full bg-white border border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50 text-[#001A33] font-mono text-[13px] font-bold uppercase tracking-widest py-3.5 rounded-[3px] transition-colors duration-200 text-center block"
                  >
                    View details →
                  </Link>
                  <Link
                    href={`/contact?title=${encodeURIComponent(pkg.title)}&price=${encodeURIComponent(pkg.price + " " + pkg.vatText)}`}
                    className={`w-full font-mono text-[13px] font-bold uppercase tracking-widest py-3.5 rounded-[3px] transition-colors duration-200 text-center block ${
                      pkg.isFeatured
                        ? "bg-[#00dfb6] hover:bg-[#18d1ad] text-[#03182B]"
                        : "bg-white border border-[#03182B] hover:bg-neutral-50 text-[#03182B]"
                    }`}
                  >
                    Enquire →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="bg-[#FAFAFA] rounded-xl p-6 sm:p-8 flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="flex flex-col">
            <span className="text-[#525252] text-base sm:text-lg font-sans font-bold">
              Need more than one growth area?
            </span>
            <span className="text-[#737373] text-xs sm:text-sm font-sans mt-0.5 font-light">
              Build one joined-up Growth Canvas.
            </span>
          </div>

          <Link
            href={`/contact?title=${encodeURIComponent("Growth Canvas")}&price=${encodeURIComponent("Custom Strategy & Execution")}`}
            className="bg-[#03182B] hover:bg-[#0c1a24] text-white font-mono text-[10px] font-bold uppercase tracking-widest px-8 py-3.5 rounded-[3px] transition-colors duration-200 shrink-0 inline-block"
          >
            Enquire ➔
          </Link>
        </div>
      </div>
    </section>
  );
}
