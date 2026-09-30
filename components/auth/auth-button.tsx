"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";

interface AuthButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  fullWidth?: boolean;
}

export function AuthButton({
  children,
  fullWidth = false,
  className = "",
  type = "submit",
  ...props
}: AuthButtonProps) {
  return (
    <button
      type={type}
      className={`px-6 py-3 bg-[#D4FB20] hover:bg-lime-500 active:scale-95 rounded-3xl inline-flex justify-center items-center gap-2 transition-all cursor-pointer text-[#242528] text-lg font-medium leading-5 ${fullWidth ? "w-full" : ""
        } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
