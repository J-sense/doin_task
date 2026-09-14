"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "The Ecosystem", href: "/#ecosystem" },
    { name: "Growth Canvas", href: "/#growth-canvas" },
    { name: "Ready-Made", href: "/#ready-made" },
    { name: "SEO & GEO", href: "/seo-geo" },
    { name: "How it works", href: "/#how-it-works" },
    { name: "Reviews", href: "/#reviews" },
  ];

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("/#")) {
      const targetId = href.replace("/#", "");
      if (pathname === "/") {
        e.preventDefault();
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 inset-x-0 z-50 w-full bg-[#03182B] border-b border-white/5 px-6 py-4 md:px-12 transition-all duration-300">
      <div className="mx-auto flex max-w-[1700px] items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <div className="relative h-[38px] w-[100px] transition-transform duration-500 group-hover:scale-102">
            <Image
              src="/mainLogo.png"
              alt="Axudar Group Logo"
              width={100}
              height={38}
              priority
              className="h-[38px] w-[100px] object-contain"
            />
          </div>
        </Link>

        {/* Desktop Navigation & CTA (Grouped on Right) */}
        <div className="hidden md:flex items-center gap-10">
          <nav className="flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`font-sans font-semibold text-[14px] leading-[14.68px] tracking-[0.49px] transition-colors ${isActive ? "text-[#00dfb6]" : "text-slate-300 hover:text-[#00dfb6]"
                    }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <Link
            href="/contact"
            className="group rounded-none inline-flex items-center gap-1.5 bg-[#00dfb6] px-5 py-2.5 text-xs font-bold tracking-wider text-[#02111c] transition-all hover:bg-[#00f5d4] hover:scale-[1.02] shadow-[0_0_20px_rgba(0,223,182,0.15)]"
          >
            Contact us
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="flex md:hidden text-white hover:text-[#00dfb6] focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[65px] bottom-0 z-40 bg-[#02111c] border-t border-white/5 flex flex-col justify-between px-6 py-8 animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-lg font-semibold tracking-wide transition-colors ${isActive ? "text-[#00dfb6]" : "text-slate-200 hover:text-[#00dfb6]"
                    }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <div className="w-full pb-8">
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-sm bg-[#00dfb6] py-4 text-sm font-bold tracking-wider text-[#02111c] transition-all hover:bg-[#00f5d4]"
            >
              Contact us
              <span>→</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
