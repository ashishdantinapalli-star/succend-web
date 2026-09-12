"use client";

import { useState } from "react";
import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { QuestBar } from "@/components/ui/QuestBar";
import { goalProgressRatio } from "@/lib/services/goalService";
import { daysUntil, formatDate, cx } from "@/lib/utils";
import type { Goal, ProgressEntry } from "@/lib/types";
import {
  ArrowLeft,
  CalendarDays,
  CheckCircle2,
  Circle,
  Trophy,
  Sparkles,
} from "lucide-react";

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

interface GoalDetailViewProps {
  goal: Goal;
  initialEntries: ProgressEntry[];
}

/**
 * Interactive goal-detail view. This is frontend-only: logging progress and
 * completing the goal only update local component state so the eventual
 * Create Goal -> Work Toward Goal -> Log Progress -> Complete Goal -> Earn XP
 * loop is demonstrable before the real Goals/Rewards services exist.
 */
export function GoalDetailView({ goal, initialEntries }: GoalDetailViewProps) {
  const [currentValue, setCurrentValue] = useState(goal.currentValue);
  const [entries, setEntries] = useState(initialEntries);
  const [isCompleted, setIsCompleted] = useState(goal.status === "completed");
  const [justCompleted, setJustCompleted] = useState(false);

  const [showLogForm, setShowLogForm] = useState(false);
  const [logValue, setLogValue] = useState(String(goal.currentValue));
  const [logNote, setLogNote] = useState("");

  const ratio = goalProgressRatio({ ...goal, currentValue });
  const pct = Math.round(ratio * 100);
  const daysLeft = daysUntil(goal.deadline);
  const canComplete = !isCompleted && ratio >= 1;
  const completedMilestones = goal.milestones.filter((m) => m.isComplete).length;

  function handleSaveProgress() {
    const value = Number(logValue);
    if (Number.isNaN(value)) return;

    setCurrentValue(value);
    setEntries([
      {
        id: `local_${Date.now()}`,
        goalId: goal.id,
        value,
        note: logNote.trim() || undefined,
        loggedAt: new Date().toISOString(),
      },
      ...entries,
    ]);
    setLogNote("");
    setShowLogForm(false);
  }

  function handleCompleteGoal() {
    setIsCompleted(true);
    setJustCompleted(true);
    setShowLogForm(false);
  }

  return (
    <div className="mx-auto max-w-4xl px-5 py-6 lg:px-8 lg:py-8">
      <Link
        href="/goals"
        className="mb-5 inline-flex items-center gap-1.5 text-[13px] font-medium text-ink-faint transition-colors hover:text-brand"
      >
        <ArrowLeft size={15} />
        Back to Goals
      </Link>

      {/* Header */}
      <div className="mb-6">
        <div className="mb-2 flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-brand-pale px-2.5 py-1 text-[12px] font-medium text-brand-dark">
            {categoryLabel[goal.category]}
          </span>
          <span className="text-[12px] font-medium text-ink-faint">
            {difficultyLabel[goal.difficulty]} difficulty
          </span>
          {isCompleted ? (
            <span className="flex items-center gap-1 rounded-full bg-xp/10 px-2.5 py-1 text-[12px] font-medium text-xp">
              <CheckCircle2 size={13} /> Completed
            </span>
          ) : null}
        </div>
        <h1 className="font-display text-[22px] font-semibold text-ink lg:text-[26px]">
          {goal.title}
        </h1>
        <p className="mt-2 max-w-2xl text-[14px] text-ink-soft">{goal.description}</p>
      </div>

      {justCompleted ? (
        <div className="mb-6 rounded-2xl border border-xp/30 bg-xp/5 p-5 shadow-[var(--shadow-card)]">
          <div className="flex items-start gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-xp/15 text-xp">
              <Trophy size={20} />
            </div>
            <div>
              <p className="text-[14px] font-semibold text-ink">Goal complete! 🎉</p>
              <p className="mt-1 text-[13px] text-ink-soft">
                +{goal.xpReward} XP earned. In the full version this is where level-ups and
                achievement unlocks will trigger — for now this is a frontend demo of that
                moment.
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <Button href="/goals" size="sm">
                  Back to Goals
                </Button>
                <Button href="/achievements" size="sm" variant="secondary">
                  <Sparkles size={14} /> View Achievements
                </Button>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      <div className="grid gap-6 lg:grid-cols-[1fr_280px]">
        {/* Main column */}
        <div className="space-y-6">
          <Card>
            <div className="mb-3 flex items-baseline justify-between">
              <h2 className="text-[14px] font-semibold text-ink">Progress</h2>
              <span className="font-mono-tabular text-[13px] font-semibold text-brand">
                {pct}%
              </span>
            </div>
            <QuestBar current={currentValue} max={goal.target} size="md" />
            <div className="mt-2 flex items-center justify-between text-[12px] text-ink-faint">
              <span>
                {currentValue.toLocaleString()} / {goal.target.toLocaleString()} {goal.unit}
              </span>
              <span className="flex items-center gap-1.5">
                <CalendarDays size={13} />
                {daysLeft > 0 ? `${daysLeft} days left` : "Past deadline"}
              </span>
            </div>

            {!isCompleted && (
              <div className="mt-5 border-t border-line pt-4">
                {showLogForm ? (
                  <div className="space-y-3">
                    <div>
                      <label className="text-[12px] font-medium text-ink-faint">
                        New value ({goal.unit})
                      </label>
                      <input
                        type="number"
                        value={logValue}
                        onChange={(e) => setLogValue(e.target.value)}
                        className="mt-1 w-full rounded-lg border border-line bg-surface px-3 py-2 text-[13px] text-ink outline-none ring-brand focus:ring-2"
                      />
                    </div>
                    <div>
                      <label className="text-[12px] font-medium text-ink-faint">
                        Note (optional)
                      </label>
                      <input
                        type="text"
                        value={logNote}
                        onChange={(e) => setLogNote(e.target.value)}
                        placeholder="e.g. Tempo run, felt strong"
                        className="mt-1 w-full rounded-lg border border-line bg-surface px-3 py-2 text-[13px] text-ink outline-none ring-brand focus:ring-2"
                      />
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" onClick={handleSaveProgress}>
                        Save progress
                      </Button>
                      <Button size="sm" variant="ghost" onClick={() => setShowLogForm(false)}>
                        Cancel
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-wrap gap-2">
                    <Button size="sm" onClick={() => setShowLogForm(true)}>
                      Log progress
                    </Button>
                    <Button
                      size="sm"
                      variant="secondary"
                      disabled={!canComplete}
                      onClick={handleCompleteGoal}
                    >
                      <Trophy size={14} />
                      Mark goal complete
                    </Button>
                  </div>
                )}
                {!canComplete && !showLogForm && (
                  <p className="mt-2 text-[11px] text-ink-faint">
                    Reach your target to unlock the completion action.
                  </p>
                )}
              </div>
            )}
          </Card>

          <Card>
            <h2 className="mb-4 text-[14px] font-semibold text-ink">
              Milestones
              <span className="ml-2 font-mono-tabular text-[12px] font-normal text-ink-faint">
                {completedMilestones}/{goal.milestones.length}
              </span>
            </h2>
            <ul className="space-y-3">
              {goal.milestones.map((milestone) => (
                <li key={milestone.id} className="flex items-center gap-2.5">
                  {milestone.isComplete ? (
                    <CheckCircle2 size={17} className="shrink-0 text-xp" />
                  ) : (
                    <Circle size={17} className="shrink-0 text-ink-faint" />
                  )}
                  <span
                    className={cx(
                      "text-[13px]",
                      milestone.isComplete ? "text-ink-faint line-through" : "text-ink"
                    )}
                  >
                    {milestone.title}
                  </span>
                </li>
              ))}
            </ul>
          </Card>

          <Card>
            <h2 className="mb-4 text-[14px] font-semibold text-ink">Recent activity</h2>
            {entries.length > 0 ? (
              <ul className="space-y-3">
                {entries.map((entry) => (
                  <li
                    key={entry.id}
                    className="flex items-start justify-between gap-3 border-b border-line pb-3 last:border-0 last:pb-0"
                  >
                    <div>
                      <p className="text-[13px] text-ink">
                        {entry.value.toLocaleString()} {goal.unit}
                      </p>
                      {entry.note ? (
                        <p className="text-[12px] text-ink-faint">{entry.note}</p>
                      ) : null}
                    </div>
                    <span className="shrink-0 text-[11px] text-ink-faint">
                      {formatDate(entry.loggedAt)}
                    </span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-[13px] text-ink-faint">No progress logged yet.</p>
            )}
          </Card>
        </div>

        {/* Side column */}
        <div className="space-y-6">
          <Card>
            <h2 className="mb-3 text-[14px] font-semibold text-ink">Details</h2>
            <dl className="space-y-3 text-[13px]">
              <div className="flex items-center justify-between">
                <dt className="text-ink-faint">Category</dt>
                <dd className="font-medium text-ink">{categoryLabel[goal.category]}</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-ink-faint">Difficulty</dt>
                <dd className="font-medium text-ink">{difficultyLabel[goal.difficulty]}</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-ink-faint">Target</dt>
                <dd className="font-medium text-ink">
                  {goal.target.toLocaleString()} {goal.unit}
                </dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-ink-faint">Deadline</dt>
                <dd className="font-medium text-ink">{formatDate(goal.deadline)}</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-ink-faint">XP reward</dt>
                <dd className="font-medium text-brand">+{goal.xpReward} XP</dd>
              </div>
            </dl>
          </Card>
        </div>
      </div>
    </div>
  );
}
