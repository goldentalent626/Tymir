import { Cloud } from "lucide-react";
import { m } from "motion/react";
import { useTranslation } from "react-i18next";
import { InteractiveButton } from "../common/InteractiveButton";

interface PortfolioPreloaderProps {
  progress: number;
  stageIndex: number;
  onSkip: () => void;
}

export const PortfolioPreloader = ({
  progress,
  stageIndex,
  onSkip,
}: PortfolioPreloaderProps) => {
  const { t } = useTranslation();
  const stages = [
    t("intro.stages.azure"),
    t("intro.stages.automation"),
    t("intro.stages.interface"),
  ];

  return (
    <m.div
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[var(--color-bg)] px-4"
      initial={{ opacity: 1, y: 0 }}
      animate={progress >= 100 ? { opacity: 0, y: -20 } : { opacity: 1, y: 0 }}
      transition={{ duration: 0.42, ease: "easeOut" }}
      aria-busy="true"
    >
      <div className="w-full max-w-[600px] rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.45)] sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <div role="status" aria-live="polite" className="space-y-3">
            <div className="inline-flex items-center gap-3 rounded-full border border-[var(--color-border)] bg-[rgba(255,255,255,0.03)] px-4 py-2">
              <span className="font-mono text-lg tracking-[0.24em] text-[var(--color-text)]">
                TB
              </span>
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[rgba(47,140,255,0.14)] text-[var(--color-cyan)]">
                <Cloud className="h-4 w-4" aria-hidden="true" />
              </span>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--color-cyan)]">
                {t("intro.subtitle")}
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-[var(--color-text)] sm:text-3xl">
                {t("intro.title")}
              </h2>
            </div>
          </div>

          <InteractiveButton variant="secondary" onClick={onSkip}>
            {t("intro.skip")}
          </InteractiveButton>
        </div>

        <ActivityBars progress={progress} />

        <div className="mt-6 grid gap-3">
          {stages.map((stage, index) => {
            const isActive = stageIndex === index;
            const isComplete = stageIndex > index || progress === 100;

            return (
              <div
                key={stage}
                className={[
                  "flex items-center gap-3 rounded-2xl border px-4 py-3 transition duration-200",
                  isActive
                    ? "border-[var(--color-border-active)] bg-[rgba(47,140,255,0.1)] shadow-[0_0_26px_rgba(47,140,255,0.16)]"
                    : "border-[var(--color-border)] bg-[rgba(255,255,255,0.03)]",
                ].join(" ")}
              >
                <span
                  className={[
                    "h-2.5 w-2.5 rounded-full transition duration-200",
                    isActive
                      ? "bg-[var(--color-cyan)] shadow-[0_0_14px_rgba(45,212,191,0.7)]"
                      : isComplete
                        ? "bg-[var(--color-azure)]"
                        : "bg-[rgba(255,255,255,0.18)]",
                  ].join(" ")}
                  aria-hidden="true"
                />
                <span className="text-sm text-[var(--color-text)]">
                  {stage}
                </span>
                {isComplete ? (
                  <span className="ml-auto text-xs text-[var(--color-cyan)]">
                    ✓
                  </span>
                ) : null}
              </div>
            );
          })}
        </div>

        <div className="mt-6 flex items-end justify-between gap-4">
          <div className="w-full">
            <div
              className="h-2.5 overflow-hidden rounded-full bg-[rgba(255,255,255,0.08)]"
              role="progressbar"
              aria-label={t("intro.progressLabel")}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={progress}
            >
              <div
                className="h-full rounded-full bg-[linear-gradient(90deg,var(--color-azure),var(--color-cyan))] transition-[width] duration-150 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
          <span
            className="font-mono text-sm text-[var(--color-text-muted)]"
            aria-hidden="true"
          >
            {progress}%
          </span>
        </div>
      </div>
    </m.div>
  );
};

const ActivityBars = ({ progress }: { progress: number }) => {
  const bars = [0, 1, 2, 3, 4];

  return (
    <div className="mt-8 flex items-end gap-2" aria-hidden="true">
      {bars.map((bar) => {
        const height = 26 + Math.sin(progress / 11 + bar) * 12 + bar * 4;

        return (
          <div
            key={bar}
            className="w-full max-w-12 rounded-full bg-[linear-gradient(180deg,rgba(45,212,191,0.92),rgba(47,140,255,0.26))] transition-[height,opacity] duration-150 ease-out"
            style={{ height: `${height}px`, opacity: 0.55 + bar * 0.08 }}
          />
        );
      })}
    </div>
  );
};
