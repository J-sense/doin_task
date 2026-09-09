import React from "react";

interface RouteStep {
  number: string;
  title: string;
  description: string;
}

export function ActionRoute() {
  const steps: RouteStep[] = [
    {
      number: "01",
      title: "Choose the route",
      description: "Tell us where your business is today. We'll help you identify what needs to happen next.",
    },
    {
      number: "02",
      title: "Choose the route",
      description: "Tell us where your business is today. We'll help you identify what needs to happen next.",
    },
    {
      number: "03",
      title: "Agree Success",
      description: "Measures, milestones, working rhythm and approvals are clear before delivery starts.",
    },
    {
      number: "04",
      title: "Deliver & improve",
      description: "Activity, insight and regular reviews keep the work focused on commercial progress.",
    },
  ];

  return (
    <section id="how-it-works" className="relative w-full bg-white py-20 lg:py-28 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="mx-auto max-w-7xl">

        {/* Title and Description Block */}
        <div className="flex flex-col items-start mb-16 max-w-3xl">
          <h2 className="font-sans font-black text-[28px] sm:text-[36px] lg:text-[32px] leading-[1.1] text-[#03182B] uppercase tracking-tight">
            A simple route from
            <br />
            interest to action.
          </h2>
          <p className="mt-6 text-[#525252] text-sm sm:text-base font-light leading-relaxed max-w-xl">
            A focused first conversation validates the route before a tailored proposal. No surprises, no pressure.
          </p>
        </div>

        {/* Steps Container */}
        {/* On desktop: single connected container with inner dividers */}
        {/* On mobile: separate clean vertical cards */}
        <div className="hidden md:flex border border-[#E5EBEA] divide-x divide-neutral-200 bg-white">
          {steps.map((step) => (
            <div key={step.number} className="flex-1 px-8 py-10 flex flex-col justify-start items-start">
              {/* Number */}
              <span className="text-[#061B2D26] font-sans font-black text-3xl leading-none select-none">
                {step.number}
              </span>

              {/* Title */}
              <h3 className="text-[#1E1E1E] font-sans font-extrabold text-xs uppercase tracking-widest mt-6 mb-3 min-h-[16px]">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-[#525252] text-[14px] leading-relaxed font-light">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile View */}
        <div className="flex md:hidden flex-col gap-5">
          {steps.map((step) => (
            <div key={step.number} className="border border-neutral-200 rounded-xl p-6 bg-white flex flex-col items-start">
              <span className="text-neutral-200/80 font-sans font-black text-3xl leading-none select-none">
                {step.number}
              </span>
              <h3 className="text-[#03182B] font-sans font-extrabold text-xs uppercase tracking-widest mt-4 mb-2">
                {step.title}
              </h3>
              <p className="text-neutral-500 text-xs leading-relaxed font-light">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
