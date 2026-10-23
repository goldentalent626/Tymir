import { useTranslation } from "react-i18next";
import type { CertificationBadge } from "../../data/credentials";

interface CertificationMarqueeProps {
  badges: CertificationBadge[];
}

const BadgeItem = ({
  badge,
  hidden,
}: {
  badge: CertificationBadge;
  hidden?: boolean;
}) => {
  const { t } = useTranslation();
  const image = (
    <img
      src={badge.image}
      alt={hidden ? "" : badge.name}
      title={`${badge.name} (${badge.issuer})`}
      width={180}
      height={200}
      loading="lazy"
      decoding="async"
      draggable={false}
      className="h-24 w-auto select-none object-contain drop-shadow-[0_10px_22px_rgba(0,0,0,0.35)] transition-transform duration-300 ease-out sm:h-28 [@media(hover:hover)_and_(pointer:fine)]:group-hover/badge:-translate-y-1 [@media(hover:hover)_and_(pointer:fine)]:group-hover/badge:scale-[1.06]"
    />
  );

  return (
    <li className="group/badge shrink-0 px-3 sm:px-4" aria-hidden={hidden}>
      {badge.verifyUrl ? (
        <a
          href={badge.verifyUrl}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={hidden ? -1 : undefined}
          aria-label={t("credentials.certificationLinkLabel", {
            name: badge.name,
          })}
          className="block cursor-pointer rounded-2xl"
        >
          {image}
        </a>
      ) : (
        image
      )}
    </li>
  );
};

export const CertificationMarquee = ({ badges }: CertificationMarqueeProps) => {
  const { t } = useTranslation();

  if (badges.length === 0) {
    return null;
  }

  return (
    <div
      className="certification-marquee relative overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[color-mix(in_srgb,var(--color-surface)_70%,transparent)] py-6"
      role="region"
      aria-label={t("credentials.certificationsTitle")}
    >
      <ul className="certification-marquee__track flex w-max items-center">
        {badges.map((badge) => (
          <BadgeItem key={badge.id} badge={badge} />
        ))}
        {/* Second copy makes the loop seamless; hidden from screen readers. */}
        {badges.map((badge) => (
          <BadgeItem key={`${badge.id}-copy`} badge={badge} hidden />
        ))}
      </ul>
    </div>
  );
};
