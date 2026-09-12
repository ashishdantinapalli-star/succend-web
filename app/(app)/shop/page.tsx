import { getCurrentUser } from "@/lib/services/userService";
import { mockShopItems } from "@/lib/mock-data";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { PageHeader } from "@/components/layout/PageHeader";
import { Coins, Shirt, Gem, Sparkles, Wand2 } from "lucide-react";
import type { ShopItemCategory } from "@/lib/types";

const categoryMeta: Record<ShopItemCategory, { label: string; icon: typeof Shirt }> = {
  clothing: { label: "Clothing", icon: Shirt },
  accessory: { label: "Accessories", icon: Gem },
  appearance: { label: "Appearance", icon: Sparkles },
  effect: { label: "Effects", icon: Wand2 },
};

export default async function ShopPage() {
  const user = await getCurrentUser();
  const categories = Object.keys(categoryMeta) as ShopItemCategory[];

  return (
    <div className="mx-auto max-w-6xl px-5 py-6 lg:px-8 lg:py-8">
      <PageHeader
        title="Shop"
        description="Spend points earned from goals and challenges on items for your character."
        action={
          <div className="flex items-center gap-2 rounded-xl border border-line bg-surface-raised px-4 py-2.5">
            <Coins size={16} className="text-gold" />
            <span className="font-mono-tabular text-[14px] font-semibold text-ink">
              {user.points.toLocaleString()} pts
            </span>
          </div>
        }
      />

      <div className="space-y-8">
        {categories.map((category) => {
          const items = mockShopItems.filter((item) => item.category === category);
          if (items.length === 0) return null;
          const Icon = categoryMeta[category].icon;

          return (
            <section key={category}>
              <h2 className="mb-3 flex items-center gap-2 text-[15px] font-semibold text-ink">
                <Icon size={16} className="text-brand" /> {categoryMeta[category].label}
              </h2>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((item) => (
                  <Card key={item.id}>
                    <h3 className="truncate text-[14px] font-semibold text-ink">{item.name}</h3>
                    <p className="mt-1 text-[12px] text-ink-faint">{item.description}</p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="flex items-center gap-1 font-mono-tabular text-[13px] font-semibold text-ink">
                        <Coins size={13} className="text-gold" /> {item.cost}
                      </span>
                      {item.isOwned ? (
                        <span className="rounded-full bg-brand-pale px-3 py-1 text-[11px] font-medium text-brand-dark">
                          Owned
                        </span>
                      ) : (
                        // Purchasing isn't wired up yet — placeholder for the
                        // eventual buy flow.
                        <Button size="sm" variant="secondary">
                          Buy
                        </Button>
                      )}
                    </div>
                  </Card>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
