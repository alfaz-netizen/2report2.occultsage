import React, { useState, useEffect } from "react";
import "./StickyCTA.css";
import { ArrowRight, Flame } from "lucide-react";

export default function StickyCTA({ onNavigateCheckout }) {
  const [timeLeft, setTimeLeft] = useState(776); // 12m 56s

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 776));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const formattedTime = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#ea580c] text-white py-2.5 px-4 shadow-2xl border-t border-orange-400">
      <div className="max-w-4xl mx-auto flex items-center justify-between gap-3">
        
        <div className="space-y-0.5">
          <div className="flex items-center gap-1.5 text-xs font-bold text-orange-100">
            <Flame size={14} className="text-amber-300 animate-bounce" />
            <span>Ad Special: ₹999</span>
            <del className="text-orange-200 text-[10px] font-normal">₹5,999</del>
          </div>
          <p className="text-[11px] text-white font-medium">Expires in: {formattedTime}</p>
        </div>

        <button 
          onClick={onNavigateCheckout}
          className="bg-white hover:bg-orange-50 text-[#ea580c] font-extrabold text-xs md:text-sm px-5 py-2.5 rounded-full shadow-lg flex items-center gap-1.5 cursor-pointer transition-transform transform hover:scale-105"
        >
          <span>GET MY REPORT NOW</span>
          <ArrowRight size={15} />
        </button>

      </div>
    </div>
  );
}
