import { GridBackground } from "@/components/shared/grid-background";
import { Hero404 } from "@/components/Hero-section/hero-404";
import { Footer } from "@/components/layout/footer";

export const metadata = {
  title: "404 - Page Not Found | ByteSpace",
  description: "The page you are looking for doesn’t exist.",
};

export default function NotFound() {
  return (
    <div className="w-full min-h-screen bg-background text-foreground flex flex-col justify-between select-none">
      <GridBackground className="w-full flex-1 flex flex-col justify-center items-center pt-24 sm:pt-32 pb-16 lg:pb-24">
        <main className="w-full flex-1 flex flex-col justify-center items-center">
          <Hero404 />
        </main>
      </GridBackground>
      <Footer />
    </div>
  );
}
