"use client";

import * as React from "react";
import { HeroUIProvider } from "@heroui/system";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { NavbarComponent } from "@/modules/shared/components/navbar.component";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <HeroUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="light">
        <div className="@container relative flex min-h-screen flex-col">
          <NavbarComponent />
          {children}
        </div>
      </NextThemesProvider>
    </HeroUIProvider>
  );
}
