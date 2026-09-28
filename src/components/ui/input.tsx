import * as React from "react";
import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      className={cn(
        "h-12 w-full rounded-md bg-cream px-4 text-base text-ink shadow-[var(--shadow-border)] outline-none transition-[box-shadow,background-color] duration-150 ease-out placeholder:text-faint focus-visible:shadow-[0_0_0_2px_var(--color-pine)]",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
