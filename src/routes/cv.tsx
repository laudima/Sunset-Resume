import { createFileRoute } from "@tanstack/react-router";
import { experience, skillGroups, education, profile } from "@/lib/content";

export const Route = createFileRoute("/cv")({
  head: () => ({
    meta: [
      { title: "CV — Laura Dimayuga" },
      {
        name: "description",
        content:
          "Experience, skills, and education for Laura Dimayuga, software engineer & designer.",
      },
      {
        property: "og:title",
        content: "CV — Laura Dimayuga",
      },
      {
        property: "og:description",
        content:
          "Experience, skills, and education for Laura Dimayuga, software engineer & designer.",
      },
    ],
  }),
  component: CvPage,
});

function CvPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 pt-24 pb-28">
      <header className="max-w-2xl">
        <p className="text-sm text-sunset">CV</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
          Experience & skills
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
          Eight years building software across fintech, data, and design
          systems. Currently based in {profile.location}.
        </p>
        <a
          href="#"
          className="bg-primary text-primary-foreground hover:bg-primary/90 mt-8 inline-flex items-center rounded-full px-6 py-3 text-sm font-medium transition-colors"
        >
          Download PDF
        </a>
      </header>

      <section className="mt-20">
        <h2 className="font-display text-sm font-semibold uppercase tracking-widest text-muted-foreground">
          Experience
        </h2>
        <ol className="mt-8 space-y-0">
          {experience.map((job, i) => (
            <li
              key={`${job.org}-${job.role}`}
              className="grid gap-4 border-t border-border py-8 md:grid-cols-[220px_1fr]"
            >
              <div>
                <p className="text-sm font-medium text-foreground">
                  {job.period}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  {job.location}
                </p>
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {job.role}
                </h3>
                <p className="text-sunset text-sm">{job.org}</p>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  {job.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {job.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              {i === experience.length - 1 && (
                <span className="col-span-full block border-b border-border" />
              )}
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-20">
        <h2 className="font-display text-sm font-semibold uppercase tracking-widest text-muted-foreground">
          Skills
        </h2>
        <div className="mt-8 grid gap-x-12 gap-y-8 md:grid-cols-2">
          {skillGroups.map((g) => (
            <div key={g.area}>
              <h3 className="font-display text-base font-semibold text-foreground">
                {g.area}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-20">
        <h2 className="font-display text-sm font-semibold uppercase tracking-widest text-muted-foreground">
          Education
        </h2>
        {education[0] && (
          <div className="mt-8 border-t border-border py-8 md:grid md:grid-cols-[220px_1fr]">
            <p className="text-sm font-medium text-foreground">
              {education[0].period}
            </p>
            <div>
              <h3 className="font-display text-lg font-semibold text-foreground">
                {education[0].title}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {education[0].org}
              </p>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
