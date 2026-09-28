import { Reveal } from "@/components/motion/reveal";
import { APPROACH } from "@/lib/content";

export function Approach() {
  return (
    <section className="bg-surface">
      <div className="mx-auto w-full max-w-wide px-6 py-20 md:px-10 md:py-28">
        <Reveal>
          <p className="text-sm font-medium tracking-wide text-muted uppercase">
            How we work
          </p>
          <h2 className="font-display mt-3 max-w-2xl text-title text-ink">
            Short discovery. A working slice. Then the years that matter.
          </h2>
        </Reveal>
        <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {APPROACH.map((step, i) => (
            <Reveal key={step.number} delay={i * 80} className="relative">
              <span className="text-sm tracking-widest text-faint">
                {step.number}
              </span>
              <h3 className="font-display mt-3 text-2xl text-ink">{step.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {step.body}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
