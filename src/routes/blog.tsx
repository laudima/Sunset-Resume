import { createFileRoute } from "@tanstack/react-router";
import { posts } from "@/lib/content";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Laura Dimayuga" },
      {
        name: "description",
        content:
          "Writing on design, engineering, systems, and craft from Laura Dimayuga.",
      },
      {
        property: "og:title",
        content: "Blog — Laura Dimayuga",
      },
      {
        property: "og:description",
        content:
          "Writing on design, engineering, systems, and craft from Laura Dimayuga.",
      },
    ],
  }),
  component: BlogPage,
});

function BlogPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 pt-24 pb-28">
      <header className="max-w-2xl">
        <p className="text-sm text-sunset">Blog</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
          Writing
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
          Notes on design, engineering, and the craft of building software that
          feels considered.
        </p>
      </header>

      <ul className="mt-16">
        {posts.map((post) => (
          <li
            key={post.slug}
            className="group border-border border-b py-8 first:border-t"
          >
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <time>{formatDate(post.date)}</time>
              <span>·</span>
              <span>{post.readingTime}</span>
              {post.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border px-2.5 py-0.5"
                >
                  {t}
                </span>
              ))}
            </div>
            <h2 className="group-hover:text-sunset mt-3 font-display text-2xl font-semibold text-foreground transition-colors">
              {post.title}
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              {post.excerpt}
            </p>
            <span className="mt-4 inline-block text-sm text-sunset opacity-0 transition-opacity group-hover:opacity-100">
              Read post →
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}
