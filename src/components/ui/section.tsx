"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion";

type SectionProps = {
  id?: string;
  title?: string;
  eyebrow?: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

export function Section({
  id,
  title,
  eyebrow,
  description,
  children,
  className,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`mx-auto w-full max-w-6xl px-4 py-10 md:px-6 md:py-14 lg:px-8 lg:py-18 ${className ?? ""}`}
    >
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-120px 0px -120px 0px" }}
        variants={staggerContainer}
        className="space-y-8 md:space-y-10"
      >
        {(eyebrow || title || description) && (
          <motion.div
            variants={fadeInUp(0)}
            className="max-w-2xl space-y-3 md:space-y-4"
          >
            {eyebrow && (
              <p className="inline-flex items-center gap-2 rounded-full border border-slate-800/80 bg-slate-900/70 px-3 py-1 text-[0.75rem] font-medium uppercase tracking-[0.16em] text-sky-300">
                <span className="h-1 w-1 rounded-full bg-emerald-400" />
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="text-balance text-2xl font-semibold tracking-tight text-slate-50 md:text-3xl lg:text-4xl">
                {title}
              </h2>
            )}
            {description && (
              <p className="text-pretty text-sm leading-relaxed text-slate-400 md:text-base">
                {description}
              </p>
            )}
          </motion.div>
        )}

        <motion.div variants={fadeInUp(0.03)}>{children}</motion.div>
      </motion.div>
    </section>
  );
}

