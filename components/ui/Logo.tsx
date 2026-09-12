type LogoProps = {
  size?: number;
  className?: string;
  monochrome?: boolean;
};

/**
 * The Succend mark: a star (the goal) with an arrow closing in on it.
 * Recreated as inline SVG so it can be recolored / animated via CSS.
 */
export function LogoMark({ size = 32, className, monochrome = false }: LogoProps) {
  const circleFill = monochrome ? "#17121F" : "var(--color-brand)";
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Succend"
    >
      <circle cx="32" cy="32" r="32" fill={circleFill} />
      <path
        d="M32 15.5L35.9 25.9L47 26.7L38.4 33.7L41.2 44.5L32 38.4L22.8 44.5L25.6 33.7L17 26.7L28.1 25.9L32 15.5Z"
        fill="white"
      />
      <path
        d="M18 40L28.5 29.5"
        stroke="#2f9d63"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      <path
        d="M22 29.5L29.5 27.5L27.3 34.8L22 29.5Z"
        fill="#2f9d63"
      />
      <circle cx="17" cy="41" r="1.6" fill="#2f9d63" />
    </svg>
  );
}

export function LogoWordmark({ className }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className ?? ""}`}>
      <LogoMark size={30} />
      <span className="font-display text-[19px] font-semibold tracking-tight text-ink">
        Succend
      </span>
    </div>
  );
}
