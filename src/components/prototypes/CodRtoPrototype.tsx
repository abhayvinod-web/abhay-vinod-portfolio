import React, { useState } from 'react';
import { 
  ShieldAlert, 
  ShieldCheck, 
  Truck, 
  Zap, 
  Sparkles, 
  AlertTriangle, 
  CheckCircle2, 
  ArrowRight, 
  RotateCcw, 
  Smartphone, 
  Building2, 
  BadgePercent, 
  DollarSign,
  TrendingDown,
  Info
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface RiskFactor {
  label: string;
  impact: string;
  type: 'danger' | 'warning' | 'safe';
}

export const CodRtoPrototype: React.FC = () => {
  // Simulation State
  const [pincodeTier, setPincodeTier] = useState<'tier1' | 'tier2' | 'tier3'>('tier3');
  const [addressCompleteness, setAddressCompleteness] = useState<'high' | 'medium' | 'poor'>('poor');
  const [customerOrderHistory, setCustomerOrderHistory] = useState<'repeat' | 'first-time' | 'past-rto'>('past-rto');
  const [selectedPayment, setSelectedPayment] = useState<'cod' | 'upi'>('cod');
  const [simulatedState, setSimulatedState] = useState<'idle' | 'converting' | 'delivered' | 'rto-rejected'>('idle');
  const [savingsCount, setSavingsCount] = useState(148500);

  // Compute Risk Score
  let score = 20;
  const factors: RiskFactor[] = [];

  if (pincodeTier === 'tier3') {
    score += 30;
    factors.push({ label: 'Remote Pincode (Tier-3 Rural)', impact: '+30% Risk', type: 'danger' });
  } else if (pincodeTier === 'tier2') {
    score += 15;
    factors.push({ label: 'Semi-Urban Logistics Zone', impact: '+15% Risk', type: 'warning' });
  } else {
    factors.push({ label: 'Metro Delivery Hub (Tier-1)', impact: 'Safe Hub', type: 'safe' });
  }

  if (addressCompleteness === 'poor') {
    score += 35;
    factors.push({ label: 'Vague Address (No Landmark/Door #)', impact: '+35% Risk', type: 'danger' });
  } else if (addressCompleteness === 'medium') {
    score += 15;
    factors.push({ label: 'Partial Address (Missing Floor/Flat)', impact: '+15% Risk', type: 'warning' });
  } else {
    factors.push({ label: 'Geo-Verified Complete Address', impact: 'Verified', type: 'safe' });
  }

  if (customerOrderHistory === 'past-rto') {
    score += 35;
    factors.push({ label: 'Phone # has 2 past RTO rejections', impact: '+35% Risk', type: 'danger' });
  } else if (customerOrderHistory === 'first-time') {
    score += 10;
    factors.push({ label: 'First-time Unverified Buyer', impact: '+10% Risk', type: 'warning' });
  } else {
    factors.push({ label: 'Verified Repeat Prepaid Buyer', impact: 'Trusted', type: 'safe' });
  }

  const finalRiskScore = Math.min(score, 98);
  const isHighRisk = finalRiskScore >= 65;
  const isMediumRisk = finalRiskScore >= 40 && finalRiskScore < 65;

  const handleConvertUpToPrepaid = () => {
    setSelectedPayment('upi');
    setSimulatedState('converting');
    setTimeout(() => {
      setSimulatedState('delivered');
      setSavingsCount(prev => prev + 160);
      confetti({ particleCount: 65, spread: 60, origin: { y: 0.6 } });
    }, 1200);
  };

  const handleSimulateCourierAttempt = () => {
    if (selectedPayment === 'upi') {
      setSimulatedState('delivered');
      confetti({ particleCount: 50, spread: 55, origin: { y: 0.6 } });
    } else {
      // COD with high risk fails
      if (isHighRisk) {
        setSimulatedState('rto-rejected');
      } else {
        setSimulatedState('delivered');
      }
    }
  };

  const resetSimulation = () => {
    setSimulatedState('idle');
    setSelectedPayment('cod');
  };

  return (
    <div className="w-full bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm text-slate-900 font-sans">
      {/* Console Header */}
      <div className="bg-slate-50 px-4 py-3 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse"></span>
          <span className="font-bold text-slate-900">Prototype #4:</span>
          <span className="text-slate-600">COD Return-to-Origin (RTO) Predictor &amp; UPI Converter</span>
        </div>

        <button
          onClick={resetSimulation}
          className="flex items-center gap-1 text-slate-600 hover:text-slate-900 px-2.5 py-1 rounded bg-white hover:bg-slate-100 border border-slate-200 transition-colors shadow-2xs cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset Sandbox</span>
        </button>
      </div>

      <div className="p-5 sm:p-6 space-y-6">
        {/* Top Analytics Banner */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
          <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
            <span className="text-[11px] text-slate-500 font-medium block">Simulated Order Item</span>
            <div className="flex items-center justify-between mt-1">
              <span className="font-bold text-slate-900 text-sm">AirPulse Wireless Headphones</span>
              <span className="font-mono font-bold text-indigo-600">₹2,499</span>
            </div>
            <span className="text-[10px] text-slate-500">D2C Brand Store • Order #D2C-8821</span>
          </div>

          <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
            <span className="text-[11px] text-slate-500 font-medium block">Standard Courier Reverse Freight</span>
            <div className="flex items-center justify-between mt-1">
              <span className="font-bold text-rose-600 text-sm">₹160 / RTO Loss</span>
              <span className="text-[10px] bg-rose-100 text-rose-800 px-1.5 py-0.5 rounded font-semibold">Burnt by Merchant</span>
            </div>
            <span className="text-[10px] text-slate-500">Non-refundable forward + return shipping</span>
          </div>

          <div className="p-3.5 bg-emerald-50 border border-emerald-200 rounded-xl">
            <span className="text-[11px] text-emerald-800 font-medium block">Prevented Merchant Loss YTD</span>
            <div className="flex items-center justify-between mt-1">
              <span className="font-mono font-bold text-emerald-700 text-base">₹{savingsCount.toLocaleString('en-IN')}</span>
              <span className="text-[10px] bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded font-semibold">+34% Saved</span>
            </div>
            <span className="text-[10px] text-emerald-700">928 high-risk orders converted to UPI</span>
          </div>
        </div>

        {/* 2-Column Workbench */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column: Simulated Buyer Persona & Order Config (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-3.5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center justify-between">
                <span>Simulate Order Inputs</span>
                <span className="text-[10px] text-indigo-600 font-normal">Adjust toggles</span>
              </h4>

              {/* Delivery Pincode */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-700">Delivery Zone &amp; Pincode:</label>
                <div className="grid grid-cols-3 gap-1.5">
                  {[
                    { id: 'tier1', label: 'Tier-1 Metro' },
                    { id: 'tier2', label: 'Tier-2 City' },
                    { id: 'tier3', label: 'Tier-3 Rural' }
                  ].map(item => (
                    <button
                      key={item.id}
                      onClick={() => setPincodeTier(item.id as any)}
                      className={`py-1.5 px-2 text-[11px] font-medium rounded-lg border text-center transition-colors cursor-pointer ${
                        pincodeTier === item.id
                          ? 'bg-slate-900 text-white border-slate-900 shadow-2xs'
                          : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Address Completeness */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-700">Address Completeness (NLP parsed):</label>
                <div className="grid grid-cols-3 gap-1.5">
                  {[
                    { id: 'high', label: 'High (Verified)' },
                    { id: 'medium', label: 'Medium' },
                    { id: 'poor', label: 'Poor / Vague' }
                  ].map(item => (
                    <button
                      key={item.id}
                      onClick={() => setAddressCompleteness(item.id as any)}
                      className={`py-1.5 px-2 text-[11px] font-medium rounded-lg border text-center transition-colors cursor-pointer ${
                        addressCompleteness === item.id
                          ? 'bg-slate-900 text-white border-slate-900 shadow-2xs'
                          : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Customer Buyer History */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-700">Customer Phone History:</label>
                <div className="grid grid-cols-3 gap-1.5">
                  {[
                    { id: 'repeat', label: 'Loyal Prepaid' },
                    { id: 'first-time', label: 'First-time' },
                    { id: 'past-rto', label: 'Past RTO Buyer' }
                  ].map(item => (
                    <button
                      key={item.id}
                      onClick={() => setCustomerOrderHistory(item.id as any)}
                      className={`py-1.5 px-2 text-[11px] font-medium rounded-lg border text-center transition-colors cursor-pointer ${
                        customerOrderHistory === item.id
                          ? 'bg-slate-900 text-white border-slate-900 shadow-2xs'
                          : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Risk Factor Breakdown */}
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2.5">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
                Real-Time Risk Signal Breakdown
              </span>
              <div className="space-y-1.5">
                {factors.map((f, i) => (
                  <div key={i} className="flex items-center justify-between text-xs py-1 border-b border-slate-200/60 last:border-0">
                    <span className="text-slate-700">{f.label}</span>
                    <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${
                      f.type === 'danger'
                        ? 'bg-rose-100 text-rose-800'
                        : f.type === 'warning'
                        ? 'bg-amber-100 text-amber-800'
                        : 'bg-emerald-100 text-emerald-800'
                    }`}>
                      {f.impact}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Risk Gauge & Smart Checkout UI (7 Cols) */}
          <div className="lg:col-span-7 space-y-4">
            {/* Risk Gauge Header */}
            <div className={`p-4 rounded-xl border transition-all ${
              isHighRisk 
                ? 'bg-rose-50/70 border-rose-200 text-rose-900' 
                : isMediumRisk 
                ? 'bg-amber-50/70 border-amber-200 text-amber-900' 
                : 'bg-emerald-50/70 border-emerald-200 text-emerald-900'
            }`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {isHighRisk ? (
                    <ShieldAlert className="w-5 h-5 text-rose-600 shrink-0" />
                  ) : isMediumRisk ? (
                    <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
                  ) : (
                    <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
                  )}
                  <div>
                    <h5 className="font-bold text-sm">
                      {isHighRisk ? 'High RTO Probability Detected' : isMediumRisk ? 'Moderate RTO Risk' : 'Low RTO Risk - Safe to Ship'}
                    </h5>
                    <p className="text-xs opacity-80">
                      {isHighRisk 
                        ? 'Estimated 78% probability of parcel rejection at doorstep.' 
                        : isMediumRisk
                        ? 'Suggested to enforce verification OTP or small prepayment.'
                        : 'Safe customer profile. Immediate dispatch recommended.'}
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-2xl font-black font-mono">
                    {finalRiskScore}<span className="text-xs font-normal">/100</span>
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-wider">Risk Score</span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-slate-200 h-2 rounded-full mt-3 overflow-hidden">
                <div 
                  className={`h-full transition-all duration-300 ${
                    isHighRisk ? 'bg-rose-600' : isMediumRisk ? 'bg-amber-500' : 'bg-emerald-500'
                  }`}
                  style={{ width: `${finalRiskScore}%` }}
                ></div>
              </div>
            </div>

            {/* Smart Checkout Gateway Gatekeeper */}
            <div className="border border-slate-200 rounded-xl p-5 space-y-4 bg-white shadow-2xs">
              <h5 className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center justify-between">
                <span>Dynamic Checkout Payment Selector</span>
                <span className="text-[11px] text-slate-500 font-normal">Simulated Customer View</span>
              </h5>

              {/* Option 1: Cash on Delivery (With High-Risk Warning) */}
              <div className={`p-3.5 rounded-xl border transition-all ${
                selectedPayment === 'cod' ? 'border-slate-900 bg-slate-50' : 'border-slate-200 bg-white'
              }`}>
                <div className="flex items-start justify-between gap-3">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input 
                      type="radio" 
                      name="paymentMethod" 
                      checked={selectedPayment === 'cod'} 
                      onChange={() => setSelectedPayment('cod')}
                      className="mt-1"
                    />
                    <div>
                      <span className="text-xs font-bold text-slate-900 block">Cash on Delivery (COD)</span>
                      <span className="text-[11px] text-slate-500">Pay cash or QR at doorstep upon parcel arrival</span>
                      
                      {isHighRisk && (
                        <div className="mt-2 p-2 bg-rose-100/70 border border-rose-200 rounded-lg text-[11px] text-rose-800 flex items-center gap-1.5">
                          <AlertTriangle className="w-3.5 h-3.5 shrink-0 text-rose-600" />
                          <span><strong>₹150 COD Handling Fee</strong> applied due to remote location delivery risk.</span>
                        </div>
                      )}
                    </div>
                  </label>
                  <span className="font-mono text-xs font-bold text-slate-800">
                    ₹{isHighRisk ? '2,649' : '2,499'}
                  </span>
                </div>
              </div>

              {/* Option 2: UPI Pre-Pay (With Smart Conversion Incentive) */}
              <div className={`p-3.5 rounded-xl border-2 transition-all relative overflow-hidden ${
                selectedPayment === 'upi' ? 'border-indigo-600 bg-indigo-50/40' : 'border-emerald-300 bg-emerald-50/20'
              }`}>
                {isHighRisk && (
                  <div className="absolute top-0 right-0 bg-gradient-to-l from-indigo-600 to-indigo-500 text-white text-[10px] font-bold px-3 py-0.5 rounded-bl-lg shadow-2xs">
                    Recommended
                  </div>
                )}

                <div className="flex items-start justify-between gap-3">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input 
                      type="radio" 
                      name="paymentMethod" 
                      checked={selectedPayment === 'upi'} 
                      onChange={() => setSelectedPayment('upi')}
                      className="mt-1"
                    />
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-slate-900">Instant UPI Payment</span>
                        <span className="text-[10px] font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full flex items-center gap-1">
                          <Sparkles className="w-3 h-3 text-emerald-600" />
                          Save ₹150 + Free Fast Shipping
                        </span>
                      </div>
                      <span className="text-[11px] text-slate-500 block mt-0.5">
                        Zero doorstep friction • Instant order dispatch within 3 hours
                      </span>

                      {/* UPI Conversion Button */}
                      {selectedPayment !== 'upi' && isHighRisk && (
                        <button
                          onClick={handleConvertUpToPrepaid}
                          className="mt-2.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white flex items-center gap-1.5 transition-colors shadow-2xs cursor-pointer"
                        >
                          <Zap className="w-3.5 h-3.5 text-amber-300" />
                          <span>Switch to UPI &amp; Save ₹150 Instantly</span>
                        </button>
                      )}
                    </div>
                  </label>
                  <div className="text-right">
                    <span className="font-mono text-xs font-bold text-emerald-600 block">₹2,349</span>
                    <span className="text-[10px] line-through text-slate-400">₹2,649</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons to test Delivery outcome */}
              <div className="pt-2 flex flex-col sm:flex-row gap-2">
                <button
                  onClick={handleSimulateCourierAttempt}
                  className="flex-1 py-2.5 px-4 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-colors shadow-sm cursor-pointer"
                >
                  <Truck className="w-4 h-4 text-amber-400" />
                  <span>Simulate Courier Delivery Attempt</span>
                </button>
              </div>

              {/* Delivery Outcome Simulation Feedback */}
              {simulatedState === 'delivered' && (
                <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center justify-between text-xs text-emerald-900 animate-in fade-in">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span><strong>Order Successfully Delivered!</strong> 100% Cash collected / Prepaid. Merchant loss: ₹0.</span>
                  </div>
                  <span className="font-bold text-emerald-700">+₹160 Saved</span>
                </div>
              )}

              {simulatedState === 'rto-rejected' && (
                <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl flex items-center justify-between text-xs text-rose-900 animate-in fade-in">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0" />
                    <span><strong>Customer Refused at Doorstep (RTO)!</strong> Parcel returning to hub. Merchant burnt ₹160 freight fee.</span>
                  </div>
                  <span className="font-bold text-rose-700">₹160 Burn</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
