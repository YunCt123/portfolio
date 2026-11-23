"use client";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Send,
  Copy,
  Check,
  Sparkles,
  MessageSquare,
  Clock,
} from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import Toast from "@/components/Toast";

export default function ContactPage() {
  const { personal } = portfolioData;
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formSent, setFormSent] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3200);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    triggerToast(`Copied email to clipboard: ${personal.email}`);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personal.phone);
    setCopiedPhone(true);
    triggerToast(`Copied phone number to clipboard: ${personal.phone}`);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      setFormSent(true);
      triggerToast("Thank you! Opening your email client to send message.");
      const mailtoLink = `mailto:${personal.email}?subject=${encodeURIComponent(
        formData.subject || `Inquiry from ${formData.name}`
      )}&body=${encodeURIComponent(
        `From: ${formData.name} (${formData.email})\n\n${formData.message}`
      )}`;
      window.open(mailtoLink, "_blank");
    }, 500);
  };

  return (
    <div className="py-12 md:py-20 space-y-16">
      <Toast message={toastMessage} isVisible={showToast} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
        {/* Page Header */}
        <div className="space-y-4 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-xs font-mono font-medium">
            <Sparkles size={13} />
            <span>Connect & Opportunities</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-zinc-950 dark:text-zinc-100 tracking-tight">
            Get in Touch
          </h1>
          <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Interested in hiring or discussing a frontend opportunity? Feel free
            to reach out directly via email, phone, or send a quick message below.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Direct Info Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-zinc-900/80 border border-zinc-200/90 dark:border-zinc-800 shadow-sm bento-card space-y-6">
              <div>
                <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                  Direct Contact Information
                </h2>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                  1-click copy or direct communication channels
                </p>
              </div>

              {/* 1-Click Copy Email Card */}
              <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-100 dark:border-zinc-800/80 space-y-2">
                <div className="flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400 font-mono">
                  <span className="flex items-center gap-1.5">
                    <Mail size={13} className="text-cyan-500" />
                    <span>Official Email</span>
                  </span>
                  <span className="text-[10px] text-cyan-600 dark:text-cyan-400 font-sans">
                    Fast response
                  </span>
                </div>

                <div className="flex items-center justify-between gap-2 pt-1">
                  <span className="font-mono text-sm font-semibold text-zinc-900 dark:text-zinc-100 truncate">
                    {personal.email}
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-white text-xs font-medium transition-all active:scale-95 shrink-0"
                    title="Copy email address"
                  >
                    {copiedEmail ? (
                      <>
                        <Check size={13} className="text-emerald-400" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy size={13} />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* 1-Click Copy Phone Card */}
              <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-100 dark:border-zinc-800/80 space-y-2">
                <div className="flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400 font-mono">
                  <span className="flex items-center gap-1.5">
                    <Phone size={13} className="text-emerald-500" />
                    <span>Phone / Zalo</span>
                  </span>
                  <a
                    href={`tel:${personal.phone}`}
                    className="text-[11px] text-cyan-600 dark:text-cyan-400 hover:underline"
                  >
                    Call now
                  </a>
                </div>

                <div className="flex items-center justify-between gap-2 pt-1">
                  <span className="font-mono text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                    {personal.phone}
                  </span>
                  <button
                    onClick={handleCopyPhone}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-zinc-200 dark:bg-zinc-800 hover:bg-zinc-300 dark:hover:bg-zinc-700 text-zinc-800 dark:text-zinc-200 text-xs font-medium transition-all active:scale-95 shrink-0"
                    title="Copy phone number"
                  >
                    {copiedPhone ? (
                      <>
                        <Check size={13} className="text-emerald-500" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy size={13} />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Location & GitHub */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                <div className="p-3.5 rounded-2xl bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-100 dark:border-zinc-800/80 space-y-1">
                  <div className="flex items-center gap-1 text-[11px] font-mono text-zinc-400">
                    <MapPin size={12} />
                    <span>Location</span>
                  </div>
                  <div className="text-xs font-semibold text-zinc-800 dark:text-zinc-200">
                    {personal.location}
                  </div>
                </div>

                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-2xl bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-100 dark:border-zinc-800/80 space-y-1 hover:border-zinc-400 dark:hover:border-zinc-700 transition-colors"
                >
                  <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400">
                    <span className="flex items-center gap-1">
                      <Github size={12} />
                      <span>GitHub</span>
                    </span>
                  </div>
                  <div className="text-xs font-semibold text-zinc-800 dark:text-zinc-200 truncate">
                    {personal.githubUsername}
                  </div>
                </a>
              </div>
            </div>

            {/* Recruiter Quick Status Card */}
            <div className="p-6 rounded-3xl bg-zinc-100/70 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400">
                <Clock size={14} />
                <span>Availability Status</span>
              </div>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Currently available for full-time Frontend Developer positions or
                internship opportunities in Ho Chi Minh City or remote setups.
              </p>
            </div>
          </div>

          {/* Right Column: Direct Message Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-zinc-900/80 border border-zinc-200/90 dark:border-zinc-800 shadow-sm bento-card space-y-6">
              <div className="flex items-center gap-2.5 pb-2">
                <div className="p-2 rounded-xl bg-cyan-50 dark:bg-cyan-950/60 text-cyan-600 dark:text-cyan-400">
                  <MessageSquare size={18} />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                    Send a Message
                  </h2>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">
                    Direct message channel to my inbox
                  </p>
                </div>
              </div>

              {formSent ? (
                <div className="py-12 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                    <Check size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
                    Message Dispatched Successfully!
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 max-w-sm mx-auto">
                    Thank you for reaching out. I will respond to your email as soon
                    as possible.
                  </p>
                  <button
                    onClick={() => {
                      setFormSent(false);
                      setFormData({ name: "", email: "", subject: "", message: "" });
                    }}
                    className="mt-4 px-4 py-2 rounded-xl text-xs font-semibold bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono font-medium text-zinc-700 dark:text-zinc-300">
                        Your Name <span className="text-cyan-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Sarah Jenkins"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl bg-zinc-50 dark:bg-zinc-950/70 border border-zinc-200 dark:border-zinc-800 focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-400 text-zinc-900 dark:text-zinc-100 transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono font-medium text-zinc-700 dark:text-zinc-300">
                        Your Email <span className="text-cyan-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="recruiter@techcompany.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl bg-zinc-50 dark:bg-zinc-950/70 border border-zinc-200 dark:border-zinc-800 focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-400 text-zinc-900 dark:text-zinc-100 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-medium text-zinc-700 dark:text-zinc-300">
                      Subject / Role Title
                    </label>
                    <input
                      type="text"
                      placeholder="Frontend Developer Opportunity"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl bg-zinc-50 dark:bg-zinc-950/70 border border-zinc-200 dark:border-zinc-800 focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-400 text-zinc-900 dark:text-zinc-100 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-medium text-zinc-700 dark:text-zinc-300">
                      Message <span className="text-cyan-500">*</span>
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Hi Duc Anh, we reviewed your projects and would love to invite you for an interview..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl bg-zinc-50 dark:bg-zinc-950/70 border border-zinc-200 dark:border-zinc-800 focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-400 text-zinc-900 dark:text-zinc-100 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSending}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-medium text-xs sm:text-sm shadow-md shadow-cyan-600/20 active:scale-95 transition-all"
                  >
                    <Send size={15} />
                    <span>{isSending ? "Sending..." : "Send Message"}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
