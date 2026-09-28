import { Link } from "@tanstack/react-router";
import { Frame } from "@/components/media/frame";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";

export function StudioTeaser() {
  return (
    <section className="mx-auto grid w-full max-w-wide items-center gap-10 px-6 py-20 md:grid-cols-2 md:gap-16 md:px-10 md:py-28">
      <Reveal>
        <Frame
          src="/images/studio.jpg"
          alt="Studio table with paper models and material samples, mountain view beyond"
          ratio="photo"
          className="rounded-xl"
        />
      </Reveal>
      <Reveal delay={100}>
        <p className="text-sm font-medium tracking-wide text-muted uppercase">
          The studio
        </p>
        <h2 className="font-display mt-3 text-title text-ink">
          Eight people. One thread. Denver light.
        </h2>
        <p className="mt-5 max-w-narrow text-base leading-relaxed text-muted">
          Skibitech LLC is independently held. We left larger rooms so the people
          who discover a problem are the people who ship the system. The name is
          a ski line: commit early, hold it, and do not decorate the descent.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild variant="outline">
            <Link to="/studio">About the studio</Link>
          </Button>
          <Button asChild variant="ghost">
            <Link to="/members">Meet the members</Link>
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
