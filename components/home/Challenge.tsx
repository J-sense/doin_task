import React from "react";

interface ChallengeStep {
  number: string;
  title: string;
  description: string;
  showArrow: boolean;
}

export function Challenge() {
  const steps: ChallengeStep[] = [
    {
      number: "01",
      title: "Business Growth",
      description: "Improving commercial performance and creating a clearer route to sustainable growth.",
      showArrow: true,
    },
    {
      number: "02",
      title: "Strategy",
      description: "Direction and priorities.",
      showArrow: true,
    },
    {
      number: "03",
      title: "Marketing",
      description: "Campaigns, messaging and content.",
      showArrow: true,
    },
    {
      number: "04",
      title: "SEO & AI",
      description: "VISIBILITY Search and AI discovery.",
      showArrow: true,
    },
    {
      number: "05",
      title: "Social Media",
      description: "Content, engagement and visibility.",
      showArrow: true,
    },
    {
      number: "06",
      title: "Website & Conversion",
      description: "Turn attention into action.",
      showArrow: false,
    },
  ];

  return (
    <section className="relative w-full bg-white py-20 lg:py-28 px-6 md:px-12 overflow-hidden">
      <div className="mx-auto max-w-[1700px]">
        {/* Header Grid Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          <div className="lg:col-span-7 flex flex-col items-start">
            <span className="text-[#03182B] font-sans text-xs font-bold tracking-[2.75px] uppercase">
              THE CHALLENGE
            </span>
            <div className="mt-4 justify-start">
              <span className="text-emerald-600 text-[32px] font-extrabold font-sans leading-9 uppercase">
                GROWTH
              </span>
              <span className="text-[#03182B] text-[32px] font-extrabold font-sans leading-9 uppercase">
                {" "}
                BREAKS DOWN
                <br />
                WHEN EVERYTHING WORKS
                <br />
                SEPARATELY.
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 lg:pt-8">
            <p className="text-neutral-500 text-sm sm:text-base font-light leading-relaxed">
              Strategy without execution. Marketing without alignment. Digital
              without direction. Leadership without a shared growth agenda.
            </p>
          </div>
        </div>

        {/* 4 Steps Banner */}
        <div className="bg-[#F8FAFC] rounded-2xl border border-neutral-100 p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 md:gap-6 lg:gap-8">
            {steps.map((step) => (
              <div
                key={step.number}
                className="flex flex-col items-start relative"
              >
                {/* Large Muted Number Indicator */}
                <span className="text-neutral-200/70 font-sans font-black text-6xl tracking-tighter leading-none select-none">
                  {step.number}
                </span>

                {/* Title and Arrow Line */}
                <div className="flex items-center justify-between w-full mt-5">
                  <h3 className="text-[#03182B] font-sans font-extrabold text-xs sm:text-sm uppercase tracking-widest">
                    {step.title}
                  </h3>

                  {step.showArrow && (
                    <div className="hidden md:flex items-center gap-1 opacity-20 ml-4 flex-1 justify-center max-w-[80px]">
                      <div className="h-[1px] border-b border-dashed border-[#03182B] flex-1" />
                      <span className="text-[10px] text-[#03182B] -ml-1">
                        ➔
                      </span>
                    </div>
                  )}
                </div>

                {/* Description */}
                <p className="mt-3 text-neutral-500 text-xs sm:text-sm font-light leading-relaxed max-w-[200px]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
