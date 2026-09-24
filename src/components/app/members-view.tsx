import { Panel } from "@/components/ui/panel";

type Member = {
  id: number;
  name: string;
  role: string;
  phone: string;
  email: string;
  notes: string;
  /** Initials used for the placeholder avatar */
  initials: string;
  /** Tailwind-friendly accent for the placeholder circle */
  color: string;
};

/** Placeholder members — replace with real data / photos later */
const MEMBERS: Member[] = [
  {
    id: 1,
    name: "Maria Santos",
    role: "Owner / Manager",
    phone: "+63 917 000 0001",
    email: "maria@sample-store.ph",
    notes: "Handles inventory and supplier orders.",
    initials: "MS",
    color: "bg-accent text-accent-foreground",
  },
  {
    id: 2,
    name: "Juan Dela Cruz",
    role: "Cashier",
    phone: "+63 918 000 0002",
    email: "juan@sample-store.ph",
    notes: "Morning shift · billing and utang collections.",
    initials: "JD",
    color: "bg-info text-white",
  },
  {
    id: 3,
    name: "Ana Reyes",
    role: "Stock Keeper",
    phone: "+63 919 000 0003",
    email: "ana@sample-store.ph",
    notes: "Receiving, expiry checks, and shelf restock.",
    initials: "AR",
    color: "bg-ok text-white",
  },
  {
    id: 4,
    name: "Pedro Garcia",
    role: "Helper",
    phone: "+63 920 000 0004",
    email: "pedro@sample-store.ph",
    notes: "Afternoon shift · packing and deliveries.",
    initials: "PG",
    color: "bg-warn text-ink",
  },
];

export function MembersView() {
  return (
    <div className="grid gap-5">
      <Panel
        title="Store members"
        subtitle="Team roster for this tindahan. Photos are placeholders until you add real images."
      >
        <div className="grid gap-4 px-5 pb-5 sm:grid-cols-2 xl:grid-cols-3">
          {MEMBERS.map((m) => (
            <article
              key={m.id}
              className="flex gap-4 rounded-xl border border-border bg-surface-2 p-4"
            >
              {/* Placeholder photo — swap src for a real image later */}
              <div
                className={`grid size-16 shrink-0 place-items-center rounded-full text-lg font-semibold ${m.color}`}
                aria-hidden
              >
                {m.initials}
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="truncate font-semibold tracking-tight text-fg">{m.name}</h3>
                <p className="text-sm font-medium text-accent">{m.role}</p>
                <dl className="mt-2 space-y-0.5 text-sm text-muted">
                  <div>
                    <dt className="sr-only">Phone</dt>
                    <dd>{m.phone}</dd>
                  </div>
                  <div>
                    <dt className="sr-only">Email</dt>
                    <dd className="truncate">{m.email}</dd>
                  </div>
                  {m.notes ? (
                    <div>
                      <dt className="sr-only">Notes</dt>
                      <dd className="mt-1 text-xs text-fg-subtle">{m.notes}</dd>
                    </div>
                  ) : null}
                </dl>
              </div>
            </article>
          ))}
        </div>
      </Panel>
    </div>
  );
}
