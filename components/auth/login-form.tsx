"use client";

import { useState } from "react";
import Link from "next/link";
import { AuthInput } from "./auth-input";
import { AuthButton } from "./auth-button";
import { AuthSocialButtons } from "./auth-social-buttons";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Sign In submitted", { email, password });
  };

  return (
    <div className="w-full flex flex-col justify-between items-center gap-8">
      {/* Header */}
      <div className="w-full flex flex-col justify-start items-start gap-1">
        <span className="text-blue-700 text-lg font-normal leading-7">
          Sign In
        </span>
        <h2 className="text-neutral-800 text-4xl sm:text-5xl font-semibold leading-tight sm:leading-[52.80px]">
          Welcome Back
        </h2>
      </div>

      {/* Form & Input Fields */}
      <form onSubmit={handleSubmit} className="w-full flex flex-col gap-6">
        <AuthInput
          label="Email"
          type="email"
          placeholder="designer@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <AuthInput
          label="Password"
          type="password"
          placeholder="********"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {/* Action Button (Right-aligned) */}
        <div className="w-full flex justify-end pt-2">
          <AuthButton type="submit">Sign In</AuthButton>
        </div>
      </form>

      {/* Social Buttons */}
      <AuthSocialButtons />

      {/* Bottom Switch Link */}
      <div className="inline-flex justify-center items-center gap-1 text-base leading-6 pt-2">
        <span className="text-zinc-500 font-normal">New user?</span>
        <Link
          href="/signup"
          className="text-blue-700 font-normal hover:underline transition-colors cursor-pointer"
        >
          Create an account
        </Link>
      </div>
    </div>
  );
}
