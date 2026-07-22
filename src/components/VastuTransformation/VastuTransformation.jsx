import React from "react";
import "./VastuTransformation.css";
import { ArrowRight, TrendingUp, Heart, ShieldCheck, Sun } from "lucide-react";

export default function VastuTransformation({ onNavigateCheckout }) {
  return (
    <section className="py-14 px-4 md:px-8 bg-gradient-to-b from-[#fffbf7] via-[#fff5eb] to-[#fffbf7] relative">
      <div className="max-w-[1400px] mx-auto space-y-10 text-center">
        
        {/* Main Headline */}
        <div className="space-y-3">
          <span className="bg-orange-500/10 text-[#ea580c] border border-orange-300 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
            Life Transformation Science
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 font-sora">
            Ek Sahi Vastu Remedy Aapki <span className="orange-gradient-text">Zindagi Badal Sakta Hai!</span>
          </h2>
          <p className="text-slate-600 text-base max-w-2xl mx-auto font-normal">
            When directional energy zones in your home are balanced using Acharya Ji's non-demolition remedies, natural cosmic forces align to accelerate your success.
          </p>
        </div>

        {/* Transformation Graphic & 4 Benefit Pills */}
        <div className="white-orange-card p-6 md:p-10 rounded-3xl border-2 border-orange-200 shadow-xl bg-white space-y-8">
          
          <div className="max-w-md mx-auto rounded-2xl overflow-hidden border border-orange-200 shadow-md">
            <img 
              src="/vastu-transformation.png" 
              alt="Vastu Energy Transformation" 
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
            <div className="bg-orange-50/80 p-4 rounded-2xl border border-orange-200 space-y-1">
              <div className="p-2 bg-white rounded-xl text-[#f97316] w-fit shadow-sm">
                <TrendingUp size={20} />
              </div>
              <h4 className="text-sm font-bold text-slate-900">Beshumar Daulat</h4>
              <p className="text-xs text-slate-600">Unlock money flow & clear pending debts</p>
            </div>

            <div className="bg-orange-50/80 p-4 rounded-2xl border border-orange-200 space-y-1">
              <div className="p-2 bg-white rounded-xl text-[#f97316] w-fit shadow-sm">
                <Heart size={20} />
              </div>
              <h4 className="text-sm font-bold text-slate-900">Pariwarik Prem</h4>
              <p className="text-xs text-slate-600">Remove friction & restore family peace</p>
            </div>

            <div className="bg-orange-50/80 p-4 rounded-2xl border border-orange-200 space-y-1">
              <div className="p-2 bg-white rounded-xl text-[#f97316] w-fit shadow-sm">
                <ShieldCheck size={20} />
              </div>
              <h4 className="text-sm font-bold text-slate-900">Lambi Sehat</h4>
              <p className="text-xs text-slate-600">Eliminate chronic stress & health blocks</p>
            </div>

            <div className="bg-orange-50/80 p-4 rounded-2xl border border-orange-200 space-y-1">
              <div className="p-2 bg-white rounded-xl text-[#f97316] w-fit shadow-sm">
                <Sun size={20} />
              </div>
              <h4 className="text-sm font-bold text-slate-900">Tarakki & Fame</h4>
              <p className="text-xs text-slate-600">Accelerate career growth & social respect</p>
            </div>
          </div>

          <button 
            onClick={onNavigateCheckout}
            className="btn-orange-primary text-sm md:text-base px-8 py-4 flex items-center justify-center gap-2 mx-auto cursor-pointer"
          >
            <span>Know Your Correct Vastu Remedy @ ₹199/- Only</span>
            <ArrowRight size={18} />
          </button>

        </div>

      </div>
    </section>
  );
}
