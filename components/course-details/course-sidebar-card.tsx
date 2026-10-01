"use client";

import Image from "next/image";
import {
  FileText,
  Video,
  Award,
  MessageSquare,
} from "lucide-react";
import { CourseDetailsData } from "./course-details-data";

interface CourseSidebarCardProps {
  course: CourseDetailsData;
}

export function CourseSidebarCard({ course }: CourseSidebarCardProps) {
  return (
    <div className="w-full bg-white rounded-3xl p-6 sm:p-10 border border-neutral-300 flex flex-col justify-start items-start gap-6 select-none overflow-hidden">
      <div className="flex flex-col justify-start items-start gap-6 w-full">
        <h3 className="text-neutral-800 text-xl font-semibold leading-6">
          {course.totalLessons} ({course.totalDuration})
        </h3>

        <div className="flex flex-col justify-start items-start gap-3 w-full">
          {course.lessons.slice(0, 3).map((item) => (
            <div
              key={item.id}
              className="w-full flex justify-between items-start gap-4"
            >
              <div className="flex justify-start items-start gap-2">
                <span className="w-6 text-neutral-800 text-base font-medium leading-5 shrink-0">
                  {item.number}
                </span>
                <span className="text-neutral-800 text-base font-medium leading-5">
                  {item.title}
                </span>
              </div>
              <span className="text-blue-700 text-base font-normal leading-6 shrink-0">
                {item.duration}
              </span>
            </div>
          ))}
          <div className="text-neutral-600 text-base font-normal leading-6">
            99 more videos
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-start items-start gap-6 w-full">
        <p className="text-neutral-600 text-base font-normal leading-6">
          Ready to Dive In? Enroll Now and Start Building Your Digital Future!
        </p>

        <div className="flex justify-start items-end gap-1">
          <span className="text-blue-700 text-4xl font-semibold leading-10">
            ${course.price}
          </span>
          <span className="text-neutral-600 text-base font-normal leading-6">
            {course.pricePeriod}
          </span>
        </div>

        <button
          type="button"
          className="w-full px-6 py-3 bg-[#D4FB20] rounded-3xl flex justify-center items-center gap-2 cursor-pointer hover:brightness-95 active:scale-98 transition-all"
        >
          <span className="text-neutral-800 text-lg font-medium leading-5">
            Enroll Now
          </span>
        </button>
      </div>

      <div className="flex flex-col justify-start items-start gap-4 w-full">
        <h4 className="text-neutral-800 text-xl font-semibold leading-6">
          This course include
        </h4>

        <div className="flex flex-col justify-start items-start gap-3 w-full">
          <div className="flex justify-start items-center gap-2">
            <FileText className="w-6 h-6 text-blue-700 shrink-0" />
            <span className="text-neutral-600 text-base font-normal leading-6">
              Learning Resources
            </span>
          </div>
          <div className="flex justify-start items-center gap-2">
            <Video className="w-6 h-6 text-blue-700 shrink-0" />
            <span className="text-neutral-600 text-base font-normal leading-6">
              Quality Lesson Videos
            </span>
          </div>
          <div className="flex justify-start items-center gap-2">
            <Award className="w-6 h-6 text-blue-700 shrink-0" />
            <span className="text-neutral-600 text-base font-normal leading-6">
              Certificate of Completion
            </span>
          </div>
          <div className="flex justify-start items-center gap-2">
            <MessageSquare className="w-6 h-6 text-blue-700 shrink-0" />
            <span className="text-neutral-600 text-base font-normal leading-6">
              Private Consultation
            </span>
          </div>
        </div>
      </div>

      <div className="w-full h-0 border-t border-neutral-300 my-1" />

      <div className="flex flex-col justify-start items-start gap-6 w-full">
        <div className="flex justify-start items-center gap-3">
          <Image
            src={course.creator.avatar}
            alt={course.creator.name}
            width={48}
            height={48}
            className="w-12 h-12 rounded-full object-cover shrink-0"
          />
          <div className="flex flex-col justify-start items-start">
            <div className="text-neutral-800 text-lg font-medium leading-5">
              {course.creator.name}
            </div>
            <div className="text-neutral-600 text-base font-normal leading-6">
              {course.creator.role}
            </div>
          </div>
        </div>

        <p className="text-neutral-600 text-base font-normal leading-6">
          {course.creator.bio}
        </p>

        <button
          type="button"
          className="px-4 py-2 rounded-3xl border border-neutral-300 flex justify-center items-center gap-2 hover:bg-neutral-50 transition-colors cursor-pointer"
        >
          <span className="text-neutral-600 text-base font-medium leading-5">
            See Full Profile
          </span>
        </button>
      </div>
    </div>
  );
}
