import Link from "next/link";

const year = new Date().getFullYear();

const footerLinks = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden">
      {/* Top accent line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-sky-500/50 to-transparent" />

      <div className="relative border-t border-slate-800/40 bg-gradient-to-b from-slate-950/80 to-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 lg:px-8">
          <div className="flex flex-col gap-16 md:flex-row md:items-start md:justify-between md:gap-20">
            {/* Brand block – stronger hierarchy */}
            <div className="max-w-sm space-y-5">
              <Link
                href="/"
                className="inline-flex items-baseline gap-2 text-slate-50"
              >
                <span className="text-2xl font-semibold tracking-tight">
                  Zyphron
                </span>
                <span className="text-sm font-medium text-slate-500">
                  Technologies
                </span>
              </Link>
              <p className="text-sm leading-relaxed text-slate-400">
                A focused software development partner for teams who care about
                scalability, reliability, and a refined product experience.
              </p>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span className="text-xs font-medium uppercase tracking-wider text-slate-500">
                  Software strategy, design & build
                </span>
              </div>
            </div>

            {/* Links + contact – clearer grouping */}
            <div className="flex flex-col gap-12 sm:flex-row sm:gap-20">
              <div>
                <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-sky-400/90">
                  Navigate
                </h3>
                <ul className="flex flex-col gap-3">
                  {footerLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-slate-400 transition-colors hover:text-sky-300"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-sky-400/90">
                  Contact
                </h3>
                <a
                  href="mailto:hello@zyphron.com"
                  className="text-sm text-slate-400 transition-colors hover:text-sky-300"
                >
                  hello@zyphron.com
                </a>
              </div>
            </div>
          </div>

          {/* Bottom bar – refined */}
          <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-slate-800/60 pt-8 md:flex-row md:items-center">
            <p className="text-xs text-slate-500">
              © {year} Zyphron Technologies. All rights reserved.
            </p>
            <p className="text-xs text-slate-600">
              Built with Next.js, TypeScript, Tailwind & Framer Motion
            </p>
          </div>
        </div>

        {/* Subtle gradient glow at bottom */}
        <div
          className="pointer-events-none absolute inset-0 -z-10 opacity-30"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 50% 100%, rgba(56, 189, 248, 0.08), transparent)",
          }}
        />
      </div>
    </footer>
  );
}
