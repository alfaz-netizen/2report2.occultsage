import React, { useState } from "react";
import "./ReportForm.css";
import { ArrowLeft, ShieldCheck, Lock, CheckCircle2, Sparkles } from "lucide-react";

export default function ReportForm({ onBack }) {
  const [formData, setFormData] = useState({
    fullName: "",
    propertyType: "Apartment / Flat",
    direction: "North-East",
    concern: "Financial Growth & Cashflow",
    phone: "",
    email: "",
    city: "",
    bonusCourse: "Astro-Vastu Gemstone Alignment Guide (FREE Today)"
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const loadRazorpayScript = () => {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || !formData.email) {
      alert("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);

    const isLoaded = await loadRazorpayScript();
    if (!isLoaded) {
      alert("Razorpay payment gateway failed to load. Please check your internet connection.");
      setIsSubmitting(false);
      return;
    }

    const keyId = import.meta.env.VITE_RAZORPAY_KEY_ID || "rzp_live_SSFQ4gpLaM0VXb";

    const options = {
      key: keyId,
      amount: 999 * 100, // ₹999 in paise = 99900
      currency: "INR",
      name: "VastuWheels",
      description: "Personalised Vastu Science Report",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
      handler: function (response) {
        console.log("Razorpay Payment Success Response:", response);
        setIsSubmitting(false);
        setIsSuccess(true);
      },
      prefill: {
        name: formData.fullName,
        email: formData.email,
        contact: formData.phone
      },
      notes: {
        propertyType: formData.propertyType,
        direction: formData.direction,
        concern: formData.concern,
        city: formData.city,
        bonusCourse: formData.bonusCourse
      },
      theme: {
        color: "#ea580c"
      },
      modal: {
        ondismiss: function () {
          setIsSubmitting(false);
        }
      }
    };

    try {
      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      console.error("Razorpay Error:", err);
      alert("Failed to initialize payment popup. Please try again.");
      setIsSubmitting(false);
    }
  };

  return (
    <div className="report-form-page min-h-screen bg-[#fffbf7] py-8 px-4 md:px-8 text-slate-900 font-sora">
      
      {/* Top Navigation Bar */}
      <div className="max-w-3xl mx-auto flex items-center justify-between border-b border-orange-200 pb-4 mb-8">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-xs md:text-sm font-bold text-slate-700 hover:text-[#ea580c] transition-colors cursor-pointer"
        >
          <ArrowLeft size={18} />
          <span>Back to Overview</span>
        </button>

        <div className="flex items-center gap-2">
          <span className="font-extrabold text-lg md:text-xl text-slate-900">
            Vastu<span className="orange-gradient-text">Wheels</span>
          </span>
          <span className="bg-orange-100 text-[#ea580c] text-[10px] font-bold px-2 py-0.5 rounded border border-orange-300">
            Checkout
          </span>
        </div>

        <div className="flex items-center gap-1.5 text-xs text-emerald-700 font-semibold hidden sm:flex">
          <ShieldCheck size={16} />
          <span>256-Bit SSL Secured</span>
        </div>
      </div>

      <div className="max-w-2xl mx-auto space-y-8">
        
        {/* Main Title & Instructions */}
        <div className="text-center space-y-2">
          <h1 className="text-2xl md:text-4xl font-extrabold text-slate-900 font-sora">
            Premium Vastu Analysis Report
          </h1>
          <p className="text-sm md:text-base text-[#ea580c] font-bold">
            Submit Your Details
          </p>
          <p className="text-xs md:text-sm text-slate-600">
            To tailor-make your personalized Vastu report, we need these details from you:
          </p>
        </div>

        {!isSuccess ? (
          <form onSubmit={handleSubmit} className="white-orange-card p-6 md:p-8 space-y-6 shadow-xl border-2 border-orange-300 bg-white">
            
            {/* Form Fields */}
            <div className="space-y-4">
              
              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">Full Name *</label>
                <input 
                  type="text"
                  required
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-[#f97316]"
                />
              </div>

              {/* Property Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">Property Type</label>
                  <select 
                    value={formData.propertyType}
                    onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-[#f97316]"
                  >
                    <option>Apartment / Flat</option>
                    <option>Independent House / Villa</option>
                    <option>Office / Commercial Space</option>
                    <option>Shop / Factory / Warehouse</option>
                  </select>
                </div>

                {/* Entrance Direction */}
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">Main Entrance Direction</label>
                  <select 
                    value={formData.direction}
                    onChange={(e) => setFormData({ ...formData, direction: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-[#f97316]"
                  >
                    <option>North (Kuber Zone)</option>
                    <option>North-East (Ishan Zone)</option>
                    <option>East (Indra Zone)</option>
                    <option>South-East (Agni Zone)</option>
                    <option>South (Yama Zone)</option>
                    <option>South-West (Nairitya Zone)</option>
                    <option>West (Varun Zone)</option>
                    <option>North-West (Vayu Zone)</option>
                  </select>
                </div>
              </div>

              {/* Primary Concern */}
              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">Primary Challenge Area</label>
                <select 
                  value={formData.concern}
                  onChange={(e) => setFormData({ ...formData, concern: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-[#f97316]"
                >
                  <option>Financial Growth & Cashflow</option>
                  <option>Health Issues & Mental Stress</option>
                  <option>Career Stagnation & Business Losses</option>
                  <option>Marriage Delay & Family Disputes</option>
                </select>
              </div>

              {/* WhatsApp Number */}
              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">WhatsApp Phone Number *</label>
                <div className="flex">
                  <span className="bg-slate-100 border border-r-0 border-slate-300 rounded-l-xl px-4 py-3 text-xs text-slate-600 font-bold flex items-center">
                    IN +91
                  </span>
                  <input 
                    type="tel"
                    required
                    maxLength={10}
                    placeholder="9999999999"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, "") })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-r-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-[#f97316]"
                  />
                </div>
              </div>

              {/* Email ID */}
              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">Email ID *</label>
                <input 
                  type="email"
                  required
                  placeholder="Please enter your Email ID"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-[#f97316]"
                />
              </div>

              {/* Current Location */}
              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">Current Location / City</label>
                <input 
                  type="text"
                  placeholder="City, State"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-[#f97316]"
                />
              </div>

              {/* Bonus Course Selector */}
              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">Included Bonus Guide (FREE)</label>
                <select 
                  value={formData.bonusCourse}
                  onChange={(e) => setFormData({ ...formData, bonusCourse: e.target.value })}
                  className="w-full bg-orange-50 border border-orange-300 text-[#ea580c] font-bold rounded-xl px-4 py-3 text-sm focus:outline-none"
                >
                  <option>Astro-Vastu Gemstone Alignment Guide (FREE)</option>
                  <option>Zero-Demolition Color Therapy Blueprint (FREE)</option>
                  <option>Kuber Cashflow Multiplier Checklist (FREE)</option>
                </select>
              </div>

            </div>

            {/* Order Summary Box */}
            <div className="bg-orange-50/90 border border-orange-300 p-4 rounded-2xl space-y-2">
              <div className="flex items-center justify-between text-xs font-bold text-slate-800">
                <span>Custom Vastu PDF Report</span>
                <span className="text-[#ea580c] text-sm">
                  ₹999 <del className="text-slate-400 font-normal">₹5,999</del>
                </span>
              </div>
              <div className="text-[11px] text-slate-600 space-y-1">
                <div className="flex items-center gap-1.5 text-emerald-700 font-semibold">
                  <CheckCircle2 size={13} />
                  <span>100% Zero-Demolition Blueprint Included</span>
                </div>
                <div className="flex items-center gap-1.5 text-emerald-700 font-semibold">
                  <CheckCircle2 size={13} />
                  <span>Instant Delivery on WhatsApp & Email</span>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full btn-orange-primary text-base py-4 flex items-center justify-center gap-2 cursor-pointer shadow-lg font-black"
            >
              {isSubmitting ? (
                <span>Opening Payment Gateway...</span>
              ) : (
                <>
                  <span>Proceed to Pay ₹999 & Get Report</span>
                  <Sparkles size={18} />
                </>
              )}
            </button>

            <div className="flex items-center justify-center gap-4 text-xs text-slate-500 font-medium pt-1">
              <span className="flex items-center gap-1"><Lock size={13} className="text-emerald-600" /> 256-Bit Encrypted</span>
              <span>•</span>
              <span>100% Satisfaction Guarantee</span>
            </div>

          </form>
        ) : (
          /* Order Confirmation */
          <div className="white-orange-card p-8 text-center space-y-4 border-2 border-emerald-500/40 bg-white">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-300">
              <CheckCircle2 size={36} />
            </div>
            <h2 className="text-2xl font-extrabold text-slate-900 font-sora">Order Confirmed for {formData.fullName}!</h2>
            <p className="text-sm text-slate-600 leading-relaxed max-w-md mx-auto">
              Your custom Vastu report for <strong className="text-[#ea580c]">{formData.direction}</strong> entrance and <strong className="text-[#ea580c]">{formData.concern}</strong> remedies is being generated. Check your WhatsApp number (+91 {formData.phone}) and email ({formData.email}) in 2 minutes.
            </p>
            <button
              onClick={onBack}
              className="btn-orange-primary text-xs px-6 py-3 font-bold inline-block cursor-pointer"
            >
              Return to Homepage
            </button>
          </div>
        )}

      </div>

    </div>
  );
}
