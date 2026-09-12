import { cx } from "@/lib/utils";

interface QuestBarProps {
  current: number;
  max: number;
  label?: string;
  size?: "sm" | "md";
  className?: string;
}

/**
 * The XP "quest bar" -- Succend's signature progress indicator.
 * A segmented, textured track with a glowing leading edge, echoing
 * the arrow-closing-in-on-the-star motif from the wordmark.
 */
export function QuestBar({ current, max, label, size = "md", className }: QuestBarProps) {
  const ratio = max > 0 ? Math.min(1, Math.max(0, current / max)) : 0;
  const pct = Math.round(ratio * 100);
  const height = size === "sm" ? "h-2.5" : "h-3.5";

  return (
    <div className={cx("w-full", className)}>
      {label ? (
        <div className="mb-1.5 flex items-baseline justify-between">
          <span className="text-[11px] font-medium uppercase tracking-wide text-ink-faint">
            {label}
          </span>
          <span className="font-mono-tabular text-[12px] text-ink-soft">
            {current.toLocaleString()} / {max.toLocaleString()} XP
          </span>
        </div>
      ) : null}
      <div
        role="progressbar"
        aria-valuenow={pct}
        aria-valuemin={0}
        aria-valuemax={100}
        className={cx(
          "relative w-full overflow-hidden rounded-full bg-surface-sunken ring-1 ring-inset ring-line",
          height
        )}
      >
        <div
          className="quest-fill quest-fill-animate relative h-full rounded-full"
          style={{ width: `${pct}%` }}
        >
          <span className="absolute right-0 top-1/2 h-2.5 w-2.5 -translate-y-1/2 translate-x-1/2 rounded-full bg-xp-glow shadow-[0_0_8px_var(--color-xp-glow)]" />
        </div>
      </div>
    </div>
  );
}
