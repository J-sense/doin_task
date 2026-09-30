import { CreatorHero } from "@/components/creator-page/creator-hero";
import { Footer } from "@/components/layout/footer";

export const metadata = {
  title: "PurePearl Studio | ByteSpace Creator",
  description:
    "Explore courses and digital creations by PurePearl Studio on ByteSpace.",
};

export default function CreatorPage() {
  return (
    <main className="w-full min-h-screen bg-white text-neutral-900">
      {/* ── Hero Section ── */}
      <CreatorHero />

      {/* ── Content Placeholder ── */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <p className="text-neutral-400 text-sm font-medium">
          Creator courses and content will appear here.
        </p>
      </section>

      {/* ── Footer ── */}
      <Footer />
    </main>
  );
}
