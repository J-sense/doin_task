import Link from "next/link";

interface Hero404Props {
  className?: string;
}

export function Hero404({ className = "" }: Hero404Props) {
  return (
    <div
      className={`relative w-full max-w-[1440px] mx-auto flex flex-col items-center justify-center text-center px-4 sm:px-6 select-none ${className}`}
    >
      <div className="relative w-full flex items-center justify-center leading-none">
        <h1 className="text-center text-bytespace-lime-gradient text-[160px] xs:text-[220px] sm:text-[320px] md:text-[400px] lg:text-[480px] font-semibold leading-none select-none tracking-tight">
          404
        </h1>
      </div>

      <div className="flex flex-col items-center justify-center gap-6 sm:gap-8 -mt-12 xs:-mt-16 sm:-mt-28 md:-mt-36 lg:-mt-44 relative z-10 max-w-[935px] mx-auto">
        <h2 className="w-full max-w-[935px] text-center text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight sm:leading-tight lg:leading-[86.40px] text-balance">
          The page you are looking for doesn’t exist
        </h2>

        <p className="text-center text-zinc-200 text-sm sm:text-base lg:text-lg font-normal leading-relaxed sm:leading-7 max-w-2xl text-balance">
          Try to use a correct url or go back to homepage to start again
        </p>

        <Link
          href="/"
          className="px-6 py-3 bg-[#D4FB20] hover:brightness-95 active:scale-95 rounded-3xl inline-flex justify-center items-center gap-2 text-neutral-800 text-base sm:text-lg font-medium leading-5 transition-all cursor-pointer shadow-lg"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
