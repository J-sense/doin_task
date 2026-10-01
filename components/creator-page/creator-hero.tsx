"use client";

import Image from "next/image";

interface CreatorHeroData {
  name: string;
  tagline: string;
  bio: string;
  avatar: string;
  productsCount: number;
  followersCount: number;
}

const CREATOR_DATA: CreatorHeroData = {
  name: "PurePearl Studio",
  tagline: "Passionate UI/UX, Web designer",
  bio: "Welcome to the creative world of PurePearl Studio. Here, you'll discover the passion, expertise, and inspiration that drive my creative journey. Let's explore and learn together!\n\nDive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia projects, each piece tells a unique story. Explore the world of creativity with me.",
  avatar:
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
  productsCount: 3,
  followersCount: 12,
};

export function CreatorHero() {
  const creator = CREATOR_DATA;

  return (
    <div className="relative w-full h-auto min-h-[480px] sm:min-h-[540px] lg:h-[592px] bg-blue-700 overflow-hidden">
      <div className="absolute inset-0 bg-bytespace-grid pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 lg:pt-28 pb-12 lg:pb-16 flex flex-col gap-10">

        <div className="flex flex-col justify-start items-start gap-10">

          <div className="flex flex-col sm:flex-row justify-start items-start sm:items-center gap-6">
            <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-3xl overflow-hidden shrink-0 bg-neutral-200">
              <Image
                src={creator.avatar}
                alt={creator.name}
                width={96}
                height={96}
                className="w-full h-full object-cover"
                priority
              />
            </div>

            <div className="flex flex-col justify-start items-start gap-2">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                <h1 className="text-neutral-100 text-3xl sm:text-4xl font-semibold leading-10">
                  {creator.name}
                </h1>
                <span className="px-6 py-2 bg-[#D4FB20] rounded-3xl text-neutral-800 text-base font-medium leading-5 shrink-0">
                  Creator
                </span>
              </div>
              <p className="text-neutral-100 text-base sm:text-lg font-normal leading-7">
                {creator.tagline}
              </p>
            </div>
          </div>

          <div className="w-full max-w-4xl text-neutral-100 text-base sm:text-lg font-normal leading-7 whitespace-pre-line">
            {creator.bio}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">

          <div className="flex flex-wrap items-center gap-4">
            <div className="px-6 py-3 bg-white rounded-3xl backdrop-blur-[20px] flex justify-center items-center gap-2">
              <span className="text-blue-700 text-lg font-medium leading-5">
                {creator.productsCount}
              </span>
              <span className="text-neutral-800 text-lg font-medium leading-5">
                Products
              </span>
            </div>
            <div className="px-6 py-3 bg-white rounded-3xl backdrop-blur-[20px] flex justify-center items-center gap-2">
              <span className="text-blue-700 text-lg font-medium leading-5">
                {creator.followersCount}
              </span>
              <span className="text-neutral-800 text-lg font-medium leading-5">
                Followers
              </span>
            </div>
          </div>

          <button
            type="button"
            className="px-6 py-3 bg-[#D4FB20] rounded-3xl flex justify-center items-center gap-2 text-neutral-900 text-lg font-medium leading-5 cursor-pointer hover:brightness-95 active:scale-95 transition-all"
          >
            Follow
          </button>
        </div>
      </div>
    </div>
  );
}
