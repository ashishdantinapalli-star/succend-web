import type { Goal } from "../types";
import { mockGoals } from "../mock-data";

/**
 * Mock Goals service. Mirrors the future `Goals Service` domain from the
 * communication architecture: owns creation, updates, and status of goals.
 * Swap the bodies of these functions for `fetch` calls to
 * `/api/goals` once the Django backend is available; the signatures
 * are intended to stay the same.
 */

const SIMULATED_LATENCY_MS = 300;

function delay<T>(value: T, ms = SIMULATED_LATENCY_MS): Promise<T> {
  return new Promise((resolve) => setTimeout(() => resolve(value), ms));
}

export async function listGoals(): Promise<Goal[]> {
  return delay(mockGoals);
}

export async function getGoal(goalId: string): Promise<Goal | undefined> {
  return delay(mockGoals.find((g) => g.id === goalId));
}

export function goalProgressRatio(goal: Goal): number {
  if (goal.target === 0) return 0;
  return Math.min(1, Math.max(0, goal.currentValue / goal.target));
}
