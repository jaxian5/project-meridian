import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/site-shell";
import { PageIntro } from "@/components/page-intro";
import { SITE } from "@/lib/content";

export const Route = createFileRoute("/legal")({
  component: LegalPage,
  head: () => ({
    meta: [
      { title: "Privacy & terms — Skibitech LLC" },
      {
        name: "description",
        content: "Privacy and terms for Skibitech LLC, a Denver product studio.",
      },
    ],
  }),
});

function LegalPage() {
  return (
    <SiteShell>
      <PageIntro
        eyebrow="Legal"
        title="Privacy and terms."
        lede="Short, because the studio is small. If something here is unclear, write to us."
      />
      <section className="mx-auto w-full max-w-page px-6 pb-24 md:px-10">
        <article className="max-w-narrow space-y-10 text-base leading-relaxed text-muted">
          <div>
            <h2 className="font-display text-2xl text-ink">Privacy</h2>
            <p className="mt-4">
              {SITE.legal} collects only what you send us — typically a name,
              email, company, and a description of work. We use it to reply.
              We do not sell it, share it with marketers, or put it on a list.
            </p>
            <p className="mt-4">
              This site stores a copy of a contact note in your own browser so
              you can see that it was received. You can clear it from the
              contact page. We do not run advertising pixels.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl text-ink">Terms</h2>
            <p className="mt-4">
              The work, writing, and photographs on this site belong to{" "}
              {SITE.legal} or are used with permission. Case studies describe
              real kinds of work; names of operators may be stylized. Engagements
              are governed by a written agreement, not by this page.
            </p>
            <p className="mt-4">
              Denver, Colorado. Questions:{" "}
              <a
                href={`mailto:${SITE.email}`}
                className="text-ink underline-offset-4 hover:underline"
              >
                {SITE.email}
              </a>
              .
            </p>
          </div>
        </article>
      </section>
    </SiteShell>
  );
}
