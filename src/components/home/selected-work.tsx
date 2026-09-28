import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Frame } from "@/components/media/frame";
import { Reveal } from "@/components/motion/reveal";
import { PROJECTS } from "@/lib/content";
import { cn } from "@/lib/utils";

export function SelectedWork() {
  const [featured, ...rest] = PROJECTS;

  return (
    <section id="work" className="mx-auto w-full max-w-wide px-6 py-20 md:px-10 md:py-28">
      <Reveal className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-medium tracking-wide text-muted uppercase">
            Selected work
          </p>
          <h2 className="font-display mt-3 text-title text-ink">
            Systems that had to hold.
          </h2>
        </div>
        <Link
          to="/work"
          className="inline-flex items-center gap-1 text-sm font-medium text-ink underline-offset-4 transition-opacity duration-150 ease-out hover:opacity-70"
        >
          All work
          <ArrowUpRight className="size-4" />
        </Link>
      </Reveal>

      {featured ? (
        <Reveal delay={80} className="mt-12">
          <ProjectCard project={featured} featured />
        </Reveal>
      ) : null}

      <div className="mt-8 grid gap-8 md:grid-cols-2 md:gap-6">
        {rest.map((project, i) => (
          <Reveal key={project.slug} delay={i * 80}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  featured = false,
}: {
  project: (typeof PROJECTS)[number];
  featured?: boolean;
}) {
  return (
    <Link
      to="/work/$slug"
      params={{ slug: project.slug }}
      className="group block"
    >
      <Frame
        src={project.image}
        alt={project.imageAlt}
        ratio="wide"
        zoom
        className={cn("rounded-xl", !featured && "rounded-lg")}
      />
      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <p className="text-xs tracking-widest text-faint uppercase">
            {project.sector} · {project.year}
          </p>
          <h3 className="font-display mt-1 text-2xl text-ink md:text-3xl">
            {project.name}
          </h3>
          <p className="mt-2 max-w-narrow text-sm leading-relaxed text-muted">
            {project.summary}
          </p>
        </div>
        <ArrowUpRight
          className="mt-1 size-5 shrink-0 text-ink transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          strokeWidth={1.5}
        />
      </div>
    </Link>
  );
}
