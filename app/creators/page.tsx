import { CreatorHero } from "@/components/creator-page/creator-hero";
import { CreatorFilterBar } from "@/components/creator-page/creator-filter-bar";
import { CreatorCourseGrid } from "@/components/creator-page/creator-course-grid";
import { Footer } from "@/components/layout/footer";

export const metadata = {
  title: "PurePearl Studio | ByteSpace Creator",
  description:
    "Explore courses and digital creations by PurePearl Studio on ByteSpace.",
};

export default function CreatorsPage() {
  return (
    <main className="w-full min-h-screen bg-white text-neutral-900">
      {/* ── Hero Section ── */}
      <CreatorHero />

      {/* ── Filter Bar ── */}
      <CreatorFilterBar />

      {/* ── Course Grid ── */}
      <CreatorCourseGrid />

      {/* ── Footer ── */}
      <Footer />
    </main>
  );
}
