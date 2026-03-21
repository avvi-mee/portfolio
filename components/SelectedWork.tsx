"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Lock, Workflow, ArrowUpRight } from "lucide-react";

const projects = [
  {
    icon: Lock,
    number: "01",
    title: "AI Banking Assistant",
    category: "AI / Document Intelligence",
    description:
      "A privacy-first AI assistant enabling secure, intelligent document interaction for banking workflows. Built to handle sensitive financial documents without data exposure.",
    features: ["On-premise deployment", "Document Q&A", "Zero data leakage", "RAG architecture"],
    status: "Private",
    color: "from-slate-50 to-blue-50/30",
    accent: "#6366F1",
  },
  {
    icon: Workflow,
    number: "02",
    title: "Workflow Automation Systems",
    category: "Automation / Integration",
    description:
      "Custom automation pipelines connecting disparate tools and APIs, eliminating manual handoffs and reducing operational overhead across business workflows.",
    features: ["Multi-step automations", "API orchestration", "Trigger-based flows", "Error handling"],
    status: "Ongoing",
    color: "from-amber-50/40 to-cream-200/30",
    accent: "#C8A97E",
  },
];

export default function SelectedWork() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} id="selected-work" className="relative py-24 md:py-32 px-6">
      {/* Section label */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto mb-5 flex items-center gap-4"
      >
        <span className="text-xs font-mono-custom tracking-[0.2em] text-ink-400 uppercase">
          03 / Selected Work
        </span>
        <div className="flex-1 h-px bg-ink-100" />
      </motion.div>

      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display font-bold text-4xl md:text-5xl text-ink-900 mb-16 max-w-xl leading-tight"
        >
          Built with{" "}
          <span className="gradient-text-accent">purpose.</span>
        </motion.h2>

        <div className="flex flex-col gap-5">
          {projects.map((project, i) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.15 + i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="group relative bg-white rounded-2xl overflow-hidden border border-ink-100 shadow-premium-sm card-premium"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-60`} />

                <div className="relative p-8 md:p-10">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    {/* Left: Number + Icon */}
                    <div className="flex items-center gap-4 md:flex-col md:items-start md:w-24 shrink-0">
                      <span className="font-mono-custom text-xs text-ink-300">{project.number}</span>
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center"
                        style={{ backgroundColor: project.accent + "18" }}
                      >
                        <Icon size={20} style={{ color: project.accent }} />
                      </div>
                    </div>

                    {/* Center: Content */}
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <h3 className="font-display font-bold text-2xl md:text-3xl text-ink-900">
                          {project.title}
                        </h3>
                        <span
                          className="text-xs font-mono-custom px-2.5 py-1 rounded-full border"
                          style={{
                            color: project.accent,
                            borderColor: project.accent + "30",
                            backgroundColor: project.accent + "10",
                          }}
                        >
                          {project.status}
                        </span>
                      </div>
                      <span className="text-xs font-mono-custom text-ink-400 tracking-wider uppercase mb-4 block">
                        {project.category}
                      </span>
                      <p className="text-sm md:text-base text-ink-500 leading-relaxed max-w-2xl mb-6">
                        {project.description}
                      </p>

                      {/* Feature tags */}
                      <div className="flex flex-wrap gap-2">
                        {project.features.map((f) => (
                          <span
                            key={f}
                            className="text-xs font-mono-custom text-ink-500 bg-white/80 border border-ink-100 px-3 py-1 rounded-full shadow-premium-sm"
                          >
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right: Arrow */}
                    <div className="hidden md:flex items-center">
                      <ArrowUpRight
                        size={20}
                        className="text-ink-300 group-hover:text-ink-700 group-hover:scale-110 transition-all duration-300"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
