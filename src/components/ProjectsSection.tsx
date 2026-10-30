import React, { useState } from 'react';
import { FIX_MY_ITCH_PROJECTS } from '../data/portfolioData';
import { FixMyItchProject } from '../types';
import { 
  Sparkles, 
  ExternalLink, 
  PlayCircle, 
  CheckCircle2, 
  ArrowRight,
  Zap,
  ShieldCheck,
  RotateCcw,
  Sliders
} from 'lucide-react';
import { SmartCheckoutPrototype } from './prototypes/SmartCheckoutPrototype';
import { MerchantSettlementPrototype } from './prototypes/MerchantSettlementPrototype';
import { SubscriptionMandatePrototype } from './prototypes/SubscriptionMandatePrototype';
import { CodRtoPrototype } from './prototypes/CodRtoPrototype';
import { InstantRefundTrackerPrototype } from './prototypes/InstantRefundTrackerPrototype';
import { B2BDiscountingPrototype } from './prototypes/B2BDiscountingPrototype';

interface ProjectsSectionProps {
  onOpenPrototype: (project: FixMyItchProject) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onOpenPrototype }) => {
  const [activeInlinePreview, setActiveInlinePreview] = useState<string>('checkout-recovery');

  const selectedProject = FIX_MY_ITCH_PROJECTS.find(p => p.id === activeInlinePreview) || FIX_MY_ITCH_PROJECTS[0];

  const getAccentColor = (idx: number) => {
    switch (idx % 6) {
      case 0:
        return { 
          bar: 'bg-indigo-500', 
          text: 'text-indigo-600', 
          badge: 'bg-indigo-50 text-indigo-700 border-indigo-200/80',
          icon: ShieldCheck
        };
      case 1:
        return { 
          bar: 'bg-emerald-500', 
          text: 'text-emerald-600', 
          badge: 'bg-emerald-50 text-emerald-700 border-emerald-200/80',
          icon: Zap
        };
      case 2:
        return { 
          bar: 'bg-amber-500', 
          text: 'text-amber-600', 
          badge: 'bg-amber-50 text-amber-700 border-amber-200/80',
          icon: RotateCcw
        };
      case 3:
        return { 
          bar: 'bg-rose-500', 
          text: 'text-rose-600', 
          badge: 'bg-rose-50 text-rose-700 border-rose-200/80',
          icon: Zap
        };
      case 4:
        return { 
          bar: 'bg-blue-500', 
          text: 'text-blue-600', 
          badge: 'bg-blue-50 text-blue-700 border-blue-200/80',
          icon: ShieldCheck
        };
      case 5:
      default:
        return { 
          bar: 'bg-purple-500', 
          text: 'text-purple-600', 
          badge: 'bg-purple-50 text-purple-700 border-purple-200/80',
          icon: Sliders
        };
    }
  };

  return (
    <section id="projects" className="py-24 sm:py-28 bg-[#FAFAFA] border-b border-slate-200/90 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        {/* Massive Section Header: Number + Heading Dominance */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 mb-14 border-b-2 border-slate-200">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-5xl sm:text-7xl lg:text-8xl font-mono font-black tracking-tight text-violet-600/30 leading-none select-none">
                03
              </span>
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs sm:text-sm font-mono font-bold uppercase tracking-wider bg-violet-50 text-violet-700 border border-violet-200/80 shadow-2xs">
                  <Sparkles className="w-3.5 h-3.5 text-violet-600" />
                  <span>Section 03 // Interactive Prototypes</span>
                </span>
                <p className="text-xs text-slate-400 font-mono mt-1">RAZORPAY FIX-MY-ITCH SOLUTIONS</p>
              </div>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
              Interactive payment <span className="italic font-serif font-normal text-slate-950">prototypes</span> &amp; benchmarks.
            </h2>
          </div>

          <p className="text-sm sm:text-base text-slate-600 max-w-lg leading-relaxed lg:text-right pb-1">
            Engineered ~80% functional frontends addressing real checkout drop-offs, on-demand merchant cashflow settlements, and recurring mandate churn.
          </p>
        </div>

        {/* 6 Distinct Flagship Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {FIX_MY_ITCH_PROJECTS.map((proj, idx) => {
            const isSelected = activeInlinePreview === proj.id;
            const accent = getAccentColor(idx);
            const Icon = accent.icon;

            return (
              <div
                key={proj.id}
                className={`group bg-white border p-6 flex flex-col justify-between hover:shadow-xl transition-all duration-200 rounded-xl ${
                  isSelected 
                    ? 'border-indigo-300 ring-2 ring-indigo-200/60 shadow-md' 
                    : 'border-slate-200/90 shadow-2xs hover:border-slate-300'
                }`}
              >
                <div>
                  {/* Top Minimal Accent Bar & Badges */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider border ${accent.badge}`}>
                      <Icon className="w-3 h-3" />
                      {proj.badge}
                    </span>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 bg-slate-100 text-slate-700 rounded border border-slate-200">
                      {proj.impactMetric}
                    </span>
                  </div>

                  <div className={`h-0.5 w-10 ${accent.bar} mb-3`}></div>

                  <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 block mb-1">
                    {proj.category}
                  </span>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 leading-snug">
                    {proj.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {proj.tagline}
                  </p>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {proj.techStack.map(tech => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 bg-slate-50 rounded text-[10px] font-mono text-slate-600 border border-slate-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Live Demo & Actions */}
                <div className="pt-5 mt-6 flex justify-between items-center border-t border-slate-100">
                  <button
                    onClick={() => {
                      setActiveInlinePreview(proj.id);
                      onOpenPrototype(proj);
                    }}
                    className={`text-xs font-bold underline underline-offset-4 text-slate-900 hover:${accent.text} transition-colors cursor-pointer flex items-center gap-1`}
                  >
                    <span>Full Spec</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>

                  <button
                    onClick={() => setActiveInlinePreview(proj.id)}
                    className={`text-xs px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                      isSelected 
                        ? 'bg-slate-900 text-white font-medium shadow-2xs' 
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200/80 font-medium'
                    }`}
                  >
                    {isSelected ? 'Active in Sandbox ↓' : 'Load in Sandbox'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dedicated Standout Interactive Sandbox Container */}
        <div className="bg-white border border-slate-300/90 rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-100">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-indigo-700 bg-indigo-50 px-2.5 py-0.5 rounded border border-indigo-200">
                  Live Interactive Sandbox: {selectedProject.badge}
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  {selectedProject.category}
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                {selectedProject.title}
              </h3>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => onOpenPrototype(selectedProject)}
                className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 shadow-xs transition-colors cursor-pointer"
              >
                <PlayCircle className="w-4 h-4 text-indigo-300" />
                <span>Fullscreen View &amp; Architecture Notes</span>
              </button>

              <a
                href={selectedProject.sourceUrl}
                target="_blank"
                rel="noreferrer"
                className="px-3.5 py-2 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-colors shadow-2xs"
              >
                <span>Problem Source</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Render Active Prototype Component Inline */}
          <div className="pt-2">
            {selectedProject.id === 'checkout-recovery' && <SmartCheckoutPrototype />}
            {selectedProject.id === 'instant-settlement' && <MerchantSettlementPrototype />}
            {selectedProject.id === 'subscription-mandate' && <SubscriptionMandatePrototype />}
            {selectedProject.id === 'cod-rto-risk' && <CodRtoPrototype />}
            {selectedProject.id === 'instant-refund-tracker' && <InstantRefundTrackerPrototype />}
            {selectedProject.id === 'b2b-dynamic-discounting' && <B2BDiscountingPrototype />}
          </div>
        </div>
      </div>
    </section>
  );
};
