"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Target, Compass, Heart } from "lucide-react";
import { Section } from "@/components/ui/section";
import { fadeInUp, staggerContainer, hoverLift } from "@/lib/motion";

const blocks = [
  {
    icon: Target,
    title: "Our mission",
    body: "To help businesses turn ambitious product ideas into reliable, scalable software. We focus on architecture, clean code, and delivery discipline so our clients can grow without being held back by technical debt or outdated systems.",
  },
  {
    icon: Compass,
    title: "Our approach",
    body: "We start with your goals and constraints, then design systems and workflows that fit. We work in clear phases—discovery, design, build, launch—with regular demos and feedback so you stay in the loop and can steer when needed.",
  },
  {
    icon: Heart,
    title: "Our values",
    body: "We care about long-term quality over short-term hacks, clear communication over jargon, and partnership over simply executing tickets. We take ownership of outcomes and take pride in building software that lasts.",
  },
];

export function AboutPageContent() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-4 pt-20 pb-16 md:px-6 md:pt-28 md:pb-24 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-120px 0px -120px 0px" }}
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.1, delayChildren: 0.15 },
            },
          }}
          className="max-w-2xl"
        >
          <motion.p
            variants={fadeInUp(0)}
            className="mb-3 inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/60 px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-slate-400"
          >
            Who we are
          </motion.p>
          <motion.h1
            variants={fadeInUp(0.2)}
            className="mb-4 text-3xl font-semibold tracking-tight text-slate-50 md:text-4xl lg:text-5xl"
          >
            A focused partner for modern software
          </motion.h1>
          <motion.p
            variants={fadeInUp(0.4)}
            className="text-slate-400 md:text-lg"
          >
            We are a software development firm that builds web, mobile,
            e‑commerce, and SaaS solutions for startups, SMEs, and enterprises—with
            an emphasis on scalability, reliability, and a professional approach
            to delivery.
          </motion.p>
        </motion.div>
      </section>

      <Section
        eyebrow="Mission, approach & values"
        title="How we work and what we stand for"
        description="We combine technical depth with a product-minded, partnership-driven way of working."
      >
        <motion.div
          variants={staggerContainer}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {blocks.map((block) => (
            <motion.div
              key={block.title}
              variants={fadeInUp(0.1)}
              whileHover={hoverLift}
              className="rounded-2xl border border-slate-800/80 bg-slate-900/50 p-6 transition-colors hover:border-slate-700/80 hover:bg-slate-800/40"
            >
              <div className="mb-4 inline-flex rounded-xl border border-slate-700/80 bg-slate-800/60 p-3 text-emerald-400">
                <block.icon className="h-6 w-6" />
              </div>
              <h2 className="mb-3 text-lg font-semibold text-slate-100">
                {block.title}
              </h2>
              <p className="text-sm leading-relaxed text-slate-400">
                {block.body}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      <Section
        title="Technical expertise you can rely on"
        description="We bring architecture expertise, modern tooling, and a commitment to quality. Whether you need a new product from scratch or to extend and harden existing systems, we’re set up to deliver enterprise-grade software and clear communication at every step."
        className="pb-20"
      >
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeInUp(0)}
          className="text-center"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-slate-600 bg-slate-800/50 px-5 py-3 text-sm font-medium text-slate-200 transition-colors hover:border-slate-500 hover:bg-slate-800 hover:text-slate-50"
          >
            Start a conversation
            <span aria-hidden>→</span>
          </Link>
        </motion.div>
      </Section>
    </>
  );
}
