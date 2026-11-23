"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp, Github, Mail, Phone, Code2 } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Footer() {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800/80 bg-white/50 dark:bg-zinc-950/50 backdrop-blur-sm py-12 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand info */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-600 p-[1px]">
              <div className="w-full h-full bg-white dark:bg-zinc-950 rounded-[11px] flex items-center justify-center">
                <span className="font-mono text-xs font-bold text-zinc-900 dark:text-zinc-100">
                  DA
                </span>
              </div>
            </div>
            <div>
              <div className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
                {personal.name}
              </div>
              <div className="text-xs text-zinc-500 font-mono">
                {personal.role} • {personal.location}
              </div>
            </div>
          </div>

          {/* Quick Page Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-zinc-600 dark:text-zinc-400">
            <Link href="/" className="hover:text-cyan-500 transition-colors">
              Home
            </Link>
            <Link href="/about" className="hover:text-cyan-500 transition-colors">
              About & Skills
            </Link>
            <Link href="/projects" className="hover:text-cyan-500 transition-colors">
              Projects
            </Link>
            <Link href="/live-demo" className="text-cyan-500 font-semibold hover:underline">
              Live Demo
            </Link>
            <Link href="/experience" className="hover:text-cyan-500 transition-colors">
              Experience
            </Link>
            <Link href="/contact" className="hover:text-cyan-500 transition-colors">
              Contact
            </Link>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="p-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:border-zinc-400 dark:hover:border-zinc-700 transition-colors"
            >
              <Github size={16} />
            </a>
            <a
              href={`mailto:${personal.email}`}
              aria-label="Send email"
              className="p-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:border-zinc-400 dark:hover:border-zinc-700 transition-colors"
            >
              <Mail size={16} />
            </a>
            <a
              href={`tel:${personal.phone}`}
              aria-label="Call phone"
              className="p-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:border-zinc-400 dark:hover:border-zinc-700 transition-colors"
            >
              <Phone size={15} />
            </a>

            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="p-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors ml-2"
              title="Back to top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>

        {/* Divider & Credits */}
        <div className="pt-6 border-t border-zinc-100 dark:border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 dark:text-zinc-400 gap-3 font-mono">
          <div>
            © {new Date().getFullYear()} {personal.name}. All verified portfolio data.
          </div>
          <div className="flex items-center gap-1.5">
            <Code2 size={13} className="text-cyan-500" />
            <span>Next.js 15 App Router • Tailwind CSS v4 • Framer Motion</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
