import React from 'react';
import { PERSONAL_INFO, ABOUT_DETAILS } from '../data/portfolioData';
import { ShieldCheck, LayoutTemplate, Zap, CheckCircle2, User, Sparkles, Terminal, Code2, ArrowRight } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 sm:py-28 bg-[#FAFAFA] border-b border-slate-200/90 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        {/* Massive Section Header: Number + Heading Dominance */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 mb-14 border-b-2 border-slate-200">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-5xl sm:text-7xl lg:text-8xl font-mono font-black tracking-tight text-indigo-600/30 leading-none select-none">
                01
              </span>
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs sm:text-sm font-mono font-bold uppercase tracking-wider bg-indigo-50 text-indigo-700 border border-indigo-200/80 shadow-2xs">
                  <User className="w-3.5 h-3.5 text-indigo-600" />
                  <span>Section 01 // About &amp; Philosophy</span>
                </span>
                <p className="text-xs text-slate-400 font-mono mt-1">ENGINEERING MINDSET</p>
              </div>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
              Crafting resilient <span className="italic font-serif font-normal text-indigo-950">frontend systems</span> &amp; deterministic state.
            </h2>
          </div>

          <p className="text-sm sm:text-base text-slate-600 max-w-lg leading-relaxed lg:text-right pb-1">
            I approach frontend engineering not as passive layout construction, but as distributed client systems: handling network dropouts, idempotent checkout flows, and zero state desynchronization.
          </p>
        </div>

        {/* 3 Core Engineering Pillars - Distinct Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ABOUT_DETAILS.philosophy.map((pillar, idx) => {
            const colors = idx === 0 
              ? { bar: 'bg-indigo-500', text: 'text-indigo-600', bg: 'bg-indigo-50/60', icon: ShieldCheck, border: 'border-indigo-100' }
              : idx === 1 
              ? { bar: 'bg-emerald-500', text: 'text-emerald-600', bg: 'bg-emerald-50/60', icon: LayoutTemplate, border: 'border-emerald-100' }
              : { bar: 'bg-amber-500', text: 'text-amber-600', bg: 'bg-amber-50/60', icon: Zap, border: 'border-amber-100' };
            const Icon = colors.icon;

            return (
              <div 
                key={pillar.title}
                className="group bg-white border border-slate-200/90 p-6 flex flex-col justify-between hover:shadow-lg hover:border-slate-300 transition-all duration-200 rounded-xl shadow-2xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-10 h-10 rounded-lg ${colors.bg} ${colors.border} border flex items-center justify-center ${colors.text}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono font-bold text-slate-400">
                      0{idx + 1}
                    </span>
                  </div>

                  <div className={`h-0.5 w-8 ${colors.bar} mb-3`}></div>

                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Highlighted Engineering Standards Bento Card */}
        <div className="mt-8 bg-white border border-slate-200/90 rounded-xl p-6 sm:p-8 space-y-4 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-100">
            <div className="flex items-center gap-2 text-indigo-600 text-xs font-bold font-mono uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-indigo-600" />
              <span>Production Engineering Readiness</span>
            </div>
            <span className="text-xs font-mono text-emerald-600 font-semibold bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200/60 inline-flex items-center gap-1.5 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              Ready for Immediate Onboarding
            </span>
          </div>

          <h3 className="text-base sm:text-xl font-bold text-slate-900">
            Engineered to contribute to production codebases immediately
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-600 pt-1">
            <div className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50/70 border border-slate-100">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong className="text-slate-900 font-semibold">Strict TypeScript:</strong> Zero unsafe <code className="text-indigo-600 font-mono text-xs bg-indigo-50 px-1 py-0.5 rounded">any</code> types, rigorous prop contracts &amp; generics.</span>
            </div>
            <div className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50/70 border border-slate-100">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong className="text-slate-900 font-semibold">Modular Design:</strong> Atomic, decoupled UI logic adhering to Single Responsibility principles.</span>
            </div>
            <div className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50/70 border border-slate-100">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong className="text-slate-900 font-semibold">Real-World Problem Solving:</strong> Validated by 3 functional Razorpay Fix-My-Itch payment prototypes.</span>
            </div>
            <div className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50/70 border border-slate-100">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong className="text-slate-900 font-semibold">Agile Collaboration:</strong> Deep familiarity with Git version control, PR workflows, and modern tooling.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
