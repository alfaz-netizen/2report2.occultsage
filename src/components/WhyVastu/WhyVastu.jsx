import React from "react";
import "./WhyVastu.css";
import { AlertCircle, TrendingDown, HeartOff, ShieldAlert, ArrowRight, CheckCircle2 } from "lucide-react";

export default function WhyVastu() {
  const defects = [
    {
      direction: "South-West (SW)",
      element: "Earth Element Zone",
      title: "Money Drained & Rising Debts",
      description: "If your SW has a toilet, entrance, or blue color, your hard-earned money will constantly drain away in unexpected expenses.",
      symptoms: ["Zero Savings despite high income", "Sudden financial losses & debt", "Lack of stability in business"],
      icon: TrendingDown,
      badgeColor: "bg-amber-500/10 text-amber-700 border-amber-300"
    },
    {
      direction: "North-East (NE)",
      element: "Water/Wisdom Zone",
      title: "Chronic Health & Mental Stress",
      description: "If your NE contains a kitchen, toilet, or heavy clutter, positive cosmic energy is blocked, causing health & peace issues.",
      symptoms: ["Constant headaches & insomnia", "Unexplained health issues", "Mental confusion & anxiety"],
      icon: AlertCircle,
      badgeColor: "bg-rose-500/10 text-rose-700 border-rose-300"
    },
    {
      direction: "South-East (SE)",
      element: "Fire Element Zone",
      title: "Marriage Fights & Cash Flow Stops",
      description: "If your SE has a water tank, blue paint, or toilet, the cash fire dies, leading to relationship friction and money blockage.",
      symptoms: ["Marriage delays & relationship fights", "Blockage in daily business cashflow", "Frequent anger & disputes"],
      icon: HeartOff,
      badgeColor: "bg-[#ea580c]/10 text-[#ea580c] border-orange-300"
    },
    {
      direction: "North-West (NW)",
      element: "Air/Support Zone",
      title: "Career Stagnation & Business Loss",
      description: "If your NW has structural cuts or wrong colors, key banking support, loan approvals, and client trust will disappear.",
      symptoms: ["Promotions delayed repeatedly", "Clients leaving without reason", "Lack of financial & social support"],
      icon: ShieldAlert,
      badgeColor: "bg-blue-500/10 text-blue-700 border-blue-300"
    }
  ];

  const scrollToDiagnostic = () => {
    const el = document.getElementById("vastu-diagnostic-form");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 px-6 md:px-12 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="bg-rose-500/10 text-rose-600 border border-rose-200 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
            Critical Vastu Awareness
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 font-sora">
            Are You Experiencing Any Of These <span className="orange-gradient-text">Hidden Vastu Defects</span>?
          </h2>
          <p className="text-slate-600 text-base">
            90% of families suffer financial and emotional stress not because of hard work, but because of undetected directional energy blocks in their homes.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {defects.map((d, index) => {
            const Icon = d.icon;
            return (
              <div 
                key={index}
                className="white-orange-card white-orange-card-hover p-6 rounded-3xl flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className={`text-[11px] font-bold px-3 py-1 rounded-full border ${d.badgeColor}`}>
                      {d.direction}
                    </span>
                    <div className="p-2.5 bg-orange-50 rounded-xl text-[#ea580c]">
                      <Icon size={20} />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-slate-900 mb-1.5">{d.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{d.description}</p>
                  </div>

                  <div className="space-y-1.5 pt-3 border-t border-slate-100">
                    <span className="text-[11px] font-bold text-[#ea580c] uppercase">Warning Symptoms:</span>
                    {d.symptoms.map((symptom, sIdx) => (
                      <div key={sIdx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                        <span className="text-rose-500 font-bold">•</span>
                        <span>{symptom}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 text-xs text-emerald-700 font-semibold flex items-center gap-1.5">
                  <CheckCircle2 size={15} className="text-emerald-600" />
                  <span>Fixable via 100% Non-Demolition Remedy</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Banner inside Problem Agitation */}
        <div className="bg-gradient-to-r from-orange-500 via-[#f97316] to-[#ea580c] text-white rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl shadow-orange-500/20">
          <div className="space-y-1.5 text-center md:text-left">
            <h3 className="text-xl md:text-2xl font-extrabold font-sora">
              Don't Wait For Small Losses To Become Big Disasters
            </h3>
            <p className="text-xs md:text-sm text-orange-100 font-medium">
              Get your home diagnosed by Acharya Ji's Vastu Engine in under 2 minutes for just ₹1,499.
            </p>
          </div>

          <button 
            onClick={scrollToDiagnostic}
            className="bg-white hover:bg-orange-50 text-[#ea580c] font-extrabold text-sm px-7 py-4 rounded-full transition-all shrink-0 flex items-center gap-2 shadow-lg cursor-pointer"
          >
            <span>Diagnose My Home Vastu Now</span>
            <ArrowRight size={18} />
          </button>
        </div>

      </div>
    </section>
  );
}
