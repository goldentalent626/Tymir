import type { AnchorHTMLAttributes } from "react";

export const ExternalLink = (
  props: AnchorHTMLAttributes<HTMLAnchorElement>,
) => {
  return <a {...props} target="_blank" rel="noopener noreferrer" />;
};
