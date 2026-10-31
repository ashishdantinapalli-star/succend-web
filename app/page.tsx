import { LogoWordmark } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { RankEmblem } from "@/components/ui/rankemblem";

import {
  ArrowRight,
  Flame,
  Target,
} from "lucide-react";

import { Navbar } from "@/components/landing/Navbar";
import { Features } from "@/components/landing/Features";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { LeaderboardPreview } from "@/components/landing/LeaderboardPreview";
import { About } from "@/components/landing/About";
import { FlowBackground } from "@/components/ui/flowbackground";

export default function Home() {
  return (
    <main className="min-h-screen bg-surface text-ink">
      <FlowBackground />

      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden px-6 pb-20 pt-20 sm:pb-28 sm:pt-28">
        <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
          <div className="relative z-10">
            <h1 className="max-w-2xl font-display text-5xl font-semibold leading-tight tracking-tight text-ink sm:text-6xl lg:text-7xl">
              Turn your goals into{" "}
              <span className="bg-gradient-to-r from-brand via-brand-mid to-brand-dark bg-clip-text text-transparent">
                achievements.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
              Succend turns self-improvement into a journey you can see,
              track, and enjoy. Set goals, build consistency, earn XP, and
              celebrate every step forward.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Button>
                Start your journey
                <ArrowRight className="ml-2 inline" size={18} />
              </Button>

              <a
                href="#how-it-works"
                className="inline-flex items-center rounded-xl border border-line bg-surface-raised px-5 py-3 text-sm font-medium text-ink transition hover:border-brand/40 hover:bg-brand/5"
              >
                See how it works
              </a>
            </div>
          </div>

          {/* Sample profile card */}
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-brand/15 via-transparent to-brand-mid/10 blur-2xl" />

            <div className="relative rounded-2xl border border-line bg-surface-raised p-6 shadow-sm sm:p-7">
              <div className="flex items-center justify-between gap-4">
                <div className="flex min-w-0 items-center gap-3">
                  <RankEmblem size={64} alt="GOD III rank emblem" />

                  <div className="min-w-0">
                    <p className="font-semibold text-ink">
                      Jordan Avery
                    </p>

                    <p className="mt-0.5 text-sm font-medium text-brand">
                      GOD III
                    </p>

                    <p className="mt-1 flex items-center gap-1 text-sm text-ink-soft">
                      <Flame size={14} />
                      12-day streak
                    </p>
                  </div>
                </div>

                <span className="shrink-0 rounded-full bg-brand/10 px-3 py-1 text-xs font-medium text-brand-dark">
                  Fitness
                </span>
              </div>

              <div className="mt-7">
                <div className="flex items-center justify-between gap-3 text-xs font-medium text-ink-soft">
                  <span>LEVEL 7 PROGRESS</span>
                  <span>340 / 600 XP</span>
                </div>

                <div
                  className="mt-3 h-2.5 overflow-hidden rounded-full bg-line"
                  role="progressbar"
                  aria-label="Level 7 XP progress"
                  aria-valuemin={0}
                  aria-valuemax={600}
                  aria-valuenow={340}
                >
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-brand to-brand-mid"
                    style={{ width: `${(340 / 600) * 100}%` }}
                  />
                </div>
              </div>

              <div className="mt-7 grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-line bg-surface p-4">
                  <p className="text-xs text-ink-faint">
                    Goals completed
                  </p>
                  <p className="mt-2 font-display text-2xl font-semibold text-ink">
                    24
                  </p>
                </div>

                <div className="rounded-xl border border-line bg-surface p-4">
                  <p className="text-xs text-ink-faint">
                    Total XP earned
                  </p>
                  <p className="mt-2 font-display text-2xl font-semibold text-ink">
                    2,840
                  </p>
                </div>
              </div>

              <div className="mt-5 flex items-center gap-3 rounded-xl border border-line bg-surface p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
                  <Target size={19} />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-ink">
                    Daily movement
                  </p>
                  <p className="mt-1 text-xs text-ink-soft">
                    Keep building your consistency
                  </p>
                </div>

                <span className="shrink-0 text-xs font-medium text-brand">
                  In progress
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Succend loop */}
      <section className="border-y border-line bg-surface-raised px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
              The Succend loop
            </p>

            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Small actions. Real progress.
            </h2>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                number: "01",
                title: "Create a goal",
                description: "Define what you want to accomplish.",
              },
              {
                number: "02",
                title: "Work toward it",
                description: "Turn your goal into consistent action.",
              },
              {
                number: "03",
                title: "Log progress",
                description: "Record your effort and see how far you've come.",
              },
              {
                number: "04",
                title: "Earn achievements",
                description: "Celebrate milestones and earn XP.",
              },
            ].map((step) => (
              <div
                key={step.number}
                className="rounded-2xl border border-line bg-surface p-6 transition hover:-translate-y-1 hover:border-brand/40"
              >
                <span className="font-display text-sm font-semibold text-brand">
                  {step.number}
                </span>

                <h3 className="mt-4 font-display text-lg font-semibold text-ink">
                  {step.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Features />

      <HowItWorks />

      <LeaderboardPreview />

      <About />

      {/* Final call to action */}
      <section className="px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-4xl rounded-3xl border border-line bg-surface-raised px-6 py-12 text-center sm:px-12 sm:py-16">
          <LogoWordmark />

          <h2 className="mt-7 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Your next achievement starts with one step.
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-ink-soft">
            Choose a goal, make progress, and keep moving forward.
            Your journey is yours to build.
          </p>

          <div className="mt-8">
            <Button>
              Start your journey
              <ArrowRight className="ml-2 inline" size={18} />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-line px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-ink-soft">
            © {new Date().getFullYear()} Succend. Keep moving forward.
          </p>

          <div className="flex items-center gap-3 text-sm text-ink-soft">
            <span>Follow us at</span>

            <a
              href="https://www.instagram.com/succendapp/"
              target="_blank"
              rel="noreferrer"
              aria-label="Succend on Instagram"
              className="inline-flex items-center justify-center rounded-lg border border-line p-2 transition hover:border-brand/40 hover:text-brand"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}