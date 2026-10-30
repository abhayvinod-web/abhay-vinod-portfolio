import React, { useState } from 'react';
import { 
  AlertCircle, 
  CheckCircle2, 
  Clock, 
  ArrowRight, 
  RefreshCw, 
  Zap, 
  ShieldCheck, 
  Search, 
  Copy, 
  Download, 
  HelpCircle,
  Building,
  Smartphone,
  Server
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface TransactionHop {
  id: string;
  name: string;
  sub: string;
  status: 'success' | 'failed' | 'pending';
  timestamp: string;
  details: string;
}

export const InstantRefundTrackerPrototype: React.FC = () => {
  const [utrInput, setUtrInput] = useState('429188019284');
  const [activeScenario, setActiveScenario] = useState<'timeout' | 'glitch' | 'resolved'>('timeout');
  const [reversalStatus, setReversalStatus] = useState<'pending' | 'processing' | 'refunded'>('pending');
  const [copiedUtr, setCopiedUtr] = useState(false);

  const hops: TransactionHop[] = [
    {
      id: 'hop-1',
      name: 'Customer Bank Account',
      sub: 'HDFC Bank (•••• 8910)',
      status: 'success',
      timestamp: '10:14:02 IST',
      details: '₹1,850.00 debited from user savings balance via UPI pin verification.'
    },
    {
      id: 'hop-2',
      name: 'NPCI Central UPI Switch',
      sub: 'National Clearing Switch',
      status: 'success',
      timestamp: '10:14:03 IST',
      details: 'Routing packet validated. UTR 429188019284 assigned and cleared.'
    },
    {
      id: 'hop-3',
      name: 'Acquiring Bank Gateway',
      sub: 'Merchant Gateway Ingest',
      status: activeScenario === 'timeout' ? 'failed' : 'failed',
      timestamp: '10:14:15 IST',
      details: 'HTTP 504 Gateway Timeout: Bank switch failed to acknowledge settlement within 12s SLA.'
    },
    {
      id: 'hop-4',
      name: 'Merchant App / Order Engine',
      sub: 'Swiggy / IRCTC Order Desk',
      status: 'failed',
      timestamp: '10:14:16 IST',
      details: 'Cart expired without callback confirmation. Order status marked FAILED.'
    }
  ];

  const handleTriggerInstantReversal = () => {
    setReversalStatus('processing');
    setTimeout(() => {
      setReversalStatus('refunded');
      confetti({ particleCount: 70, spread: 60, origin: { y: 0.6 } });
    }, 1500);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(utrInput);
    setCopiedUtr(true);
    setTimeout(() => setCopiedUtr(false), 2000);
  };

  return (
    <div className="w-full bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm text-slate-900 font-sans">
      {/* Top Banner */}
      <div className="bg-slate-50 px-4 py-3 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-indigo-600 animate-pulse"></span>
          <span className="font-bold text-slate-900">Prototype #5:</span>
          <span className="text-slate-600">"Money Debited, Order Failed" Instant Refund &amp; UTR Hop Visualizer</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[11px] text-slate-500 hidden sm:inline">Try preset:</span>
          <button
            onClick={() => {
              setActiveScenario('timeout');
              setReversalStatus('pending');
              setUtrInput('429188019284');
            }}
            className={`px-2 py-1 rounded text-[11px] font-medium border cursor-pointer ${
              activeScenario === 'timeout' ? 'bg-slate-900 text-white border-slate-900' : 'bg-white text-slate-600 border-slate-200'
            }`}
          >
            504 Gateway Timeout
          </button>
        </div>
      </div>

      <div className="p-5 sm:p-6 space-y-6">
        {/* Incident Summary Card */}
        <div className="bg-rose-50 border border-rose-200 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-lg bg-rose-100 flex items-center justify-center text-rose-600 shrink-0 mt-0.5">
              <AlertCircle className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="text-sm font-bold text-rose-900">Payment Debited but Merchant Order Not Created</h4>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-rose-200 text-rose-900 uppercase">
                  Pending Auto-Reversal
                </span>
              </div>
              <p className="text-xs text-rose-700 mt-1">
                Amount <strong className="font-mono">₹1,850.00</strong> was deducted from user's bank, but the merchant order timed out.
              </p>
              <div className="flex items-center gap-2 mt-2 text-xs text-slate-600 font-mono">
                <span>Bank UTR: <strong>{utrInput}</strong></span>
                <button
                  onClick={handleCopy}
                  className="p-1 hover:bg-rose-100 rounded text-slate-500 cursor-pointer"
                  title="Copy UTR"
                >
                  <Copy className="w-3.5 h-3.5" />
                </button>
                {copiedUtr && <span className="text-[10px] text-emerald-600 font-sans font-bold">Copied!</span>}
              </div>
            </div>
          </div>

          {/* Instant Action CTA */}
          <div className="shrink-0 text-left sm:text-right">
            {reversalStatus === 'pending' && (
              <button
                onClick={handleTriggerInstantReversal}
                className="px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold flex items-center gap-2 transition-all shadow-md shadow-indigo-600/20 cursor-pointer"
              >
                <Zap className="w-4 h-4 text-amber-300" />
                <span>Claim Instant Source Refund (IMPS)</span>
              </button>
            )}

            {reversalStatus === 'processing' && (
              <div className="flex items-center gap-2 text-xs font-bold text-indigo-700 bg-indigo-50 px-3 py-2 rounded-lg border border-indigo-200">
                <RefreshCw className="w-4 h-4 animate-spin text-indigo-600" />
                <span>Reconciling with NPCI Settlement Pool...</span>
              </div>
            )}

            {reversalStatus === 'refunded' && (
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-2 rounded-lg border border-emerald-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>₹1,850.00 Refunded in 2.4s</span>
              </div>
            )}
            <span className="text-[10px] text-slate-500 block mt-1">Saves user 5–7 days traditional bank wait</span>
          </div>
        </div>

        {/* Real-Time Hop Visualization */}
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <h5 className="text-xs font-bold uppercase tracking-wider text-slate-800">
              Live Network Packet Hop Diagnostic
            </h5>
            <span className="text-[11px] text-slate-500 font-mono">Telemetry Latency: 14ms</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
            {hops.map((hop, index) => (
              <div 
                key={hop.id}
                className={`p-4 rounded-xl border relative ${
                  hop.status === 'success' 
                    ? 'bg-slate-50 border-slate-200' 
                    : 'bg-rose-50/50 border-rose-200'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono text-slate-400">HOP 0{index + 1}</span>
                  <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold uppercase ${
                    hop.status === 'success' ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                  }`}>
                    {hop.status === 'success' ? 'Success' : 'Broken / Timeout'}
                  </span>
                </div>

                <h6 className="text-xs font-bold text-slate-900">{hop.name}</h6>
                <p className="text-[11px] text-slate-500 mb-2">{hop.sub}</p>

                <p className="text-[11px] text-slate-600 leading-relaxed bg-white/80 p-2 rounded-lg border border-slate-200/60 font-sans">
                  {hop.details}
                </p>

                <div className="mt-2 text-[10px] font-mono text-slate-400 flex items-center justify-between">
                  <span>Timestamp:</span>
                  <span>{hop.timestamp}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Traditional T+7 Days vs Instant Razorpay Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-700 block">
              Traditional Banking Flow (T+5 to T+7 Days)
            </span>
            <p className="text-xs text-slate-600 leading-relaxed">
              Customer waits until end-of-day batch files (EOD clearing) are reconciled by both issuing and acquiring banks. Frustrated customers submit 3–4 support tickets and post complaints.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-500 pt-1 font-mono">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <span>Turnaround: 120–168 Hours</span>
            </div>
          </div>

          <div className="p-4 bg-emerald-50/60 rounded-xl border border-emerald-200 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 block">
              Instant Reconciliation Engine (&lt; 60 Seconds)
            </span>
            <p className="text-xs text-slate-700 leading-relaxed">
              Once the 504 timeout is caught by webhook telemetry, the gateway triggers an immediate IMPS/UPI reverse disbursement from a dedicated merchant liquidity float. Zero tickets raised.
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-700 pt-1 font-mono font-semibold">
              <Zap className="w-3.5 h-3.5 text-emerald-600" />
              <span>Turnaround: Real-Time Instant Reversal</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
