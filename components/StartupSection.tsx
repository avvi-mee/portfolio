"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

export default function StartupSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} id="startup" className="relative py-24 md:py-32 px-6">
      {/* Section label */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto mb-5 flex items-center gap-4"
      >
        <span className="text-xs font-mono-custom tracking-[0.2em] text-ink-400 uppercase">
          04 / Startup
        </span>
        <div className="flex-1 h-px bg-ink-100" />
      </motion.div>

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
          className="relative overflow-hidden rounded-3xl bg-ink-900 text-cream-100 shadow-premium-xl"
        >
          {/* Top accent line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />

          {/* Background geometric elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div
              className="absolute -top-32 -right-32 w-96 h-96 rounded-full"
              style={{
                background: "radial-gradient(circle, rgba(200,169,126,0.12) 0%, transparent 70%)",
              }}
            />
            <div
              className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full"
              style={{
                background: "radial-gradient(circle, rgba(200,169,126,0.08) 0%, transparent 70%)",
              }}
            />
            {/* Grid pattern */}
            <svg
              className="absolute inset-0 w-full h-full opacity-[0.03]"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          <div className="relative p-10 md:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left */}
              <div>
                {/* Logo mark */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="mb-8"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/15 border border-accent/30 mb-6">
                    <span className="font-display font-bold text-2xl text-accent">U</span>
                  </div>
                  <div className="text-xs font-mono-custom tracking-[0.3em] text-ink-300 uppercase mb-2">
                    The Venture
                  </div>
                  <h2 className="font-display font-bold text-5xl md:text-6xl text-cream-50 leading-tight mb-2">
                    Unmatrix
                  </h2>
                  <p className="text-accent font-display font-medium text-lg tracking-wide">
                    Build Beyond Systems
                  </p>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-ink-300 text-base leading-relaxed max-w-md"
                >
                  We build scalable systems that simplify workflows and reduce
                  manual effort — turning complex operational challenges into
                  clean, automated solutions.
                </motion.p>
              </div>

              {/* Right: Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: "Systems Thinking", desc: "Every solution built for scale from day one" },
                  { title: "Execution First", desc: "Ideas mean nothing without working products" },
                  { title: "Real Impact", desc: "Measurable reduction in manual overhead" },
                  { title: "Fast Iteration", desc: "From concept to live product in record time" },
                ].map((pillar, i) => (
                  <motion.div
                    key={pillar.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                    className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/8 transition-colors duration-300"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mb-3" />
                    <h4 className="font-display font-semibold text-cream-100 text-sm mb-1.5">
                      {pillar.title}
                    </h4>
                    <p className="text-ink-400 text-xs leading-relaxed">{pillar.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Bottom CTA */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="mt-12 pt-10 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
            >
              <p className="text-ink-400 text-sm max-w-sm">
                Have a workflow problem worth solving? Let's build the system.
              </p>
              <a
                href="#contact"
                className="group flex items-center gap-2 px-7 py-3 bg-accent text-ink-900 rounded-full text-sm font-medium hover:bg-accent-light transition-colors duration-200 shadow-premium-md shrink-0"
              >
                Start a Project
                <ArrowUpRight
                  size={14}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
                />
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
