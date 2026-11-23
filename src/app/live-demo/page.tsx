"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import {
  ExternalLink,
  RotateCw,
  ShieldCheck,
  Maximize2,
  Minimize2,
  Monitor,
  Smartphone,
  CheckCircle2,
  Database,
  Sparkles,
} from "lucide-react";
import { portfolioData } from "@/data/portfolio";

function LiveDemoContent() {
  const searchParams = useSearchParams();
  const initialDemo = searchParams.get("demo") === "zalo" ? "zalo" : "web";

  const rexProject = portfolioData.projects[0]; // Rex-English
  const [activeTab, setActiveTab] = useState<"web" | "zalo">(initialDemo);
  const [isLoading, setIsLoading] = useState(false);
  const [iframeKey, setIframeKey] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const demoParam = searchParams.get("demo");
    if (demoParam === "zalo") {
      setActiveTab("zalo");
    } else if (demoParam === "web") {
      setActiveTab("web");
    }
  }, [searchParams]);

  const handleTabChange = (tab: "web" | "zalo") => {
    setIsLoading(true);
    setActiveTab(tab);
    setIframeKey((prev) => prev + 1);
    setTimeout(() => setIsLoading(false), 500);
  };

  const handleReload = () => {
    setIsLoading(true);
    setIframeKey((prev) => prev + 1);
    setTimeout(() => setIsLoading(false), 500);
  };

  const currentUrl =
    activeTab === "web"
      ? "https://rexenglish.com"
      : "https://rex-zalomini-app.vercel.app/";

  return (
    <div
      className={`space-y-8 ${
        isFullscreen
          ? "fixed inset-0 z-50 bg-zinc-950 p-4 overflow-y-auto"
          : "py-10 max-w-7xl mx-auto px-4 sm:px-6"
      }`}
    >
      {/* Top Header */}
      {!isFullscreen && (
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-zinc-200 dark:border-zinc-800/80 pb-6">
          <div className="space-y-2 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-xs font-mono font-medium">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
              </span>
              <span>Interactive Live Demo Studio</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 dark:text-zinc-100 tracking-tight">
              Rex-English Live Demonstrations
            </h1>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Experience the dual production ecosystem of Rex English: the{" "}
              <strong>Desktop Web Platform</strong> and the{" "}
              <strong>Mobile Zalo Mini App</strong>, embedded directly in this
              interactive studio.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={currentUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-semibold shadow-sm transition-all active:scale-95"
            >
              <ExternalLink size={14} />
              <span>
                Open {activeTab === "web" ? "rexenglish.com" : "Zalo Mini App"}
              </span>
            </a>
          </div>
        </div>
      )}

      {/* Demo Switcher Tabs: Web Platform (Desktop) vs Zalo Mini App (Mobile) */}
      <div className="flex flex-wrap items-center gap-3">
        {/* Tab 1: Web Platform */}
        <button
          onClick={() => handleTabChange("web")}
          className={`flex items-center gap-2.5 px-5 py-3 rounded-2xl text-xs font-medium font-mono transition-all ${
            activeTab === "web"
              ? "bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-md shadow-cyan-600/25 font-bold"
              : "bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:border-zinc-400 dark:hover:border-zinc-700"
          }`}
        >
          <Monitor size={16} />
          <span>Rex English — Web Platform (Desktop)</span>
          <span
            className={`text-[9px] uppercase px-1.5 py-0.5 rounded font-bold ${
              activeTab === "web"
                ? "bg-white/20 text-white"
                : "bg-cyan-500/10 text-cyan-500"
            }`}
          >
            Live Web
          </span>
        </button>

        {/* Tab 2: Zalo Mini App */}
        <button
          onClick={() => handleTabChange("zalo")}
          className={`flex items-center gap-2.5 px-5 py-3 rounded-2xl text-xs font-medium font-mono transition-all ${
            activeTab === "zalo"
              ? "bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-md shadow-cyan-600/25 font-bold"
              : "bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:border-zinc-400 dark:hover:border-zinc-700"
          }`}
        >
          <Smartphone size={16} />
          <span>Rex English — Zalo Mini App (Mobile)</span>
          <span
            className={`text-[9px] uppercase px-1.5 py-0.5 rounded font-bold ${
              activeTab === "zalo"
                ? "bg-white/20 text-white"
                : "bg-emerald-500/10 text-emerald-500"
            }`}
          >
            Live App
          </span>
        </button>
      </div>

      {/* Main Container */}
      <div className="space-y-4">
        {/* Browser / Frame Top Bar */}
        <div className="flex items-center justify-between gap-4 p-3.5 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm">
          {/* Traffic lights & reload */}
          <div className="flex items-center gap-2.5">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-400/90" />
              <span className="w-3 h-3 rounded-full bg-amber-400/90" />
              <span className="w-3 h-3 rounded-full bg-emerald-400/90" />
            </div>

            <button
              onClick={handleReload}
              aria-label="Reload demo"
              className="p-1.5 rounded-lg text-zinc-500 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors ml-2"
              title="Refresh frame"
            >
              <RotateCw size={14} className={isLoading ? "animate-spin" : ""} />
            </button>
          </div>

          {/* Browser Address Bar */}
          <div className="flex-1 max-w-xl mx-auto">
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-zinc-100 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-xs font-mono text-zinc-600 dark:text-zinc-400 truncate">
              <ShieldCheck size={13} className="text-emerald-500 shrink-0" />
              <span className="truncate">{currentUrl}</span>
            </div>
          </div>

          {/* Right: Mode Indicator & Fullscreen toggle */}
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 dark:text-zinc-400">
            <div className="hidden sm:flex items-center gap-1 px-2.5 py-1 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-cyan-600 dark:text-cyan-400">
              {activeTab === "web" ? (
                <>
                  <Monitor size={13} />
                  <span>Desktop Interface</span>
                </>
              ) : (
                <>
                  <Smartphone size={13} />
                  <span>Zalo Mini App (Mobile)</span>
                </>
              )}
            </div>

            <button
              onClick={() => setIsFullscreen(!isFullscreen)}
              aria-label="Toggle fullscreen"
              className="p-1.5 rounded-lg text-zinc-500 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
              title={isFullscreen ? "Exit Fullscreen" : "Fullscreen Studio"}
            >
              {isFullscreen ? <Minimize2 size={15} /> : <Maximize2 size={15} />}
            </button>
          </div>
        </div>

        {/* Viewport Render: Desktop View or Mobile Smartphone Frame */}
        <div className="flex justify-center transition-all duration-300">
          {activeTab === "web" ? (
            /* Desktop Full-width Browser Window */
            <div className="w-full rounded-3xl bg-zinc-900 border border-zinc-300 dark:border-zinc-800 shadow-2xl overflow-hidden relative">
              <div className="relative w-full h-[680px] sm:h-[800px] bg-white dark:bg-zinc-950">
                {isLoading && (
                  <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-zinc-950/80 backdrop-blur-xs text-white space-y-3">
                    <RotateCw size={24} className="animate-spin text-cyan-400" />
                    <p className="text-xs font-mono text-zinc-400">
                      Connecting to rexenglish.com...
                    </p>
                  </div>
                )}

                <iframe
                  key={`web-${iframeKey}`}
                  src="https://rexenglish.com"
                  title="Rex English Web Platform"
                  className="w-full h-full border-0 bg-white"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                  loading="lazy"
                />

                <div className="absolute bottom-4 right-4 z-10 flex items-center gap-2">
                  <a
                    href="https://rexenglish.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-2 rounded-xl bg-zinc-950/90 text-white text-xs font-mono border border-zinc-800 hover:bg-zinc-900 transition-colors flex items-center gap-2 shadow-xl backdrop-blur-sm"
                  >
                    <ExternalLink size={13} />
                    <span>Open rexenglish.com</span>
                  </a>
                </div>
              </div>
            </div>
          ) : (
            /* Smartphone Mockup Frame for Zalo Mini App */
            <div className="w-full max-w-[420px] p-3.5 bg-zinc-900 border-4 border-zinc-700 rounded-[44px] shadow-2xl space-y-2 relative transition-all">
              {/* Phone Speaker & Camera Notch */}
              <div className="flex justify-center items-center gap-2 pt-1 pb-1">
                <div className="w-16 h-1.5 bg-zinc-700 rounded-full" />
                <div className="w-2.5 h-2.5 bg-zinc-800 rounded-full" />
              </div>

              {/* Mobile Phone Screen */}
              <div className="relative w-full h-[680px] bg-white dark:bg-zinc-950 rounded-[32px] overflow-hidden">
                {isLoading && (
                  <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-zinc-950/80 backdrop-blur-xs text-white space-y-3">
                    <RotateCw size={24} className="animate-spin text-cyan-400" />
                    <p className="text-xs font-mono text-zinc-400">
                      Launching Zalo Mini App...
                    </p>
                  </div>
                )}

                <iframe
                  key={`zalo-${iframeKey}`}
                  src="https://rex-zalomini-app.vercel.app/"
                  title="Rex English Zalo Mini App"
                  className="w-full h-full border-0 bg-white"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                  loading="lazy"
                />

                <div className="absolute bottom-3 right-3 z-10">
                  <a
                    href="https://rex-zalomini-app.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2.5 py-1.5 rounded-lg bg-zinc-950/90 text-white text-[11px] font-mono border border-zinc-800 hover:bg-zinc-900 transition-colors flex items-center gap-1.5 shadow-lg backdrop-blur-sm"
                  >
                    <ExternalLink size={12} />
                    <span>Open App</span>
                  </a>
                </div>
              </div>

              {/* Phone Bottom Home Bar */}
              <div className="flex justify-center pt-1 pb-0.5">
                <div className="w-28 h-1 bg-zinc-600 rounded-full" />
              </div>
            </div>
          )}
        </div>

        {/* Technical Context Card */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 shadow-sm space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-zinc-100 dark:border-zinc-800/80 pb-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-600 dark:text-cyan-400 font-bold uppercase mb-1">
                <Sparkles size={12} />
                <span>
                  {activeTab === "web"
                    ? "Rex English Web Dashboard"
                    : "Rex English Zalo Mini App"}
                </span>
              </div>
              <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                {rexProject.title} — Architectural Highlights
              </h2>
              <p className="text-xs text-zinc-500 font-mono mt-0.5">
                Role: {rexProject.role} • Timeline: {rexProject.period}
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {rexProject.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 text-xs font-mono rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
            {activeTab === "web"
              ? "The Web Platform is an enterprise system built with ReactJS and Next.js, handling complex educational workflows, student media processing, multi-role user management, and CRM backend integration."
              : "The Zalo Mini App was initialized using ZMP-CLI and tailored for mobile interaction. Designed custom UI components specifically for parents to check schedules, monitor student learning progress, and interact with teachers effortlessly."}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-zinc-600 dark:text-zinc-300 pt-1">
            {rexProject.highlights.map((h, i) => (
              <div key={i} className="flex items-start gap-2">
                <CheckCircle2 size={13} className="text-cyan-500 shrink-0 mt-0.5" />
                <span>{h}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Archive Notice Card */}
        <div className="p-6 rounded-3xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono font-semibold text-zinc-600 dark:text-zinc-400 uppercase tracking-wider">
            <Database size={14} className="text-amber-500" />
            <span>Archived Projects Status</span>
          </div>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
            Note: The other portfolio projects (<strong>Station-based EV Rental</strong>,{" "}
            <strong>FPTU-Event System</strong>, and <strong>FitPick</strong>) currently
            have their backend databases decommissioned and are archived for reference.
            Their architectural implementation and technical specifications can be viewed
            on the{" "}
            <a href="/projects" className="text-cyan-600 dark:text-cyan-400 underline">
              Projects Page
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

export default function LiveDemoPage() {
  return (
    <Suspense
      fallback={
        <div className="py-24 text-center text-zinc-500 font-mono text-sm">
          Loading Live Demo Studio...
        </div>
      }
    >
      <LiveDemoContent />
    </Suspense>
  );
}
