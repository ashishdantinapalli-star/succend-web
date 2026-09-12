import type { ReactNode } from "react";

interface PageHeaderProps {
  title: string;
  description: string;
  action?: ReactNode;
}

/**
 * Shared title + description header used at the top of every dashboard
 * sub-page (Goals, Progress, Achievements, Character, Shop, Settings),
 * so each page starts the same way the Home page does.
 */
export function PageHeader({ title, description, action }: PageHeaderProps) {
  return (
    <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 className="font-display text-[21px] font-semibold text-ink lg:text-[24px]">
          {title}
        </h1>
        <p className="mt-1 max-w-xl text-[13px] text-ink-soft lg:text-[14px]">
          {description}
        </p>
      </div>
      {action}
    </div>
  );
}
