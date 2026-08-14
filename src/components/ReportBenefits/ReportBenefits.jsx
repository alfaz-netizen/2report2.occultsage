import React from "react";
import "./ReportBenefits.css";
import { Award, Sparkles, ArrowRight, Heart, ShieldCheck, TrendingUp, ShieldAlert, Coins, Home, Shield } from "lucide-react";

import wealthImg from "../../assets/vastu_benefit_wealth.png";
import careerImg from "../../assets/vastu_benefit_career.png";

export default function ReportBenefits({ onNavigateCheckout, price = 1499 }) {
  const formattedPrice = price ? price.toLocaleString("en-IN") : "1,499";
  
  const benefitsList = [
    {
      id: 1,
      title: "Financial Blockages Ko Pehchanein Aur Unlock Karein",
      subtitle: "North & Kuber Zone Energy",
      desc: "Aapke ghar ke 'North' aur 'Kuber Zone' mein chhipe Vastu dosh aapke cash flow ko rok sakte hain. Hamari detailed report aapko in blockages ko identify karne aur ruki hui wealth ko wapas attract karne ki precise, non-demolition guidance deti hai.",
      img: wealthImg,
      icon: <Coins size={44} className="text-[#ea580c]" />
    },
    {
      id: 2,
      title: "Career Aur Business Growth Ko Accelerate Karein",
      subtitle: "Professional Stability & Office Vastu",
      desc: "Aapka workspace aapki success ko directly control karta hai. Scientific Vastu adjustments ke zariye apni shop, office, ya work-desk ki energy ko optimize karein. Nayi career opportunities aur stable business growth ke liye apne environment ko align karein.",
      img: careerImg,
      icon: <TrendingUp size={44} className="text-[#f97316]" />
    },
    {
      id: 3,
      title: "Parivaar Mein Vishwas Aur Shanti Wapas Laayein",
      subtitle: "South-West Zone Relationship Balance",
      desc: "Ghar ke 'South-West' zone mein chhipa asantulan (imbalance) rishton mein bina wajah ka tanav lata hai. Is report ke zariye apne ghar ke Vastu ko balance karein aur ek shant, mazboot, aur khushal parivarik mahol (environment) banaiye.",
      img: null,
      icon: <Heart size={44} className="text-rose-500 fill-rose-500/20" />
    },
    {
      id: 4,
      title: "Brahmasthan: Ghar Ke 'Core' Ko Unblock Karein",
      subtitle: "Balance the Heart of Your Home",
      desc: "Brahmasthan aapke ghar ka center of gravity hai. Agar center block hai, toh poore ghar ki energy freeze ho jati hai. Hamari report is core ki deep mapping karke, ruki hui kinetic energy ko release karti hai, taaki aapke space mein ek natural aur positive flow wapas establish ho sake.",
      img: null,
      icon: <Home size={44} className="text-amber-500" />
    },
    {
      id: 5,
      title: "Architectural Anxiety Ko Neutralize Karein",
      subtitle: "North-East (Ishan) Health Zone",
      desc: "Ghar ka North-East (Ishan Kon) aapke stress levels aur mental clarity ko directly dictate karta hai. Is zone ke defects ko pinpoint kar, hum aapko precise elemental remedies dete hain jo mansik shanti (mental peace) aur physical vitality ko instantly restore karti hain.",
      img: null,
      icon: <ShieldCheck size={44} className="text-emerald-600" />
    },
    {
      id: 6,
      title: "100% Non-Destructive Elemental Shielding",
      subtitle: "100% Non-Demolition Elemental Remedies",
      desc: "Vastu Dosh koi superstition nahi, balki actual spatial friction hai. Bina ek bhi deewar tode, hamari highly accurate elemental remedies aapke ghar ko unseen negative energy aur structural defects se completely shield karti hain. Apne ghar ko bina tode surakshit banayein.",
      img: null,
      icon: <ShieldAlert size={44} className="text-blue-600" />,
      highlightBadge: "100% NON-DEMOLITION GUARANTEED"
    }
  ];

  return (
    <section className="py-14 md:py-20 px-4 md:px-8 bg-gradient-to-b from-[#fff5eb] via-[#fffbf7] to-[#fff5eb] text-slate-900 overflow-hidden relative border-b border-orange-200/60">
      
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1360px] mx-auto space-y-10 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          
          {/* Trust Banner Tag */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/15 via-amber-500/15 to-orange-500/15 border border-orange-500/30 px-5 py-2 rounded-full text-xs md:text-sm font-extrabold text-[#ea580c] shadow-sm">
            <Award size={18} className="text-[#f97316] shrink-0" />
            <span>The hybrid Vastu & Numerology system , actively protecting 60000+ homes.</span>
          </div>

          <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 font-sora leading-tight tracking-tight pt-1">
            Expert <span className="orange-gradient-text">Vastu Report Se Milne</span> Wale Fayde 
          </h2>

          <p className="text-xs md:text-sm text-slate-600 font-semibold leading-relaxed">
            Jaane Kaise Sahi Vastu Analysis Badal Sakta Hai Aapki Zindagi
          </p>

          {/* Prominent 100% Non-Demolition Banner */}
          <div className="inline-flex items-center justify-center gap-2 bg-emerald-600 text-white text-xs md:text-sm font-black px-5 py-1.5 rounded-full shadow-md uppercase tracking-wider mt-2">
            <Shield size={16} className="text-emerald-200" />
            <span>100% NON-DEMOLITION REMEDIES (ZERO WALL BREAKING)</span>
          </div>

        </div>

        {/* 6 Golden Pill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {benefitsList.map((item) => (
            <div key={item.id} className="benefit-card relative">
              
              {/* Optional Special Non-Demolition Badge */}
              {item.highlightBadge && (
                <div className="absolute top-3 right-3 bg-red-600 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-md animate-pulse">
                  {item.highlightBadge}
                </div>
              )}

              {/* Top Image or Rendered Icon */}
              <div className="benefit-img-wrapper">
                {item.img ? (
                  <img src={item.img} alt={item.title} className="benefit-img" />
                ) : (
                  item.icon
                )}
              </div>

              {/* Card Title & Subtitle */}
              <div className="space-y-2 mb-3">
                <h3 className="text-lg md:text-xl font-extrabold text-slate-900 font-sora leading-snug">
                  {item.title}
                </h3>
                <span className="inline-block text-[11px] font-extrabold text-[#ea580c] bg-orange-50 px-3 py-0.5 rounded-full border border-orange-200">
                  {item.subtitle}
                </span>
              </div>

              {/* Description */}
              <p className="text-xs md:text-sm text-slate-600 font-medium leading-relaxed">
                {item.desc}
              </p>

            </div>
          ))}
        </div>

        {/* Bottom Centered Conversion CTA Button */}
        <div className="pt-4 flex flex-col items-center space-y-3">
          <button 
            onClick={onNavigateCheckout}
            className="w-full sm:w-auto btn-orange-primary text-white font-black text-base sm:text-lg md:text-xl px-7 sm:px-10 py-4.5 sm:py-5 rounded-full shadow-2xl shadow-orange-500/35 flex items-center justify-center gap-2.5 transition-all duration-300 transform hover:scale-[1.02] cursor-pointer border border-amber-300/40 leading-snug tracking-tight"
          >
            <Sparkles size={22} className="text-amber-200 animate-pulse shrink-0" />
            <span>Secure your complete analysis for Rs. {formattedPrice}.</span>
            <ArrowRight size={20} className="text-white shrink-0" />
          </button>

          <p className="text-xs text-slate-500 font-bold tracking-wide uppercase">
            🛡️ 100% Non-Demolition Remedies • Personalised Vastu PDF Analysis
          </p>
        </div>

      </div>
    </section>
  );
}
