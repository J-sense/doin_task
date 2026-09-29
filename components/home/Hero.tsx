import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#03182B] text-white min-h-screen flex items-center pt-28 pb-16 md:pt-36 md:pb-24 px-6 md:px-12">
      {/* Background radial glows */}
      {/* <div className="absolute top-[20%] left-[-10%] w-[50%] h-[60%] rounded-full bg-[#00dfb6]/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-[30%] left-[15%] w-[40%] h-[50%] rounded-full bg-[#0ea5e9]/5 blur-[150px] pointer-events-none" /> */}
      {/* Immersive teal-cyan glows specifically behind and to the left of the diagram */}
      {/* <div className="absolute top-[20%] right-[32%] w-[45%] h-[55%] rounded-full bg-[#00dfb6]/10 blur-[130px] pointer-events-none" />
      <div className="absolute top-[15%] right-[-10%] w-[55%] h-[75%] rounded-full bg-[#0ea5e9]/12 blur-[140px] pointer-events-none" /> */}

      {/* Fine-line grid pattern in background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-size-[4rem_4rem] pointer-events-none opacity-20" />

      <div className="relative mx-auto max-w-[1700px] w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column (Hero Content) */}
        <div className="lg:col-span-6 flex flex-col">
          {/* Main Title Heading */}
          <h1 className="font-heading font-black text-[34px] sm:text-5xl lg:text-[56px] tracking-tight leading-[1.08] text-white uppercase max-w-md sm:max-w-lg md:max-w-xl lg:max-w-115 xl:max-w-135 2xl:max-w-160">
            Your <span className="text-[#00dfb6]">Growth</span>
            <br />
            shouldn't live
            <br />
            in silos.
          </h1>

          {/* Descriptive Subtitle */}
          <p className="mt-6 text-[#D4D4D4] text-sm sm:text-base font-light leading-relaxed max-w-md lg:max-w-100 xl:max-w-130 ">
            One connected ecosystem across business growth, strategy, marketing, SEO & AI visibility, social media and website & conversion — built around the growth outcome that matters most.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center w-full sm:w-auto">
            <Link
              href="#growth-canvas"
              className="group inline-flex items-center justify-center gap-1.5 rounded-sm bg-[#00B894] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-[#02111c] transition-all hover:bg-[#00f5d4] hover:scale-[1.02] shadow-[0_0_25px_rgba(0,223,182,0.2)] text-center w-full sm:w-auto "
            >
              Build Your Growth Canvas
              <ArrowUpRight className="size-4 stroke-[2.5px] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            <Link
              href="#what-we-do"
              className="group inline-flex items-center justify-center gap-1.5 rounded-sm bg-transparent px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-white/5 hover:border-slate-500 hover:scale-[1.02] text-center w-full sm:w-auto border-2 border-[#E5E7EB]"
            >
              Discover Our Ecosystem
              <ArrowUpRight className="size-4 stroke-[2.5px] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Highlight Stats Section */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-1 pt-8 w-3/4">
            {/* Stat 1 */}
            <div className="flex items-center gap-4">
              <span className="font-heading font-black text-4xl text-[#00dfb6]">
                6
              </span>
              <div className="flex flex-col text-[9px] font-bold uppercase tracking-widest text-slate-400 leading-tight">
                <span>Connected</span>
                <span>Growth Solutions</span>
              </div>
            </div>
            {/* Stat 2 */}
            <div className="flex items-center gap-4 border-t sm:border-t-0 sm:border-l border-slate-800/80 pt-4 sm:pt-0 sm:pl-6">
              <span className="font-heading font-black text-4xl text-[#00dfb6]">
                1
              </span>
              <div className="flex flex-col text-[9px] font-bold uppercase tracking-widest text-slate-400 leading-tight">
                <span>Accountable</span>
                <span>Growth Partner</span>
              </div>
            </div>
            {/* Stat 3 */}
            <div className="flex items-center gap-4 border-t sm:border-t-0 sm:border-l border-slate-800/80 pt-4 sm:pt-0 sm:pl-6">
              <span className="font-heading font-black text-4xl text-[#00dfb6]">
                12
              </span>
              <div className="flex flex-col text-[9px] font-bold uppercase tracking-widest text-slate-400 leading-tight">
                <span>Month Partnership</span>
                <span>Model</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column (Ecosystem Circular Diagram) */}
        <div className="lg:col-span-6 flex justify-center items-center relative mt-12 lg:mt-0 min-h-[280px] sm:min-h-[460px] lg:min-h-[560px] w-full">
          {/* Responsive Scaling Wrapper */}
          <div className="scale-[0.38] min-[380px]:scale-[0.45] min-[480px]:scale-[0.55] sm:scale-[0.72] md:scale-[0.85] lg:scale-[0.68] xl:scale-[0.88] 2xl:scale-100 origin-center transition-transform duration-300 relative w-[680px] h-[700px] shrink-0 flex items-center justify-center">
            {/* Background glowing rings */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              {/* Figma Middle Gradient Glow */}
              <div className="w-[582.73px] h-[554.21px] left-0 top-0 absolute bg-sky-900/30 rounded-[58px] blur-[81.30px] pointer-events-none" />

              {/* Thick glowing green-teal ring track matching the mockup */}
              <div className="absolute size-[510px] rounded-full border-[20px] border-[#00dfb6]/10 shadow-[0_0_50px_rgba(0,223,182,0.06)]" />

              {/* Orbiting dot */}
              <div className="absolute size-[510px] animate-[spin_45s_linear_infinite] pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 size-3.5 rounded-full bg-[#00dfb6] shadow-[0_0_20px_#00dfb6]" />
              </div>
            </div>

            {/* Central Squircle Badge */}
            <div className="relative z-10 size-44 p-4 bg-gradient-to-br from-slate-900 to-sky-950 rounded-full shadow-[0px_8.466667px_23.2833px_rgba(0,0,0,0.34),inset_0px_0px_0px_3.3866px_rgba(255,255,255,0.02)] outline outline-[0.42px] outline-offset-[-0.42px] outline-white/20 inline-flex flex-col justify-center items-center select-none">
              <div className="w-11 h-4 relative">
                <div className="left-[0.07px] top-[-0.32px] absolute text-center justify-start text-white text-xs font-extrabold font-sans leading-4">
                  Axudar
                </div>
                <div className="w-[2.54px] h-1 left-[40.50px] top-[-3.70px] absolute">
                  <div className="left-[-0.50px] top-[2.12px] absolute text-center justify-start text-[#00dfb6] text-[3.39px] font-extrabold font-sans">
                    ™
                  </div>
                </div>
              </div>
              <div className="w-24 h-4 pt-[0.85px] flex flex-col justify-start items-center">
                <div className="text-center justify-start text-[#00dfb6] text-base font-sans uppercase leading-4 font-black">
                  Ecosystem
                </div>
              </div>
              <div className="pt-2 flex flex-col justify-start items-center">
                <div className="text-center justify-start text-white/50 text-[5px] font-sans uppercase leading-[5.52px] tracking-tight">
                  Business Growth selected
                </div>
              </div>
            </div>

            {/* Floating Outer Cards (Uniform size, centered content, and precise positions) */}
            {/* Top Left - Leadership */}
            <div className="absolute left-[145px] top-10 w-[128px] h-[128px] bg-[#061931] border border-[#00dfb6]/35 hover:border-[#00dfb6] transition-colors flex items-center justify-center text-center rounded-[10px] text-white font-sans font-bold text-xs uppercase shadow-4xl tracking-widest cursor-default select-none">
              BUSINESS GROWTH
            </div>

            {/* Top Right - Strategy */}
            <div className="absolute right-[145px] top-10 w-[128px] h-[128px] bg-[#061931] border border-[#00dfb6]/35 hover:border-[#00dfb6] transition-colors flex items-center justify-center text-center rounded-[10px] text-white font-sans font-bold text-xs uppercase tracking-widest cursor-default select-none">
              Strategy
            </div>

            {/* Middle Left - Leadership */}
            <div className="absolute left-[20px] top-[250px] w-[128px] h-[128px] bg-[#061931] border border-[#00dfb6]/35 hover:border-[#00dfb6] transition-colors flex items-center justify-center text-center rounded-[10px] text-white font-sans font-bold text-xs uppercase tracking-widest cursor-default select-none">
              SEO & AI VISIBILITY
            </div>

            {/* Middle Right - Marketing */}
            <div className="absolute right-[20px] top-[270px] w-[128px] h-[128px] bg-[#061931] border border-[#00dfb6]/35 hover:border-[#00dfb6] transition-colors flex items-center justify-center text-center rounded-[10px] text-white font-sans font-bold text-xs uppercase tracking-widest cursor-default select-none">
              SOCIAL
              MEDIA
            </div>

            {/* Bottom Left - Digital */}
            <div className="absolute left-[145px] bottom-10 w-[128px] h-[128px] bg-[#061931] border border-[#00dfb6]/35 hover:border-[#00dfb6] transition-colors flex items-center justify-center text-center rounded-[10px] text-white font-sans font-bold text-xs uppercase tracking-widest cursor-default select-none">
              WEBSITE &
              CONVERSION
            </div>

            {/* Bottom Right - Digital */}
            <div className="absolute right-[145px] bottom-10 w-[128px] h-[128px] bg-[#061931] border border-[#00dfb6]/35 hover:border-[#00dfb6] transition-colors flex items-center justify-center text-center rounded-[10px] text-white font-sans font-bold text-xs uppercase tracking-widest cursor-default select-none">
              MARKETING
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
