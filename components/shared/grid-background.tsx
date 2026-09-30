import { ReactNode } from "react";

interface GridBackgroundProps {
  children?: ReactNode;
  className?: string;
  showVignette?: boolean;
}

export function GridBackground({
  children,
  className = "",
  showVignette = true,
}: GridBackgroundProps) {
  return (
    <div className={`relative w-full bg-blue-800 overflow-hidden ${className}`}>
      {/* Exact Electric Blue Grid layer */}
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-bytespace-grid"
        aria-hidden="true"
      />

      {/* Ambient vignette layer */}
      {showVignette && (
        <div
          className="pointer-events-none absolute inset-0 z-0 "
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
