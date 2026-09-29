import { Logo } from "@/components/shared/logo";
import { NavLinks } from "./nav-links";
import { NavActions } from "./nav-actions";
import { MobileMenu } from "./mobile-menu";

interface NavbarProps {
  className?: string;
}

/**
 * Navbar (Server Component)
 * Serves as the high-level layout shell for navigation.
 * Composes the server-rendered Logo with client-rendered navigation links,
 * actions (Sign In, Join Us, Cart), and responsive mobile drawer.
 */
export function Navbar({ className = "" }: NavbarProps) {
  return (
    <header className={`w-full relative z-30 transition-all ${className}`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 py-6 flex items-center justify-between">
        {/* Left: ByteSpace Logo (Server Component) */}
        <div className="flex items-center">
          <Logo size="md" />
        </div>

        {/* Center: Main Links (Client Component - Desktop only) */}
        <div className="hidden md:flex items-center justify-center">
          <NavLinks />
        </div>

        {/* Right: Actions (Client Component - Desktop only) */}
        <div className="hidden md:flex items-center">
          <NavActions />
        </div>

        {/* Mobile Navigation Trigger (Client Component - Mobile only) */}
        <div className="flex md:hidden items-center">
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
