"use client";

import { useState } from "react";
import Link from "next/link";
import { AuthInput } from "./auth-input";
import { AuthButton } from "./auth-button";

export function SignupForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Sign Up submitted", { fullName, email, password });
  };

  return (
    <div className="w-full flex flex-col justify-between items-center gap-8">
      <div className="w-full flex flex-col justify-start items-start gap-1">
        <span className="text-blue-700 text-lg font-normal leading-7">
          Create an Account
        </span>
        <h2 className="text-neutral-800 text-4xl sm:text-5xl font-semibold leading-tight sm:leading-[52.80px]">
          Welcome to ByteSpace
        </h2>
      </div>

      <form onSubmit={handleSubmit} className="w-full flex flex-col gap-6">
        <AuthInput
          label="Full Name"
          type="text"
          placeholder="Jamie Davis"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />

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

        <div className="w-full flex justify-end pt-2">
          <AuthButton type="submit">Continue</AuthButton>
        </div>
      </form>

      <div className="inline-flex justify-center items-center gap-1 text-base leading-6 pt-4">
        <span className="text-zinc-500 font-normal">
          Already have an account?
        </span>
        <Link
          href="/login"
          className="text-blue-700 font-normal hover:underline transition-colors cursor-pointer"
        >
          Login
        </Link>
      </div>
    </div>
  );
}
