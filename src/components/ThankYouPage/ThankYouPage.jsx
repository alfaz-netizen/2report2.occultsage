import React, { useEffect } from "react";
import { Sparkles, ArrowLeft, ShieldCheck, CheckCircle2, MessageCircle, ExternalLink } from "lucide-react";
import vwLogo from "../../assets/VW-HR.png";
import { trackPixelEvent } from "../../utils/pixel";

export default function ThankYouPage({ selectedLanguage, fullName, phone, onBackToHome }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Fire Meta Facebook Pixel Purchase Triggers requested by user:
    const isHindi = selectedLanguage === "Hindi";
    if (isHindi) {
      // Custom Event 'Purchase Hindi' & Standard Event 'Purchase'
      trackPixelEvent("Purchase Hindi", { value: 996, currency: "INR" }, true);
      trackPixelEvent("Purchase", { value: 996, currency: "INR", content_name: "Vastu Wheels Hindi FB" });
    } else {
      // Custom Event 'Purchase English' & Standard Event 'Purchase'
      trackPixelEvent("Purchase English", { value: 996, currency: "INR" }, true);
      trackPixelEvent("Purchase", { value: 996, currency: "INR", content_name: "Vastu Wheels English FB" });
    }
  }, [selectedLanguage]);

  const isHindi = selectedLanguage === "Hindi";

  // Content tailoring for Hindi vs English
  const content = isHindi ? {
    badge: "ऑर्डर सफलतापूर्वक सबमिट हो गया!",
    mainTitle: "✨ हमारे साथ जुड़ने के लिए धन्यवाद! ✨",
    groupSubtitle: "नीचे दिए गए लिंक का उपयोग करके ऑफिशियल VIP WhatsApp ग्रुप से जुड़ें 👇👇",
    joinButtonText: "JOIN HINDI WHATSAPP GROUP",
    groupLink: "https://chat.whatsapp.com/demo-vastuwheels-hindi", // Placeholder link
    subMessage: "आपने 100% सटीक वैदिक वास्तु समाधानों के साथ अपने जीवन, समृद्धि और स्वास्थ्य को बदलने की दिशा में पहला कदम उठाया है!",
    reportDeliveryNotice: `आपकी व्यक्तिगत 16-ज़ोन वास्तु विश्लेषण रिपोर्ट अगले 48 घंटे के भीतर आपके WhatsApp (+91 ${phone || 'xxxxxxxxxx'}) और Email पर भेज दी जाएगी।`,
    whatsappBenefitsTitle: "VIP WhatsApp ग्रुप में आपको क्या मिलेगा:",
    benefits: [
      "रोजाना वैदिक वास्तु टिप्स और दिशात्मक ऊर्जा उपाय",
      "आचार्य जी द्वारा विशेष लाइव एस्ट्रो-वास्तु प्रश्नोत्तर सत्र",
      "आपकी वास्तु रिपोर्ट की डिलीवरी अपडेट्स और बोनस गाइड"
    ]
  } : {
    badge: "Order Successfully Confirmed!",
    mainTitle: "✨ Thank You for Ordering Your Vastu Report! ✨",
    groupSubtitle: "Join the Official VIP WhatsApp Group Using the below link 👇👇",
    joinButtonText: "JOIN ENGLISH WHATSAPP GROUP",
    groupLink: "https://chat.whatsapp.com/demo-vastuwheels-english", // Placeholder link
    subMessage: "You've taken the first step towards unlocking your future with 100% Non-Demolition Vedic Vastu Remedies!",
    reportDeliveryNotice: `Your personalized 16-Zone Vastu Analysis Report will be generated & delivered to your WhatsApp (+91 ${phone || 'xxxxxxxxxx'}) & Email within 48 hours.`,
    whatsappBenefitsTitle: "What you get inside our VIP WhatsApp Group:",
    benefits: [
      "Daily Vedic Vastu & directional energy tips",
      "Exclusive Live Q&A sessions with Acharya Ji",
      "Instant PDF report delivery updates & free bonus downloads"
    ]
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sora relative overflow-hidden flex flex-col justify-between selection:bg-orange-500 selection:text-white">
      
      {/* Deep Cosmic Starfield & Nebula Glowing Radial Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/40 via-slate-950 to-slate-950 pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-r from-orange-500/20 via-purple-500/20 to-amber-500/20 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

      {/* Top Header Bar */}
      <header className="relative z-20 border-b border-slate-800/80 px-4 md:px-8 py-4 bg-slate-950/60 backdrop-blur-md">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <img 
            src={vwLogo} 
            alt="Vastu Wheels Logo" 
            onClick={onBackToHome}
            className="h-9 md:h-11 w-auto object-contain brightness-110 cursor-pointer transition-transform hover:scale-105" 
          />
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white font-bold text-xs md:text-sm px-4 py-2 rounded-full transition-all border border-slate-700 cursor-pointer"
          >
            <ArrowLeft size={16} />
            <span>Back to Homepage</span>
          </button>
        </div>
      </header>

      {/* Main Cosmic Thank You Content */}
      <main className="relative z-20 max-w-2xl w-full mx-auto px-4 py-10 md:py-14 text-center space-y-8 flex-1 flex flex-col justify-center">
        
        {/* Success Confirmation Badge */}
        <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 px-4 py-2 rounded-full text-xs md:text-sm font-extrabold text-emerald-400 mx-auto shadow-lg shadow-emerald-950/50">
          <CheckCircle2 size={18} className="text-emerald-400 shrink-0" />
          <span>{content.badge}</span>
        </div>

        {/* Main Title */}
        <div className="space-y-3">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black font-sora leading-tight tracking-tight bg-gradient-to-r from-amber-200 via-orange-100 to-amber-300 bg-clip-text text-transparent">
            {content.mainTitle}
          </h1>
          <p className="text-sm md:text-lg text-slate-300 font-semibold max-w-xl mx-auto leading-relaxed">
            {content.groupSubtitle}
          </p>
        </div>

        {/* Primary White VIP WhatsApp Join Capsule Button */}
        <div className="pt-2 pb-2">
          <a
            href={content.groupLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              // Handle demo WhatsApp click
              e.preventDefault();
              alert(isHindi 
                ? "Hindi VIP WhatsApp Group Join Link:\n" + content.groupLink 
                : "English VIP WhatsApp Group Join Link:\n" + content.groupLink
              );
            }}
            className="inline-flex items-center justify-center gap-3 bg-white hover:bg-slate-100 text-slate-950 font-black text-sm sm:text-base md:text-lg px-8 sm:px-12 py-4 sm:py-4.5 rounded-full shadow-[0_0_35px_rgba(249,115,22,0.4)] transition-all transform hover:scale-105 border-2 border-amber-300 cursor-pointer tracking-wider font-sora"
          >
            <MessageCircle size={24} className="text-emerald-600 fill-emerald-600 shrink-0 animate-bounce" />
            <span>{content.joinButtonText}</span>
            <ExternalLink size={20} className="text-slate-800 shrink-0" />
          </a>
        </div>

        {/* Motivational Sub-Message */}
        <div className="bg-slate-900/80 border border-slate-800 p-6 md:p-8 rounded-3xl backdrop-blur-md space-y-4 shadow-2xl">
          <p className="text-sm md:text-base text-amber-200 font-bold leading-relaxed">
            "{content.subMessage}"
          </p>
          <div className="border-t border-slate-800 pt-4 text-xs md:text-sm text-slate-400 font-medium">
            {content.reportDeliveryNotice}
          </div>
        </div>

        {/* WhatsApp Group Benefits Box */}
        <div className="bg-gradient-to-r from-purple-950/40 via-slate-900/60 to-purple-950/40 border border-purple-800/40 p-5 md:p-6 rounded-3xl text-left space-y-3">
          <h4 className="font-extrabold text-white text-xs md:text-sm uppercase tracking-wider flex items-center gap-2">
            <Sparkles size={16} className="text-amber-400" />
            <span>{content.whatsappBenefitsTitle}</span>
          </h4>
          <ul className="space-y-2 text-xs md:text-sm text-slate-300">
            {content.benefits.map((benefit, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Target Symbol Graphic */}
        <div className="flex justify-center pt-2">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-amber-600 p-0.5 shadow-xl shadow-orange-500/20">
            <div className="w-full h-full bg-slate-950 rounded-full flex items-center justify-center">
              <ShieldCheck size={28} className="text-amber-400" />
            </div>
          </div>
        </div>

      </main>

      {/* Footer Disclaimer */}
      <footer className="relative z-20 border-t border-slate-800/80 px-4 py-4 text-center text-xs text-slate-500 bg-slate-950/80">
        <div className="max-w-4xl mx-auto">
          Copyright 2026 - VastuWheels Private Limited | Instant VIP Support Helpline: +91 9217664304
        </div>
      </footer>

    </div>
  );
}
