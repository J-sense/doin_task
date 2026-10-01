"use client";

import { useState } from "react";
import Link from "next/link";
import { ShoppingBag, X } from "lucide-react";

interface NavActionsProps {
  className?: string;
}

export function NavActions({ className = "" }: NavActionsProps) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartCount] = useState(0);

  return (
    <div className={`relative flex items-center gap-6 ${className}`}>
      <Link
        href="/signin"
        className="text-sm font-normal text-white/80 hover:text-white transition-colors py-1"
      >
        Sign In
      </Link>

      <Link
        href="/join"
        className="text-sm font-normal text-white/80 hover:text-white transition-colors py-1"
      >
        Join Us
      </Link>

      <div className="relative">
        <button
          onClick={() => setIsCartOpen(!isCartOpen)}
          className="relative p-1 text-white/90 hover:text-white transition-all duration-150 hover:scale-105 active:scale-95 flex items-center justify-center cursor-pointer"
          aria-label="Shopping Cart"
          aria-expanded={isCartOpen}
        >
          <ShoppingBag className="w-5 h-5" strokeWidth={1.8} />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#d4ff00] text-black text-[10px] font-bold rounded-full flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </button>

        {isCartOpen && (
          <div className="absolute right-0 top-10 w-72 bg-[#063ecf]/95 backdrop-blur-md border border-white/15 rounded-2xl p-4 shadow-2xl z-50 text-white animate-in fade-in slide-in-from-top-2 duration-150">
            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <span className="text-xs font-semibold tracking-wider uppercase text-white/70">
                Shopping Cart
              </span>
              <button
                onClick={() => setIsCartOpen(false)}
                className="text-white/60 hover:text-white p-1 rounded-md transition-colors"
                aria-label="Close cart"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="py-6 text-center space-y-2">
              <ShoppingBag className="w-8 h-8 text-white/30 mx-auto" />
              <p className="text-sm font-medium text-white/90">Your bag is empty</p>
              <p className="text-xs text-white/60">
                Explore our courses and learning paths to get started.
              </p>
            </div>
            <Link
              href="/courses"
              onClick={() => setIsCartOpen(false)}
              className="block w-full py-2 px-3 text-center text-xs font-semibold rounded-lg bg-[#d4ff00] text-black hover:bg-[#e0ff33] transition-colors"
            >
              Browse Courses
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
