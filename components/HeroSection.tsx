"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown } from "lucide-react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16 overflow-hidden"
      id="hero"
    >
      {/* Background gradient blobs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(200,169,126,0.10) 0%, rgba(237,229,218,0.06) 50%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
        <div
          className="absolute top-1/3 left-1/4 w-[400px] h-[400px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(200,169,126,0.06) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
      </div>

      <motion.div
        style={{ y, opacity }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto text-center"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="flex justify-center mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/8 text-xs font-mono-custom text-ink-600 tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            Available for projects
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={itemVariants}
          className="font-display font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-ink-900 leading-[1.05] tracking-tight mb-6"
        >
          I build systems that{" "}
          <span className="relative inline-block">
            <span className="gradient-text-accent">reduce</span>
          </span>{" "}
          <br className="hidden sm:block" />
          manual work.
        </motion.h1>

        {/* Subtext */}
        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg md:text-xl text-ink-500 max-w-2xl mx-auto leading-relaxed mb-10 font-light"
        >
          Founder of{" "}
          <span className="font-medium text-ink-700 border-b border-accent/50">Unmatrix</span>
          . Focused on execution, rapid prototyping, and building scalable
          digital solutions for real-world workflows.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="#work"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="group flex items-center gap-2 px-8 py-3.5 bg-ink-900 text-cream-100 rounded-full text-sm font-medium shadow-premium-md hover:bg-ink-800 transition-colors duration-200"
          >
            View Work
            <ArrowDown
              size={14}
              className="group-hover:translate-y-0.5 transition-transform duration-200"
            />
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 px-8 py-3.5 bg-white text-ink-900 rounded-full text-sm font-medium border border-ink-200 shadow-premium-sm hover:border-accent/40 hover:shadow-glow-accent transition-all duration-300"
          >
            Contact
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={itemVariants}
          className="mt-20 flex flex-col items-center gap-2 text-ink-400"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="w-5 h-8 rounded-full border border-ink-200 flex items-start justify-center pt-1.5"
          >
            <div className="w-1 h-2 rounded-full bg-ink-300" />
          </motion.div>
          <span className="text-xs font-mono-custom tracking-widest">SCROLL</span>
        </motion.div>
      </motion.div>

      {/* Floating stats */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.7 }}
        className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-6"
      >
        {[
          { value: "3+", label: "Live Systems" },
          { value: "100%", label: "Execution" },
          { value: "Real", label: "Impact" },
        ].map((stat) => (
          <div key={stat.label} className="text-right">
            <div className="font-display font-bold text-2xl text-ink-900">{stat.value}</div>
            <div className="text-xs text-ink-400 font-mono-custom tracking-wider">{stat.label}</div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
