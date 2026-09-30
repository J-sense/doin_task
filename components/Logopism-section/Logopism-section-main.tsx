import Image from "next/image";

const logos = [
    { id: 1, src: "/logoipsum.png", name: "Logoipsum", alt: "Logoipsum 1" },
    { id: 2, src: "/logipism2nd.svg", name: "Logoipsum", alt: "Logoipsum 2" },
    { id: 3, src: "/logoipsum1.png", name: "Logoipsum", alt: "Logoipsum 3" },
    { id: 4, src: "/logoipsum3.png", name: "Logoipsum", alt: "Logoipsum 4" },
    { id: 5, src: "/logoipsum4.png", name: "Logoipsum", alt: "Logoipsum 5" },
];

export default function LogoipsumSectionMain() {
    return (
        <section className="w-full min-h-[208px] bg-neutral-100 flex items-center justify-center py-12 lg:py-16 overflow-hidden select-none">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16 w-full">
                <div className="flex flex-wrap items-center justify-center lg:justify-between gap-8 sm:gap-12 lg:gap-16">
                    {logos.map((logo) => (
                        <div
                            key={logo.id}
                            className="w-36 sm:w-40 lg:w-44 h-10 flex items-center justify-start sm:justify-center gap-2.5 shrink-0 opacity-80 hover:opacity-100 transition-opacity duration-200"
                        >
                            <Image
                                src={logo.src}
                                alt={logo.alt}
                                width={32}
                                height={32}
                                className="h-7 sm:h-8 lg:h-9 w-auto object-contain shrink-0"
                            />
                            <span className="text-lg sm:text-xl lg:text-[22px] font-bold text-[#82868E] tracking-tight">
                                {logo.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}