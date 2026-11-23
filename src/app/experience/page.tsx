"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  Calendar,
  Sparkles,
  Award,
  Building,
  ArrowRight,
} from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function ExperiencePage() {
  const { experience, education, certifications } = portfolioData;

  return (
    <div className="py-12 md:py-20 space-y-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
        {/* Page Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-medium">
            <Sparkles size={13} />
            <span>Career Milestones & Education</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-zinc-950 dark:text-zinc-100 tracking-tight">
            Work Experience & Education
          </h1>
          <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Enterprise software development experience at FPT Software combined
            with academic training in Software Engineering at FPT University.
          </p>
        </div>

        {/* Dual Timeline Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Column 1: Work Experience (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="flex items-center gap-2.5 pb-2">
              <div className="p-2 rounded-xl bg-cyan-50 dark:bg-cyan-950/60 text-cyan-600 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-800/60">
                <Briefcase size={20} />
              </div>
              <div>
                <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                  Work Experience
                </h2>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 font-mono">
                  Enterprise Engineering & Physical AI
                </p>
              </div>
            </div>

            {/* Vertical timeline items */}
            <div className="relative pl-6 sm:pl-8 border-l-2 border-zinc-200 dark:border-zinc-800 space-y-8 ml-3">
              {experience.map((exp, index) => (
                <motion.div
                  key={exp.company + index}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="relative group"
                >
                  {/* Glowing Node on Timeline */}
                  <div
                    className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 bg-white dark:bg-zinc-950 ${
                      exp.isCurrent
                        ? "border-emerald-500 ring-4 ring-emerald-500/20"
                        : "border-cyan-500 ring-4 ring-cyan-500/20"
                    }`}
                  />

                  {/* Experience Card */}
                  <div className="p-6 rounded-3xl bg-white dark:bg-zinc-900/80 border border-zinc-200/90 dark:border-zinc-800 shadow-sm hover:shadow-md transition-shadow bento-card space-y-4">
                    {/* Role & Company Header */}
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
                            {exp.role}
                          </h3>
                          {exp.isCurrent && (
                            <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-400 font-medium">
                              Current
                            </span>
                          )}
                        </div>
                        <div className="text-sm font-semibold text-cyan-600 dark:text-cyan-400 mt-0.5 flex items-center gap-1.5">
                          <Building size={14} />
                          <span>{exp.company}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800/80 px-2.5 py-1 rounded-lg">
                        <Calendar size={12} />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    {/* Bullet Highlights */}
                    <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300">
                      {exp.highlights.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <span className="text-cyan-500 mt-1 shrink-0 font-bold">
                            ▪
                          </span>
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Column 2: Education & Certifications (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="flex items-center gap-2.5 pb-2">
              <div className="p-2 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800/60">
                <GraduationCap size={20} />
              </div>
              <div>
                <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                  Education & Credentials
                </h2>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 font-mono">
                  University Degree & Verified Certifications
                </p>
              </div>
            </div>

            {/* Vertical timeline items */}
            <div className="relative pl-6 sm:pl-8 border-l-2 border-zinc-200 dark:border-zinc-800 space-y-8 ml-3">
              {/* Education Node */}
              {education.map((edu, idx) => (
                <motion.div
                  key={edu.degree + idx}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                  className="relative group"
                >
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 border-indigo-500 ring-4 ring-indigo-500/20 bg-white dark:bg-zinc-950" />

                  <div className="p-6 rounded-3xl bg-white dark:bg-zinc-900/80 border border-zinc-200/90 dark:border-zinc-800 shadow-sm bento-card space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800/60 text-indigo-700 dark:text-indigo-300">
                        Formal University Degree
                      </span>
                      <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
                        {edu.period}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100">
                        {edu.degree}
                      </h3>
                      <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mt-0.5">
                        {edu.institution}
                      </p>
                    </div>

                    {edu.details && (
                      <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed pt-1">
                        {edu.details}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}

              {/* Certifications Node */}
              <motion.div
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.15 }}
                className="relative group"
              >
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 border-amber-500 ring-4 ring-amber-500/20 bg-white dark:bg-zinc-950" />

                <div className="p-6 rounded-3xl bg-white dark:bg-zinc-900/80 border border-zinc-200/90 dark:border-zinc-800 shadow-sm bento-card space-y-4">
                  <div className="flex items-center justify-between pb-2 border-b border-zinc-100 dark:border-zinc-800/80">
                    <span className="text-xs font-mono font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-1.5">
                      <Award size={15} className="text-amber-500" />
                      <span>Verified Certifications</span>
                    </span>
                    <span className="text-[11px] font-mono text-zinc-400">
                      3 Credentials
                    </span>
                  </div>

                  <div className="space-y-3">
                    {certifications.map((cert) => (
                      <div
                        key={cert.name}
                        className="p-3 rounded-2xl bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-100 dark:border-zinc-800/60 space-y-1"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span className="font-semibold text-xs text-zinc-900 dark:text-zinc-100">
                            {cert.name}
                          </span>
                          <span className="text-[10px] font-mono text-zinc-400 whitespace-nowrap">
                            {cert.date}
                          </span>
                        </div>
                        {cert.issuer && (
                          <div className="text-[11px] text-zinc-500 dark:text-zinc-400">
                            {cert.issuer}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-zinc-200 dark:border-zinc-800">
          <Link
            href="/projects"
            className="text-xs font-semibold text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white flex items-center gap-1.5"
          >
            <span>Next: Featured Projects</span>
            <ArrowRight size={14} />
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 text-xs font-semibold hover:bg-zinc-800 dark:hover:bg-white transition-all shadow-sm"
          >
            <span>Get in Touch</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}
