import React, { useState, useEffect } from "react";
import "./UrgencyBar.css";
import { Flame, Clock } from "lucide-react";

export default function UrgencyBar() {
  const [timeLeft, setTimeLeft] = useState(899); // 14 mins 59 secs

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 899));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const formattedTime = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

  return (
    <div className="urgency-bar-orange bg-gradient-to-r from-[#ea580c] via-[#f97316] to-[#ea580c] py-2.5 px-4 text-xs md:text-sm font-semibold flex flex-wrap items-center justify-between text-white sticky top-0 z-50 shadow-md">
      <div className="flex items-center gap-2.5 mx-auto md:mx-0">
        <span className="bg-white text-[#c2410c] px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider flex items-center gap-1 shadow-sm">
          <Flame size={13} className="text-[#ea580c] animate-bounce" /> Special Ad Offer
        </span>
        <span className="hidden sm:inline text-white font-medium">Get Personal Vastu Report @ ₹1,499 (Regular ₹5,999)</span>
      </div>

      <div className="flex items-center gap-4 mx-auto md:mx-0 mt-1 md:mt-0">
        <div className="flex items-center gap-1.5 text-orange-100">
          <Clock size={14} className="text-white" />
          <span className="text-xs text-orange-100 font-medium">Offer Expires In:</span>
          <span className="bg-black/25 px-2 py-0.5 rounded font-mono font-bold text-white border border-white/30">
            {formattedTime}
          </span>
        </div>

        <div className="hidden lg:flex items-center gap-1.5 text-white text-xs bg-black/20 px-2.5 py-0.5 rounded-full border border-white/30">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
          <span>142 People Online</span>
        </div>
      </div>
    </div>
  );
}
