import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { SiteShell } from "@/components/layout/site-shell";
import { PageIntro } from "@/components/page-intro";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ENGAGEMENTS, SITE } from "@/lib/content";
import { cn } from "@/lib/utils";

const inquirySchema = z.object({
  name: z.string().trim().min(2, "A name helps us write back."),
  email: z.string().trim().email("We need a working email."),
  company: z.string().trim().min(2, "Which company is this for?"),
  engagement: z.string().min(1, "Choose a starting point."),
  message: z
    .string()
    .trim()
    .min(24, "A few sentences about the system is enough."),
});

type Inquiry = z.infer<typeof inquirySchema>;
type FieldErrors = Partial<Record<keyof Inquiry, string>>;

const STORAGE_KEY = "skibitech-inquiry";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact — Skibitech LLC" },
      {
        name: "description",
        content:
          "Write to Skibitech LLC in Denver. We take a small number of partnerships at a time.",
      },
    ],
  }),
});

function ContactPage() {
  const [sent, setSent] = useState<Inquiry | null>(null);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    setSent(readInquiry());
  }, []);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const data = {
      name: String(form.get("name") ?? ""),
      email: String(form.get("email") ?? ""),
      company: String(form.get("company") ?? ""),
      engagement: String(form.get("engagement") ?? ""),
      message: String(form.get("message") ?? ""),
    };
    const parsed = inquirySchema.safeParse(data);
    if (!parsed.success) {
      const next: FieldErrors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0];
        if (typeof key === "string" && !next[key as keyof Inquiry]) {
          next[key as keyof Inquiry] = issue.message;
        }
      }
      setErrors(next);
      return;
    }
    setErrors({});
    setSubmitting(true);
    window.setTimeout(() => {
      writeInquiry(parsed.data);
      setSent(parsed.data);
      setSubmitting(false);
    }, 400);
  }

  return (
    <SiteShell>
      <PageIntro
        eyebrow="Contact"
        title="Write to the studio."
        lede="A letter is enough. Tell us who you are, what has to hold, and by when. We read everything. We reply within a few working days — including when the answer is no."
        meta={
          <span>
            {SITE.email}
            <br />
            {SITE.phone}
          </span>
        }
      />
      <section className="mx-auto grid w-full max-w-wide gap-12 px-6 pb-20 md:grid-cols-12 md:gap-16 md:px-10 md:pb-28">
        <div className="md:col-span-4">
          <h2 className="font-display text-2xl text-ink">Studio</h2>
          <address className="mt-4 text-sm not-italic leading-relaxed text-muted">
            {SITE.legal}
            <br />
            {SITE.address.line1}
            <br />
            {SITE.address.line2}
            <br />
            {SITE.address.city}
          </address>
          <p className="mt-6 text-sm text-muted">
            We meet in Denver when it helps. Most of the work happens where the
            operators are — yards, clinics, sheds, and the quiet rooms in
            between.
          </p>
          <p className="mt-6 text-sm text-muted">
            Prefer email directly?{" "}
            <a
              href={`mailto:${SITE.email}`}
              className="text-ink underline-offset-4 hover:underline"
            >
              {SITE.email}
            </a>
          </p>
        </div>
        <div className="md:col-span-8">
          {sent ? (
            <div className="rounded-xl bg-surface px-6 py-10 md:px-10">
              <p className="text-sm tracking-wide text-muted uppercase">
                Received
              </p>
              <h2 className="font-display mt-3 text-3xl text-ink">
                Thank you, {sent.name.split(" ")[0]}.
              </h2>
              <p className="mt-4 max-w-narrow text-base leading-relaxed text-muted">
                We have your note about {sent.company}. A partner will write to{" "}
                {sent.email} within a few working days. If the work is not a
                fit, we will say so plainly.
              </p>
              <Button
                type="button"
                variant="outline"
                className="mt-8"
                onClick={() => {
                  window.localStorage.removeItem(STORAGE_KEY);
                  setSent(null);
                }}
              >
                Send another note
              </Button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="grid gap-5" noValidate>
              <Field label="Name" htmlFor="name" error={errors.name}>
                <Input
                  id="name"
                  name="name"
                  autoComplete="name"
                  placeholder="Your name"
                />
              </Field>
              <Field label="Email" htmlFor="email" error={errors.email}>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@company.com"
                />
              </Field>
              <Field label="Company" htmlFor="company" error={errors.company}>
                <Input
                  id="company"
                  name="company"
                  autoComplete="organization"
                  placeholder="Company or organization"
                />
              </Field>
              <Field
                label="What is this about?"
                htmlFor="engagement"
                error={errors.engagement}
              >
                <select
                  id="engagement"
                  name="engagement"
                  defaultValue=""
                  className={cn(
                    "h-12 w-full rounded-md bg-cream px-4 text-base text-ink shadow-[var(--shadow-border)] outline-none transition-[box-shadow] duration-150 ease-out focus-visible:shadow-[0_0_0_2px_var(--color-pine)]",
                  )}
                >
                  <option value="" disabled>
                    Choose a starting point
                  </option>
                  {ENGAGEMENTS.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </Field>
              <Field
                label="The system"
                htmlFor="message"
                error={errors.message}
              >
                <Textarea
                  id="message"
                  name="message"
                  placeholder="What has to hold, who uses it, and by when."
                />
              </Field>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button type="submit" size="lg" disabled={submitting}>
                  {submitting ? "Sending…" : "Send to the studio"}
                </Button>
                <p className="text-xs text-faint">
                  No mailing list. Your note stays with the partners.
                </p>
              </div>
            </form>
          )}
        </div>
      </section>
    </SiteShell>
  );
}

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div className="grid gap-2">
      <Label htmlFor={htmlFor}>{label}</Label>
      {children}
      {error ? <p className="text-sm text-pine">{error}</p> : null}
    </div>
  );
}

function readInquiry(): Inquiry | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = inquirySchema.safeParse(JSON.parse(raw));
    return parsed.success ? parsed.data : null;
  } catch {
    return null;
  }
}

function writeInquiry(inquiry: Inquiry) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(inquiry));
}
