import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { useTranslation } from "react-i18next";
import type { PortfolioProject } from "../../data/projects";
import { getInteractiveButtonClasses } from "../common/interactiveButtonStyles";

interface ProjectImageModalProps {
  project: PortfolioProject;
  openIndex: number;
  onClose: () => void;
  onRequestNextFocus: () => void;
}

export const ProjectImageModal = ({
  project,
  openIndex,
  onClose,
  onRequestNextFocus,
}: ProjectImageModalProps) => {
  const { t } = useTranslation();
  const dialogRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(
      'button, [href], [tabindex]:not([tabindex="-1"])',
    );

    const first = focusable?.[0];
    const last = focusable?.[focusable.length - 1];
    first?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab" || !first || !last) {
        return;
      }

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      onRequestNextFocus();
    };
  }, [onClose, onRequestNextFocus]);

  const image = project.images[openIndex];

  return createPortal(
    <div
      className="fixed inset-0 z-[10000] flex items-center justify-center bg-[rgba(0,0,0,0.88)] p-4"
      role="dialog"
      aria-modal="true"
      ref={dialogRef}
    >
      <button
        type="button"
        className="absolute inset-0"
        aria-label={t("accessibility.closeModal")}
        onClick={onClose}
      />

      <button
        type="button"
        className={getInteractiveButtonClasses({
          variant: "secondary",
          className: "fixed right-4 top-4 z-[10001] px-4 py-2 text-sm",
        })}
        aria-label={t("accessibility.closeModal")}
        onClick={onClose}
      >
        {t("accessibility.closeModal")}
      </button>

      <button
        type="button"
        aria-label={t("accessibility.closeModal")}
        className="relative z-[10001]"
        onClick={onClose}
      >
        <img
          src={image.src}
          alt={t(image.altKey)}
          width={image.width}
          height={image.height}
          className="max-h-[88vh] max-w-[94vw] object-contain"
        />
      </button>
    </div>,
    document.body,
  );
};
