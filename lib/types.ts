/**
 * Domain types for Succend.
 *
 * These mirror the shape we expect the future Django/Python API to return.
 * Mock services in `lib/services` implement the same function signatures
 * a real API client would, so screens can be repointed later without
 * changing component code.
 */

export type GoalCategory =
  | "fitness"
  | "academic"
  | "career"
  | "personal"
  | "finance"
  | "creative"
  | "health";

export type GoalDifficulty = "easy" | "medium" | "hard";

export type GoalStatus = "active" | "in_progress" | "completed";

export interface Milestone {
  id: string;
  title: string;
  isComplete: boolean;
}

export interface Goal {
  id: string;
  title: string;
  description: string;
  category: GoalCategory;
  difficulty: GoalDifficulty;
  status: GoalStatus;
  target: number;
  unit: string;
  currentValue: number;
  deadline: string; // ISO date
  createdAt: string; // ISO date
  milestones: Milestone[];
  xpReward: number;
}

export interface ProgressEntry {
  id: string;
  goalId: string;
  value: number;
  note?: string;
  loggedAt: string; // ISO date
}

export type AchievementRarity = "common" | "rare" | "epic" | "legendary";

export interface Achievement {
  id: string;
  title: string;
  description: string;
  requirement: string;
  rarity: AchievementRarity;
  xpReward: number;
  isUnlocked: boolean;
  unlockedAt?: string;
  icon: string; // key into an icon map
}

export interface CharacterCustomization {
  outfit: string;
  accessory: string;
  color: string;
}

export interface Character {
  name: string;
  level: number;
  customization: CharacterCustomization;
  unlockedItemIds: string[];
}

export type ShopItemCategory = "clothing" | "accessory" | "appearance" | "effect";

export interface ShopItem {
  id: string;
  name: string;
  description: string;
  category: ShopItemCategory;
  cost: number;
  isOwned: boolean;
}

export interface User {
  id: string;
  name: string;
  username: string;
  email: string;
  level: number;
  currentXp: number;
  xpToNextLevel: number;
  totalXp: number;
  points: number;
  streakDays: number;
  joinedAt: string;
  avatarSeed: string;
}

export interface AuthCredentials {
  email: string;
  password: string;
}

export interface SignUpDetails {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}
