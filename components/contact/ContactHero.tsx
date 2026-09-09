export function ContactHero() {
  return (
    <section className="relative w-full bg-[#00233F] pt-36 pb-24 md:pt-44 md:pb-32 px-6 md:px-12 lg:px-20 overflow-hidden flex items-center min-h-[620px]">
      {/* Background glow layers */}
      {/* Center blur gradient glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[279px] bg-[#09799e] rounded-[58px] blur-[81.30px]" />

      {/* Right diagonal green-teal accent strip */}
      <div className="absolute top-0 right-0 h-full w-[350px] ml-24 bg-gradient-to-br from-[#0DAE8759] to-transparent transform skew-x-[-16deg] origin-right-auto pointer-events-none" />

      <div className="mx-auto max-w-[1400px] w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headings and CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <h1 className="font-sans font-black text-[20px] sm:text-[44px] lg:text-[40px]  text-white  tracking-normal max-w-full">
              Let's build something stronger together.
            </h1>

            <p className="mt-6 text-slate-400 text-sm sm:text-base font-light leading-relaxed max-w-xl">
              Whether you want clearer commercial direction, stronger online
              visibility or a better-connected growth plan, tell us where you
              are now and what needs to change.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto">
              <a
                href="#enquiry-form"
                className="w-full sm:w-auto bg-[#00dfb6] hover:bg-[#18d1ad] transition-colors duration-200 text-[#02111c] font-sans font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-sm flex items-center justify-center gap-2 select-none"
              >
                <span>Send an enquiry</span>
                <span className="text-sm">↓</span>
              </a>

              <a
                href="tel:03301335720"
                className="w-full sm:w-auto text-white hover:text-[#00dfb6] transition-colors duration-200 font-sans font-bold text-xs uppercase tracking-widest py-4 flex items-center justify-center gap-2 underline underline-offset-4 decoration-white/20 hover:decoration-[#00dfb6]/40 select-none"
              >
                <span>Call the Axudar Team</span>
                <span>↗</span>
              </a>
            </div>
          </div>

          {/* Right Column: Contact details card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-[380px] bg-[#03182B]/40 border border-white/5 rounded-sm p-8 backdrop-blur-md shadow-2xl flex flex-col gap-6">
              <h3 className="text-white font-sans font-bold text-lg sm:text-xl tracking-tight mb-2">
                Clear answers. No pressure.
              </h3>

              {/* Info Items */}
              <div className="flex flex-col gap-5">
                {/* Email */}
                <div className="flex flex-col gap-1">
                  <span className="text-slate-500 text-[9px] font-mono uppercase tracking-widest font-semibold">
                    Email
                  </span>
                  <a
                    href="mailto:hello@axudargroup.com"
                    className="text-[#00dfb6] hover:text-[#18d1ad] font-sans font-bold text-sm tracking-wide transition-colors duration-200"
                  >
                    hello@axudargroup.com
                  </a>
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-1">
                  <span className="text-slate-500 text-[9px] font-mono uppercase tracking-widest font-semibold">
                    Phone
                  </span>
                  <a
                    href="tel:03301335720"
                    className="text-[#00dfb6] hover:text-[#18d1ad] font-sans font-bold text-sm tracking-wide transition-colors duration-200"
                  >
                    0330 133 5720
                  </a>
                </div>

                {/* Business Hours */}
                <div className="flex flex-col gap-1">
                  <span className="text-slate-500 text-[9px] font-mono uppercase tracking-widest font-semibold">
                    Business Hours
                  </span>
                  <span className="text-white font-sans font-bold text-sm tracking-wide">
                    Monday–Friday 8am–6pm
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
