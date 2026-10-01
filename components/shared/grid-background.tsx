import { ReactNode } from "react";

interface GridBackgroundProps {
  children?: ReactNode;
  className?: string;
  showVignette?: boolean;
  overflowVisible?: boolean;
}

export function GridBackground({
  children,
  className = "",
  showVignette = true,
  overflowVisible = false,
}: GridBackgroundProps) {
  return (
    <div className={`relative w-full bg-[#003BE2] ${overflowVisible ? "overflow-visible" : "overflow-hidden"} ${className}`}>
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-bytespace-grid"
        aria-hidden="true"
      />

      {showVignette && (
        <div
          className="pointer-events-none absolute inset-0 z-0 "
          aria-hidden="true"
        />
      )}

      <div className="relative z-10 flex flex-col w-full h-full">
        {children}
      </div>
    </div>
  );
}
