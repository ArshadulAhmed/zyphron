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
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6 lg:px-8">
        {/* Logo – wordmark only, minimal */}
        <Link
          href="/"
          className="group flex items-baseline gap-1.5 text-slate-50"
          aria-label="Zyphron Technologies – Home"
        >
          <span className="text-xl font-semibold tracking-tight transition-opacity duration-200 group-hover:opacity-90">
            Zyphron
          </span>
          <span className="text-sm font-normal text-slate-500 transition-colors duration-200 group-hover:text-slate-400">
            Technologies
          </span>
        </Link>

        {/* Desktop nav – underline on hover, no pill */}
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className="relative py-2 text-sm font-medium text-slate-300 transition-colors duration-200 hover:text-slate-50"
              >
                {item.label}
                {active && (
                  <motion.span
                    layoutId="header-underline"
                    className="absolute bottom-0 left-0 right-0 h-px bg-sky-400"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA – single, subtle hover */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-slate-600 bg-slate-800/40 px-4 py-2.5 text-sm font-medium text-slate-200 outline-none transition-[border-color,background-color,color] duration-200 hover:border-slate-500 hover:bg-slate-800/60 hover:text-slate-50 focus-visible:ring-2 focus-visible:ring-sky-500/50"
          >
            Start a project
          </Link>
        </div>

        {/* Mobile menu trigger */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700/80 bg-slate-900/60 text-slate-300 transition-colors hover:border-slate-600 hover:text-slate-50 md:hidden"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
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
