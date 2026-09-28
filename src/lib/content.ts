export const SITE = {
  name: "Skibitech",
  legal: "Skibitech LLC",
  tagline: "Software, held to a high line.",
  description:
    "Skibitech is an independent product engineering studio. We design, build, and steward the systems companies actually run.",
  email: "hello@skibitech.com",
  phone: "+1 (303) 555-0140",
  founded: 2019,
  address: {
    line1: "1401 Wynkoop Street",
    line2: "Suite 400",
    city: "Denver, CO 80202",
  },
} as const;

export const NAV = [
  { to: "/work", label: "Work" },
  { to: "/services", label: "Services" },
  { to: "/studio", label: "Studio" },
  { to: "/members", label: "Members" },
  { to: "/contact", label: "Contact" },
] as const;

export const STATS = [
  { value: "2019", label: "Founded in Denver" },
  { value: "8", label: "Studio members" },
  { value: "40+", label: "Products shipped" },
  { value: "6 yr", label: "Average partnership" },
] as const;

export const CAPABILITIES = [
  "Product engineering",
  "Internal platforms",
  "Design systems",
  "Data products",
  "Operator tools",
  "Technical advisory",
  "Systems integration",
  "Long-run stewardship",
] as const;

export type Service = {
  id: string;
  number: string;
  name: string;
  short: string;
  body: string;
  points: string[];
};

export const SERVICES: Service[] = [
  {
    id: "product",
    number: "01",
    name: "Product engineering",
    short: "From first sketch to a product your operators will actually use.",
    body: "We design and engineer customer-facing products with the same care we give internal systems. Discovery is short. Prototypes are real. The team that shapes the work is the team that ships it.",
    points: [
      "New product 0→1 with a working slice in weeks, not quarters",
      "Rebuilds of software that has become load-bearing and brittle",
      "Design, frontend, backend, and data in one studio — no handoff theater",
      "Instrumentation so you can see how the product is actually used",
    ],
  },
  {
    id: "platform",
    number: "02",
    name: "Platform systems",
    short: "The operational software your business quietly depends on.",
    body: "Most of the software that matters never ships to an app store. Dispatch boards, allocation engines, clinician workflows, finance ops — we build the platforms that keep a company moving, and we stay long enough to make them hold.",
    points: [
      "Operations consoles that replace spreadsheet constellations",
      "Domain data models that match how the work is actually done",
      "Integrations with the systems you already run, not a rip-and-replace",
      "Access, audit, and reliability treated as product features",
    ],
  },
  {
    id: "systems",
    number: "03",
    name: "Design systems",
    short: "A visual and component language that can survive more than one team.",
    body: "We turn a company's judgment — how it should look, feel, and behave — into a system engineers can actually build with. Tokens, components, content patterns, and the documentation that keeps them honest.",
    points: [
      "Token architecture mapped to how your products are really themed",
      "Component libraries in the stack you ship, not a parallel universe",
      "Motion, type, and density rules written down and demonstrated",
      "Adoption support so the system is used, not admired",
    ],
  },
  {
    id: "advisory",
    number: "04",
    name: "Technical advisory",
    short: "A second seat at the table when the system is the business.",
    body: "Before a rebuild, a hire, or a vendor decision, we help operators see the shape of the problem. Architecture reviews, build-vs-buy, diligence, and the unglamorous work of sequencing a year of engineering.",
    points: [
      "Architecture and reliability reviews with written recommendations",
      "Diligence for acquisitions where software is the asset",
      "Team shape, hiring, and operating cadence for product orgs",
      "Vendor and platform selection without the brochure tour",
    ],
  },
];

export type Project = {
  slug: string;
  name: string;
  client: string;
  sector: string;
  year: string;
  summary: string;
  image: string;
  imageAlt: string;
  services: string[];
  challenge: string;
  approach: string[];
  outcome: string;
  metrics: { value: string; label: string }[];
};

export const PROJECTS: Project[] = [
  {
    slug: "northline",
    name: "Northline",
    client: "Northline Freight",
    sector: "Logistics",
    year: "2024",
    summary:
      "A live operations board for a regional carrier — dispatch, yard, and billing in one place, instead of radio, whiteboards, and three spreadsheets.",
    image: "/images/work-northline.jpg",
    imageAlt:
      "Freight terminal at dusk, orderly loading bays under mixed industrial light",
    services: ["Platform systems", "Product engineering"],
    challenge:
      "Northline ran 180 trucks across four yards with a dispatch process that lived in radio traffic, a whiteboard, and a constellation of spreadsheets. Empty miles were climbing. Billing lagged the work by days. Nobody had a single picture of the network.",
    approach: [
      "We spent two weeks on the floor — ride-alongs, yard walks, end-of-shift debriefs — before drawing a screen.",
      "The first slice was a live board: every load, truck, and door, updated from the systems they already had.",
      "Dispatchers kept radio as a fallback. The board had to earn the right to replace it.",
      "Yard, billing, and exception handling came next, on the same model, so the company stopped reconciling three versions of the truth.",
    ],
    outcome:
      "Northline now runs the day from one board. Empty miles dropped in the first year. Invoices leave the same day as delivery. The operations lead still uses a radio — for the exceptions the board has already flagged.",
    metrics: [
      { value: "34%", label: "Fewer empty miles, year one" },
      { value: "Same day", label: "Invoice out after delivery" },
      { value: "4 yards", label: "On a single live board" },
    ],
  },
  {
    slug: "halcyon",
    name: "Halcyon",
    client: "Halcyon Water Authority",
    sector: "Climate & water",
    year: "2023",
    summary:
      "Field intelligence for a Western watershed — sensors, forecasts, and operator notes without a forty-tab spreadsheet.",
    image: "/images/work-halcyon.jpg",
    imageAlt:
      "Remote alpine monitoring station with timber shelter and instruments against snow-lined peaks",
    services: ["Product engineering", "Platform systems"],
    challenge:
      "A Western water authority was making allocation calls from a patchwork of telemetry vendors, emailed CSVs, and institutional memory. During a dry year, that was not a system. It was a risk.",
    approach: [
      "We modeled the watershed the way operators already talked about it — reaches, gauges, ditches — not as a generic IoT dashboard.",
      "Telemetry from three vendors landed in one store, with the gaps made visible instead of interpolated away.",
      "Forecasts sat beside field notes, so a number always had a person attached to it.",
      "Alerts were written as decisions, not thresholds: who needs to know, by when, and what they can actually do.",
    ],
    outcome:
      "Operators open one console before they open email. Allocation meetings start from a shared picture. The dry-year playbook is now a product, not a binder.",
    metrics: [
      { value: "3 vendors", label: "Telemetry in one store" },
      { value: "Hours", label: "Not days, to see a gap" },
      { value: "1 console", label: "For field and office" },
    ],
  },
  {
    slug: "meridian",
    name: "Meridian",
    client: "Meridian Specialty Clinic",
    sector: "Health",
    year: "2024",
    summary:
      "Intake rebuilt around the room, not the clipboard — a clinician workflow that cut the first visit down to the conversation that matters.",
    image: "/images/work-meridian.jpg",
    imageAlt:
      "Quiet contemporary clinic interior with pale oak millwork and morning light",
    services: ["Product engineering", "Design systems"],
    challenge:
      "A specialty clinic's first visit took twenty-two minutes of clipboard before anyone sat down. Patients arrived prepared and left exhausted. Clinicians re-typed what had already been written. The EHR was not going to save them.",
    approach: [
      "We mapped the first visit as a conversation, then designed the software to stay out of it until it was needed.",
      "Pre-visit collection happened on the patient's phone, in their words, with only the questions the clinic actually used.",
      "In the room, the clinician saw a one-screen brief — not a chart dump — and could write in the same language they speak.",
      "The EHR received a clean note. The clinic kept the relationship.",
    ],
    outcome:
      "First visits start on time. Clinicians stopped staying late to type. Patients notice that someone has read what they sent. The clinic asked us to stay for the follow-up visit next.",
    metrics: [
      { value: "22 → 6 min", label: "Intake before the room" },
      { value: "1 screen", label: "Clinician brief" },
      { value: "Kept", label: "The EHR. Replaced the ritual." },
    ],
  },
  {
    slug: "vesper",
    name: "Vesper",
    client: "Vesper Provisions",
    sector: "Specialty commerce",
    year: "2025",
    summary:
      "Wholesale commerce for a mountain-region food collective — allocation, orders, and fulfillment that match how independent producers actually work.",
    image: "/images/work-vesper.jpg",
    imageAlt:
      "Specialty foods warehouse in a brick building with wooden crates and warm tungsten light",
    services: ["Platform systems", "Product engineering"],
    challenge:
      "Vesper represents forty independent producers. Demand always exceeded a given week's supply, and allocation happened in a shared inbox. Restaurants they cared about were getting the leftovers. Producers they cared about were guessing.",
    approach: [
      "We treated allocation as the product, not checkout. Who gets what, and why, is the whole business.",
      "Producers declare what they have in the language they already use — cases, cuts, lots — not SKUs invented for a catalog.",
      "Buyers see what they can actually get this week, with a memory of what they have been loyal to.",
      "Fulfillment and invoicing follow the allocation. Nothing is sold that was not first decided.",
    ],
    outcome:
      "Tuesday allocation is a forty-minute meeting instead of a two-day scramble. Producers plan harvest against real demand. The restaurants that stuck with Vesper in the thin years are first in line, by design.",
    metrics: [
      { value: "40 producers", label: "On one allocation" },
      { value: "Tue 40 min", label: "The weekly decision" },
      { value: "0 oversell", label: "Sold only what was decided" },
    ],
  },
];

export const APPROACH = [
  {
    number: "01",
    name: "Discover",
    body: "We go to where the work happens. Floors, yards, clinics, sheds. Two weeks of attention before a single screen. The brief is written from what we saw, not what was requested.",
  },
  {
    number: "02",
    name: "Shape",
    body: "A working slice, not a deck. We name the smallest thing that would change the week, design it in the stack we will ship, and put it in front of the people who will use it.",
  },
  {
    number: "03",
    name: "Build",
    body: "The team that shaped the work builds it. Design, engineering, and the operator stay in one thread. Releases are small, observable, and reversible.",
  },
  {
    number: "04",
    name: "Steward",
    body: "We do not disappear at launch. The useful life of a system is the years after it ships. We stay on for the season when the real edge cases arrive.",
  },
] as const;

export const PRINCIPLES = [
  {
    name: "Go to the work",
    body: "If we have not stood where the software will be used, we are not ready to draw it.",
  },
  {
    name: "One team, one thread",
    body: "The people who discover the problem are the people who ship the system. Handoffs are where judgment dies.",
  },
  {
    name: "Fewer accounts",
    body: "We take on a small number of partnerships at a time. Depth is the product. A crowded roster is a different business.",
  },
  {
    name: "Hold the line",
    body: "The cleanest line down a mountain is the one you commit to early and hold. Scope, architecture, and taste work the same way.",
  },
] as const;

export const ENGAGEMENTS = [
  "Product 0→1",
  "Platform rebuild",
  "Design system",
  "Advisory / diligence",
  "Not sure yet",
] as const;

export type Member = {
  slug: string;
  name: string;
  role: string;
  focus: string;
  location: string;
  joined: string;
  email: string;
  image: string;
  imageAlt: string;
  short: string;
  bio: string[];
  quote: string;
  practices: string[];
  projects: string[];
};

export const MEMBERS: Member[] = [
  {
    slug: "elena-voss",
    name: "Elena Voss",
    role: "Partner, Product",
    focus: "The shape of the work before a screen exists",
    location: "Denver",
    joined: "2019",
    email: "elena@skibitech.com",
    image: "/images/member-elena.jpg",
    imageAlt: "Portrait of Elena Voss in a cream knit sweater, mountain daylight behind her",
    short:
      "Holds the brief. Writes the first sentence of a product so the team can hold it too.",
    bio: [
      "Elena founded Skibitech with Marcus after a decade in larger product rooms, where the people who discovered a problem were rarely the people who shipped the system. She still starts every engagement on the floor — a clinic, a yard, a shed — and refuses to draw until she can describe the week in the operator's language.",
      "She led the Meridian intake rebuild and stays close to any work where the software sits between two people who already know each other. Taste, for her, is what you cut.",
    ],
    quote: "If we have not stood where the software will be used, we are not ready to draw it.",
    practices: ["Product engineering", "Discovery"],
    projects: ["meridian", "vesper"],
  },
  {
    slug: "marcus-hale",
    name: "Marcus Hale",
    role: "Partner, Engineering",
    focus: "Systems that stay up when the day gets loud",
    location: "Denver",
    joined: "2019",
    email: "marcus@skibitech.com",
    image: "/images/member-marcus.jpg",
    imageAlt: "Portrait of Marcus Hale in a charcoal sweater, seated in a timber studio",
    short:
      "Builds the load-bearing parts. Treats reliability as a product feature, not a later pass.",
    bio: [
      "Marcus spent years owning platforms that other teams were allowed to forget. At Skibitech he still writes the first slice himself. Dispatch boards, allocation engines, the unglamorous stores that have to be true — that is his desk.",
      "Northline's live board is his. He will not ship a system he would not run at 4 a.m. He is also the partner who says no when a rebuild is really a staffing problem.",
    ],
    quote: "The useful life of a system is the years after it ships.",
    practices: ["Platform systems", "Reliability"],
    projects: ["northline", "halcyon"],
  },
  {
    slug: "priya-nair",
    name: "Priya Nair",
    role: "Design systems",
    focus: "A visual language that can survive more than one team",
    location: "Denver",
    joined: "2020",
    email: "priya@skibitech.com",
    image: "/images/member-priya.jpg",
    imageAlt: "Portrait of Priya Nair in an ochre sweater against a plaster wall",
    short:
      "Turns a company's judgment into tokens, type, and components engineers will actually use.",
    bio: [
      "Priya came from a brand studio that kept handing engineers a PDF. She joined Skibitech to put the system in the stack that ships. Tokens, density, motion, the unremarkable decisions that keep a product from looking like three products.",
      "On Meridian she designed the one-screen clinician brief. She writes as precisely as she draws, and she will sit with a dispatch lead until the type size is honest about the room it will be read in.",
    ],
    quote: "A design system is not a library. It is an argument you can keep making.",
    practices: ["Design systems", "Product design"],
    projects: ["meridian", "vesper"],
  },
  {
    slug: "jonah-peck",
    name: "Jonah Peck",
    role: "Platforms",
    focus: "Integrations, yards, and the ugly middle",
    location: "Bozeman",
    joined: "2021",
    email: "jonah@skibitech.com",
    image: "/images/member-jonah.jpg",
    imageAlt: "Portrait of Jonah Peck with a short beard, mountain light in the windows behind him",
    short:
      "Lives in the connective tissue — telemetry, billing, the systems you already run.",
    bio: [
      "Jonah grew up around shops that kept three versions of the truth. He is impatient with greenfield fantasies. Most of his work is making two systems agree without pretending one of them will be replaced this year.",
      "He wired Northline's yards onto one board and pulled Halcyon's three telemetry vendors into a store that shows the gaps instead of interpolating them away. He still prefers a ride-along to a workshop.",
    ],
    quote: "The integration is the product. The rest is furniture.",
    practices: ["Platform systems", "Integration"],
    projects: ["northline", "halcyon"],
  },
  {
    slug: "amara-solis",
    name: "Amara Solis",
    role: "Discovery",
    focus: "What the week actually looks like",
    location: "Santa Fe",
    joined: "2021",
    email: "amara@skibitech.com",
    image: "/images/member-amara.jpg",
    imageAlt: "Portrait of Amara Solis in a linen shirt, pine visible through a window",
    short:
      "Two weeks on the floor before a screen. The brief is written from what she saw.",
    bio: [
      "Amara is the reason Skibitech's discovery is short and specific. She records how work actually happens — radio traffic, clipboard rituals, the note someone keeps in a book they will not give up — and she will not let a deck overwrite it.",
      "Halcyon's watershed model is hers: reaches, gauges, ditches, the language operators already used. She still sends the first draft of a brief as a letter, not a slide.",
    ],
    quote: "The brief is a field note. If it could have been written from the airport, it is wrong.",
    practices: ["Discovery", "Research"],
    projects: ["halcyon", "meridian"],
  },
  {
    slug: "theo-brandt",
    name: "Theo Brandt",
    role: "Interface engineering",
    focus: "The screen the operator actually touches",
    location: "Denver",
    joined: "2022",
    email: "theo@skibitech.com",
    image: "/images/member-theo.jpg",
    imageAlt: "Portrait of Theo Brandt in glasses and a navy sweater against pale oak",
    short:
      "Builds the boards, briefs, and tools people keep open all day. Fast, quiet, undoable.",
    bio: [
      "Theo cares about the hour between 6 and 7 a.m., when a console has to feel like a physical object. He writes the frontend for the systems Marcus and Jonah make true, and he treats keyboard, density, and empty states as load-bearing.",
      "On Vesper he built the allocation view restaurants actually use on Tuesdays. He will argue for one less animation and one more undo.",
    ],
    quote: "If they keep a spreadsheet open beside our product, we are not done.",
    practices: ["Product engineering", "Interface"],
    projects: ["vesper", "northline"],
  },
  {
    slug: "linh-okada",
    name: "Linh Okada",
    role: "Data",
    focus: "Models that match how the work is named",
    location: "Denver",
    joined: "2022",
    email: "linh@skibitech.com",
    image: "/images/member-linh.jpg",
    imageAlt: "Portrait of Linh Okada in a sage blazer, north light on a studio wall",
    short:
      "Names the objects correctly — loads, lots, reaches, visits — so the rest of the system can be simple.",
    bio: [
      "Linh came from a data team that spent its life cleaning names other people had invented. At Skibitech she sits in discovery with Amara and writes the model before the interface. If the objects are honest, the screens get smaller.",
      "She designed Halcyon's store so a missing gauge is a fact, not a guess, and Vesper's lots so a case is still a case. She is allergic to generic 'assets.'",
    ],
    quote: "Wrong nouns make every screen a translation.",
    practices: ["Data", "Platform systems"],
    projects: ["halcyon", "vesper"],
  },
  {
    slug: "samira-cole",
    name: "Samira Cole",
    role: "Advisory",
    focus: "When the system is the business",
    location: "Denver",
    joined: "2023",
    email: "samira@skibitech.com",
    image: "/images/member-samira.jpg",
    imageAlt: "Portrait of Samira Cole in a cream turtleneck against a deep green wall",
    short:
      "The second seat at the table before a rebuild, a hire, or a vendor decision.",
    bio: [
      "Samira spent a career in operating roles where software was the company and nobody wanted to admit it. She joined the studio to do the unglamorous work of sequencing a year of engineering: what to rebuild, what to buy, what to leave alone.",
      "She leads diligence and architecture reviews. Operators hire her when the board wants a slide and the floor wants a decision. She writes recommendations they can act on without a second consultant.",
    ],
    quote: "Most rebuilds are a sequencing problem wearing a technology costume.",
    practices: ["Advisory", "Diligence"],
    projects: ["northline"],
  },
];

export function getProject(slug: string) {
  return PROJECTS.find((project) => project.slug === slug);
}

export function getMember(slug: string) {
  return MEMBERS.find((member) => member.slug === slug);
}
