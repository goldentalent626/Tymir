import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

const INTRO_SESSION_KEY = "portfolio.intro.seen";
const INTRO_DURATION_MS = 3500;
const INTRO_TIMEOUT_MS = 4000;
const INTRO_EXIT_MS = 260;

interface UseIntroLoaderResult {
  isVisible: boolean;
  isReady: boolean;
  progress: number;
  stageIndex: number;
  skip: () => void;
}

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

export const useIntroLoader = (): UseIntroLoaderResult => {
  const reducedMotion = usePrefersReducedMotion();
  const [isVisible, setIsVisible] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [progress, setProgress] = useState(0);
  const rafRef = useRef<number | null>(null);
  const timeoutRef = useRef<number | null>(null);
  const exitTimeoutRef = useRef<number | null>(null);
  const finishedRef = useRef(false);

  const finish = useCallback(() => {
    if (finishedRef.current) {
      return;
    }

    finishedRef.current = true;
    sessionStorage.setItem(INTRO_SESSION_KEY, "true");
    setProgress(100);
    setIsReady(true);

    exitTimeoutRef.current = window.setTimeout(() => {
      setIsVisible(false);
    }, INTRO_EXIT_MS);
  }, []);

  useEffect(() => {
    const wasSeen = sessionStorage.getItem(INTRO_SESSION_KEY) === "true";

    if (reducedMotion || wasSeen) {
      setProgress(100);
      setIsVisible(false);
      setIsReady(true);
      if (reducedMotion) {
        sessionStorage.setItem(INTRO_SESSION_KEY, "true");
      }
      return;
    }

    setIsVisible(true);
    setIsReady(false);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const startedAt = performance.now();

    const tick = (now: number) => {
      const nextProgress = clamp(
        Math.round(((now - startedAt) / INTRO_DURATION_MS) * 100),
        0,
        100,
      );

      setProgress(nextProgress);

      if (nextProgress >= 100) {
        finish();
        return;
      }

      rafRef.current = window.requestAnimationFrame(tick);
    };

    rafRef.current = window.requestAnimationFrame(tick);
    timeoutRef.current = window.setTimeout(finish, INTRO_TIMEOUT_MS);

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        finish();
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      if (rafRef.current !== null) {
        window.cancelAnimationFrame(rafRef.current);
      }
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
      }
      if (exitTimeoutRef.current !== null) {
        window.clearTimeout(exitTimeoutRef.current);
      }
    };
  }, [finish, reducedMotion]);

  useEffect(() => {
    if (!isVisible) {
      document.body.style.overflow = "";
    }
  }, [isVisible]);

  const stageIndex = useMemo(() => {
    if (progress >= 67) {
      return 2;
    }
    if (progress >= 34) {
      return 1;
    }
    return 0;
  }, [progress]);

  return {
    isVisible,
    isReady,
    progress,
    stageIndex,
    skip: finish,
  };
};
