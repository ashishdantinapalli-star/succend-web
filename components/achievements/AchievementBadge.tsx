import { Trophy, Flame, Flag, Star } from "lucide-react";
import { cx } from "@/lib/utils";
import type { Achievement } from "@/lib/types";

const iconMap = { trophy: Trophy, flame: Flame, flag: Flag, star: Star };

const rarityRing: Record<Achievement["rarity"], string> = {
  common: "ring-line-strong bg-surface-sunken text-ink-soft",
  rare: "ring-brand-mid/40 bg-brand-pale text-brand-dark",
  epic: "ring-gold/40 bg-gold-pale text-gold",
  legendary: "ring-gold bg-gold-pale text-gold",
};

export function AchievementBadge({ achievement }: { achievement: Achievement }) {
  const Icon = iconMap[achievement.icon as keyof typeof iconMap] ?? Trophy;

  return (
    <div className="flex items-center gap-3">
      <div
        className={cx(
          "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ring-1",
          achievement.isUnlocked ? rarityRing[achievement.rarity] : "bg-surface-sunken text-ink-faint ring-line"
        )}
      >
        <Icon size={19} strokeWidth={2} />
      </div>
      <div className="min-w-0">
        <p className={cx("truncate text-[13px] font-semibold", achievement.isUnlocked ? "text-ink" : "text-ink-faint")}>
          {achievement.title}
        </p>
        <p className="truncate text-[12px] text-ink-faint">
          {achievement.isUnlocked ? `+${achievement.xpReward} XP earned` : achievement.requirement}
        </p>
      </div>
    </div>
  );
}
