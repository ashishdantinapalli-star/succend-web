import { cx } from "@/lib/utils";
import type { HTMLAttributes } from "react";

export function Card({ className, ...rest }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cx(
        "rounded-2xl border border-line bg-surface-raised p-5 shadow-[var(--shadow-card)]",
        className
      )}
      {...rest}
    />
  );
}
