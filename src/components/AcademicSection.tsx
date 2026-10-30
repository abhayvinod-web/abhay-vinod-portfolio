import React from 'react';
import { ACADEMIC_DATA } from '../data/portfolioData';
import { GraduationCap, BookOpen, Award, CheckCircle2, Calendar, Sparkles } from 'lucide-react';

export const AcademicSection: React.FC = () => {
  return (
    <section id="academics" className="py-24 sm:py-28 bg-[#FAFAFA] border-b border-slate-200/90 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        {/* Massive Section Header: Number + Heading Dominance */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 mb-14 border-b-2 border-slate-200">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-5xl sm:text-7xl lg:text-8xl font-mono font-black tracking-tight text-amber-600/30 leading-none select-none">
                04
              </span>
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs sm:text-sm font-mono font-bold uppercase tracking-wider bg-amber-50 text-amber-700 border border-amber-200/80 shadow-2xs">
                  <GraduationCap className="w-3.5 h-3.5 text-amber-600" />
                  <span>Section 04 // Academic Foundation</span>
                </span>
                <p className="text-xs text-slate-400 font-mono mt-1">COMPUTER SCIENCE DEGREE (2025–2029)</p>
              </div>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
              Academic education &amp; <span className="italic font-serif font-normal text-slate-950">CS core principles</span>.
            </h2>
          </div>

          <p className="text-sm sm:text-base text-slate-600 max-w-lg leading-relaxed lg:text-right pb-1">
            Grounded in discrete data structures, algorithmic complexity, computer networks, and scalable system principles.
          </p>
        </div>

        {/* Distinct Academic Bento Card */}
        <div className="bg-white border border-slate-200/90 rounded-xl p-6 sm:p-8 space-y-6 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200/80 flex items-center justify-center text-amber-700 font-bold shrink-0">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                  {ACADEMIC_DATA.degree}
                </h3>
                <p className="text-sm text-indigo-600 font-semibold mt-0.5">
                  {ACADEMIC_DATA.field}
                </p>
                <p className="text-xs text-slate-500 mt-0.5">
                  {ACADEMIC_DATA.institution}
                </p>
              </div>
            </div>

            <div className="flex sm:flex-col items-center sm:items-end justify-between gap-1.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-200 text-xs font-mono font-semibold">
                <Calendar className="w-3.5 h-3.5 text-slate-500" />
                {ACADEMIC_DATA.timeline}
              </span>
              <span className="text-xs text-emerald-600 font-semibold sm:mt-1 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                {ACADEMIC_DATA.status}
              </span>
            </div>
          </div>

          {/* Coursework & Technical Foundations */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-indigo-600" />
                <span>Key Coursework &amp; Principles</span>
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
                {ACADEMIC_DATA.coursework.map((course, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                    <span className="text-indigo-500 font-bold">•</span>
                    <span className="text-slate-700">{course}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest flex items-center gap-2">
                <Award className="w-4 h-4 text-emerald-600" />
                <span>Technical Highlights &amp; Goals</span>
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
                {ACADEMIC_DATA.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-slate-700">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
