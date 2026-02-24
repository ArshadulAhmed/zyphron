"use client";

import { motion } from "framer-motion";
import { MessageSquare, PenTool, Code, Rocket } from "lucide-react";
import { Section } from "@/components/ui/section";
import { fadeInUp, staggerContainer, hoverLift } from "@/lib/motion";

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Discovery & strategy",
    description:
      "We align on goals, scope, and constraints so the solution fits your business and timeline.",
  },
  {
    icon: PenTool,
    step: "02",
    title: "Design & architecture",
    description:
      "We define UX, system design, and technical approach before writing code.",
  },
  {
    icon: Code,
    step: "03",
    title: "Build & iterate",
    description:
      "Agile development with clear milestones, demos, and feedback loops.",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Launch & support",
    description:
      "We deploy to production, hand over documentation, and can support ongoing evolution.",
  },
];

export function Process() {
  return (
    <Section
      id="process"
      eyebrow="How we work"
      title="From idea to production"
      description="A clear, collaborative process so you always know where we are and what comes next."
    >
      <motion.div
        variants={staggerContainer}
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
      >
        {steps.map((item, i) => (
          <motion.div
            key={item.step}
            variants={fadeInUp(0.1 * i)}
            whileHover={hoverLift}
            className="relative rounded-2xl border border-slate-800/80 bg-slate-900/50 p-6"
          >
            <span className="absolute right-4 top-4 text-2xl font-bold text-slate-700">
              {item.step}
            </span>
            <div className="mb-4 inline-flex rounded-xl border border-slate-700/80 bg-slate-800/60 p-3 text-violet-400">
              <item.icon className="h-5 w-5" />
            </div>
            <h3 className="mb-2 text-lg font-semibold text-slate-100">
              {item.title}
            </h3>
            <p className="text-sm leading-relaxed text-slate-400">
              {item.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
