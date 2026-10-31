import { RankEmblem } from "@/components/ui/rankemblem";

const leaderboardPlayers = [
  { position: 1, name: "Jordan Avery", rank: "GOD III", xp: "28,840" },
  { position: 2, name: "Alex Morgan", rank: "GOD III", xp: "26,610" },
  { position: 3, name: "Taylor Chen", rank: "GOD III", xp: "24,390" },
];

export function LeaderboardPreview() {
  return (
    <section
      id="leaderboard"
      className="border-t border-line bg-surface-raised px-6 py-20"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-[28px] font-semibold text-ink">
          Leaderboard
        </h2>

        <div className="mt-10 overflow-hidden rounded-2xl border border-line bg-surface">
          <div className="grid grid-cols-[44px_minmax(0,1fr)_80px] items-center gap-3 border-b border-line px-4 py-4 text-[12px] font-medium text-ink-faint sm:grid-cols-[60px_minmax(0,1fr)_100px] sm:px-5">
            <span>#</span>
            <span>Player / Rank</span>
            <span className="text-right">XP</span>
          </div>

          {leaderboardPlayers.map((player) => (
            <div
              key={player.position}
              className="grid grid-cols-[44px_minmax(0,1fr)_80px] items-center gap-3 border-b border-line px-4 py-4 last:border-b-0 sm:grid-cols-[60px_minmax(0,1fr)_100px] sm:px-5 sm:py-5"
            >
              <span className="font-semibold text-brand-mid">
                {player.position}
              </span>

              <div className="flex min-w-0 items-center gap-3">
                <RankEmblem
                  size={48}
                  alt={`${player.rank} rank emblem`}
                  className="rounded-lg"
                />

                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-ink">
                    {player.name}
                  </p>

                  <p className="mt-1 text-[11px] font-semibold tracking-[0.14em] text-amber-600 dark:text-amber-400">
                    {player.rank}
                  </p>
                </div>
              </div>

              <span className="text-right text-sm font-semibold tabular-nums text-ink">
                {player.xp}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}