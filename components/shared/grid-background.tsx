import { ReactNode } from "react";

interface GridBackgroundProps {
  children?: ReactNode;
  className?: string;
  showVignette?: boolean;
}

/**
 * GridBackground (Server Component)
 * Renders the electric blue background with crisp 1px grid overlay
 * and ambient radial spotlight matching the ByteSpace design system.
 * Uses absolute positioning so it seamlessly supports full-width sections
 * with custom heights (e.g. 1024px hero) as well as full-screen layouts.
 */
export function GridBackground({
  children,
  className = "",
  showVignette = true,
}: GridBackgroundProps) {
  return (
    <div className={`relative w-full bg-[#0748f5] overflow-hidden ${className}`}>
      {/* Exact Electric Blue Grid layer */}
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-bytespace-grid"
        aria-hidden="true"
      />

      {/* Ambient vignette layer */}
      {showVignette && (
        <div
          className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,transparent_60%,rgba(4,45,160,0.3)_100%)]"
          aria-hidden="true"
        />
      )}

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col w-full h-full">
        {children}
      </div>
    </div>
  );
}
