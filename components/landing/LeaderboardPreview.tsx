export function LeaderboardPreview() {
  return (
    <section
      id="leaderboard"
      className="border-t border-line bg-surface-raised px-6 py-20"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-[28px] font-semibold text-ink">
          Compete. Improve. Rise.
        </h2>

        <p className="mt-2 max-w-xl text-[14px] leading-relaxed text-ink-soft">
          See how your progress stacks up and turn achievement into friendly
          competition.
        </p>

        <div className="mt-10 overflow-hidden rounded-2xl border border-line bg-surface">
          <div className="grid grid-cols-[60px_1fr_100px] border-b border-line px-5 py-4 text-[12px] font-medium text-ink-faint">
            <span>#</span>
            <span>Player</span>
            <span className="text-right">XP</span>
          </div>

          <div className="grid grid-cols-[60px_1fr_100px] px-5 py-5">
            <span className="font-semibold text-brand-mid">1</span>
            <span className="font-medium text-ink">Jordan Avery</span>
            <span className="text-right font-semibold text-ink">2,840</span>
          </div>

          <div className="grid grid-cols-[60px_1fr_100px] border-t border-line px-5 py-5">
            <span className="font-semibold text-brand-mid">2</span>
            <span className="font-medium text-ink">Alex Morgan</span>
            <span className="text-right font-semibold text-ink">2,610</span>
          </div>

          <div className="grid grid-cols-[60px_1fr_100px] border-t border-line px-5 py-5">
            <span className="font-semibold text-brand-mid">3</span>
            <span className="font-medium text-ink">Taylor Chen</span>
            <span className="text-right font-semibold text-ink">2,390</span>
          </div>
        </div>
      </div>
    </section>
  );
}