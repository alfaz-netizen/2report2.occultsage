import React from "react";
import "./Hero.css";
import { 
  Users, Award, Calendar, Clock, Star, 
  ShieldCheck, ArrowRight, Sparkles, Lock 
} from "lucide-react";
import acharyaGroupImg from "../../assets/Group-219-1.png";

export default function Hero({ onNavigateCheckout }) {
  return (
    <section className="relative py-6 md:py-10 px-3 md:px-8 bg-gradient-to-b from-[#fffbf7] via-[#fff5eb] to-[#fffbf7] text-slate-900 overflow-hidden border-b border-orange-200/60">
      
      {/* Background Subtle Dotted Grid & Warm Radial Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(#f97316_0.75px,transparent_0.75px)] [background-size:20px_20px] opacity-15 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-r from-orange-400/15 via-amber-400/15 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1400px] mx-auto space-y-6 md:space-y-8 relative z-10">

        {/* Hero Main 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">

          {/* RIGHT COLUMN IMAGE (On Mobile: order-1 so it renders FIRST at the top) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end lg:pr-10 relative mt-0 lg:-mt-26 z-10 order-1 lg:order-2">
            <div className="max-w-md md:max-w-xl w-full flex justify-center relative">
              
              {/* Acharya Ji Group Image */}
              <img 
                src={acharyaGroupImg} 
                alt="Acharya Ji - Vastu Scholar Energy Graphics" 
                className="w-full max-h-[380px] sm:max-h-[480px] lg:max-h-[700px] object-contain drop-shadow-2xl scale-105 lg:scale-125 transition-transform origin-top pt-0.5"
              />

            </div>
          </div>

          {/* LEFT COLUMN CONTENT (On Mobile: order-2 so it renders SECOND below the image) */}
          <div className="lg:col-span-7 space-y-4 md:space-y-5 text-center lg:text-left pt-1 order-2 lg:order-1">
            
            {/* Top Badge & Headline */}
            <div className="space-y-2.5 md:space-y-3">
              <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 px-3.5 py-1.5 rounded-full text-xs font-bold text-[#ea580c]">
                <Award size={14} className="text-[#f97316]" />
                <span>Based on Ancient Vedic Vastu & Numerology — Trusted by 2,50,000+ People</span>
              </div>

              {/* Master Headline */}
              <h1 className="text-2xl sm:text-3xl lg:text-[34px] xl:text-[36px] font-extrabold text-slate-900 font-sora leading-[1.28] tracking-tight">
                Personalised <span className="orange-gradient-text">Vastu Report</span> — Unlock<br className="hidden sm:inline" />
                <span className="orange-gradient-text">Wealth, Health, Marriage & Career</span>
              </h1>
            </div>

            {/* Primary Capsule CTA Button (Vibrant Orange Gradient with White Text) */}
            <div className="pt-1 w-full flex justify-center lg:justify-start">
              <button 
                onClick={onNavigateCheckout}
                className="w-full lg:w-auto btn-orange-primary text-white font-extrabold text-sm lg:text-sm px-6 lg:px-8 py-4 lg:py-4 rounded-full shadow-xl shadow-orange-500/30 flex items-center justify-center gap-2.5 transition-all duration-300 transform hover:scale-[1.02] cursor-pointer border border-amber-300/40 leading-snug tracking-tight"
              >
                <Sparkles size={18} className="text-amber-200 animate-pulse shrink-0" />
                <span className="text-center">Know your correct Vastu report now @ Rs.999/- Only</span>
                <ArrowRight size={18} className="text-white shrink-0" />
              </button>
            </div>

            {/* Target Audience Sub-Tagline */}
            <p className="text-xs md:text-sm text-slate-600 font-semibold max-w-xl mx-auto lg:mx-0 pt-0.5 leading-relaxed">
              Report specially designed for Homeowners, Couples, Business Leaders, Architects & Property Buyers
            </p>

            {/* 4 Vibrant Orange Gradient Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3.5 max-w-xl mx-auto lg:mx-0 pt-1">
              
              {/* Card 1: 10K+ Already Joined */}
              <div className="bg-gradient-to-r from-[#ff8c00] to-[#f97316] text-white p-3.5 px-4 rounded-2xl flex items-center gap-3 shadow-md shadow-orange-500/20 border border-orange-400/40">
                <div className="p-2 bg-white/20 rounded-xl shrink-0">
                  <Users size={18} className="text-white" />
                </div>
                <div className="text-left font-sora font-extrabold text-xs sm:text-sm md:text-base tracking-wide">
                  10K+ Already Joined
                </div>
              </div>

              {/* Card 2: 15+ Years Experience */}
              <div className="bg-gradient-to-r from-[#ff8c00] to-[#f97316] text-white p-3.5 px-4 rounded-2xl flex items-center gap-3 shadow-md shadow-orange-500/20 border border-orange-400/40">
                <div className="p-2 bg-white/20 rounded-xl shrink-0">
                  <Award size={18} className="text-white" />
                </div>
                <div className="text-left font-sora font-extrabold text-xs sm:text-sm md:text-base tracking-wide">
                  15+ Years Experience
                </div>
              </div>

              {/* Card 3: 22nd, 23rd & 24th July */}
              <div className="bg-gradient-to-r from-[#ff8c00] to-[#f97316] text-white p-3.5 px-4 rounded-2xl flex items-center gap-3 shadow-md shadow-orange-500/20 border border-orange-400/40">
                <div className="p-2 bg-white/20 rounded-xl shrink-0">
                  <Calendar size={18} className="text-white" />
                </div>
                <div className="text-left font-sora font-extrabold text-xs sm:text-sm md:text-base tracking-wide">
                  22nd, 23rd & 24th July
                </div>
              </div>

              {/* Card 4: 8 PM - 10:30 PM */}
              <div className="bg-gradient-to-r from-[#ff8c00] to-[#f97316] text-white p-3.5 px-4 rounded-2xl flex items-center gap-3 shadow-md shadow-orange-500/20 border border-orange-400/40">
                <div className="p-2 bg-white/20 rounded-xl shrink-0">
                  <Clock size={18} className="text-white" />
                </div>
                <div className="text-left font-sora font-extrabold text-xs sm:text-sm md:text-base tracking-wide">
                  8 PM - 10:30 PM.
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* SLEEK FLOATING TRUST BAR Layer */}
        <div className="bg-white/95 backdrop-blur-md border-2 border-orange-200 p-3.5 sm:p-4 md:p-5 rounded-3xl shadow-xl w-full grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 items-center justify-between text-center relative z-20">
          
          <div className="flex flex-col items-center justify-center space-y-0.5 border-r border-orange-100 last:border-0 md:last:border-r pr-2 md:pr-0">
            <span className="text-lg sm:text-xl md:text-2xl font-extrabold text-[#ea580c] font-sora">100,000+</span>
            <span className="text-[10px] sm:text-xs text-slate-600 font-bold">Happy Consultations</span>
          </div>

          <div className="flex flex-col items-center justify-center space-y-0.5 border-r-0 md:border-r border-orange-100 pr-0 md:pr-0">
            <div className="flex items-center gap-1 text-lg sm:text-xl md:text-2xl font-extrabold text-amber-500 font-sora">
              <Star size={18} className="fill-amber-500" />
              <span>4.9 / 5</span>
            </div>
            <span className="text-[10px] sm:text-xs text-slate-600 font-bold">12,840+ User Reviews</span>
          </div>

          <div className="flex flex-col items-center justify-center space-y-0.5 border-r border-orange-100 last:border-0 md:last:border-r pr-2 md:pr-0">
            <div className="flex items-center gap-1 text-[11px] sm:text-xs md:text-sm font-extrabold text-emerald-700">
              <ShieldCheck size={16} className="text-emerald-600" />
              <span>100% Non-Demolition</span>
            </div>
            <span className="text-[10px] sm:text-xs text-slate-600 font-bold">Zero Wall Breaking</span>
          </div>

          <div className="flex flex-col items-center justify-center space-y-0.5">
            <div className="flex items-center gap-1 text-[11px] sm:text-xs md:text-sm font-extrabold text-slate-800">
              <Lock size={15} className="text-[#f97316]" />
              <span>ISO 9001:2015</span>
            </div>
            <span className="text-[10px] sm:text-xs text-slate-600 font-bold">Certified Vedic Platform</span>
          </div>

        </div>

        {/* Duplicate Centered CTA Button Directly Below Floating Trust Bar (Vibrant Orange Gradient with White Text) */}
        <div className="pt-3 md:pt-5 flex justify-center w-full relative z-20">
          <button 
            onClick={onNavigateCheckout}
            className="w-full sm:w-auto btn-orange-primary text-white font-black text-base lg:text-lg px-7 lg:px-12 py-4 lg:py-4.5 rounded-full shadow-2xl shadow-orange-500/35 flex items-center justify-center gap-3 transition-all duration-300 transform hover:scale-[1.02] cursor-pointer border border-amber-300/40 leading-snug tracking-tight"
          >
            <Sparkles size={22} className="text-amber-200 animate-pulse shrink-0" />
            <span className="text-center">Know your correct Vastu report now @ Rs.999/- Only</span>
            <ArrowRight size={20} className="text-white shrink-0" />
          </button>
        </div>

      </div>
    </section>
  );
}
