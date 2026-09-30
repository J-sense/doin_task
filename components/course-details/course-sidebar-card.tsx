"use client";

import Image from "next/image";
import {
  FileText,
  Video,
  Award,
  MessageSquare,
  ChevronRight,
} from "lucide-react";
import { CourseDetailsData } from "./course-details-data";

interface CourseSidebarCardProps {
  course: CourseDetailsData;
}

export function CourseSidebarCard({ course }: CourseSidebarCardProps) {
  return (
    <div className="w-full bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-neutral-100 flex flex-col gap-6 select-none">
      {/* Top Lessons Summary Header */}
      <div className="flex flex-col gap-3 border-b border-neutral-100 pb-5">
        <h3 className="text-xl font-semibold text-neutral-900">
          {course.totalLessons} ({course.totalDuration})
        </h3>

        {/* Video Lessons Quick Preview List */}
        <div className="flex flex-col gap-2.5 pt-1">
          {course.lessons.slice(0, 3).map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between text-xs sm:text-sm text-neutral-700 hover:text-neutral-900 transition-colors"
            >
              <div className="flex items-center gap-2 truncate pr-2">
                <span className="font-semibold text-neutral-400 shrink-0">
                  {item.number}
                </span>
                <span className="truncate">{item.title}</span>
              </div>
              <span className="text-blue-700 font-medium text-xs shrink-0">
                {item.duration}
              </span>
            </div>
          ))}
          <span className="text-xs text-neutral-400 font-normal pt-1">
            99 more videos
          </span>
        </div>
      </div>

      {/* Pricing & CTA Section */}
      <div className="flex flex-col gap-4">
        <p className="text-xs sm:text-sm text-neutral-600 font-normal leading-relaxed">
          Ready to Dive In? Enroll Now and Start Building Your Digital Future!
        </p>

        {/* Price Tag */}
        <div className="flex items-baseline gap-1">
          <span className="text-blue-700 text-3xl sm:text-4xl font-semibold">
            ${course.price}
          </span>
          <span className="text-neutral-500 text-xs sm:text-sm font-normal">
            {course.pricePeriod}
          </span>
        </div>

        {/* Enroll Now Button */}
        <button
          type="button"
          className="w-full py-3.5 sm:py-4 bg-[#D4FB20] hover:brightness-95 active:scale-98 text-neutral-900 font-medium rounded-full text-base shadow-md transition-all cursor-pointer text-center"
        >
          Enroll Now
        </button>
      </div>

      {/* This Course Includes List */}
      <div className="flex flex-col gap-3 border-t border-neutral-100 pt-5">
        <h4 className="text-sm font-semibold text-neutral-900">
          This course include
        </h4>

        <div className="flex flex-col gap-3 text-xs sm:text-sm text-neutral-600">
          <div className="flex items-center gap-3">
            <FileText className="w-4 h-4 text-blue-700 shrink-0" />
            <span>Learning Resources</span>
          </div>
          <div className="flex items-center gap-3">
            <Video className="w-4 h-4 text-blue-700 shrink-0" />
            <span>Quality Lesson Videos</span>
          </div>
          <div className="flex items-center gap-3">
            <Award className="w-4 h-4 text-blue-700 shrink-0" />
            <span>Certificate of Completion</span>
          </div>
          <div className="flex items-center gap-3">
            <MessageSquare className="w-4 h-4 text-blue-700 shrink-0" />
            <span>Private Consultation</span>
          </div>
        </div>
      </div>

      {/* Creator Profile Box */}
      <div className="flex flex-col gap-3 border-t border-neutral-100 pt-5">
        <div className="flex items-center gap-3">
          <Image
            src={course.creator.avatar}
            alt={course.creator.name}
            width={48}
            height={48}
            className="w-12 h-12 rounded-full object-cover shrink-0"
          />
          <div className="flex flex-col">
            <h5 className="text-sm font-semibold text-neutral-900">
              {course.creator.name}
            </h5>
            <span className="text-xs text-neutral-500 font-normal">
              {course.creator.role}
            </span>
          </div>
        </div>

        <p className="text-xs text-neutral-600 font-normal leading-relaxed">
          {course.creator.bio}
        </p>

        <button
          type="button"
          className="w-max px-4 py-2 bg-white outline outline-1 outline-neutral-300 rounded-full text-xs font-medium text-neutral-700 hover:bg-neutral-50 transition-colors cursor-pointer"
        >
          See Full Profile
        </button>
      </div>
    </div>
  );
}
