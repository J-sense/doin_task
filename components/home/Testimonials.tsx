"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

interface TestimonialItem {
  id: string;
  quote: string;
  avatarChar: string;
  name: string;
  role: string;
}

const testimonialsData: TestimonialItem[] = [
  {
    id: "1",
    quote: "\u201CTransformed the way our project was delivered.\u201D",
    avatarChar: "A",
    name: "JAMES WHITFIELD",
    role: "CEO, Meridian Capital Group",
  },
  {
    id: "2",
    quote: "\u201CTransformed the way our project was delivered.\u201D",
    avatarChar: "A",
    name: "JAMES WHITFIELD",
    role: "CEO, Meridian Capital Group",
  },
  {
    id: "3",
    quote: "\u201CTransformed the way our project was delivered.\u201D",
    avatarChar: "A",
    name: "JAMES WHITFIELD",
    role: "CEO, Meridian Capital Group",
  },
  {
    id: "4",
    quote: "\u201CTransformed the way our project was delivered.\u201D",
    avatarChar: "A",
    name: "JAMES WHITFIELD",
    role: "CEO, Meridian Capital Group",
  },
  {
    id: "5",
    quote: "\u201CTransformed the way our project was delivered.\u201D",
    avatarChar: "A",
    name: "JAMES WHITFIELD",
    role: "CEO, Meridian Capital Group",
  },
];

export function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="reviews" className="relative w-full bg-[#00142D] text-white py-20 md:py-28 px-6 md:px-12 lg:px-20 overflow-hidden border-t border-white/5">
      {/* Diagonal geometric background shapes across section background (Left & Right) */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none">
        {/* Left-side diagonal geometric background shapes */}
        <div className="absolute -top-40 -left-10 h-[900px] w-[350px] -rotate-[35deg] bg-[#07243d]/70" />
        <div className="absolute -top-20 left-[15%] h-[800px] w-[250px] -rotate-[35deg] bg-gradient-to-b from-[#09799e]/15 to-transparent blur-[30px]" />

        {/* Right-side diagonal geometric background shapes */}
        <div className="absolute -top-40 right-0 h-[800px] w-[500px] -rotate-[35deg] bg-gradient-to-b from-[#09799e]/20 to-transparent blur-[40px]" />
        <div className="absolute -bottom-40 right-1/3 h-[700px] w-[400px] -rotate-[35deg] bg-[#07243d]/60" />
      </div>

      <div className="mx-auto max-w-[1700px] w-full relative z-10">
        {/* Header Row */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-12">
          <h2 className="font-heading font-black text-2xl sm:text-3xl lg:text-[36px] uppercase leading-[1.15] tracking-tight text-white max-w-xl">
            <span className="text-[#00dfb6]">TRUSTED</span> BY THOSE
            <br />
            WHO&apos;VE GROWN WITH US.
          </h2>

          {/* Slider Navigation Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll("left")}
              className="size-11 rounded-sm bg-white/5 border border-white/10 hover:border-[#00dfb6] hover:bg-[#00dfb6]/10 text-white hover:text-[#00dfb6] flex items-center justify-center transition-colors focus:outline-none"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="size-11 rounded-sm bg-white/5 border border-white/10 hover:border-[#00dfb6] hover:bg-[#00dfb6]/10 text-white hover:text-[#00dfb6] flex items-center justify-center transition-colors focus:outline-none"
              aria-label="Next testimonial"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>

        {/* Slidable Cards Container */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory py-4 no-scrollbar [scrollbar-width:none] -mx-2 px-2"
        >
          {testimonialsData.map((item) => (
            <article
              key={item.id}
              className="min-w-[320px] sm:min-w-[370px] lg:min-w-[400px] bg-[#F5F5F521] border border-white/10 rounded-sm p-7 sm:p-9 flex flex-col justify-between h-[230px] sm:h-[190px] snap-start hover:border-[#00dfb6]/50 transition-colors shadow-lg shrink-0"
            >
              {/* Quote Text */}
              <p className="font-sans font-bold text-lg sm:text-xl text-white leading-snug">
                {item.quote}
              </p>

              {/* Author Details */}
              <div className="flex items-center gap-3.5 mt-6">
                <div className="size-10 bg-[#00dfb6] text-[#02111c] font-heading font-black text-base flex items-center justify-center rounded-xs shrink-0 select-none">
                  {item.avatarChar}
                </div>
                <div className="flex flex-col leading-tight">
                  <span className="text-white font-sans font-bold text-xs sm:text-sm uppercase tracking-wider">
                    {item.name}
                  </span>
                  <span className="text-slate-400 text-[11px] font-mono mt-1 font-light tracking-wide">
                    {item.role}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
