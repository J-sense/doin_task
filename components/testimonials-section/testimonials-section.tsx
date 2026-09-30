"use client";

import Image from "next/image";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  avatarUrl: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: "sarah",
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    quote:
      '"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."',
    avatarUrl:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: "james",
    name: "James L.",
    role: "Lifelong Learner",
    quote:
      '"I\'ve tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."',
    avatarUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: "alex",
    name: "Alex B.",
    role: "Inspired Creator",
    quote:
      '"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It\'s fulfilling to see my courses making a positive impact on learners globally."',
    avatarUrl:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
  },
];

export function TestimonialsSection() {
  return (
    <section className="relative w-full bg-neutral-50 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden select-none">
      {/* Background Radial Glow Blobs matching Figma specs */}
      <div className="pointer-events-none absolute -right-32 -top-40 w-[600px] sm:w-[900px] h-[600px] sm:h-[900px] bg-lime-400/35 rounded-full blur-[100px]" />
      <div className="pointer-events-none absolute left-1/3 -top-24 w-[450px] h-[450px] bg-lime-400/40 rounded-full blur-[90px]" />
      <div className="pointer-events-none absolute -left-40 bottom-0 w-[600px] h-[600px] bg-blue-700/20 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Block: 2 Columns on Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-end mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-black leading-tight tracking-tight">
            Discover What Our Community Is Saying
          </h2>
          <p className="text-neutral-600 text-base sm:text-lg font-normal leading-7">
            At ByteSpace, our vibrant community of learners and creators is at
            the heart of what we do. Hear directly from those who have
            experienced the transformative journey of learning and creating on
            our platform. Explore testimonials that reflect the diverse
            perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="p-6 bg-white rounded-3xl flex flex-col justify-start items-start gap-6 shadow-[0_4px_24px_rgba(0,0,0,0.03)] border border-neutral-100/80 hover:shadow-md transition-shadow"
            >
              {/* Avatar Image */}
              <div className="relative size-20 rounded-full overflow-hidden shrink-0">
                <Image
                  src={item.avatarUrl}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Name & Role */}
              <div className="flex flex-col justify-start items-start">
                <div className="justify-start text-black text-xl font-semibold leading-6">
                  {item.name}
                </div>
                <div className="justify-start text-blue-700 text-lg font-normal leading-7">
                  {item.role}
                </div>
              </div>

              {/* Testimonial Quote */}
              <div className="justify-start text-neutral-600 text-lg font-normal leading-7">
                {item.quote}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
