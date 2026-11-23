"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Code2,
  Terminal,
  Sparkles,
  Award,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function AboutPage() {
  const { skills, certifications } = portfolioData;

  return (
    <div className="py-12 md:py-20 space-y-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
        {/* Page Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-xs font-mono font-medium">
            <Sparkles size={13} />
            <span>Profile & Core Competencies</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-zinc-950 dark:text-zinc-100 tracking-tight">
            About Me & Technical Skills
          </h1>
          <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            I specialize in crafting high-speed, scalable web applications with
            ReactJS, Next.js, TypeScript, and Tailwind CSS, maintaining a strong focus
            on UI/UX fidelity and maintainable frontend architecture.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Bento Card 1: Core Profile (Span 7) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="md:col-span-7 p-6 sm:p-8 rounded-3xl bg-white dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 shadow-sm bento-card relative overflow-hidden flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-semibold text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/60 px-3 py-1 rounded-full border border-cyan-200 dark:border-cyan-800/60">
                  Engineering Philosophy
                </span>
                <span className="text-xs text-zinc-400 dark:text-zinc-500 font-mono">
                  FPT University (2023 – 2026)
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-100 leading-snug">
                Building user-centric, high-performance interfaces with modern React technologies.
              </h2>

              <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                As a passionate Frontend Developer, I emphasize strict TypeScript typing,
                reusable component design systems, and seamless state management. During my
                internship at <strong className="text-cyan-600 dark:text-cyan-400">FPT Software</strong>,
                I engineered an enterprise Request Management System with React 19, Vite,
                Zustand, and Framer Motion.
              </p>

              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Currently, I also serve as a Data Operator at Open Graph Labs, collecting and
                synchronizing multimodal sensor and vision data for humanoid robot and physical AI
                systems.
              </p>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-6 mt-6 border-t border-zinc-100 dark:border-zinc-800/80">
              <div className="p-3 rounded-2xl bg-zinc-50 dark:bg-zinc-950/50 border border-zinc-100 dark:border-zinc-800/60">
                <div className="text-[11px] text-zinc-500 font-mono">English Level</div>
                <div className="text-sm font-bold text-zinc-900 dark:text-zinc-100 mt-0.5">
                  IELTS 5.5
                </div>
                <div className="text-[11px] text-zinc-400">Intermediate Working</div>
              </div>

              <div className="p-3 rounded-2xl bg-zinc-50 dark:bg-zinc-950/50 border border-zinc-100 dark:border-zinc-800/60">
                <div className="text-[11px] text-zinc-500 font-mono">Platforms</div>
                <div className="text-sm font-bold text-zinc-900 dark:text-zinc-100 mt-0.5">
                  Web & Mobile
                </div>
                <div className="text-[11px] text-zinc-400">React & React Native</div>
              </div>

              <div className="col-span-2 sm:col-span-1 p-3 rounded-2xl bg-zinc-50 dark:bg-zinc-950/50 border border-zinc-100 dark:border-zinc-800/60">
                <div className="text-[11px] text-zinc-500 font-mono">Status</div>
                <div className="text-sm font-bold text-emerald-600 dark:text-emerald-400 mt-0.5 flex items-center gap-1">
                  <CheckCircle2 size={14} />
                  <span>Available</span>
                </div>
                <div className="text-[11px] text-zinc-400">Full-time / Intern</div>
              </div>
            </div>
          </motion.div>

          {/* Bento Card 2: Frontend Engineering Stack (Span 5) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="md:col-span-5 p-6 sm:p-7 rounded-3xl bg-white dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 shadow-sm bento-card flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-zinc-100 dark:border-zinc-800/80">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-cyan-50 dark:bg-cyan-950/60 text-cyan-500">
                    <Code2 size={18} />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-zinc-900 dark:text-zinc-100">
                      Frontend Core Stack
                    </h3>
                    <p className="text-[11px] text-zinc-400">
                      Primary production technologies
                    </p>
                  </div>
                </div>
                <span className="text-[11px] font-mono text-cyan-600 dark:text-cyan-400">
                  9 Core Tools
                </span>
              </div>

              <div className="flex flex-wrap gap-2 pt-4">
                {skills[0].skills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`inline-flex items-center px-3 py-1.5 rounded-xl text-xs font-medium font-mono transition-all ${
                      skill.highlight
                        ? "bg-cyan-500/10 border border-cyan-500/30 text-cyan-700 dark:text-cyan-300 shadow-xs"
                        : "bg-zinc-100 dark:bg-zinc-800/70 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300"
                    }`}
                  >
                    {skill.highlight && (
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mr-1.5" />
                    )}
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800/80 text-xs text-zinc-500 dark:text-zinc-400">
              <span className="font-mono text-zinc-700 dark:text-zinc-300">
                UI & Motion: Tailwind CSS, Ant Design, Framer Motion
              </span>
            </div>
          </motion.div>

          {/* Bento Card 3: Programming Languages & Backend/DB (Span 6) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="md:col-span-6 p-6 sm:p-7 rounded-3xl bg-white dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 shadow-sm bento-card space-y-5"
          >
            <div className="flex items-center gap-2.5 pb-3 border-b border-zinc-100 dark:border-zinc-800/80">
              <div className="p-1.5 rounded-lg bg-amber-50 dark:bg-amber-950/60 text-amber-500">
                <Terminal size={18} />
              </div>
              <div>
                <h3 className="font-bold text-base text-zinc-900 dark:text-zinc-100">
                  Languages & Backend Integration
                </h3>
                <p className="text-[11px] text-zinc-400">
                  Programming languages and API communication
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <div className="text-xs font-mono text-zinc-500 dark:text-zinc-400 mb-2">
                  Programming Languages:
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills[1].skills.map((s) => (
                    <span
                      key={s.name}
                      className="px-3 py-1.5 rounded-xl text-xs font-mono font-medium bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200"
                    >
                      {s.name}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <div className="text-xs font-mono text-zinc-500 dark:text-zinc-400 mb-2">
                  Backend & Database:
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills[2].skills.map((s) => (
                    <span
                      key={s.name}
                      className="px-3 py-1.5 rounded-xl text-xs font-mono font-medium bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-300"
                    >
                      {s.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bento Card 4: Tools & Professional Certifications (Span 6) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="md:col-span-6 p-6 sm:p-7 rounded-3xl bg-white dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 shadow-sm bento-card space-y-5"
          >
            <div className="flex items-center gap-2.5 pb-3 border-b border-zinc-100 dark:border-zinc-800/80">
              <div className="p-1.5 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-500">
                <Award size={18} />
              </div>
              <div>
                <h3 className="font-bold text-base text-zinc-900 dark:text-zinc-100">
                  Tools & Professional Certifications
                </h3>
                <p className="text-[11px] text-zinc-400">
                  Engineering tooling and verified credentials
                </p>
              </div>
            </div>

            <div>
              <div className="text-xs font-mono text-zinc-500 dark:text-zinc-400 mb-2">
                Daily Development Tools:
              </div>
              <div className="flex flex-wrap gap-2">
                {skills[3].skills.map((s) => (
                  <span
                    key={s.name}
                    className="px-3 py-1.5 rounded-xl text-xs font-mono bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200"
                  >
                    {s.name}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <div className="text-xs font-mono text-zinc-500 dark:text-zinc-400 mb-2">
                Official Certifications:
              </div>
              <div className="space-y-2">
                {certifications.map((cert) => (
                  <div
                    key={cert.name}
                    className="flex items-center justify-between p-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-100 dark:border-zinc-800/80 text-xs"
                  >
                    <div className="flex items-center gap-2 truncate pr-2">
                      <Award
                        size={14}
                        className={cert.highlight ? "text-cyan-500" : "text-zinc-400"}
                      />
                      <span className="font-medium text-zinc-800 dark:text-zinc-200 truncate">
                        {cert.name}
                      </span>
                    </div>
                    <span className="font-mono text-[11px] text-zinc-400 whitespace-nowrap">
                      {cert.date}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Navigation Link */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-zinc-200 dark:border-zinc-800">
          <Link
            href="/experience"
            className="text-xs font-semibold text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white flex items-center gap-1.5"
          >
            <span>Next: Career Experience & Education</span>
            <ArrowRight size={14} />
          </Link>

          <Link
            href="/live-demo"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-semibold transition-all shadow-sm"
          >
            <span>Launch Live Demo Studio</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}
