import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { CtaBand } from "@/components/cta-band";
import { SiteShell } from "@/components/layout/site-shell";
import { Frame } from "@/components/media/frame";
import { Reveal } from "@/components/motion/reveal";
import { PageIntro } from "@/components/page-intro";
import { PROJECTS } from "@/lib/content";

export const Route = createFileRoute("/work/")({
  component: WorkIndex,
  head: () => ({
    meta: [
      { title: "Work — Skibitech LLC" },
      {
        name: "description",
        content:
          "Selected work from Skibitech: logistics, water, health, and specialty commerce systems built for operators.",
      },
    ],
  }),
});

function WorkIndex() {
  return (
    <SiteShell>
      <PageIntro
        eyebrow="Work"
        title="A small number of systems, taken seriously."
        lede="We publish a handful of partnerships. The rest stay with the operators who run them. What follows is representative — logistics, water, health, and the commerce of independent producers."
        meta={
          <span>
            {PROJECTS.length} featured engagements
            <br />
            2019 — present
          </span>
        }
      />
      <section className="mx-auto w-full max-w-wide px-6 pb-20 md:px-10 md:pb-28">
        <ul className="grid gap-12 md:gap-16">
          {PROJECTS.map((project, i) => (
            <li key={project.slug}>
              <Reveal delay={i * 40}>
                <Link
                  to="/work/$slug"
                  params={{ slug: project.slug }}
                  className="group grid items-center gap-6 md:grid-cols-12 md:gap-10"
                >
                  <Frame
                    src={project.image}
                    alt={project.imageAlt}
                    ratio="wide"
                    zoom
                    className="rounded-xl md:col-span-7"
                  />
                  <div className="md:col-span-5">
                    <p className="text-xs tracking-widest text-faint uppercase">
                      {project.sector} · {project.year}
                    </p>
                    <h2 className="font-display mt-2 text-3xl text-ink md:text-4xl">
                      {project.name}
                    </h2>
                    <p className="mt-3 text-base leading-relaxed text-muted">
                      {project.summary}
                    </p>
                    <p className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-ink">
                      Read the case
                      <ArrowUpRight className="size-4 transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </p>
                  </div>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </section>
      <CtaBand title="Have a system that needs the same attention?" />
    </SiteShell>
  );
}
