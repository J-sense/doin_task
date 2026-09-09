import React from "react";

interface StatItem {
  value: string;
  label: string;
  description: string;
}

export function ActiveOutcomes() {
  const stats: StatItem[] = [
    {
      value: "+42%",
      label: "Revenue Growth",
      description: "Average client revenue increase within 12 months.",
    },
    {
      value: "+31%",
      label: "Conversion Rate",
      description: "Average conversion rate optimization on core funnels and checkout pages.",
    },
    {
      value: "3.2×",
      label: "Customer Growth",
      description: "Average customer base expansion within 18 months.",
    },
    {
      value: "3.2×",
      label: "Operational Cost",
      description: "Cost reduction achieved through systems and process optimization.",
    },
  ];

  return (
    <section className="relative w-full bg-[#03182B] py-16 lg:py-24 px-6 md:px-12 lg:px-20 overflow-hidden border-t border-white/5">
      {/* Background soft glows to unify with hero theme */}
      <div className="absolute top-[10%] left-[-10%] w-[45%] h-[60%] rounded-full bg-[#00dfb6]/3 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[45%] h-[60%] rounded-full bg-[#0ea5e9]/3 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-[1700px] relative z-10">

        {/* Title Block */}
        <div className="justify-start mb-16 select-none">
          <span className="text-white text-[26px] sm:text-3xl lg:text-[34px] font-sans font-extrabold leading-tight block">
            ACTIVITY MATTERS.
          </span>
          <div className="flex flex-wrap items-center gap-x-2">
            <span className="text-emerald-500 text-[26px] sm:text-3xl lg:text-[34px] font-sans font-extrabold leading-tight">
              OUTCOMES
            </span>
            <span className="text-white text-[26px] sm:text-3xl lg:text-[34px] font-sans font-extrabold leading-tight">
              MATTER MORE.
            </span>
          </div>
        </div>

        {/* Stats Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-start">
              {/* Stat value */}
              <span className="text-emerald-500 text-5xl font-sans font-black tracking-tight leading-none">
                {stat.value}
              </span>

              {/* Stat label */}
              <h3 className="text-white text-sm sm:text-base font-semibold font-sans mt-4">
                {stat.label}
              </h3>

              {/* Stat description */}
              <p className="mt-2 text-slate-400 text-xs font-light leading-relaxed max-w-[240px]">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
