import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";

export function CtaBand({
  eyebrow = "Work with us",
  title = "If the system is load-bearing, write to us.",
  body = "We take a small number of partnerships at a time. Tell us what has to hold, and we will tell you honestly whether we are the studio for it.",
}: {
  eyebrow?: string;
  title?: string;
  body?: string;
}) {
  return (
    <section className="bg-pine text-paper">
      <div className="mx-auto flex w-full max-w-wide flex-col gap-8 px-6 py-20 md:flex-row md:items-end md:justify-between md:px-10 md:py-24">
        <Reveal className="max-w-2xl">
          <p className="text-sm tracking-wide text-paper/60 uppercase">
            {eyebrow}
          </p>
          <h2 className="font-display mt-4 text-title text-paper">{title}</h2>
          <p className="mt-5 max-w-narrow text-base leading-relaxed text-paper/75">
            {body}
          </p>
        </Reveal>
        <Reveal delay={120}>
          <Button asChild variant="invert" size="lg">
            <Link to="/contact">Start a project</Link>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
