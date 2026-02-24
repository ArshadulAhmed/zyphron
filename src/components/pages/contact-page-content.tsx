"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, ChevronDown, Mail, Clock3, MapPin } from "lucide-react";
import { Section } from "@/components/ui/section";
import { fadeInUp, staggerContainer } from "@/lib/motion";

export function ContactPageContent() {
  const [submitted, setSubmitted] = useState(false);
  const [projectType, setProjectType] = useState("");
  const [budgetRange, setBudgetRange] = useState("");
  const [openMenu, setOpenMenu] = useState<"project" | "budget" | null>(null);

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
            Share your goals and we’ll get back with next steps. No commitment
            required.
          </motion.p>
        </motion.div>
      </section>

      <Section
        title="Send us a message"
        description="Use the form below or email us directly. We typically respond within one business day."
        className="pb-24"
      >
        <div className="relative">
          <motion.div
            className="pointer-events-none absolute -inset-4 -z-10 rounded-3xl bg-sky-500/10 blur-3xl"
            aria-hidden
          />
          <motion.div
            variants={staggerContainer}
            className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.9fr)] lg:items-start"
          >
          <motion.form
            variants={fadeInUp(0)}
            className="space-y-6 rounded-2xl border border-slate-800/80 bg-slate-900/70 p-6 shadow-[0_18px_60px_rgba(15,23,42,0.85)]"
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
          >
            <div className="grid gap-4 md:grid-cols-2">
              <div className="relative">
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  placeholder=" "
                  className="peer w-full rounded-xl border border-slate-700 bg-transparent px-4 pt-5 pb-2 text-sm text-slate-100 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/30"
                />
                <label
                  htmlFor="contact-name"
                  className="pointer-events-none absolute left-4 top-1.5 text-xs text-sky-300 transition-all duration-150 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-sm peer-placeholder-shown:text-slate-400 peer-focus:top-1.5 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-sky-300"
                >
                  Name
                </label>
              </div>
              <div className="relative">
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder=" "
                  required
                  className="peer w-full rounded-xl border border-slate-700 bg-transparent px-4 pt-5 pb-2 text-sm text-slate-100 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/30"
                />
                <label
                  htmlFor="contact-email"
                  className="pointer-events-none absolute left-4 top-1.5 text-xs text-sky-300 transition-all duration-150 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-sm peer-placeholder-shown:text-slate-400 peer-focus:top-1.5 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-sky-300"
                >
                  Work email
                </label>
              </div>
            </div>

            <div className="relative">
              <input
                id="contact-company"
                name="company"
                type="text"
                placeholder=" "
                className="peer w-full rounded-xl border border-slate-700 bg-transparent px-4 pt-5 pb-2 text-sm text-slate-100 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/30"
              />
              <label
                htmlFor="contact-company"
                className="pointer-events-none absolute left-4 top-1.5 text-xs text-sky-300 transition-all duration-150 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-sm peer-placeholder-shown:text-slate-400 peer-focus:top-1.5 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-sky-300"
              >
                Company (optional)
              </label>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="flex flex-col gap-2">
                <span className="text-sm font-medium text-slate-300">
                  Project type (optional)
                </span>
                <div className="relative">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between rounded-xl border border-slate-700 bg-slate-900/60 px-4 py-3 text-left text-sm text-slate-100 transition-colors hover:border-sky-500/60 focus:outline-none focus:ring-2 focus:ring-sky-500/30"
                    onClick={() =>
                      setOpenMenu((current) => (current === "project" ? null : "project"))
                    }
                  >
                    <span className={projectType ? "" : "text-slate-500"}>
                      {projectType
                        ? {
                            "new-product": "New product",
                            "existing-product": "Improve existing product",
                            consulting: "Architecture / consulting",
                          }[projectType]
                        : "Select an option"}
                    </span>
                    <ChevronDown
                      className={`h-4 w-4 text-slate-500 transition-transform ${
                        openMenu === "project" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openMenu === "project" && (
                    <div className="absolute left-0 top-full z-20 mt-1 w-full overflow-hidden rounded-xl border border-slate-700 bg-slate-950/95 shadow-2xl backdrop-blur-sm">
                      <button
                        type="button"
                        className="flex w-full items-center px-3 py-2 text-left text-sm text-slate-400 hover:bg-slate-800/70"
                        onMouseDown={(e) => {
                          e.preventDefault();
                          setProjectType("");
                          setOpenMenu(null);
                        }}
                      >
                        Select an option
                      </button>
                      <button
                        type="button"
                        className="flex w-full items-center px-3 py-2 text-left text-sm text-slate-100 hover:bg-slate-800/70"
                        onMouseDown={(e) => {
                          e.preventDefault();
                          setProjectType("new-product");
                          setOpenMenu(null);
                        }}
                      >
                        New product
                      </button>
                      <button
                        type="button"
                        className="flex w-full items-center px-3 py-2 text-left text-sm text-slate-100 hover:bg-slate-800/70"
                        onMouseDown={(e) => {
                          e.preventDefault();
                          setProjectType("existing-product");
                          setOpenMenu(null);
                        }}
                      >
                        Improve existing product
                      </button>
                      <button
                        type="button"
                        className="flex w-full items-center px-3 py-2 text-left text-sm text-slate-100 hover:bg-slate-800/70"
                        onMouseDown={(e) => {
                          e.preventDefault();
                          setProjectType("consulting");
                          setOpenMenu(null);
                        }}
                      >
                        Architecture / consulting
                      </button>
                    </div>
                  )}
                  <input type="hidden" name="projectType" value={projectType} />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-sm font-medium text-slate-300">
                  Budget range (optional)
                </span>
                <div className="relative">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between rounded-xl border border-slate-700 bg-slate-900/60 px-4 py-3 text-left text-sm text-slate-100 transition-colors hover:border-sky-500/60 focus:outline-none focus:ring-2 focus:ring-sky-500/30"
                    onClick={() =>
                      setOpenMenu((current) => (current === "budget" ? null : "budget"))
                    }
                  >
                    <span className={budgetRange ? "" : "text-slate-500"}>
                      {budgetRange
                        ? {
                            "20k-30k": "₹20k - ₹30k",
                            "30k-50k": "₹30k - ₹50k",
                            "50k-70k": "₹50k - ₹70k",
                            "70k-plus": "₹70k+",
                          }[budgetRange]
                        : "Select a range"}
                    </span>
                    <ChevronDown
                      className={`h-4 w-4 text-slate-500 transition-transform ${
                        openMenu === "budget" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openMenu === "budget" && (
                    <div className="absolute left-0 top-full z-20 mt-1 w-full overflow-hidden rounded-xl border border-slate-700 bg-slate-950/95 shadow-2xl backdrop-blur-sm">
                      <button
                        type="button"
                        className="flex w-full items-center px-3 py-2 text-left text-sm text-slate-400 hover:bg-slate-800/70"
                        onMouseDown={(e) => {
                          e.preventDefault();
                          setBudgetRange("");
                          setOpenMenu(null);
                        }}
                      >
                        Select a range
                      </button>
                      <button
                        type="button"
                        className="flex w-full items-center px-3 py-2 text-left text-sm text-slate-100 hover:bg-slate-800/70"
                        onMouseDown={(e) => {
                          e.preventDefault();
                          setBudgetRange("20k-30k");
                          setOpenMenu(null);
                        }}
                      >
                        ₹20k - ₹30k
                      </button>
                      <button
                        type="button"
                        className="flex w-full items-center px-3 py-2 text-left text-sm text-slate-100 hover:bg-slate-800/70"
                        onMouseDown={(e) => {
                          e.preventDefault();
                          setBudgetRange("30k-50k");
                          setOpenMenu(null);
                        }}
                      >
                        ₹30k - ₹50k
                      </button>
                      <button
                        type="button"
                        className="flex w-full items-center px-3 py-2 text-left text-sm text-slate-100 hover:bg-slate-800/70"
                        onMouseDown={(e) => {
                          e.preventDefault();
                          setBudgetRange("50k-70k");
                          setOpenMenu(null);
                        }}
                      >
                        ₹50k - ₹70k
                      </button>
                      <button
                        type="button"
                        className="flex w-full items-center px-3 py-2 text-left text-sm text-slate-100 hover:bg-slate-800/70"
                        onMouseDown={(e) => {
                          e.preventDefault();
                          setBudgetRange("70k-plus");
                          setOpenMenu(null);
                        }}
                      >
                        ₹70k+
                      </button>
                    </div>
                  )}
                  <input type="hidden" name="budget" value={budgetRange} />
                </div>
              </div>
            </div>

            <div className="relative">
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                placeholder=" "
                required
                className="peer min-h-[140px] w-full resize-y rounded-xl border border-slate-700 bg-transparent px-4 pt-6 pb-3 text-sm text-slate-100 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/30"
              />
              <label
                htmlFor="contact-message"
                className="pointer-events-none absolute left-4 top-2 text-xs text-sky-300 transition-all duration-150 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-sm peer-placeholder-shown:text-slate-400 peer-focus:top-2 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-sky-300"
              >
                How can we help?
              </label>
            </div>
            <div className="flex flex-col gap-3 pt-3 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-500 px-5 py-3 text-sm font-semibold text-slate-950 outline-none transition-[opacity,transform] duration-200 hover:opacity-95 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                Send message
                <Send className="h-4 w-4" />
              </button>
              {submitted && (
                <p className="text-sm text-emerald-400 sm:text-right">
                  Thanks! We’ll get back to you soon.
                </p>
              )}
            </div>
          </motion.form>

          <motion.div
            variants={fadeInUp(0.08)}
            className="space-y-5 rounded-2xl border border-slate-800/80 bg-slate-900/70 p-6"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/80 px-3 py-1 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-slate-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Typically replies within one business day
            </div>
            <div className="space-y-4 text-sm text-slate-300">
              <div className="flex gap-3">
                <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-sky-500/10 text-sky-300">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                    Email
                  </p>
                  <a
                    href="mailto:hello@zyphron.com"
                    className="text-sm font-medium text-slate-300 transition-colors hover:text-sky-300"
                  >
                    hello@zyphron.com
                  </a>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-sky-500/10 text-sky-300">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                    Location
                  </p>
                  <p>Barpeta, Assam 781314</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-sky-500/10 text-sky-300">
                  <Clock3 className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                    Ideal for
                  </p>
                  <p>Founders and teams exploring new products or leveling up existing systems.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
        </div>
      </Section>
    </>
  );
}
