import Link from "next/link";

interface Hero404Props {
  className?: string;
}

/**
 * Hero404 (Server Component)
 * Pixel-accurate recreation of the ByteSpace 404 section shown in the reference image.
 * Features the signature electric-lime gradient "404", clean white typography,
 * and the glowing lime "Back to Home" pill button.
 */
export function Hero404({ className = "" }: Hero404Props) {
  return (
    <section
      className={`flex-1 flex flex-col items-center justify-center text-center px-4 py-8 sm:py-16 my-auto select-none ${className}`}
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        {/* Giant 404 with Electric Lime to Deep Olive Gradient */}
        <div className="relative leading-none">
          <h1
            className="text-[9.5rem] sm:text-[14rem] md:text-[17rem] lg:text-[19rem] font-extrabold tracking-tighter leading-none select-none text-bytespace-lime-gradient font-sans"
            style={{
              textShadow: "0 10px 40px rgba(0,0,0,0.25)",
            }}
          >
            404
          </h1>
        </div>

        {/* Headline */}
        <h2 className="text-2.5xl sm:text-4.5xl md:text-5xl lg:text-5.5xl font-bold tracking-tight text-white leading-tight mt-[-1rem] sm:mt-[-2.5rem] md:mt-[-3.5rem] max-w-2xl px-4 text-balance">
          The page you are looking for doesn’t exist
        </h2>

        {/* Subtitle */}
        <p className="text-white/75 text-xs sm:text-sm font-normal mt-4 sm:mt-5 max-w-md mx-auto px-4 tracking-normal">
          Try to use a correct url or go back to homepage to start again
        </p>

        {/* Action Button */}
        <div className="mt-6 sm:mt-8">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 sm:px-7 py-2.5 sm:py-3 rounded-full bg-[#d4ff00] text-black font-semibold text-xs sm:text-sm tracking-tight transition-all duration-200 hover:bg-[#e2ff3b] hover:scale-105 active:scale-95 shadow-[0_0_25px_rgba(212,255,0,0.35)]"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
