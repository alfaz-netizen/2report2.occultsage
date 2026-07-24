import React, { useEffect } from "react";
import { ArrowLeft, ShieldCheck, FileText, Info, RefreshCw, AlertTriangle, Phone, Mail, MapPin } from "lucide-react";
import vwLogo from "../../assets/VW-HR.png";

export default function LegalPage({ activeDoc, onBackToHome, onSelectDoc }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeDoc]);

  const legalDocs = {
    privacy: {
      id: "privacy",
      title: "Privacy Policy",
      icon: <ShieldCheck className="text-emerald-600" size={22} />,
      content: (
        <div className="space-y-6 text-slate-700 text-sm leading-relaxed">
          <p className="text-base font-medium text-slate-800">
            At <strong>VastuWheels Private Limited</strong>, located at <strong>Unit No-1166 Vegas Mall, Sector-14 Dwarka, South West Delhi, New Delhi, Delhi 110075</strong>, we respect your privacy and are committed to protecting your personal data.
          </p>

          <div className="border-l-4 border-emerald-500 pl-4 py-1 bg-emerald-50/40 rounded-r-xl">
            <h4 className="font-extrabold text-slate-900 text-base">1. Information We Collect</h4>
            <p className="mt-1 text-slate-600">
              We collect personal information that you voluntarily provide when ordering a Vastu Report, including your Full Name, Email ID (<strong>globalinchpvt@gmail.com</strong>), Phone Number (+91 9217664304), Date of Birth, Gender, Property Details, and Primary Vastu Concern.
            </p>
          </div>

          <div className="border-l-4 border-emerald-500 pl-4 py-1 bg-emerald-50/40 rounded-r-xl">
            <h4 className="font-extrabold text-slate-900 text-base">2. How We Use Your Information</h4>
            <p className="mt-1 text-slate-600">
              Your information is strictly used to process your order, calculate personalized Vastu directional remedies, deliver your PDF report via WhatsApp and Email, and send essential customer support communications.
            </p>
          </div>

          <div className="border-l-4 border-emerald-500 pl-4 py-1 bg-emerald-50/40 rounded-r-xl">
            <h4 className="font-extrabold text-slate-900 text-base">3. Payment Security</h4>
            <p className="mt-1 text-slate-600">
              We do NOT store your bank details, credit card numbers, or UPI PINs. All financial transactions are processed securely through PCI-DSS compliant payment gateways (Razorpay) using 256-bit SSL encryption.
            </p>
          </div>

          <div className="border-l-4 border-emerald-500 pl-4 py-1 bg-emerald-50/40 rounded-r-xl">
            <h4 className="font-extrabold text-slate-900 text-base">4. Data Sharing & Third Parties</h4>
            <p className="mt-1 text-slate-600">
              We never sell, rent, or trade your personal information to third-party marketing companies. Data is shared only with trusted operational infrastructure partners (such as Razorpay and automated messaging APIs) strictly for order fulfillment.
            </p>
          </div>
        </div>
      )
    },

    about: {
      id: "about",
      title: "About Us",
      icon: <Info className="text-amber-500" size={22} />,
      content: (
        <div className="space-y-6 text-slate-700 text-sm leading-relaxed">
          <p className="text-base font-medium text-slate-800">
            <strong>VastuWheels Private Limited</strong> is India's premier research organization dedicated to Vedic Vastu Science, Astro-Vastu Analysis, and Numerology.
          </p>
          <p>
            Operating from our corporate office at <strong>Unit No-1166 Vegas Mall, Sector-14 Dwarka, South West Delhi, New Delhi, Delhi 110075</strong>, our mission is to empower homeowners, business leaders, couples, and property buyers with scientific, <strong>100% Non-Demolition Vastu Remedies</strong> that require zero wall tearing or structural damage.
          </p>

          <div className="bg-amber-50/60 border border-amber-200/80 p-5 rounded-2xl space-y-3">
            <h4 className="font-extrabold text-slate-900 text-base">Why Choose VastuWheels?</h4>
            <ul className="list-disc pl-5 space-y-2 text-slate-700">
              <li><strong>60,000+ Happy Consultations:</strong> Trusted across India and globally for authentic directional alignment.</li>
              <li><strong>ISO 9001:2015 Certified:</strong> Certified quality management systems for Vastu report accuracy.</li>
              <li><strong>Elemental Balancing:</strong> Practical remedies based on color therapy, metal strips, and elemental zone alignment.</li>
              <li><strong>Direct Corporate Helpline:</strong> Available at +91 9217664304 or globalinchpvt@gmail.com.</li>
            </ul>
          </div>
        </div>
      )
    },

    tnc: {
      id: "tnc",
      title: "Terms and Conditions (TnC)",
      icon: <FileText className="text-orange-500" size={22} />,
      content: (
        <div className="space-y-6 text-slate-700 text-sm leading-relaxed">
          <p className="text-base font-medium text-slate-800">
            Welcome to <strong>VastuWheels Private Limited</strong> (Unit No-1166 Vegas Mall, Sector-14 Dwarka, South West Delhi, New Delhi, Delhi 110075). By accessing or purchasing from our platform, you agree to be bound by the following terms and conditions.
          </p>
          
          <div className="border-l-4 border-orange-500 pl-4 py-1 bg-orange-50/50 rounded-r-xl">
            <h4 className="font-extrabold text-slate-900 text-base">1. Digital Product Delivery</h4>
            <p className="mt-1 text-slate-600">
              All Vastu Science Reports, Astro-Vastu analysis documents, and bonus ebooks provided on this website are customized digital PDF products. Upon successful payment verification via Razorpay, your report will be generated and delivered to your registered WhatsApp number (+91 9217664304 support line) and Email ID within 48 hours.
            </p>
          </div>

          <div className="border-l-4 border-orange-500 pl-4 py-1 bg-orange-50/50 rounded-r-xl">
            <h4 className="font-extrabold text-slate-900 text-base">2. User Provided Information</h4>
            <p className="mt-1 text-slate-600">
              You are responsible for ensuring that all details submitted in the diagnostic form (such as property entrance direction, date of birth, property type, and contact details) are accurate. Reports are generated based strictly on user-submitted inputs.
            </p>
          </div>

          <div className="border-l-4 border-orange-500 pl-4 py-1 bg-orange-50/50 rounded-r-xl">
            <h4 className="font-extrabold text-slate-900 text-base">3. Non-Refundable Policy Agreement</h4>
            <p className="mt-1 text-slate-600">
              By completing the transaction of ₹996, you acknowledge and agree that all payments are 100% Non-Refundable as customized digital analysis work begins immediately upon order receipt.
            </p>
          </div>

          <div className="border-l-4 border-orange-500 pl-4 py-1 bg-orange-50/50 rounded-r-xl">
            <h4 className="font-extrabold text-slate-900 text-base">4. Jurisdiction & Governing Law</h4>
            <p className="mt-1 text-slate-600">
              These terms shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or in connection with this platform shall be subject to the exclusive jurisdiction of the courts in New Delhi, Delhi.
            </p>
          </div>
        </div>
      )
    },

    refund: {
      id: "refund",
      title: "Refund & Cancellation Policy",
      icon: <RefreshCw className="text-[#ea580c]" size={22} />,
      content: (
        <div className="space-y-6 text-slate-700 text-sm leading-relaxed">
          <div className="bg-rose-50 border-2 border-rose-400 p-5 rounded-2xl space-y-2 text-rose-900 font-bold">
            <h3 className="text-base text-rose-700 uppercase tracking-wide">⚠️ STRICT NO-REFUND POLICY NOTICE</h3>
            <p className="text-xs leading-relaxed font-semibold text-rose-800">
              Please read carefully: All products, digital Vastu reports, Astro-Vastu analyses, and consultation services offered by VastuWheels Private Limited are customized digital deliverables. Therefore, <strong>ALL PAYMENTS ARE STRICTLY NON-REFUNDABLE AND NO REFUNDS WILL BE ISSUED UNDER ANY CIRCUMSTANCES ONCE PAYMENT IS COMPLETED.</strong>
            </p>
          </div>

          <div className="border-l-4 border-orange-500 pl-4 py-1 bg-orange-50/40 rounded-r-xl space-y-2">
            <h4 className="font-extrabold text-slate-900 text-base">1. Non-Cancellable & Non-Refundable Orders</h4>
            <p className="text-slate-600">
              Since our Vastu reports are personalized based on your specific property entrance, birth details, and directional inputs, our automated research and calculation process begins immediately after payment. Thus, orders cannot be cancelled or refunded once placed.
            </p>
          </div>

          <div className="border-l-4 border-orange-500 pl-4 py-1 bg-orange-50/40 rounded-r-xl space-y-2">
            <h4 className="font-extrabold text-slate-900 text-base">2. Report Delivery Assurance</h4>
            <p className="text-slate-600">
              If you experience any technical difficulty receiving your report on WhatsApp or Email within 48 hours, our dedicated customer support team at <strong>Unit No-1166 Vegas Mall, Sector-14 Dwarka, South West Delhi, New Delhi, Delhi 110075</strong> will re-issue and re-send your PDF report immediately upon verifying your payment ID.
            </p>
          </div>

          <div className="border-l-4 border-orange-500 pl-4 py-1 bg-orange-50/40 rounded-r-xl space-y-2">
            <h4 className="font-extrabold text-slate-900 text-base">3. Customer Support Contact</h4>
            <p className="text-slate-600">
              For report delivery queries or payment verification, please reach out to us:
            </p>
            <ul className="list-disc pl-5 text-slate-700 font-semibold space-y-1">
              <li>Email: <strong>globalinchpvt@gmail.com</strong></li>
              <li>Helpline Phone: <strong>+91 9217664304</strong></li>
              <li>Address: Unit No-1166 Vegas Mall, Sector-14 Dwarka, South West Delhi, New Delhi, Delhi 110075</li>
            </ul>
          </div>
        </div>
      )
    },

    disclaimer: {
      id: "disclaimer",
      title: "Disclaimer",
      icon: <AlertTriangle className="text-rose-500" size={22} />,
      content: (
        <div className="space-y-6 text-slate-700 text-sm leading-relaxed">
          <div className="bg-rose-50/60 border border-rose-200 p-4 rounded-2xl text-slate-800 font-semibold text-sm">
            VastuWheels Private Limited is not a part of Facebook.com or Facebook Inc or Google.com or Google Inc. Additionally, VastuWheels Private Limited is not endorsed by Facebook.com or Facebook Inc or Google.com or Google Inc.
          </div>

          <div className="border-l-4 border-rose-500 pl-4 py-1 bg-rose-50/30 rounded-r-xl space-y-2">
            <h4 className="font-extrabold text-slate-900 text-base">Vastu Science Consultation Disclaimer</h4>
            <p className="text-slate-600">
              The recommendations and remedies provided in the Vastu Analysis Report are based on ancient Vedic Vastu Shastra principles and algorithmic directional analysis. These recommendations are meant for spatial and energetic harmony. Results may vary depending on property layout, correct directional input, and individual application.
            </p>
            <p className="text-slate-600">
              Our services do not advocate or require structural wall breaking or demolition. Vastu remedies should not replace professional medical, legal, or financial advice. All services are digital products and strictly non-refundable.
            </p>
            <p className="text-slate-700 font-semibold pt-1">
              Corporate Entity: VastuWheels Private Limited | Unit No-1166 Vegas Mall, Sector-14 Dwarka, South West Delhi, New Delhi, Delhi 110075 | Email: globalinchpvt@gmail.com | Phone: +91 9217664304
            </p>
          </div>
        </div>
      )
    }
  };

  const navItems = [
    { id: "privacy", label: "Privacy Policy" },
    { id: "about", label: "About Us" },
    { id: "tnc", label: "Terms and Conditions (TnC)" },
    { id: "refund", label: "Refund & Cancellation (Non-Refundable)" },
    { id: "disclaimer", label: "Disclaimer" }
  ];

  const currentDoc = legalDocs[activeDoc] || legalDocs["privacy"];

  return (
    <div className="min-h-screen bg-[#fffbf7] text-slate-900 font-sora flex flex-col selection:bg-orange-500 selection:text-white">
      
      {/* Top Page Header Bar */}
      <header className="bg-white border-b border-orange-200 px-4 md:px-8 py-4 shadow-sm sticky top-0 z-30">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src={vwLogo} 
              alt="Vastu Wheels Logo" 
              onClick={onBackToHome}
              className="h-9 md:h-11 w-auto object-contain cursor-pointer transition-transform hover:scale-105" 
            />
          </div>

          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 bg-orange-500/10 hover:bg-orange-500/20 text-[#ea580c] font-bold text-xs md:text-sm px-4 py-2.5 rounded-full transition-all cursor-pointer border border-orange-500/30"
          >
            <ArrowLeft size={16} />
            <span>Back to Homepage</span>
          </button>
        </div>
      </header>

      {/* Main Legal Content Container */}
      <main className="flex-1 max-w-[1400px] w-full mx-auto px-4 md:px-8 py-8 md:py-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Navigation Sidebar */}
          <aside className="lg:col-span-4 bg-white p-4 md:p-6 rounded-3xl border border-orange-200/80 shadow-md space-y-3 sticky top-24">
            <h3 className="font-extrabold text-slate-900 text-sm uppercase tracking-wider px-2 text-slate-500">
              Legal Documents
            </h3>
            <nav className="space-y-1.5">
              {navItems.map((item) => {
                const isActive = item.id === currentDoc.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => onSelectDoc(item.id)}
                    className={`w-full text-left px-4 py-3 rounded-2xl text-xs md:text-sm font-bold transition-all flex items-center justify-between cursor-pointer ${
                      isActive 
                        ? "bg-[#ea580c] text-white shadow-lg shadow-orange-500/25" 
                        : "bg-slate-50 hover:bg-orange-50 text-slate-700 hover:text-[#ea580c]"
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && <span className="w-2 h-2 rounded-full bg-white animate-pulse" />}
                  </button>
                );
              })}
            </nav>

            <div className="pt-4 border-t border-slate-200 text-xs text-slate-600 space-y-2">
              <div className="flex items-center gap-2 text-slate-800 font-bold">
                <Phone size={14} className="text-[#ea580c]" />
                <span>+91 9217664304</span>
              </div>
              <div className="flex items-center gap-2 text-slate-800 font-bold">
                <Mail size={14} className="text-[#ea580c]" />
                <span>globalinchpvt@gmail.com</span>
              </div>
              <div className="flex items-start gap-2 text-slate-500 font-normal leading-tight pt-1">
                <MapPin size={15} className="text-[#ea580c] shrink-0 mt-0.5" />
                <span>Unit No-1166 Vegas Mall, Sector-14 Dwarka, South West Delhi, New Delhi, Delhi 110075</span>
              </div>
            </div>
          </aside>

          {/* Right Main Legal Document Article */}
          <article className="lg:col-span-8 bg-white p-6 sm:p-8 md:p-10 rounded-3xl border border-orange-200/80 shadow-lg space-y-6">
            
            {/* Article Title */}
            <div className="flex items-center gap-3 border-b border-orange-100 pb-5">
              {currentDoc.icon}
              <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 font-sora">
                {currentDoc.title}
              </h1>
            </div>

            {/* Article Content */}
            <div className="pt-2">
              {currentDoc.content}
            </div>

          </article>

        </div>

      </main>

      {/* Legal Footer */}
      <footer className="bg-slate-900 text-slate-400 text-xs py-6 px-4 text-center border-t border-slate-800 mt-auto">
        <p className="text-slate-400">
          Copyright 2026 - VastuWheels Private Limited | Unit No-1166 Vegas Mall, Sector-14 Dwarka, New Delhi 110075
        </p>
      </footer>

    </div>
  );
}
