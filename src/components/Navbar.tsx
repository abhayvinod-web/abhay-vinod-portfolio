import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  Code2, 
  Menu, 
  X, 
  FileText, 
  Send, 
  Sparkles, 
  GraduationCap,
  User,
  Wrench,
  HelpCircle,
  ArrowUpRight
} from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', icon: User, num: '01' },
    { name: 'Skills', href: '#skills', icon: Wrench, num: '02' },
    { name: 'Prototypes', href: '#projects', icon: Sparkles, num: '03', highlight: true },
    { name: 'Academics', href: '#academics', icon: GraduationCap, num: '04' },
    { name: 'Contact', href: '#contact', icon: Send, num: '05' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-2xs' 
          : 'bg-[#FAFAFA]/90 backdrop-blur-xs border-b border-slate-200/60 py-1'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 h-16 sm:h-18 flex items-center justify-between">
        {/* Logo / Name */}
        <a 
          href="#"
          className="flex items-center gap-3 group cursor-pointer"
        >
          <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center text-white font-bold transition-transform group-hover:scale-105 shadow-2xs">
            <Code2 className="w-4 h-4 text-indigo-300" />
          </div>
          <div>
            <span className="text-sm sm:text-base font-bold text-slate-900 tracking-tight group-hover:text-indigo-600 transition-colors">
              {PERSONAL_INFO.name}
            </span>
            <p className="text-[10px] uppercase tracking-widest text-slate-400 font-semibold font-mono">
              Frontend Engineer
            </p>
          </div>
        </a>

        {/* Desktop Navigation with distinct numbered badges */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
                  link.highlight
                    ? 'text-indigo-700 hover:text-indigo-800 bg-indigo-50/80 border border-indigo-200/70 font-semibold shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
                }`}
              >
                <span className="text-[10px] font-mono text-slate-400">{link.num}.</span>
                <Icon className={`w-3.5 h-3.5 ${link.highlight ? 'text-indigo-600' : 'text-slate-400'}`} />
                <span>{link.name}</span>
              </a>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-2.5">
          <button
            onClick={onOpenResume}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white hover:bg-slate-50 text-slate-700 text-xs font-medium border border-slate-200 transition-colors cursor-pointer shadow-2xs"
          >
            <FileText className="w-3.5 h-3.5 text-slate-500" />
            <span>Resume</span>
          </button>

          <a
            href="#contact"
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold shadow-xs transition-colors cursor-pointer"
          >
            <Send className="w-3.5 h-3.5 text-slate-300" />
            <span>Contact</span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={onOpenResume}
            className="p-2 rounded-lg bg-white text-slate-700 border border-slate-200 text-xs shadow-2xs"
            title="Resume"
          >
            <FileText className="w-4 h-4 text-slate-600" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-white text-slate-700 hover:text-slate-900 border border-slate-200 shadow-2xs"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-4 space-y-2 animate-in slide-in-from-top-4 duration-150 shadow-md">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-xs font-medium ${
                  link.highlight
                    ? 'bg-indigo-50 text-indigo-800 font-semibold'
                    : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`w-4 h-4 ${link.highlight ? 'text-indigo-600' : 'text-slate-400'}`} />
                  <span>{link.name}</span>
                </div>
                <span className="text-[10px] font-mono text-slate-400">{link.num}</span>
              </a>
            );
          })}
          <div className="pt-3 border-t border-slate-100 flex gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="flex-1 py-2.5 rounded-lg bg-slate-100 text-slate-800 border border-slate-200 text-xs font-medium flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4 text-slate-600" />
              <span>View Resume</span>
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex-1 py-2.5 rounded-lg bg-slate-900 text-white text-xs font-semibold flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Contact</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
