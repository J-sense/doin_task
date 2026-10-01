import { ReactNode } from "react";

interface TabSectionTitleProps {
  children: ReactNode;
  className?: string;
}

export function TabSectionTitle({
  children,
  className = "",
}: TabSectionTitleProps) {
  return (
    <h3
      className={`justify-start text-[#242528] text-xl sm:text-2xl font-semibold leading-6 ${className}`}
    >
      {children}
    </h3>
  );
}
