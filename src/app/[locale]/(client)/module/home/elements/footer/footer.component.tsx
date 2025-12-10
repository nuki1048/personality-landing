"use client";

import LogoIcon from "@icons/logo.icon";
import Link from "next/link";
import { useTranslations } from "next-intl";

export function FooterComponent() {
  const t = useTranslations("Footer");
  const links = [
    { label: t("home"), href: "/" },
    { label: t("about"), href: "/about" },
    { label: t("pricing"), href: "/pricing" },
    { label: t("faqs"), href: "/faqs" },
    { label: t("contactUs"), href: "/contact" },
    { label: t("signIn"), href: "/signin" },
    { label: t("cancelSubscription"), href: "/cancel" },
    { label: t("privacyPolicy"), href: "/privacy" },
    { label: t("termsOfUse"), href: "/terms" },
    { label: t("freePersonalityTest"), href: "/test" },
  ];

  return (
    <footer className="mt-16">
      <div className="border-border-primary/10 flex flex-col gap-8 border-t pt-8 md:flex-row md:items-start">
        <div className="shrink-0">
          <LogoIcon />
        </div>

        <div className="flex-1 columns-2 gap-8 lg:columns-3">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-text-secondary hover:text-primary mb-3 block text-sm transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-8 md:flex-row md:items-start">
        <div className="md:w-logo-spacer hidden shrink-0 md:block" />
        <p className="text-text-subtle/65 mt-8 flex-1 text-sm">
          {t("disclaimer")}
        </p>
      </div>

      <div className="border-border-primary/10 mt-8 border-t pt-6 pb-8 text-center">
        <p className="text-text-subtle/65 text-sm">
          {t("copyright", { year: new Date().getFullYear() })}
        </p>
      </div>
    </footer>
  );
}
