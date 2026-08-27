import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { gallery } from "@/lib/content";

export const Route = createFileRoute("/gallery/$slug")({
  loader: ({ params }) => {
    const item = gallery.find((g) => g.slug === params.slug);
    if (!item) throw notFound();
    return item;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.title} — Laura Dimayuga` },
          { name: "description", content: loaderData.caption },
          {
            property: "og:title",
            content: `${loaderData.title} — Laura Dimayuga`,
          },
          {
            property: "og:image",
            content: loaderData.src,
          },
          { property: "og:description", content: loaderData.caption },
        ]
      : [],
  }),
  component: GalleryDetailPage,
});

function GalleryDetailPage() {
  const item = Route.useLoaderData();

  return (
    <div className="mx-auto max-w-3xl px-6 pt-24 pb-28">
      <Link
        to="/gallery"
        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        ← Back to gallery
      </Link>

      <header className="mt-8 max-w-2xl">
        <p className="text-sm text-sunset">{item.year}</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
          {item.title}
        </h1>
      </header>

      <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-card">
        <img
          src={item.src}
          alt={item.alt}
          className="max-h-[32rem] w-full object-cover"
        />
      </div>

      <div className="mt-10 space-y-5">
        {item.body.map((paragraph, i) => {
          const isHeading =
            /^\d+\.\s/.test(paragraph) ||
            [
              "References",
              "Referencias",
              "Conclusions",
              "Conclusiones",
              "Notas",
              "Resumen",
              "Abstract",
              "Bibliografía",
            ].includes(paragraph);
          if (isHeading) {
            return (
              <h2
                key={i}
                className="!mt-12 font-display text-xl font-semibold text-foreground first:!mt-0"
              >
                {paragraph}
              </h2>
            );
          }
          const isQuote = paragraph.startsWith("@quote ");
          if (isQuote) {
            return (
              <blockquote
                key={i}
                className="border-sunset/60 border-l-[3px] py-0.5 pl-5 text-lg leading-relaxed text-foreground/80"
              >
                {paragraph.slice("@quote ".length)}
              </blockquote>
            );
          }
          return (
            <p key={i} className="text-lg leading-relaxed text-muted-foreground">
              {paragraph}
            </p>
          );
        })}
      </div>

      {item.photos && item.photos.length > 0 && (
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {item.photos.map((photo, i) => (
            <div
              key={i}
              className="aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-muted"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
