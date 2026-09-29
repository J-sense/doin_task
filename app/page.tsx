import { GridBackground } from "@/components/shared/grid-background";
import { Navbar } from "@/components/layout/navbar";
import { HeroSection } from "@/components/home/hero-section";
import { HeroVisual } from "@/components/home/hero-visual";

export const metadata = {
  title: "ByteSpace - Next-Gen Learning & Creator Platform",
  description:
    "Master modern tech skills with top creators. Cohort mentorship, hands-on projects, and interactive courses.",
};

/**
 * Home Page (Server Component)
 * The electric blue grid is strictly isolated to the Hero Section (1024px height).
 * Centered at the bottom of the hero is men.png layered in front of Ellipse 7.
 */
export default function HomePage() {
  return (
    <main className="w-full min-h-screen bg-background text-foreground">
      {/* Hero Section: 1024px height with full-width electric blue grid */}
      <section className="relative w-full h-[1024px] overflow-hidden text-white">
        <GridBackground className="w-full h-full">
          {/* Top Navbar */}
          <Navbar />

          {/* Hero Content */}
          <HeroSection />

          {/* Bottom Hero Illustration: men.png centered directly above Ellipse 7 */}
          <HeroVisual />
        </GridBackground>
      </section>

      {/* Any subsequent sections you build below will NOT have the grid */}
    </main>
  );
}
