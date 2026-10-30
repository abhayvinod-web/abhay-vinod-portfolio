import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Code2, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="px-6 sm:px-10 lg:px-12 py-8 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center bg-white text-slate-500 text-xs gap-4">
      <div>
        <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-semibold">
          Open to Opportunities &amp; Collaborations
        </p>
        <p className="text-[11px] text-slate-500 mt-0.5">
          © {new Date().getFullYear()} {PERSONAL_INFO.name} • {PERSONAL_INFO.email}
        </p>
      </div>

      <div className="flex items-center gap-6">
        <a 
          href={PERSONAL_INFO.github} 
          target="_blank" 
          rel="noreferrer" 
          className="text-xs font-bold text-slate-700 hover:text-indigo-600 transition-colors"
        >
          GitHub
        </a>
        <a 
          href={PERSONAL_INFO.linkedin} 
          target="_blank" 
          rel="noreferrer" 
          className="text-xs font-bold text-slate-700 hover:text-indigo-600 transition-colors"
        >
          LinkedIn
        </a>
        <button
          onClick={scrollToTop}
          className="flex items-center gap-1 text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
        >
          <span>Top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
};
