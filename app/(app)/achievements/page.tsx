import { mockAchievements } from "@/lib/mock-data";
import { Card } from "@/components/ui/Card";
import { AchievementBadge } from "@/components/achievements/AchievementBadge";
import { PageHeader } from "@/components/layout/PageHeader";
import { Trophy, Sparkles, Lock } from "lucide-react";

export default function AchievementsPage() {
  const unlocked = mockAchievements.filter((a) => a.isUnlocked);
  const locked = mockAchievements.filter((a) => !a.isUnlocked);
  const xpFromAchievements = unlocked.reduce((sum, a) => sum + a.xpReward, 0);

  return (
    <div className="mx-auto max-w-6xl px-5 py-6 lg:px-8 lg:py-8">
      <PageHeader
        title="Achievements"
        description="Badges you've earned along the way, and the ones still waiting to be unlocked."
      />

      <div className="mb-8 grid grid-cols-3 gap-3">
        <Card className="text-center">
          <Trophy size={18} className="mx-auto mb-2 text-gold" />
          <p className="font-mono-tabular text-[20px] font-semibold text-ink">
            {unlocked.length}/{mockAchievements.length}
          </p>
          <p className="text-[11px] text-ink-faint">Unlocked</p>
        </Card>
        <Card className="text-center">
          <Sparkles size={18} className="mx-auto mb-2 text-brand" />
          <p className="font-mono-tabular text-[20px] font-semibold text-ink">{xpFromAchievements}</p>
          <p className="text-[11px] text-ink-faint">XP earned</p>
        </Card>
        <Card className="text-center">
          <Lock size={18} className="mx-auto mb-2 text-ink-faint" />
          <p className="font-mono-tabular text-[20px] font-semibold text-ink">{locked.length}</p>
          <p className="text-[11px] text-ink-faint">Still locked</p>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <h2 className="mb-4 text-[14px] font-semibold text-ink">Recently unlocked</h2>
          <div className="space-y-4">
            {unlocked.length > 0 ? (
              unlocked.map((a) => <AchievementBadge key={a.id} achievement={a} />)
            ) : (
              <p className="text-[13px] text-ink-faint">No achievements unlocked yet.</p>
            )}
          </div>
        </Card>
        <Card>
          <h2 className="mb-4 text-[14px] font-semibold text-ink">Locked</h2>
          <div className="space-y-4">
            {locked.length > 0 ? (
              locked.map((a) => <AchievementBadge key={a.id} achievement={a} />)
            ) : (
              <p className="text-[13px] text-ink-faint">You&apos;ve unlocked everything so far!</p>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
}
