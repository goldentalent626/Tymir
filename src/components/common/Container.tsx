import type { PropsWithChildren } from "react";
import clsx from "clsx";

interface ContainerProps extends PropsWithChildren {
  className?: string;
}

export const Container = ({ children, className }: ContainerProps) => {
  return (
    <div
      className={clsx("mx-auto w-full max-w-[1280px] px-4 md:px-8", className)}
    >
      {children}
    </div>
  );
};
