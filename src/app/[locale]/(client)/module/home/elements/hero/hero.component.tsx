"use client";

import { Button } from "@heroui/button";
import { useTranslations } from "next-intl";

export function HeroComponent() {
  const t = useTranslations("Hero");
  return (
    <div className="bg-background-yellow relative mt-8 overflow-hidden rounded-2xl">
      <div className="flex flex-col lg:flex-row">
        <div className="p-12 max-md:p-6 lg:w-1/2">
          <h1
            className="mb-4 text-4xl font-bold tracking-tight max-md:text-center lg:text-6xl"
            dangerouslySetInnerHTML={{
              __html: t.markup("title", {
                green: (chunks) =>
                  `<span class="text-primary">${chunks}</span>`,
              }),
            }}
          />
          <h4 className="lg:max-w-hero-text text-xl leading-normal max-md:text-center lg:text-2xl">
            {t("description")}
          </h4>
          <Button
            color="primary"
            variant="solid"
            size="lg"
            className="mt-10 rounded-lg py-3 text-lg font-bold max-md:w-full"
          >
            {t("startPersonalityTest")}
          </Button>
          <p className="text-text-subtle mt-4 text-xs font-normal max-md:text-center">
            {t("termsConditions")}
          </p>
        </div>

        <div className="flex justify-center px-8 md:hidden">
          <img
            src="/phone.png"
            alt="Personality Test App"
            className="translate-y-hero-mobile h-72 w-52"
          />
        </div>

        <div className="relative hidden lg:block lg:w-1/2">
          <img
            src="/phone.png"
            alt="Personality Test App"
            className="max-xl:translate-y-hero-desktop-mobile translate-y-hero-desktop translate-x-hero-desktop h-100 w-80 lg:translate-y-2/4 xl:translate-y-1/4"
          />
        </div>
      </div>
    </div>
  );
}
