"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CourseLandingFilter } from "./course-landing-filter";
import { CourseCard } from "./course-card";
import { COURSE_PAGE_COURSES } from "./courses-data";

export function CourseLandingCatalog() {
  const [activeCategory, setActiveCategory] = useState("Featured");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredCourses =
    activeCategory === "Featured" || activeCategory === "+ More"
      ? COURSE_PAGE_COURSES
      : COURSE_PAGE_COURSES.filter(
        (course) =>
          course.category.toLowerCase() === activeCategory.toLowerCase()
      );

  const displayCourses =
    filteredCourses.length > 0 ? filteredCourses : COURSE_PAGE_COURSES;

  const totalPages = 5;

  return (
    <section className="w-full bg-white py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 text-stone-900 select-none">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        {/* Course Landing 2-Row Filter Bar */}
        <CourseLandingFilter
          activeCategory={activeCategory}
          onSelectCategory={(cat) => {
            setActiveCategory(cat);
            setCurrentPage(1);
          }}
        />

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {displayCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        {/* Pagination Bar */}
        <div className="flex items-center justify-center gap-3 pt-8">
          {/* Previous Page Button */}
          <button
            type="button"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className={`px-4 py-3 bg-white rounded-full outline outline-1 outline-offset-[-1px] outline-neutral-300 inline-flex justify-center items-center gap-1 transition-all ${currentPage === 1
              ? "opacity-40 cursor-not-allowed"
              : "hover:bg-neutral-50 cursor-pointer"
              }`}
            aria-label="Previous Page"
          >
            <ChevronLeft className="w-5 h-5 text-neutral-600" />
          </button>

          {/* Page Numbers 1 to 5 */}
          <div className="flex items-center gap-2 px-2">
            {[1, 2, 3, 4, 5].map((page) => {
              const isActive = currentPage === page;
              return (
                <button
                  key={page}
                  type="button"
                  onClick={() => setCurrentPage(page)}
                  className={`px-2.5 py-1 text-center justify-center text-xl font-semibold  leading-7 transition-colors cursor-pointer ${isActive
                    ? "text-neutral-300"
                    : "text-neutral-800 hover:text-neutral-600"
                    }`}
                >
                  {page}
                </button>
              );
            })}
          </div>

          {/* Next Page Button */}
          <button
            type="button"
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className={`px-4 py-3 bg-white rounded-full outline outline-1 outline-offset-[-1px] outline-neutral-300 inline-flex justify-center items-center gap-1 transition-all ${currentPage === totalPages
              ? "opacity-40 cursor-not-allowed"
              : "hover:bg-neutral-50 cursor-pointer"
              }`}
            aria-label="Next Page"
          >
            <ChevronRight className="w-5 h-5 text-neutral-600" />
          </button>
        </div>
      </div>
    </section>
  );
}
