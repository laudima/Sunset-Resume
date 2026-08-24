export type Project = {
  slug: string;
  title: string;
  category: string;
  year: string;
  description: string;
  tags: string[];
  link: string;
};

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  tags: string[];
};

export type CvEntry = {
  period: string;
  role: string;
  org: string;
  location: string;
  description: string;
  stack: string[];
};

export type SkillGroup = {
  area: string;
  items: string[];
};

export const projects: Project[] = [
  {
    slug: "aurora-analytics",
    title: "Aurora Analytics",
    category: "Data Platform",
    year: "2025",
    description:
      "Real-time analytics dashboard processing 2M+ events/day. Built a streaming ingestion layer and a composable visualization toolkit used by 40+ internal teams.",
    tags: ["React", "TypeScript", "ClickHouse", "WebSockets"],
    link: "#",
  },
  {
    slug: "lumen-design-system",
    title: "Lumen Design System",
    category: "Design Systems",
    year: "2024",
    description:
      "A cross-product component library and token pipeline. Reduced UI defects by 38% and cut feature shipping time from weeks to days across five product lines.",
    tags: ["React", "Storybook", "Style Dictionary", "Figma"],
    link: "#",
  },
  {
    slug: "tidepay",
    title: "Tidepay",
    category: "Fintech",
    year: "2024",
    description:
      "Mobile-first payments app with offline-first sync. Led the architecture and the reconciliation engine handling edge-case double-spends gracefully.",
    tags: ["React Native", "SQLite", "Node", "Stripe"],
    link: "#",
  },
  {
    slug: "field-notes",
    title: "Field Notes",
    category: "Productivity",
    year: "2023",
    description:
      "A local-first notes app with bidirectional links and a graph view. Sync engine built on CRDTs for conflict-free collaboration across devices.",
    tags: ["Tauri", "Yjs", "Rust", "TypeScript"],
    link: "#",
  },
  {
    slug: "mesa-maps",
    title: "Mesa Maps",
    category: "Geospatial",
    year: "2023",
    description:
      "Interactive vector-tile mapping toolkit for urban planners. Custom styling language and a render budget that keeps 60fps on mid-range phones.",
    tags: ["WebGL", "MapLibre", "PostGIS", "WASM"],
    link: "#",
  },
  {
    slug: "greenhouse",
    title: "Greenhouse",
    category: "Open Source",
    year: "2022",
    description:
      "A self-hostable CI runner with reproducible builds. 1.2k GitHub stars and counting, used by indie teams who left managed CI over pricing.",
    tags: ["Go", "Nix", "Docker", "Linux"],
    link: "#",
  },
];

export const posts: Post[] = [
  {
    slug: "designing-with-restraint",
    title: "Designing with restraint",
    excerpt:
      "The hardest part of a portfolio isn't deciding what to add — it's knowing what to leave out. A field guide to subtraction.",
    date: "2025-08-12",
    readingTime: "6 min",
    tags: ["Design", "Craft"],
  },
  {
    slug: "local-first-is-finally-good",
    title: "Local-first is finally good",
    excerpt:
      "After years of promises, CRDTs and sync engines crossed the usability line. Here's how I shipped a conflict-free notes app.",
    date: "2025-06-03",
    readingTime: "11 min",
    tags: ["Engineering", "CRDTs"],
  },
  {
    slug: "the-cost-of-a-button",
    title: "The cost of a button",
    excerpt:
      "One CTA in a checkout flow touched eleven teams and three outage postmortems. A meditation on coupling at the seams.",
    date: "2025-04-19",
    readingTime: "8 min",
    tags: ["Architecture", "Systems"],
  },
  {
    slug: "on-orange",
    title: "On orange",
    excerpt:
      "Why a single warm accent does more work than a five-color palette, and the late-afternoon light it tries to borrow from.",
    date: "2025-02-08",
    readingTime: "4 min",
    tags: ["Design", "Color"],
  },
  {
    slug: "shipping-in-public",
    title: "Shipping in public",
    excerpt:
      "A year of building an open-source tool in the open. What it taught me about scope, expectations, and saying no.",
    date: "2024-11-21",
    readingTime: "9 min",
    tags: ["Open Source", "Process"],
  },
  {
    slug: "reading-list-2025",
    title: "Reading list, mid-2025",
    excerpt:
      "Twelve books on systems, type, and cities that shaped how I think about interfaces this year.",
    date: "2024-09-02",
    readingTime: "5 min",
    tags: ["Notes"],
  },
];

export const experience: CvEntry[] = [
  {
    period: "2023 — Present",
    role: "Principal Software Engineer",
    org: "Northwind Labs",
    location: "Remote",
    description:
      "Lead the platform team building realtime analytics and the shared design system. Set architecture direction for a 14-engineer org.",
    stack: ["TypeScript", "React", "Go", "ClickHouse"],
  },
  {
    period: "2020 — 2023",
    role: "Senior Frontend Engineer",
    org: "Vela",
    location: "Mexico City",
    description:
      "Owned the migration from a monolith to a component-driven SPA. Founded the internal design system that now powers all products.",
    stack: ["React", "Next.js", "Storybook", "GraphQL"],
  },
  {
    period: "2018 — 2020",
    role: "Product Engineer",
    org: "Cinder & Co.",
    location: "Guadalajara",
    description:
      "Full-stack across a fintech checkout. Shipped the reconciliation service and the merchant dashboard from scratch.",
    stack: ["Node", "React", "PostgreSQL"],
  },
  {
    period: "2016 — 2018",
    role: "Software Engineer",
    org: "Estudio Bruma",
    location: "Mexico City",
    description:
      "Built websites and interactive installations for cultural institutions. First taste of creative coding and maps.",
    stack: ["JavaScript", "D3", "Three.js"],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    area: "Languages",
    items: ["TypeScript", "Go", "Rust", "Python", "SQL"],
  },
  {
    area: "Frontend",
    items: ["React", "TanStack", "Tailwind", "WebGL", "Tauri"],
  },
  {
    area: "Backend & Data",
    items: ["Node", "PostgreSQL", "ClickHouse", "Redis", "Kafka"],
  },
  {
    area: "Platform",
    items: ["Docker", "Nix", "Cloudflare", "PostGIS", "Linux"],
  },
];

export const education = [
  {
    period: "2012 — 2016",
    title: "B.Sc. Computer Science",
    org: "Universidad Nacional Autónoma de México",
  },
];

export const profile = {
  name: "Laura Dimayuga",
  role: "Software Engineer & Designer",
  location: "Mexico City · Remote",
  blurb:
    "I build calm, fast software at the seam between design and systems. I care about restraint, legibility, and the moments where an interface disappears.",
  email: "hello@lauradimayuga.dev",
};
