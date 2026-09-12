export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="border-t border-line bg-surface px-6 py-20"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-[28px] font-semibold text-ink">
          How It Works
        </h2>

        <p className="mt-2 max-w-xl text-[14px] leading-relaxed text-ink-soft">
          Turn a goal into a clear progression, track your progress, and
          keep moving forward.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-line bg-surface-raised p-6">
            <p className="text-sm font-semibold text-brand-mid">01</p>
            <h3 className="mt-3 text-[16px] font-semibold text-ink">
              Set your goal
            </h3>
            <p className="mt-2 text-[13px] leading-relaxed text-ink-soft">
              Define what you want to accomplish and break it into achievable
              milestones.
            </p>
          </div>

          <div className="rounded-2xl border border-line bg-surface-raised p-6">
            <p className="text-sm font-semibold text-brand-mid">02</p>
            <h3 className="mt-3 text-[16px] font-semibold text-ink">
              Track your progress
            </h3>
            <p className="mt-2 text-[13px] leading-relaxed text-ink-soft">
              Log your progress and watch your goals, streaks, and XP move
              forward.
            </p>
          </div>

          <div className="rounded-2xl border border-line bg-surface-raised p-6">
            <p className="text-sm font-semibold text-brand-mid">03</p>
            <h3 className="mt-3 text-[16px] font-semibold text-ink">
              Level up
            </h3>
            <p className="mt-2 text-[13px] leading-relaxed text-ink-soft">
              Complete milestones, earn XP, unlock achievements, and take on
              your next challenge.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}