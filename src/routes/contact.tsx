import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { profile } from "@/lib/content";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Laura Dimayuga" },
      {
        name: "description",
        content:
          "Get in touch with Laura Dimayuga for projects, collaborations, or just to say hello.",
      },
      {
        property: "og:title",
        content: "Contact — Laura Dimayuga",
      },
      {
        property: "og:description",
        content:
          "Get in touch with Laura Dimayuga for projects, collaborations, or just to say hello.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div className="mx-auto max-w-5xl px-6 pt-24 pb-28">
      <header className="max-w-2xl">
        <p className="text-sm text-sunset">Contact</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
          Let's talk
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
          For projects, collaborations, or a quiet hello — I read everything and
          reply within a couple of days.
        </p>
      </header>

      <div className="mt-16 grid gap-12 md:grid-cols-[1fr_1.3fr]">
        <aside className="space-y-8">
          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground">
              Email
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="mt-2 block text-sm text-foreground transition-colors hover:text-sunset"
            >
              {profile.email}
            </a>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground">
              Based in
            </p>
            <p className="mt-2 text-sm text-foreground">{profile.location}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground">
              Elsewhere
            </p>
            <ul className="mt-2 space-y-1.5 text-sm">
              {["GitHub", "LinkedIn", "Twitter / X"].map((l) => (
                <li key={l}>
                  <a
                    href="#"
                    className="text-foreground transition-colors hover:text-sunset"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        <div>
          {sent ? (
            <div className="flex h-full min-h-64 flex-col items-center justify-center rounded-2xl border border-border bg-card p-8 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sunset-soft text-sunset">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </div>
              <h2 className="mt-5 font-display text-xl font-semibold text-foreground">
                Message sent
              </h2>
              <p className="mt-2 max-w-xs text-sm text-muted-foreground">
                Thanks for reaching out. I'll get back to you shortly.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-border bg-card p-7 md:p-8"
            >
              <div className="grid gap-5 md:grid-cols-2">
                <Field label="Name" name="name" placeholder="Your name" />
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                />
              </div>
              <div className="mt-5">
                <Field
                  label="Subject"
                  name="subject"
                  placeholder="What's this about?"
                />
              </div>
              <div className="mt-5">
                <label className="text-sm font-medium text-foreground">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me a little about your project…"
                  className="border-input bg-background focus:ring-sunset mt-2 block w-full resize-none rounded-lg border px-3.5 py-2.5 text-sm text-foreground outline-none transition focus:ring-2"
                />
              </div>
              <button
                type="submit"
                className="bg-primary text-primary-foreground hover:bg-primary/90 mt-6 inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-colors md:w-auto"
              >
                Send message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="text-sm font-medium text-foreground">{label}</label>
      <input
        type={type}
        name={name}
        required
        placeholder={placeholder}
        className="border-input bg-background focus:ring-sunset mt-2 block w-full rounded-lg border px-3.5 py-2.5 text-sm text-foreground outline-none transition placeholder:text-muted-foreground/60 focus:ring-2"
      />
    </div>
  );
}
