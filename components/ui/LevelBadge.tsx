import { cx } from "@/lib/utils";

interface LevelBadgeProps {
  level: number;
  size?: number;
  className?: string;
}

export function LevelBadge({ level, size = 44, className }: LevelBadgeProps) {
  return (
    <div
      className={cx(
        "relative flex shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand to-brand-dark text-white",
        className
      )}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <svg
        width={size * 0.42}
        height={size * 0.42}
        viewBox="0 0 24 24"
        fill="white"
        opacity={0.16}
        className="absolute -top-1 right-1"
      >
        <path d="M12 2l2.4 5.6L20 8.4l-4.4 3.8 1.4 6.2L12 15.6 6.9 18.4l1.4-6.2L4 8.4l5.6-0.8L12 2z" />
      </svg>
      <span className="font-display font-semibold leading-none" style={{ fontSize: size * 0.4 }}>
        {level}
      </span>
    </div>
  );
}
