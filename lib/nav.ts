import type { LucideIcon } from "lucide-react";
import {
  Home,
  Target,
  TrendingUp,
  Trophy,
  UserRound,
  ShoppingBag,
  Settings,
  PlusCircle,
} from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
  icon: LucideIcon;
}

/** Full desktop sidebar order. */
export const primaryNav: NavItem[] = [
  { label: "Home", href: "/home", icon: Home },
  { label: "Goals", href: "/goals", icon: Target },
  { label: "Progress", href: "/progress", icon: TrendingUp },
  { label: "Achievements", href: "/achievements", icon: Trophy },
  { label: "Character", href: "/character", icon: UserRound },
  { label: "Shop", href: "/shop", icon: ShoppingBag },
  { label: "Settings", href: "/settings", icon: Settings },
];

/** Mobile bottom nav: the 5 highest-frequency destinations. */
export const mobileNav: NavItem[] = [
  { label: "Home", href: "/home", icon: Home },
  { label: "Goals", href: "/goals", icon: Target },
  { label: "Create", href: "/goals/new", icon: PlusCircle },
  { label: "Achievements", href: "/achievements", icon: Trophy },
  { label: "Profile", href: "/profile", icon: UserRound },
];

/** Lower-frequency items surfaced inside the mobile Profile menu. */
export const profileMenuExtras: NavItem[] = [
  { label: "Shop", href: "/shop", icon: ShoppingBag },
  { label: "Settings", href: "/settings", icon: Settings },
];
