import { useTranslation } from "react-i18next";

export const SkipLink = () => {
  const { t } = useTranslation();

  return (
    <a
      href="#main-content"
      className="skip-link fixed left-4 top-2 z-[100] -translate-y-16 rounded-full border border-[var(--color-border-active)] bg-[var(--color-bg-elevated)] px-4 py-2 text-sm font-semibold text-[var(--color-text)] transition focus:translate-y-0"
    >
      {t("accessibility.skipToContent")}
    </a>
  );
};
