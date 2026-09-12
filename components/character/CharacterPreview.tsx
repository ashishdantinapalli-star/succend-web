/**
 * Level 1 characters are intentionally simple; this placeholder mark
 * grows more detailed as the full Character screen and customization
 * system are built out.
 */
export function CharacterPreview({ level }: { level: number }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl bg-gradient-to-b from-brand-pale-2 to-brand-pale p-6">
      <svg width="72" height="88" viewBox="0 0 72 88" fill="none" aria-hidden="true">
        <ellipse cx="36" cy="82" rx="26" ry="5" fill="var(--color-brand)" opacity="0.12" />
        <rect x="18" y="38" width="36" height="38" rx="14" fill="var(--color-brand)" />
        <circle cx="36" cy="20" r="17" fill="#F4CBA8" />
        <path d="M19 18a17 17 0 0 1 34 0c-6 2-28 2-34 0z" fill="var(--color-brand-dark)" />
        <circle cx="30" cy="21" r="1.6" fill="#241854" />
        <circle cx="42" cy="21" r="1.6" fill="#241854" />
      </svg>
      <p className="mt-3 text-[12px] font-medium text-brand-dark">Level {level} avatar</p>
      <p className="text-[11px] text-ink-faint">Customize on the Character page</p>
    </div>
  );
}
