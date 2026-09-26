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
      title: "Strategy",
      description: "Improving commercial performance and creating a clearer route to sustainable growth.",
      showArrow: true,
    },
    {
      number: "02",
      title: "Business Growth",
      description: "Direction and priorities.",
      showArrow: true,
    },
    {
      number: "03",
      title: "MARKETING",
      description: "Campaigns, messaging and content.",
      showArrow: true,
    },
    {
      number: "04",
      title: "SEO",
      description: "VISIBILITY Search and AI discovery.",
      showArrow: true,
    },
    {
      number: "05",
      title: "SOCIAL MEDIA",
      description: "Content, engagement and visibility.",
      showArrow: true,
    },
    {
      number: "06",
      title: "WEBSITE ",
      description: "Turn attention into action.",
      showArrow: false,
    },
  ];

  return (
    <section className="relative w-full bg-white py-20 lg:py-28 px-6 md:px-12 overflow-hidden">
      <div className="mx-auto max-w-[1700px]">
        {/* Header Grid Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          {/* Left Column: Heading */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <span className="text-[#00B894] font-sans text-xs font-bold tracking-[2.75px] uppercase">
              THE CHALLENGE
            </span>
            <div className="mt-4">
              <span className="text-[#00B894] text-[32px] sm:text-[38px] font-extrabold font-sans leading-[1.15] uppercase">
                GROWTH
              </span>
              <span className="text-[#03182B] text-[32px] sm:text-[38px] font-extrabold font-sans leading-[1.15] uppercase">
                {" "}
                BREAKS DOWN
                <br />
                WHEN EVERYTHING WORKS
                <br />
                SEPARATELY.
              </span>
            </div>
          </div>

          {/* Right Column: Paragraph aligned to bottom right */}
          <div className="lg:col-span-5 flex flex-col justify-end lg:ml-auto max-w-md pb-1">
            <p className="text-[#737373] text-sm sm:text-base font-light leading-relaxed">
              Strategy without execution. Marketing without direction. Visibility without conversion. Growth works better when the right parts work together.
            </p>
          </div>
        </div>

        {/* 6 Steps Banner */}
        <div className="bg-[#F5F7FA] rounded-2xl border border-neutral-100 p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 md:gap-6 lg:gap-8">
            {steps.map((step) => (
              <div
                key={step.number}
                className="flex flex-col items-start relative"
              >
                {/* Large Muted Number Indicator */}
                <span className="text-[#03182B26] font-sans font-black text-6xl tracking-tighter leading-none select-none">
                  {step.number}
                </span>

                {/* Title and Arrow Line */}
                <div className="flex items-center justify-between w-full mt-5">
                  <h3 className="text-[#03182B] font-sans font-extrabold text-xs sm:text-sm uppercase tracking-wider">
                    {step.title}
                  </h3>

                  {step.showArrow && (
                    <div className="hidden md:flex items-center gap-1 opacity-30 ml-2 flex-1 justify-center max-w-[50px]">
                      <div className="h-[1px] border-b border-dashed border-[#03182B] flex-1" />
                      <span className="text-[10px] text-[#03182B] -ml-1">
                        ➔
                      </span>
                    </div>
                  )}
                </div>

                {/* Description */}
                <p className="mt-3 text-[#03182B80] text-xs sm:text-sm font-light leading-relaxed max-w-50">
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

