import React from "react";
import "./Hero.css";
import { 
  Award, Star, 
  ShieldCheck, ArrowRight, Sparkles 
} from "lucide-react";
import heroVideo from "../../assets/Vastu Report Homepage Hero Section.mp4";
import heroPosterImg from "../../assets/hero_poster.jpg";
import vwLogo from "../../assets/VW-HR.png";

export default function Hero({ onNavigateCheckout, onBackToHome }) {
  return (
    <section className="relative pt-4 sm:pt-6 md:pt-8 pb-6 md:pb-10 px-3 md:px-8 bg-gradient-to-b from-[#fffbf7] via-[#fff5eb] to-[#fffbf7] text-slate-900 overflow-hidden border-b border-orange-200/60">
      
      {/* Background Subtle Dotted Grid & Warm Radial Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(#f97316_0.75px,transparent_0.75px)] [background-size:20px_20px] opacity-15 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-r from-orange-400/15 via-amber-400/15 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Centered Main Container - Anchors Vastu Chakra directly behind left content on ALL screen widths */}
      <div className="max-w-[1400px] mx-auto space-y-4 md:space-y-6 relative z-10">

        {/* 1. BRAND LOGO - Positioned at Top-Left Corner seamlessly */}
        <div className="flex justify-center lg:justify-start items-center pb-2 sm:pb-4 relative z-20">
          <img 
            src={vwLogo} 
            alt="Vastu Wheels Logo" 
            onClick={onBackToHome}
            className="h-10 sm:h-12 md:h-14 w-auto object-contain cursor-pointer transition-transform hover:scale-105"
          />
        </div>

        {/* 2. Elegant Soft Golden Vastu Chakra Watermark (Subtle Opacity 0.24 matching reference site clicknumero.com) */}
        <div className="absolute -top-32 -left-28 sm:-top-40 sm:-left-40 md:-top-48 md:-left-52 w-[500px] sm:w-[620px] md:w-[720px] h-[500px] sm:h-[620px] md:h-[720px] opacity-[0.24] pointer-events-none z-0">
          <svg 
            viewBox="0 0 500 500" 
            className="w-full h-full animate-vastu-spin drop-shadow-[0_0_15px_rgba(251,191,36,0.25)]"
          >
            <defs>
              <linearGradient id="goldVastuGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f59e0b" />
                <stop offset="50%" stopColor="#fbbf24" />
                <stop offset="100%" stopColor="#d97706" />
              </linearGradient>
            </defs>
            
            {/* Outer Concentric Sacred Vastu Circles */}
            <circle cx="250" cy="250" r="230" stroke="url(#goldVastuGlow)" strokeWidth="2" fill="none" strokeDasharray="6 4" />
            <circle cx="250" cy="250" r="215" stroke="url(#goldVastuGlow)" strokeWidth="1.2" fill="none" />
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
                strokeWidth={i % 4 === 0 ? "1.5" : "0.8"}
                strokeOpacity={i % 4 === 0 ? "0.6" : "0.35"}
              />
            ))}

            {/* Degree Ticks & Dots */}
            {[...Array(36)].map((_, i) => (
              <circle
                key={i}
                cx={250 + 222 * Math.cos((i * 10 * Math.PI) / 180)}
                cy={250 + 222 * Math.sin((i * 10 * Math.PI) / 180)}
                r="2"
                fill="#f59e0b"
                opacity="0.5"
              />
            ))}

            {/* Inner Sacred Geometry Star & Inner Rings */}
            <polygon
              points="250,90 390,330 110,330"
              stroke="url(#goldVastuGlow)"
              strokeWidth="1.2"
              fill="none"
              opacity="0.4"
            />
            <polygon
              points="250,410 390,170 110,170"
              stroke="url(#goldVastuGlow)"
              strokeWidth="1.2"
              fill="none"
              opacity="0.4"
            />

            <circle cx="250" cy="250" r="120" stroke="url(#goldVastuGlow)" strokeWidth="1.2" fill="none" opacity="0.4" />
            <circle cx="250" cy="250" r="70" stroke="url(#goldVastuGlow)" strokeWidth="1.5" fill="none" strokeDasharray="4 4" opacity="0.4" />
            <circle cx="250" cy="250" r="25" fill="url(#goldVastuGlow)" opacity="0.2" />
            <circle cx="250" cy="250" r="5" fill="#f59e0b" opacity="0.6" />
          </svg>
        </div>

        {/* Hero Main 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center relative z-10">

          {/* LEFT COLUMN CONTENT */}
          <div className="lg:col-span-6 space-y-5 lg:space-y-7 text-center lg:text-left pt-1 flex flex-col">
            
            {/* 1. TOP SLIM BADGE (Phone & Desktop) */}
            <div className="order-1 lg:order-1">
              <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 px-4 py-2.5 rounded-full text-xs md:text-sm font-extrabold text-[#ea580c] hero-top-badge shadow-sm">
                <Award size={16} className="text-[#f97316] shrink-0" />
                <span>Based on Ancient Vedic Vastu & Numerology — Trusted by 60,000+ People</span>
              </div>
            </div>

            {/* 2. MASTER HEADLINE (Phone & Desktop) */}
            <div className="order-2 lg:order-2 pt-1 lg:pt-2">
              <h1 className="text-2xl sm:text-3xl lg:text-[26px] xl:text-[31px] 2xl:text-[35px] font-extrabold text-slate-900 font-sora leading-[1.3] tracking-tight">
                <span className="block">Get Your <span className="orange-gradient-text">Personalized Vastu Report</span></span>
                <span className="orange-gradient-text block pt-1 sm:pt-1.5">Improve Your Health, Wealth, Relationships, Career</span>
              </h1>
            </div>

            {/* 3. HERO VIDEO FOR MOBILE ONLY */}
            <div className="order-3 lg:hidden flex justify-center items-center py-2 relative z-10 w-full">
              <div className="w-full max-w-md sm:max-w-lg relative">
                
                {/* Soft Warm Ambient Glow */}
                <div className="absolute -inset-3 bg-gradient-to-r from-orange-400/25 via-amber-400/25 to-orange-500/25 rounded-[28px] blur-xl pointer-events-none" />
                
                {/* Frameless Glass Video Card */}
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-orange-400/80 shadow-2xl shadow-orange-500/25 bg-slate-950 aspect-[16/9] group">
                  <video
                    src={heroVideo}
                    poster={heroPosterImg}
                    controls
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover"
                  />

                  {/* Top Left Floating Pill */}
                  <div className="absolute top-2.5 left-2.5 pointer-events-none z-10">
                    <span className="bg-slate-950/80 text-white text-[10px] sm:text-xs font-extrabold px-3 py-1 rounded-full border border-amber-300/40 backdrop-blur-md flex items-center gap-1.5 shadow-md">
                      <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                      <span>Vastu Report Overview</span>
                    </span>
                  </div>

                  {/* Top Right Floating Badge */}
                  <div className="absolute top-2.5 right-2.5 pointer-events-none z-10">
                    <span className="bg-orange-500/90 text-white text-[10px] sm:text-xs font-extrabold px-2.5 py-1 rounded-full backdrop-blur-md flex items-center gap-1 shadow-md">
                      <ShieldCheck size={12} className="text-white" />
                      <span>Zero Demolition</span>
                    </span>
                  </div>
                </div>

              </div>
            </div>

            {/* 4. PRIMARY CAPSULE CTA BUTTON */}
            <div className="order-4 lg:order-5 pt-0 lg:pt-3 relative z-20">
              <div className="w-full flex justify-center lg:justify-start">
                <button 
                  onClick={onNavigateCheckout}
                  className="w-full lg:w-auto btn-orange-primary text-white font-black text-sm sm:text-base lg:text-lg px-8 sm:px-11 py-4 sm:py-4.5 rounded-full shadow-2xl shadow-orange-500/35 flex items-center justify-center gap-3 transition-all duration-300 transform hover:scale-[1.02] cursor-pointer border border-amber-300/40 leading-snug tracking-tight relative z-30"
                >
                  <Sparkles size={20} className="text-amber-200 animate-pulse shrink-0" />
                  <span className="text-center tracking-wide">BUY NOW at ₹1,499 only</span>
                  <ArrowRight size={20} className="text-white shrink-0" />
                </button>
              </div>
            </div>

            {/* 5. TARGET AUDIENCE SUB-TAGLINE */}
            <div className="order-5 lg:order-4 pt-1 lg:pt-2">
              <p className="text-sm md:text-base text-slate-700 font-semibold max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Receive a customized Vastu analysis with actionable recommendations from Acharya Pankaj Ji
              </p>
            </div>

          </div>

          {/* RIGHT COLUMN VIDEO FOR DESKTOP ONLY (>= 1024px) - FRAMELESS SLEEK GLASS VIDEO DISPLAY */}
          <div className="hidden lg:flex lg:col-span-6 justify-center items-center relative z-10 pl-2">
            <div className="w-full max-w-xl xl:max-w-2xl relative">
              
              {/* Soft Ambient Background Glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-400/30 via-amber-300/30 to-orange-500/30 rounded-[36px] blur-2xl pointer-events-none" />
              
              {/* Frameless Glass Video Card */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-orange-400/90 shadow-[0_25px_60px_-15px_rgba(234,88,12,0.35)] bg-slate-950 aspect-[16/9] group">
                <video
                  src={heroVideo}
                  poster={heroPosterImg}
                  controls
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover"
                />

                {/* Floating Top Left Video Tag */}
                <div className="absolute top-3.5 left-3.5 pointer-events-none z-10">
                  <span className="bg-slate-950/85 text-white text-xs font-extrabold px-3.5 py-1.5 rounded-full border border-amber-300/40 backdrop-blur-md flex items-center gap-2 shadow-lg">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse" />
                    <span>Vastu Science Report Overview</span>
                  </span>
                </div>

                {/* Floating Top Right Badge */}
                <div className="absolute top-3.5 right-3.5 pointer-events-none z-10">
                  <span className="bg-orange-500/90 text-white text-xs font-extrabold px-3.5 py-1.5 rounded-full backdrop-blur-md flex items-center gap-1 shadow-lg border border-white/20">
                    <ShieldCheck size={14} className="text-white" />
                    <span>100% Non-Demolition</span>
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* SLEEK FLOATING TRUST BAR Layer - 1 Single Row Across Mobile & Desktop */}
        <div className="mt-4 lg:mt-2 xl:mt-3 bg-white/95 backdrop-blur-md border-2 border-orange-200 p-2 sm:p-4 md:p-5 rounded-2xl sm:rounded-3xl shadow-xl w-full grid grid-cols-3 gap-1 sm:gap-4 items-center justify-between text-center relative z-20">
          
          <div className="flex flex-col items-center justify-center space-y-0.5 border-r border-orange-100 pr-1 sm:pr-0">
            <span className="text-xs sm:text-xl md:text-2xl font-extrabold text-[#ea580c] font-sora">60,000+</span>
            <span className="text-[8px] sm:text-xs text-slate-600 font-bold leading-tight">Happy Consultations</span>
          </div>

          <div className="flex flex-col items-center justify-center space-y-0.5 border-r border-orange-100 px-1 sm:px-0">
            <div className="flex items-center gap-0.5 sm:gap-1 text-xs sm:text-xl md:text-2xl font-extrabold text-amber-500 font-sora">
              <Star size={12} className="fill-amber-500 shrink-0 sm:w-5 sm:h-5" />
              <span>4.7 / 5</span>
            </div>
            <span className="text-[8px] sm:text-xs text-slate-600 font-bold leading-tight">12,840+ User Reviews</span>
          </div>

          <div className="flex flex-col items-center justify-center space-y-0.5 pl-1 sm:pl-0">
            <div className="flex items-center gap-0.5 sm:gap-1 text-[9px] sm:text-xs md:text-sm font-extrabold text-emerald-700">
              <ShieldCheck size={12} className="text-emerald-600 shrink-0 sm:w-4 sm:h-4" />
              <span>100% Non-Demolition</span>
            </div>
            <span className="text-[8px] sm:text-xs text-slate-600 font-bold leading-tight">Zero Wall Breaking</span>
          </div>

        </div>

        {/* Duplicate Centered CTA Button Directly Below Floating Trust Bar (Vibrant Orange Gradient with White Text) */}
        <div className="pt-3 md:pt-5 flex justify-center w-full relative z-20">
          <button 
            onClick={onNavigateCheckout}
            className="w-full sm:w-auto btn-orange-primary text-white font-black text-xs sm:text-base lg:text-lg px-6 sm:px-12 py-3.5 sm:py-4.5 rounded-full shadow-2xl shadow-orange-500/35 flex items-center justify-center gap-3 transition-all duration-300 transform hover:scale-[1.02] cursor-pointer border border-amber-300/40 leading-snug tracking-tight"
          >
            <Sparkles size={22} className="text-amber-200 animate-pulse shrink-0" />
            <span className="text-center tracking-wide">BUY NOW at ₹1,499 only</span>
            <ArrowRight size={20} className="text-white shrink-0" />
          </button>
        </div>

      </div>
    </section>
  );
}
