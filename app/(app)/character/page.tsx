import { getCurrentUser } from "@/lib/services/userService";
import { Card } from "@/components/ui/Card";
import { LevelBadge } from "@/components/ui/LevelBadge";
import { QuestBar } from "@/components/ui/QuestBar";
import { CharacterPreview } from "@/components/character/CharacterPreview";
import { PageHeader } from "@/components/layout/PageHeader";

// Placeholder options — will come from the user's unlocked inventory
// once the Shop and Character customization system are connected.
const customizationSections = [
  { label: "Outfit", options: ["Slate Hoodie", "Violet Cape", "Explorer Jacket"] },
  { label: "Accessory", options: ["None", "Compass Pin", "Reading Glasses"] },
  { label: "Color", options: ["Violet", "Emerald", "Gold"] },
];

export default async function CharacterPage() {
  const user = await getCurrentUser();

  return (
    <div className="mx-auto max-w-6xl px-5 py-6 lg:px-8 lg:py-8">
      <PageHeader
        title="Character"
        description="Your avatar levels up alongside you — customize it with items earned or bought in the Shop."
      />

      <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
        <Card>
          <CharacterPreview level={user.level} />
          <div className="mt-4 flex items-center gap-3">
            <LevelBadge level={user.level} size={40} />
            <div className="min-w-0">
              <p className="truncate text-[13px] font-semibold text-ink">{user.name}</p>
              <p className="text-[12px] text-ink-faint">Level {user.level}</p>
            </div>
          </div>
          <QuestBar current={user.currentXp} max={user.xpToNextLevel} className="mt-3" size="sm" />
        </Card>

        <div className="space-y-6">
          {customizationSections.map((section) => (
            <Card key={section.label}>
              <h2 className="mb-3 text-[14px] font-semibold text-ink">{section.label}</h2>
              <div className="flex flex-wrap gap-2">
                {section.options.map((option, i) => (
                  <span
                    key={option}
                    className={
                      i === 0
                        ? "rounded-full bg-brand-pale px-3 py-1.5 text-[12px] font-medium text-brand-dark ring-1 ring-inset ring-brand-mid/40"
                        : "rounded-full bg-surface-sunken px-3 py-1.5 text-[12px] font-medium text-ink-faint ring-1 ring-inset ring-line"
                    }
                  >
                    {option}
                  </span>
                ))}
              </div>
              <p className="mt-3 text-[11px] text-ink-faint">
                Customization will connect to your inventory once the Shop is live.
              </p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
