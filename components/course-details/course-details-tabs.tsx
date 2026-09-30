"use client";

import { useState } from "react";
import { CourseDetailsData } from "./course-details-data";
import { TabAbout } from "./tab-about";
import { TabLessons } from "./tab-lessons";
import { TabReviews } from "./tab-reviews";

interface CourseDetailsTabsProps {
  course: CourseDetailsData;
}

type TabType = "about" | "lessons" | "reviews";

export function CourseDetailsTabs({ course }: CourseDetailsTabsProps) {
  const [activeTab, setActiveTab] = useState<TabType>("about");

  return (
    <div className="w-full flex flex-col gap-8 select-none mt-36">
      {/* 3 Tab Switcher Bar */}
      <div className="flex items-center gap-2 sm:gap-3">
        <button
          type="button"
          onClick={() => setActiveTab("about")}
          className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${activeTab === "about"
            ? "bg-[#D4FB20] text-neutral-900 shadow-xs font-semibold"
            : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
            }`}
        >
          About
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("lessons")}
          className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${activeTab === "lessons"
            ? "bg-[#D4FB20] text-neutral-900 shadow-xs font-semibold"
            : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
            }`}
        >
          Lessons
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("reviews")}
          className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${activeTab === "reviews"
            ? "bg-[#D4FB20] text-neutral-900 shadow-xs font-semibold"
            : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
            }`}
        >
          Reviews
        </button>
      </div>

      {/* Tab Content Display */}
      <div className="w-full pt-2">
        {activeTab === "about" && <TabAbout course={course} />}
        {activeTab === "lessons" && <TabLessons course={course} />}
        {activeTab === "reviews" && <TabReviews course={course} />}
      </div>
    </div>
  );
}
