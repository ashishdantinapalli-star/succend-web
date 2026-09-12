import Link from "next/link";
import { getCurrentUser } from "@/lib/services/userService";
import { listGoals, goalProgressRatio } from "@/lib/services/goalService";
import { mockAchievements } from "@/lib/mock-data";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { QuestBar } from "@/components/ui/QuestBar";
import { LevelBadge } from "@/components/ui/LevelBadge";
import { GoalCard } from "@/components/goals/GoalCard";
import { CharacterPreview } from "@/components/character/CharacterPreview";
import { AchievementBadge } from "@/components/achievements/AchievementBadge";
import { Plus, Flame, CheckCircle2, Target } from "lucide-react";

function greeting() {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning";
  if (hour < 18) return "Good afternoon";
  return "Good evening";
}

export default async function HomePage() {
  const [user, goals] = await Promise.all([getCurrentUser(), listGoals()]);

  const activeGoals = goals.filter((g) => g.status !== "completed");
  const completedGoals = goals.filter((g) => g.status === "completed");
  const recentAchievements = mockAchievements.filter((a) => a.isUnlocked).slice(0, 3);

  // The goal closest to being finished is the clearest answer to
  // "what should I work on next?"
  const focusGoal = [...activeGoals].sort(
    (a, b) => goalProgressRatio(b) - goalProgressRatio(a)
  )[0];

  return (
    <div className="mx-auto max-w-6xl px-5 py-6 lg:px-8 lg:py-8">
      {/* Greeting + XP header (desktop only — mobile gets this in TopBar) */}
      <div className="mb-6 hidden items-center justify-between lg:flex">
        <div>
          <h1 className="font-display text-[24px] font-semibold text-ink">
            {greeting()}, {user.name.split(" ")[0]}
          </h1>
          <p className="mt-1 text-[14px] text-ink-soft">
            {focusGoal
              ? <>Next up: <span className="font-medium text-ink">{focusGoal.title}</span></>
              : "You're all caught up — create a new goal to keep the streak going."}
          </p>
        </div>
        <div className="flex items-center gap-3 rounded-2xl border border-line bg-surface-raised px-4 py-3">
          <LevelBadge level={user.level} />
          <div className="w-44">
            <QuestBar current={user.currentXp} max={user.xpToNextLevel} />
          </div>
        </div>
      </div>

      <div className="mb-6 lg:hidden">
        <h1 className="font-display text-[21px] font-semibold text-ink">
          {greeting()}, {user.name.split(" ")[0]}
        </h1>
        <p className="mt-1 text-[13px] text-ink-soft">
          {focusGoal ? <>Next up: <span className="font-medium text-ink">{focusGoal.title}</span></> : "Create a goal to get started."}
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
        {/* Main column */}
        <div className="space-y-6">
          <Card className="flex items-center justify-between gap-4 bg-gradient-to-r from-brand to-brand-dark text-white">
            <div>
              <p className="text-[13px] font-medium text-white/80">Quick action</p>
              <p className="mt-0.5 font-display text-[17px] font-semibold">Start your next goal</p>
            </div>
            <Button href="/goals/new" variant="secondary" className="!bg-white !text-brand-dark !border-transparent">
              <Plus size={16} /> Create goal
            </Button>
          </Card>

          <div>
            <div className="mb-3 flex items-center justify-between">
              <h2 className="text-[15px] font-semibold text-ink">Current goals</h2>
              <Link href="/goals" className="text-[13px] font-medium text-brand hover:text-brand-dark">
                View all
              </Link>
            </div>
            {activeGoals.length > 0 ? (
              <div className="grid gap-3 sm:grid-cols-2">
                {activeGoals.map((goal) => (
                  <GoalCard key={goal.id} goal={goal} />
                ))}
              </div>
            ) : (
              <Card className="text-center text-[13px] text-ink-faint">
                No active goals yet. Create one to start the loop.
              </Card>
            )}
          </div>

          <div>
            <h2 className="mb-3 text-[15px] font-semibold text-ink">Progress summary</h2>
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
                <Flame size={18} className="mx-auto mb-2 text-gold" />
                <p className="font-mono-tabular text-[20px] font-semibold text-ink">{user.streakDays}</p>
                <p className="text-[11px] text-ink-faint">Day streak</p>
              </Card>
            </div>
          </div>
        </div>

        {/* Side column */}
        <div className="space-y-6">
          <Card>
            <CharacterPreview level={user.level} />
            <Button href="/character" variant="secondary" size="sm" className="mt-4 w-full">
              Open Character
            </Button>
          </Card>

          <Card>
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-[14px] font-semibold text-ink">Recent achievements</h2>
              <Link href="/achievements" className="text-[12px] font-medium text-brand hover:text-brand-dark">
                View all
              </Link>
            </div>
            <div className="space-y-4">
              {recentAchievements.map((a) => (
                <AchievementBadge key={a.id} achievement={a} />
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
