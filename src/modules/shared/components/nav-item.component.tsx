import Link from "next/link";
import { cn } from "@heroui/theme";

interface NavItemProps {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
  className?: string;
}

export function NavItem({ href, children, isActive, className }: NavItemProps) {
  return (
    <Link
      href={href}
      className={cn(
        "relative py-2 text-base font-medium text-nowrap transition-colors",
        isActive
          ? "text-primary border-primary border-b-2"
          : "text-text-secondary hover:text-primary",
        className
      )}
    >
      {children}
    </Link>
  );
}
