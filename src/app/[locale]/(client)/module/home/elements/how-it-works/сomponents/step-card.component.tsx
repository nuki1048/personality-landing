import { BlockComponent } from "@/modules/shared/components/block.component";
import { Button } from "@heroui/button";
import { useTranslations } from "next-intl";
type Step = {
  title: string;
  description: string;
};

export function StepCardComponent({ steps }: { steps: Step[] }) {
  const t = useTranslations("HowItWorks");
  return (
    <BlockComponent>
      <div className="p-8 lg:p-12">
        <h2 className="mb-10 text-3xl font-light lg:text-4xl">{t("title")}</h2>
        <div className="mb-10 grid grid-cols-1 gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="items-left flex flex-col justify-center gap-4 max-md:flex-row"
            >
              <div className="border-border-primary/10 min-size-18 flex h-14 w-14 items-center justify-center rounded-full border-2 bg-white px-4 py-6 text-3xl font-bold max-md:size-14 max-md:text-xl">
                {index + 1}
              </div>
              <div>
                <h3 className="text-2xl max-md:text-xl">{step.title}</h3>
                <p className="text-text-subtle">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        <Button
          color="primary"
          variant="solid"
          size="lg"
          className="mt-10 rounded-lg py-4 text-lg font-bold max-md:w-full"
        >
          {t("startPersonalityTest")}
        </Button>
      </div>
    </BlockComponent>
  );
}
