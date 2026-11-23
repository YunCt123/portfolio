"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Github,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Play,
  Code2,
} from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import Image from "next/image";

export default function HeroSection() {
  const { personal } = portfolioData;

  return (
    <section className="relative overflow-hidden pt-10 pb-16 md:pt-16 md:pb-24">
      {/* Subtle tech background glowing orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[320px] bg-gradient-to-tr from-cyan-500/10 via-blue-500/10 to-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute -top-24 right-10 w-72 h-72 bg-cyan-400/5 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Text & CTAs (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Status chip */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/80 text-emerald-700 dark:text-emerald-400 text-xs font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>Available for Opportunities • Junior / Mid Frontend</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <div className="text-xs sm:text-sm font-mono uppercase tracking-wider text-cyan-600 dark:text-cyan-400 font-semibold flex items-center gap-2">
                <Code2 size={16} />
                <span>{personal.role} & UI/UX Specialist</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-950 dark:text-white leading-[1.1]">
                Hello, I&apos;m{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 dark:from-cyan-400 dark:via-blue-400 dark:to-indigo-400">
                  {personal.name}
                </span>
              </h1>
              <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 font-medium">
                {personal.focus} • {personal.location}
              </p>
            </div>

            {/* Bio summary */}
            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-xl">
              {personal.bio}
            </p>

            {/* Quick Skills Pills */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              {personal.heroPills.map((pill) => (
                <span
                  key={pill}
                  className="px-2.5 py-1 text-xs font-mono rounded-lg bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-300 shadow-2xs"
                >
                  {pill}
                </span>
              ))}
            </div>

            {/* Action Buttons (CTAs) */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              {/* Explore Projects */}
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-medium text-sm shadow-md shadow-cyan-600/20 hover:shadow-cyan-600/30 transition-all active:scale-95"
              >
                <span>Explore Projects</span>
                <ArrowRight size={16} />
              </Link>

              {/* Live Demo: Rex English */}
              <Link
                href="/live-demo"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-600 dark:text-cyan-400 font-medium text-sm transition-all active:scale-95"
              >
                <Play size={14} className="fill-current" />
                <span>Live Demo (Rex English)</span>
              </Link>

              {/* Contact Button */}
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-900 dark:text-zinc-100 font-medium text-sm border border-zinc-200 dark:border-zinc-800 shadow-sm transition-all active:scale-95"
              >
                <Mail size={15} />
                <span>Contact Me</span>
              </Link>
            </div>

            {/* Social & Contact Icons */}
            <div className="flex flex-wrap items-center gap-3 pt-2 text-zinc-500 dark:text-zinc-400 text-xs">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800/80 hover:border-zinc-400 dark:hover:border-zinc-600 hover:text-zinc-950 dark:hover:text-white transition-all bg-white/50 dark:bg-zinc-900/50"
              >
                <Github size={15} />
                <span className="font-mono">{personal.githubUsername}</span>
              </a>

              <a
                href={`mailto:${personal.email}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800/80 hover:border-zinc-400 dark:hover:border-zinc-600 hover:text-zinc-950 dark:hover:text-white transition-all bg-white/50 dark:bg-zinc-900/50"
              >
                <Mail size={15} />
                <span>{personal.email}</span>
              </a>

              <a
                href={`tel:${personal.phone}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800/80 hover:border-zinc-400 dark:hover:border-zinc-600 hover:text-zinc-950 dark:hover:text-white transition-all bg-white/50 dark:bg-zinc-900/50"
              >
                <Phone size={14} />
                <span>{personal.phone}</span>
              </a>

              <div className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-zinc-500 dark:text-zinc-400">
                <MapPin size={14} />
                <span>{personal.location}</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bento Profile Card with uploaded photo (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-5"
          >
            <div className="relative p-6 sm:p-7 rounded-3xl bg-white dark:bg-zinc-900/90 border border-zinc-200/90 dark:border-zinc-800 shadow-xl shadow-zinc-900/5 dark:shadow-cyan-950/20 backdrop-blur-sm overflow-hidden group">
              {/* Corner decorative accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-cyan-500/15 via-blue-500/10 to-transparent rounded-bl-full pointer-events-none" />

              {/* Top card bar */}
              <div className="flex items-center justify-between pb-5 border-b border-zinc-100 dark:border-zinc-800/80">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-400/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400/80" />
                  <span className="font-mono text-[11px] text-zinc-400 dark:text-zinc-500 ml-2">
                    ~/developer/profile.ts
                  </span>
                </div>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-cyan-600 dark:text-cyan-400">
                  FPT University
                </span>
              </div>

              {/* Developer Avatar & Quick Specs */}
              <div className="pt-6 flex flex-col sm:flex-row items-center sm:items-start gap-5">
                <div className="relative shrink-0">
                  <div className="w-28 h-36 sm:w-32 sm:h-40 rounded-2xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-600 p-[2px] shadow-lg shadow-cyan-500/20 overflow-hidden">
                    <div className="w-full h-full rounded-[14px] overflow-hidden bg-zinc-900 relative">
                      <Image
                        src="/profile.jpg"
                        alt={personal.name}
                        width={200}
                        height={260}
                        className="object-cover w-full h-full object-top group-hover:scale-105 transition-transform duration-300"
                        priority
                      />
                    </div>
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-zinc-900 border-2 border-white dark:border-zinc-900 flex items-center justify-center text-[10px] text-white">
                    🎓
                  </div>
                </div>

                <div className="flex-1 text-center sm:text-left space-y-1.5">
                  <h2 className="font-bold text-lg text-zinc-900 dark:text-zinc-100">
                    {personal.name}
                  </h2>
                  <p className="text-xs font-mono text-cyan-600 dark:text-cyan-400">
                    Software Engineering Graduate
                  </p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                    FPT University graduate. Experienced in building responsive web
                    applications using React 19, TypeScript, Vite, and Zustand.
                  </p>
                </div>
              </div>

              {/* Recruiter Quick Metrics */}
              <div className="grid grid-cols-2 gap-3 mt-6 pt-5 border-t border-zinc-100 dark:border-zinc-800/80">
                <Link
                  href="/projects"
                  className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-100 dark:border-zinc-800/60 hover:border-cyan-500/50 transition-colors group/box"
                >
                  <div className="text-[11px] text-zinc-500 dark:text-zinc-400 font-mono flex items-center justify-between">
                    <span>Projects</span>
                    <ArrowRight size={12} className="group-hover/box:translate-x-0.5 transition-transform" />
                  </div>
                  <div className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mt-0.5">
                    04 Projects
                  </div>
                  <div className="text-[10px] text-cyan-600 dark:text-cyan-400 mt-0.5">
                    Web & Mobile Systems
                  </div>
                </Link>

                <Link
                  href="/experience"
                  className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-100 dark:border-zinc-800/60 hover:border-cyan-500/50 transition-colors group/box"
                >
                  <div className="text-[11px] text-zinc-500 dark:text-zinc-400 font-mono flex items-center justify-between">
                    <span>Experience</span>
                    <ArrowRight size={12} className="group-hover/box:translate-x-0.5 transition-transform" />
                  </div>
                  <div className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mt-0.5">
                    FPT Software
                  </div>
                  <div className="text-[10px] text-emerald-600 dark:text-emerald-400 mt-0.5">
                    Enterprise React 19
                  </div>
                </Link>
              </div>

              {/* Bottom fast CTA */}
              <div className="mt-4 pt-3 flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400 font-mono">
                <span>📍 Ho Chi Minh City</span>
                <span className="text-emerald-600 dark:text-emerald-400 flex items-center gap-1 font-sans font-medium">
                  ● Full-time Ready
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
