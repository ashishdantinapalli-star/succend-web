# Succend — v0.1 Foundation

This is the application shell for Succend: responsive navigation, the
landing page, login, and the Home dashboard, wired up with mock data. It
is scoped intentionally — no backend, auth, AI, or payments — so it can
be reviewed before the remaining Version 0.1 screens are built.

## What's here

- **Landing page** (`/`) — brand intro, sign up / log in entry points.
- **Login** (`/login`) — frontend-only form, no real authentication.
- **Home dashboard** (`/home`) — greeting, level/XP, current goals, quick
  "Create goal" action, progress summary, character preview, recent
  achievements.
- **App shell** — persistent desktop sidebar with active-state
  indication and live level/XP; mobile top bar + bottom tab nav (Home,
  Goals, Create, Achievements, Profile), with Shop/Settings intended to
  live inside the mobile Profile menu once that screen exists.

## Run it

```bash
npm install
npm run dev
```

Then visit `http://localhost:3000`, `/login`, or `/home`.

## Structure

```
app/
  page.tsx              Landing page
  login/page.tsx         Login
  (app)/layout.tsx        Authenticated shell (sidebar/topbar/mobile nav)
  (app)/home/page.tsx     Home dashboard
components/
  layout/    Sidebar, MobileNav, TopBar
  ui/        Button, Card, Logo, QuestBar (XP bar), LevelBadge
  goals/     GoalCard
  character/ CharacterPreview
  achievements/ AchievementBadge
lib/
  types.ts              Shared domain types (User, Goal, Achievement, …)
  mock-data.ts            Mock dataset
  services/              Mock service functions shaped like future API calls
  nav.ts                 Single source of truth for nav items (desktop + mobile)
```

## Notes for the next pass

- `lib/services/*` functions are already written with the async
  signatures a real fetch call to a Django API would have — swapping
  the mock bodies for `fetch()` calls should not require touching any
  page or component code.
- Routes referenced by nav/links but not yet built (`/goals`, `/goals/new`,
  `/progress`, `/achievements`, `/character`, `/shop`, `/settings`,
  `/profile`, `/signup`) will 404 until those screens are approved and
  added.
- Fonts are self-hosted via `@fontsource` (Space Grotesk, Inter, IBM Plex
  Mono) rather than `next/font/google`, so the app builds and runs
  without a network call to Google Fonts.
