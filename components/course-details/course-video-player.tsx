"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

interface CourseVideoPlayerProps {
  coverUrl: string;
  title: string;
}

export function CourseVideoPlayer({ coverUrl, title }: CourseVideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="w-full max-w-[720px] h-auto lg:h-[479px] aspect-[720/479] relative rounded-3xl overflow-hidden shadow-2xl group select-none bg-neutral-900">
      {!isPlaying ? (
        <>
          <Image
            src={coverUrl}
            alt={title}
            fill
            priority
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />

          {/* Dark Overlay Gradient */}
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />

          {/* Center Glassmorphism Play Button */}
          <button
            type="button"
            onClick={() => setIsPlaying(true)}
            className="p-4 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-neutral-700/25 rounded-3xl outline outline-1 outline-offset-[-1px] outline-neutral-600 backdrop-blur-[20px] inline-flex justify-center items-center gap-2 hover:scale-105 active:scale-95 transition-all cursor-pointer z-20 shadow-2xl"
            aria-label="Play Course Video Preview"
          >
            <div className="w-12 h-12 sm:w-16 sm:h-16 relative flex items-center justify-center rounded-2xl bg-white/90 shadow-md">
              <Play className="w-6 h-6 sm:w-8 sm:h-8 text-neutral-900 fill-neutral-900 ml-1" />
            </div>
          </button>
        </>
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center bg-black text-white p-6 text-center">
          <p className="text-lg font-semibold mb-4">Playing Video Preview...</p>
          <button
            type="button"
            onClick={() => setIsPlaying(false)}
            className="px-6 py-2 bg-neutral-800 hover:bg-neutral-700 text-white rounded-full text-xs font-medium cursor-pointer"
          >
            Close Video
          </button>
        </div>
      )}
    </div>
  );
}
