import Link from "next/link";

export function SeoGeoConsultationBanner() {
  return (
    <section className="relative isolate w-full bg-[#00233F] text-white overflow-hidden py-16 md:py-24 border-t border-white/5">
      {/* Ambient Center Glow using #07506A */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#07506A] rounded-full blur-[90px] pointer-events-none z-0 opacity-80" />

      {/* Background Axudar Watermark Typography */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden select-none z-0"
        aria-hidden="true"
      >
        <span className="font-heading text-[160px] sm:text-[230px] md:text-[290px] lg:text-[340px] font-black leading-none tracking-tight text-white/[0.12] uppercase whitespace-nowrap translate-y-2">
          Axudar
        </span>
      </div>

      <div className="mx-auto max-w-[1700px] w-full px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 relative z-10">
        {/* Left Column: Heading & Description */}
        <div className="max-w-2xl">
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-[38px] tracking-tight leading-[1.15] text-white">
            Now the terminology is clear.
            <br />
            Let&rsquo;s make the opportunity clear.
          </h2>
          <p className="mt-4 text-slate-300 text-xs sm:text-sm leading-relaxed max-w-xl font-normal">
            Book a free 30-minute consultation and we will show you where SEO
            and GEO can make the biggest commercial difference first.
          </p>
        </div>

        {/* Right Column: CTA Button */}
        <div className="shrink-0">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-[#00B894] px-6 py-4 text-xs sm:text-sm font-bold tracking-wider text-black transition-all hover:bg-[#18d1ad] hover:scale-[1.02] shadow-[0_0_25px_rgba(0,223,182,0.2)] text-center"
          >
            Book a free consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
