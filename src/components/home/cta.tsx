"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeInUp } from "@/lib/motion";

export function CTA() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24 lg:px-8">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: {},
          show: {
            transition: { staggerChildren: 0.12, delayChildren: 0.1 },
          },
        }}
        className="glass-panel grid-noise relative overflow-hidden rounded-3xl px-6 py-14 text-center md:px-12 md:py-20"
      >
        <motion.p
          variants={fadeInUp(0)}
          className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-sky-300"
        >
          Start your project
        </motion.p>
        <motion.h2
          variants={fadeInUp(0.05)}
          className="mx-auto mb-4 max-w-2xl text-3xl font-semibold tracking-tight text-slate-50 md:text-4xl"
        >
          Ready to build something great?
        </motion.h2>
        <motion.p
          variants={fadeInUp(0.1)}
          className="mx-auto mb-8 max-w-lg text-slate-400"
        >
          Tell us about your goals. We’ll help you scope, design, and ship
          software that scales.
        </motion.p>
        <motion.div variants={fadeInUp(0.15)}>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-sky-500 px-6 py-3.5 text-sm font-semibold text-slate-950 outline-none transition-[opacity,transform] duration-200 hover:opacity-95 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
          >
            Get in touch
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
