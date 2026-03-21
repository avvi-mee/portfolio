"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, CheckCircle2, ArrowUpRight } from "lucide-react";

const points = [
  "Solves client management, project tracking & workflow inefficiencies",
  "Improves operational efficiency and reduces manual work",
  "Live, deployed, and actively used in production",
];

export default function FeaturedProject() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="work" className="relative py-24 md:py-32 px-6">
      {/* Section label */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto mb-16 flex items-center gap-4"
      >
        <span className="text-xs font-mono-custom tracking-[0.2em] text-ink-400 uppercase">
          01 / Featured Project
        </span>
        <div className="flex-1 h-px bg-ink-100" />
      </motion.div>

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
          className="relative bg-white rounded-3xl overflow-hidden shadow-premium-lg border border-ink-100/80 card-premium group"
        >
          {/* Top bar accent */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent/60 via-accent to-accent/60" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Content side */}
            <div className="p-10 md:p-14 flex flex-col justify-center">
              {/* Badge */}
              <div className="flex items-center gap-2 mb-6">
                <span className="flex items-center gap-1.5 text-xs font-mono-custom text-emerald-600 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Live & In Use
                </span>
                <span className="text-xs font-mono-custom text-ink-400 border border-ink-100 px-3 py-1 rounded-full">
                  CRM System
                </span>
              </div>

              <h2 className="font-display font-bold text-3xl md:text-4xl text-ink-900 leading-tight mb-4">
                Interior CRM Dashboard
              </h2>
              <p className="text-ink-500 text-base leading-relaxed mb-8">
                A live CRM system built to streamline interior design business
                operations and reduce manual coordination across teams,
                clients, and projects.
              </p>

              {/* Feature points */}
              <div className="flex flex-col gap-4 mb-10">
                {points.map((point, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -16 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 size={16} className="text-accent mt-0.5 shrink-0" />
                    <span className="text-sm text-ink-600">{point}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <motion.a
                href="https://unmatrix.nextgentech.ltd/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="group/btn self-start flex items-center gap-2 px-7 py-3 bg-ink-900 text-cream-100 rounded-full text-sm font-medium shadow-premium-md hover:bg-ink-800 transition-all duration-200"
              >
                <ExternalLink size={14} />
                View Live
                <ArrowUpRight
                  size={14}
                  className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-200"
                />
              </motion.a>
            </div>

            {/* Visual side */}
            <div className="relative bg-gradient-to-br from-cream-200 via-cream-100 to-white lg:min-h-[480px] overflow-hidden flex items-center justify-center p-10">
              {/* Abstract CRM visual */}
              <div className="w-full max-w-sm">
                {/* Mock dashboard card */}
                <div className="bg-white rounded-2xl shadow-premium-lg border border-ink-100 p-5 mb-3">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-400" />
                      <span className="text-xs font-mono-custom text-ink-500">Active Projects</span>
                    </div>
                    <span className="text-xs font-mono-custom text-ink-400">Live</span>
                  </div>
                  <div className="text-3xl font-display font-bold text-ink-900 mb-1">24</div>
                  <div className="text-xs text-emerald-600 font-medium">↑ 18% this month</div>
                  {/* Progress bars */}
                  <div className="mt-4 flex flex-col gap-2">
                    {[80, 60, 45, 90].map((w, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="flex-1 h-1.5 bg-ink-100 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={inView ? { width: `${w}%` } : {}}
                            transition={{ delay: 0.6 + i * 0.1, duration: 0.8 }}
                            className="h-full bg-gradient-to-r from-accent to-accent-dark rounded-full"
                          />
                        </div>
                        <span className="text-xs font-mono-custom text-ink-400 w-7">{w}%</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mini stat cards */}
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { label: "Clients", value: "48" },
                    { label: "Tasks Done", value: "312" },
                    { label: "Teams", value: "6" },
                    { label: "Manual Work", value: "−70%" },
                  ].map((s) => (
                    <div
                      key={s.label}
                      className="bg-white rounded-xl p-3 border border-ink-100 shadow-premium-sm"
                    >
                      <div className="text-xs text-ink-400 font-mono-custom mb-1">{s.label}</div>
                      <div className="font-display font-bold text-ink-900 text-lg">{s.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Decorative blur */}
              <div
                className="absolute -top-20 -right-20 w-64 h-64 rounded-full pointer-events-none"
                style={{
                  background: "radial-gradient(circle, rgba(200,169,126,0.15) 0%, transparent 70%)",
                  filter: "blur(30px)",
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
