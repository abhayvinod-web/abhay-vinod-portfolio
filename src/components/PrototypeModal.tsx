import React, { useState } from 'react';
import { FixMyItchProject } from '../types';
import { SmartCheckoutPrototype } from './prototypes/SmartCheckoutPrototype';
import { MerchantSettlementPrototype } from './prototypes/MerchantSettlementPrototype';
import { SubscriptionMandatePrototype } from './prototypes/SubscriptionMandatePrototype';
import { CodRtoPrototype } from './prototypes/CodRtoPrototype';
import { InstantRefundTrackerPrototype } from './prototypes/InstantRefundTrackerPrototype';
import { B2BDiscountingPrototype } from './prototypes/B2BDiscountingPrototype';
import { 
  X, 
  ExternalLink, 
  Layers, 
  Sparkles, 
  Terminal, 
  CheckCircle2, 
  AlertCircle, 
  Cpu, 
  PlayCircle,
  HelpCircle
} from 'lucide-react';

interface PrototypeModalProps {
  project: FixMyItchProject | null;
  onClose: () => void;
}

export const PrototypeModal: React.FC<PrototypeModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'demo' | 'problem' | 'architecture'>('demo');

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="bg-white border border-slate-200 rounded-2xl w-full max-w-5xl max-h-[94vh] flex flex-col shadow-2xl overflow-hidden my-auto animate-in fade-in zoom-in-95 duration-200 text-slate-900">
        {/* Header */}
        <div className="px-6 py-4 bg-slate-50 border-b border-slate-100 flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-600 bg-indigo-50 border border-indigo-100 px-2 py-0.5 rounded">
                {project.badge}
              </span>
              <span className="text-xs text-slate-500 font-medium">
                {project.category}
              </span>
            </div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900">
              {project.title}
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={project.sourceUrl}
              target="_blank"
              rel="noreferrer"
              className="text-xs text-slate-600 hover:text-indigo-600 flex items-center gap-1 bg-white px-3 py-1.5 rounded-lg border border-slate-200 transition-colors shadow-2xs"
            >
              <span>Razorpay Problem Source</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-white hover:bg-slate-100 text-slate-500 hover:text-slate-900 transition-colors cursor-pointer border border-slate-200"
              title="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="px-6 py-2.5 bg-white border-b border-slate-100 flex items-center gap-2">
          <button
            onClick={() => setActiveTab('demo')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
              activeTab === 'demo'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            <PlayCircle className="w-3.5 h-3.5" />
            <span>Interactive Sandbox (80% Functional)</span>
          </button>

          <button
            onClick={() => setActiveTab('problem')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
              activeTab === 'problem'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Problem &amp; Friction Analysis</span>
          </button>

          <button
            onClick={() => setActiveTab('architecture')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
              activeTab === 'architecture'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>Frontend Architecture</span>
          </button>
        </div>

        {/* Body Content */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6 bg-[#FAFAFA]">
          {activeTab === 'demo' && (
            <div className="space-y-4">
              <div className="bg-indigo-50/70 border border-indigo-100 p-3 rounded-lg flex items-center justify-between gap-4 text-xs">
                <div className="flex items-center gap-2 text-indigo-900">
                  <Sparkles className="w-4 h-4 text-indigo-600 shrink-0" />
                  <span>
                    <strong>Interactive Workbench:</strong> Test live user interactions, state mutations, and error fallbacks directly below.
                  </span>
                </div>
                <span className="text-emerald-700 font-mono text-[11px] bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 shrink-0 font-semibold">
                  Impact: {project.impactMetric}
                </span>
              </div>

              {/* Render Selected Prototype */}
              {project.prototypeId === 'checkout-recovery' && <SmartCheckoutPrototype />}
              {project.prototypeId === 'instant-settlement' && <MerchantSettlementPrototype />}
              {project.prototypeId === 'subscription-mandate' && <SubscriptionMandatePrototype />}
              {project.prototypeId === 'cod-rto-risk' && <CodRtoPrototype />}
              {project.prototypeId === 'instant-refund-tracker' && <InstantRefundTrackerPrototype />}
              {project.prototypeId === 'b2b-dynamic-discounting' && <B2BDiscountingPrototype />}
            </div>
          )}

          {activeTab === 'problem' && (
            <div className="space-y-6">
              <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-2 shadow-xs">
                <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-rose-500" />
                  The Problem Context
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {project.problemStatement}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-3 shadow-xs">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-rose-600">
                    Core User Friction Points
                  </h4>
                  <ul className="space-y-2 text-xs text-slate-600">
                    {project.frictionPoints.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-rose-500 mt-0.5 font-bold">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-3 shadow-xs">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-emerald-600">
                    Front-End Engineering Solution
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {project.solutionOverview}
                  </p>
                  <ul className="space-y-1.5 text-xs text-slate-600 pt-2 border-t border-slate-100">
                    {project.keyFeatures.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'architecture' && (
            <div className="space-y-6">
              <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-2 shadow-xs">
                <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-indigo-600" />
                  State Management &amp; Design Patterns
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {project.architectureNotes}
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-3 shadow-xs">
                <h4 className="text-xs font-bold text-slate-800 uppercase tracking-widest">
                  Technology Stack &amp; Tools Applied
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map(tech => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-slate-100 border border-slate-200 rounded-md text-xs font-mono text-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-100 flex justify-between items-center text-xs text-slate-500">
          <span>Candidate: <strong className="text-slate-800">Abhay Vinod</strong> • Frontend Engineering</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-slate-900 hover:bg-slate-800 text-white rounded-lg transition-colors font-medium cursor-pointer"
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
};
