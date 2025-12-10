"use client";

import { useState } from "react";
import { Navbar, NavbarBrand, NavbarContent } from "@heroui/navbar";
import { Button } from "@heroui/button";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import Link from "next/link";

import Logo from "@icons/logo.icon";
import { MenuIcon } from "@/modules/icons/menu.icon";
import { CloseIcon } from "@/modules/icons/close.icon";
import { NavItem } from "./nav-item.component";
import { LanguageSelect } from "./language-select.component";
import { MobileMenu } from "./mobile-menu.component";

export function NavbarComponent() {
  const t = useTranslations("Navbar");
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: t("home"), href: "/" },
    { label: t("about"), href: "/#" },
    { label: t("pricing"), href: "/#" },
    { label: t("faqs"), href: "/#" },
    { label: t("contactUs"), href: "/#" },
  ];

  return (
    <>
      <Navbar
        position="static"
        classNames={{
          base: "bg-surface-white container",
          wrapper: "w-full max-w-full p-0",
        }}
      >
        <NavbarBrand>
          <Link href="/">
            <Logo />
          </Link>
        </NavbarBrand>

        {/* Desktop Navigation */}
        <NavbarContent className="hidden gap-6 xl:flex" justify="end">
          {navItems.map((item) => (
            <NavItem
              key={item.href}
              href={item.href}
              isActive={pathname === item.href}
            >
              {item.label}
            </NavItem>
          ))}
          <Button
            color="primary"
            variant="bordered"
            className="ml-6 text-sm font-bold"
          >
            {t("login")}
          </Button>
          <Button color="primary" variant="solid" className="text-sm font-bold">
            {t("startPersonalityTest")}
          </Button>
          <LanguageSelect />
        </NavbarContent>

        <NavbarContent justify="end" className="flex gap-2 xl:hidden">
          <LanguageSelect />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-text-primary p-2"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <CloseIcon className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </button>
        </NavbarContent>
      </Navbar>

      <MobileMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        navItems={navItems}
      />
    </>
  );
}
