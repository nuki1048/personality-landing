import BookmarkIcon from "@icons/bookmark.icon";
import BookIcon from "@icons/book.icon";
import CalendarIcon from "@icons/calendar.icon";
import FireIcon from "@icons/fire.icon";
import CertificateIcon from "@icons/certificate.icon";
import { useTranslations } from "next-intl";

export function WhatYouWillReceiveComponent() {
  const t = useTranslations("WhatYouWillReceive");
  const items = [
    {
      title: t("personalityReport"),
      description: t("personalityReportDescription"),
      icon: <CalendarIcon />,
    },
    {
      title: t("dailyChallenges"),
      description: t("dailyChallengesDescription"),
      icon: <FireIcon />,
    },
    {
      title: t("testLibrary"),
      description: t("testLibraryDescription"),
      icon: <BookIcon />,
    },
    {
      title: t("courseLibrary"),
      description: t("courseLibraryDescription"),
      icon: <BookmarkIcon />,
    },
    {
      title: t("certificates"),
      description: t("certificatesDescription"),
      icon: <CertificateIcon />,
    },
  ];
  return (
    <section className="mt-16">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold">{t("title")}</h2>
        <div className="mt-8 flex flex-wrap items-start justify-between gap-4 max-md:justify-center">
          {items.map((item) => (
            <div
              key={item.title}
              className="flex w-48 flex-col items-center justify-center gap-4"
            >
              <div className="bg-primary flex size-12 flex-col items-center justify-center rounded-full">
                {item.icon}
              </div>
              <h3 className="text-center text-2xl font-semibold">
                {item.title}
              </h3>
              <p className="text-text-subtle text-center">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
