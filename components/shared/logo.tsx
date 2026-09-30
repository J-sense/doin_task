import Link from "next/link";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "light" | "dark";
}

/**
 * ByteSpace Logo (Server Component)
 * Clean SVG emblem in electric lime (#d4ff00) with bold wordmark.
 */
export function Logo({ className = "", size = "md", variant = "light" }: LogoProps) {
  const iconSizes = {
    sm: "w-6 h-6",
    md: "w-7 h-7",
    lg: "w-9 h-9",
  };

  const textSizes = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
  };

  const textColor = variant === "dark" ? "text-neutral-800" : "text-white";

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 group transition-transform active:scale-95 ${className}`}
      aria-label="ByteSpace Home"
    >
      {/* Lime 'b' Emblem */}
      <svg
        className={`${iconSizes[size]} shrink-0 transition-transform group-hover:scale-105`}
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5 3.5C5 2.11929 6.11929 1 7.5 1C8.88071 1 10 2.11929 10 3.5V9.45C11.385 8.544 13.065 8 14.88 8C19.917 8 24 12.083 24 17.12C24 22.157 19.917 26.24 14.88 26.24C9.843 26.24 5.76 22.157 5.76 17.12C5.76 16.88 5.772 16.64 5.797 16.4V3.5ZM10 17.12C10 19.815 12.185 22 14.88 22C17.575 22 19.76 19.815 19.76 17.12C19.76 14.425 17.575 12.24 14.88 12.24C12.185 12.24 10 14.425 10 17.12Z"
          fill="#D4FF00"
        />
      </svg>
      {/* Wordmark */}
      <span className={`font-bold ${textSizes[size]} tracking-tight ${textColor} select-none`}>
        ByteSpace
      </span>
    </Link>
  );
}
