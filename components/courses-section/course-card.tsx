import Image from "next/image";
import Link from "next/link";
import { Course } from "./courses-data";

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  const authorName = course.author.replace(/^by\s+/i, "");

  return (
    <Link
      href={`/courses/${course.id}`}
      className="group relative bg-white rounded-3xl outline outline-1 outline-offset-[-1px] outline-neutral-300 overflow-hidden p-4 flex flex-col justify-between hover:shadow-lg transition-all duration-300 cursor-pointer block"
    >
      <div>
        <div className="relative w-full h-48 rounded-xl overflow-hidden mb-4 select-none">
          <Image
            src={course.imageUrl}
            alt={course.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />

          <div className="absolute left-3 bottom-3 inline-flex justify-start items-start gap-2 flex-wrap">
            <div className="px-3 py-1.5 bg-neutral-100/60 rounded-3xl backdrop-blur-xs inline-flex flex-col justify-center items-center">
              <span className="text-center justify-center text-neutral-600 text-xs font-medium leading-4">
                {course.lessonsCount} Lessons
              </span>
            </div>
            <div className="px-3 py-1.5 bg-neutral-100/60 rounded-3xl backdrop-blur-xs inline-flex flex-col justify-center items-center">
              <span className="text-center justify-center text-neutral-600 text-xs font-medium leading-4">
                {course.duration}
              </span>
            </div>
            <div className="px-3 py-1.5 bg-neutral-100/60 rounded-3xl backdrop-blur-xs inline-flex flex-col justify-center items-center">
              <span className="text-center justify-center text-neutral-600 text-xs font-medium leading-4">
                {course.commentsCount} Comments
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-start items-start gap-3 mb-3">
          <div className="w-full flex items-start justify-between gap-2">
            <div className="flex flex-col justify-start items-start">
              <h3 className="justify-center text-black text-xl font-semibold leading-6 line-clamp-1 group-hover:text-blue-700 transition-colors">
                {course.title}
              </h3>
              <div className="justify-center mt-1">
                <span className="text-neutral-600 text-xs font-normal leading-5">
                  by{" "}
                </span>
                <span className="text-blue-700 text-xs font-normal leading-5">
                  {authorName}
                </span>
              </div>
            </div>

            <div className="inline-flex justify-start items-center gap-1 shrink-0 mt-0.5">
              <span className="justify-start text-neutral-600 text-lg font-normal leading-7">
                {course.rating.toFixed(1)}
              </span>
              <div className="size-6 relative overflow-hidden flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-amber-400 fill-amber-400"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="w-full inline-flex justify-between items-center gap-3 flex-wrap">
            <div className="px-3 py-1.5 bg-neutral-100 rounded-3xl flex justify-center items-center gap-1">
              <div className="size-5 relative overflow-hidden flex items-center justify-center">
                <svg
                  className="w-3.5 h-3.5 text-neutral-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <span className="text-center justify-center text-neutral-600 text-xs font-medium leading-4">
                {course.level}
              </span>
            </div>

            <div className="flex items-center -space-x-2">
              {course.studentAvatars.map((src, i) => (
                <div
                  key={i}
                  className="relative size-8 rounded-full border-2 border-white overflow-hidden"
                >
                  <Image
                    src={src}
                    alt="Student Avatar"
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
              <div className="relative size-8 bg-lime-400 rounded-full flex items-center justify-center border-2 border-white shrink-0">
                <span className="text-center justify-center text-neutral-800 text-xs font-medium leading-5">
                  {course.studentsCount}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="inline-flex justify-start items-end gap-0.5 pt-2 border-t border-neutral-100">
        <span className="justify-center text-blue-700 text-xl font-semibold leading-6">
          ${course.price}
        </span>
        <span className="justify-center text-neutral-600 text-xs font-normal leading-5">
          {course.pricePeriod}
        </span>
      </div>
    </Link>
  );
}
