import { BlockComponent } from "@/modules/shared/components/block.component";
import { useTranslations } from "next-intl";

export function StatsBlockComponent() {
  const t = useTranslations("HowItWorks");
  return (
    <div className="mb-6 grid grid-cols-4 gap-6">
      <BlockComponent className="col-span-2 flex flex-col items-center justify-center px-10 py-8 max-lg:col-start-1 max-lg:col-end-5 max-lg:row-start-2 max-lg:row-end-3">
        <p className="text-2xl lg:text-3xl">{t("stats.title")}</p>
      </BlockComponent>
      <BlockComponent className="flex flex-col items-center justify-center p-8 max-lg:col-start-1 max-lg:col-end-3 lg:p-12">
        <h4 className="text-6xl">100</h4>
        <p className="text-text-subtle text-base">{t("stats.questions")}</p>
      </BlockComponent>
      <BlockComponent className="flex flex-col items-center justify-center p-8 max-lg:col-start-3 max-lg:col-end-5 lg:p-12">
        <h4 className="text-6xl">300</h4>
        <p className="text-text-subtle text-base">
          {t("stats.dataPointsAnalyzed")}
        </p>
      </BlockComponent>
    </div>
  );
}
