"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-slate-950/90 via-slate-950/60 to-transparent" />

      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 pt-4 pb-3 md:px-6 lg:px-8">
        {/* Desktop: floating nav shell */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="hidden w-full items-center justify-between rounded-full border border-slate-800 bg-slate-900/70 px-4 py-2 shadow-[0_18px_45px_rgba(15,23,42,0.9)] backdrop-blur-md md:flex"
        >
          <Link
            href="/"
            className="group flex items-baseline gap-1.5 text-slate-50"
            aria-label="Zyphron Technologies - Home"
          >
            <span className="text-base font-semibold tracking-tight transition-opacity duration-200 group-hover:opacity-90">
              Zyphron
            </span>
            <span className="text-xs font-normal text-slate-500 transition-colors duration-200 group-hover:text-slate-400">
              Technologies
            </span>
          </Link>

          <nav className="flex items-center gap-6">
            {navItems.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative py-1 text-xs font-medium uppercase tracking-[0.14em] text-slate-400 transition-colors duration-200 hover:text-slate-50"
                >
                  {item.label}
                  {active && (
                    <motion.span
                      layoutId="header-underline"
                      className="absolute inset-x-0 -bottom-1 h-0.5 rounded-full bg-sky-400"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-4 py-1.5 text-xs font-semibold text-slate-950 outline-none transition-[opacity,transform] duration-200 hover:opacity-95 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            Start a project
          </Link>
        </motion.div>

        {/* Mobile: simple bar with logo + menu button */}
        <div className="flex w-full items-center justify-between md:hidden">
          <Link
            href="/"
            className="group flex items-baseline gap-1.5 text-slate-50"
            aria-label="Zyphron Technologies - Home"
          >
            <span className="text-lg font-semibold tracking-tight">
              Zyphron
            </span>
          </Link>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700/80 bg-slate-900/60 text-slate-300 transition-colors hover:border-slate-600 hover:text-slate-50"
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-slate-800/60 bg-slate-950/95 md:hidden"
          >
            <div className="flex flex-col gap-1 px-4 pb-4 pt-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                    pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))
                      ? "bg-slate-800/80 text-slate-50"
                      : "text-slate-400 hover:bg-slate-800/50 hover:text-slate-100"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-lg bg-slate-800 px-3 py-2.5 text-center text-sm font-medium text-slate-100 hover:bg-slate-700"
              >
                Start a project
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
