import { Link } from "@tanstack/react-router";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Frame } from "@/components/media/frame";
import { SITE, STATS } from "@/lib/content";

export function Hero() {
  return (
    <section className="mx-auto w-full max-w-wide px-6 pt-10 pb-6 md:px-10 md:pt-16">
      <p
        className="hero-stagger text-sm font-medium tracking-wide text-muted uppercase"
        style={{ animationDelay: "40ms" }}
      >
        Independent studio · Denver
      </p>
      <h1
        className="hero-stagger font-display mt-5 max-w-5xl text-display text-ink"
        style={{ animationDelay: "120ms" }}
      >
        Software,
        <br />
        held to a high line.
      </h1>
      <div className="mt-10 grid gap-10 md:grid-cols-[minmax(0,1.3fr)_minmax(0,0.9fr)] md:items-end">
        <div
          className="hero-stagger max-w-narrow"
          style={{ animationDelay: "220ms" }}
        >
          <p className="text-lede text-muted">{SITE.description}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link to="/contact">Start a project</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
              <Link to="/work">See the work</Link>
            </Button>
          </div>
        </div>
        <dl
          className="hero-stagger grid grid-cols-2 gap-x-6 gap-y-6"
          style={{ animationDelay: "320ms" }}
        >
          {STATS.map((stat) => (
            <div key={stat.label}>
              <dt className="text-xs tracking-widest text-faint uppercase">
                {stat.label}
              </dt>
              <dd className="font-display mt-1 text-3xl text-ink">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
      <div
        className="hero-stagger mt-14 overflow-hidden rounded-xl md:mt-16"
        style={{ animationDelay: "420ms" }}
      >
        <Frame
          src="/images/hero.jpg"
          alt="Timber-and-glass mountain studio at dawn, looking toward a pine ridgeline"
          ratio="wide"
        />
      </div>
      <a
        href="#work"
        className="mt-8 inline-flex items-center gap-2 text-sm text-muted transition-colors duration-150 ease-out hover:text-ink"
      >
        <ArrowDown className="size-4" />
        Selected work
      </a>
    </section>
  );
}
