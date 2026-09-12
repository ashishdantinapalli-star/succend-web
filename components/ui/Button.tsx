import Link from "next/link";
import { cx } from "@/lib/utils";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-brand text-white hover:bg-brand-dark shadow-[var(--shadow-pop)] disabled:hover:bg-brand",
  secondary:
    "bg-white text-ink border border-line-strong hover:border-brand hover:text-brand",
  ghost: "text-ink-soft hover:text-ink hover:bg-surface-sunken",
};

const sizeClasses: Record<Size, string> = {
  sm: "h-9 px-3.5 text-[13px]",
  md: "h-11 px-5 text-[14px]",
  lg: "h-13 px-7 text-[15px]",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-colors duration-150 disabled:opacity-50 disabled:cursor-not-allowed";

interface CommonProps {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
}

interface ButtonAsButton
  extends CommonProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> {
  href?: undefined;
}

interface ButtonAsLink extends CommonProps {
  href: string;
}

export function Button(props: ButtonAsButton | ButtonAsLink) {
  const { variant = "primary", size = "md", children, className } = props;
  const classes = cx(base, variantClasses[variant], sizeClasses[size], className);

  if ("href" in props && props.href) {
    const { href } = props;
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  const { variant: _v, size: _s, className: _c, children: _ch, href: _href, ...domProps } =
    props as ButtonAsButton;
  return (
    <button className={classes} {...domProps}>
      {children}
    </button>
  );
}
