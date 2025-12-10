"use client";

import { StatsBlockComponent } from "./сomponents/stats-block.component";
import { StepCardComponent } from "./сomponents/step-card.component";
import { useTranslations } from "next-intl";

export function HowItWorksComponent() {
  const t = useTranslations("HowItWorks");
  const steps = [
    {
      title: t("steps.step1"),
      description: t("steps.step1Description"),
    },
    {
      title: t("steps.step2"),
      description: t("steps.step2Description"),
    },
    {
      title: t("steps.step3"),
      description: t("steps.step3Description"),
    },
  ];
  return (
    <section className="py-section">
      <StatsBlockComponent />

      <StepCardComponent steps={steps} />
    </section>
  );
}
