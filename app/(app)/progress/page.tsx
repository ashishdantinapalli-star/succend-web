import { getCurrentUser } from "@/lib/services/userService";
import { listGoals } from "@/lib/services/goalService";
import { Card } from "@/components/ui/Card";
import { QuestBar } from "@/components/ui/QuestBar";
import { LevelBadge } from "@/components/ui/LevelBadge";
import { PageHeader } from "@/components/layout/PageHeader";
import { Target, CheckCircle2, Flame, TrendingUp } from "lucide-react";

// Placeholder weekly activity — relative bar heights (%). Will be replaced
// by real logged-progress data once the Progress Tracking service exists.
const weeklyActivity = [40, 65, 30, 80, 55, 90, 70];
const weekdayLabels = ["M", "T", "W", "T", "F", "S", "S"];

export default async function ProgressPage() {
  const [user, goals] = await Promise.all([getCurrentUser(), listGoals()]);
  const activeGoals = goals.filter((g) => g.status !== "completed");
  const completedGoals = goals.filter((g) => g.status === "completed");
  const completionRate =
    goals.length > 0 ? Math.round((completedGoals.length / goals.length) * 100) : 0;

  return (
    <div className="mx-auto max-w-6xl px-5 py-6 lg:px-8 lg:py-8">
      <PageHeader
        title="Progress"
        description="Your XP, streaks, and goal statistics in one place."
      />

      <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
        {/* Main column */}
        <div className="space-y-6">
          <Card>
            <div className="flex items-center gap-4">
              <LevelBadge level={user.level} size={52} />
              <div className="flex-1">
                <p className="text-[14px] font-semibold text-ink">Level {user.level}</p>
                <QuestBar current={user.currentXp} max={user.xpToNextLevel} className="mt-2" />
              </div>
            </div>
            <p className="mt-3 font-mono-tabular text-[12px] text-ink-faint">
              {user.totalXp.toLocaleString()} XP earned all-time
            </p>
          </Card>

          <Card>
            <h2 className="mb-4 text-[14px] font-semibold text-ink">Weekly activity</h2>
            <div className="flex h-32 items-end justify-between gap-2">
              {weeklyActivity.map((height, i) => (
                <div key={weekdayLabels[i] + i} className="flex h-full flex-1 flex-col items-center gap-2">
                  <div className="flex h-full w-full items-end">
                    <div
                      className="w-full rounded-t-md bg-brand"
                      style={{ height: `${height}%` }}
                    />
                  </div>
                  <span className="text-[11px] text-ink-faint">{weekdayLabels[i]}</span>
                </div>
              ))}
            </div>
            <p className="mt-3 text-[11px] text-ink-faint">
              Placeholder chart — will reflect real logged activity once progress tracking is connected.
            </p>
          </Card>

          <div>
            <h2 className="mb-3 text-[15px] font-semibold text-ink">Goal statistics</h2>
            <div className="grid grid-cols-3 gap-3">
              <Card className="text-center">
                <Target size={18} className="mx-auto mb-2 text-brand" />
                <p className="font-mono-tabular text-[20px] font-semibold text-ink">{activeGoals.length}</p>
                <p className="text-[11px] text-ink-faint">Active goals</p>
              </Card>
              <Card className="text-center">
                <CheckCircle2 size={18} className="mx-auto mb-2 text-xp" />
                <p className="font-mono-tabular text-[20px] font-semibold text-ink">{completedGoals.length}</p>
                <p className="text-[11px] text-ink-faint">Completed</p>
              </Card>
              <Card className="text-center">
                <TrendingUp size={18} className="mx-auto mb-2 text-gold" />
                <p className="font-mono-tabular text-[20px] font-semibold text-ink">{completionRate}%</p>
                <p className="text-[11px] text-ink-faint">Completion rate</p>
              </Card>
            </div>
          </div>
        </div>

        {/* Side column */}
        <div className="space-y-6">
          <Card>
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold-pale text-gold">
                <Flame size={20} />
              </div>
              <div>
                <p className="font-mono-tabular text-[20px] font-semibold text-ink">
                  {user.streakDays} days
                </p>
                <p className="text-[12px] text-ink-faint">Current streak</p>
              </div>
            </div>
          </Card>

          <Card>
            <h2 className="mb-3 text-[14px] font-semibold text-ink">Points</h2>
            <p className="font-mono-tabular text-[24px] font-semibold text-ink">
              {user.points.toLocaleString()}
            </p>
            <p className="mt-1 text-[12px] text-ink-faint">
              Earn points by completing goals and challenges — spend them in the Shop.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
