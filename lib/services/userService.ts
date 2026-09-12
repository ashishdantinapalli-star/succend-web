import type { AuthCredentials, SignUpDetails, User } from "../types";
import { mockUser } from "../mock-data";

/**
 * Mock Auth/Profile service.
 *
 * Function signatures are written to match what a real call to
 * `POST /api/auth/login`, `POST /api/auth/signup`, and
 * `GET /api/users/me` would look like, so this file is the only
 * thing that needs to change when the Django backend exists.
 */

const SIMULATED_LATENCY_MS = 400;

function delay<T>(value: T, ms = SIMULATED_LATENCY_MS): Promise<T> {
  return new Promise((resolve) => setTimeout(() => resolve(value), ms));
}

export async function getCurrentUser(): Promise<User> {
  return delay(mockUser);
}

export async function login(credentials: AuthCredentials): Promise<{ user: User; token: string }> {
  if (!credentials.email || !credentials.password) {
    throw new Error("Email and password are required.");
  }
  return delay({ user: mockUser, token: "mock-session-token" });
}

export async function signUp(details: SignUpDetails): Promise<{ user: User; token: string }> {
  if (details.password !== details.confirmPassword) {
    throw new Error("Passwords do not match.");
  }
  const newUser: User = {
    ...mockUser,
    id: "u_new",
    name: details.name,
    username: details.name.toLowerCase().replace(/\s+/g, ""),
    email: details.email,
    level: 1,
    currentXp: 0,
    xpToNextLevel: 200,
    totalXp: 0,
    points: 0,
    streakDays: 0,
  };
  return delay({ user: newUser, token: "mock-session-token" });
}
