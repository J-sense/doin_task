"use client";

import { useState } from "react";
import { CategoryFilter } from "./category-filter";
import { CourseCard } from "./course-card";
import { SAMPLE_COURSES } from "./courses-data";

export function CoursesSection() {
  const [activeCategory, setActiveCategory] = useState("Featured");

  const filteredCourses =
    activeCategory === "Featured" || activeCategory === "+ More"
      ? SAMPLE_COURSES
      : SAMPLE_COURSES.filter(
          (course) =>
            course.category.toLowerCase() === activeCategory.toLowerCase()
        );

  const displayCourses =
    filteredCourses.length > 0 ? filteredCourses : SAMPLE_COURSES;

  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 text-stone-900 select-none">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
          <h2 className="text-center text-slate-950 text-3xl sm:text-4xl font-semibold leading-8 sm:leading-10">
            Discover Your Passion, <br className="hidden sm:inline" />
            Build Your Skills
          </h2>
          <p className="text-center text-gray-500 text-base sm:text-lg font-normal leading-7 max-w-4xl mx-auto">
            At Bytespace Courses, we bring you closer to life-changing
            knowledge. Explore a variety of courses across different fields,
            from technology to the arts, and make a difference in your career
            and life.
          </p>
        </div>

        {/* Category Pills Filter */}
        <CategoryFilter
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
        />

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-8">
          {displayCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}
