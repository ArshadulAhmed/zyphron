"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { fadeInUp, staggerContainer, hoverLift } from "@/lib/motion";

const accentStyles = {
  sky: {
    border: "border-l-sky-500/70",
    title: "text-sky-400",
    pill: "border-sky-500/30 bg-sky-500/10 text-sky-300",
  },
  violet: {
    border: "border-l-violet-500/70",
    title: "text-violet-400",
    pill: "border-violet-500/30 bg-violet-500/10 text-violet-300",
  },
  emerald: {
    border: "border-l-emerald-500/70",
    title: "text-emerald-400",
    pill: "border-emerald-500/30 bg-emerald-500/10 text-emerald-300",
  },
  amber: {
    border: "border-l-amber-500/70",
    title: "text-amber-400",
    pill: "border-amber-500/30 bg-amber-500/10 text-amber-300",
  },
} as const;

type Accent = keyof typeof accentStyles;

type Category = {
  label: string;
  accent: Accent;
  items: string[];
};

const categories: Category[] = [
  {
    label: "Frontend",
    accent: "sky",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "React Native"],
  },
  {
    label: "Backend",
    accent: "violet",
    items: ["Node.js", "Python", "PostgreSQL", "Redis", "REST & GraphQL"],
  },
  {
    label: "Cloud & DevOps",
    accent: "emerald",
    items: ["AWS", "Vercel", "Docker", "CI/CD", "Monitoring"],
  },
  {
    label: "Product",
    accent: "amber",
    items: ["E‑commerce", "Auth & Billing", "Analytics", "APIs & Integrations"],
  },
];

export function TechStack() {
  return (
    <Section
      id="tech"
      eyebrow="Technology"
      title="Modern, proven stack"
      description="We build with industry-standard tools and frameworks so your product is maintainable, performant, and ready to scale."
    >
      <motion.div
        variants={staggerContainer}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        {categories.map((cat, i) => {
          const style = accentStyles[cat.accent];
          return (
            <motion.div
              key={cat.label}
              variants={fadeInUp(0.1 * i)}
              whileHover={hoverLift}
              className={`rounded-2xl border border-slate-800/80 bg-slate-900/50 p-5 pl-5 border-l-4 ${style.border}`}
            >
              <h3
                className={`mb-3 text-xs font-semibold uppercase tracking-wider ${style.title}`}
              >
                {cat.label}
              </h3>
              <ul className="flex flex-wrap gap-1.5">
                {cat.items.map((tech, j) => (
                  <li
                    key={tech}
                    className="-ml-1.5 first:ml-0"
                    style={{ zIndex: cat.items.length - j }}
                  >
                    <span
                      className={`inline-block rounded-full border px-2.5 py-1 text-xs font-medium ${style.pill}`}
                    >
                      {tech}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}
