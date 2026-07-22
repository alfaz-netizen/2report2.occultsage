import React from "react";
import "./ReportBenefits.css";
import { Award, Sparkles, ArrowRight, Heart, ShieldCheck, TrendingUp, Compass, Sun, ShieldAlert, Coins } from "lucide-react";

import wealthImg from "../../assets/vastu_benefit_wealth.png";
import careerImg from "../../assets/vastu_benefit_career.png";

export default function ReportBenefits({ onNavigateCheckout }) {
  const benefitsList = [
    {
      id: 1,
      title: "Dhan Ki Bharmaar",
      subtitle: "Financial Prosperity & Kuber Energy",
      desc: "Sahi 24-Page Vastu Science Report Remedies se apne ghar me Kuber energy blockages ko kholein aur dhan aagaman ka raasta banayein.",
      img: wealthImg,
      icon: <Coins size={44} className="text-[#ea580c]" />
    },
    {
      id: 2,
      title: "Business Aur Career Mein Tarakki",
      subtitle: "Professional Success & Office Vastu",
      desc: "Sahi Vastu Report analysis se apne business aur career ko nayi unchaiyon tak le jaayein aur Nayi Opportunities attract karein.",
      img: careerImg,
      icon: <TrendingUp size={44} className="text-[#f97316]" />
    },
    {
      id: 3,
      title: "Khushhaal Shaadi & Harmony",
      subtitle: "South-West Relationship Zone",
      desc: "Sahi Vastu remedies ke saath apne rishtey me sachha pyaar, aapas ka vishwas aur samajh ka sukoon paayein.",
      img: null,
      icon: <Heart size={44} className="text-rose-500 fill-rose-500/20" />
    },
    {
      id: 4,
      title: "Paayein Apne Sapno Ka Pyaar",
      subtitle: "Positive Love Vibrations",
      desc: "Sahi Vastu Science Report se apne ghar me positive energy waves paakar true love aur rishtey ko attract karein.",
      img: null,
      icon: <Sparkles size={44} className="text-amber-500" />
    },
    {
      id: 5,
      title: "Apni Sehat Ko Behtar Banayein",
      subtitle: "North-East Health Zone Balancing",
      desc: "Sahi Vastu Report remedies se apne aur pariwar ki physical vitality & mental health ko hamesha behtar banayein.",
      img: null,
      icon: <ShieldCheck size={44} className="text-emerald-600" />
    },
    {
      id: 6,
      title: "Buri Nazar & Negative Energy Se Suraksha",
      subtitle: "100% Zero-Demolition Protection",
      desc: "Sahi Vastu Report se negative energies se permanent suraksha paakar apne jeevan me shanti aur suraksha laayein.",
      img: null,
      icon: <ShieldAlert size={44} className="text-blue-600" />
    }
  ];

  return (
    <section className="py-14 md:py-20 px-4 md:px-8 bg-gradient-to-b from-[#fff5eb] via-[#fffbf7] to-[#fff5eb] text-slate-900 overflow-hidden relative border-b border-orange-200/60">
      
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1360px] mx-auto space-y-12 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 px-4 py-1.5 rounded-full text-xs font-bold text-[#ea580c]">
            <Award size={15} className="text-[#f97316]" />
            <span>Official Vastu Science Analysis</span>
          </div>

          <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 font-sora leading-tight tracking-tight">
            Sahi <span className="orange-gradient-text">Vastu Science Report</span> Paane Ke Fayde
          </h2>

          <p className="text-xs md:text-sm text-slate-600 font-semibold leading-relaxed">
            Ghar aur workplace ke hisaab se tay ki gayi 24-page Vastu Report aapki zindagi me deti hai:
          </p>
        </div>

        {/* 6 Golden Pill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {benefitsList.map((item) => (
            <div key={item.id} className="benefit-card">
              
              {/* Top Image or 3D Rendered Icon */}
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
            className="w-full sm:w-auto bg-white hover:bg-orange-50 text-[#ea580c] font-black text-base sm:text-lg md:text-lg px-6 sm:px-9 py-4 sm:py-4.5 rounded-full shadow-2xl shadow-orange-500/25 flex items-center justify-center gap-2.5 transition-all duration-300 transform hover:scale-[1.02] cursor-pointer border-2 border-orange-400/80 leading-snug tracking-tight"
          >
            <Sparkles size={22} className="text-[#f97316] animate-pulse shrink-0" />
            <span>Know your correct Vastu report now @ Rs.999/- Only</span>
            <ArrowRight size={20} className="text-[#ea580c] shrink-0" />
          </button>

          <p className="text-xs text-slate-500 font-medium">
            100% Non-Demolition Remedies • 24-Page Personalised PDF Analysis
          </p>
        </div>

      </div>
    </section>
  );
}
