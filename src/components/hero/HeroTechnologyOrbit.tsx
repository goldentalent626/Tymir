import {
  Braces,
  Brain,
  ChartColumn,
  Cloud,
  Code,
  CodeXml,
  Component,
  Database,
  Hexagon,
} from "lucide-react";
import { m, useTime, useTransform } from "motion/react";
import { useEffect, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import type { MotionValue } from "motion/react";
import type { ComponentType } from "react";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";

interface TechnologyItem {
  name: string;
  icon: ComponentType<{ className?: string }>;
}

interface OrbitConfig {
  id: string;
  radius: number;
  cycleMs: number;
  direction: 1 | -1;
  technologies: TechnologyItem[];
  baseOffset: number;
}

const FIRST_ORBIT: TechnologyItem[] = [
  { name: "OpenAI", icon: Brain },
  { name: "Python", icon: Code },
  { name: "TypeScript", icon: Braces },
];

const SECOND_ORBIT: TechnologyItem[] = [
  { name: "Node.js", icon: Hexagon },
  { name: "Vue.js", icon: Component },
  { name: "Next.js", icon: CodeXml },
];

const THIRD_ORBIT: TechnologyItem[] = [
  { name: "AWS", icon: Cloud },
  { name: "Docker", icon: DockerIcon },
  { name: "PostgreSQL", icon: Database },
  { name: "Data Visualization", icon: ChartColumn },
];

const PI2 = Math.PI * 2;

export const HeroTechnologyOrbit = () => {
  const { t } = useTranslation();
  const reducedMotion = usePrefersReducedMotion();
  const time = useTime();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [hasProfileImage, setHasProfileImage] = useState(true);
  const [measuredSize, setMeasuredSize] = useState(0);

  useEffect(() => {
    const target = containerRef.current;

    if (!target) {
      return;
    }

    const syncSize = () => {
      setMeasuredSize(target.clientWidth);
    };

    syncSize();

    if (typeof ResizeObserver === "undefined") {
      window.addEventListener("resize", syncSize);
      return () => {
        window.removeEventListener("resize", syncSize);
      };
    }

    const observer = new ResizeObserver(syncSize);
    observer.observe(target);

    return () => observer.disconnect();
  }, []);

  const orbitSize = useMemo(() => {
    if (measuredSize > 0) {
      return measuredSize;
    }

    return 360;
  }, [measuredSize]);

  const profileDiameter =
    orbitSize < 360 ? 142 : orbitSize < 420 ? 156 : orbitSize < 520 ? 198 : 232;

  const maxRadius = orbitSize / 2 - (orbitSize < 420 ? 48 : 60);
  const minRadius = profileDiameter / 2 + (orbitSize < 390 ? 22 : 28);
  const middleRadius = minRadius + (maxRadius - minRadius) * 0.52;

  const orbitConfigs: OrbitConfig[] = [
    {
      id: "orbit-1",
      radius: minRadius,
      cycleMs: 28000,
      direction: 1,
      technologies: FIRST_ORBIT,
      baseOffset: -Math.PI / 2,
    },
    {
      id: "orbit-2",
      radius: middleRadius,
      cycleMs: 36000,
      direction: -1,
      technologies: SECOND_ORBIT,
      baseOffset: -Math.PI / 6,
    },
    {
      id: "orbit-3",
      radius: maxRadius,
      cycleMs: 44000,
      direction: 1,
      technologies: THIRD_ORBIT,
      baseOffset: Math.PI / 10,
    },
  ];

  return (
    <div
      ref={containerRef}
      className="mx-auto mt-2 w-full max-w-[380px] md:max-w-[470px] lg:max-w-[540px]"
      data-reduced-motion={reducedMotion}
    >
      <div
        className="relative mx-auto aspect-square w-full overflow-hidden"
        aria-hidden="true"
      >
        <div className="pointer-events-none absolute inset-0 rounded-full border border-[rgba(151,169,194,0.16)]" />

        {orbitConfigs.map((orbitConfig, orbitIndex) => (
          <div key={orbitConfig.id} data-testid="hero-orbit-ring">
            <div
              className="pointer-events-none absolute left-1/2 top-1/2 rounded-full border"
              style={{
                width: `${orbitConfig.radius * 2}px`,
                height: `${orbitConfig.radius * 2}px`,
                transform: "translate(-50%, -50%)",
                borderColor:
                  orbitIndex === 0
                    ? "rgba(47,140,255,0.28)"
                    : orbitIndex === 1
                      ? "rgba(45,212,191,0.23)"
                      : "rgba(159,122,234,0.2)",
              }}
            />

            {orbitConfig.technologies.map((item, itemIndex) => (
              <OrbitTechnologyChip
                key={`${orbitConfig.id}-${item.name}`}
                item={item}
                baseAngle={
                  (PI2 / orbitConfig.technologies.length) * itemIndex +
                  orbitConfig.baseOffset
                }
                time={time}
                reducedMotion={reducedMotion}
                orbit={orbitConfig}
                compact={orbitSize < 390}
              />
            ))}
          </div>
        ))}

        <div
          className="absolute left-1/2 top-1/2 z-10 overflow-hidden rounded-full border border-[var(--color-border-active)] shadow-[0_12px_42px_rgba(47,140,255,0.24)]"
          style={{
            width: `${profileDiameter}px`,
            height: `${profileDiameter}px`,
            transform: "translate(-50%, -50%)",
          }}
        >
          {hasProfileImage ? (
            <img
              src="/images/profile.webp"
              alt={t("hero.name")}
              width={480}
              height={480}
              fetchPriority="high"
              className="h-full w-full object-cover"
              onError={() => setHasProfileImage(false)}
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-[var(--color-bg-elevated)] text-[clamp(2rem,7vw,4rem)] font-semibold tracking-[0.24em] text-[var(--color-text)]">
              TB
            </div>
          )}
        </div>
      </div>

      <ul className="sr-only">
        {[...FIRST_ORBIT, ...SECOND_ORBIT, ...THIRD_ORBIT].map((item) => (
          <li key={`sr-${item.name}`}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

const OrbitTechnologyChip = ({
  item,
  baseAngle,
  time,
  reducedMotion,
  orbit,
  compact,
}: {
  item: TechnologyItem;
  baseAngle: number;
  time: MotionValue<number>;
  reducedMotion: boolean;
  orbit: OrbitConfig;
  compact: boolean;
}) => {
  const Icon = item.icon;

  const x = useTransform(time, (elapsed) => {
    const angle = reducedMotion
      ? baseAngle
      : baseAngle +
        orbit.direction * ((elapsed % orbit.cycleMs) / orbit.cycleMs) * PI2;

    return Math.cos(angle) * orbit.radius;
  });

  const y = useTransform(time, (elapsed) => {
    const angle = reducedMotion
      ? baseAngle
      : baseAngle +
        orbit.direction * ((elapsed % orbit.cycleMs) / orbit.cycleMs) * PI2;

    return Math.sin(angle) * orbit.radius;
  });

  return (
    <m.div
      className="absolute left-1/2 top-1/2 z-20"
      style={{ x, y, translateX: "-50%", translateY: "-50%", rotate: 0 }}
      transition={reducedMotion ? { duration: 0 } : { duration: 0.15 }}
    >
      <div
        className={[
          "inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-[var(--color-border)] bg-[var(--color-bg-elevated)] text-[var(--color-text)] shadow-[0_8px_20px_rgba(0,0,0,0.28)]",
          compact
            ? "min-h-7 px-2 py-1 text-[9px]"
            : "min-h-9 px-3 py-1.5 text-[11px] sm:text-xs",
        ].join(" ")}
      >
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[rgba(47,140,255,0.16)] text-[var(--color-cyan)]">
          <Icon className="h-3.5 w-3.5" />
        </span>
        <span className="font-medium">{item.name}</span>
      </div>
    </m.div>
  );
};

function DockerIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M5 11h3v3H5zm4 0h3v3H9zm4 0h3v3h-3zM9 7h3v3H9zm4 0h3v3h-3z"
        fill="currentColor"
      />
      <path
        d="M19 12.5c.5 2.8-1.3 5.5-4.1 6.2A9.9 9.9 0 0 1 12.4 19H7.5A4.5 4.5 0 0 1 3 14.5V14h14.3c.5-.9 1.3-1.4 1.7-1.5Z"
        fill="currentColor"
        opacity="0.82"
      />
    </svg>
  );
}
