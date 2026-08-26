import { createFileRoute, Link } from "@tanstack/react-router";
import { gallery } from "@/lib/content";

export const Route = createFileRoute("/gallery/")({
  head: () => ({
    meta: [
      { title: "Gallery — Laura Dimayuga" },
      {
        name: "description",
        content:
          "Photos from conferences, hackathons, and awards — Laura Dimayuga.",
      },
      {
        property: "og:title",
        content: "Gallery — Laura Dimayuga",
      },
      {
        property: "og:description",
        content:
          "Photos from conferences, hackathons, and awards.",
      },
      {
        property: "og:image",
        content: "/gallery/mirzakhani.jpg",
      },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 pt-24 pb-28">
      <header className="max-w-2xl">
        <p className="text-sm text-sunset">Gallery</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
          Conferences & awards
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
          Moments from conferences, competitions, and hackathons along the
          way.
        </p>
      </header>

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {gallery.map((item) => (
          <Link
            key={item.slug}
            to="/gallery/$slug"
            params={{ slug: item.slug }}
            className="group overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-sunset/40"
          >
            <div className="aspect-[4/3] overflow-hidden bg-muted">
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-5">
              <p className="text-sm font-medium text-foreground">
                {item.caption}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                {item.year}
              </p>
              <span className="mt-3 inline-block text-sm text-sunset opacity-0 transition-opacity group-hover:opacity-100">
                Read more →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
