"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import { CourseDetailsData } from "./course-details-data";
import { TabSectionTitle } from "./tab-section-title";

interface TabAboutProps {
  course: CourseDetailsData;
}

export function TabAbout({ course }: TabAboutProps) {
  return (
    <div className="flex flex-col gap-10 text-neutral-800 select-none">
      <div className="flex flex-col gap-4">
        <TabSectionTitle>Description</TabSectionTitle>
        <div className="flex flex-col gap-4 text-sm sm:text-base text-[#4B4C53] font-normal leading-relaxed">
          {course.description.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <TabSectionTitle>Sneak Peak</TabSectionTitle>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {course.sneakPeakImages.map((img, idx) => (
            <div
              key={idx}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-100 shadow-sm hover:scale-105 transition-transform duration-300"
            >
              <Image
                src={img}
                alt={`Sneak peak ${idx + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <TabSectionTitle>Key Points</TabSectionTitle>
        <div className="flex flex-col gap-3">
          {course.keyPoints.map((point, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-blue-700 flex items-center justify-center shrink-0 shadow-xs">
                <Check className="w-3 h-3 text-white stroke-[3]" />
              </div>
              <span className="text-sm sm:text-base font-medium text-neutral-800">
                {point}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
