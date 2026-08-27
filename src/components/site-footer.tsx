import { Link } from "@tanstack/react-router";
import { profile } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="font-display text-sm font-semibold text-foreground">
              Laura Dimayuga
            </p>
            <p className="mt-1 max-w-xs text-sm text-muted-foreground">
              Studying incomputability, AI explainability, and epistemic concerns in machine learning. 
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {[
              { to: "/", label: "Home" },
              { to: "/projects", label: "Projects" },
              { to: "/gallery", label: "Gallery" },
              { to: "/cv", label: "CV" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-border/60 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Laura Dimayuga. All rights reserved.</p>
          <a
            href={`mailto:${profile.email}`}
            className="transition-colors hover:text-foreground"
          >
            {profile.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
