"use client";

interface LearningPath {
  id: string;
  name: string;
  icon: React.ReactNode;
}

const LEARNING_PATHS: LearningPath[] = [
  {
    id: "design",
    name: "Design",
    icon: (
      <svg
        className="w-7 h-7 text-black stroke-[2.2]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
        />
      </svg>
    ),
  },
  {
    id: "development",
    name: "Development",
    icon: (
      <svg
        className="w-7 h-7 text-black stroke-[2.2]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
  },
  {
    id: "it-software",
    name: "IT & Software",
    icon: (
      <svg
        className="w-7 h-7 text-black stroke-[2.2]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    id: "business",
    name: "Business",
    icon: (
      <svg
        className="w-7 h-7 text-black stroke-[2.2]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0h4m-4 0V9a2 2 0 012-2h2a2 2 0 012 2v12m-6 0V9m0 0H9"
        />
      </svg>
    ),
  },
  {
    id: "marketing",
    name: "Marketing",
    icon: (
      <svg
        className="w-7 h-7 text-black stroke-[2.2]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.684A1.761 1.761 0 013 12V8c0-.707.414-1.334 1.057-1.605l8.775-3.693c1.558-.655 3.168.498 3.168 2.184v10.228c0 1.686-1.61 2.839-3.168 2.184l-7.396-3.114z"
        />
      </svg>
    ),
  },
  {
    id: "photography",
    name: "Photography",
    icon: (
      <svg
        className="w-7 h-7 text-black stroke-[2.2]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
];

export function LearningPathsSection() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 text-neutral-900 select-none">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-12 sm:mb-16">
          <h2 className="text-center text-slate-950 text-3xl sm:text-4xl font-semibold leading-8 sm:leading-10">
            Explore Diverse Learning Paths at Bytespace
          </h2>
          <p className="text-center text-gray-500 text-base sm:text-lg font-normal leading-7 max-w-4xl mx-auto">
            At Bytespace, we believe in empowering individuals through
            knowledge. Our diverse range of courses spans various fields,
            ensuring there&apos;s something for everyone. Unleash your potential and
            explore our carefully curated categories.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {LEARNING_PATHS.map((path) => (
            <div
              key={path.id}
              className="group relative rounded-3xl outline outline-1 outline-offset-[-1px] outline-neutral-300 bg-white p-6 sm:py-9 sm:px-6 flex flex-col items-center justify-center gap-3 hover:outline-lime-400 hover:shadow-md transition-all duration-300 cursor-pointer"
            >
              <div className="p-3 bg-[#D4FB20] rounded-[40px] inline-flex justify-center items-center gap-2 group-hover:scale-105 transition-transform duration-300 shrink-0">
                <div className="size-9 relative flex items-center justify-center overflow-hidden">
                  {path.icon}
                </div>
              </div>

              <div className="justify-start text-neutral-800 text-lg sm:text-xl font-medium leading-6 group-hover:text-black transition-colors text-center">
                {path.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
