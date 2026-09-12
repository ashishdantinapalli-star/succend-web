import Link from "next/link";
import { LogoMark } from "@/components/ui/Logo";
import { LevelBadge } from "@/components/ui/LevelBadge";
import type { User } from "@/lib/types";

export function TopBar({ user }: { user: User }) {
  return (
    <header className="sticky top-0 z-30 flex items-center justify-between border-b border-line bg-surface-raised/95 px-4 py-3 backdrop-blur lg:hidden">
      <Link href="/home" className="flex items-center gap-2">
        <LogoMark size={26} />
        <span className="font-display text-[16px] font-semibold text-ink">Succend</span>
      </Link>
      <Link href="/profile" className="flex items-center gap-2" aria-label="Level and profile">
        <div className="text-right leading-tight">
          <p className="font-mono-tabular text-[11px] text-ink-faint">
            {user.currentXp}/{user.xpToNextLevel} XP
          </p>
          <p className="text-[11px] font-medium text-ink-soft">Lvl {user.level}</p>
        </div>
        <LevelBadge level={user.level} size={34} />
      </Link>
    </header>
  );
}
