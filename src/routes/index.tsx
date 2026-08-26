import { createFileRoute, Link } from "@tanstack/react-router";
import { profile, projects } from "@/lib/content";
import { CursorTrail } from "@/components/cursor-trail";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Laura Dimayuga — Computer Science Student & Explainable AI Researcher" },
      {
        name: "description",
        content:
          "Computer Science student at UNAM working at the intersection of theoretical computing and explainable AI. Portfolio, projects, and CV.",
      },
      {
        property: "og:title",
        content: "Laura Dimayuga — Computer Science Student & Explainable AI Researcher",
      },
      {
        property: "og:description",
        content:
          "Computer Science student at UNAM working at the intersection of theoretical computing and explainable AI.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const featured = projects.slice(0, 3);

  return (
    <>
      <section className="sunset-glow relative overflow-hidden">
        <CursorTrail />
        <div className="mx-auto max-w-6xl px-6 pt-28 pb-32 md:pt-40 md:pb-44">
          <div className="grid items-center gap-12 md:grid-cols-[1.4fr_1fr]">
            <div>
              <p className="text-muted-foreground text-sm tracking-wide">
                {profile.location}
              </p>
              <h1 className="text-balance mt-6 max-w-3xl text-5xl font-semibold leading-[1.05] text-foreground md:text-7xl">
                Hi, I'm <span className="text-sunset">Laura Dimayuga</span>.
              </h1>
              <p className="text-balance mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                {profile.role}. {profile.blurb}
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link
                  to="/projects"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center rounded-full px-6 py-3 text-sm font-medium transition-colors"
                >
                  View projects
                </Link>
                <Link
                  to="/contact"
                  className="border-border text-foreground hover:bg-accent inline-flex items-center rounded-full border px-6 py-3 text-sm font-medium transition-colors"
                >
                  Get in touch
                </Link>
              </div>
            </div>
            <div className="relative mx-auto aspect-square w-64 sm:w-72 md:w-80 lg:w-96">
              <div className="pointer-events-none absolute -inset-6 -z-10 rounded-full bg-gradient-to-tr from-sunset/25 via-transparent to-transparent blur-xl" />
              <div className="h-full w-full overflow-hidden rounded-full border border-border bg-card shadow-lg shadow-black/10 ring-1 ring-black/5 transition-transform duration-500 hover:-translate-y-1">
                <img
                  src="/portrait.jpeg"
                  alt="Portrait of Laura Dimayuga"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex items-end justify-between gap-6">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground">
            Selected work
          </h2>
          <Link
            to="/projects"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            All projects →
          </Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {featured.map((p) => (
            <Link
              key={p.slug}
              to="/projects"
              className="group rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-sunset/40"
            >
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>{p.category}</span>
                <span>{p.year}</span>
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-foreground">
                {p.title}
              </h3>
              <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                {p.description}
              </p>
              <span className="mt-5 inline-block text-sm text-sunset opacity-0 transition-opacity group-hover:opacity-100">
                Read more →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr]">
          <div>
            <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground">
              How I work
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
              I move between theoretical computing and the philosophy of
              technology, always looking for the room where a hard proof, an
              ethical question, and an explainability model meet.
            </p>
            <Link
              to="/cv"
              className="text-sunset mt-8 inline-block text-sm font-medium transition-opacity hover:opacity-70"
            >
              Read my CV →
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {[
              ["100+", "Students mentored"],
              ["Top 2%", "ICPC World Finals 2024"],
              ["9,362", "Harvard Aspire Leaders finalist"],
              ["1st", "Geometric Intelligence hackathon"],
            ].map(([n, l]) => (
              <div key={l} className="rounded-2xl border border-border p-6">
                <p className="font-display text-3xl font-semibold text-foreground">
                  {n}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
