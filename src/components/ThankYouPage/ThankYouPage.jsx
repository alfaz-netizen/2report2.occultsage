import React, { useState, useEffect } from "react";
import { ArrowLeft, ShieldCheck, CheckCircle2, Clock, Mail, Phone, CreditCard, FileCheck, User, MessageCircle, X, Sparkles, Zap, Headphones, Gift, ShieldAlert } from "lucide-react";
import vwLogo from "../../assets/VW-HR.png";
import { trackPixelEvent } from "../../utils/pixel";

export default function ThankYouPage({ selectedLanguage, fullName, phone, email, paymentId, uniqueCustomerId, onBackToHome }) {
  // Interactive Popup States
  const [showPopup, setShowPopup] = useState(true);
  const [discountClaimed, setDiscountClaimed] = useState(false);
  const [displayPrice, setDisplayPrice] = useState(1);
  const [isRolling, setIsRolling] = useState(false);
  const [particles, setParticles] = useState([]);
  const [isUpgrading, setIsUpgrading] = useState(false);
  const [isVipUpgraded, setIsVipUpgraded] = useState(false);
  const [vipPaymentId, setVipPaymentId] = useState("");

  const isHindi = selectedLanguage === "Hindi";
  const displayPaymentId = paymentId || ("pay_vw" + Math.random().toString(36).substring(2, 10).toUpperCase());
  const activeCustomerId = uniqueCustomerId || ("VW-" + Math.floor(10000000 + Math.random() * 90000000));

  // Dynamic URL Subroute Management: Shows /topop when popup is open, reverts when closed
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    const baseRoute = isHindi ? "/thankyou-hindi" : "/thankyou-english";
    if (showPopup) {
      window.history.pushState({}, "", `${baseRoute}/topop`);
    } else {
      window.history.pushState({}, "", baseRoute);
    }

    // Fire Meta Facebook Pixel Purchase Triggers:
    if (isHindi) {
      trackPixelEvent("Purchase Hindi", { value: 996, currency: "INR" }, true);
      trackPixelEvent("Purchase", { value: 996, currency: "INR", content_name: "Vastu Wheels Hindi FB" });
    } else {
      trackPixelEvent("Purchase English", { value: 996, currency: "INR" }, true);
      trackPixelEvent("Purchase", { value: 996, currency: "INR", content_name: "Vastu Wheels English FB" });
    }
  }, [selectedLanguage, showPopup]);

  // 🎉 Party Popper Confetti Burst & Fast Rolling Price Animation
  const handleClaimDiscount = () => {
    if (discountClaimed || isRolling) return;
    setIsRolling(true);

    // Generate 60 Explosive Confetti Particles
    const colors = ["#f97316", "#25d366", "#eab308", "#3b82f6", "#ec4899", "#8b5cf6", "#14b8a6"];
    const newParticles = Array.from({ length: 60 }).map((_, i) => ({
      id: i,
      x: 50 + (Math.random() - 0.5) * 60,
      y: 50 + (Math.random() - 0.5) * 40,
      size: Math.random() * 12 + 6,
      color: colors[Math.floor(Math.random() * colors.length)]
    }));
    setParticles(newParticles);

    // Fast Rolling Number Counter Effect
    let current = 1;
    const target = 1;
    const step = 20;
    const interval = setInterval(() => {
      current -= step;
      if (current <= target) {
        current = target;
        clearInterval(interval);
        setIsRolling(false);
        setDiscountClaimed(true);
      }
      setDisplayPrice(current);
    }, 40);
  };

  // Direct Razorpay Payment Gateway Trigger for Special Upgrade
  const handleOpenRazorpayUpgrade = async () => {
    setIsUpgrading(true);

    const loadScript = () => {
      return new Promise((resolve) => {
        if (window.Razorpay) {
          resolve(true);
          return;
        }
        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.onload = () => resolve(true);
        script.onerror = () => resolve(false);
        document.body.appendChild(script);
      });
    };

    const isLoaded = await loadScript();
    if (!isLoaded) {
      alert("Razorpay payment gateway failed to load. Please check your internet connection.");
      setIsUpgrading(false);
      return;
    }

    const keyId = import.meta.env.VITE_RAZORPAY_KEY_ID || "rzp_live_SSFQ4gpLaM0VXb";

    // Create Razorpay Order via Orders API for instant automatic payment capture
    let orderId = "";
    try {
      const orderRes = await fetch("/api/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: displayPrice * 100 })
      });
      if (orderRes.ok) {
        const orderData = await orderRes.json();
        if (orderData?.order_id) {
          orderId = orderData.order_id;
        }
      }
    } catch (err) {
      console.warn("Orders API upgrade warning, proceeding with fallback checkout options:", err);
    }

    const upgradeOptions = {
      key: keyId,
      amount: displayPrice * 100, // ₹1,999 or ₹1,799 in paise
      currency: "INR",
      name: "VastuWheels Report Upgrade",
      description: "1-on-1 Consultation & Express Vastu Report",
      order_id: orderId || undefined, // Linked Order ID for 100% instant automatic capture!
      payment_capture: 1, // Automatically capture payment (Authorized -> Captured)
      handler: function (response) {
        console.log("Upgrade Payment Success:", response);
        setIsUpgrading(false);
        setShowPopup(false);
        setIsVipUpgraded(true);
        setVipPaymentId(response?.razorpay_payment_id || ("PAY_UPGRADE_" + Math.random().toString(36).substring(2, 10).toUpperCase()));
        
        // Trigger Facebook Pixel Upgrade Purchase Events:
        trackPixelEvent("Purchase Report Upgrade", { value: displayPrice, currency: "INR" });
        trackPixelEvent("Purchase", { value: displayPrice, currency: "INR", content_name: "Vastu Wheels Report Upgrade" });
      },
      prefill: {
        name: fullName || "Valued Customer",
        email: email || "globalinchpvt@gmail.com",
        contact: phone || "9217664304"
      },
      notes: {
        payment_type: "popup_upgrade",
        unique_customer_id: activeCustomerId,
        original_payment_id: displayPaymentId,
        full_name: fullName || "Valued Customer",
        phone_number: phone || "9217664304",
        email_id: email || "globalinchpvt@gmail.com",
        upgrade_type: "1-on-1 Consultation"
      },
      theme: {
        color: "#ea580c"
      },
      modal: {
        ondismiss: function () {
          setIsUpgrading(false);
        }
      }
    };

    const rzp = new window.Razorpay(upgradeOptions);
    rzp.open();
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    const baseRoute = isHindi ? "/thankyou-hindi" : "/thankyou-english";
    window.history.pushState({}, "", baseRoute);
  };

  // Clean professional content tailoring for Hindi vs English
  const content = isHindi ? {
    badge: isVipUpgraded ? "🎉 अपग्रेड भुगतान पूरा हुआ!" : "भुगतान सफलतापूर्वक पूरा हुआ (Payment Successful)",
    mainTitle: isVipUpgraded ? "✨ बधाई हो! आपका 1-on-1 अपग्रेड कंफ़र्म हो गया है ✨" : "धन्यवाद! आपका ऑर्डर सफलतापूर्वक प्राप्त हो गया है",
    subMessage: isVipUpgraded 
      ? "हमारी एक्सपर्ट वास्तु टीम जल्द ही आपसे 1-on-1 कंसल्टेशन सेशन एवं इमीडिएट रिपोर्ट डिलीवरी के लिए संपर्क करेगी।"
      : "आपकी 16-ज़ोन वैदिक वास्तु विश्लेषण रिपोर्ट तैयार की जा रही है और 48 घंटे के भीतर डिलीवर कर दी जाएगी।",
    whatsappGroupTitle: "आधिकारिक WhatsApp ग्रुप जॉइन करें",
    whatsappBtnText: "WhatsApp ग्रुप जॉइन करें",
    whatsappLink: "https://chat.whatsapp.com/EO8jo2u84lFLkpeIInf4He",
    summaryTitle: "ऑर्डर एवं भुगतान विवरण (Payment Receipt)",
    teamNoticeTitle: "हमारी टीम आपसे संपर्क करेगी (48 Hours Assurance)",
    teamNoticeText: `हमारी एक्सपर्ट वास्तु टीम अगले 48 घंटे के भीतर आपसे (+91 ${phone || 'XXXXXXXXXX'}) पर संपर्क करेगी और आपकी रिपोर्ट आपके WhatsApp एवं Email (${email || 'globalinchpvt@gmail.com'}) पर डिलीवर कर देगी।`,
    supportContact: "हेल्पलाइन: +91 9217664304 | globalinchpvt@gmail.com",
    // Popup Hindi Content
    popupHeader: "🎁 बधाई हो! आप हमारे लकी कस्टमर हैं!",
    popupSubHeader: "केवल आज के लिए विशेष अपग्रेड ऑफर",
    originalPriceLabel: "सामान्य कीमत:",
    vipPriceLabel: "अपग्रेड कीमत:",
    benefit1: "📞 1-on-1 फ्री पर्सनल सेशन एक्सपर्ट आचार्य जी के साथ",
    benefit2: "⚡ इमीडिएट इंस्टेंट रिपोर्ट (बिना किसी वेटिंग के)",
    benefit3: "🤝 पर्सनल वास्तु एजेंट & गाइडेंस सपोर्ट",
    claimBtn: "🎉 10% अतिरिक्त डिस्काउंट क्लेम करें",
    claimedBtn: "🚀 ₹1,799 में अपग्रेड करें (Direct Payment)",
    dismissText: "नहीं धन्यवाद, स्टैंडर्ड रिपोर्ट ही रखें"
  } : {
    badge: isVipUpgraded ? "🎉 Upgrade Payment Completed!" : "Payment Completed Successfully",
    mainTitle: isVipUpgraded ? "✨ Congratulations! Your 1-on-1 Upgrade Is Confirmed ✨" : "Thank You! Your Order Has Been Confirmed",
    subMessage: isVipUpgraded
      ? "Our expert Vastu team will contact you shortly for your 1-on-1 consultation session and immediate express report delivery."
      : "Your 16-Zone Personalized Vastu Report is being prepared and will be delivered within 48 hours.",
    whatsappGroupTitle: "Join Official WhatsApp Group",
    whatsappBtnText: "Join WhatsApp Group",
    whatsappLink: "https://chat.whatsapp.com/EO8jo2u84lFLkpeIInf4He",
    summaryTitle: "Order & Payment Summary (Payment Receipt)",
    teamNoticeTitle: "Our Team Will Contact You (48 Hours Assurance)",
    teamNoticeText: `Our expert Vastu team will contact you at (+91 ${phone || 'XXXXXXXXXX'}) within the next 48 hours and deliver your personalized report directly to your WhatsApp & Email (${email || 'globalinchpvt@gmail.com'}).`,
    supportContact: "Helpline: +91 9217664304 | globalinchpvt@gmail.com",
    // Popup English Content
    popupHeader: "🎁 CONGRATULATIONS! YOU ARE A LUCKY CUSTOMER!",
    popupSubHeader: "Special Upgrade Offer Only For Today",
    originalPriceLabel: "Regular Price:",
    vipPriceLabel: "Upgrade Price:",
    benefit1: "📞 1-on-1 Free Personal Consultation Session with Vastu Expert",
    benefit2: "⚡ Immediate Express Vastu Report Delivery (Zero waiting)",
    benefit3: "🤝 Dedicated Personal Vastu Agent & Guidance Support",
    claimBtn: "🎉 Claim Extra 10% INSTANT Discount",
    claimedBtn: "🚀 Upgrade Order Now at ₹1,799",
    dismissText: "No thanks, I will keep standard report"
  };

  return (
    <div className="min-h-screen bg-[#fffbf7] text-slate-900 font-sora relative overflow-hidden flex flex-col justify-between selection:bg-orange-500 selection:text-white">
      
      {/* 🎁 LUCKY CUSTOMER UPGRADE POPUP MODAL */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md animate-fadeIn">
          
          {/* Confetti Party Popper Animation Burst */}
          {particles.length > 0 && (
            <div className="absolute inset-0 pointer-events-none overflow-hidden z-50">
              {particles.map((p) => (
                <div
                  key={p.id}
                  className="absolute rounded-full animate-ping"
                  style={{
                    left: `${p.x}%`,
                    top: `${p.y}%`,
                    width: `${p.size}px`,
                    height: `${p.size}px`,
                    backgroundColor: p.color,
                    boxShadow: `0 0 12px ${p.color}`,
                    transition: "all 1s ease-out"
                  }}
                />
              ))}
            </div>
          )}

          <div className="bg-gradient-to-b from-white via-orange-50/40 to-amber-50 border-4 border-orange-400 max-w-lg w-full rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden text-center space-y-5 animate-scaleUp">
            
            {/* Close Button */}
            <button
              onClick={handleClosePopup}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 bg-white p-2 rounded-full border border-slate-200 shadow-sm transition-all cursor-pointer"
            >
              <X size={18} />
            </button>

            {/* Lucky Tag Badge */}
            <div className="inline-flex items-center gap-1.5 bg-gradient-to-r from-orange-500 to-amber-500 text-white text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wider shadow-md animate-pulse">
              <Gift size={15} />
              <span>LUCKY CUSTOMER SPECIAL</span>
            </div>

            {/* Title & Subtitle */}
            <div className="space-y-1">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-sora leading-tight">
                {content.popupHeader}
              </h2>
              <p className="text-xs sm:text-sm text-[#ea580c] font-bold">
                {content.popupSubHeader}
              </p>
            </div>

            {/* Price Box with Fast Rolling Counter */}
            <div className="bg-white border-2 border-orange-300 p-4 rounded-2xl shadow-inner space-y-2 relative">
              <div className="flex items-center justify-center gap-3">
                <span className="text-xs text-slate-400 font-bold line-through">
                  ₹4,999
                </span>
                <div className="flex items-baseline gap-1 text-2xl sm:text-3xl font-black text-[#ea580c] font-sora">
                  <span className="text-sm font-bold text-slate-700">₹</span>
                  <span className={`transition-all duration-100 ${isRolling ? "scale-125 text-emerald-600" : ""}`}>
                    {displayPrice}
                  </span>
                </div>
              </div>

              {discountClaimed && (
                <div className="inline-block bg-emerald-500 text-white text-[11px] font-black px-3 py-0.5 rounded-full uppercase tracking-wider shadow-sm animate-bounce">
                  ✨ EXTRA 10% DISCOUNT APPLIED (SAVE ₹3,200)
                </div>
              )}
            </div>

            {/* Included Upgrade Benefits */}
            <div className="bg-orange-100/60 border border-orange-200 p-4 rounded-2xl text-left space-y-2.5 text-xs text-slate-800 font-semibold">
              <div className="flex items-center gap-2 text-slate-900">
                <Headphones size={16} className="text-[#ea580c] shrink-0" />
                <span>{content.benefit1}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-900">
                <Zap size={16} className="text-[#ea580c] shrink-0" />
                <span>{content.benefit2}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-900">
                <ShieldCheck size={16} className="text-[#ea580c] shrink-0" />
                <span>{content.benefit3}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 pt-1">
              {!discountClaimed && (
                <button
                  onClick={handleClaimDiscount}
                  className="w-full bg-[#ea580c]/10 hover:bg-[#ea580c]/20 text-[#ea580c] font-extrabold text-xs sm:text-sm py-2.5 rounded-xl border border-orange-300 flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <Sparkles size={16} className="text-[#ea580c]" />
                  <span>{content.claimBtn}</span>
                </button>
              )}

              <button
                onClick={handleOpenRazorpayUpgrade}
                disabled={isUpgrading}
                className="w-full bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white font-black text-sm sm:text-base py-4 rounded-2xl shadow-xl shadow-emerald-600/30 flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-[1.02] cursor-pointer border border-emerald-300"
              >
                <CreditCard size={20} className="text-white shrink-0" />
                <span>
                  {isUpgrading 
                    ? "Opening Payment Gateway..." 
                    : (isHindi ? `Pay ₹${displayPrice} Now (पेमेंट करें)` : `Pay ₹${displayPrice} Now`)}
                </span>
              </button>

              <button
                onClick={handleClosePopup}
                className="text-xs text-slate-500 hover:text-slate-800 font-bold underline transition-colors cursor-pointer block mx-auto"
              >
                {content.dismissText}
              </button>
            </div>

          </div>
        </div>
      )}

      {/* Ambient Radial Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-100/50 via-[#fffbf7] to-[#fff5ea] pointer-events-none" />

      {/* Top Header Bar */}
      <header className="relative z-20 border-b border-orange-200 px-4 md:px-8 py-4 bg-white/80 backdrop-blur-md">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <img 
            src={vwLogo} 
            alt="Vastu Wheels Logo" 
            onClick={onBackToHome}
            className="h-9 md:h-11 w-auto object-contain cursor-pointer transition-transform hover:scale-105" 
          />
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 bg-orange-50 hover:bg-orange-100 text-[#ea580c] font-bold text-xs md:text-sm px-4 py-2 rounded-full transition-all border border-orange-300 cursor-pointer shadow-sm"
          >
            <ArrowLeft size={16} />
            <span>Back to Homepage</span>
          </button>
        </div>
      </header>

      {/* Main Thank You & Payment Confirmation Content */}
      <main className="relative z-20 max-w-4xl md:max-w-5xl w-full mx-auto px-4 py-8 md:py-12 text-center space-y-6 flex-1 flex flex-col justify-center">
        
        {/* Success Confirmation Badge */}
        <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-300 px-4 py-2 rounded-full text-xs md:text-sm font-extrabold text-emerald-800 mx-auto shadow-sm">
          <CheckCircle2 size={18} className="text-emerald-600 shrink-0" />
          <span>{content.badge}</span>
        </div>

        {/* Clean Main Title */}
        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold font-sora leading-tight tracking-tight text-slate-900">
            {content.mainTitle}
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-slate-600 font-semibold max-w-2xl mx-auto leading-relaxed">
            {content.subMessage}
          </p>
        </div>

        {/* 💬 CLEAN PROFESSIONAL WHATSAPP GROUP JOIN CTA BOX */}
        <div className="bg-white border-2 border-emerald-500 p-6 md:p-8 rounded-3xl text-center space-y-4 shadow-lg relative overflow-hidden">
          <h3 className="text-lg md:text-xl font-extrabold text-slate-900 font-sora">
            {content.whatsappGroupTitle}
          </h3>

          <div className="flex justify-center">
            <a 
              href={content.whatsappLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-[#25D366] hover:bg-[#1ebd59] text-white font-black text-sm md:text-base px-10 py-4 rounded-full shadow-md shadow-emerald-600/25 flex items-center justify-center gap-2.5 transition-all duration-200 transform hover:scale-[1.02] cursor-pointer border border-emerald-400"
            >
              <MessageCircle size={22} className="text-white shrink-0 fill-white" />
              <span>{content.whatsappBtnText}</span>
            </a>
          </div>
        </div>

        {/* Payment & Order Summary Receipt Box */}
        <div className="bg-white border-2 border-orange-300 p-6 md:p-8 rounded-3xl text-left space-y-5 shadow-md relative overflow-hidden">
          <div className="flex items-center justify-between border-b border-orange-200 pb-3">
            <h3 className="text-xs md:text-sm font-extrabold text-slate-900 uppercase tracking-wider flex items-center gap-2 font-sora">
              <FileCheck size={18} className="text-[#ea580c]" />
              <span>{content.summaryTitle}</span>
            </h3>
            <span className="bg-emerald-100 text-emerald-800 border border-emerald-300 text-[11px] font-extrabold px-3 py-0.5 rounded-full flex items-center gap-1">
              <ShieldCheck size={13} className="text-emerald-700" />
              <span>{isVipUpgraded ? "PAID (UPGRADE REPORT)" : "PAID ₹996"}</span>
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs">
            <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 space-y-1">
              <span className="text-slate-500 text-[10px] uppercase font-bold flex items-center gap-1.5">
                <CreditCard size={13} className="text-[#ea580c]" />
                <span>Payment ID</span>
              </span>
              <p className="font-mono font-bold text-[#ea580c] text-xs truncate">
                {isVipUpgraded ? vipPaymentId : displayPaymentId}
              </p>
            </div>

            <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 space-y-1">
              <span className="text-slate-500 text-[10px] uppercase font-bold flex items-center gap-1.5">
                <User size={13} className="text-[#ea580c]" />
                <span>Customer Name</span>
              </span>
              <p className="font-bold text-slate-900 text-xs truncate">
                {fullName || "Valued Customer"}
              </p>
            </div>

            <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 space-y-1">
              <span className="text-slate-500 text-[10px] uppercase font-bold flex items-center gap-1.5">
                <Phone size={13} className="text-[#ea580c]" />
                <span>WhatsApp Number</span>
              </span>
              <p className="font-bold text-slate-900 text-xs">
                +91 {phone || "XXXXXXXXXX"}
              </p>
            </div>

            <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 space-y-1">
              <span className="text-slate-500 text-[10px] uppercase font-bold flex items-center gap-1.5">
                <Mail size={13} className="text-[#ea580c]" />
                <span>Report Language</span>
              </span>
              <p className="font-bold text-emerald-700 text-xs">
                {selectedLanguage || "Hindi"} Report {isVipUpgraded ? "(1-on-1)" : ""}
              </p>
            </div>
          </div>

          <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-xs text-slate-700 flex items-center gap-2">
            <Mail size={14} className="text-[#ea580c] shrink-0" />
            <span className="truncate font-semibold">Email: {email || "globalinchpvt@gmail.com"}</span>
          </div>
        </div>

        {/* 48 Hours Team Contact Assurance Notice */}
        <div className="bg-gradient-to-r from-orange-50 via-amber-50 to-orange-50 border border-orange-300 p-5 md:p-6 rounded-2xl text-left space-y-2 shadow-sm">
          <h4 className="font-extrabold text-[#ea580c] text-xs md:text-sm tracking-wide flex items-center gap-2 font-sora">
            <Clock size={18} className="text-[#ea580c] shrink-0" />
            <span>{content.teamNoticeTitle}</span>
          </h4>
          <p className="text-xs text-slate-700 font-semibold leading-relaxed">
            {content.teamNoticeText}
          </p>
          <div className="pt-2 border-t border-orange-200 text-[11px] text-slate-600 font-bold">
            {content.supportContact}
          </div>
        </div>

      </main>

      {/* Footer */}
      <footer className="relative z-20 border-t border-orange-200 px-4 py-3 text-center text-[11px] text-slate-600 font-semibold bg-white/90">
        <div className="max-w-4xl mx-auto">
          Copyright 2026 - VastuWheels (Powered & Managed by GlobalInch) | Helpline: +91 9217664304
        </div>
      </footer>

    </div>
  );
}
