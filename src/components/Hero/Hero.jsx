import React from "react";
import "./Hero.css";
import { 
  Award, Star, 
  ShieldCheck, ArrowRight, Sparkles, Lock 
} from "lucide-react";
import acharyaGroupImg from "../../assets/Elite Presentation (1).png";

export default function Hero({ onNavigateCheckout }) {
  return (
    <section className="relative py-6 md:py-10 px-3 md:px-8 bg-gradient-to-b from-[#fffbf7] via-[#fff5eb] to-[#fffbf7] text-slate-900 overflow-hidden border-b border-orange-200/60">
      
      {/* Top-Left Glowing Rotating Vastu Chakra Mandala Animation */}
      <div className="absolute -top-20 -left-20 md:-top-28 md:-left-28 w-[380px] sm:w-[460px] md:w-[540px] h-[380px] sm:h-[460px] md:h-[540px] opacity-30 pointer-events-none z-0">
        <svg 
          viewBox="0 0 500 500" 
          className="w-full h-full animate-vastu-spin drop-shadow-[0_0_25px_rgba(249,115,22,0.4)]"
        >
          <defs>
            <linearGradient id="goldVastuGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f97316" />
              <stop offset="50%" stopColor="#fbbf24" />
              <stop offset="100%" stopColor="#ea580c" />
            </linearGradient>
          </defs>
          
          {/* Outer Concentric Sacred Vastu Circles */}
          <circle cx="250" cy="250" r="230" stroke="url(#goldVastuGlow)" strokeWidth="2.5" fill="none" strokeDasharray="6 4" />
          <circle cx="250" cy="250" r="215" stroke="url(#goldVastuGlow)" strokeWidth="1.5" fill="none" />
          <circle cx="250" cy="250" r="195" stroke="url(#goldVastuGlow)" strokeWidth="1" fill="none" strokeDasharray="12 6" />

          {/* 16 Vastu Zone Directional Rays */}
          {[...Array(16)].map((_, i) => (
            <line
              key={i}
              x1="250"
              y1="250"
              x2={250 + 215 * Math.cos((i * 22.5 * Math.PI) / 180)}
              y2={250 + 215 * Math.sin((i * 22.5 * Math.PI) / 180)}
              stroke="url(#goldVastuGlow)"
              strokeWidth={i % 4 === 0 ? "2" : "1"}
              strokeOpacity={i % 4 === 0 ? "0.9" : "0.5"}
            />
          ))}

          {/* Degree Ticks & Dots */}
          {[...Array(36)].map((_, i) => (
            <circle
              key={i}
              cx={250 + 222 * Math.cos((i * 10 * Math.PI) / 180)}
              cy={250 + 222 * Math.sin((i * 10 * Math.PI) / 180)}
              r="2.5"
              fill="#f97316"
            />
          ))}

          {/* Inner Sacred Geometry Star & Inner Rings */}
          <polygon
            points="250,90 390,330 110,330"
            stroke="url(#goldVastuGlow)"
            strokeWidth="1.5"
            fill="none"
            opacity="0.8"
          />
          <polygon
            points="250,410 390,170 110,170"
            stroke="url(#goldVastuGlow)"
            strokeWidth="1.5"
            fill="none"
            opacity="0.8"
          />

          <circle cx="250" cy="250" r="120" stroke="url(#goldVastuGlow)" strokeWidth="1.5" fill="none" />
          <circle cx="250" cy="250" r="70" stroke="url(#goldVastuGlow)" strokeWidth="2" fill="none" strokeDasharray="4 4" />
          <circle cx="250" cy="250" r="25" fill="url(#goldVastuGlow)" opacity="0.35" />
          <circle cx="250" cy="250" r="6" fill="#ea580c" />
        </svg>
      </div>

      {/* Background Subtle Dotted Grid & Warm Radial Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(#f97316_0.75px,transparent_0.75px)] [background-size:20px_20px] opacity-15 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-r from-orange-400/15 via-amber-400/15 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1400px] mx-auto space-y-5 md:space-y-8 relative z-10">

        {/* Hero Main 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">

          {/* LEFT COLUMN CONTENT */}
          <div className="lg:col-span-7 space-y-5 lg:space-y-7 text-center lg:text-left pt-1 flex flex-col">
            
            {/* 1. TOP SLIM BADGE (Phone & Desktop - 100% Data Consistent with 60,000+) */}
            <div className="order-1 lg:order-1">
              <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 px-4 py-2.5 rounded-full text-xs md:text-sm font-extrabold text-[#ea580c] hero-top-badge shadow-sm">
                <Award size={16} className="text-[#f97316] shrink-0" />
                <span>Based on Ancient Vedic Vastu & Numerology — Trusted by 60,000+ People</span>
              </div>
            </div>

            {/* 2. MASTER HEADLINE (Phone & Desktop) */}
            <div className="order-2 lg:order-2 pt-1 lg:pt-2">
              <h1 className="text-2xl sm:text-3xl lg:text-[38px] xl:text-[42px] font-extrabold text-slate-900 font-sora leading-[1.26] tracking-tight">
                Personalised <span className="orange-gradient-text">Vastu Report</span> — Unlock<br className="hidden sm:inline" />
                <span className="orange-gradient-text">Wealth, Health, Marriage & Career</span>
              </h1>
            </div>

            {/* 3. HERO IMAGE FOR MOBILE ONLY */}
            <div className="order-3 lg:hidden flex justify-center items-center hero-mobile-img-wrapper relative z-0">
              <img 
                src={acharyaGroupImg} 
                alt="Acharya Ji - Vastu Scholar Energy Graphics" 
                className="hero-acharya-img"
              />
            </div>

            {/* 4. TARGET AUDIENCE SUB-TAGLINE */}
            <div className="order-5 lg:order-4 pt-1 lg:pt-2">
              <p className="text-sm md:text-base text-slate-700 font-semibold max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Report specially designed for Homeowners, Couples, Business Leaders, Architects & Property Buyers
              </p>
            </div>

            {/* 5. PRIMARY CAPSULE CTA BUTTON */}
            <div className="order-4 lg:order-5 pt-3 lg:pt-4 relative z-20">
              <div className="w-full flex justify-center lg:justify-start">
                <button 
                  onClick={onNavigateCheckout}
                  className="w-full lg:w-auto btn-orange-primary text-white font-black text-sm sm:text-base lg:text-base px-8 sm:px-11 py-4 sm:py-4.5 rounded-full shadow-2xl shadow-orange-500/35 flex items-center justify-center gap-3 transition-all duration-300 transform hover:scale-[1.02] cursor-pointer border border-amber-300/40 leading-snug tracking-tight relative z-30"
                >
                  <Sparkles size={20} className="text-amber-200 animate-pulse shrink-0" />
                  <span className="text-center">Know your correct Vastu report now @ Rs.999/- Only</span>
                  <ArrowRight size={20} className="text-white shrink-0" />
                </button>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN IMAGE FOR DESKTOP ONLY (>= 1024px) */}
          <div className="hidden lg:flex lg:col-span-5 justify-center items-center relative z-10">
            <div className="max-w-md md:max-w-lg w-full flex justify-center items-center relative">
              <img 
                src={acharyaGroupImg} 
                alt="Acharya Ji - Vastu Scholar Energy Graphics" 
                className="hero-acharya-img"
              />
            </div>
          </div>

        </div>

        {/* SLEEK FLOATING TRUST BAR Layer */}
        <div className="mt-8 lg:mt-24 bg-white/95 backdrop-blur-md border-2 border-orange-200 p-3.5 sm:p-4 md:p-5 rounded-3xl shadow-xl w-full grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 items-center justify-between text-center relative z-20">
          
          <div className="flex flex-col items-center justify-center space-y-0.5 border-r border-orange-100 last:border-0 md:last:border-r pr-2 md:pr-0">
            <span className="text-lg sm:text-xl md:text-2xl font-extrabold text-[#ea580c] font-sora">60,000+</span>
            <span className="text-[10px] sm:text-xs text-slate-600 font-bold">Happy Consultations</span>
          </div>

          <div className="flex flex-col items-center justify-center space-y-0.5 border-r-0 md:border-r border-orange-100 pr-0 md:pr-0">
            <div className="flex items-center gap-1 text-lg sm:text-xl md:text-2xl font-extrabold text-amber-500 font-sora">
              <Star size={18} className="fill-amber-500" />
              <span>4.7 / 5</span>
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
            className="w-full sm:w-auto btn-orange-primary text-white font-black text-xs sm:text-base lg:text-lg px-6 sm:px-12 py-3.5 sm:py-4.5 rounded-full shadow-2xl shadow-orange-500/35 flex items-center justify-center gap-3 transition-all duration-300 transform hover:scale-[1.02] cursor-pointer border border-amber-300/40 leading-snug tracking-tight"
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
