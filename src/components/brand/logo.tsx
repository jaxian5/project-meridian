import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function Mark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      aria-hidden="true"
      className={cn("size-7 shrink-0", className)}
    >
      <path
        d="M4.5 25.5 L16 7.5 L27.5 25.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="miter"
      />
      <path
        d="M10.2 25.5 L16 15.2 L21.8 25.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M7 25.5 H25"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      />
    </svg>
  );
}

export function Logo({
  className,
  inverted = false,
}: {
  className?: string;
  inverted?: boolean;
}) {
  return (
    <Link
      to="/"
      aria-label="Skibitech home"
      className={cn(
        "flex items-center gap-2.5 transition-opacity duration-150 ease-out hover:opacity-70",
        inverted ? "text-paper" : "text-ink",
        className,
      )}
    >
      <Mark />
      <span className="font-display text-xl leading-none tracking-tight">
        Skibitech
      </span>
    </Link>
  );
}
