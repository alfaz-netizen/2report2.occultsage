import React from "react";
import "./CelebrityTrust.css";
import { Sparkles, ArrowRight, CheckCircle2, Compass, FileText } from "lucide-react";

export default function CelebrityTrust({ onNavigateCheckout }) {
  const celebData = [
    {
      id: 1,
      name: "Amitabh Bachchan",
      vastuDetail: "Jalsa Residence North-East Vastu Brahmasthan Report",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
      badge: "✨ Legacy & Health Energy",
      badgeColor: "bg-emerald-500/10 text-emerald-800 border-emerald-300"
    },
    {
      id: 2,
      name: "Gautam Adani",
      vastuDetail: "Corporate HQ East Direction Energy Flow Report",
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80",
      badge: "📈 Business Growth Grid",
      badgeColor: "bg-orange-500/10 text-[#ea580c] border-orange-300"
    },
    {
      id: 3,
      name: "Priyanka Chopra",
      vastuDetail: "International Residence Vastu Direction Analysis",
      photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80",
      badge: "🌟 Fame & Global Success",
      badgeColor: "bg-purple-500/10 text-purple-800 border-purple-300"
    },
    {
      id: 4,
      name: "Salman Khan",
      vastuDetail: "Galaxy Residence Ocean-Facing Vastu Energy Report",
      photo: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&auto=format&fit=crop&q=80",
      badge: "🛡️ Stability & Protection",
      badgeColor: "bg-blue-500/10 text-blue-800 border-blue-300"
    },
    {
      id: 5,
      name: "Aishwarya Rai",
      vastuDetail: "Family Residence Kuber Wealth Zone Vastu Report",
      photo: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&auto=format&fit=crop&q=80",
      badge: "💰 Kuber Prosperity Zone",
      badgeColor: "bg-amber-500/10 text-amber-800 border-amber-300"
    },
    {
      id: 6,
      name: "Nita Ambani",
      vastuDetail: "Antilia Residence South-East Agni Energy Analysis",
      photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=80",
      badge: "❤️ Family Peace & Health",
      badgeColor: "bg-rose-500/10 text-rose-800 border-rose-300"
    }
  ];

  return (
    <section className="py-12 md:py-18 px-4 md:px-8 bg-gradient-to-b from-[#fff5eb] via-[#fffbf7] to-[#fff5eb] text-slate-900 overflow-hidden relative border-b border-orange-200/60">
      
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] bg-orange-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1360px] mx-auto space-y-10 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 px-4 py-1.5 rounded-full text-xs font-bold text-[#ea580c]">
            <FileText size={15} className="text-[#f97316]" />
            <span>24-Page Personalised Vastu Science Report</span>
          </div>

          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-[40px] font-extrabold text-slate-900 font-sora leading-tight tracking-tight">
            Why Top Billionaires & Icons Trust<br className="hidden sm:inline" />
            <span className="orange-gradient-text"> Personalised Vastu Reports</span>
          </h2>

          <p className="text-xs md:text-sm text-slate-600 font-semibold leading-relaxed max-w-2xl mx-auto">
            Discover how India's most successful leaders use 24-page Vastu report analysis to align their homes & workplaces for unstoppable wealth, peace & growth.
          </p>
        </div>

        {/* 6 Larger Celebrity Photo Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {celebData.map((item) => (
            <div key={item.id} className="celeb-card flex items-center gap-4.5">
              
              {/* Photo Box */}
              <div className="celeb-photo-wrapper shadow-md">
                <img 
                  src={item.photo} 
                  alt={item.name} 
                  className="celeb-photo-img"
                  loading="lazy"
                />
                
                {/* Overlay Circular Vastu Zoom Lens */}
                <div className="celeb-zoom-ring">
                  <Compass size={20} className="text-[#ea580c] animate-spin-slow" />
                </div>
              </div>

              {/* Card Details */}
              <div className="space-y-1.5 flex-1 min-w-0">
                <div className="flex items-center justify-between gap-1">
                  <span className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded-full border ${item.badgeColor}`}>
                    {item.badge}
                  </span>
                  <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                </div>

                <h3 className="text-base md:text-lg font-extrabold text-slate-900 font-sora tracking-tight truncate">
                  {item.name}
                </h3>

                <p className="text-xs text-slate-600 font-medium leading-snug line-clamp-2">
                  {item.vastuDetail}
                </p>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Conversion CTA Box */}
        <div className="celeb-cta-box p-6 md:p-8 text-center max-w-4xl mx-auto space-y-4 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-orange-400 via-amber-500 to-orange-500" />

          <p className="text-base md:text-xl font-extrabold text-slate-900 font-sora max-w-2xl mx-auto leading-relaxed">
            Agar aapko bhi apne ghar aur business me <span className="orange-gradient-text">Vastu Energy ki shakti</span> chahiye — Book Your Report Analysis Now
          </p>

          <div className="pt-2">
            <button 
              onClick={onNavigateCheckout}
              className="w-full sm:w-auto btn-orange-primary text-white font-black text-base sm:text-lg md:text-lg px-6 sm:px-9 py-4 sm:py-4.5 rounded-full shadow-2xl shadow-orange-500/35 flex items-center justify-center gap-2.5 mx-auto transition-all duration-300 transform hover:scale-[1.02] cursor-pointer border border-amber-300/40 leading-snug tracking-tight"
            >
              <Sparkles size={22} className="text-amber-200 animate-pulse shrink-0" />
              <span>BUY NOW at ₹1,499 only</span>
              <ArrowRight size={20} className="text-white shrink-0" />
            </button>
          </div>

          <p className="text-xs text-slate-500 font-medium">
            Talk to Vastu Scholar Acharya Ji & Get Your 24-Page Custom Report in Just 2 Minutes.
          </p>
        </div>

      </div>
    </section>
  );
}
