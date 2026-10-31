
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, Sun, Moon } from "lucide-react";
import { LogoWordmark } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";

const navItems = [
  { label: "What you can do", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Leaderboard", href: "#leaderboard" },
  { label: "About us", href: "#about" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("succend-theme");
    const isDark = savedTheme === "dark";

    setDarkMode(isDark);
    document.documentElement.classList.toggle("dark", isDark);
    document.documentElement.style.colorScheme = isDark ? "dark" : "light";
  }, []);

  const toggleTheme = () => {
    const nextDarkMode = !darkMode;

    setDarkMode(nextDarkMode);
    document.documentElement.classList.toggle("dark", nextDarkMode);
    document.documentElement.style.colorScheme = nextDarkMode
      ? "dark"
      : "light";

    window.localStorage.setItem(
      "succend-theme",
      nextDarkMode ? "dark" : "light"
    );
  };

  const closeMenu = () => setMenuOpen(false);

  const handleLogoClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    closeMenu();

    if (pathname === "/") {
      event.preventDefault();

      window.history.replaceState(null, "", "/");
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        width: "100%",
        padding: "16px 16px 0",
        pointerEvents: "none",
      }}
    >
      <nav
        style={{
          pointerEvents: "auto",
          width: "100%",
          maxWidth: "1152px",
          margin: "0 auto",
          position: "relative",
          backgroundColor:
            "color-mix(in srgb, var(--color-surface-raised) 82%, transparent)",
        }}
        className="rounded-2xl border border-line px-5 py-3 shadow-lg backdrop-blur-xl transition-colors duration-300"
      >
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/"
            className="shrink-0"
            onClick={handleLogoClick}
            aria-label="Succend home"
          >
            <LogoWordmark />
          </Link>

          <div className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="whitespace-nowrap text-sm font-medium text-ink-soft transition-colors hover:text-ink"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <button
              type="button"
              aria-label={
                darkMode ? "Switch to light mode" : "Switch to dark mode"
              }
              title={
                darkMode ? "Switch to light mode" : "Switch to dark mode"
              }
              onClick={toggleTheme}
              className="flex h-9 w-9 items-center justify-center rounded-full text-ink-soft transition-colors hover:bg-brand-pale hover:text-ink"
            >
              {darkMode ? <Sun size={17} /> : <Moon size={17} />}
            </button>

            <Link
              href="/login"
              className="whitespace-nowrap text-sm font-medium text-ink-soft transition-colors hover:text-ink"
            >
              Log in
            </Link>

            <Button href="/signup" size="md">
              Sign up
            </Button>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              aria-label={
                darkMode ? "Switch to light mode" : "Switch to dark mode"
              }
              onClick={toggleTheme}
              className="flex h-9 w-9 items-center justify-center rounded-full text-ink-soft hover:bg-brand-pale"
            >
              {darkMode ? <Sun size={17} /> : <Moon size={17} />}
            </button>

            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
              className="rounded-lg p-2 text-ink transition-colors hover:bg-brand-pale"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="mt-4 border-t border-line pt-3 md:hidden">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="rounded-lg px-3 py-3 text-sm font-medium text-ink-soft transition-colors hover:bg-brand-pale hover:text-ink"
                >
                  {item.label}
                </Link>
              ))}

              <Link
                href="/login"
                onClick={closeMenu}
                className="rounded-lg px-3 py-3 text-sm font-medium text-ink-soft hover:bg-brand-pale hover:text-ink"
              >
                Log in
              </Link>

              <div className="px-3 py-2">
                <Button href="/signup" size="md">
                  Sign up
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
