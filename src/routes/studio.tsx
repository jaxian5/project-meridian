import { createFileRoute } from "@tanstack/react-router";
import { CtaBand } from "@/components/cta-band";
import { SiteShell } from "@/components/layout/site-shell";
import { Frame } from "@/components/media/frame";
import { MemberCard } from "@/components/members/member-card";
import { Reveal } from "@/components/motion/reveal";
import { PageIntro } from "@/components/page-intro";
import { Button } from "@/components/ui/button";
import { MEMBERS, PRINCIPLES, SITE, STATS } from "@/lib/content";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/studio")({
  component: StudioPage,
  head: () => ({
    meta: [
      { title: "Studio — Skibitech LLC" },
      {
        name: "description",
        content:
          "Skibitech LLC is an independently held product engineering studio in Denver. Eight people, one thread, work that has to hold.",
      },
    ],
  }),
});

function StudioPage() {
  return (
    <SiteShell>
      <PageIntro
        eyebrow="Studio"
        title="A small studio for load-bearing software."
        lede="Skibitech LLC was founded in Denver in 2019 by engineers and designers who had spent enough years in larger rooms. We wanted the people who discover a problem to be the people who ship the system — and to stay for the years after launch, when the real edge cases arrive."
        meta={
          <span>
            Independently held
            <br />
            {SITE.address.city}
          </span>
        }
      />

      <section className="mx-auto grid w-full max-w-wide gap-6 px-6 md:grid-cols-12 md:px-10">
        <Reveal className="md:col-span-8">
          <Frame
            src="/images/studio.jpg"
            alt="Studio interior with oak table, paper models, and a mountain view"
            ratio="photo"
            className="rounded-xl"
          />
        </Reveal>
        <Reveal delay={100} className="md:col-span-4">
          <Frame
            src="/images/craft.jpg"
            alt="Craft still life of maps and pine samples"
            ratio="photo"
            className="rounded-xl md:h-full md:aspect-auto"
          />
        </Reveal>
      </section>

      <section className="mx-auto w-full max-w-wide px-6 py-20 md:px-10 md:py-28">
        <Reveal>
          <p className="text-sm font-medium tracking-wide text-muted uppercase">
            The name
          </p>
          <h2 className="font-display mt-3 max-w-3xl text-title text-ink">
            Ski line, then tech. Commit early. Hold it.
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-10 md:grid-cols-2">
          <Reveal delay={60}>
            <p className="text-base leading-relaxed text-muted">
              On a mountain, the cleanest descent is not the one with the most
              turns. It is the one you choose from the ridge and then hold —
              through the ice, the wind, the moment you would rather decorate.
              We named the studio for that. Skibitech is not a ski company. It
              is a reminder about taste under load.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <p className="text-base leading-relaxed text-muted">
              We work with operators whose software has become the business:
              regional carriers, water authorities, clinics, collectives. The
              industries change. The requirement does not. The system has to
              hold, in the hands of the people who run the day.
            </p>
          </Reveal>
        </div>
        <dl className="mt-16 grid grid-cols-2 gap-8 border-t border-line pt-12 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 50}>
              <dt className="text-xs tracking-widest text-faint uppercase">
                {stat.label}
              </dt>
              <dd className="font-display mt-2 text-3xl text-ink">{stat.value}</dd>
            </Reveal>
          ))}
        </dl>
      </section>

      <section className="bg-surface">
        <div className="mx-auto w-full max-w-wide px-6 py-20 md:px-10 md:py-28">
          <Reveal>
            <p className="text-sm font-medium tracking-wide text-muted uppercase">
              How we take the work
            </p>
            <h2 className="font-display mt-3 text-title text-ink">Principles</h2>
          </Reveal>
          <ul className="mt-12 grid gap-10 md:grid-cols-2">
            {PRINCIPLES.map((item, i) => (
              <Reveal
                key={item.name}
                delay={i * 60}
                className="border-t border-line pt-6"
              >
                <h3 className="font-display text-2xl text-ink">{item.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {item.body}
                </p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto w-full max-w-wide px-6 py-20 md:px-10 md:py-28">
        <Reveal className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-medium tracking-wide text-muted uppercase">
              Members
            </p>
            <h2 className="font-display mt-3 max-w-xl text-title text-ink">
              People who can hold a brief.
            </h2>
          </div>
          <Button asChild variant="outline">
            <Link to="/members">All members</Link>
          </Button>
        </Reveal>
        <ul className="mt-12 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {MEMBERS.slice(0, 4).map((member, i) => (
            <li key={member.slug}>
              <Reveal delay={i * 60}>
                <MemberCard member={member} />
              </Reveal>
            </li>
          ))}
        </ul>
        <p className="mt-10 max-w-narrow text-base leading-relaxed text-muted">
          The studio is eight. We hire slowly: designers who write, engineers
          who sit with operators, people who can say no to a slide. We are not
          always hiring. When we are, it is on this site.
        </p>
      </section>
      <CtaBand title="A letter is enough to start." />
    </SiteShell>
  );
}
