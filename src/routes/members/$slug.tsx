import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { CtaBand } from "@/components/cta-band";
import { SiteShell } from "@/components/layout/site-shell";
import { Frame } from "@/components/media/frame";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { getMember, getProject, MEMBERS } from "@/lib/content";

export const Route = createFileRoute("/members/$slug")({
  loader: ({ params }) => {
    const member = getMember(params.slug);
    if (!member) throw notFound();
    return { member };
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: loaderData
          ? `${loaderData.member.name} — Skibitech LLC`
          : "Members — Skibitech LLC",
      },
      {
        name: "description",
        content: loaderData
          ? `${loaderData.member.name}, ${loaderData.member.role}. ${loaderData.member.short}`
          : "",
      },
    ],
  }),
  component: MemberDetail,
});

function MemberDetail() {
  const { member } = Route.useLoaderData();
  const projects = member.projects.flatMap((slug) => {
    const project = getProject(slug);
    return project ? [project] : [];
  });
  const next =
    MEMBERS[(MEMBERS.findIndex((m) => m.slug === member.slug) + 1) % MEMBERS.length];

  return (
    <SiteShell>
      <article className="mx-auto w-full max-w-wide px-6 pt-12 pb-20 md:px-10 md:pt-16 md:pb-28">
        <Link
          to="/members"
          className="inline-flex items-center gap-2 text-sm text-muted transition-colors duration-150 ease-out hover:text-ink"
        >
          <ArrowLeft className="size-4" />
          All members
        </Link>

        <div className="mt-10 grid items-start gap-10 md:grid-cols-12 md:gap-12">
          <Reveal className="md:col-span-5">
            <Frame
              src={member.image}
              alt={member.imageAlt}
              ratio="portrait"
              className="rounded-xl"
            />
          </Reveal>
          <div className="md:col-span-7">
            <Reveal>
              <p className="text-sm font-medium tracking-wide text-muted uppercase">
                {member.role}
              </p>
              <h1 className="font-display mt-3 text-display text-ink">
                {member.name}
              </h1>
              <p className="mt-5 max-w-narrow text-lede text-muted">
                {member.focus}
              </p>
            </Reveal>
            <dl className="mt-8 grid grid-cols-2 gap-6 border-y border-line py-6 sm:grid-cols-3">
              <div>
                <dt className="text-xs tracking-widest text-faint uppercase">
                  Based
                </dt>
                <dd className="mt-1 text-sm text-ink">{member.location}</dd>
              </div>
              <div>
                <dt className="text-xs tracking-widest text-faint uppercase">
                  Joined
                </dt>
                <dd className="mt-1 text-sm text-ink">{member.joined}</dd>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <dt className="text-xs tracking-widest text-faint uppercase">
                  Write
                </dt>
                <dd className="mt-1">
                  <a
                    href={`mailto:${member.email}`}
                    className="text-sm text-ink underline-offset-4 hover:underline"
                  >
                    {member.email}
                  </a>
                </dd>
              </div>
            </dl>
            <ul className="mt-6 flex flex-wrap gap-2">
              {member.practices.map((practice) => (
                <li
                  key={practice}
                  className="rounded-full bg-surface px-3 py-1 text-xs tracking-wide text-muted"
                >
                  {practice}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 grid gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <p className="text-xs tracking-widest text-faint uppercase">
              About
            </p>
            <h2 className="font-display mt-3 text-3xl text-ink">The work</h2>
          </Reveal>
          <div className="space-y-5 md:col-span-7 md:col-start-6">
            {member.bio.map((paragraph) => (
              <Reveal key={paragraph.slice(0, 24)}>
                <p className="text-base leading-relaxed text-muted">
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="mt-16 border-t border-line pt-12">
          <blockquote className="max-w-3xl">
            <p className="font-display text-3xl text-ink md:text-4xl md:leading-tight">
              {member.quote}
            </p>
            <footer className="mt-5 text-sm tracking-wide text-muted">
              {member.name} · {member.role}
            </footer>
          </blockquote>
        </Reveal>

        {projects.length > 0 ? (
          <div className="mt-16 border-t border-line pt-12">
            <p className="text-xs tracking-widest text-faint uppercase">
              Selected work
            </p>
            <ul className="mt-6 divide-y divide-line border-y border-line">
              {projects.map((project) => (
                <li key={project.slug}>
                  <Link
                    to="/work/$slug"
                    params={{ slug: project.slug }}
                    className="group flex flex-col gap-2 py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
                  >
                    <span className="font-display text-2xl text-ink">
                      {project.name}
                    </span>
                    <span className="flex items-center gap-2 text-sm text-muted">
                      {project.sector} · {project.year}
                      <ArrowUpRight className="size-4 text-ink transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {next ? (
          <Reveal className="mt-16 border-t border-line pt-12">
            <p className="text-xs tracking-widest text-faint uppercase">
              Next
            </p>
            <Link
              to="/members/$slug"
              params={{ slug: next.slug }}
              className="group mt-4 grid items-center gap-6 sm:grid-cols-[8rem_minmax(0,1fr)_auto]"
            >
              <Frame
                src={next.image}
                alt={next.imageAlt}
                ratio="portrait"
                zoom
                className="max-w-32 rounded-md"
              />
              <div>
                <h2 className="font-display text-3xl text-ink">{next.name}</h2>
                <p className="mt-1 text-sm text-muted">{next.role}</p>
              </div>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-ink">
                Profile
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
