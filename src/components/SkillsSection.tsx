import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Wrench, Code2, Palette, Terminal } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Competencies' },
    ...SKILL_CATEGORIES.map(c => ({ id: c.categoryName, label: c.categoryName }))
  ];

  const filteredCategories = activeCategory === 'all' 
    ? SKILL_CATEGORIES 
    : SKILL_CATEGORIES.filter(c => c.categoryName === activeCategory);

  return (
    <section id="skills" className="py-24 sm:py-28 bg-[#FAFAFA] border-b border-slate-200/90">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        {/* Massive Section Header: Number + Heading Dominance */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 mb-12 border-b-2 border-slate-200">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-5xl sm:text-7xl lg:text-8xl font-mono font-black tracking-tight text-emerald-600/30 leading-none select-none">
                02
              </span>
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs sm:text-sm font-mono font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200/80 shadow-2xs">
                  <Wrench className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Section 02 // Technical Skills</span>
                </span>
                <p className="text-xs text-slate-400 font-mono mt-1">PRODUCTION-READY TOOLKIT</p>
              </div>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
              Technical toolkit &amp; <span className="italic font-serif font-normal text-slate-950">frontend competencies</span>.
            </h2>
          </div>

          <p className="text-sm sm:text-base text-slate-600 max-w-lg leading-relaxed lg:text-right pb-1">
            Specialized in predictable state structures, strict TypeScript contracts, responsive performance, payment UX resiliency, and clean design execution.
          </p>
        </div>

        {/* Interactive Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-8 pb-2">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-slate-900 text-white shadow-xs font-semibold'
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200/90 hover:bg-slate-50'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Distinct Skills Bento Grid - 3 Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category, idx) => {
            const accent = category.categoryName.includes('Frontend') || category.categoryName.includes('Core')
              ? { bar: 'bg-indigo-500', text: 'text-indigo-600', icon: Code2, bg: 'bg-indigo-50/60', border: 'border-indigo-100' }
              : category.categoryName.includes('Styling') || category.categoryName.includes('UI')
              ? { bar: 'bg-emerald-500', text: 'text-emerald-600', icon: Palette, bg: 'bg-emerald-50/60', border: 'border-emerald-100' }
              : { bar: 'bg-slate-700', text: 'text-slate-700', icon: Terminal, bg: 'bg-slate-100', border: 'border-slate-200' };
            const Icon = accent.icon;

            return (
              <div
                key={category.categoryName}
                className="bg-white border border-slate-200/90 rounded-xl p-6 sm:p-7 space-y-4 hover:shadow-lg hover:border-slate-300 transition-all duration-200 shadow-2xs"
              >
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-lg ${accent.bg} ${accent.border} border flex items-center justify-center ${accent.text}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-base">{category.categoryName}</h3>
                      <p className="text-[11px] text-slate-400 font-mono">Verified competencies</p>
                    </div>
                  </div>
                  <div className={`h-1 w-8 ${accent.bar} rounded-full`}></div>
                </div>

                <div className="space-y-3 pt-1">
                  {category.skills.map(skill => (
                    <div 
                      key={skill.name} 
                      className="p-3.5 rounded-lg bg-slate-50/80 border border-slate-100 space-y-1.5 hover:bg-white hover:border-slate-200 transition-colors"
                    >
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-bold text-slate-800 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
                          {skill.name}
                        </span>
                        <span className="text-[10px] font-mono font-semibold text-slate-700 bg-white px-2.5 py-0.5 rounded-md border border-slate-200/80 shadow-2xs">
                          {skill.level}
                        </span>
                      </div>
                      {skill.highlight && (
                        <p className="text-[11px] text-slate-500 leading-relaxed pl-3">
                          {skill.highlight}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
