"use client";

import Image from "next/image";
import { GridBackground } from "@/components/shared/grid-background";

export function CreatorCtaSection() {
  return (
    <section className="relative w-full overflow-hidden text-white select-none">
      {/* 1. Top Left Corner Asset (Pinned strictly to absolute section corner left-0 top-0) */}
      <div className="absolute left-0 top-0 pointer-events-none select-none z-30">
        <Image
          src="/unlock/top-left-corner.png"
          alt="Decorative top left corner asset"
          width={320}
          height={380}
          priority
          className="w-[200px] sm:w-[280px] lg:w-[300px] h-auto object-contain"
        />
      </div>

      {/* 4. Lower Left Circle ("left-bottom-circle.png") Pinned strictly to section bottom-0 left-[10%] */}
      <div className="hidden sm:block absolute left-[-2%] sm:left-[5%] lg:left-[2%] bottom-0 pointer-events-none select-none z-30">
        <Image
          src="/unlock/left-bottom-circle.png"
          alt="Decorative 3D left bottom circle"
          width={300}
          height={300}
          priority
          className="w-[180px] sm:w-[240px] lg:w-[290px] h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.35)]"
        />
      </div>

      {/* 5. Lower Right Asset ("right-bottom.png") Pinned strictly to section bottom-0 right-0 */}
      <div className="hidden sm:block absolute right-0 bottom-0 pointer-events-none select-none z-30">
        <Image
          src="/unlock/right-bottom.png"
          alt="Decorative 3D right bottom asset"
          width={300}
          height={320}
          priority
          className="w-[180px] sm:w-[240px] lg:w-[290px] h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.35)]"
        />
      </div>

      <GridBackground className="relative w-full min-h-[488px] flex items-center justify-center">
        {/* ================= FULL-WIDTH LEFT SIDE 3D ASSETS ================= */}

        {/* 2. Upper Middle Left White Spring Helix */}
        <div className="hidden lg:block absolute left-[180px] xl:left-[240px] top-[20px] pointer-events-none select-none z-10">
          <Image
            src="/right-frame.png"
            alt="Decorative 3D spring"
            width={130}
            height={130}
            priority
            className="w-[90px] lg:w-[130px] h-auto object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.3)]"
          />
        </div>

        {/* 3. Middle-Left White Cone ("left-pizza.png") Pinned to left-0 */}
        <div className="absolute left-0 bottom-[90px] sm:bottom-[10px] pointer-events-none select-none z-20">
          <Image
            src="/unlock/left-pizza.png"
            alt="Decorative 3D left pizza cone"
            width={180}
            height={180}
            priority
            className="w-[100px] sm:w-[130px] lg:w-[130px] h-auto object-contain drop-shadow-xl"
          />
        </div>

        {/* ================= FULL-WIDTH RIGHT SIDE 3D ASSETS ================= */}
        {/* 1. Upper Right Lime Pyramid */}
        <div className="hidden lg:block absolute right-[180px] xl:right-[240px] top-[30px] pointer-events-none select-none z-10">
          <Image
            src="/tringle-right.png"
            alt="Decorative 3D lime pyramid"
            width={180}
            height={180}
            priority
            className="w-[120px] lg:w-[170px] h-auto object-contain drop-shadow-xl"
          />
        </div>

        {/* 2. Far Right White Square Cylinder ("right-squrea.png") Pinned to right-0 top-[2%] */}
        <div className="hidden sm:block absolute right-0 -top-[15%] pointer-events-none select-none z-10">
          <Image
            src="/unlock/right-squrea.png"
            alt="Decorative 3D right square cylinder"
            width={370}
            height={370}
            priority
            className="w-[220px] sm:w-[300px] lg:w-[180px] h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.35)]"
          />
        </div>



        {/* ================= CENTER CONTENT ================= */}
        <div className="relative z-30 max-w-4xl mx-auto flex flex-col justify-center items-center gap-6 sm:gap-8 px-4 sm:px-6 text-center">
          {/* Headline */}
          <h2 className="w-full max-w-[710px] text-center text-neutral-100 text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight sm:leading-[52.80px]">
            Unlock Your Potential as a Creator with ByteSpace
          </h2>

          {/* Subtitle */}
          <p className="w-full max-w-[964px] text-center text-neutral-100 text-sm sm:text-base lg:text-lg font-normal leading-relaxed sm:leading-7 opacity-95">
            Experience the collaboration of numerous creators and an expanding
            selection of courses. Register now and become a part of a community
            comprising over 10,000 local and international creators. Utilize
            our Course Editor, and showcase your expertise by publishing your
            finest course on the ByteSpace Course Library.
          </p>

          {/* CTA Button */}
          <button
            type="button"
            className="px-7 sm:px-8 py-3 sm:py-3.5 bg-[#D4FB20] hover:brightness-95 rounded-3xl inline-flex justify-center items-center gap-2 text-neutral-800 text-base sm:text-lg font-medium leading-5 transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer select-none shrink-0 shadow-lg"
          >
            Join as Creator
          </button>
        </div>

      </GridBackground>
    </section>
  );
}
