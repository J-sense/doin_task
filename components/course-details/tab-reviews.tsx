"use client";

import { useState } from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import { CourseDetailsData } from "./course-details-data";
import { TabSectionTitle } from "./tab-section-title";

interface TabReviewsProps {
  course: CourseDetailsData;
}

const RATING_BREAKDOWN = [
  { stars: 5, fillPercent: 82, count: 720 },
  { stars: 4, fillPercent: 35, count: 120 },
  { stars: 3, fillPercent: 12, count: 21 },
  { stars: 2, fillPercent: 8, count: 12 },
  { stars: 1, fillPercent: 10, count: 16 },
];

export function TabReviews({ course }: TabReviewsProps) {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");

  const filteredReviews = course.reviews.filter((rev) => {
    if (selectedFilter === "all") return true;
    return Math.floor(rev.rating) === parseInt(selectedFilter);
  });

  return (
    <div className="flex flex-col gap-8 text-neutral-800 select-none max-w-[723px]">
      <div className="flex flex-col gap-3">
        <TabSectionTitle>What Learners Are Saying</TabSectionTitle>
        <p className="text-sm sm:text-base text-[#4B4C53] font-normal leading-relaxed">
          Discover what our learners have to say about their experience with &quot;Build Digital Assets: A Comprehensive Guide.&quot; Read reviews and ratings from individuals who have embarked on the transformative journey of mastering digital asset creation.
        </p>
      </div>

      <div className="w-full max-w-[723px] p-6 sm:p-10 bg-white rounded-2xl border border-neutral-300 backdrop-blur-[10px] shadow-[inset_0px_4px_0px_0px_rgba(255,255,255,0.25)] flex flex-col sm:flex-row justify-center items-center gap-6">
        <div className="p-6 sm:p-8 bg-[#D4FB20] rounded-lg backdrop-blur-[20px] flex flex-col justify-center items-center shrink-0 min-w-[120px]">
          <div className="justify-center text-neutral-800 text-sm font-medium leading-4">
            Ratings
          </div>
          <div className="justify-center text-neutral-800 text-4xl font-semibold leading-10 mt-1">
            4.7
          </div>
        </div>

        <div className="flex-1 flex flex-col justify-start items-start gap-2 w-full">
          {RATING_BREAKDOWN.map((item) => (
            <div key={item.stars} className="w-full flex items-center justify-between gap-3 sm:gap-4">
              <div className="flex-1 h-2 bg-zinc-200 rounded-3xl overflow-hidden">
                <div
                  className="h-full bg-[#D4FB20] rounded-3xl transition-all duration-300"
                  style={{ width: `${item.fillPercent}%` }}
                />
              </div>

              <div className="flex items-center gap-1 shrink-0">
                {[1, 2, 3, 4, 5].map((starIndex) => (
                  <Star
                    key={starIndex}
                    className="w-5 h-5 fill-neutral-600 text-neutral-600"
                  />
                ))}
              </div>

              <div className="w-10 text-right text-neutral-600 text-base font-normal leading-6 shrink-0">
                {item.count}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4 mt-2">
        <TabSectionTitle>Individual Reviews:</TabSectionTitle>

        <div className="flex items-center gap-2 flex-wrap">
          <button
            onClick={() => setSelectedFilter("all")}
            className={`px-4 py-3 rounded-3xl text-base font-medium transition-colors cursor-pointer inline-flex justify-center items-center gap-1 ${
              selectedFilter === "all"
                ? "bg-[#D4FB20] text-neutral-800"
                : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
            }`}
          >
            All rating
          </button>
          {[5, 4, 3, 2, 1].map((rating) => (
            <button
              key={rating}
              onClick={() => setSelectedFilter(rating.toString())}
              className={`px-4 py-3 rounded-3xl text-base font-medium transition-colors inline-flex justify-center items-center gap-1 cursor-pointer ${
                selectedFilter === rating.toString()
                  ? "bg-[#D4FB20] text-neutral-800"
                  : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
              }`}
            >
              <Star className="w-5 h-5 fill-neutral-600 text-neutral-600" />
              <span className="text-center leading-5">{rating}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {filteredReviews.length === 0 ? (
          <p className="text-sm text-neutral-500 py-4">
            No reviews found for this rating filter.
          </p>
        ) : (
          filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="w-full max-w-[723px] p-6 sm:p-10 bg-white rounded-3xl border border-neutral-300 flex flex-col justify-start items-start gap-6"
            >
              <div className="w-full flex justify-between items-start gap-4">
                <div className="flex flex-col justify-start items-start gap-4 sm:gap-6">
                  <div className="flex justify-start items-center gap-3">
                    <Image
                      src={rev.avatar}
                      alt={rev.name}
                      width={48}
                      height={48}
                      className="w-12 h-12 rounded-full object-cover shrink-0"
                    />
                    <div className="flex flex-col justify-start items-start">
                      <div className="text-neutral-800 text-lg font-medium leading-5">
                        {rev.name}
                      </div>
                      {rev.role && (
                        <div className="text-neutral-600 text-base font-normal leading-6">
                          {rev.role}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex justify-start items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`w-5 h-5 ${
                          star <= Math.floor(rev.rating)
                            ? "fill-neutral-600 text-neutral-600"
                            : "fill-neutral-200 text-neutral-200"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <div className="text-neutral-600 text-base font-normal leading-6 shrink-0">
                  {rev.date}
                </div>
              </div>

              <div className="w-full text-neutral-600 text-base font-normal leading-6">
                &quot;{rev.comment}&quot;
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
