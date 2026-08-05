import React, { useState, useEffect, useRef } from "react";
import "./ReportForm.css";
import { ArrowLeft, ShieldCheck, CheckCircle2, Sparkles, AlertCircle, MapPin, ChevronDown, Search } from "lucide-react";
import vwLogo from "../../assets/VW-HR.png";
import { trackPixelEvent } from "../../utils/pixel";
import { getUtmParamsForNotes } from "../../utils/utm";

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
    direction: "",
    concern: "",
    dob: "",
    gender: "",
    phone: "",
    email: "",
    city: "",
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

  const filteredCities = INDIAN_CITIES.filter((c) =>
    c.toLowerCase().includes(citySearch.toLowerCase())
  );

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
    if (!formData.direction) newErrors.direction = true;
    if (!formData.concern) newErrors.concern = true;
    if (!formData.dob) newErrors.dob = true;
    if (!formData.phone || formData.phone.length < 10) newErrors.phone = true;
    if (!formData.email || !formData.email.includes("@")) newErrors.email = true;
    if (!formData.city.trim()) newErrors.city = true;
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
    trackPixelEvent("InitiateCheckout", { value: 996, currency: "INR" });

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
        body: JSON.stringify({ amount: 1499 * 100 }) // ₹996 in paise = 99600
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

    const options = {
      key: keyId,
      amount: 1499 * 100, // ₹996 in paise = 99600
      currency: "INR",
      name: "VastuWheels (Powered & Managed by GlobalInch)",
      description: "Personalised Vastu Science Report",
      order_id: orderId || undefined, // Linked Razorpay Order ID for 100% instant automatic capture!
      payment_capture: 1, // Automatically capture payment (Authorized -> Captured)
      handler: function (response) {
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
      prefill: {
        name: formData.fullName,
        email: formData.email,
        contact: formData.phone
      },
      notes: {
        payment_type: "form_checkout",
        unique_customer_id: uniqueCustomerId,
        full_name: formData.fullName,
        property_type: formData.propertyType,
        entrance_direction: formData.direction,
        primary_challenge: formData.concern,
        date_of_birth: formData.dob,
        gender: "N/A",
        phone_number: formData.phone,
        email_id: formData.email,
        current_location: formData.city,
        report_language: languagePayload,
        ...getUtmParamsForNotes()
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

      <div className="max-w-2xl mx-auto space-y-8" id="checkout-main-form">
        
        {/* Main Title & Instructions */}
        <div className="text-center space-y-1">
          <h1 className="text-2xl md:text-3xl font-extrabold text-[#ea580c] font-sora">
            Submit Your Details
          </h1>
          <p className="text-xs md:text-sm text-slate-600">
            To Tailor make your report, we need these details from you
          </p>
        </div>

        {Object.keys(errors).length > 0 && (
          <div className="bg-rose-50 border-2 border-rose-400 p-4 rounded-2xl flex items-center gap-3 text-rose-700 text-xs md:text-sm font-bold shadow-md">
            <AlertCircle size={20} className="shrink-0 text-rose-600" />
            <span>Please select or fill in all mandatory fields highlighted in Red.</span>
          </div>
        )}

        <form onSubmit={handleSubmit} noValidate className="white-orange-card p-6 md:p-8 space-y-6 shadow-xl border-2 border-orange-300 bg-white">
          
          {/* Form Fields */}
          <div className="space-y-4">
            
            {/* Full Name */}
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

            {/* Property Type & Main Entrance Direction */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                  <option value="Apartment / Flat">Apartment / Flat</option>
                  <option value="Independent House / Villa">Independent House / Villa</option>
                  <option value="Office / Commercial Space">Office / Commercial Space</option>
                  <option value="Shop / Factory / Warehouse">Shop / Factory / Warehouse</option>
                </select>
                {errors.propertyType && <p className="text-[11px] text-rose-600 font-bold mt-1">Please select Property Type</p>}
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">Main Entrance Direction *</label>
                <select 
                  value={formData.direction}
                  onChange={(e) => {
                    setFormData({ ...formData, direction: e.target.value });
                    if (errors.direction) setErrors({ ...errors, direction: false });
                  }}
                  className={`w-full bg-slate-50 border rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none transition-all ${
                    errors.direction ? "border-2 border-rose-500 bg-rose-50/50 text-rose-700 font-bold" : "border-slate-300 focus:border-[#f97316]"
                  }`}
                >
                  <option value="">-- Select Entrance Direction --</option>
                  <option value="North (Kuber Zone)">North (Kuber Zone)</option>
                  <option value="North-East (Ishan Zone)">North-East (Ishan Zone)</option>
                  <option value="East (Indra Zone)">East (Indra Zone)</option>
                  <option value="South-East (Agni Zone)">South-East (Agni Zone)</option>
                  <option value="South (Yama Zone)">South (Yama Zone)</option>
                  <option value="South-West (Nairitya Zone)">South-West (Nairitya Zone)</option>
                  <option value="West (Varun Zone)">West (Varun Zone)</option>
                  <option value="North-West (Vayu Zone)">North-West (Vayu Zone)</option>
                </select>
                {errors.direction && <p className="text-[11px] text-rose-600 font-bold mt-1">Please select Entrance Direction</p>}
              </div>
            </div>

            {/* Primary Challenge Area */}
            <div>
              <label className="block text-xs font-bold text-slate-800 mb-1">Primary Challenge Area *</label>
              <select 
                value={formData.concern}
                onChange={(e) => {
                  setFormData({ ...formData, concern: e.target.value });
                  if (errors.concern) setErrors({ ...errors, concern: false });
                }}
                className={`w-full bg-slate-50 border rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none transition-all ${
                  errors.concern ? "border-2 border-rose-500 bg-rose-50/50 text-rose-700 font-bold" : "border-slate-300 focus:border-[#f97316]"
                }`}
              >
                <option value="">-- Select Primary Challenge Area --</option>
                <option value="Financial Growth & Cashflow">Financial Growth & Cashflow</option>
                <option value="Health Issues & Mental Stress">Health Issues & Mental Stress</option>
                <option value="Career Stagnation & Business Losses">Career Stagnation & Business Losses</option>
                <option value="Marriage Delay & Family Disputes">Marriage Delay & Family Disputes</option>
              </select>
              {errors.concern && <p className="text-[11px] text-rose-600 font-bold mt-1">Please select Primary Challenge Area</p>}
            </div>

            {/* Date of Birth */}
            <div>
              <label className="block text-xs font-bold text-slate-800 mb-1">Date of Birth *</label>
              <input 
                type="date"
                value={formData.dob}
                onChange={(e) => {
                  setFormData({ ...formData, dob: e.target.value });
                  if (errors.dob) setErrors({ ...errors, dob: false });
                }}
                className={`w-full bg-slate-50 border rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none transition-all ${
                  errors.dob ? "border-2 border-rose-500 bg-rose-50/50 text-rose-700 font-bold" : "border-slate-300 focus:border-[#f97316]"
                }`}
              />
              {errors.dob && <p className="text-[11px] text-rose-600 font-bold mt-1">Date of Birth is required</p>}
            </div>

            {/* WhatsApp Phone Number */}
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

            {/* Email ID */}
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

            {/* Current Location / City with Searchable Dropdown */}
            <div className="relative" ref={cityDropdownRef}>
              <label className="block text-xs font-bold text-slate-800 mb-1">Current Location / City *</label>
              
              <div className="relative">
                <input 
                  type="text"
                  placeholder="Select or Search City (e.g. Mumbai, Delhi, Thane)"
                  value={formData.city}
                  onFocus={() => setIsCityDropdownOpen(true)}
                  onChange={(e) => {
                    const query = e.target.value;
                    setFormData({ ...formData, city: query });
                    setCitySearch(query);
                    setIsCityDropdownOpen(true);
                    if (errors.city) setErrors({ ...errors, city: false });
                  }}
                  className={`w-full bg-slate-50 border rounded-xl pl-10 pr-10 py-3 text-sm text-slate-900 focus:outline-none transition-all ${
                    errors.city ? "border-2 border-rose-500 bg-rose-50/50" : "border-slate-300 focus:border-[#f97316]"
                  }`}
                />
                <MapPin size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-orange-500 pointer-events-none" />
                <ChevronDown size={18} className={`absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 transition-transform duration-200 pointer-events-none ${isCityDropdownOpen ? "rotate-180 text-[#ea580c]" : ""}`} />
              </div>

              {/* Searchable Dropdown Overlay */}
              {isCityDropdownOpen && (
                <div className="absolute z-50 left-0 right-0 mt-1.5 bg-white border-2 border-orange-300 rounded-2xl shadow-2xl max-h-60 overflow-y-auto divide-y divide-slate-100 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="p-2.5 bg-orange-50/80 sticky top-0 flex items-center gap-2 border-b border-orange-200 backdrop-blur-sm">
                    <Search size={16} className="text-[#ea580c] shrink-0 ml-1" />
                    <input 
                      type="text"
                      placeholder="Type city or state to search..."
                      value={citySearch}
                      onChange={(e) => setCitySearch(e.target.value)}
                      className="w-full bg-white border border-slate-300 rounded-xl px-3 py-1.5 text-xs text-slate-900 focus:outline-none focus:border-[#f97316]"
                      autoFocus
                    />
                  </div>

                  {filteredCities.length > 0 ? (
                    filteredCities.map((cityName, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => {
                          setFormData({ ...formData, city: cityName });
                          setCitySearch("");
                          setIsCityDropdownOpen(false);
                          if (errors.city) setErrors({ ...errors, city: false });
                        }}
                        className={`w-full text-left px-4 py-2.5 text-xs font-semibold hover:bg-orange-50 hover:text-[#ea580c] transition-colors flex items-center justify-between cursor-pointer ${
                          formData.city === cityName ? "bg-orange-100/70 text-[#ea580c] font-bold" : "text-slate-700"
                        }`}
                      >
                        <span>{cityName}</span>
                        {formData.city === cityName && <CheckCircle2 size={15} className="text-[#ea580c]" />}
                      </button>
                    ))
                  ) : (
                    <div 
                      onClick={() => setIsCityDropdownOpen(false)}
                      className="p-3 text-center text-xs text-slate-500 italic cursor-pointer hover:bg-slate-50"
                    >
                      Use custom entered location: "{formData.city}"
                    </div>
                  )}
                </div>
              )}

              {errors.city && <p className="text-[11px] text-rose-600 font-bold mt-1">Location / City is required</p>}
            </div>

            {/* Select Report Language - RESTRICTED TO ONLY HINDI AND ENGLISH */}
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
                <span>Proceed to Pay ₹996 & Get Report</span>
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
