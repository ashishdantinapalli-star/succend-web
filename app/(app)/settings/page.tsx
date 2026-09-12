import { getCurrentUser } from "@/lib/services/userService";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { PageHeader } from "@/components/layout/PageHeader";
import { User as UserIcon, Palette, Bell, ShieldCheck } from "lucide-react";

// Placeholder toggles — not wired to any storage yet, just the visual state.
const notificationPrefs = [
  { label: "Goal reminders", description: "Nudges when a deadline is approaching." },
  { label: "Habit reminders", description: "Daily prompts to keep your streak alive." },
  { label: "Challenge alerts", description: "Updates on challenges you've joined." },
  { label: "Motivational messages", description: "Occasional encouragement from Succend." },
];

export default async function SettingsPage() {
  const user = await getCurrentUser();

  return (
    <div className="mx-auto max-w-3xl px-5 py-6 lg:px-8 lg:py-8">
      <PageHeader
        title="Settings"
        description="Manage your profile, appearance, and notification preferences."
      />

      <div className="space-y-6">
        <Card>
          <h2 className="mb-4 flex items-center gap-2 text-[14px] font-semibold text-ink">
            <UserIcon size={16} className="text-brand" /> Profile
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <p className="text-[12px] font-medium text-ink-faint">Name</p>
              <p className="mt-1 rounded-lg border border-line bg-surface-sunken px-3 py-2 text-[13px] text-ink">
                {user.name}
              </p>
            </div>
            <div>
              <p className="text-[12px] font-medium text-ink-faint">Username</p>
              <p className="mt-1 rounded-lg border border-line bg-surface-sunken px-3 py-2 text-[13px] text-ink">
                @{user.username}
              </p>
            </div>
            <div className="sm:col-span-2">
              <p className="text-[12px] font-medium text-ink-faint">Email</p>
              <p className="mt-1 rounded-lg border border-line bg-surface-sunken px-3 py-2 text-[13px] text-ink">
                {user.email}
              </p>
            </div>
          </div>
          <Button size="sm" variant="secondary" className="mt-4">
            Edit profile
          </Button>
        </Card>

        <Card>
          <h2 className="mb-4 flex items-center gap-2 text-[14px] font-semibold text-ink">
            <Palette size={16} className="text-brand" /> Appearance
          </h2>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[13px] font-medium text-ink">Theme</p>
              <p className="text-[12px] text-ink-faint">Succend currently runs in light mode.</p>
            </div>
            <span className="rounded-full bg-brand-pale px-3 py-1 text-[12px] font-medium text-brand-dark">
              Light
            </span>
          </div>
        </Card>

        <Card>
          <h2 className="mb-4 flex items-center gap-2 text-[14px] font-semibold text-ink">
            <Bell size={16} className="text-brand" /> Notifications
          </h2>
          <div className="divide-y divide-line">
            {notificationPrefs.map((pref) => (
              <div
                key={pref.label}
                className="flex items-center justify-between py-3 first:pt-0 last:pb-0"
              >
                <div>
                  <p className="text-[13px] font-medium text-ink">{pref.label}</p>
                  <p className="text-[12px] text-ink-faint">{pref.description}</p>
                </div>
                <span className="h-6 w-11 shrink-0 rounded-full bg-brand p-0.5" aria-hidden="true">
                  <span className="block h-5 w-5 rounded-full bg-white shadow-sm" />
                </span>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <h2 className="mb-4 flex items-center gap-2 text-[14px] font-semibold text-ink">
            <ShieldCheck size={16} className="text-brand" /> Account
          </h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <p className="text-[13px] text-ink">Change password</p>
              <Button size="sm" variant="secondary">
                Update
              </Button>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-[13px] text-ink">Log out</p>
              <Button size="sm" variant="secondary">
                Log out
              </Button>
            </div>
            <div className="flex items-center justify-between border-t border-line pt-3">
              <p className="text-[13px] text-danger">Delete account</p>
              <Button size="sm" variant="secondary" className="!border-danger !text-danger hover:!bg-danger/5">
                Delete
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
