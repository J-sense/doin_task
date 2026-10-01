import { COURSE_DETAILS_DATA } from "@/components/course-details/course-details-data";
import { CourseDetailsHero } from "@/components/course-details/course-details-hero";
import { CourseVideoPlayer } from "@/components/course-details/course-video-player";
import { CourseSidebarCard } from "@/components/course-details/course-sidebar-card";
import { CourseDetailsTabs } from "@/components/course-details/course-details-tabs";
import { Footer } from "@/components/layout/footer";

export const metadata = {
  title: `${COURSE_DETAILS_DATA.title} | ByteSpace`,
  description: COURSE_DETAILS_DATA.subtitle,
};

export default function CourseDetailPage() {
  const course = COURSE_DETAILS_DATA;

  return (
    <main className="relative w-full min-h-screen bg-white text-neutral-900 select-none">

      <div
        className="absolute top-0 inset-x-0 h-[480px] sm:h-[600px] lg:h-[957px] overflow-hidden pointer-events-none z-0 bg-[#003BE2]"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-bytespace-grid" />
      </div>

      <div className="relative z-10 w-full flex flex-col">

        <CourseDetailsHero course={course} />

        <section className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pb-16 lg:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-start">

            <div className="lg:col-span-7 flex flex-col gap-10 order-2 lg:order-1">
              <CourseVideoPlayer
                coverUrl={course.videoCoverUrl}
                title={course.title}
              />
              <CourseDetailsTabs course={course} />
            </div>

            <div className="lg:col-span-5 lg:sticky lg:top-6 order-1 lg:order-2">
              <CourseSidebarCard course={course} />
            </div>

          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
