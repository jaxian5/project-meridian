import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { CtaBand } from "@/components/cta-band";
import { SiteShell } from "@/components/layout/site-shell";
import { Frame } from "@/components/media/frame";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { getProject, PROJECTS } from "@/lib/content";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: loaderData
          ? `${loaderData.project.name} — Skibitech LLC`
          : "Work — Skibitech LLC",
      },
      {
        name: "description",
        content: loaderData?.project.summary ?? "",
      },
    ],
  }),
  component: WorkDetail,
});

function WorkDetail() {
  const { project } = Route.useLoaderData();
  const next =
    PROJECTS[(PROJECTS.findIndex((p) => p.slug === project.slug) + 1) % PROJECTS.length];

  return (
    <SiteShell>
      <article className="mx-auto w-full max-w-wide px-6 pt-12 pb-20 md:px-10 md:pt-16 md:pb-28">
        <Link
          to="/work"
          className="inline-flex items-center gap-2 text-sm text-muted transition-colors duration-150 ease-out hover:text-ink"
        >
          <ArrowLeft className="size-4" />
          All work
        </Link>
        <Reveal>
          <p className="mt-8 text-sm font-medium tracking-wide text-muted uppercase">
            {project.sector} · {project.year}
          </p>
          <h1 className="font-display mt-3 max-w-4xl text-display text-ink">
            {project.name}
          </h1>
          <p className="mt-6 max-w-narrow text-lede text-muted">
            {project.summary}
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {project.services.map((service) => (
              <li
                key={service}
                className="rounded-full bg-surface px-3 py-1 text-xs tracking-wide text-muted"
              >
                {service}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={80} className="mt-12">
          <Frame
            src={project.image}
            alt={project.imageAlt}
            ratio="wide"
            className="rounded-xl"
          />
        </Reveal>

        <dl className="mt-10 grid grid-cols-1 gap-6 border-y border-line py-8 sm:grid-cols-3">
          {project.metrics.map((metric) => (
            <div key={metric.label}>
              <dt className="text-xs tracking-widest text-faint uppercase">
                {metric.label}
              </dt>
              <dd className="font-display mt-2 text-3xl text-ink">
                {metric.value}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-16 grid gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <p className="text-xs tracking-widest text-faint uppercase">
              The situation
            </p>
            <h2 className="font-display mt-3 text-3xl text-ink">Challenge</h2>
          </Reveal>
          <Reveal delay={80} className="md:col-span-7 md:col-start-6">
            <p className="text-base leading-relaxed text-muted">{project.challenge}</p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-12 border-t border-line pt-16 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <p className="text-xs tracking-widest text-faint uppercase">
              What we did
            </p>
            <h2 className="font-display mt-3 text-3xl text-ink">Approach</h2>
          </Reveal>
          <ol className="space-y-6 md:col-span-7 md:col-start-6">
            {project.approach.map((step, i) => (
              <Reveal key={step} delay={i * 60} className="flex gap-4">
                <span className="w-8 shrink-0 text-sm tracking-widest text-faint">
                  0{i + 1}
                </span>
                <p className="text-base leading-relaxed text-muted">{step}</p>
              </Reveal>
            ))}
          </ol>
        </div>

        <div className="mt-16 grid gap-12 border-t border-line pt-16 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <p className="text-xs tracking-widest text-faint uppercase">
              After
            </p>
            <h2 className="font-display mt-3 text-3xl text-ink">Outcome</h2>
          </Reveal>
          <Reveal delay={80} className="md:col-span-7 md:col-start-6">
            <p className="text-base leading-relaxed text-muted">{project.outcome}</p>
            <p className="mt-4 text-sm text-faint">
              Client · {project.client}
            </p>
          </Reveal>
        </div>

        {next ? (
          <Reveal className="mt-20 border-t border-line pt-12">
            <p className="text-xs tracking-widest text-faint uppercase">
              Next
            </p>
            <Link
              to="/work/$slug"
              params={{ slug: next.slug }}
              className="group mt-3 flex flex-col gap-6 md:flex-row md:items-center md:justify-between"
            >
              <div>
                <h2 className="font-display text-3xl text-ink md:text-4xl">
                  {next.name}
                </h2>
                <p className="mt-2 max-w-narrow text-sm text-muted">
                  {next.summary}
                </p>
              </div>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-ink">
                Read the case
                <ArrowUpRight className="size-4 transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </Link>
          </Reveal>
        ) : null}

        <div className="mt-12">
          <Button asChild variant="outline">
            <Link to="/contact">Start a project</Link>
          </Button>
        </div>
      </article>
      <CtaBand />
    </SiteShell>
  );
}
