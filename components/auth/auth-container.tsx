"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

interface AuthContainerProps {
  children: React.ReactNode;
}

export function AuthContainer({ children }: AuthContainerProps) {
  return (
    <div className="min-h-screen w-full bg-bytespace-grid relative overflow-hidden flex flex-col justify-between">
      {/* Top Header / Navigation Logo */}
      <header className="w-full max-w-7xl mx-auto px-6 pt-6 sm:pt-8 flex items-center justify-between z-20">
        <Link href="/" className="inline-flex items-center gap-2">
          {/* ByteSpace Logo Icon & Wordmark */}
          <img src="/byte-logoo.png" alt="ByteSpace Logo" className="h-9 w-auto" />

        </Link>
      </header>

      {/* Main Grid Content */}
      <main className="w-full max-w-7xl mx-auto px-6 py-8 lg:py-12 flex-1 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">

        {/* Left Hero Graphic & Content Column */}
        <div className="lg:col-span-6 flex flex-col justify-between h-full space-y-8 lg:space-y-12 pr-0 lg:pr-6">
          <div className="space-y-4">
            <h1 className="justify-start text-neutral-100 text-xl font-semibold leading-6">
              Sign up and come in
            </h1>
            <p className="max-w-[475px] justify-start text-neutral-100 text-lg font-normal leading-7">
              The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost
            </p>
          </div>

          {/* Visual Cards & Artwork Image */}
          <div className="relative w-full max-w-lg mx-auto lg:mx-0 flex items-center justify-center pt-2">
            <Image
              src="/auth/login-sing-up.png"
              alt="ByteSpace Learning Preview"
              width={540}
              height={480}
              className="w-full h-auto object-contain drop-shadow-2xl"
              priority
            />
          </div>
        </div>

        {/* Right Form Card Column */}
        <div className="lg:col-span-6 flex items-center justify-center">
          <div className="w-full max-w-[520px] bg-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-neutral-100 transition-all">
            {children}
          </div>
        </div>

      </main>

      {/* Footer */}
      <footer className="w-full max-w-7xl mx-auto px-6 py-4 text-center text-white/50 text-xs">
        © {new Date().getFullYear()} ByteSpace Inc. All rights reserved.
      </footer>
    </div>
  );
}
