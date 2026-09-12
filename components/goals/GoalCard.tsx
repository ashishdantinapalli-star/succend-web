import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { goalProgressRatio } from "@/lib/services/goalService";
import { daysUntil, cx } from "@/lib/utils";
import type { Goal } from "@/lib/types";
import { CalendarDays } from "lucide-react";

const categoryLabel: Record<Goal["category"], string> = {
  fitness: "Fitness",
  academic: "Academic",
  career: "Career",
  personal: "Personal",
  finance: "Finance",
  creative: "Creative",
  health: "Health",
};

const difficultyLabel: Record<Goal["difficulty"], string> = {
  easy: "Easy",
  medium: "Medium",
  hard: "Hard",
};

export function GoalCard({ goal }: { goal: Goal }) {
  const ratio = goalProgressRatio(goal);
  const pct = Math.round(ratio * 100);
  const daysLeft = daysUntil(goal.deadline);

  return (
    <Link href={`/goals/${goal.id}`} className="block">
      <Card className="transition-shadow hover:shadow-[var(--shadow-pop)]">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <div className="mb-1.5 flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-brand-pale px-2 py-0.5 text-[11px] font-medium text-brand-dark">
                {categoryLabel[goal.category]}
              </span>
              <span className="text-[11px] font-medium text-ink-faint">
                {difficultyLabel[goal.difficulty]}
              </span>
            </div>
            <h3 className="truncate text-[14px] font-semibold text-ink">{goal.title}</h3>
          </div>
          <span className="shrink-0 font-mono-tabular text-[13px] font-semibold text-brand">
            {pct}%
          </span>
        </div>

        <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-surface-sunken ring-1 ring-inset ring-line">
          <div
            className={cx(
              "h-full rounded-full",
              goal.status === "completed" ? "bg-xp" : "bg-brand"
            )}
            style={{ width: `${pct}%` }}
          />
        </div>

        <div className="mt-3 flex items-center justify-between text-[12px] text-ink-faint">
          <span className="flex items-center gap-1.5">
            <CalendarDays size={13} />
            {daysLeft > 0 ? `${daysLeft} days left` : "Past deadline"}
          </span>
          <span>
            {goal.milestones.filter((m) => m.isComplete).length}/{goal.milestones.length} milestones
          </span>
        </div>
      </Card>
    </Link>
  );
}
