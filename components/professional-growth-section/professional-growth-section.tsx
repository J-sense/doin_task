"use client";

import Image from "next/image";

const STATS = [
  { value: "12K", label: "Students" },
  { value: "70+", label: "Courses" },
  { value: "16", label: "Creators" },
];

const FEATURES = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

export function ProfessionalGrowthSection() {
  return (
    <section className="relative w-full bg-neutral-50 overflow-hidden py-16 lg:py-24 select-none">
      {/* ================= BACKGROUND RADIAL GLOW BLOBS ================= */}
      {/* Glow 1: Top Left Lime Blur */}
      <div
        className="absolute -left-[150px] -top-[200px] w-[600px] sm:w-[900px] lg:w-[1137px] h-[600px] sm:h-[900px] lg:h-[1137px] rounded-full blur-[40px] lg:blur-[60px] pointer-events-none z-0 opacity-70"
        style={{
          background:
            "radial-gradient(circle, rgba(163, 230, 53, 0.4) 0%, rgba(163, 230, 53, 0.1) 45%, transparent 70%)",
        }}
      />

      {/* Glow 2: Top Right Blue Blur */}
      <div
        className="absolute -right-[200px] -top-[200px] w-[600px] sm:w-[900px] lg:w-[1137px] h-[600px] sm:h-[900px] lg:h-[1137px] rounded-full blur-[40px] lg:blur-[60px] pointer-events-none z-0 opacity-50"
        style={{
          background:
            "radial-gradient(circle, rgba(29, 78, 216, 0.15) 0%, rgba(29, 78, 216, 0.03) 50%, transparent 70%)",
        }}
      />

      {/* Glow 3: Middle Left Blue Blur */}
      <div
        className="absolute -left-[300px] top-[30%] w-[500px] sm:w-[800px] lg:w-[1137px] h-[500px] sm:h-[800px] lg:h-[1137px] rounded-full blur-[40px] lg:blur-[60px] pointer-events-none z-0 opacity-60"
        style={{
          background:
            "radial-gradient(circle, rgba(29, 78, 216, 0.2) 0%, rgba(29, 78, 216, 0.05) 50%, transparent 70%)",
        }}
      />

      {/* Glow 4: Bottom Right Blue Blur */}
      <div
        className="absolute -right-[200px] bottom-[5%] w-[600px] sm:w-[900px] lg:w-[1137px] h-[600px] sm:h-[900px] lg:h-[1137px] rounded-full blur-[40px] lg:blur-[60px] pointer-events-none z-0 opacity-70"
        style={{
          background:
            "radial-gradient(circle, rgba(29, 78, 216, 0.25) 0%, rgba(29, 78, 216, 0.05) 50%, transparent 70%)",
        }}
      />

      {/* Glow 5: Bottom Left Lime Blur */}
      <div
        className="absolute -left-[150px] bottom-0 w-[400px] sm:w-[600px] lg:w-[672px] h-[400px] sm:h-[600px] lg:h-[672px] rounded-full blur-[40px] lg:blur-[60px] pointer-events-none z-0 opacity-80"
        style={{
          background:
            "radial-gradient(circle, rgba(163, 230, 53, 0.6) 0%, rgba(163, 230, 53, 0.1) 45%, transparent 70%)",
        }}
      />

      {/* ================= MAIN CONTAINER ================= */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-16 lg:gap-24">
        {/* ================= ROW 1 ================= */}
        {/* Left: Professional Growth Content | Right: Student Graphic Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Text Column (Cols 1-6) */}
          <div className="lg:col-span-6 flex flex-col justify-start items-start gap-8 lg:gap-10">
            {/* Main Headline */}
            <h2 className="w-full lg:w-[577px] justify-start text-neutral-800 text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight sm:leading-snug lg:leading-[52.80px]">
              Your Path to Professional Growth Starts Here!
            </h2>

            {/* Paragraph Subtitle */}
            <p className="w-full lg:w-[477px] justify-start text-[#4B4C53] text-base sm:text-[16px] font-normal leading-relaxed sm:leading-7">
              Explore our curated selection of courses tailored to enhance your
              capabilities and accelerate your career journey. Whether you are
              looking to sharpen specific skills, gain industry expertise, or
              embark on a new career path entirely, we have the resources you
              need.
            </p>

            {/* Key Statistics Row */}
            <div className="flex flex-wrap items-center gap-8 sm:gap-12 lg:gap-14 pt-2">
              {STATS.map((stat) => (
                <div key={stat.label} className="flex flex-col justify-start items-start">
                  <span className="text-blue-700 text-3xl sm:text-4xl font-semibold lg:font-medium leading-none">
                    {stat.value}
                  </span>
                  <span className="text-[#4B4C53] text-base sm:text-lg font-normal font-['Satoshi'] mt-1 leading-7">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual Illustration Column (Cols 7-12) */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end items-center">
            <div className="relative w-full max-w-[621px] h-auto lg:h-[552px] flex items-center justify-center">
              <Image
                src="/professinal-growth/right-img.png"
                alt="Student learning professional growth illustration"
                width={621}
                height={552}
                priority
                className="w-full h-auto max-h-[552px] object-contain drop-shadow-2xl hover:scale-[1.01] transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        {/* ================= ROW 2 ================= */}
        {/* Left: Creator Management Graphic Visual | Right: Course Creation Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Visual Illustration Column (Cols 1-6) */}
          <div className="lg:col-span-6 flex justify-center lg:justify-start items-center order-2 lg:order-1">
            <div className="relative w-full max-w-[541px] h-auto lg:h-[596px] flex items-center justify-center">
              <Image
                src="/professinal-growth/left-img.svg"
                alt="Creator course management illustration"
                width={541}
                height={596}
                priority
                className="w-full h-auto max-h-[596px] object-contain drop-shadow-2xl hover:scale-[1.01] transition-transform duration-300"
              />
            </div>
          </div>

          {/* Right Text Column (Cols 7-12) */}
          <div className="lg:col-span-6 flex flex-col justify-start items-start gap-8 lg:gap-10 order-1 lg:order-2">
            {/* Main Headline */}
            <h2 className="w-full lg:w-[580px] justify-start text-neutral-800 text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight sm:leading-snug lg:leading-[52.80px]">
              Create &amp; Manage Courses Easily.
            </h2>

            {/* Paragraph Subtitle */}
            <p className="w-full lg:w-[574px] justify-start text-[#4B4C53] text-base sm:text-lg font-normal font-['Satoshi'] leading-relaxed sm:leading-7">
              <strong className="text-neutral-800 font-bold">ByteSpace</strong>{" "}
              supports individuals or entities in the creation, publication, and
              administration of educational courses.
            </p>

            {/* Checkmark Feature List */}
            <div className="flex flex-col justify-start items-start gap-4 sm:gap-5">
              {FEATURES.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-700 flex items-center justify-center shrink-0 shadow-sm">
                    <svg
                      className="w-3.5 h-3.5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-neutral-800 text-base sm:text-lg font-medium font-['Satoshi'] leading-6">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
