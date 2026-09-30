import Image from "next/image";

const logos = [
  { id: 1, src: "/logoipsum.png", alt: "Logoipsum 1" },
  { id: 2, isSvgWithText: true, icon: "/logipism2nd.svg", alt: "Logoipsum 2" },
  { id: 3, src: "/logoipsum1.png", alt: "Logoipsum 3" },
  { id: 4, src: "/logoipsum3.png", alt: "Logoipsum 4" },
  { id: 5, src: "/logoipsum4.png", alt: "Logoipsum 5" },
];

export default function LogoipsumSectionMain() {
  return (
    <section className="w-full bg-[#f4f4f6] py-12 sm:py-16 md:py-20 select-none">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center sm:justify-between gap-8 sm:gap-10 md:gap-12 lg:gap-16">
          {logos.map((logo) => (
            <div
              key={logo.id}
              className="flex items-center justify-center gap-2.5 opacity-80 hover:opacity-100 transition-opacity duration-200"
            >
              {logo.isSvgWithText ? (
                <div className="flex items-center gap-2">
                  <Image
                    src={logo.icon}
                    alt={logo.alt}
                    width={28}
                    height={28}
                    className="h-6 sm:h-7.5 w-auto object-contain"
                  />
                  <span className="text-base sm:text-lg md:text-xl font-bold text-[#82868E] tracking-tight">
                    Logoipsum
                  </span>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Image
                    src={logo.src!}
                    alt={logo.alt}
                    width={150}
                    height={40}
                    className="h-6 sm:h-7.5 md:h-8 w-auto object-contain"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}