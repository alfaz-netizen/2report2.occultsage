import React, { useState, useEffect } from "react";
import "./StickyCTA.css";
import { ArrowRight, Clock } from "lucide-react";

export default function StickyCTA({ onNavigateCheckout }) {
  const [timeLeft, setTimeLeft] = useState(856); // 14:16 like reference screenshot!

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 856));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const formattedTime = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 shadow-[0_-4px_25px_rgba(234,88,12,0.4)]">
      
      {/* 1. TOP TIMER BAR (Visible on Mobile Phone View < 640px - Clean White Background) */}
      <div className="sm:hidden bg-white text-slate-800 text-sm font-extrabold text-center py-2.5 px-4 flex items-center justify-center gap-2 border-t border-orange-200 shadow-sm tracking-wide">
        <Clock size={17} className="text-[#ea580c] animate-pulse shrink-0" />
        <span className="text-slate-700">Offer ends soon in:</span>
        <span className="text-[#ea580c] font-black font-sora text-base tracking-widest bg-orange-50 px-2.5 py-0.5 rounded-md border border-orange-200/80">{formattedTime}</span>
      </div>

      {/* 2. MAIN VASTUWHEELS ORANGE STICKY BAR */}
      <div className="bg-gradient-to-r from-[#ea580c] via-[#f97316] to-[#ea580c] text-white py-2.5 sm:py-3.5 px-3 sm:px-6 md:px-8 border-t-2 border-orange-400/80 relative">
        
        {/* Background Subtle Sacred Geometry Radial Watermark */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_0.5px,transparent_0.5px)] [background-size:16px_16px] opacity-10 pointer-events-none" />

        <div className="max-w-5xl mx-auto flex items-center justify-between gap-3 sm:gap-6 relative z-10">
          
          {/* LEFT COLUMN: Pricing Block (Strikethrough cut price ₹5,999 above, Big ₹1499 below) */}
          <div className="flex flex-col items-start sm:items-center justify-center leading-none min-w-[70px] sm:min-w-[90px] shrink-0">
            <span className="line-through text-orange-200 text-xs sm:text-sm md:text-base font-bold tracking-tight">
              ₹5,999
            </span>
            <span className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white font-sora tracking-tight mt-0.5 drop-shadow-sm">
              ₹1499
            </span>
          </div>

          {/* CENTER/RIGHT COLUMN: Large Visual Capsule CTA Button (Max size & visibility on Phone) */}
          <div className="flex-1 max-w-[260px] sm:max-w-xs md:max-w-md">
            <button 
              onClick={onNavigateCheckout}
              className="w-full bg-white hover:bg-orange-50 text-[#ea580c] font-black text-xs sm:text-base md:text-lg px-3 sm:px-8 py-3 sm:py-3.5 rounded-full shadow-2xl flex items-center justify-center gap-1.5 sm:gap-2 cursor-pointer transition-all transform hover:scale-[1.02] border border-amber-200/60 tracking-wider uppercase font-sora"
            >
              <span>GET YOUR REPORT NOW</span>
              <ArrowRight size={18} className="text-[#ea580c] shrink-0 hidden sm:inline" />
            </button>
          </div>

          {/* DESKTOP ONLY RIGHT COLUMN: Countdown Timer Block (Visible >= 640px) */}
          <div className="hidden sm:flex flex-col items-center justify-center text-center leading-none space-y-1 min-w-[110px] shrink-0">
            <span className="text-xs md:text-sm font-bold text-orange-100 tracking-tight">
              Offer ends soon in:
            </span>
            <span className="text-2xl md:text-3xl font-extrabold text-white font-sora tracking-wider drop-shadow-sm">
              {formattedTime}
            </span>
          </div>

        </div>
      </div>
    </div>
  );
}
