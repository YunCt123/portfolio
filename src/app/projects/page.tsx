"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Calendar,
  Sparkles,
  Play,
  Database,
} from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function ProjectsPage() {
  const { projects } = portfolioData;
  const [filter, setFilter] = useState<string>("all");

  const filteredProjects = projects.filter((p) => {
    if (filter === "live") return p.isLive;
    if (filter === "archived") return !p.isLive;
    return true;
  });

  return (
    <div className="py-12 md:py-20 space-y-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-zinc-200 dark:border-zinc-800/80 pb-8">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-xs font-mono font-medium">
              <Sparkles size={13} />
              <span>Production Systems & Applications</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-zinc-950 dark:text-zinc-100 tracking-tight">
              Featured Projects
            </h1>
            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Real-world software engineering solutions built for education,
              mobility, and university ecosystems. Test the live production platform
              for Rex English directly in our Live Demo studio.
            </p>
          </div>

          {/* Quick Filter Pills */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => setFilter("all")}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all ${
                filter === "all"
                  ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 font-semibold shadow-xs"
                  : "bg-zinc-100 dark:bg-zinc-800/80 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
              }`}
            >
              All Projects ({projects.length})
            </button>
            <button
              onClick={() => setFilter("live")}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all ${
                filter === "live"
                  ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 font-semibold shadow-xs"
                  : "bg-zinc-100 dark:bg-zinc-800/80 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
              }`}
            >
              Active Live Demo (1)
            </button>
            <button
              onClick={() => setFilter("archived")}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all ${
                filter === "archived"
                  ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 font-semibold shadow-xs"
                  : "bg-zinc-100 dark:bg-zinc-800/80 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
              }`}
            >
              Archived Specs (3)
            </button>
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-white dark:bg-zinc-900/80 border border-zinc-200/90 dark:border-zinc-800 shadow-sm hover:shadow-xl hover:border-cyan-500/40 dark:hover:border-zinc-700/80 transition-all duration-300 bento-card overflow-hidden"
            >
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-44 h-44 bg-gradient-to-bl from-cyan-500/10 via-transparent to-transparent rounded-bl-full pointer-events-none group-hover:from-cyan-500/20 transition-all duration-500" />

              <div className="space-y-5">
                {/* Meta header: Index + Period + Role */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
                      0{index + 1}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] font-mono text-zinc-500 dark:text-zinc-400">
                      <Calendar size={12} />
                      {project.period}
                    </span>
                  </div>

                  {project.isLive ? (
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span>Live Production</span>
                    </span>
                  ) : (
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-500 font-medium flex items-center gap-1">
                      <Database size={11} />
                      <span>DB Closed / Archived</span>
                    </span>
                  )}
                </div>

                {/* Project Title & Category */}
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h2>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400 font-medium">
                      {project.role}
                    </span>
                    <span className="text-zinc-400">•</span>
                    <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
                      {project.type}
                    </span>
                  </div>
                </div>

                {/* Problem Statement & Architecture */}
                <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-100 dark:border-zinc-800/60 space-y-1">
                  <div className="text-[11px] font-mono font-semibold uppercase text-zinc-400 dark:text-zinc-500">
                    Challenge & Architectural Solution
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Key Technical Highlights (Bullets) */}
                <div className="space-y-2">
                  <div className="text-[11px] font-mono font-semibold uppercase text-zinc-400 dark:text-zinc-500">
                    Key Technical Highlights
                  </div>
                  <ul className="space-y-2 text-xs text-zinc-600 dark:text-zinc-300">
                    {project.highlights.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-cyan-500 mt-0.5 shrink-0">✦</span>
                        <span className="leading-snug">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Tags */}
                <div className="pt-2">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-[11px] font-mono rounded-lg bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700/60 text-zinc-700 dark:text-zinc-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons: ONLY Live Demo for Rex, or status info for archived projects */}
              <div className="pt-6 mt-6 border-t border-zinc-100 dark:border-zinc-800/80">
                {project.isLive ? (
                  <div className="flex flex-col sm:flex-row gap-2.5">
                    <Link
                      href="/live-demo?demo=web"
                      className="flex-1 flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-semibold shadow-sm transition-all active:scale-95"
                    >
                      <Play size={13} className="fill-current" />
                      <span>Web Live Demo (Desktop)</span>
                    </Link>

                    <Link
                      href="/live-demo?demo=zalo"
                      className="flex-1 flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-sm transition-all active:scale-95"
                    >
                      <Play size={13} className="fill-current" />
                      <span>Zalo Mini App (Mobile)</span>
                    </Link>

                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center p-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-800 dark:text-zinc-200 text-xs font-semibold transition-all active:scale-95 shrink-0"
                      title="Open rexenglish.com in new tab"
                    >
                      <ExternalLink size={14} />
                    </a>
                  </div>
                ) : (
                  <div className="flex items-center justify-between p-3 rounded-xl bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-100 dark:border-zinc-800/80 text-xs">
                    <div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400 font-mono">
                      <Database size={13} className="text-amber-500 shrink-0" />
                      <span>Backend DB closed • Project archived for portfolio review</span>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
