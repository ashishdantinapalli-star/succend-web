import { listGoals } from "@/lib/services/goalService";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { GoalCard } from "@/components/goals/GoalCard";
import { PageHeader } from "@/components/layout/PageHeader";
import { Plus } from "lucide-react";

export default async function GoalsPage() {
  const goals = await listGoals();
  const activeGoals = goals.filter((g) => g.status !== "completed");
  const completedGoals = goals.filter((g) => g.status === "completed");

  return (
    <div className="mx-auto max-w-6xl px-5 py-6 lg:px-8 lg:py-8">
      <PageHeader
        title="Goals"
        description="Everything you're working toward, broken into milestones you can actually chip away at."
        action={
          // Goal creation isn't wired up yet — this is a placeholder for the
          // "new goal" flow that will come with the backend.
          <Button size="md">
            <Plus size={16} /> Create goal
          </Button>
        }
      />

      <section className="mb-8">
        <h2 className="mb-3 text-[15px] font-semibold text-ink">Current goals</h2>
        {activeGoals.length > 0 ? (
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {activeGoals.map((goal) => (
              <GoalCard key={goal.id} goal={goal} />
            ))}
          </div>
        ) : (
          <Card className="text-center text-[13px] text-ink-faint">
            No active goals yet. Create one to start the loop.
          </Card>
        )}
      </section>

      <section>
        <h2 className="mb-3 text-[15px] font-semibold text-ink">Completed</h2>
        {completedGoals.length > 0 ? (
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {completedGoals.map((goal) => (
              <GoalCard key={goal.id} goal={goal} />
            ))}
          </div>
        ) : (
          <Card className="text-center text-[13px] text-ink-faint">
            Nothing completed yet — finished goals will show up here.
          </Card>
        )}
      </section>
    </div>
  );
}
