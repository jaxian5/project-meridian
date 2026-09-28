import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { MemberCard } from "@/components/members/member-card";
import { Reveal } from "@/components/motion/reveal";
import { MEMBERS } from "@/lib/content";

export function MembersTeaser() {
  const featured = MEMBERS.slice(0, 4);

  return (
    <section className="mx-auto w-full max-w-wide px-6 py-20 md:px-10 md:py-28">
      <Reveal className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-medium tracking-wide text-muted uppercase">
            Members
          </p>
          <h2 className="font-display mt-3 max-w-xl text-title text-ink">
            Eight people. One thread.
          </h2>
        </div>
        <Link
          to="/members"
          className="inline-flex items-center gap-1 text-sm font-medium text-ink underline-offset-4 transition-opacity duration-150 ease-out hover:opacity-70"
        >
          All members
          <ArrowUpRight className="size-4" />
        </Link>
      </Reveal>
      <ul className="mt-12 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
        {featured.map((member, i) => (
          <li key={member.slug}>
            <Reveal delay={i * 70}>
              <MemberCard member={member} />
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}
