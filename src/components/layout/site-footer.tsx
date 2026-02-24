import Link from "next/link";

const year = new Date().getFullYear();

const footerLinks = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteFooter() {
  return (
    <footer className="relative border-t border-slate-800/60 bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-14 md:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,1.5fr)_minmax(0,1.5fr)] md:items-start">
          {/* Brand block */}
          <div className="space-y-4">
            <Link
              href="/"
              className="inline-flex items-baseline gap-2 text-slate-50"
            >
              <span className="text-xl font-semibold tracking-tight">
                Zyphron
              </span>
              <span className="text-sm font-medium text-slate-500">
                Technologies
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              We design and build modern web, mobile, and SaaS products with a
              focus on scalability, reliability, and a refined product
              experience.
            </p>
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/60 px-3 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span className="text-[0.7rem] font-medium uppercase tracking-[0.16em] text-slate-500">
                Software strategy · Design · Build
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Navigate
            </h3>
            <ul className="flex flex-col gap-2 text-sm text-slate-400">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-slate-50"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Contact
            </h3>
            <div className="space-y-2 text-sm text-slate-400">
              <a
                href="mailto:hello@zyphron.com"
                className="block font-medium text-slate-300 transition-colors hover:text-sky-300"
              >
                hello@zyphron.com
              </a>
              <p>Barpeta, Assam 781314</p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-slate-800/60 pt-4 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© {year} Zyphron Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
