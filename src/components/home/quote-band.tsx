import { Frame } from "@/components/media/frame";
import { Reveal } from "@/components/motion/reveal";

export function QuoteBand() {
  return (
    <section className="relative">
      <Frame
        src="/images/ridge.jpg"
        alt="A single clean ski track down an alpine face at first light"
        ratio="wide"
        imgClassName="brightness-75"
      />
      <div className="absolute inset-0 flex items-end bg-linear-to-t from-ink/70 via-ink/20 to-transparent">
        <Reveal className="mx-auto w-full max-w-wide px-6 py-12 md:px-10 md:py-16">
          <blockquote className="max-w-3xl">
            <p className="font-display text-3xl text-paper md:text-5xl md:leading-tight">
              The cleanest line is the one you commit to early and hold.
            </p>
            <footer className="mt-5 text-sm tracking-wide text-paper/70">
              How we name the studio — and how we take the work.
            </footer>
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
