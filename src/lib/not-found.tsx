import { Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/site-shell";
import { Button } from "@/components/ui/button";

export function NotFound() {
  return (
    <SiteShell>
      <section className="mx-auto flex min-h-[70vh] w-full max-w-page flex-col justify-center px-6 py-24 md:px-10">
        <p className="text-sm font-medium tracking-wide text-muted uppercase">
          404
        </p>
        <h1 className="font-display mt-4 max-w-xl text-title text-ink">
          That path is not on the map.
        </h1>
        <p className="mt-5 max-w-narrow text-lede text-muted">
          The page you asked for is not here. The work, the studio, and a way to
          reach us still are.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Button asChild>
            <Link to="/">Back to the studio</Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/work">See the work</Link>
          </Button>
        </div>
      </section>
    </SiteShell>
  );
}
