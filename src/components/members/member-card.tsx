import { Link } from "@tanstack/react-router";
import { Frame } from "@/components/media/frame";
import type { Member } from "@/lib/content";

export function MemberCard({ member }: { member: Member }) {
  return (
    <Link
      to="/members/$slug"
      params={{ slug: member.slug }}
      className="group block"
    >
      <Frame
        src={member.image}
        alt={member.imageAlt}
        ratio="portrait"
        zoom
        className="rounded-lg"
      />
      <p className="mt-4 font-display text-2xl text-ink">{member.name}</p>
      <p className="mt-1 text-sm text-muted">{member.role}</p>
      <p className="mt-2 text-sm leading-relaxed text-muted">{member.short}</p>
    </Link>
  );
}
