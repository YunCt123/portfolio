"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import {
  Play,
  ArrowRight,
  Code2,
  Briefcase,
  Layers,
  Sparkles,
  Database,
} from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function HomePage() {
  const { projects } = portfolioData;

  return (
    <div className="space-y-16 pb-20">
      {/* Hero Section with Graduation Photo */}
      <HeroSection />

      {/* Live Demo Featured Banner */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="relative p-7 sm:p-10 rounded-3xl bg-gradient-to-r from-zinc-900 via-zinc-900 to-zinc-950 dark:from-zinc-900 dark:via-zinc-900 dark:to-zinc-950 text-white border border-zinc-800 shadow-2xl overflow-hidden group"
        >
          {/* Glowing ambient light */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none group-hover:bg-cyan-500/25 transition-all duration-700" />
          <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-500/40 text-cyan-400 text-xs font-mono font-semibold">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
                </span>
                <span>Live Interactive Demo</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
                Rex-English Web & Zalo Mini App Live Demos
              </h2>

              <p className="text-sm sm:text-base text-zinc-300 max-w-2xl leading-relaxed">
                Test my real-world enterprise education startup application in a live
                embedded desktop browser or interact with the mobile Zalo Mini App
                directly inside this portfolio.
              </p>

              <div className="flex flex-wrap items-center gap-2 pt-2">
                <span className="px-2.5 py-1 text-xs font-mono rounded-lg bg-zinc-800/80 border border-zinc-700 text-zinc-300">
                  rexenglish.com (Desktop)
                </span>
                <span className="px-2.5 py-1 text-xs font-mono rounded-lg bg-zinc-800/80 border border-zinc-700 text-cyan-300">
                  rex-zalomini-app (Mobile)
                </span>
                <span className="px-2.5 py-1 text-xs font-mono rounded-lg bg-zinc-800/80 border border-zinc-700 text-zinc-300">
                  ReactJS & Next.js
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex lg:justify-end">
              <Link
                href="/live-demo"
                className="inline-flex items-center gap-2.5 px-6 py-4 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-zinc-950 font-bold text-sm shadow-xl shadow-cyan-500/25 transition-all active:scale-95 group/btn"
              >
                <Play size={18} className="fill-current" />
                <span>Launch Live Demo</span>
                <ArrowRight
                  size={16}
                  className="group-hover/btn:translate-x-1 transition-transform"
                />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Multi-page Gateway Bento */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-zinc-200 dark:border-zinc-800/80 pb-6">
          <div>
            <div className="text-xs font-mono font-semibold tracking-wider uppercase text-cyan-600 dark:text-cyan-400 flex items-center gap-2">
              <Sparkles size={14} />
              <span>Explore My Portfolio</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 dark:text-zinc-100 tracking-tight mt-1">
              Dedicated Portfolio Sections
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 max-w-md">
            Click into each dedicated section below to examine technical skills,
            production projects, and career milestones.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Projects */}
          <Link
            href="/projects"
            className="group p-6 sm:p-7 rounded-3xl bg-white dark:bg-zinc-900/80 border border-zinc-200/90 dark:border-zinc-800 shadow-sm hover:shadow-xl hover:border-cyan-500/50 transition-all bento-card flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-cyan-50 dark:bg-cyan-950/60 text-cyan-500 border border-cyan-200 dark:border-cyan-800/60 flex items-center justify-center">
                <Code2 size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-cyan-500 transition-colors">
                  Featured Projects
                </h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1.5 leading-relaxed">
                  Real-world systems built with React, Next.js, and React Native,
                  featuring technical architectural breakdowns.
                </p>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between text-xs font-semibold text-cyan-600 dark:text-cyan-400">
              <span>View Projects</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Card 2: About & Skills */}
          <Link
            href="/about"
            className="group p-6 sm:p-7 rounded-3xl bg-white dark:bg-zinc-900/80 border border-zinc-200/90 dark:border-zinc-800 shadow-sm hover:shadow-xl hover:border-cyan-500/50 transition-all bento-card flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 dark:bg-amber-950/60 text-amber-500 border border-amber-200 dark:border-amber-800/60 flex items-center justify-center">
                <Layers size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-amber-500 transition-colors">
                  Skills & Bio
                </h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1.5 leading-relaxed">
                  Detailed breakdown of Frontend engineering, programming languages,
                  database tools, and professional UI/UX certifications.
                </p>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between text-xs font-semibold text-amber-600 dark:text-amber-400">
              <span>Explore Skills Matrix</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Card 3: Experience & Education */}
          <Link
            href="/experience"
            className="group p-6 sm:p-7 rounded-3xl bg-white dark:bg-zinc-900/80 border border-zinc-200/90 dark:border-zinc-800 shadow-sm hover:shadow-xl hover:border-cyan-500/50 transition-all bento-card flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-500 border border-emerald-200 dark:border-emerald-800/60 flex items-center justify-center">
                <Briefcase size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-emerald-500 transition-colors">
                  Experience & Education
                </h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1.5 leading-relaxed">
                  Enterprise experience at FPT Software, physical AI data collection at
                  Open Graph Labs, and Bachelor of Software Engineering at FPT University.
                </p>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between text-xs font-semibold text-emerald-600 dark:text-emerald-400">
              <span>View Career Timeline</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </div>
      </section>

      {/* Featured Projects Preview Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800/80 pb-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 dark:text-zinc-100 tracking-tight">
              Projects Showcase
            </h2>
            <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-1">
              Select any project to inspect technical achievements or launch live demo
            </p>
          </div>
          <Link
            href="/projects"
            className="text-xs font-semibold text-cyan-600 dark:text-cyan-400 hover:underline flex items-center gap-1"
          >
            <span>View All</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.slice(0, 2).map((project, idx) => (
            <div
              key={project.id}
              className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-zinc-900/80 border border-zinc-200/90 dark:border-zinc-800 shadow-sm flex flex-col justify-between bento-card space-y-5"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
                    0{idx + 1} • {project.period}
                  </span>
                  {project.isLive ? (
                    <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 font-semibold">
                      Live Production
                    </span>
                  ) : (
                    <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-500">
                      DB Closed
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400 mt-1">
                    {project.type}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[11px] font-mono rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action */}
              <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800">
                {project.isLive ? (
                  <div className="flex flex-col sm:flex-row gap-2">
                    <Link
                      href="/live-demo?demo=web"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-semibold transition-all shadow-sm active:scale-95"
                    >
                      <Play size={13} className="fill-current" />
                      <span>Web Demo (Desktop)</span>
                    </Link>

                    <Link
                      href="/live-demo?demo=zalo"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-all shadow-sm active:scale-95"
                    >
                      <Play size={13} className="fill-current" />
                      <span>Zalo App (Mobile)</span>
                    </Link>
                  </div>
                ) : (
                  <div className="w-full flex items-center justify-between p-2 rounded-xl bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-100 dark:border-zinc-800/80 text-xs text-zinc-500 font-mono">
                    <span className="flex items-center gap-1.5">
                      <Database size={13} className="text-amber-500" />
                      <span>Backend database decommissioned</span>
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
