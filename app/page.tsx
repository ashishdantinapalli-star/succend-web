import { LogoMark, LogoWordmark } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { QuestBar } from "@/components/ui/QuestBar";
import { LevelBadge } from "@/components/ui/LevelBadge";
import { ArrowRight, Flame, Target, TrendingUp } from "lucide-react";
import { Navbar } from "@/components/landing/Navbar";
import { Features } from "@/components/landing/Features";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { LeaderboardPreview } from "@/components/landing/LeaderboardPreview";
import { About } from "@/components/landing/About";

const loopSteps = [
  { n: "01", title: "Create a goal", body: "Name the target, set a deadline, break it into milestones." },
  { n: "02", title: "Work toward it", body: "Succend keeps the goal visible and the next step obvious." },
  { n: "03", title: "Log progress", body: "A quick entry updates your stats, streaks, and quest bar." },
  { n: "04", title: "Complete it", body: "Hit the target and Succend closes the loop for you." },
  { n: "05", title: "Earn XP", body: "Every goal and milestone pays out experience toward your level." },
  { n: "06", title: "Level up", body: "New level, new unlocks — then it's on to the next goal." },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-surface">
      <Navbar />

      <main>
        {/* Hero */}
        <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-20 pt-10 lg:grid-cols-[1.05fr_0.95fr] lg:pb-28 lg:pt-16">
          <div>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-line-strong bg-brand-pale-2 px-3 py-1 text-[12px] font-medium text-brand-dark">
              <LogoMark size={14} />
              Plan. Track. Achieve. Level up.
            </p>
            <h1 className="font-display text-[40px] font-semibold leading-[1.08] tracking-tight text-ink sm:text-[52px]">
              Goals stall in a list.
              <br />
              They move in a game.
            </h1>
            <p className="mt-5 max-w-md text-[16px] leading-relaxed text-ink-soft">
              Succend turns whatever you&apos;re working toward — a race, a
              degree, a savings target — into goals with real stakes: log
              progress, earn XP, level up, and unlock achievements as you go.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button href="/signup" size="lg">
                Create your first goal
                <ArrowRight size={16} />
              </Button>
              <Button href="/login" variant="secondary" size="lg">
                I already have an account
              </Button>
            </div>
            <div className="mt-10 flex items-center gap-6 text-[13px] text-ink-faint">
              <span className="flex items-center gap-1.5">
                <Target size={15} /> Goal &amp; milestone tracking
              </span>
              <span className="flex items-center gap-1.5">
                <TrendingUp size={15} /> XP, levels &amp; achievements
              </span>
            </div>
          </div>

          {/* Signature visual: a live-feeling goal card mid-progress */}
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-[28px] bg-gradient-to-br from-brand-pale to-transparent blur-xl" />
            <div className="rounded-2xl border border-line bg-surface-raised p-6 shadow-[var(--shadow-card)]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <LevelBadge level={7} size={40} />
                  <div>
                    <p className="text-[13px] font-semibold text-ink">Jordan Avery</p>
                    <p className="flex items-center gap-1 text-[12px] text-ink-faint">
                      <Flame size={12} className="text-gold" /> 12-day streak
                    </p>
                  </div>
                </div>
                <span className="rounded-full bg-brand-pale px-2.5 py-1 text-[11px] font-medium text-brand-dark">
                  Fitness
                </span>
              </div>

              <QuestBar current={340} max={600} label="Level 7 progress" className="mt-5" />

              <div className="mt-6 rounded-xl border border-line bg-surface-sunken p-4">
                <p className="text-[13px] font-semibold text-ink">Run a sub-25-minute 5K</p>
                <p className="mt-1 text-[12px] text-ink-faint">2 of 4 milestones complete</p>
                <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-white ring-1 ring-inset ring-line">
                  <div className="h-full w-[68%] rounded-full bg-brand" />
                </div>
                <div className="mt-3 flex items-center justify-between text-[12px]">
                  <span className="text-ink-faint">Deadline Oct 15</span>
                  <span className="font-medium text-brand-dark">+220 XP on completion</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The loop */}
        <section className="border-t border-line bg-surface-raised">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <h2 className="font-display text-[26px] font-semibold text-ink">
              The Succend loop
            </h2>
            <p className="mt-2 max-w-xl text-[14px] text-ink-soft">
              Every goal on Succend moves through the same six-step cycle —
              that repetition is what makes progress feel like momentum
              instead of a chore.
            </p>
            <div className="mt-10 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
              {loopSteps.map((step) => (
                <div key={step.n} className="flex gap-4">
                  <span className="font-mono-tabular text-[13px] font-semibold text-brand-mid">
                    {step.n}
                  </span>
                  <div>
                    <h3 className="text-[14px] font-semibold text-ink">{step.title}</h3>
                    <p className="mt-1 text-[13px] leading-relaxed text-ink-faint">{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="mx-auto max-w-6xl px-6 py-20 text-center">
          <h2 className="font-display text-[28px] font-semibold text-ink">
            Pick a goal. Start the loop.
          </h2>
          <p className="mx-auto mt-2 max-w-md text-[14px] text-ink-soft">
            It takes about a minute to set up your first goal on Succend.
          </p>
          <div className="mt-7 flex justify-center gap-3">
            <Button href="/signup" size="lg">
              Sign up free
            </Button>
            <Button href="/login" variant="secondary" size="lg">
              Log in
            </Button>
          </div>
        </section>
      </main>

      <footer className="border-t border-line px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
          <LogoWordmark />
          <p className="text-[12px] text-ink-faint">
            &copy; {new Date().getFullYear()} Succend. Version 0.1 prototype.
          </p>
        </div>
      </footer>
    </div>
  );
}
