import Image from "next/image";
import learningProgressImg from "@/public/learnig-prgress.png";
import uiUxImg from "@/public/ui-ux.png";

interface HeroVisualProps {
  className?: string;
  showCards?: boolean;
}

export function HeroVisual({ className = "", showCards = true }: HeroVisualProps) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 z-20 w-full h-full overflow-hidden select-none ${className}`}
      aria-hidden="true"
    >
      <div className="relative w-full h-full max-w-[1440px] mx-auto">
        {/* ================= LEFT SIDE 3D ASSETS ================= */}
        {/* 1. Upper Left: green-left.png (Coiled lime tube entering from left edge) */}
        <div className="hidden sm:block absolute left-[-20px] md:left-[-10px] lg:left-0 top-[180px] sm:top-[200px] md:top-[220px] z-10 select-none">
          <Image
            src="/green-left.png"
            alt="ByteSpace decorative green left coil"
            width={267}
            height={387}
            priority
            className="w-[160px] sm:w-[200px] md:w-[230px] lg:w-[260px] h-auto object-contain select-none drop-shadow-[0_20px_40px_rgba(0,0,0,0.35)]"
          />
        </div>

        {/* 2. Middle Left: right-frame.png (Small spring helix) */}
        <div className="hidden sm:block absolute left-12 sm:left-20 md:left-24 lg:left-38 top-[410px] sm:top-[500px] z-15 select-none transition-transform duration-500 hover:scale-105">
          <Image
            src="/right-frame.png"
            alt="ByteSpace decorative 3D frame"
            width={140}
            height={140}
            priority
            className="w-[75px] sm:w-[95px] md:w-[115px] lg:w-[135px] h-[75px] sm:h-[95px] md:h-[115px] lg:h-[135px] object-contain select-none drop-shadow-[0_15px_35px_rgba(0,0,0,0.3)]"
          />
        </div>

        {/* 3. Lower Left: left-circle.png (342px x 342px white torus) */}
        <div className="hidden sm:block absolute left-[-40px] md:left-[-20px] lg:left-[-10px] xl:left-4 bottom-[80px] sm:bottom-[110px] md:bottom-[0px] z-15 select-none transition-transform duration-500 hover:scale-105">
          <Image
            src="/left-circle.png"
            alt="ByteSpace decorative 3D left circle"
            width={342}
            height={342}
            priority
            className="w-[220px] sm:w-[270px] md:w-[310px] lg:w-[302px] h-[220px] sm:h-[270px] md:h-[310px] lg:h-[342px] object-contain select-none drop-shadow-[0_20px_40px_rgba(0,0,0,0.35)]"
          />
        </div>

        {/* ================= RIGHT SIDE 3D ASSETS ================= */}
        {/* 1. Upper Right: green-right.png (Lime cylinder entering from right edge) */}
        <div className="hidden sm:block absolute right-[-20px] md:right-[-10px] lg:right-0 top-[170px] sm:top-[190px] md:top-[210px] z-10 select-none">
          <Image
            src="/green-right.png"
            alt="ByteSpace decorative green right cylinder"
            width={213}
            height={372}
            priority
            className="w-[140px] sm:w-[170px] md:w-[195px] lg:w-[220px] h-auto object-contain select-none drop-shadow-[0_20px_40px_rgba(0,0,0,0.35)]"
          />
        </div>

        {/* 2. Middle Right: tringle-right.png (188px x 188px white pyramid) */}
        <div className="hidden sm:block absolute right-12 sm:right-20 md:right-28 lg:right-42 top-[400px] sm:top-[430px] z-15 select-none transition-transform duration-500 hover:scale-105">
          <Image
            src="/tringle-right.png"
            alt="ByteSpace decorative 3D right triangle"
            width={188}
            height={188}
            priority
            className="w-[110px] sm:w-[140px] md:w-[165px] lg:w-[188px] h-[110px] sm:h-[140px] md:h-[165px] lg:h-[188px] object-contain select-none drop-shadow-[0_15px_35px_rgba(0,0,0,0.3)]"
          />
        </div>

        {/* 3. Lower Right: right-frame.png (330px x 330px white spring helix) */}
        <div className="hidden sm:block absolute right-[-40px] md:right-[-20px] lg:right-[-10px] xl:right-4 bottom-[70px] sm:bottom-[90px] md:bottom-[10px] z-15 select-none transition-transform duration-500 hover:scale-105">
          <Image
            src="/right-frame.png"
            alt="ByteSpace decorative 3D right frame"
            width={330}
            height={330}
            priority
            className="w-[200px] sm:w-[250px] md:w-[290px] lg:w-[330px] h-[200px] sm:h-[250px] md:h-[290px] lg:h-[330px] object-contain select-none drop-shadow-[0_20px_40px_rgba(0,0,0,0.35)]"
          />
        </div>

        {/* ================= CENTER COMPOSITION ================= */}
        {/* Layer 1: Background Electric Lime Ring (Ellipse 7) */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 w-[96%] max-w-[1100px] flex justify-center">
          <Image
            src="/Ellipse 7.png"
            alt="ByteSpace decorative ellipse"
            width={1200}
            height={480}
            priority
            className="w-full h-auto object-contain object-bottom select-none drop-shadow-[0_0_70px_rgba(212,255,0,0.35)] translate-y-[2px]"
          />
        </div>

        {/* Layer 2: Center Person (`men.png`) in front of Ellipse 7 */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 flex justify-center items-end">
          <Image
            src="/men.png"
            alt="ByteSpace student smiling with headphones and laptop"
            width={700}
            height={650}
            priority
            className="w-[360px] sm:w-[460px] md:w-[560px] lg:w-[700px] h-auto object-contain object-bottom select-none drop-shadow-[0_15px_35px_rgba(0,0,0,0.35)] translate-y-[1px]"
          />

          {/* Floating Metric Cards from Figma reference */}
          {showCards && (
            <>
              {/* Card 1: Top-Left "UI/UX Design" */}
              <div className="hidden sm:flex absolute left-[-4px] md:left-[-70px] lg:left-[-0px] top-[140px] md:top-[120px] z-30 pointer-events-auto animate-in fade-in slide-in-from-left-4 duration-500">
                <Image
                  src={uiUxImg}
                  alt="UI/UX Design - 200 Courses, 1000+ Students"
                  priority
                  className="w-auto h-auto object-contain select-none drop-shadow-[0_16px_36px_rgba(0,0,0,0.25)] transition-transform hover:-translate-y-1"
                />
              </div>

              {/* Card 2: Bottom-Left "Happy Students" */}
              <div className="hidden sm:flex absolute left-[-50px] md:-left-22.5 lg:-left-14 bottom-10 md:bottom-[50px] z-30 pointer-events-auto animate-in fade-in slide-in-from-left-4 duration-500">
                <Image
                  src="/happy-clients.png"
                  alt="Happy Students"
                  width={258}
                  height={121}
                  priority
                  className="w-[208px] h-[121px] object-contain select-none drop-shadow-[0_16px_36px_rgba(0,0,0,0.25)] transition-transform hover:-translate-y-1"
                />
              </div>

              {/* Card 3: Right "Learning Progress 55%" */}
              <div className="hidden sm:flex absolute right-[-40px] md:right-[-70px] lg:right-[-50px] top-[180px] md:top-[100px] z-30 pointer-events-auto animate-in fade-in slide-in-from-right-4 duration-500">
                <Image
                  src={learningProgressImg}
                  alt="Learning Progress 55%"
                  priority
                  className="w-auto h-auto object-contain select-none drop-shadow-[0_16px_36px_rgba(0,0,0,0.25)] transition-transform hover:-translate-y-1"
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
