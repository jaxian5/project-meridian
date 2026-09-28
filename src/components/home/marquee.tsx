import { CAPABILITIES } from "@/lib/content";

export function CapabilityMarquee() {
  const items = [...CAPABILITIES, ...CAPABILITIES];
  return (
    <section
      aria-label="Capabilities"
      className="w-full overflow-hidden border-y border-line py-5"
    >
      <div className="marquee-track flex w-max gap-10 pr-10">
        {items.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-10 text-sm tracking-wide text-muted uppercase"
          >
            {item}
            <span className="size-1.5 rounded-full bg-pine" aria-hidden />
          </span>
        ))}
      </div>
    </section>
  );
}
