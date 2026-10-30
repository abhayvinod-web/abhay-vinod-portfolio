import React, { useState } from 'react';
import { 
  Building2, 
  TrendingUp, 
  Percent, 
  CheckCircle2, 
  Calendar, 
  Smartphone, 
  ArrowRight, 
  RotateCcw, 
  DollarSign, 
  FileText, 
  Zap, 
  Send
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const B2BDiscountingPrototype: React.FC = () => {
  const [daysToPayment, setDaysToPayment] = useState<number>(5);
  const [approvedInvoices, setApprovedInvoices] = useState<string[]>([]);
  const [activeModal, setActiveModal] = useState<boolean>(false);
  const [disbursedStatus, setDisbursedStatus] = useState<boolean>(false);

  // Financial Variables
  const invoiceValue = 500000; // ₹5,00,000
  const standardTerms = 60; // 60 days credit

  // Dynamic Discounting Formula
  // Earlier payment = higher discount percentage offered by supplier
  // At 5 days: 3.5%, at 30 days: 1.5%, at 60 days: 0%
  const discountRate = Number(((standardTerms - daysToPayment) / standardTerms * 3.8).toFixed(2));
  const discountAmount = Math.round((invoiceValue * discountRate) / 100);
  const tdsDeduction = 10000; // 2% TDS on ₹5,00,000
  const netSupplierDisbursement = invoiceValue - discountAmount - tdsDeduction;

  // Annualized return (APR) for the buyer: (Discount % / Days Saved) * 365
  const daysSaved = standardTerms - daysToPayment;
  const buyerApr = daysSaved > 0 ? ((discountRate / daysSaved) * 365).toFixed(1) : '0';

  const handleDisburse = () => {
    setDisbursedStatus(true);
    confetti({ particleCount: 75, spread: 65, origin: { y: 0.6 } });
    setTimeout(() => {
      setActiveModal(false);
    }, 1800);
  };

  const handleReset = () => {
    setDaysToPayment(5);
    setDisbursedStatus(false);
    setActiveModal(false);
  };

  return (
    <div className="w-full bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm text-slate-900 font-sans">
      {/* Top Banner */}
      <div className="bg-slate-50 px-4 py-3 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse"></span>
          <span className="font-bold text-slate-900">Prototype #6:</span>
          <span className="text-slate-600">B2B Dynamic Early-Payment Discounting &amp; Treasury Optimizer</span>
        </div>

        <button
          onClick={handleReset}
          className="flex items-center gap-1 text-slate-600 hover:text-slate-900 px-2.5 py-1 rounded bg-white hover:bg-slate-100 border border-slate-200 transition-colors shadow-2xs cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset Calculator</span>
        </button>
      </div>

      <div className="p-5 sm:p-6 space-y-6">
        {/* Invoice Header Details */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-xl shadow-2xs shrink-0">
              🏭
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="font-bold text-sm text-slate-900">Apex Precision Auto-Components Pvt Ltd</h4>
                <span className="text-[10px] bg-indigo-50 border border-indigo-200 text-indigo-700 px-2 py-0.5 rounded font-bold uppercase">
                  MSME Registered
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-0.5 font-mono">
                Invoice #APX-2026-881 • GSTIN: 29AABCU9603R1ZM • Net-60 Standard Payment Terms
              </p>
            </div>
          </div>

          <div className="text-left md:text-right">
            <div className="text-lg font-mono font-bold text-slate-900">
              ₹5,00,000.00
            </div>
            <span className="text-[11px] text-slate-500">Scheduled Due: 60 Days</span>
          </div>
        </div>

        {/* Dynamic Discounting Interactive Slider */}
        <div className="bg-gradient-to-br from-indigo-50/50 to-emerald-50/40 border border-slate-200 rounded-2xl p-6 space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h5 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-indigo-600" />
                Select Early Payment Timeline: Pay in {daysToPayment} Days
              </h5>
              <p className="text-xs text-slate-600 mt-0.5">
                Moving slider earlier increases vendor discount and buyer annualized yield (APR).
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs bg-white border border-slate-200 px-3 py-1 rounded-lg font-mono font-bold text-slate-800 shadow-2xs">
                {daysSaved} Days Earlier
              </span>
              <span className="text-xs bg-emerald-100 text-emerald-900 px-3 py-1 rounded-lg font-mono font-bold shadow-2xs">
                {buyerApr}% Buyer APR
              </span>
            </div>
          </div>

          <div className="space-y-2">
            <input
              type="range"
              min={2}
              max={60}
              step={1}
              value={daysToPayment}
              onChange={e => setDaysToPayment(Number(e.target.value))}
              className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
            />
            <div className="flex justify-between text-[11px] font-mono text-slate-500">
              <span>Day 2 (Max Discount: ~3.8%)</span>
              <span>Day 30 (Mid-term)</span>
              <span>Day 60 (Net Due: 0% Discount)</span>
            </div>
          </div>

          {/* Real-time Math Output Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 pt-2">
            <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-2xs">
              <span className="text-[11px] text-slate-500 font-medium block">Early Rebate Rate</span>
              <span className="text-lg font-mono font-bold text-indigo-600">{discountRate}%</span>
              <span className="text-[10px] text-slate-400 block mt-0.5">Agreed by MSME vendor</span>
            </div>

            <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-2xs">
              <span className="text-[11px] text-slate-500 font-medium block">Buyer Cash Saved</span>
              <span className="text-lg font-mono font-bold text-emerald-600">₹{discountAmount.toLocaleString('en-IN')}</span>
              <span className="text-[10px] text-slate-400 block mt-0.5">Direct P&amp;L treasury gain</span>
            </div>

            <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-2xs">
              <span className="text-[11px] text-slate-500 font-medium block">Statutory TDS (2%)</span>
              <span className="text-lg font-mono font-bold text-slate-700">₹{tdsDeduction.toLocaleString('en-IN')}</span>
              <span className="text-[10px] text-slate-400 block mt-0.5">Government tax credit</span>
            </div>

            <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-2xs">
              <span className="text-[11px] text-slate-500 font-medium block">Immediate Vendor Payout</span>
              <span className="text-lg font-mono font-bold text-slate-900">₹{netSupplierDisbursement.toLocaleString('en-IN')}</span>
              <span className="text-[10px] text-emerald-700 font-semibold block mt-0.5">Liquid cash in {daysToPayment} days</span>
            </div>
          </div>

          {/* Trigger Early Settlement Button */}
          <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-slate-200/80">
            <span className="text-xs text-slate-600">
              Win-Win: <strong>Supplier avoids expensive credit loans</strong> while <strong>Buyer earns {buyerApr}% return</strong> on excess treasury float.
            </span>

            <button
              onClick={() => setActiveModal(true)}
              className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-colors shadow-sm cursor-pointer"
            >
              <Smartphone className="w-3.5 h-3.5 text-emerald-400" />
              <span>Send 1-Tap CFO WhatsApp Approval</span>
            </button>
          </div>
        </div>

        {/* WhatsApp Modal Simulation */}
        {activeModal && (
          <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 z-50">
            <div className="bg-white border border-slate-200 rounded-2xl max-w-sm w-full p-5 space-y-4 shadow-2xl animate-in fade-in zoom-in-95 text-slate-900">
              <div className="flex items-center justify-between border-b pb-3 border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-emerald-600 flex items-center justify-center text-white text-xs font-bold">
                    WA
                  </div>
                  <div>
                    <h5 className="font-bold text-xs text-slate-900">RazorpayX CFO Bot</h5>
                    <span className="text-[10px] text-emerald-600">Verified Business</span>
                  </div>
                </div>
                <button onClick={() => setActiveModal(false)} className="text-slate-400 hover:text-slate-700 text-xs">
                  ✕
                </button>
              </div>

              {/* Chat Bubble */}
              <div className="bg-[#E7FFDB] p-3.5 rounded-xl rounded-tl-none border border-emerald-200 text-xs text-slate-900 space-y-2">
                <p className="font-semibold text-slate-900">
                  🔔 Early Payment Discount Opportunity
                </p>
                <p className="text-[11px] text-slate-700">
                  Apex Precision offered <strong>{discountRate}% early discount</strong> on invoice #APX-2026-881.
                </p>
                <div className="bg-white/80 p-2 rounded border border-emerald-200 text-[11px] space-y-0.5 font-mono">
                  <div>Savings: <strong className="text-emerald-700">₹{discountAmount}</strong></div>
                  <div>Payout: <strong className="text-slate-900">₹{netSupplierDisbursement}</strong></div>
                  <div>Yield: <strong>{buyerApr}% APR</strong></div>
                </div>
                <p className="text-[10px] text-slate-500">Tap below to authorize RTGS disbursement:</p>
              </div>

              {!disbursedStatus ? (
                <button
                  onClick={handleDisburse}
                  className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 transition-colors shadow-xs cursor-pointer"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Approve &amp; Disburse via RTGS</span>
                </button>
              ) : (
                <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-900 rounded-xl text-center text-xs font-bold">
                  ✓ Transfer Successful (UTR: RTGS202610258819)
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
