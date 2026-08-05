import React, { useState, useEffect } from "react";
import "./ExclusiveBonuses.css";
import { Sparkles, ArrowRight } from "lucide-react";

import palmistryNotesImg from "../../assets/Palmistry Secrets Notes dd.png";
import astrologyNotesImg from "../../assets/Astrology Secrets Notes dd.png";

export default function ExclusiveBonuses({ onNavigateCheckout }) {
  // Live Countdown Timer (14 minutes 59 seconds)
  const [timeLeft, setTimeLeft] = useState(899);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 899));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  return (
    <section className="py-14 md:py-20 px-4 md:px-8 bg-gradient-to-b from-[#fff5eb] via-[#fffbf7] to-[#fff5eb] text-slate-900 overflow-hidden relative border-b border-orange-200/60">
      
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] bg-orange-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1240px] mx-auto space-y-12 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <p className="text-xs md:text-sm font-extrabold text-[#ea580c] uppercase tracking-wider">
            Order Your Personalised Vastu Science Report To Get
          </p>

          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 font-sora leading-tight tracking-tight">
            2 Exclusive <span className="orange-gradient-text">FREE Bonuses</span>
          </h2>
        </div>

        {/* 2 Big Bonus Cards with User Provided Notes Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 pt-4">
          
          {/* BONUS CARD 1: Palmistry Secrets Notes */}
          <div className="bonus-card">
            <div className="bonus-badge">
              FREE BONUS #1
            </div>

            {/* User Provided Palmistry Notes Image */}
            <div className="bonus-img-container shadow-md">
              <img 
                src={palmistryNotesImg} 
                alt="Palmistry Secrets Notes" 
                className="bonus-img"
              />
            </div>

            <div className="space-y-2">
              <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 font-sora">
                Palmistry Secrets Notes
              </h3>
              <div className="text-base font-extrabold text-[#ea580c]">
                <span className="line-through text-slate-400 mr-2">₹999</span>
                <span>FREE TODAY</span>
              </div>
            </div>

            <p className="text-xs md:text-sm text-slate-600 font-medium leading-relaxed pt-3">
              Haath ki lakeeron ke chhupe hue secrets ko decode kijiye aur apni strengths, life challenges aur destiny ko samajhiye- Enroll karte hi paaiye Exclusive Palmistry Secrets Notes bilkul FREE! 
            </p>
          </div>

          {/* BONUS CARD 2: Astrology Secrets Notes */}
          <div className="bonus-card">
            <div className="bonus-badge">
              FREE BONUS #2
            </div>

            {/* User Provided Astrology Notes Image */}
            <div className="bonus-img-container shadow-md">
              <img 
                src={astrologyNotesImg} 
                alt="Astrology Secrets Notes" 
                className="bonus-img"
              />
            </div>

            <div className="space-y-2">
              <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 font-sora">
                Astrology Secrets Notes
              </h3>
              <div className="text-base font-extrabold text-[#ea580c]">
                <span className="line-through text-slate-400 mr-2">₹999</span>
                <span>FREE TODAY</span>
              </div>
            </div>

            <p className="text-xs md:text-sm text-slate-600 font-medium leading-relaxed pt-3">
              Jaaniye kaise grahon ki gati, aapki janam kundali, aur zodiac signs aapki zindagi ko prabhavit karte hain -Yeh exclusive Astrology Secrets Notes bonus me bilkul FREE milenge.
            </p>
          </div>

        </div>

        {/* Live Urgency Countdown Timer */}
        <div className="text-center space-y-4 pt-4">
          <p className="text-xs font-extrabold text-slate-700 uppercase tracking-widest">
            Offer Expires In:
          </p>

          <div className="flex items-center justify-center gap-4">
            <div className="timer-circle">
              <span className="text-xl md:text-2xl font-extrabold text-[#ea580c] font-sora leading-none">
                {String(hours).padStart(2, "0")}
              </span>
              <span className="text-[10px] text-slate-500 font-bold uppercase mt-1">HRS</span>
            </div>

            <span className="text-2xl font-bold text-orange-400">:</span>

            <div className="timer-circle">
              <span className="text-xl md:text-2xl font-extrabold text-[#ea580c] font-sora leading-none">
                {String(minutes).padStart(2, "0")}
              </span>
              <span className="text-[10px] text-slate-500 font-bold uppercase mt-1">MINS</span>
            </div>

            <span className="text-2xl font-bold text-orange-400">:</span>

            <div className="timer-circle">
              <span className="text-xl md:text-2xl font-extrabold text-[#ea580c] font-sora leading-none">
                {String(seconds).padStart(2, "0")}
              </span>
              <span className="text-[10px] text-slate-500 font-bold uppercase mt-1">SECS</span>
            </div>
          </div>

          <h3 className="text-base md:text-lg font-extrabold text-[#ea580c] font-sora tracking-wide">
            Hurry! Grab These Bonus Notes Before The Timer Hits ZERO
          </h3>
        </div>

        {/* Bottom Conversion CTA Box */}
        <div className="bonus-cta-box p-6 md:p-8 text-center max-w-4xl mx-auto space-y-4 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-orange-400 via-amber-500 to-orange-500" />

          <p className="text-base md:text-xl font-extrabold text-slate-900 font-sora max-w-2xl mx-auto leading-relaxed">
            Rukawatein door karein aur Personalised Vastu Science Report ke saath <span className="orange-gradient-text">health, wealth aur success</span> aaj hi laayein.
          </p>

          <div className="pt-2">
            <button 
              onClick={onNavigateCheckout}
              className="w-full sm:w-auto btn-orange-primary text-white font-black text-base sm:text-lg md:text-lg px-6 sm:px-9 py-4 sm:py-4.5 rounded-full shadow-2xl shadow-orange-500/35 flex items-center justify-center gap-2.5 mx-auto transition-all duration-300 transform hover:scale-[1.02] cursor-pointer border border-amber-300/40 leading-snug tracking-tight"
            >
              <Sparkles size={22} className="text-amber-200 animate-pulse shrink-0" />
              <span>BUY NOW at ₹1499 only</span>
              <ArrowRight size={20} className="text-white shrink-0" />
            </button>
          </div>

          <p className="text-xs text-[#ea580c] font-bold uppercase tracking-wider">
            REGISTER BEFORE MIDNIGHT TO UNLOCK ALL BONUSES WORTH RS. 1,998/-
          </p>
        </div>

      </div>
    </section>
  );
}
