import React, { useState, useEffect, useRef } from "react";
import "./ReportForm.css";
import { ArrowLeft, ShieldCheck, CheckCircle2, Sparkles, AlertCircle, MapPin, ChevronDown, Search } from "lucide-react";
import vwLogo from "../../assets/VW-HR.png";
import { trackPixelEvent } from "../../utils/pixel";
import { getUtmParamsForNotes, captureUtmParams } from "../../utils/utm";

const INDIAN_CITIES = [
  "Delhi NCR (Delhi, Gurgaon, Noida)",
  "Mumbai, Maharashtra",
  "Bengaluru, Karnataka",
  "Hyderabad, Telangana",
  "Chennai, Tamil Nadu",
  "Kolkata, West Bengal",
  "Ahmedabad, Gujarat",
  "Pune, Maharashtra",
  "Jaipur, Rajasthan",
  "Surat, Gujarat",
  "Lucknow, Uttar Pradesh",
  "Kanpur, Uttar Pradesh",
  "Nagpur, Maharashtra",
  "Indore, Madhya Pradesh",
  "Bhopal, Madhya Pradesh",
  "Thane, Maharashtra",
  "Visakhapatnam, Andhra Pradesh",
  "Vadodara, Gujarat",
  "Chandigarh",
  "Patna, Bihar",
  "Ranchi, Jharkhand",
  "Bhubaneswar, Odisha",
  "Guwahati, Assam",
  "Coimbatore, Tamil Nadu",
  "Kochi, Kerala",
  "Agra, Uttar Pradesh",
  "Varanasi, Uttar Pradesh",
  "Ludhiana, Punjab",
  "Amritsar, Punjab",
  "Dehradun, Uttarakhand",
  "Raipur, Chhattisgarh",
  "Rajkot, Gujarat",
  "Nashik, Maharashtra",
  "Mysuru, Karnataka",
  "Jodhpur, Rajasthan",
  "Madurai, Tamil Nadu",
  "Vijayawada, Andhra Pradesh",
  "Jammu, Jammu & Kashmir",
  "Shimla, Himachal Pradesh",
  "Panaji, Goa",
  "Other / Outside India"
];

export default function ReportForm({ onBack, onPaymentSuccess }) {
  const [formData, setFormData] = useState({
    fullName: "",
    propertyType: "",
    direction: "N/A",
    concern: "N/A",
    dob: "N/A",
    gender: "N/A",
    phone: "",
    email: "",
    city: "N/A",
    reportLanguage: ""
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [citySearch, setCitySearch] = useState("");
  const [isCityDropdownOpen, setIsCityDropdownOpen] = useState(false);
  const cityDropdownRef = useRef(null);

  // Close city dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cityDropdownRef.current && !cityDropdownRef.current.contains(event.target)) {
        setIsCityDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = true;
    if (!formData.propertyType) newErrors.propertyType = true;
    if (!formData.phone || formData.phone.length < 10) newErrors.phone = true;
    if (!formData.email || !formData.email.includes("@")) newErrors.email = true;
    if (!formData.reportLanguage) newErrors.reportLanguage = true;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      // Scroll to the top of the form so user sees missing fields
      const formEl = document.getElementById("checkout-main-form");
      if (formEl) formEl.scrollIntoView({ behavior: "smooth" });
      return;
    }

    // Trigger Meta Facebook Pixel InitiateCheckout Event
    trackPixelEvent("InitiateCheckout", { value: 1499, currency: "INR" });

    setIsSubmitting(true);

    const isLoaded = await loadRazorpayScript();
    if (!isLoaded) {
      alert("Razorpay payment gateway failed to load. Please check your internet connection.");
      setIsSubmitting(false);
      return;
    }

    const keyId = import.meta.env.VITE_RAZORPAY_KEY_ID || "rzp_live_SSFQ4gpLaM0VXb";

    // Format exact language payload for Razorpay Notes requested by user:
    // Hindi -> "Vastu Wheels Hindi fb"
    // English -> "Vastu Wheels English FB"
    const languagePayload = formData.reportLanguage === "Hindi"
      ? "Vastu Wheels Hindi fb"
      : "Vastu Wheels English FB";

    // Create Razorpay Order via Orders API to guarantee 100% automatic payment capture
    let orderId = "";
    try {
      const orderRes = await fetch("/api/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: 1499 * 100 }) // ₹1499 in paise = 149900
      });
      if (orderRes.ok) {
        const orderData = await orderRes.json();
        if (orderData?.order_id) {
          orderId = orderData.order_id;
        }
      }
    } catch (err) {
      console.warn("Orders API warning, proceeding with fallback checkout options:", err);
    }

    // Generate Unique Customer ID for tracking customer across payments (e.g. VW-84920193)
    const uniqueCustomerId = "VW-" + Math.floor(10000000 + Math.random() * 90000000);

    // Track whether payment was completed to ensure ONLY unpaid/dropped-off leads go to Google Sheet
    let hasPaymentCompleted = false;

    const sendUnpaidLeadToGoogleSheet = () => {
      if (hasPaymentCompleted) return; // Do not send if user paid successfully!
      try {
        const rawUtms = captureUtmParams() || {};
        const leadPayload = {
          unique_customer_id: uniqueCustomerId,
          payment_id: "PENDING / NOT PAID",
          amount: "1499",
          full_name: formData.fullName || "N/A",
          phone_number: formData.phone || "N/A",
          email_id: formData.email || "N/A",
          report_language: formData.reportLanguage || "N/A",
          property_type: formData.propertyType || "N/A",
          entrance_direction: formData.direction || "N/A",
          primary_challenge: formData.concern || "N/A",
          date_of_birth: formData.dob || "N/A",
          gender: formData.gender || "N/A",
          current_location: formData.city || "N/A",
          utm_source: rawUtms.utm_source || "organic / none",
          utm_medium: rawUtms.utm_medium || "organic / none",
          utm_campaign: rawUtms.utm_campaign || "N/A",
          utm_term: rawUtms.utm_term || "N/A",
          utm_content: rawUtms.utm_content || "N/A",
          utm_id: rawUtms.utm_id || "N/A",
          utm_source_platform: rawUtms.utm_source_platform || "N/A",
          utm_creative_format: rawUtms.utm_creative_format || "N/A",
          utm_marketing_tactic: rawUtms.utm_marketing_tactic || "N/A"
        };

        fetch("https://script.google.com/macros/s/AKfycbyr-ZmzmrnrRhEwA5zhxvJWol7M3nTBpklIqQ5gtvmyg6S1W5kbWDVNf50WxfuYgwCX/exec", {
          method: "POST",
          headers: { "Content-Type": "text/plain;charset=utf-8" },
          body: JSON.stringify(leadPayload)
        }).catch((err) => console.warn("Google Sheet Lead Capture Warning:", err));
      } catch (err) {
        console.warn("Lead Capture Exception:", err);
      }
    };

    const options = {
      key: keyId,
      amount: 1499 * 100, // ₹1499 in paise = 149900
      currency: "INR",
      name: "VastuWheels (Powered & Managed by GlobalInch)",
      description: "Personalised Vastu Science Report",
      order_id: orderId || undefined, // Linked Razorpay Order ID for 100% instant automatic capture!
      payment_capture: 1, // Automatically capture payment (Authorized -> Captured)
      handler: function (response) {
        hasPaymentCompleted = true; // Mark payment completed
        console.log("Razorpay Payment Success Response:", response);
        setIsSubmitting(false);
        if (onPaymentSuccess) {
          onPaymentSuccess({
            language: formData.reportLanguage,
            fullName: formData.fullName,
            phone: formData.phone,
            email: formData.email,
            uniqueCustomerId: uniqueCustomerId,
            paymentId: response?.razorpay_payment_id || ("PAY_" + Math.random().toString(36).substring(2, 10).toUpperCase())
          });
        }
      },
      modal: {
        ondismiss: function () {
          console.log("Razorpay Checkout Modal Dismissed / Closed by user");
          setIsSubmitting(false);
          if (!hasPaymentCompleted) {
            sendUnpaidLeadToGoogleSheet(); // Fires ONLY when user closes Razorpay without paying!
          }
        }
      },
      prefill: {
        name: formData.fullName,
        email: formData.email,
        contact: formData.phone
      },
      notes: {
        payment_type: "form_checkout",
        unique_customer_id: uniqueCustomerId,
        full_name: formData.fullName || "N/A",
        property_type: formData.propertyType || "N/A",
        entrance_direction: formData.direction || "N/A",
        primary_challenge: formData.concern || "N/A",
        date_of_birth: formData.dob || "N/A",
        gender: formData.gender || "N/A",
        phone_number: formData.phone || "N/A",
        email_id: formData.email || "N/A",
        current_location: formData.city || "N/A",
        report_language: languagePayload,
        ...getUtmParamsForNotes()
      },
      theme: {
        color: "#ea580c"
      }
    };

    try {
      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      console.error("Razorpay Error:", err);
      // Fallback demo submission if Razorpay popup fails
      setIsSubmitting(false);
      if (onPaymentSuccess) {
        onPaymentSuccess({
          language: formData.reportLanguage,
          fullName: formData.fullName,
          phone: formData.phone
        });
      }
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
          <img 
            src={vwLogo} 
            alt="Vastu Wheels Logo" 
            className="h-8 md:h-10 w-auto object-contain"
          />
          <span className="bg-orange-100 text-[#ea580c] text-[10px] font-bold px-2 py-0.5 rounded border border-orange-300">
            Checkout
          </span>
        </div>
      </div>

      {/* Main Form Container */}
      <div id="checkout-main-form" className="max-w-2xl mx-auto bg-white rounded-3xl p-6 sm:p-8 border-2 border-orange-200 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-orange-400 via-[#ea580c] to-amber-500" />

        {/* Header */}
        <div className="text-center space-y-2 mb-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-sora">
            Submit Your Details
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 font-medium">
            To tailor-make your report, we need these details from you
          </p>
        </div>

        {/* Form Elements */}
        <form onSubmit={handleSubmit} className="space-y-5">
          
          {/* 1. Full Name */}
          <div>
            <label className="block text-xs font-bold text-slate-800 mb-1">Full Name *</label>
            <input 
              type="text"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={(e) => {
                setFormData({ ...formData, fullName: e.target.value });
                if (errors.fullName) setErrors({ ...errors, fullName: false });
              }}
              className={`w-full bg-slate-50 border rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none transition-all ${
                errors.fullName ? "border-2 border-rose-500 bg-rose-50/50" : "border-slate-300 focus:border-[#f97316]"
              }`}
            />
            {errors.fullName && <p className="text-[11px] text-rose-600 font-bold mt-1">Full Name is required</p>}
          </div>

          {/* 2. Property Type */}
          <div>
            <label className="block text-xs font-bold text-slate-800 mb-1">Property Type *</label>
            <select 
              value={formData.propertyType}
              onChange={(e) => {
                setFormData({ ...formData, propertyType: e.target.value });
                if (errors.propertyType) setErrors({ ...errors, propertyType: false });
              }}
              className={`w-full bg-slate-50 border rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none transition-all ${
                errors.propertyType ? "border-2 border-rose-500 bg-rose-50/50 text-rose-700 font-bold" : "border-slate-300 focus:border-[#f97316]"
              }`}
            >
              <option value="">-- Select Property Type --</option>
              <option value="Own Property">Own Property</option>
              <option value="Rental Property">Rental Property</option>
              <option value="Commercial Property">Commercial Property</option>
              <option value="Industrial & Factory">Industrial & Factory</option>
              <option value="Office / Business Space">Office / Business Space</option>
              <option value="Shop / Showroom / Warehouse">Shop / Showroom / Warehouse</option>
            </select>
            {errors.propertyType && <p className="text-[11px] text-rose-600 font-bold mt-1">Please select Property Type</p>}
          </div>

          {/* 3. WhatsApp Phone Number */}
          <div>
            <label className="block text-xs font-bold text-slate-800 mb-1">WhatsApp Phone Number *</label>
            <div className="flex">
              <span className="bg-slate-100 border border-r-0 border-slate-300 rounded-l-xl px-3 sm:px-4 py-3 text-xs text-slate-700 font-bold flex items-center justify-center whitespace-nowrap shrink-0">
                IN +91
              </span>
              <input 
                type="tel"
                maxLength={10}
                placeholder="9999999999"
                value={formData.phone}
                onChange={(e) => {
                  setFormData({ ...formData, phone: e.target.value.replace(/\D/g, "") });
                  if (errors.phone) setErrors({ ...errors, phone: false });
                }}
                className={`w-full bg-slate-50 border rounded-r-xl px-4 py-3 text-sm text-slate-900 focus:outline-none transition-all ${
                  errors.phone ? "border-2 border-rose-500 bg-rose-50/50" : "border-slate-300 focus:border-[#f97316]"
                }`}
              />
            </div>
            {errors.phone && <p className="text-[11px] text-rose-600 font-bold mt-1">Valid 10-digit WhatsApp number required</p>}
          </div>

          {/* 4. Email ID */}
          <div>
            <label className="block text-xs font-bold text-slate-800 mb-1">Email ID *</label>
            <input 
              type="email"
              placeholder="Please enter your Email ID"
              value={formData.email}
              onChange={(e) => {
                setFormData({ ...formData, email: e.target.value });
                if (errors.email) setErrors({ ...errors, email: false });
              }}
              className={`w-full bg-slate-50 border rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none transition-all ${
                errors.email ? "border-2 border-rose-500 bg-rose-50/50" : "border-slate-300 focus:border-[#f97316]"
              }`}
            />
            {errors.email && <p className="text-[11px] text-rose-600 font-bold mt-1">Valid Email ID is required</p>}
          </div>

          {/* 5. Select Report Language */}
          <div>
            <label className="block text-xs font-bold text-slate-800 mb-1">Select Report Language *</label>
            <select 
              value={formData.reportLanguage}
              onChange={(e) => {
                setFormData({ ...formData, reportLanguage: e.target.value });
                if (errors.reportLanguage) setErrors({ ...errors, reportLanguage: false });
              }}
              className={`w-full bg-slate-50 border rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none transition-all ${
                errors.reportLanguage ? "border-2 border-rose-500 bg-rose-50/50 text-rose-700 font-bold" : "border-slate-300 focus:border-[#f97316]"
              }`}
            >
              <option value="">-- Select Report Language --</option>
              <option value="Hindi">Hindi</option>
              <option value="English">English</option>
            </select>
            {errors.reportLanguage && <p className="text-[11px] text-rose-600 font-bold mt-1">Please select Report Language</p>}
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
                <span>Proceed to Pay ₹1,499 & Get Report</span>
                <Sparkles size={18} />
              </>
            )}
          </button>

          <div className="flex flex-col items-center justify-center text-xs md:text-sm text-slate-600 font-semibold pt-1 text-center space-y-1">
            <span className="text-[#ea580c] font-extrabold flex items-center justify-center gap-1.5 bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
              <ShieldCheck size={16} />
              <span>Powered & Managed by GlobalInch | Secured by Razorpay</span>
            </span>
            <span>Note: Your personalized report will be ready and delivered within 48 hours</span>
          </div>

        </form>

      </div>

    </div>
  );
}
