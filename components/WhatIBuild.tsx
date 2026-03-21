"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Workflow, LayoutDashboard, Bot, Zap } from "lucide-react";

const items = [
  {
    icon: Workflow,
    title: "Workflow Automation Systems",
    description:
      "End-to-end automation pipelines that eliminate repetitive tasks and let teams focus on what actually matters.",
    tags: ["N8N", "API Integration", "Triggers"],
  },
  {
    icon: LayoutDashboard,
    title: "CRM Dashboards",
    description:
      "Custom-built dashboards that centralize client data, project tracking, and team operations into one coherent system.",
    tags: ["Next.js", "Real-time", "Live Data"],
  },
  {
    icon: Bot,
    title: "AI Assistants",
    description:
      "Intelligent assistants tailored to specific workflows — from document interaction to decision-making support.",
    tags: ["LLM", "RAG", "Privacy-first"],
  },
  {
    icon: Zap,
    title: "Rapid Prototypes",
    description:
      "From idea to working product in days, not months. Validating concepts fast before full-scale investment.",
    tags: ["MVP", "Fast Iteration", "Production-ready"],
  },
];

export default function WhatIBuild() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} id="build" className="relative py-24 md:py-32 px-6">
      {/* Section label */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto mb-5 flex items-center gap-4"
      >
        <span className="text-xs font-mono-custom tracking-[0.2em] text-ink-400 uppercase">
          02 / What I Build
        </span>
        <div className="flex-1 h-px bg-ink-100" />
      </motion.div>

      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display font-bold text-4xl md:text-5xl text-ink-900 mb-16 max-w-lg leading-tight"
        >
          Systems that{" "}
          <span className="gradient-text-accent">actually work.</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 + i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="group relative bg-white rounded-2xl p-8 border border-ink-100 shadow-premium-sm card-premium overflow-hidden"
              >
                {/* Hover background */}
                <div className="absolute inset-0 bg-gradient-to-br from-cream-200/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

                {/* Icon */}
                <div className="relative mb-6">
                  <div className="w-12 h-12 rounded-xl bg-cream-200 flex items-center justify-center group-hover:bg-accent/15 transition-colors duration-300">
                    <Icon size={22} className="text-ink-700 group-hover:text-accent transition-colors duration-300" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-display font-bold text-xl text-ink-900 mb-3 leading-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-ink-500 leading-relaxed mb-5">{item.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono-custom text-ink-500 bg-cream-100 border border-ink-100 px-2.5 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-24 h-24 rounded-bl-3xl bg-gradient-to-bl from-accent/6 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
