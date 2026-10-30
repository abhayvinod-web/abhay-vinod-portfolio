import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  Sparkles, 
  ArrowRight, 
  Mail, 
  Phone, 
  Copy, 
  Check, 
  FileText, 
  Code2,
  GraduationCap,
  Terminal,
  Layers,
  ArrowDown
} from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
  onExploreProjects: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onExploreProjects }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden border-b border-slate-200/80">
      {/* Subtle Background Pattern Accent for Visual Distinction */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#e2e8f015_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f015_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        {/* Distinct Section Identifier Header Badge */}
        <div className="flex items-center gap-2 mb-6">
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-mono font-medium text-slate-700 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>{PERSONAL_INFO.status}</span>
            <span className="text-slate-300">•</span>
            <span className="text-slate-500 text-[11px]">Bengaluru, India</span>
          </span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
          {/* Main Hero Statement */}
          <div className="max-w-3xl space-y-6">
            {/* Editorial Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[3.35rem] font-light leading-[1.16] text-slate-900 tracking-tight">
              Building <span className="italic font-serif font-normal text-indigo-950">resilient</span>, fluid web interfaces with typed code &amp; product logic.
            </h1>

            {/* Sub-description */}
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed">
              Hi, I&apos;m <strong className="font-semibold text-slate-900">{PERSONAL_INFO.name}</strong>, an undergraduate Computer Science engineer specializing in frontend architecture. I build deterministic client interfaces, eliminate UI layout shifts, and craft high-impact solutions — featuring <strong className="text-slate-900 underline decoration-indigo-300 underline-offset-4">3 functional Razorpay Fix-My-Itch prototypes</strong> below.
            </p>

            {/* Core Tech Stack Badges */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="px-3 py-1 bg-white rounded-md text-xs font-mono font-medium text-slate-700 border border-slate-200 shadow-2xs flex items-center gap-1.5">
                <Code2 className="w-3.5 h-3.5 text-indigo-600" />
                React 19
              </span>
              <span className="px-3 py-1 bg-white rounded-md text-xs font-mono font-medium text-slate-700 border border-slate-200 shadow-2xs flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-blue-600" />
                TypeScript
              </span>
              <span className="px-3 py-1 bg-white rounded-md text-xs font-mono font-medium text-slate-700 border border-slate-200 shadow-2xs">
                Tailwind CSS
              </span>
              <span className="px-3 py-1 bg-white rounded-md text-xs font-mono font-medium text-slate-700 border border-slate-200 shadow-2xs flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-emerald-600" />
                State Resilience
              </span>
              <span className="px-3 py-1 bg-white rounded-md text-xs font-mono font-medium text-slate-700 border border-slate-200 shadow-2xs">
                Payment UX
              </span>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <button
                onClick={onExploreProjects}
                className="px-5 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm shadow-xs flex items-center gap-2 transition-all cursor-pointer hover:translate-y-[-1px]"
              >
                <Sparkles className="w-4 h-4 text-indigo-300" />
                <span>Explore Live Prototypes</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenResume}
                className="px-4 py-2.5 rounded-lg bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 text-xs sm:text-sm font-medium flex items-center gap-2 transition-colors cursor-pointer shadow-xs"
              >
                <FileText className="w-4 h-4 text-slate-500" />
                <span>View / Print Resume</span>
              </button>
            </div>
          </div>

          {/* Right Column: Distinct Highlight Cards */}
          <div className="lg:text-right space-y-4 shrink-0">
            {/* Academic Foundation Callout Box */}
            <div className="bg-white border border-slate-200/90 p-5 rounded-xl shadow-xs lg:min-w-[290px] text-left lg:text-right space-y-1">
              <p className="text-[11px] uppercase tracking-widest text-indigo-600 font-bold mb-1 flex items-center lg:justify-end gap-1.5">
                <GraduationCap className="w-4 h-4 text-indigo-600" />
                <span>Academic Foundation</span>
              </p>
              <p className="text-base font-bold text-slate-900">B.Tech in Computer Science</p>
              <p className="text-xs text-slate-500 font-mono">Batch 2025 — 2029 • Core CS</p>
            </div>

            {/* Quick One-Click Contact Copiers */}
            <div className="space-y-2 text-left lg:text-right">
              <div className="inline-flex items-center gap-2 bg-white border border-slate-200 px-3.5 py-1.5 rounded-lg text-xs text-slate-700 shadow-2xs">
                <Mail className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                <span className="font-mono text-slate-800">{PERSONAL_INFO.email}</span>
                <button
                  onClick={() => copyToClipboard(PERSONAL_INFO.email, 'email')}
                  className="p-1 hover:text-slate-900 text-slate-400 transition-colors cursor-pointer rounded hover:bg-slate-100"
                  title="Copy Email"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              <div className="block"></div>

              <div className="inline-flex items-center gap-2 bg-white border border-slate-200 px-3.5 py-1.5 rounded-lg text-xs text-slate-700 shadow-2xs">
                <Phone className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span className="font-mono text-slate-800">{PERSONAL_INFO.phone}</span>
                <button
                  onClick={() => copyToClipboard(PERSONAL_INFO.phone, 'phone')}
                  className="p-1 hover:text-slate-900 text-slate-400 transition-colors cursor-pointer rounded hover:bg-slate-100"
                  title="Copy Phone Number"
                >
                  {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Highlighted Metrics Strip Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-8 border-t border-slate-200/80">
          {PERSONAL_INFO.stats.map((stat, idx) => (
            <div 
              key={idx} 
              className="bg-white border border-slate-200/90 p-4 sm:p-5 rounded-xl shadow-2xs hover:border-slate-300 transition-colors"
            >
              <div className="text-2xl sm:text-3xl font-bold text-slate-900 font-mono tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs text-slate-500 font-medium mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
