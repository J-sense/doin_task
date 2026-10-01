import { Logo } from "@/components/shared/logo";
import { NavLinks } from "./nav-links";
import { NavActions } from "./nav-actions";
import { MobileMenu } from "./mobile-menu";

interface NavbarProps {
  className?: string;
}

export function Navbar({ className = "" }: NavbarProps) {
  return (
    <header className={`w-full absolute top-0 left-0 right-0 z-50 pointer-events-auto transition-all ${className}`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 py-6 flex items-center justify-between">
        <div className="flex items-center">
          <Logo size="md" />
        </div>

        <div className="hidden md:flex items-center justify-center">
          <NavLinks />
        </div>

        <div className="hidden md:flex items-center">
          <NavActions />
        </div>

        <div className="flex md:hidden items-center">
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
