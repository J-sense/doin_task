"use client";

import { InputHTMLAttributes, forwardRef } from "react";

interface AuthInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const AuthInput = forwardRef<HTMLInputElement, AuthInputProps>(
  ({ label, id, error, type = "text", className = "", ...props }, ref) => {
    const inputId = id || label.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className="w-full flex flex-col justify-start items-start gap-2">
        <label
          htmlFor={inputId}
          className="justify-start text-neutral-800 text-sm font-medium leading-4"
        >
          {label}
        </label>
        <div className="w-full max-w-[453px] h-12 px-6 py-3 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-zinc-200 focus-within:outline-blue-600 inline-flex justify-start items-center gap-2 transition-all">
          <input
            ref={ref}
            id={inputId}
            type={type}
            className={`w-full bg-transparent text-neutral-800 placeholder:text-gray-500 text-lg font-normal leading-7 outline-none ${className}`}
            {...props}
          />
        </div>
        {error && <span className="text-xs text-red-500 mt-0.5">{error}</span>}
      </div>
    );
  }
);

AuthInput.displayName = "AuthInput";
