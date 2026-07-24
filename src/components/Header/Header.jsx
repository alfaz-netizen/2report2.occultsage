import React from "react";
import "./Header.css";
import vwLogo from "../../assets/VW-HR.png";

export default function Header() {
  return (
    <header className="relative w-full bg-transparent px-4 md:px-8 pt-4 md:pt-6 pb-2 z-20">
      <div className="max-w-[1400px] mx-auto flex items-center justify-start">
        {/* Brand Logo - Placed cleanly at top-left corner */}
        <div className="flex items-center gap-2">
          <img 
            src={vwLogo} 
            alt="Vastu Wheels Logo" 
            className="h-9 sm:h-11 md:h-12 w-auto object-contain"
          />
          <span className="bg-orange-500/10 text-[#ea580c] border border-orange-500/30 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
            Official
          </span>
        </div>
      </div>
    </header>
  );
}
