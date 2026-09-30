import { GridBackground } from "@/components/shared/grid-background";
import { Navbar } from "@/components/layout/navbar";
import { HeroSection } from "@/components/Hero-section/hero-section";
import { HeroVisual } from "@/components/Hero-section/hero-visual";
import LogoipsumSectionMain from "@/components/Logopism-section/Logopism-section-main";
import { CoursesSection } from "@/components/courses-section/courses-section-main";
import { LearningPathsSection } from "@/components/learning-paths-section/learning-paths-section";
import { ProfessionalGrowthSection } from "@/components/professional-growth-section/professional-growth-section";
import { CreatorCtaSection } from "@/components/creator-cta-section/creator-cta-section";
import { TestimonialsSection } from "@/components/testimonials-section/testimonials-section";
import { Footer } from "@/components/layout/footer";

export const metadata = {
  title: "ByteSpace - Next-Gen Learning & Creator Platform",
  description:
    "Master modern tech skills with top creators. Cohort mentorship, hands-on projects, and interactive courses.",
};

export default function HomePage() {
  return (
    <main className="w-full min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative w-full h-[490px] xs:h-[540px] sm:h-[750px] md:h-[880px] lg:h-[1024px] overflow-hidden text-white">
        <GridBackground className="w-full h-full">
          {/* Top Navbar */}
          <Navbar />

          {/* Hero Content */}
          <HeroSection />

          {/* Bottom Hero Illustration */}
          <HeroVisual />
        </GridBackground>
      </section>

      {/* Brand Logos Bar */}
      <LogoipsumSectionMain />

      {/* Courses Catalog Section */}
      <CoursesSection />

      {/* Explore Diverse Learning Paths Section */}
      <LearningPathsSection />

      {/* Your Path to Professional Growth & Course Management Section */}
      <ProfessionalGrowthSection />

      {/* Unlock Your Potential as a Creator Section */}
      <CreatorCtaSection />

      {/* Testimonials Community Section */}
      <TestimonialsSection />

      {/* Footer Section */}
      <Footer />
    </main>
  );
}
