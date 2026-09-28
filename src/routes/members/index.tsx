import { createFileRoute } from "@tanstack/react-router";
import { CtaBand } from "@/components/cta-band";
import { SiteShell } from "@/components/layout/site-shell";
import { MemberCard } from "@/components/members/member-card";
import { Reveal } from "@/components/motion/reveal";
import { PageIntro } from "@/components/page-intro";
import { MEMBERS } from "@/lib/content";

export const Route = createFileRoute("/members/")({
  component: MembersIndex,
  head: () => ({
    meta: [
      { title: "Members — Skibitech LLC" },
      {
        name: "description",
        content:
          "The eight people of Skibitech LLC. Partners, designers, and engineers who discover the work and ship the system.",
      },
    ],
  }),
});

function MembersIndex() {
  return (
    <SiteShell>
      <PageIntro
        eyebrow="Members"
        title="The people who hold the line."
        lede="Eight people. One thread. The studio is small on purpose: the person who sits with an operator is the person who ships the system. Here they are, with the work they take."
        meta={
          <span>
            {MEMBERS.length} members
            <br />
            Denver, Bozeman, Santa Fe
          </span>
        }
      />
      <section className="mx-auto w-full max-w-wide px-6 pb-20 md:px-10 md:pb-28">
        <ul className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {MEMBERS.map((member, i) => (
            <li key={member.slug}>
              <Reveal delay={(i % 4) * 60}>
                <MemberCard member={member} />
              </Reveal>
            </li>
          ))}
        </ul>
      </section>
      <CtaBand title="Want to work with a specific partner? Name them." />
    </SiteShell>
  );
}
