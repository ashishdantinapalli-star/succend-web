"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { LogoWordmark } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { login } from "@/lib/services/userService";
import { Eye, EyeOff, Loader2 } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);
    try {
      await login({ email, password });
      router.push("/home");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-surface px-6 py-12">
      <div className="w-full max-w-[400px]">
        <div className="mb-8 flex justify-center">
          <LogoWordmark />
        </div>

        <div className="rounded-2xl border border-line bg-surface-raised p-7 shadow-[var(--shadow-card)]">
          <h1 className="font-display text-[22px] font-semibold text-ink">Welcome back</h1>
          <p className="mt-1 text-[13px] text-ink-soft">
            Log in to pick up where you left off.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4" noValidate>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-[13px] font-medium text-ink">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="h-11 w-full rounded-xl border border-line-strong bg-white px-3.5 text-[14px] text-ink placeholder:text-ink-faint focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand-pale"
              />
            </div>

            <div>
              <div className="mb-1.5 flex items-center justify-between">
                <label htmlFor="password" className="block text-[13px] font-medium text-ink">
                  Password
                </label>
                <button
                  type="button"
                  className="text-[12px] font-medium text-brand hover:text-brand-dark"
                  onClick={() => setError("Password reset isn't available in this prototype yet.")}
                >
                  Forgot password?
                </button>
              </div>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  required
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="h-11 w-full rounded-xl border border-line-strong bg-white px-3.5 pr-10 text-[14px] text-ink placeholder:text-ink-faint focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand-pale"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-ink-faint hover:text-ink-soft"
                >
                  {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
                </button>
              </div>
            </div>

            {error ? (
              <p role="alert" className="text-[13px] text-danger">
                {error}
              </p>
            ) : null}

            <Button type="submit" disabled={isSubmitting} className="w-full">
              {isSubmitting ? (
                <>
                  <Loader2 size={16} className="animate-spin" /> Logging in…
                </>
              ) : (
                "Log in"
              )}
            </Button>
          </form>
        </div>

        <p className="mt-6 text-center text-[13px] text-ink-soft">
          New to Succend?{" "}
          <Link href="/signup" className="font-medium text-brand hover:text-brand-dark">
            Create an account
          </Link>
        </p>
        <p className="mt-2 text-center text-[12px] text-ink-faint">
          This is a Version 0.1 prototype — no real authentication yet.
        </p>
      </div>
    </div>
  );
}
