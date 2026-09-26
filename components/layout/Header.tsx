"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  const dropdownItems = [
    { name: "Business Growth", href: "/packages/business-growth" },
    { name: "Strategy", href: "/packages/strategy-planning" },
    { name: "Marketing", href: "/packages/marketing" },
    { name: "SEO & AI Visibility", href: "/seo-geo" },
    { name: "Social Media", href: "/packages/social-content-growth" },
    { name: "Website & Conversion", href: "/packages/website-conversion" },
  ];

  const navLinks = [
    { name: "Ecosystem", href: "/#ecosystem" },
    { name: "Growth Canvas", href: "/#growth-canvas" },
    { name: "What We Do", href: "/#what-we-do", isDropdown: true },
    { name: "How It Works", href: "/#how-it-works" },
    { name: "Results", href: "/results" },
    { name: "Insights", href: "/insights" },
    { name: "Contact", href: "/contact" },
  ];

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 150);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
    setIsDropdownOpen(false);
  };

  return (
    <header className="sticky top-0 inset-x-0 z-50 w-full bg-[#03182B] border-b border-white/5 px-6 py-4 md:px-12 transition-all duration-300">
      <div className="mx-auto flex max-w-[1700px] items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <div className="relative h-[38px] w-[100px] transition-transform duration-500 group-hover:scale-[1.02]">
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

        {/* Desktop Navigation & CTA */}
        <div className="hidden md:flex items-center gap-10">
          <nav className="flex items-center gap-7">
            {navLinks.map((link) => {
              if (link.isDropdown) {
                return (
                  <div
                    key={link.name}
                    ref={dropdownRef}
                    className="relative"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button
                      onClick={() => setIsDropdownOpen((prev) => !prev)}
                      className="flex items-center gap-1.5 font-sans font-semibold text-[14px] leading-[14.68px] tracking-[0.49px] text-slate-300 hover:text-[#00dfb6] transition-colors focus:outline-none cursor-pointer py-1"
                    >
                      <span>{link.name}</span>
                      <ChevronDown
                        className={`size-3.5 transition-transform duration-300 ${isDropdownOpen ? "rotate-180 text-[#00dfb6]" : ""
                          }`}
                      />
                    </button>

                    {/* Smooth Glassy Dropdown Menu */}
                    {isDropdownOpen && (
                      <div className="absolute top-full left-0 mt-3 w-64 rounded-2xl bg-[#03182b]/40 border border-white/10 p-2 shadow-[0_20px_50px_rgba(0,0,0,0.5),inset_0_1px_0_0_rgba(255,255,255,0.1)] backdrop-blur-xl backdrop-saturate-150 animate-in fade-in slide-in-from-top-2 duration-200 ease-out z-50 overflow-hidden">
                        <div className="flex flex-col space-y-0.5">
                          {dropdownItems.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              onClick={(e) => handleNavClick(e, item.href)}
                              className="group flex items-center justify-between font-sans font-medium text-[13.5px] text-slate-200/90 hover:text-[#00dfb6] transition-all duration-200 ease-out py-2.5 px-3.5 rounded-xl hover:bg-white/[0.06] hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]"
                            >
                              <span>{item.name}</span>
                              <span className="opacity-0 -translate-x-1.5 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-xs text-[#00dfb6]">
                                →
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`font-sans font-semibold text-[14px] leading-[14.68px] tracking-[0.49px] transition-colors ${isActive
                      ? "text-[#00dfb6]"
                      : "text-slate-300 hover:text-[#00dfb6]"
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
            <span className="transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="flex md:hidden text-white hover:text-[#00dfb6] focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="size-6" />
          ) : (
            <Menu className="size-6" />
          )}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[65px] bottom-0 z-40 bg-[#03182b]/95 backdrop-blur-2xl border-t border-white/5 flex flex-col justify-between px-6 py-8 animate-in slide-in-from-top duration-300 overflow-y-auto">
          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => {
              if (link.isDropdown) {
                return (
                  <div key={link.name} className="flex flex-col gap-3">
                    <button
                      onClick={() => setIsMobileDropdownOpen((prev) => !prev)}
                      className="flex items-center justify-between text-lg font-semibold tracking-wide text-slate-200 hover:text-[#00dfb6] focus:outline-none"
                    >
                      <span>{link.name}</span>
                      <ChevronDown
                        className={`size-5 transition-transform duration-200 ${isMobileDropdownOpen
                            ? "rotate-180 text-[#00dfb6]"
                            : ""
                          }`}
                      />
                    </button>
                    {isMobileDropdownOpen && (
                      <div className="flex flex-col gap-3 pl-4 border-l border-white/10 ml-1 py-1">
                        {dropdownItems.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            onClick={(e) => handleNavClick(e, item.href)}
                            className="text-base font-medium text-slate-300 hover:text-[#00dfb6] transition-colors"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-lg font-semibold tracking-wide transition-colors ${isActive
                      ? "text-[#00dfb6]"
                      : "text-slate-200 hover:text-[#00dfb6]"
                    }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <div className="w-full pt-6 pb-8">
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