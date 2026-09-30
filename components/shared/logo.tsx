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
      <img src={"/byte-logoo.png"} />
      {/* Wordmark */}
      <span className="justify-start text-neutral-100 text-2xl font-bold select-none ">
        ByteSpace
      </span>
    </Link>
  );
}
