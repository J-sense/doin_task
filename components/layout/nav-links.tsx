"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export interface NavItem {
  label: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Creators", href: "/creators" },
];

/**
 * NavLinks (Client Component)
 * Handles active route detection and smooth hover states for desktop nav.
 */
export function NavLinks({ className = "" }: { className?: string }) {
  const pathname = usePathname();

  return (
    <nav className={className} aria-label="Main Navigation">
      <ul className="flex items-center gap-8 list-none m-0 p-0">
        {NAV_ITEMS.map((item) => {
          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname?.startsWith(item.href);

          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`text-sm tracking-tight transition-all duration-150 relative py-1 ${
                  isActive
                    ? "text-white font-semibold"
                    : "text-white/80 hover:text-white font-normal"
                }`}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
