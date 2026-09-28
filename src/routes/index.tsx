import { createFileRoute } from "@tanstack/react-router";
import { Approach } from "@/components/home/approach";
import { Hero } from "@/components/home/hero";
import { CapabilityMarquee } from "@/components/home/marquee";
import { QuoteBand } from "@/components/home/quote-band";
import { SelectedWork } from "@/components/home/selected-work";
import { ServicesStrip } from "@/components/home/services-strip";
import { MembersTeaser } from "@/components/home/members-teaser";
import { StudioTeaser } from "@/components/home/studio-teaser";
import { CtaBand } from "@/components/cta-band";
import { SiteShell } from "@/components/layout/site-shell";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Skibitech LLC — Product engineering studio" },
      {
        name: "description",
        content:
          "Independent product engineering studio in Denver. We design, build, and steward software that companies actually run.",
      },
    ],
  }),
});

function Home() {
  return (
    <SiteShell>
      <Hero />
      <CapabilityMarquee />
      <SelectedWork />
      <QuoteBand />
      <ServicesStrip />
      <Approach />
      <MembersTeaser />
      <StudioTeaser />
      <CtaBand />
    </SiteShell>
  );
}
