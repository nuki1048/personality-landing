import { useTranslations } from "next-intl";
import Image from "next/image";

export function FeaturesComponent() {
  const t = useTranslations("Features");
  const features = [
    {
      title: t("feature1Title"),
      description: t("feature1Description"),
      image: "/preview-1.svg",
      reverse: true,
    },
    {
      title: t("feature2Title"),
      description: t("feature2Description"),
      image: "/preview-2.svg",
    },
  ];
  return (
    <section className="mt-16">
      <div className="flex w-full flex-wrap justify-between max-md:gap-16 md:flex-col min-lg:flex-row">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="flex flex-1/2 flex-col items-center justify-center"
          >
            <Image
              src={feature.image}
              alt={feature.title}
              width={280}
              height={280}
              className={`${feature.reverse ? "sm:order-2" : "sm:order-1"}`}
            />
            <h3
              className={`order-2 mt-6 text-center text-xl font-bold lg:text-3xl ${feature.reverse ? "max-lg:order-1" : ""}`}
            >
              {feature.title}
            </h3>
            <p
              className={`text-text-subtle order-3 mt-4 text-center text-lg ${feature.reverse ? "sm:order-3" : ""}`}
            >
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
