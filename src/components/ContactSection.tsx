import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Copy, 
  Check, 
  MessageSquare, 
  Sparkles, 
  CheckCircle2,
  FileText,
  Clock,
  ArrowUpRight
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface ContactSectionProps {
  onOpenResume: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenResume }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  
  // Interactive Message Form State
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [senderMessage, setSenderMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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

  const handleSubmitMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!senderName || !senderEmail || !senderMessage) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      confetti({
        particleCount: 50,
        spread: 50,
        origin: { y: 0.7 }
      });
    }, 700);
  };

  return (
    <section id="contact" className="py-24 sm:py-28 bg-[#FAFAFA] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        {/* Massive Section Header: Number + Heading Dominance */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 mb-14 border-b-2 border-slate-200">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-5xl sm:text-7xl lg:text-8xl font-mono font-black tracking-tight text-rose-600/30 leading-none select-none">
                05
              </span>
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs sm:text-sm font-mono font-bold uppercase tracking-wider bg-rose-50 text-rose-700 border border-rose-200/80 shadow-2xs">
                  <Send className="w-3.5 h-3.5 text-rose-600" />
                  <span>Section 05 // Get In Touch</span>
                </span>
                <p className="text-xs text-slate-400 font-mono mt-1">HIRING &amp; COLLABORATION</p>
              </div>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
              Let&apos;s build <span className="italic font-serif font-normal text-slate-950">something resilient</span> together.
            </h2>
          </div>

          <p className="text-sm sm:text-base text-slate-600 max-w-lg leading-relaxed lg:text-right pb-1">
            Available for engineering opportunities, technical discussions, and production software contributions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Direct Contact Cards */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white border border-slate-200/90 rounded-xl p-6 sm:p-7 space-y-5 shadow-xs">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                  Direct Contact
                </h3>
                <span className="text-[11px] font-mono text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  Quick Response
                </span>
              </div>

              {/* GitHub */}
              <div className="p-3.5 bg-slate-50/80 rounded-lg border border-slate-100 space-y-1">
                <span className="text-[11px] text-slate-400 font-mono font-medium block">GitHub Profile</span>
                <div className="flex items-center justify-between gap-2">
                  <a 
                    href={PERSONAL_INFO.github} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-xs sm:text-sm font-semibold text-slate-900 hover:text-indigo-600 flex items-center gap-1.5 font-mono truncate"
                  >
                    <svg className="w-4 h-4 text-slate-800 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    <span>github.com/abhayvinod-web</span>
                  </a>
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 text-slate-500 hover:text-slate-900 bg-white rounded-md border border-slate-200 transition-colors cursor-pointer shadow-2xs shrink-0 flex items-center gap-1 text-[11px] font-semibold"
                    title="Open GitHub"
                  >
                    <span>Visit</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="p-3.5 bg-slate-50/80 rounded-lg border border-slate-100 space-y-1">
                <span className="text-[11px] text-slate-400 font-mono font-medium block">Direct Email</span>
                <div className="flex items-center justify-between gap-2">
                  <a 
                    href={`mailto:${PERSONAL_INFO.email}`} 
                    className="text-xs sm:text-sm font-semibold text-indigo-600 hover:underline font-mono truncate"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                  <button
                    onClick={() => copyToClipboard(PERSONAL_INFO.email, 'email')}
                    className="p-1.5 text-slate-400 hover:text-slate-900 bg-white rounded-md border border-slate-200 transition-colors cursor-pointer shadow-2xs shrink-0"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              {/* Phone */}
              <div className="p-3.5 bg-slate-50/80 rounded-lg border border-slate-100 space-y-1">
                <span className="text-[11px] text-slate-400 font-mono font-medium block">Phone / WhatsApp</span>
                <div className="flex items-center justify-between gap-2">
                  <a 
                    href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`} 
                    className="text-xs sm:text-sm font-semibold text-emerald-600 hover:underline font-mono"
                  >
                    {PERSONAL_INFO.phone}
                  </a>
                  <button
                    onClick={() => copyToClipboard(PERSONAL_INFO.phone, 'phone')}
                    className="p-1.5 text-slate-400 hover:text-slate-900 bg-white rounded-md border border-slate-200 transition-colors cursor-pointer shadow-2xs shrink-0"
                    title="Copy Phone"
                  >
                    {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              {/* Location & Response Time */}
              <div className="space-y-2 pt-1 text-xs text-slate-500">
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
                  <span>{PERSONAL_INFO.location} • Remote &amp; On-site</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                  <span>Typical response time: &lt; 4 hours</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenResume}
                  className="w-full py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer border border-slate-200"
                >
                  <FileText className="w-4 h-4 text-slate-600" />
                  <span>View / Print Resume</span>
                </button>
              </div>
            </div>
          </div>

          {/* Quick Interactive Message Box */}
          <div className="lg:col-span-7 bg-white border border-slate-200/90 rounded-xl p-6 sm:p-8 shadow-xs">
            <h3 className="text-base font-bold text-slate-900 mb-1 flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-indigo-600" />
              Send a Quick Message
            </h3>
            <p className="text-xs text-slate-500 mb-5">
              Have an open opportunity, prototype feedback, or a technical inquiry? Send a note directly.
            </p>

            {submitted ? (
              <div className="p-6 bg-emerald-50 border border-emerald-100 rounded-xl text-center space-y-2">
                <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                <h4 className="text-sm font-bold text-emerald-900">Message Dispatched</h4>
                <p className="text-xs text-slate-600">
                  Thank you for reaching out, {senderName}. I will reply to <strong>{senderEmail}</strong> promptly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setSenderMessage('');
                  }}
                  className="mt-2 text-xs font-semibold text-indigo-600 hover:underline cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmitMessage} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-slate-700 font-medium block mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Miller"
                      value={senderName}
                      onChange={e => setSenderName(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:bg-white transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-slate-700 font-medium block mb-1">Your Email</label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={senderEmail}
                      onChange={e => setSenderEmail(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs text-slate-700 font-medium block mb-1">Message / Inquiry</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Hi Abhay, we checked out your Fix-My-Itch payment prototypes and would like to discuss..."
                    value={senderMessage}
                    onChange={e => setSenderMessage(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:bg-white resize-none transition-colors"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg transition-colors shadow-xs flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isSubmitting ? (
                    <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
