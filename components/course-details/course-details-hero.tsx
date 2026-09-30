"use client";

import { Share2, BarChart2, Star, Users } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { CourseDetailsData } from "./course-details-data";

interface CourseDetailsHeroProps {
  course: CourseDetailsData;
}

export function CourseDetailsHero({ course }: CourseDetailsHeroProps) {
  return (
    <div className="w-full text-white">
      {/* Top Navigation Header */}
      <Navbar />

      {/* Hero Header Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10 pb-24 lg:pb-32 flex flex-col gap-6 select-none">
        {/* Top Title & Share Button Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex flex-col gap-2 max-w-3xl">
            <h1 className="justify-start text-neutral-100 text-3xl sm:text-4xl font-semibold leading-tight sm:leading-snug lg:leading-10">
              {course.title}
            </h1>
            <p className="justify-start text-neutral-100 text-base sm:text-lg lg:text-xl font-semibold leading-6">
              {course.subtitle}
            </p>
          </div>

          {/* Share Button */}
          <button
            type="button"
            className="px-5 py-2.5 bg-[#D4FB20] hover:brightness-95 active:scale-95 text-neutral-900 rounded-full inline-flex items-center justify-center gap-2 text-sm sm:text-base font-medium shadow-md transition-all cursor-pointer shrink-0"
          >
            <Share2 className="w-4 h-4 text-neutral-900 stroke-[2.5]" />
            <span>Share</span>
          </button>
        </div>

        {/* Author Line */}
        <div className="text-xs sm:text-sm text-white/80 font-normal">
          by{" "}
          <span className="text-[#D4FB20] font-semibold underline underline-offset-4 cursor-pointer">
            {course.author}
          </span>
        </div>

        {/* Badges Row */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
          {/* Level Badge */}
          <div className="px-6 py-2 bg-white rounded-3xl backdrop-blur-[20px] inline-flex justify-center items-center gap-2 text-neutral-800 text-sm sm:text-base font-medium leading-5 shadow-xs">
            <BarChart2 className="w-4 h-4 text-blue-700 shrink-0" />
            <span>{course.level}</span>
          </div>

          {/* Rating Badge */}
          <div className="px-6 py-2 bg-white rounded-3xl backdrop-blur-[20px] inline-flex justify-center items-center gap-2 text-neutral-800 text-sm sm:text-base font-medium leading-5 shadow-xs">
            <Star className="w-4 h-4 text-amber-500 fill-amber-500 shrink-0" />
            <span>
              {course.rating} ({course.reviewsCount} reviews)
            </span>
          </div>

          {/* Students Count Badge */}
          <div className="px-6 py-2 bg-white rounded-3xl backdrop-blur-[20px] inline-flex justify-center items-center gap-2 text-neutral-800 text-sm sm:text-base font-medium leading-5 shadow-xs">
            <Users className="w-4 h-4 text-blue-700 shrink-0" />
            <span>{course.studentsCount}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
