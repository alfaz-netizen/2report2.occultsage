import React from "react";
import { X, ShieldCheck, FileText, Info, RefreshCw, AlertTriangle } from "lucide-react";

export default function LegalModal({ activeModal, onClose }) {
  if (!activeModal) return null;

  const modalData = {
    tnc: {
      title: "Terms and Conditions (TnC)",
      icon: <FileText className="text-orange-500" size={24} />,
      content: (
        <div className="space-y-4 text-slate-700 text-sm leading-relaxed">
          <p>
            Welcome to <strong>VastuWheels Private Limited</strong> (3rd Floor, Plot No 3, Near Aapka Bazar, Sector-12 Dwarka, South West Delhi, New Delhi, Delhi 110078). By accessing or purchasing from our platform, you agree to be bound by the following terms and conditions.
          </p>
          <h4 className="font-extrabold text-slate-900 text-base pt-2">1. Digital Product Delivery</h4>
          <p>
            All Vastu Science Reports, Astro-Vastu analysis documents, and bonus ebooks provided on this website are digital PDF products. Upon successful payment verification via Razorpay, your report will be generated and delivered to your registered WhatsApp number and Email ID within 48 hours.
          </p>
          <h4 className="font-extrabold text-slate-900 text-base pt-2">2. Non-Refundable Agreement</h4>
          <p>
            By completing your transaction, you acknowledge and agree that all payments are 100% Non-Refundable as customized digital analysis work begins immediately.
          </p>
          <h4 className="font-extrabold text-slate-900 text-base pt-2">3. Intellectual Property Rights</h4>
          <p>
            All content, proprietary Vastu algorithms, logos, graphics, and report formats are the exclusive intellectual property of VastuWheels Private Limited.
          </p>
          <h4 className="font-extrabold text-slate-900 text-base pt-2">4. Jurisdiction & Governing Law</h4>
          <p>
            These terms shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in New Delhi, Delhi.
          </p>
        </div>
      )
    },

    privacy: {
      title: "Privacy Policy",
      icon: <ShieldCheck className="text-emerald-600" size={24} />,
      content: (
        <div className="space-y-4 text-slate-700 text-sm leading-relaxed">
          <p>
            At <strong>VastuWheels Private Limited</strong> (3rd Floor, Plot No 3, Near Aapka Bazar, Sector-12 Dwarka, South West Delhi, New Delhi, Delhi 110078), we respect your privacy and are committed to protecting your personal data.
          </p>
          <h4 className="font-extrabold text-slate-900 text-base pt-2">1. Information We Collect</h4>
          <p>
            We collect personal information that you voluntarily provide when ordering a Vastu Report, including your Full Name, Email ID (globalinchpvt@gmail.com), Phone Number (+91 9217664304), Date of Birth, Gender, Property Details, and Primary Vastu Concern.
          </p>
          <h4 className="font-extrabold text-slate-900 text-base pt-2">2. How We Use Your Information</h4>
          <p>
            Your information is strictly used to process your order, calculate personalized Vastu directional remedies, deliver your PDF report via WhatsApp and Email, and send essential customer support communications.
          </p>
          <h4 className="font-extrabold text-slate-900 text-base pt-2">3. Payment Security</h4>
          <p>
            We do NOT store your bank details, credit card numbers, or UPI PINs. All financial transactions are processed securely through PCI-DSS compliant payment gateways (Razorpay) using 256-bit SSL encryption.
          </p>
        </div>
      )
    },

    about: {
      title: "About Us",
      icon: <Info className="text-amber-500" size={24} />,
      content: (
        <div className="space-y-4 text-slate-700 text-sm leading-relaxed">
          <p>
            <strong>VastuWheels Private Limited</strong> is India's premier research organization dedicated to Vedic Vastu Science, Astro-Vastu Analysis, and Numerology.
          </p>
          <p>
            Guided by expert Vastu Scholars at our corporate headquarters (3rd Floor, Plot No 3, Near Aapka Bazar, Sector-12 Dwarka, South West Delhi, New Delhi, Delhi 110078), our mission is to empower homeowners, business leaders, couples, and property buyers with scientific, <strong>100% Non-Demolition Vastu Remedies</strong> that require zero wall tearing or structural damage.
          </p>
          <h4 className="font-extrabold text-slate-900 text-base pt-2">Why Choose Us?</h4>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
            <li><strong>60,000+ Happy Consultations:</strong> Trusted across India and globally for authentic directional alignment.</li>
            <li><strong>ISO 9001:2015 Certified:</strong> Certified quality management systems for Vastu report accuracy.</li>
            <li><strong>Elemental Balancing:</strong> Practical remedies based on color therapy, metal strips, and elemental zone alignment.</li>
          </ul>
        </div>
      )
    },

    refund: {
      title: "Refund & Cancellation Policy",
      icon: <RefreshCw className="text-rose-500" size={24} />,
      content: (
        <div className="space-y-4 text-slate-700 text-sm leading-relaxed">
          <div className="bg-rose-50 border border-rose-300 p-4 rounded-xl text-rose-900 font-bold text-xs">
            STRICT NO-REFUND POLICY: All digital Vastu reports and services are customized deliverables and are 100% NON-REFUNDABLE once payment is completed.
          </div>
          <h4 className="font-extrabold text-slate-900 text-base pt-2">1. Digital Deliverables</h4>
          <p>
            Since our personalized Vastu reports are digital products generated immediately after order submission, orders cannot be cancelled or refunded.
          </p>
          <h4 className="font-extrabold text-slate-900 text-base pt-2">2. Delivery Queries</h4>
          <p>
            If you encounter any technical issue receiving your report on WhatsApp or Email within 48 hours, please reach out to our support helpline (+91 9217664304 / globalinchpvt@gmail.com) for immediate re-delivery.
          </p>
        </div>
      )
    },

    disclaimer: {
      title: "Disclaimer",
      icon: <AlertTriangle className="text-rose-500" size={24} />,
      content: (
        <div className="space-y-4 text-slate-700 text-sm leading-relaxed">
          <p>
            <strong>VastuWheels Private Limited</strong> is not a part of Facebook.com or Facebook Inc or Google.com or Google Inc. Additionally, VastuWheels Private Limited is not endorsed by Facebook.com or Facebook Inc or Google.com or Google Inc.
          </p>
          <h4 className="font-extrabold text-slate-900 text-base pt-2">Vastu Consultation Disclaimer</h4>
          <p>
            The recommendations and remedies provided in the Vastu Analysis Report are based on ancient Vedic Vastu Shastra principles and algorithmic directional analysis. Results may vary depending on property layout and individual application. All services are digital products and strictly non-refundable.
          </p>
        </div>
      )
    }
  };

  const current = modalData[activeModal];
  if (!current) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fade-in font-sora">
      <div 
        className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl border border-orange-200 overflow-hidden relative my-auto max-h-[85vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-5 bg-gradient-to-r from-orange-50 to-amber-50 border-b border-orange-200/80 shrink-0">
          <div className="flex items-center gap-3">
            {current.icon}
            <h3 className="font-extrabold text-slate-900 text-lg md:text-xl font-sora">
              {current.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white hover:bg-orange-100 text-slate-600 hover:text-orange-600 flex items-center justify-center transition-colors cursor-pointer border border-slate-200"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 md:p-8 overflow-y-auto flex-1">
          {current.content}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex justify-end shrink-0">
          <button
            onClick={onClose}
            className="btn-orange-primary text-white font-bold text-xs md:text-sm px-6 py-2.5 rounded-full cursor-pointer shadow-md"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
