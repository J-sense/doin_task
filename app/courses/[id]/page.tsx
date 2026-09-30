import { COURSE_DETAILS_DATA } from "@/components/course-details/course-details-data";
import { CourseDetailsHero } from "@/components/course-details/course-details-hero";
import { CourseVideoPlayer } from "@/components/course-details/course-video-player";
import { CourseSidebarCard } from "@/components/course-details/course-sidebar-card";
import { CourseDetailsTabs } from "@/components/course-details/course-details-tabs";
import { GridBackground } from "@/components/shared/grid-background";
import { Footer } from "@/components/layout/footer";

export const metadata = {
  title: `${COURSE_DETAILS_DATA.title} | ByteSpace`,
  description: COURSE_DETAILS_DATA.subtitle,
};

export default function CourseDetailPage() {
  const course = COURSE_DETAILS_DATA;

  return (
    <main className="w-full min-h-screen bg-white text-neutral-900 select-none">
      {/* ================= 1. HERO HEADER SECTION ================= */}
      <section className="relative w-full h-[957px] overflow-hidden">
        <GridBackground className="w-full h-full">
          <CourseDetailsHero course={course} />
        </GridBackground>
      </section>

      {/* ================= 2. MAIN CONTENT BODY ================= */}
      <section className="relative w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 -mt-[560px] lg:-mt-[600px] z-20 pb-16 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-start">
          {/* Left Column (Video Player + Interactive Tabs) */}
          <div className="lg:col-span-7 flex flex-col gap-10">
            {/* Video Cover Player */}
            <CourseVideoPlayer
              coverUrl={course.videoCoverUrl}
              title={course.title}
            />

            {/* Interactive 3-Tab Section (About | Lessons | Reviews) */}
            <CourseDetailsTabs course={course} />
          </div>

          {/* Right Column (Sticky Pricing & Course Summary Card) */}
          <div className="lg:col-span-5 sticky top-6">
            <CourseSidebarCard course={course} />
          </div>
        </div>
      </section>

      {/* ================= 3. FOOTER ================= */}
      <Footer />
    </main>
  );
}
