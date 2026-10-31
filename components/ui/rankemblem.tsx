
interface RankEmblemProps {
  size?: number;
  className?: string;
  alt?: string;
}

export function RankEmblem({
  size = 48,
  className = "",
  alt = "Succend rank emblem",
}: RankEmblemProps) {
  return (
    <div
      className={`relative inline-flex shrink-0 items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      <img
        src="/images/god-iii-emblem.svg"
        alt={alt}
        width={size}
        height={size}
        className="h-full w-full object-contain"
      />
    </div>
  );
}
