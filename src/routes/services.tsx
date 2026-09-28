import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaBand } from "@/components/cta-band";
import { SiteShell } from "@/components/layout/site-shell";
import { Frame } from "@/components/media/frame";
import { Reveal } from "@/components/motion/reveal";
import { PageIntro } from "@/components/page-intro";
import { Button } from "@/components/ui/button";
import { SERVICES } from "@/lib/content";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Services — Skibitech LLC" },
      {
        name: "description",
        content:
          "Product engineering, platform systems, design systems, and technical advisory from Skibitech LLC.",
      },
    ],
  }),
});

function ServicesPage() {
  return (
    <SiteShell>
      <PageIntro
        eyebrow="Services"
        title="The work we take, and the work we do not."
        lede="We are a studio, not a body shop. Four practices, one team. If the problem is a slideshow, we will tell you. If it is a system that has to hold, we will stay."
        meta={
          <span>
            Product · Platform
            <br />
            Design systems · Advisory
          </span>
        }
      />
      <section className="mx-auto w-full max-w-wide px-6 pb-8 md:px-10">
        <Reveal>
          <Frame
            src="/images/craft.jpg"
            alt="Topographic maps, brass ruler, and pine samples on an oak desk"
            ratio="wide"
            className="rounded-xl"
          />
        </Reveal>
      </section>
      <section className="mx-auto w-full max-w-wide px-6 py-16 md:px-10 md:py-24">
        <ul className="space-y-20">
          {SERVICES.map((service) => (
            <li
              key={service.id}
              id={service.id}
              className="scroll-mt-24 grid gap-8 border-t border-line pt-12 md:grid-cols-12 md:gap-10"
            >
              <Reveal className="md:col-span-4">
                <p className="text-sm tracking-widest text-faint">
                  {service.number}
                </p>
                <h2 className="font-display mt-3 text-3xl text-ink md:text-4xl">
                  {service.name}
                </h2>
              </Reveal>
              <Reveal delay={80} className="md:col-span-7 md:col-start-6">
                <p className="text-lede text-muted">{service.body}</p>
                <ul className="mt-8 space-y-3">
                  {service.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-3 border-b border-line py-3 text-sm leading-relaxed text-ink last:border-b-0"
                    >
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-pine" />
                      {point}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </li>
          ))}
        </ul>
        <Reveal className="mt-16 flex flex-wrap gap-3">
          <Button asChild>
            <Link to="/contact">Start a project</Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/work">See the work</Link>
          </Button>
        </Reveal>
      </section>
      <CtaBand title="Not sure which practice you need? Write anyway." />
    </SiteShell>
  );
}
