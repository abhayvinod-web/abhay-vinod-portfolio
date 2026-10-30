import React from 'react';
import { PERSONAL_INFO, ACADEMIC_DATA, SKILL_CATEGORIES, FIX_MY_ITCH_PROJECTS } from '../data/portfolioData';
import { X, Download, Printer, Mail, Phone, MapPin, Globe } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto print:p-0 print:bg-white">
      <div className="bg-white border border-slate-200 rounded-2xl w-full max-w-4xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden my-auto print:border-none print:shadow-none print:max-h-full print:bg-white print:text-black">
        {/* Top Controls */}
        <div className="px-6 py-3.5 bg-slate-50 border-b border-slate-100 flex justify-between items-center print:hidden">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-slate-900"></span>
            <h4 className="text-xs font-semibold text-slate-800">Abhay Vinod — ATS-Optimized Resume</h4>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-medium transition-colors cursor-pointer shadow-2xs"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save as PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-white hover:bg-slate-100 text-slate-500 hover:text-slate-900 border border-slate-200 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Printable Resume Canvas */}
        <div className="p-8 sm:p-12 overflow-y-auto space-y-6 bg-white text-slate-900 print:p-6 text-xs sm:text-sm">
          {/* Header */}
          <div className="border-b border-slate-200 pb-5">
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-indigo-600 font-semibold text-sm mt-0.5">
              Software &amp; UI Engineer (Candidate)
            </p>

            <div className="flex flex-wrap gap-x-5 gap-y-1.5 mt-3 text-xs text-slate-600">
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:underline text-slate-900 font-medium">{PERSONAL_INFO.email}</a>
              </span>
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-slate-400" />
                <span>{PERSONAL_INFO.phone}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                <span>{PERSONAL_INFO.location}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-slate-400" />
                <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="hover:underline text-slate-900 font-medium">github.com/abhayvinod-web</a>
              </span>
            </div>
          </div>

          {/* Profile Summary */}
          <div className="space-y-1.5">
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-900 border-b border-slate-200 pb-1">
              Professional Summary
            </h2>
            <p className="text-slate-600 leading-relaxed text-xs">
              Software &amp; UI Engineer and Computer Science undergraduate ({ACADEMIC_DATA.timeline}) with strong foundations in React, TypeScript, modern system architecture, and CS core principles. Passionate about engineering high-performance, accessible, and state-resilient software applications. Built working prototypes solving real-world payment and product friction statements inspired by Razorpay's Fix-My-Itch initiative.
            </p>
          </div>

          {/* Academic Foundation */}
          <div className="space-y-1.5">
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-900 border-b border-slate-200 pb-1">
              Academic Foundation
            </h2>
            <div className="flex justify-between items-start text-xs">
              <div>
                <h3 className="font-semibold text-slate-900">
                  {ACADEMIC_DATA.degree} in {ACADEMIC_DATA.field}
                </h3>
                <p className="text-slate-500">{ACADEMIC_DATA.institution}</p>
              </div>
              <span className="font-mono text-slate-600 font-medium">
                {ACADEMIC_DATA.timeline}
              </span>
            </div>
            <p className="text-[11px] text-slate-500 mt-1">
              <strong>Core Coursework:</strong> {ACADEMIC_DATA.coursework.join(' • ')}
            </p>
          </div>

          {/* Featured Problem Solving & Prototypes */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-900 border-b border-slate-200 pb-1">
              Featured Projects (Razorpay Fix-My-Itch Prototypes)
            </h2>

            {FIX_MY_ITCH_PROJECTS.map((proj, idx) => (
              <div key={idx} className="space-y-1 text-xs">
                <div className="flex justify-between items-start">
                  <h3 className="font-bold text-slate-900 flex items-center gap-1.5">
                    <span>{proj.title}</span>
                    <span className="text-[10px] text-indigo-600 font-normal">({proj.category})</span>
                  </h3>
                  <span className="font-mono text-[11px] text-emerald-700 font-semibold bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                    {proj.impactMetric}
                  </span>
                </div>
                <p className="text-slate-600 text-[11px] leading-relaxed">
                  {proj.solutionOverview}
                </p>
                <div className="flex flex-wrap gap-1 pt-0.5">
                  {proj.techStack.map(t => (
                    <span key={t} className="px-1.5 py-0.5 bg-slate-100 text-slate-700 rounded text-[10px] font-mono border border-slate-200">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Technical Skills */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-900 border-b border-slate-200 pb-1">
              Technical Competencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
              {SKILL_CATEGORIES.map(cat => (
                <div key={cat.categoryName} className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                  <span className="font-bold text-slate-900 block text-[11px] mb-1">
                    {cat.categoryName}:
                  </span>
                  <p className="text-slate-600 text-[11px]">
                    {cat.skills.map(s => s.name).join(', ')}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
