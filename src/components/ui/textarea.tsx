import * as React from "react";
import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      className={cn(
        "min-h-36 w-full rounded-lg bg-cream px-4 py-3 text-base text-ink shadow-[var(--shadow-border)] outline-none transition-[box-shadow,background-color] duration-150 ease-out placeholder:text-faint focus-visible:shadow-[0_0_0_2px_var(--color-pine)]",
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
