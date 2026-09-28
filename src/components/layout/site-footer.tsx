import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Logo } from "@/components/brand/logo";
import { NAV, SITE } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-ink text-paper">
      <div className="mx-auto w-full max-w-wide px-6 py-16 md:px-10 md:py-20">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="text-sm tracking-wide text-paper/55 uppercase">
              Start a conversation
            </p>
            <a
              href={`mailto:${SITE.email}`}
              className="font-display mt-3 inline-flex max-w-full flex-wrap items-center gap-3 break-all text-3xl text-paper transition-opacity duration-150 ease-out hover:opacity-70 md:text-title"
            >
              {SITE.email}
              <ArrowUpRight className="size-8 shrink-0" strokeWidth={1.4} />
            </a>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-paper/65">
            We take on a small number of partnerships at a time. If the work is
            load-bearing, write to us.
          </p>
        </div>

        <div className="mt-16 grid gap-10 border-t border-paper/12 pt-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo inverted />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-paper/60">
              Independent product engineering studio. Denver, with work wherever
              the operators are.
            </p>
          </div>
          <div>
            <p className="text-xs tracking-widest text-paper/45 uppercase">
              Studio
            </p>
            <address className="mt-3 text-sm not-italic leading-relaxed text-paper/75">
              {SITE.address.line1}
              <br />
              {SITE.address.line2}
              <br />
              {SITE.address.city}
            </address>
            <p className="mt-3 text-sm text-paper/75">{SITE.phone}</p>
          </div>
          <div>
            <p className="text-xs tracking-widest text-paper/45 uppercase">
              Navigate
            </p>
            <ul className="mt-3 space-y-2">
              {NAV.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-sm text-paper/75 transition-colors duration-150 ease-out hover:text-paper"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs tracking-widest text-paper/45 uppercase">
              Legal
            </p>
            <ul className="mt-3 space-y-2">
              <li>
                <Link
                  to="/legal"
                  className="text-sm text-paper/75 transition-colors duration-150 ease-out hover:text-paper"
                >
                  Privacy & terms
                </Link>
              </li>
              <li>
                <p className="text-sm text-paper/55">
                  © {new Date().getFullYear()} {SITE.legal}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
