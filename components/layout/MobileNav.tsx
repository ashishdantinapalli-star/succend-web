"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { mobileNav } from "@/lib/nav";
import { cx } from "@/lib/utils";

export function MobileNav() {
  const pathname = usePathname();

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-surface-raised/95 backdrop-blur pb-[env(safe-area-inset-bottom)] lg:hidden"
      aria-label="Primary"
    >
      <ul className="flex items-stretch justify-between px-1">
        {mobileNav.map((item) => {
          const isActive = pathname === item.href || pathname?.startsWith(item.href + "/");
          const Icon = item.icon;
          const isCreate = item.href === "/goals/new";
          return (
            <li key={item.href} className="flex-1">
              <Link
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className="flex flex-col items-center gap-1 py-2.5 text-[11px] font-medium"
              >
                <span
                  className={cx(
                    "flex items-center justify-center rounded-full transition-colors",
                    isCreate ? "h-9 w-9 -mt-4 bg-brand text-white shadow-[var(--shadow-pop)]" : "h-7 w-7",
                    !isCreate && isActive && "text-brand",
                    !isCreate && !isActive && "text-ink-faint"
                  )}
                >
                  <Icon size={isCreate ? 20 : 20} strokeWidth={isActive ? 2.3 : 2} />
                </span>
                <span className={cx(isActive ? "text-brand" : "text-ink-faint")}>{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
