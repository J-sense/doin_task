"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { CourseDetailsData } from "./course-details-data";

interface TabReviewsProps {
  course: CourseDetailsData;
}

export function TabReviews({ course }: TabReviewsProps) {
  return (
    <div className="flex flex-col gap-8 text-neutral-800 select-none">
      {/* Rating Summary Header */}
      <div className="flex items-center gap-6 p-6 bg-neutral-50 rounded-3xl border border-neutral-100">
        <div className="flex flex-col items-center justify-center border-r border-neutral-200 pr-6">
          <span className="text-4xl font-bold text-neutral-900">
            {course.rating}
          </span>
          <div className="flex items-center gap-1 my-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className="w-4 h-4 text-amber-500 fill-amber-500"
              />
            ))}
          </div>
          <span className="text-xs text-neutral-500 font-medium">
            Course Rating
          </span>
        </div>

        <div className="flex flex-col gap-1">
          <h4 className="text-lg font-semibold text-neutral-900">
            Student Feedback
          </h4>
          <p className="text-xs sm:text-sm text-neutral-600">
            Based on {course.reviewsCount} verified student reviews.
          </p>
        </div>
      </div>

      {/* Reviews List */}
      <div className="flex flex-col gap-6">
        {course.reviews.map((rev) => (
          <div
            key={rev.id}
            className="flex flex-col gap-3 p-5 border border-neutral-100 rounded-2xl bg-white shadow-xs"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Image
                  src={rev.avatar}
                  alt={rev.name}
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full object-cover shrink-0"
                />
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-neutral-900">
                    {rev.name}
                  </span>
                  <span className="text-xs text-neutral-400">{rev.date}</span>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                <span className="text-sm font-semibold text-neutral-800">
                  {rev.rating}
                </span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-normal">
              {rev.comment}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
