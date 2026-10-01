import { CourseHeroSection } from "@/components/Hero-section/course-hero-section";
import { CourseLandingCatalog } from "@/components/courses-section/course-landing-catalog";
import { Footer } from "@/components/layout/footer";

export const metadata = {
  title: "Find Your Next Course | ByteSpace",
  description:
    "Explore top-rated tech, design, business, and creator courses on ByteSpace.",
};

export default function CoursesLandingPage() {
  return (
    <main className="w-full min-h-screen bg-background text-foreground select-none">
      <CourseHeroSection />

      <CourseLandingCatalog />

      <Footer />
    </main>
  );
}
