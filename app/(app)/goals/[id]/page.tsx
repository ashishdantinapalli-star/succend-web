import { notFound } from "next/navigation";
import { getGoal } from "@/lib/services/goalService";
import { mockProgressEntries } from "@/lib/mock-data";
import { GoalDetailView } from "@/components/goals/GoalDetailView";

interface GoalDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function GoalDetailPage({ params }: GoalDetailPageProps) {
  const { id } = await params;
  const goal = await getGoal(id);

  if (!goal) {
    notFound();
  }

  const initialEntries = mockProgressEntries
    .filter((entry) => entry.goalId === goal.id)
    .sort((a, b) => new Date(b.loggedAt).getTime() - new Date(a.loggedAt).getTime());

  return <GoalDetailView goal={goal} initialEntries={initialEntries} />;
}
