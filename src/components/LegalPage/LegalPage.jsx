import React, { useEffect } from "react";
import { ArrowLeft, ShieldCheck, FileText, Info, RefreshCw, AlertTriangle, Phone, Mail, MapPin, Globe } from "lucide-react";
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
            This Privacy Policy applies to the website <strong>report.globalinch.com</strong> ("Website"), which is owned, operated, and managed by <strong>GlobalInch Private Limited</strong> ("Company", "We", "Us", "Our"), providing <strong>VastuWheels</strong> personalized Vastu analysis reports and architectural consultation services.
          </p>
          <p>
            Registered Address: <strong>GlobalInch Private Limited, 3rd Floor, Plot No 3, Near Aapka Bazar, Sector-12 Dwarka, South West Delhi, New Delhi, Delhi 110078</strong>. Contact Email: <strong>globalinchpvt@gmail.com</strong> | Phone: <strong>+91 9217664304</strong>.
          </p>

          <div className="border-l-4 border-emerald-500 pl-4 py-1 bg-emerald-50/40 rounded-r-xl">
            <h4 className="font-extrabold text-slate-900 text-base">1. Information We Collect</h4>
            <p className="mt-1 text-slate-600">
              When you place an order on <strong>report.globalinch.com</strong>, we collect personal information voluntarily provided by you, including your Full Name, Email Address, WhatsApp Phone Number, Date of Birth, Property Type, Main Entrance Direction, Primary Vastu Challenge, and Current City.
            </p>
          </div>

          <div className="border-l-4 border-emerald-500 pl-4 py-1 bg-emerald-50/40 rounded-r-xl">
            <h4 className="font-extrabold text-slate-900 text-base">2. Purpose of Data Usage</h4>
            <p className="mt-1 text-slate-600">
              Your details are used exclusively by <strong>GlobalInch Private Limited</strong> to calculate customized 16-zone Vastu directional energy analysis, generate your personalized PDF report, deliver it via WhatsApp/Email, and provide order support.
            </p>
          </div>

          <div className="border-l-4 border-emerald-500 pl-4 py-1 bg-emerald-50/40 rounded-r-xl">
            <h4 className="font-extrabold text-slate-900 text-base">3. Payment Security & Processing</h4>
            <p className="mt-1 text-slate-600">
              All payments made on <strong>report.globalinch.com</strong> are processed securely under <strong>GlobalInch Private Limited</strong> through PCI-DSS compliant payment gateways (Razorpay) using 256-bit SSL encryption. We do NOT store or retain credit card numbers, net banking credentials, or UPI PINs.
            </p>
          </div>

          <div className="border-l-4 border-emerald-500 pl-4 py-1 bg-emerald-50/40 rounded-r-xl">
            <h4 className="font-extrabold text-slate-900 text-base">4. Data Sharing & Third Parties</h4>
            <p className="mt-1 text-slate-600">
              <strong>GlobalInch Private Limited</strong> does not sell, rent, or trade user data to external marketing agencies. Data is shared strictly with essential technology partners (Razorpay for payment processing and messaging APIs for PDF delivery) solely for fulfilling your order on report.globalinch.com.
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
            <strong>report.globalinch.com</strong> is an online portal owned, operated, and managed by <strong>GlobalInch Private Limited</strong>, dedicated to offering scientific Vedic Vastu Science reports, Astro-Vastu analysis, and architectural space energy consultations under the brand name <strong>VastuWheels</strong>.
          </p>
          <p>
            Operating from our corporate office at <strong>3rd Floor, Plot No 3, Near Aapka Bazar, Sector-12 Dwarka, South West Delhi, New Delhi, Delhi 110078</strong>, our mission is to empower homeowners, business owners, tenants, and commercial space owners with practical, <strong>100% Non-Demolition Vastu Remedies</strong> that require zero wall tearing or structural damage.
          </p>

          <div className="bg-amber-50/60 border border-amber-200/80 p-5 rounded-2xl space-y-3">
            <h4 className="font-extrabold text-slate-900 text-base">Key Highlights & Credentials</h4>
            <ul className="list-disc pl-5 space-y-2 text-slate-700 font-semibold">
              <li><strong>Parent Legal Entity:</strong> GlobalInch Private Limited</li>
              <li><strong>Official Website Domain:</strong> report.globalinch.com</li>
              <li><strong>Brand / Product:</strong> VastuWheels Personalized Vastu Science Report</li>
              <li><strong>60,000+ Consultations:</strong> Trusted across India for authentic directional alignment & non-demolition remedies.</li>
              <li><strong>Customer Support Helpline:</strong> +91 9217664304 | Email: globalinchpvt@gmail.com</li>
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
            Welcome to <strong>report.globalinch.com</strong>, operated by <strong>GlobalInch Private Limited</strong> (Registered Address: 3rd Floor, Plot No 3, Near Aapka Bazar, Sector-12 Dwarka, South West Delhi, New Delhi, Delhi 110078). By accessing, browsing, or purchasing services on report.globalinch.com, you agree to comply with and be bound by the following Terms and Conditions.
          </p>

          <div className="border-l-4 border-orange-500 pl-4 py-1 bg-orange-50/50 rounded-r-xl">
            <h4 className="font-extrabold text-slate-900 text-base">1. Merchant & Billing Entity</h4>
            <p className="mt-1 text-slate-600">
              All financial transactions, invoices, and payment gateway billing on <strong>report.globalinch.com</strong> are conducted under the merchant account of <strong>GlobalInch Private Limited</strong>.
            </p>
          </div>

          <div className="border-l-4 border-orange-500 pl-4 py-1 bg-orange-50/50 rounded-r-xl">
            <h4 className="font-extrabold text-slate-900 text-base">2. Service Description & Delivery</h4>
            <p className="mt-1 text-slate-600">
              Our services consist of customized digital PDF Vastu Science Reports and Astro-Vastu analysis. Upon successful payment verification via Razorpay, your customized report will be prepared and delivered to your registered WhatsApp number and Email ID within 48 hours.
            </p>
          </div>

          <div className="border-l-4 border-orange-500 pl-4 py-1 bg-orange-50/50 rounded-r-xl">
            <h4 className="font-extrabold text-slate-900 text-base">3. User Responsibility for Information</h4>
            <p className="mt-1 text-slate-600">
              You are responsible for providing accurate inputs (property main entrance direction, property type, date of birth, and contact details). Reports are generated based strictly on details provided during checkout.
            </p>
          </div>

          <div className="border-l-4 border-orange-500 pl-4 py-1 bg-orange-50/50 rounded-r-xl">
            <h4 className="font-extrabold text-slate-900 text-base">4. Governing Law & Jurisdiction</h4>
            <p className="mt-1 text-slate-600">
              These terms shall be governed by and construed in accordance with the laws of India. Any legal proceedings or disputes relating to report.globalinch.com or GlobalInch Private Limited shall be subject to the exclusive jurisdiction of the courts in New Delhi, Delhi.
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
            <h3 className="text-base text-rose-700 uppercase tracking-wide">⚠️ STRICT DIGITAL SERVICE NON-REFUNDABLE POLICY</h3>
            <p className="text-xs leading-relaxed font-semibold text-rose-800">
              Please read carefully: All products and services offered on <strong>report.globalinch.com</strong> by <strong>GlobalInch Private Limited</strong> (including VastuWheels customized Vastu reports and consultations) are personalized digital deliverables. Therefore, <strong>ALL PAYMENTS ARE STRICTLY NON-REFUNDABLE AND NO REFUNDS WILL BE ISSUED ONCE PAYMENT IS COMPLETED.</strong>
            </p>
          </div>

          <div className="border-l-4 border-orange-500 pl-4 py-1 bg-orange-50/40 rounded-r-xl space-y-2">
            <h4 className="font-extrabold text-slate-900 text-base">1. Order Cancellation Policy</h4>
            <p className="text-slate-600">
              Since report calculations and personalized directional analysis begin immediately upon order placement, orders on <strong>report.globalinch.com</strong> cannot be cancelled or refunded after successful payment.
            </p>
          </div>

          <div className="border-l-4 border-orange-500 pl-4 py-1 bg-orange-50/40 rounded-r-xl space-y-2">
            <h4 className="font-extrabold text-slate-900 text-base">2. Report Re-Delivery Guarantee</h4>
            <p className="text-slate-600">
              If you do not receive your report on WhatsApp or Email within 48 hours due to a technical issue or wrong email entry, please contact our support team with your payment ID. <strong>GlobalInch Private Limited</strong> will re-verify and re-deliver your PDF report immediately at no extra charge.
            </p>
          </div>

          <div className="border-l-4 border-orange-500 pl-4 py-1 bg-orange-50/40 rounded-r-xl space-y-2">
            <h4 className="font-extrabold text-slate-900 text-base">3. Merchant Contact Information</h4>
            <p className="text-slate-600">
              For any payment or delivery queries, contact GlobalInch Private Limited:
            </p>
            <ul className="list-disc pl-5 text-slate-700 font-semibold space-y-1">
              <li><strong>Merchant Legal Name:</strong> GlobalInch Private Limited</li>
              <li><strong>Website Domain:</strong> report.globalinch.com</li>
              <li><strong>Email:</strong> globalinchpvt@gmail.com</li>
              <li><strong>Helpline Phone:</strong> +91 9217664304</li>
              <li><strong>Address:</strong> 3rd Floor, Plot No 3, Near Aapka Bazar, Sector-12 Dwarka, South West Delhi, New Delhi, Delhi 110078</li>
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
            <strong>report.globalinch.com</strong> and <strong>GlobalInch Private Limited</strong> are not affiliated with, associated with, or endorsed by Facebook.com, Meta Platforms Inc., Google.com, or Google LLC.
          </div>

          <div className="border-l-4 border-rose-500 pl-4 py-1 bg-rose-50/30 rounded-r-xl space-y-2">
            <h4 className="font-extrabold text-slate-900 text-base">Vastu & Advisory Service Disclaimer</h4>
            <p className="text-slate-600">
              The recommendations provided on report.globalinch.com in the Vastu Wheels Report are based on traditional Vedic Vastu principles and directional calculations. These services are intended for spatial harmony and positive environment alignment.
            </p>
            <p className="text-slate-600">
              Our recommendations focus on 100% non-demolition remedies (color therapy, metallic strip placements, and layout alignment) and do not advocate structural wall tearing. Vastu guidance is advisory and should not replace professional medical, legal, or financial advice.
            </p>
            <p className="text-slate-700 font-semibold pt-1">
              Legal Entity: GlobalInch Private Limited | Website: report.globalinch.com | Address: 3rd Floor, Plot No 3, Near Aapka Bazar, Sector-12 Dwarka, New Delhi 110078 | Email: globalinchpvt@gmail.com | Phone: +91 9217664304
            </p>
          </div>
        </div>
      )
    },

    contact: {
      id: "contact",
      title: "Contact Us",
      icon: <Phone className="text-blue-600" size={22} />,
      content: (
        <div className="space-y-6 text-slate-700 text-sm leading-relaxed">
          <p className="text-base font-medium text-slate-800">
            Have questions about your Vastu Report order on <strong>report.globalinch.com</strong>? Get in touch with <strong>GlobalInch Private Limited</strong> customer support team.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl space-y-2">
              <div className="flex items-center gap-2 text-slate-900 font-extrabold text-base">
                <Globe size={18} className="text-[#ea580c]" />
                <span>Website Domain</span>
              </div>
              <p className="text-slate-600 text-sm font-semibold">report.globalinch.com</p>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl space-y-2">
              <div className="flex items-center gap-2 text-slate-900 font-extrabold text-base">
                <Info size={18} className="text-[#ea580c]" />
                <span>Parent Legal Entity</span>
              </div>
              <p className="text-slate-600 text-sm font-semibold">GlobalInch Private Limited</p>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl space-y-2">
              <div className="flex items-center gap-2 text-slate-900 font-extrabold text-base">
                <Phone size={18} className="text-emerald-600" />
                <span>Customer Helpline</span>
              </div>
              <p className="text-slate-900 text-sm font-extrabold">+91 9217664304</p>
              <p className="text-xs text-slate-500">Available Monday - Saturday (10:00 AM - 7:00 PM IST)</p>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl space-y-2">
              <div className="flex items-center gap-2 text-slate-900 font-extrabold text-base">
                <Mail size={18} className="text-orange-500" />
                <span>Support Email</span>
              </div>
              <p className="text-slate-900 text-sm font-extrabold">globalinchpvt@gmail.com</p>
              <p className="text-xs text-slate-500">We respond to all email queries within 24 hours</p>
            </div>
          </div>

          <div className="bg-orange-50/70 border border-orange-200 p-5 rounded-2xl space-y-2">
            <div className="flex items-center gap-2 text-slate-900 font-extrabold text-base">
              <MapPin size={18} className="text-[#ea580c]" />
              <span>Registered Corporate Office Address</span>
            </div>
            <p className="text-slate-700 text-sm font-semibold leading-relaxed">
              GlobalInch Private Limited<br />
              3rd Floor, Plot No 3, Near Aapka Bazar, Sector-12 Dwarka,<br />
              South West Delhi, New Delhi, Delhi 110078, India
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
    { id: "refund", label: "Refund & Cancellation Policy" },
    { id: "disclaimer", label: "Disclaimer" },
    { id: "contact", label: "Contact Us" }
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
              Legal & Merchant Documents
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
                <Globe size={14} className="text-[#ea580c]" />
                <span>report.globalinch.com</span>
              </div>
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
                <span>GlobalInch Private Limited | 3rd Floor, Plot No 3, Near Aapka Bazar, Sector-12 Dwarka, New Delhi 110078</span>
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
          Copyright 2026 - report.globalinch.com (Owned & Operated by GlobalInch Private Limited) | 3rd Floor, Plot No 3, Near Aapka Bazar, Sector-12 Dwarka, New Delhi 110078
        </p>
      </footer>

    </div>
  );
}
