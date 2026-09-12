import { Sidebar } from "@/components/layout/Sidebar";
import { TopBar } from "@/components/layout/TopBar";
import { MobileNav } from "@/components/layout/MobileNav";
import { getCurrentUser } from "@/lib/services/userService";

export default async function AppLayout({ children }: { children: React.ReactNode }) {
  // In production this becomes a session-aware fetch (e.g. `/api/users/me`).
  const user = await getCurrentUser();

  return (
    <div className="flex min-h-screen bg-surface">
      <Sidebar user={user} />
      <div className="flex min-w-0 flex-1 flex-col">
        <TopBar user={user} />
        <main className="flex-1 pb-24 lg:pb-0">{children}</main>
      </div>
      <MobileNav />
    </div>
  );
}
