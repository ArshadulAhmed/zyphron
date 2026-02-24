"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { Section } from "@/components/ui/section";
import { fadeInUp, staggerContainer } from "@/lib/motion";

export function ContactPageContent() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <section className="mx-auto max-w-6xl px-4 pt-20 pb-12 md:px-6 md:pt-28 md:pb-16 lg:px-8">
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
            className="mb-3 inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-sky-300"
          >
            Get in touch
          </motion.p>
          <motion.h1
            variants={fadeInUp(0.05)}
            className="mb-4 text-3xl font-semibold tracking-tight text-slate-50 md:text-4xl lg:text-5xl"
          >
            Start a project or say hello
          </motion.h1>
          <motion.p
            variants={fadeInUp(0.1)}
            className="text-slate-400 md:text-lg"
          >
            Share your goals and we’ll get back with next steps—no commitment
            required.
          </motion.p>
        </motion.div>
      </section>

      <Section
        eyebrow="Contact"
        title="Send us a message"
        description="Use the form below or email us directly. We typically respond within one business day."
        className="pb-24"
      >
        <motion.form
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="mx-auto max-w-xl space-y-6"
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
        >
          <motion.div variants={fadeInUp(0)} className="flex flex-col gap-2">
            <label htmlFor="contact-email" className="text-sm font-medium text-slate-300">
              Email
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              placeholder="you@company.com"
              required
              className="rounded-xl border border-slate-700 bg-slate-800/60 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/30"
            />
          </motion.div>
          <motion.div variants={fadeInUp(0.05)} className="flex flex-col gap-2">
            <label htmlFor="contact-name" className="text-sm font-medium text-slate-300">
              Name
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              placeholder="Your name"
              className="rounded-xl border border-slate-700 bg-slate-800/60 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/30"
            />
          </motion.div>
          <motion.div variants={fadeInUp(0.08)} className="flex flex-col gap-2">
            <label htmlFor="contact-message" className="text-sm font-medium text-slate-300">
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={5}
              placeholder="Tell us about your project, timeline, and goals..."
              required
              className="min-h-[120px] resize-y rounded-xl border border-slate-700 bg-slate-800/60 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/30"
            />
          </motion.div>
          <motion.div variants={fadeInUp(0.12)} className="flex flex-col gap-4 pt-2">
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-500 px-5 py-3 text-sm font-semibold text-slate-950 outline-none transition-[opacity,transform] duration-200 hover:opacity-95 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              Send message
              <Send className="h-4 w-4" />
            </button>
            {submitted && (
              <p className="text-center text-sm text-emerald-400">
                Thanks! We’ll get back to you soon.
              </p>
            )}
            <p className="text-center text-sm text-slate-500">
              Or email us at{" "}
              <a
                href="mailto:hello@zyphron.com"
                className="font-medium text-sky-400 hover:text-sky-300"
              >
                hello@zyphron.com
              </a>
            </p>
          </motion.div>
        </motion.form>
      </Section>
    </>
  );
}
