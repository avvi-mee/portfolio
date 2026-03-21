"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Linkedin, Github, Instagram, ArrowUpRight, Mail } from "lucide-react";

const socials = [
  {
    label: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com",
    description: "Professional network",
    color: "#0A66C2",
  },
  {
    label: "GitHub",
    icon: Github,
    href: "https://github.com",
    description: "Code & projects",
    color: "#24292F",
  },
  {
    label: "Instagram",
    icon: Instagram,
    href: "https://instagram.com",
    description: "Behind the build",
    color: "#E1306C",
  },
];

export default function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} id="contact" className="relative py-24 md:py-32 px-6">
      {/* Section label */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto mb-5 flex items-center gap-4"
      >
        <span className="text-xs font-mono-custom tracking-[0.2em] text-ink-400 uppercase">
          05 / Contact
        </span>
        <div className="flex-1 h-px bg-ink-100" />
      </motion.div>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: CTA text */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-bold text-4xl md:text-5xl text-ink-900 leading-tight mb-5"
            >
              Let's build{" "}
              <span className="gradient-text-accent">something</span>{" "}
              real.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-ink-500 text-base leading-relaxed mb-8 max-w-md"
            >
              Have a workflow problem, a product idea, or want to discuss
              building systems together? Reach out — I respond fast.
            </motion.p>

            {/* Email CTA */}
            <motion.a
              href="mailto:hello@unmatrix.com"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-ink-900 text-cream-100 rounded-full text-sm font-medium shadow-premium-md hover:bg-ink-800 transition-all duration-200"
            >
              <Mail size={16} />
              Get in Touch
              <ArrowUpRight
                size={14}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
              />
            </motion.a>
          </div>

          {/* Right: Social links */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xs font-mono-custom tracking-widest text-ink-400 uppercase mb-6"
            >
              Find me on
            </motion.p>
            <div className="flex flex-col gap-3">
              {socials.map((social, i) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.25 + i * 0.1 }}
                    whileHover={{ x: 4 }}
                    className="group flex items-center justify-between bg-white border border-ink-100 rounded-2xl px-6 py-4 shadow-premium-sm hover:shadow-premium-md hover:border-ink-200 transition-all duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center"
                        style={{ backgroundColor: social.color + "12" }}
                      >
                        <Icon size={18} style={{ color: social.color }} />
                      </div>
                      <div>
                        <div className="font-display font-semibold text-ink-900 text-sm">
                          {social.label}
                        </div>
                        <div className="text-xs text-ink-400">{social.description}</div>
                      </div>
                    </div>
                    <ArrowUpRight
                      size={16}
                      className="text-ink-300 group-hover:text-ink-700 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
                    />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="max-w-6xl mx-auto mt-24 pt-8 border-t border-ink-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
      >
        <div className="font-display font-bold text-xl text-ink-900">
          <span className="gradient-text-accent">A.</span>
        </div>
        <p className="text-xs font-mono-custom text-ink-400">
          © {new Date().getFullYear()} Aviraj · Founder, Unmatrix
        </p>
        <p className="text-xs font-mono-custom text-ink-400">
          Built with Next.js & Tailwind
        </p>
      </motion.div>
    </section>
  );
}
