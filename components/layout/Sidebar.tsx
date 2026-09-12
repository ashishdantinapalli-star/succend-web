"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { primaryNav } from "@/lib/nav";
import { LogoWordmark } from "@/components/ui/Logo";
import { LevelBadge } from "@/components/ui/LevelBadge";
import { QuestBar } from "@/components/ui/QuestBar";
import { cx } from "@/lib/utils";
import type { User } from "@/lib/types";

export function Sidebar({ user }: { user: User }) {
  const pathname = usePathname();

  return (
    <aside className="hidden w-[264px] shrink-0 flex-col border-r border-line bg-surface-raised lg:flex">
      <div className="px-5 pb-2 pt-6">
        <LogoWordmark />
      </div>

      <div className="mx-5 mb-5 rounded-xl border border-line bg-surface-sunken p-3.5">
        <div className="flex items-center gap-3">
          <LevelBadge level={user.level} size={40} />
          <div className="min-w-0">
            <p className="truncate text-[13px] font-semibold text-ink">{user.name}</p>
            <p className="text-[12px] text-ink-faint">Level {user.level}</p>
          </div>
        </div>
        <QuestBar current={user.currentXp} max={user.xpToNextLevel} className="mt-3" size="sm" />
      </div>

      <nav className="flex-1 space-y-0.5 px-3">
        {primaryNav.map((item) => {
          const isActive = pathname === item.href || pathname?.startsWith(item.href + "/");
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive ? "page" : undefined}
              className={cx(
                "group relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-[14px] font-medium transition-colors",
                isActive
                  ? "bg-brand-pale text-brand-dark"
                  : "text-ink-soft hover:bg-surface-sunken hover:text-ink"
              )}
            >
              {isActive && (
                <span className="absolute left-0 top-1/2 h-5 w-1 -translate-y-1/2 rounded-r-full bg-brand" />
              )}
              <Icon size={18} strokeWidth={isActive ? 2.3 : 2} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-line px-5 py-4">
        <p className="text-[12px] text-ink-faint">
          {user.streakDays}-day streak &middot; {user.points.toLocaleString()} pts
        </p>
      </div>
    </aside>
  );
}
