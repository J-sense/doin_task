import { GridBackground } from "@/components/shared/grid-background";
import { Navbar } from "@/components/layout/navbar";
import { Hero404 } from "@/components/home/hero-404";

export const metadata = {
  title: "404 - Page Not Found | ByteSpace",
  description: "The page you are looking for doesn’t exist.",
};

/**
 * Global Not Found Page (Server Component)
 * Handles all 404 routes in Next.js using full-screen ByteSpace grid and navigation.
 */
export default function NotFound() {
  return (
    <GridBackground className="min-h-screen">
      <Navbar />
      <main className="flex-1 flex flex-col justify-center">
        <Hero404 />
      </main>
    </GridBackground>
  );
}
