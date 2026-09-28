import type { ReactNode } from "react";
import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

export function PageIntro({
  eyebrow,
  title,
  lede,
  meta,
  className,
}: {
  eyebrow: string;
  title: string;
  lede?: ReactNode;
  meta?: ReactNode;
  className?: string;
}) {
  return (
    <section
      className={cn(
        "mx-auto w-full max-w-wide px-6 pt-16 pb-12 md:px-10 md:pt-24 md:pb-16",
        className,
      )}
    >
      <Reveal>
        <p className="text-sm font-medium tracking-wide text-muted uppercase">
          {eyebrow}
        </p>
        <h1 className="font-display mt-4 max-w-4xl text-display text-ink">
          {title}
        </h1>
      </Reveal>
      {(lede || meta) && (
        <div className="mt-8 grid gap-8 md:grid-cols-[minmax(0,1.4fr)_minmax(0,0.8fr)] md:items-end">
          {lede ? (
            <Reveal delay={80}>
              <div className="max-w-narrow text-lede text-muted">{lede}</div>
            </Reveal>
          ) : (
            <div />
          )}
          {meta ? (
            <Reveal delay={140} className="text-sm text-muted md:text-right">
              {meta}
            </Reveal>
          ) : null}
        </div>
      )}
    </section>
  );
}
