"use client";

import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "@heroui/button";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: { label: string; href: string }[];
}

export function MobileMenu({ isOpen, onClose, navItems }: MobileMenuProps) {
  const t = useTranslations("Navbar");
  const pathname = usePathname();

  if (!isOpen) return null;

  return (
    <div className="mobile-menu-open bg-surface-white fixed inset-x-0 top-16 bottom-0 z-40 flex flex-col overflow-y-auto overscroll-contain xl:hidden">
      <nav className="flex flex-1 flex-col items-center justify-center gap-8">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={onClose}
            className={`text-xl font-semibold transition-colors ${
              pathname === item.href
                ? "text-primary"
                : "text-text-subtle hover:text-primary"
            }`}
          >
            {item.label}
          </Link>
        ))}
        <Button
          as={Link}
          href="/login"
          color="primary"
          variant="bordered"
          className="mr-4 ml-4 w-full py-6 text-base font-bold"
          onClick={onClose}
        >
          {t("login")}
        </Button>
      </nav>
    </div>
  );
}
