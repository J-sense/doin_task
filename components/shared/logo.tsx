import Link from "next/link";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "light" | "dark";
}

export function Logo({ className = "", size = "md", variant = "light" }: LogoProps) {

  const textColor = variant === "dark" ? "text-neutral-800" : "text-white";

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 group transition-transform active:scale-95 ${className}`}
      aria-label="ByteSpace Home"
    >
      <img src={"/byte-logoo.png"} />
      <span className="justify-start text-[#242528] text-2xl font-bold select-none ">
        ByteSpace
      </span>
    </Link>
  );
}
