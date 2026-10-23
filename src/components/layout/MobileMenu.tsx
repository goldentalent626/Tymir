import { X } from "lucide-react";
import type { SectionId } from "../../data/navigation";
import { navigation } from "../../data/navigation";
import { IconButton } from "../common/IconButton";
import { useTranslation } from "react-i18next";

interface MobileMenuProps {
  activeSection: SectionId;
  open: boolean;
  onClose: () => void;
}

export const MobileMenu = ({
  activeSection,
  open,
  onClose,
}: MobileMenuProps) => {
  const { t } = useTranslation();

  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[85] bg-[rgba(5,11,20,0.86)] backdrop-blur-sm">
      <div className="absolute right-4 top-4 w-[min(90vw,380px)] rounded-3xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-5 shadow-xl">
        <div className="mb-5 flex justify-end">
          <IconButton
            aria-label={t("accessibility.closeMenu")}
            onClick={onClose}
          >
            <X size={18} />
          </IconButton>
        </div>
        <nav
          aria-label={t("accessibility.mobileNavigation")}
          className="grid gap-2"
        >
          {navigation.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="rounded-xl px-3 py-3 text-base text-[var(--color-text)] hover:bg-[var(--color-surface)]"
              onClick={onClose}
              aria-current={activeSection === item.id ? "location" : undefined}
            >
              {t(item.labelKey)}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};
