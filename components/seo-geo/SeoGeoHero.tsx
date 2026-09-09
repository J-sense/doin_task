

export function SeoGeoHero() {
  return (
    <section className="relative w-full bg-[#00233F] text-white overflow-hidden pt-36 pb-24 md:pt-44 md:pb-32 px-6 md:px-12 lg:px-20 min-h-[660px] flex items-center">
      {/* Background fine line grid */}
      {/* <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none opacity-20" /> */}

      {/* Center glowing gradient light with #01526D */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-[#01526D] rounded-[58px] blur-[85px] pointer-events-none opacity-80 z-0" />

      {/* Right diagonal green-teal solid/gradient panel matching reference screenshot */}
      <div
        className="absolute top-0 right-0 h-full w-[360px] sm:w-[480px] md:w-[560px] lg:w-[620px] bg-[#074b57] pointer-events-none z-0"
        style={{
          clipPath: "polygon(22% 0, 100% 0, 100% 100%, 0% 100%)",
        }}
      />

      <div className="mx-auto max-w-[1700px] w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Headings & Subtitle */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <h1 className="font-heading font-black text-5xl sm:text-6xl lg:text-[68px] tracking-tight leading-[0.95] uppercase">
              <span className="text-white block">SEO &amp; GEO</span>
              <span className="text-[#00dfb6] block lowercase font-black mt-1">explained.</span>
            </h1>

            <p className="mt-8 text-slate-300 text-sm sm:text-base font-light leading-relaxed max-w-lg">
              Each Axudar solution is designed as part of the same connected
              ecosystem — so the capability you engage today can connect
              seamlessly with everything else.
            </p>
          </div>

          {/* Right Column: Customer Question Card */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="w-full max-w-[900px] bg-[#021729]/85 border border-white/10 rounded-xl p-7 sm:p-10 backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,0.5)] flex flex-col justify-between">
              <div>
                {/* Badge Label */}
                <span className="text-[#00dfb6] text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase font-sans">
                  A REAL CUSTOMER QUESTION
                </span>

                {/* Main Question Quote */}
                <h2 className="mt-5 text-xl sm:text-2xl font-bold text-white leading-snug tracking-tight font-sans">
                  &ldquo;Who can help my business become more visible locally and appear in AI-generated answers?&rdquo;
                </h2>
              </div>

              {/* 3 Horizontal Sub-Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mt-8 sm:mt-10">
                {/* Sub Card 1 */}
                <div className="bg-[#07223b]/90 border border-white/5 rounded-lg p-4 sm:p-5 flex flex-col justify-between transition-transform hover:translate-y-[-2px]">
                  <span className="text-[#00dfb6] font-bold text-lg sm:text-xl leading-none mb-3 font-sans">
                    01
                  </span>
                  <div>
                    <h3 className="text-white font-extrabold text-xs tracking-wider uppercase font-sans mb-1">
                      FIND YOU
                    </h3>
                    <p className="text-slate-400 text-[11px] sm:text-xs leading-tight font-normal">
                      Search and AI visibility
                    </p>
                  </div>
                </div>

                {/* Sub Card 2 */}
                <div className="bg-[#07223b]/90 border border-white/5 rounded-lg p-4 sm:p-5 flex flex-col justify-between transition-transform hover:translate-y-[-2px]">
                  <span className="text-[#00dfb6] font-bold text-lg sm:text-xl leading-none mb-3 font-sans">
                    02
                  </span>
                  <div>
                    <h3 className="text-white font-extrabold text-xs tracking-wider uppercase font-sans mb-1">
                      UNDERSTAND YOU
                    </h3>
                    <p className="text-slate-400 text-[11px] sm:text-xs leading-tight font-normal">
                      Clear structure and context
                    </p>
                  </div>
                </div>

                {/* Sub Card 3 */}
                <div className="bg-[#07223b]/90 border border-white/5 rounded-lg p-4 sm:p-5 flex flex-col justify-between transition-transform hover:translate-y-[-2px]">
                  <span className="text-[#00dfb6] font-bold text-lg sm:text-xl leading-none mb-3 font-sans">
                    03
                  </span>
                  <div>
                    <h3 className="text-white font-extrabold text-xs tracking-wider uppercase font-sans mb-1">
                      CHOOSE YOU
                    </h3>
                    <p className="text-slate-400 text-[11px] sm:text-xs leading-tight font-normal">
                      Trust and easy next steps
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
