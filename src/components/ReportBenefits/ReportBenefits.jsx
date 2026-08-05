import React from "react";
import "./ReportBenefits.css";
import { Award, Sparkles, ArrowRight, Heart, ShieldCheck, TrendingUp, ShieldAlert, Coins, Home } from "lucide-react";

import wealthImg from "../../assets/vastu_benefit_wealth.png";
import careerImg from "../../assets/vastu_benefit_career.png";

export default function ReportBenefits({ onNavigateCheckout }) {
  const benefitsList = [
    {
      id: 1,
      title: "Dhan-samriddhi hogi bharpoor",
      subtitle: "North & Kuber Zone Energy",
      desc: "North Direction aur Kuber Zone ki energy ka detailed Vastu analysis karwa kar financial blockages ko identify karein aur wealth growth, better cash flow aur financial stability ke liye expert guidance paaiye.",
      img: wealthImg,
      icon: <Coins size={44} className="text-[#ea580c]" />
    },
    {
      id: 2,
      title: "Business & Career Growth ka Achook upay",
      subtitle: "Professional Stability & Office Vastu",
      desc: "Scientific Vastu Analysis se office, shop aur workplace ki energy ko optimize karke business growth aur career opportunities ko support karein. ",
      img: careerImg,
      icon: <TrendingUp size={44} className="text-[#f97316]" />
    },
    {
      id: 3,
      title: "Family Problem ka Proper Solution",
      subtitle: "South-West Zone Relationship Balance ",
      desc: "South-West Zone ki Vastu energy ka detailed analysis karwa kar family relationships ko prabhavit karne wale imbalances ko identify karein. Personalized recommendations ke saath vishwas, samanjasya aur griha shanti ko support dene wala balanced home environment banaiye.",
      img: null,
      icon: <Heart size={44} className="text-rose-500 fill-rose-500/20" />
    },
    {
      id: 4,
      title: "Brahmasthan ka Vastu Assessment",
      subtitle: "Balance the Heart of Your Home ",
      desc: "Brahmasthan ki Vastu energy ka detailed analysis karwa kar ghar ke energy flow ko optimize karein aur sukh, shanti aur positivity se bharpoor environment banaiye.",
      img: null,
      icon: <Home size={44} className="text-amber-500" />
    },
    {
      id: 5,
      title: "Health & Mansik Shanti",
      subtitle: "North-East (Ishan) Health Zone",
      desc: "North-East (Ishan Kon) ki urja ko balance karke ghar mein behtar sehat, mansik sukoon aur positive vitality ka sanchar karein.",
      img: null,
      icon: <ShieldCheck size={44} className="text-emerald-600" />
    },
    {
      id: 6,
      title: "Negative Energy Se Suraksha",
      subtitle: "100% Non-Demolition Elemental Remedies",
      desc: "Bina kisi tod-phod (Zero Wall Breaking) ke practical elemental remedies ke madhyam se ghar ko Vastu Dosh aur negative energies se surakshit banayein. ",
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
            Expert <span className="orange-gradient-text">Vastu Report Se Milne</span> Wale Fayde 
          </h2>

          <p className="text-xs md:text-sm text-slate-600 font-semibold leading-relaxed">
            Jaane Kaise Sahi Vastu Analysis Badal Sakta Hai Aapki Zindagi 

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
            className="w-full sm:w-auto btn-orange-primary text-white font-black text-base sm:text-lg md:text-lg px-6 sm:px-9 py-4 sm:py-4.5 rounded-full shadow-2xl shadow-orange-500/35 flex items-center justify-center gap-2.5 transition-all duration-300 transform hover:scale-[1.02] cursor-pointer border border-amber-300/40 leading-snug tracking-tight"
          >
            <Sparkles size={22} className="text-amber-200 animate-pulse shrink-0" />
            <span>BUY NOW at ₹996 only</span>
            <ArrowRight size={20} className="text-white shrink-0" />
          </button>

          {/* <p className="text-xs text-slate-500 font-medium">
            100% Non-Demolition Remedies • Personalised Vastu PDF Analysis
          </p> */}
        </div>

      </div>
    </section>
  );
}
