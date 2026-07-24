import React, { useState } from "react";
import "./DiagnosticSection.css";
import { Compass, TrendingUp, AlertTriangle, Briefcase, Heart, CheckCircle2, ArrowRight, ShieldCheck } from "lucide-react";

export default function DiagnosticSection() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedProblem, setSelectedProblem] = useState("Wealth & Debt");
  const [selectedDirection, setSelectedDirection] = useState("South-West");
  const [userName, setUserName] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const problems = [
    { id: "Wealth & Debt", label: "Financial Losses & Money Blockage", icon: TrendingUp, color: "text-[#ea580c]" },
    { id: "Health & Peace", label: "Chronic Illness & Mental Stress", icon: AlertTriangle, color: "text-rose-600" },
    { id: "Career & Business", label: "Career Stagnation & Business Loss", icon: Briefcase, color: "text-blue-600" },
    { id: "Marriage & Harmony", label: "Marriage Delay & Relationship Disputes", icon: Heart, color: "text-emerald-600" },
  ];

  const directions = [
    { code: "NE", name: "North-East (Ishan)" },
    { code: "E", name: "East (Indra)" },
    { code: "SE", name: "South-East (Agni)" },
    { code: "S", name: "South (Yama)" },
    { code: "SW", name: "South-West (Nairitya)" },
    { code: "W", name: "West (Varun)" },
    { code: "NW", name: "North-West (Vayu)" },
    { code: "N", name: "North (Kuber)" },
  ];

  const handleGenerateReport = (e) => {
    e.preventDefault();
    if (!userName || !userPhone) {
      alert("Please enter your name and WhatsApp phone number.");
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  return (
    <section className="py-16 px-6 md:px-12 bg-[#fffbf7] relative" id="vastu-diagnostic-form">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <span className="bg-orange-500/10 text-[#ea580c] border border-orange-500/30 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
            2-Minute Online Diagnostic Test
          </span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 font-sora">
            Check Your Home's <span className="orange-gradient-text">Vastu Risk Score</span>
          </h2>
          <p className="text-slate-600 text-sm md:text-base font-normal">
            Select your main life issue and entrance direction for instant energy zone calculation.
          </p>
        </div>

        {/* Diagnostic Form Container */}
        <div className="white-orange-card p-6 md:p-10 border-2 border-orange-300 shadow-xl relative bg-white">
          
          {/* Step Counter Bar */}
          <div className="flex items-center justify-between border-b border-orange-100 pb-5 mb-6">
            <div className="flex items-center gap-2.5">
              <Compass size={24} className="text-[#f97316] animate-spin-slow" />
              <span className="font-extrabold text-base md:text-lg text-slate-900 font-sora">
                Vastu Diagnostic Wizard
              </span>
            </div>
            <span className="bg-orange-500/10 text-[#ea580c] text-xs font-mono font-bold px-3 py-1 rounded-full border border-orange-300">
              Step {currentStep} of 3
            </span>
          </div>

          {/* STEP 1 */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">
                  Step 1: What is the primary challenge you are facing?
                </h3>
                <p className="text-xs text-slate-500">
                  Choose your biggest concern to map the corresponding directional zone defect.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {problems.map((p) => {
                  const IconComp = p.icon;
                  const isSelected = selectedProblem === p.id;
                  return (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setSelectedProblem(p.id)}
                      className={`p-4 rounded-2xl border text-left flex items-start gap-3.5 transition-all cursor-pointer ${
                        isSelected
                          ? "bg-orange-50/90 border-[#f97316] text-[#ea580c] shadow-md font-bold"
                          : "bg-white border-slate-200 text-slate-700 hover:border-orange-300"
                      }`}
                    >
                      <div className={`p-2.5 rounded-xl bg-slate-100 ${p.color}`}>
                        <IconComp size={20} />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-slate-900">{p.id}</div>
                        <div className="text-xs text-slate-500 mt-0.5">{p.label}</div>
                      </div>
                    </button>
                  );
                })}
              </div>

              <button
                type="button"
                onClick={() => setCurrentStep(2)}
                className="btn-orange-primary text-sm py-4 w-full flex items-center justify-center gap-2 cursor-pointer mt-4"
              >
                <span>Continue to Step 2 (Entrance Direction)</span>
                <ArrowRight size={18} />
              </button>
            </div>
          )}

          {/* STEP 2 */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">
                  Step 2: Which direction does your Main Entrance face?
                </h3>
                <p className="text-xs text-slate-500">
                  Stand inside looking out of your main door to determine your entrance direction.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {directions.map((d) => {
                  const isSelected = selectedDirection === d.code;
                  return (
                    <button
                      key={d.code}
                      type="button"
                      onClick={() => setSelectedDirection(d.code)}
                      className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer ${
                        isSelected
                          ? "bg-orange-50 border-[#f97316] text-[#ea580c] font-bold"
                          : "bg-white border-slate-200 text-slate-700 hover:border-orange-300"
                      }`}
                    >
                      <div className="text-xs font-extrabold text-slate-900 flex items-center justify-between">
                        <span>{d.code}</span>
                        {isSelected && <CheckCircle2 size={14} className="text-[#f97316]" />}
                      </div>
                      <div className="text-[11px] text-slate-500 font-normal mt-1 leading-tight">
                        {d.name}
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="flex gap-4 pt-2">
                <button
                  type="button"
                  onClick={() => setCurrentStep(1)}
                  className="w-1/3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs py-3.5 rounded-xl border border-slate-200 cursor-pointer"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={() => setCurrentStep(3)}
                  className="w-2/3 btn-orange-primary text-sm py-3.5 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Analyze Vastu Risk Score</span>
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3 */}
          {currentStep === 3 && !isSubmitted && (
            <form onSubmit={handleGenerateReport} className="space-y-5">
              
              <div className="bg-orange-50/80 border border-orange-200 p-4 rounded-2xl space-y-2 text-center">
                <div className="flex items-center justify-between text-xs font-semibold">
                  <span className="text-slate-700">Vastu Energy Risk Rating:</span>
                  <span className="text-rose-600 font-bold">HIGH DEFECT RISK (68% Imbalance)</span>
                </div>
                <div className="w-full bg-slate-200 h-3 rounded-full overflow-hidden">
                  <div className="bg-gradient-to-r from-orange-500 to-rose-600 h-full w-[68%] rounded-full animate-pulse" />
                </div>
                <p className="text-xs text-[#c2410c] font-bold pt-1">
                  ⚠️ {selectedDirection} Entrance is strongly linked with {selectedProblem}. Immediate remedy recommended.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">Your Full Name</label>
                  <input 
                    type="text"
                    required
                    placeholder="Enter your full name"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-[#f97316]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">WhatsApp Mobile Number</label>
                  <div className="flex">
                    <span className="bg-slate-100 border border-r-0 border-slate-300 rounded-l-xl px-3.5 py-3 text-xs text-slate-500 flex items-center">
                      +91
                    </span>
                    <input 
                      type="tel"
                      required
                      maxLength={10}
                      placeholder="10-digit WhatsApp number"
                      value={userPhone}
                      onChange={(e) => setUserPhone(e.target.value.replace(/\D/g, ""))}
                      className="w-full bg-white border border-slate-300 rounded-r-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-[#f97316]"
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-600 pt-1">
                <span>📄 Full Personalised PDF Report + Remedial Map</span>
                <span className="text-[#ea580c] font-bold text-sm">Special Offer: ₹996 <del className="text-slate-400 font-normal">₹5,999</del></span>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-orange-primary text-base py-4 flex items-center justify-center gap-2 cursor-pointer"
              >
                {isSubmitting ? (
                  <span>Generating Your Custom Report...</span>
                ) : (
                  <>
                    <span>BUY NOW at ₹996 only</span>
                    <ArrowRight size={20} />
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-4 text-xs text-slate-500 pt-1">
                <span className="flex items-center gap-1"><ShieldCheck size={14} className="text-emerald-600" /> 256-Bit SSL Secured</span>
                <span>•</span>
                <span>Instant WhatsApp & Email Download</span>
              </div>

            </form>
          )}

          {/* SUCCESS */}
          {isSubmitted && (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-300">
                <CheckCircle2 size={36} />
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900 font-sora">Report Ready for {userName}!</h3>
              <p className="text-sm text-slate-600 leading-relaxed max-w-md mx-auto">
                We have generated your custom Vastu report for <strong className="text-[#ea580c]">{selectedDirection}</strong> entrance and <strong className="text-[#ea580c]">{selectedProblem}</strong> remedies. Your WhatsApp download link has been sent to +91 {userPhone}.
              </p>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
