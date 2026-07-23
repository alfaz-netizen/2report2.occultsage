import React from "react";
import "./Header.css";
import { ShieldCheck, Star, ArrowRight } from "lucide-react";
import vwLogo from "../../assets/VW-HR.png";

export default function Header({ onNavigateCheckout }) {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-xl border-b border-orange-500/20 px-4 md:px-8 py-3 transition-all duration-300 shadow-sm">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        
        {/* Brand Logo - Official Full Logo Image */}
        <div className="flex items-center gap-2">
          <img 
            src={vwLogo} 
            alt="Vastu Wheels Logo" 
            className="h-9 sm:h-11 md:h-12 w-auto object-contain"
          />
          <span className="hidden sm:inline-block bg-orange-500/10 text-[#ea580c] border border-orange-500/30 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
            Official
          </span>
        </div>

        {/* Center Trust Credentials */}
        <div className="hidden lg:flex items-center gap-6 text-xs text-slate-700 bg-orange-50/80 border border-orange-200/80 px-5 py-2 rounded-full shadow-sm">
          <div className="flex items-center gap-1.5 text-slate-800 font-semibold">
            <Star size={14} className="fill-amber-500 text-amber-500" />
            <span>4.7/5 Rating</span>
            <span className="text-slate-500 font-normal">(12,840+ Reports)</span>
          </div>
          <span className="text-orange-300">|</span>
          <div className="flex items-center gap-1.5 text-emerald-700 font-semibold">
            <ShieldCheck size={15} className="text-emerald-600" />
            <span>ISO 9001:2015 Certified</span>
          </div>
        </div>

        {/* Right CTA */}
        <div className="flex items-center gap-3">
          <button 
            onClick={onNavigateCheckout}
            className="btn-orange-primary text-xs md:text-sm px-5 py-2.5 flex items-center gap-2 cursor-pointer font-bold"
          >
            <span>Get Report @ ₹999</span>
            <ArrowRight size={15} />
          </button>
        </div>

      </div>
    </header>
  );
}
