"use client";

import { motion } from "framer-motion";
import { Target, Layers, Shield, Zap } from "lucide-react";
import { Section } from "@/components/ui/section";
import { fadeInUp, staggerContainer, hoverLift } from "@/lib/motion";

const reasons = [
  {
    icon: Target,
    title: "Problem-solving first",
    description:
      "We start with your goals and constraints, then design architecture and delivery plans that fit. No cookie-cutter solutions.",
  },
  {
    icon: Layers,
    title: "Architecture expertise",
    description:
      "Scalable system design, clean APIs, and maintainable codebases so your product can grow without technical debt holding you back.",
  },
  {
    icon: Shield,
    title: "Enterprise-grade quality",
    description:
      "Security, reliability, and performance are built in from day one. We follow best practices and modern tooling for production-ready software.",
  },
  {
    icon: Zap,
    title: "Modern stack & process",
    description:
      "We use proven technologies and agile workflows so you get predictable delivery, clear communication, and fast iteration.",
  },
];

export function WhyChooseUs() {
  return (
    <Section
      id="why-us"
      eyebrow="Why work with us"
      title="Built for scale and long-term success"
      description="We combine technical depth with a product-minded approach, so you get software that solves real problems and stands the test of time."
    >
      <motion.div
        variants={staggerContainer}
        className="grid gap-6 md:grid-cols-2"
      >
        {reasons.map((item, i) => (
          <motion.div
            key={item.title}
            variants={fadeInUp(0.1 * i)}
            whileHover={hoverLift}
            className="flex gap-5 rounded-2xl border border-slate-800/70 bg-slate-900/40 p-6 transition-colors hover:border-slate-700/80 hover:bg-slate-800/30"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-slate-700/80 bg-slate-800/60 text-emerald-400">
              <item.icon className="h-6 w-6" />
            </div>
            <div>
              <h3 className="mb-2 text-lg font-semibold text-slate-100">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-400">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
