"use client";

import { Select, SelectItem } from "@heroui/select";
import { useRouter, usePathname } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import GlobeIcon from "@icons/globe.icon";
import { routing } from "@/i18n/routing";

const languages = [
  { key: "en", label: "EN" },
  { key: "uk", label: "UK" },
  { key: "es", label: "ES" },
];

interface LanguageSelectProps {
  className?: string;
}

export function LanguageSelect({ className }: LanguageSelectProps) {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  const handleLocaleChange = (keys: "all" | Set<React.Key>) => {
    if (keys === "all") return;
    const selectedLocale = Array.from(keys)[0] as string;
    if (selectedLocale && selectedLocale !== currentLocale) {
      router.replace(pathname, { locale: selectedLocale });
    }
  };

  return (
    <Select
      aria-label="Select language"
      selectedKeys={[currentLocale]}
      onSelectionChange={handleLocaleChange}
      startContent={<GlobeIcon />}
      classNames={{
        base: "w-auto min-w-0",
        trigger: [
          "bg-transparent",
          "border-none",
          "shadow-none",
          "hover:bg-transparent",
          "data-[hover=true]:bg-transparent",
          "gap-1",
          "h-auto",
          "min-h-0",
          "px-0",
        ],
        value: "text-text-secondary font-semibold text-sm",
        innerWrapper: "gap-1 w-auto",
        selectorIcon: "hidden",
        mainWrapper: "w-auto",
        listbox: "text-text-primary",
      }}
      popoverProps={{
        placement: "bottom-start",
        classNames: {
          content: "min-w-40",
        },
      }}
      className={className}
    >
      {languages.map((lang) => (
        <SelectItem key={lang.key} className="text-text-primary">
          {lang.label}
        </SelectItem>
      ))}
    </Select>
  );
}
