import { createFileRoute } from "@tanstack/react-router";
import { projects } from "@/lib/content";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Laura Dimayuga" },
      {
        name: "description",
        content:
          "Selected projects across AI research, agent workflows, automation, and community-building by Laura Dimayuga.",
      },
      {
        property: "og:title",
        content: "Projects — Laura Dimayuga",
      },
      {
        property: "og:description",
        content:
          "Selected projects across AI research, agent workflows, automation, and community-building.",
      },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 pt-24 pb-28">
      <header className="max-w-2xl">
        <p className="text-sm text-sunset">Projects</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
          Selected work
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
          A handful of projects across AI research, agent workflows, and
          community-building. Each one taught me something about restraint.
        </p>
      </header>

      <div className="mt-16 grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <article
            key={p.slug}
            className="group flex flex-col rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-sunset/40"
          >
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>{p.category}</span>
              <span>{p.year}</span>
            </div>
            <h2 className="mt-4 font-display text-2xl font-semibold text-foreground">
              {p.title}
            </h2>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
              {p.description}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
            {p.link && p.link !== "#" && (
              <a
                href={p.link}
                className="mt-6 inline-block text-sm font-medium text-sunset transition-opacity hover:opacity-70"
              >
                View case study →
              </a>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}
