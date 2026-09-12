"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { LogoWordmark } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";

const navItems = [
  { label: "What You Can Do", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Leaderboard", href: "#leaderboard" },
  { label: "About Us", href: "#about" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 px-4 pt-4">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-2xl border border-line/70 bg-surface/90 shadow-[0_8px_30px_rgba(40,20,80,0.06)] backdrop-blur-md">
          
          <div className="flex min-h-[68px] items-center justify-between px-5 sm:px-6">
            
            {/* Logo */}
            <Link href="/" aria-label="Succend home">
              <LogoWordmark />
            </Link>

            {/* Desktop navigation */}
            <nav className="hidden items-center gap-1 md:flex">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-ink-soft transition-all hover:bg-brand-pale/60 hover:text-ink"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Desktop actions */}
            <div className="hidden items-center gap-2 md:flex">
              <Button href="/login" variant="ghost" size="sm">
                Log in
              </Button>

              <Button href="/signup" variant="primary" size="sm">
                Sign up
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="rounded-lg p-2 text-ink transition-colors hover:bg-brand-pale/60 md:hidden"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          {/* Mobile navigation */}
          {menuOpen && (
            <div className="border-t border-line/70 px-5 py-5 md:hidden">
              <nav className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="rounded-lg px-3 py-3 text-sm font-medium text-ink-soft transition-colors hover:bg-brand-pale/60 hover:text-ink"
                  >
                    {item.label}
                  </Link>
                ))}

                <div className="mt-3 flex gap-3 border-t border-line/70 pt-4">
                  <Button href="/login" variant="ghost" size="sm">
                    Log in
                  </Button>

                  <Button href="/signup" variant="primary" size="sm">
                    Sign up
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}