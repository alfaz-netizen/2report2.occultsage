import React, { useEffect } from "react";
import { Sparkles, ArrowLeft, ShieldCheck, CheckCircle2, Clock, Mail, Phone, CreditCard, FileCheck, User } from "lucide-react";
import vwLogo from "../../assets/VW-HR.png";
import { trackPixelEvent } from "../../utils/pixel";

export default function ThankYouPage({ selectedLanguage, fullName, phone, email, paymentId, onBackToHome }) {
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
  const displayPaymentId = paymentId || ("pay_vw" + Math.random().toString(36).substring(2, 10).toUpperCase());

  // Content tailoring for Hindi vs English
  const content = isHindi ? {
    badge: "भुगतान सफलतापूर्वक पूरा हुआ!",
    mainTitle: "✨ धन्यवाद! आपका ऑर्डर सफलतापूर्वक प्राप्त हो गया है ✨",
    subMessage: "आपने 100% सटीक वैदिक वास्तु समाधानों के साथ अपने जीवन, समृद्धि और स्वास्थ्य को बदलने की दिशा में पहला कदम उठाया है!",
    summaryTitle: "ऑर्डर एवं भुगतान विवरण (Payment Receipt)",
    teamNoticeTitle: "📞 हमारी टीम आपसे संपर्क करेगी (48 Hours Assurance)",
    teamNoticeText: `हमारी एक्सपर्ट एस्ट्रो-वास्तु टीम अगले 48 घंटे के भीतर आपसे (+91 ${phone || 'XXXXXXXXXX'}) पर संपर्क करेगी और आपकी 16-ज़ोन वैदिक वास्तु विश्लेषण रिपोर्ट आपके WhatsApp और Email (${email || 'आपकी ईमेल आईडी'}) पर डिलीवर कर देगी।`,
    supportContact: "किसी भी जानकारी के लिए हेल्पलाइन: +91 9217664304 | globalinchpvt@gmail.com"
  } : {
    badge: "Payment Completed Successfully!",
    mainTitle: "✨ Thank You! Your Order Has Been Confirmed ✨",
    subMessage: "You have taken the first step towards unlocking peace, prosperity, and growth with 100% Non-Demolition Vedic Vastu Analysis!",
    summaryTitle: "Order & Payment Summary (Payment Receipt)",
    teamNoticeTitle: "📞 Our Team Will Contact You (48 Hours Assurance)",
    teamNoticeText: `Our expert Vastu team will contact you at (+91 ${phone || 'XXXXXXXXXX'}) within the next 48 hours and deliver your personalized 16-Zone Vastu Report directly to your WhatsApp & Email (${email || 'your email'}).`,
    supportContact: "For any assistance, Helpline: +91 9217664304 | globalinchpvt@gmail.com"
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sora relative overflow-hidden flex flex-col justify-between selection:bg-orange-500 selection:text-white">
      
      {/* Deep Cosmic Starfield & Glowing Radial Background */}
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

      {/* Main Thank You & Payment Confirmation Content */}
      <main className="relative z-20 max-w-2xl w-full mx-auto px-4 py-10 md:py-14 text-center space-y-8 flex-1 flex flex-col justify-center">
        
        {/* Success Confirmation Badge */}
        <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 px-5 py-2.5 rounded-full text-xs md:text-sm font-extrabold text-emerald-400 mx-auto shadow-lg shadow-emerald-950/50">
          <CheckCircle2 size={20} className="text-emerald-400 shrink-0" />
          <span>{content.badge}</span>
        </div>

        {/* Main Title */}
        <div className="space-y-3">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black font-sora leading-tight tracking-tight bg-gradient-to-r from-amber-200 via-orange-100 to-amber-300 bg-clip-text text-transparent">
            {content.mainTitle}
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-amber-200/90 font-semibold max-w-xl mx-auto leading-relaxed">
            "{content.subMessage}"
          </p>
        </div>

        {/* Payment & Order Summary Receipt Box */}
        <div className="bg-slate-900/90 border border-slate-800 p-6 md:p-8 rounded-3xl backdrop-blur-md text-left space-y-5 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl pointer-events-none" />

          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <h3 className="text-sm md:text-base font-extrabold text-white uppercase tracking-wider flex items-center gap-2">
              <FileCheck size={20} className="text-amber-400" />
              <span>{content.summaryTitle}</span>
            </h3>
            <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 text-[11px] font-bold px-3 py-1 rounded-full flex items-center gap-1">
              <ShieldCheck size={13} />
              <span>PAID ₹996</span>
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs md:text-sm">
            <div className="bg-slate-950/60 p-3.5 rounded-2xl border border-slate-800/80 space-y-1">
              <span className="text-slate-400 text-[11px] uppercase font-bold flex items-center gap-1.5">
                <CreditCard size={14} className="text-orange-400" />
                <span>Payment ID</span>
              </span>
              <p className="font-mono font-bold text-amber-300 text-xs md:text-sm truncate">
                {displayPaymentId}
              </p>
            </div>

            <div className="bg-slate-950/60 p-3.5 rounded-2xl border border-slate-800/80 space-y-1">
              <span className="text-slate-400 text-[11px] uppercase font-bold flex items-center gap-1.5">
                <User size={14} className="text-orange-400" />
                <span>Customer Name</span>
              </span>
              <p className="font-bold text-white text-xs md:text-sm truncate">
                {fullName || "Valued Customer"}
              </p>
            </div>

            <div className="bg-slate-950/60 p-3.5 rounded-2xl border border-slate-800/80 space-y-1">
              <span className="text-slate-400 text-[11px] uppercase font-bold flex items-center gap-1.5">
                <Phone size={14} className="text-orange-400" />
                <span>WhatsApp Number</span>
              </span>
              <p className="font-bold text-white text-xs md:text-sm">
                +91 {phone || "XXXXXXXXXX"}
              </p>
            </div>

            <div className="bg-slate-950/60 p-3.5 rounded-2xl border border-slate-800/80 space-y-1">
              <span className="text-slate-400 text-[11px] uppercase font-bold flex items-center gap-1.5">
                <Mail size={14} className="text-orange-400" />
                <span>Report Language</span>
              </span>
              <p className="font-bold text-emerald-400 text-xs md:text-sm">
                {selectedLanguage || "Hindi"} Report
              </p>
            </div>
          </div>

          <div className="bg-slate-950/40 p-3 rounded-xl border border-slate-800 text-xs text-slate-300 flex items-center gap-2">
            <Mail size={14} className="text-slate-400 shrink-0" />
            <span className="truncate">Email: {email || "globalinchpvt@gmail.com"}</span>
          </div>
        </div>

        {/* 48 Hours Team Contact Assurance Notice */}
        <div className="bg-gradient-to-r from-orange-950/60 via-slate-900/90 to-amber-950/60 border border-orange-500/40 p-6 md:p-8 rounded-3xl text-left space-y-3 shadow-xl backdrop-blur-md">
          <h4 className="font-extrabold text-amber-300 text-sm md:text-base tracking-wide flex items-center gap-2">
            <Clock size={20} className="text-orange-400 animate-pulse shrink-0" />
            <span>{content.teamNoticeTitle}</span>
          </h4>
          <p className="text-xs sm:text-sm md:text-base text-slate-200 font-medium leading-relaxed">
            {content.teamNoticeText}
          </p>
          <div className="pt-2 border-t border-slate-800 text-[11px] md:text-xs text-slate-400 font-semibold">
            {content.supportContact}
          </div>
        </div>

        {/* Target Shield Symbol Graphic */}
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
          Copyright 2026 - VastuWheels (Powered & Managed by GlobalInch) | Instant Support Helpline: +91 9217664304
        </div>
      </footer>

    </div>
  );
}
