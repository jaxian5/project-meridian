import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { SERVICES } from "@/lib/content";

export function ServicesStrip() {
  return (
    <section className="mx-auto w-full max-w-wide px-6 py-20 md:px-10 md:py-28">
      <Reveal className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-medium tracking-wide text-muted uppercase">
            What we do
          </p>
          <h2 className="font-display mt-3 max-w-xl text-title text-ink">
            Four ways to hold a line.
          </h2>
        </div>
        <Link
          to="/services"
          className="inline-flex items-center gap-1 text-sm font-medium text-ink underline-offset-4 transition-opacity duration-150 ease-out hover:opacity-70"
        >
          All services
          <ArrowUpRight className="size-4" />
        </Link>
      </Reveal>
      <ul className="mt-12 divide-y divide-line border-y border-line">
        {SERVICES.map((service, i) => (
          <li key={service.id}>
            <Reveal delay={i * 60}>
              <Link
                to="/services"
                hash={service.id}
                className="group grid gap-3 py-8 md:grid-cols-[5rem_minmax(0,0.9fr)_minmax(0,1.3fr)_auto] md:items-baseline md:gap-8"
              >
                <span className="text-sm tracking-widest text-faint">
                  {service.number}
                </span>
                <h3 className="font-display text-2xl text-ink md:text-3xl">
                  {service.name}
                </h3>
                <p className="text-sm leading-relaxed text-muted md:text-base">
                  {service.short}
                </p>
                <ArrowUpRight
                  className="hidden size-5 text-ink transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 md:block"
                  strokeWidth={1.5}
                />
              </Link>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}
