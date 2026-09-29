"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ShoppingBag } from "lucide-react";
import { NAV_ITEMS } from "./nav-links";

interface MobileMenuProps {
  className?: string;
}

/**
 * MobileMenu (Client Component)
 * Provides responsive hamburger toggle and full drawer navigation for smaller screens.
 */
export function MobileMenu({ className = "" }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`md:hidden ${className}`}>
      {/* Hamburger Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-white/90 hover:text-white rounded-lg transition-colors focus:outline-none"
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Drawer Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 top-[72px] z-50 bg-[#0748f5]/98 backdrop-blur-xl border-t border-white/10 p-6 flex flex-col justify-between animate-in fade-in slide-in-from-top-4 duration-200"
          onClick={() => setIsOpen(false)}
        >
          <div className="space-y-6">
            <nav>
              <ul className="space-y-4 list-none p-0 m-0">
                {NAV_ITEMS.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="text-2xl font-bold text-white hover:text-[#d4ff00] transition-colors block py-1"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="pt-6 border-t border-white/10 space-y-4">
              <Link
                href="/signin"
                onClick={() => setIsOpen(false)}
                className="block text-lg font-medium text-white/90 hover:text-white"
              >
                Sign In
              </Link>
              <Link
                href="/join"
                onClick={() => setIsOpen(false)}
                className="block text-center py-3 px-4 rounded-full bg-[#d4ff00] text-black font-semibold text-base hover:bg-[#e0ff33] transition-colors"
              >
                Join Us
              </Link>
            </div>
          </div>

          <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs text-white/60">
            <span>© ByteSpace</span>
            <Link
              href="/cart"
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center gap-2 text-white/80"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Bag (0)</span>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
