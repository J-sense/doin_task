"use client";

import Link from "next/link";
import { Logo } from "@/components/shared/logo";

export function Footer() {
  return (
    <footer className="w-full bg-white relative overflow-hidden border-t border-neutral-300 py-16 sm:py-20 px-4 sm:px-6 lg:px-8 select-none">
      <div className="max-w-7xl mx-auto flex flex-col justify-between gap-16">
        {/* Main Footer Top Content */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-24">
          {/* Left Column: Brand & Newsletter */}
          <div className="flex flex-col items-start max-w-xl">
            <Logo variant="dark" size="lg" />
            <p className="text-neutral-800 text-sm font-normal leading-6 max-w-[528px] mt-4 mb-6">
              Stay Up to date with our latest features and releases by joining
              our newsletter.
            </p>

            {/* Newsletter Form */}
            <form
              onSubmit={(e) => e.preventDefault()}
              className="w-full flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-6"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full sm:w-96 h-12 px-6 py-4 bg-white rounded-[100px] outline outline-1 outline-offset-[-1px] outline-neutral-300 text-neutral-800 text-base font-normal leading-6 placeholder:text-neutral-400 focus:outline-lime-400"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-[#D4FB20] hover:brightness-95 rounded-3xl inline-flex justify-center items-center gap-2 text-neutral-800 text-lg font-medium leading-5 transition-all cursor-pointer shrink-0 text-center select-none"
              >
                Search
              </button>
            </form>

            <p className="text-neutral-800 text-xs font-normal leading-5 max-w-[504px] mt-4">
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from our company.
            </p>
          </div>

          {/* Right Column: Links Grid */}
          <div className="w-full lg:w-auto grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-12 lg:gap-16 shrink-0">
            {/* Column 1: Browse 1 */}
            <div className="flex flex-col items-start gap-4">
              <span className="text-base font-normal text-neutral-900 leading-6 mb-2">
                Browse
              </span>
              <Link
                href="#"
                className="text-neutral-800 text-sm font-normal leading-6 hover:text-black hover:underline transition-colors"
              >
                Featured Courses
              </Link>
              <Link
                href="#"
                className="text-neutral-800 text-sm font-normal leading-6 hover:text-black hover:underline transition-colors"
              >
                Featured Categories
              </Link>
              <Link
                href="#"
                className="text-neutral-800 text-sm font-normal leading-6 hover:text-black hover:underline transition-colors"
              >
                Business
              </Link>
              <Link
                href="#"
                className="text-neutral-800 text-sm font-normal leading-6 hover:text-black hover:underline transition-colors"
              >
                IT
              </Link>
              <Link
                href="#"
                className="text-neutral-800 text-sm font-normal leading-6 hover:text-black hover:underline transition-colors"
              >
                Design
              </Link>
            </div>

            {/* Column 2: Browse 2 */}
            <div className="flex flex-col items-start gap-4 sm:pt-[32px]">
              <Link
                href="#"
                className="text-neutral-800 text-sm font-normal leading-6 hover:text-black hover:underline transition-colors"
              >
                Development
              </Link>
              <Link
                href="#"
                className="text-neutral-800 text-sm font-normal leading-6 hover:text-black hover:underline transition-colors"
              >
                Marketing
              </Link>
              <Link
                href="#"
                className="text-neutral-800 text-sm font-normal leading-6 hover:text-black hover:underline transition-colors"
              >
                Photography
              </Link>
              <Link
                href="#"
                className="text-neutral-800 text-sm font-normal leading-6 hover:text-black hover:underline transition-colors"
              >
                Finance
              </Link>
              <Link
                href="#"
                className="text-neutral-800 text-sm font-normal leading-6 hover:text-black hover:underline transition-colors"
              >
                Sport
              </Link>
            </div>

            {/* Column 3: Platform */}
            <div className="flex flex-col items-start gap-4">
              <span className="text-base font-normal text-neutral-900 leading-6 mb-2">
                Platform
              </span>
              <Link
                href="#"
                className="text-neutral-800 text-sm font-normal leading-6 hover:text-black hover:underline transition-colors"
              >
                Become a Creator
              </Link>
              <Link
                href="#"
                className="text-neutral-800 text-sm font-normal leading-6 hover:text-black hover:underline transition-colors"
              >
                Affiliate Program
              </Link>
              <Link
                href="#"
                className="text-neutral-800 text-sm font-normal leading-6 hover:text-black hover:underline transition-colors"
              >
                Contact
              </Link>
              <Link
                href="#"
                className="text-neutral-800 text-sm font-normal leading-6 hover:text-black hover:underline transition-colors"
              >
                Help
              </Link>
              <Link
                href="#"
                className="text-neutral-800 text-sm font-normal leading-6 hover:text-black hover:underline transition-colors"
              >
                About
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="w-full pt-6 border-t border-neutral-300 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-neutral-800 text-xs font-normal leading-5">
            @ 2023 ByteSpace. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="text-neutral-800 text-xs font-normal leading-5 hover:underline transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-neutral-800 text-xs font-normal leading-5 hover:underline transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="text-neutral-800 text-xs font-normal leading-5 hover:underline transition-colors"
            >
              Cookies Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
