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
            Welcome to <strong>VastuWheels Private Limited</strong>. By accessing or purchasing from our platform, you agree to be bound by the following terms and conditions.
          </p>
          <h4 className="font-extrabold text-slate-900 text-base pt-2">1. Digital Product Delivery</h4>
          <p>
            All Vastu Science Reports, Astro-Vastu analysis documents, and bonus ebooks provided on this website are digital PDF products. Upon successful payment verification via Razorpay, your report will be generated and delivered to your registered WhatsApp number and Email ID within 48 hours.
          </p>
          <h4 className="font-extrabold text-slate-900 text-base pt-2">2. User Provided Information</h4>
          <p>
            You are responsible for ensuring that all details submitted in the diagnostic form (such as property entrance direction, date of birth, property type, and contact details) are accurate. Reports are generated based strictly on user-submitted inputs.
          </p>
          <h4 className="font-extrabold text-slate-900 text-base pt-2">3. Intellectual Property Rights</h4>
          <p>
            All content, proprietary Vastu algorithms, logos, graphics, and report formats are the exclusive intellectual property of VastuWheels Private Limited. Unauthorized duplication, redistribution, or resale is strictly prohibited under copyright law.
          </p>
          <h4 className="font-extrabold text-slate-900 text-base pt-2">4. Jurisdiction & Governing Law</h4>
          <p>
            These terms shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or in connection with this platform shall be subject to the exclusive jurisdiction of the courts in India.
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
            At <strong>VastuWheels Private Limited</strong>, we respect your privacy and are committed to protecting your personal data.
          </p>
          <h4 className="font-extrabold text-slate-900 text-base pt-2">1. Information We Collect</h4>
          <p>
            We collect personal information that you voluntarily provide when ordering a Vastu Report, including your Full Name, Email ID, Phone Number, Date of Birth, Gender, Property Details, and Primary Vastu Concern.
          </p>
          <h4 className="font-extrabold text-slate-900 text-base pt-2">2. How We Use Your Information</h4>
          <p>
            Your information is strictly used to process your order, calculate personalized Vastu directional remedies, deliver your PDF report via WhatsApp and Email, and send essential customer support communications.
          </p>
          <h4 className="font-extrabold text-slate-900 text-base pt-2">3. Payment Security</h4>
          <p>
            We do NOT store your bank details, credit card numbers, or UPI PINs. All financial transactions are processed securely through PCI-DSS compliant payment gateways (Razorpay) using 256-bit SSL encryption.
          </p>
          <h4 className="font-extrabold text-slate-900 text-base pt-2">4. Data Sharing & Third Parties</h4>
          <p>
            We never sell, rent, or trade your personal information to third-party marketing companies. Data is shared only with trusted operational infrastructure partners (such as Razorpay and automated messaging APIs) strictly for order fulfillment.
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
            Guided by expert Vastu Scholars, our mission is to empower homeowners, business leaders, couples, and property buyers with scientific, <strong>100% Non-Demolition Vastu Remedies</strong> that require zero wall tearing or structural damage.
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
      icon: <RefreshCw className="text-blue-500" size={24} />,
      content: (
        <div className="space-y-4 text-slate-700 text-sm leading-relaxed">
          <p>
            Thank you for choosing <strong>VastuWheels Private Limited</strong>.
          </p>
          <h4 className="font-extrabold text-slate-900 text-base pt-2">1. Digital Product Cancellation</h4>
          <p>
            Since our personalized Vastu reports are digital products that are instantly queued for processing upon payment, orders cannot be cancelled once payment is completed.
          </p>
          <h4 className="font-extrabold text-slate-900 text-base pt-2">2. Refund Eligibility</h4>
          <p>
            If you encounter any technical issue where payment was deducted but the report was not received on WhatsApp or Email within 48 hours, please reach out to our support helpline. If we are unable to deliver your report due to technical error, a full 100% refund will be credited back to your original payment method within 5-7 business days.
          </p>
          <h4 className="font-extrabold text-slate-900 text-base pt-2">3. Contact Support</h4>
          <p>
            For any billing questions or refund requests, please email us at <strong>support@vastuwheels.com</strong> or call our helpline at <strong>+91 99999 99999</strong> with your payment ID.
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
            The recommendations and remedies provided in the Vastu Analysis Report are based on ancient Vedic Vastu Shastra principles and algorithmic directional analysis. These recommendations are meant for spatial and energetic harmony. Results may vary depending on property layout, correct directional input, and individual application.
          </p>
          <p>
            Our services do not advocate or require structural wall breaking or demolition. Vastu remedies should not replace professional medical, legal, or financial advice.
          </p>
        </div>
      )
    }
  };

  const current = modalData[activeModal];
  if (!current) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fade-in">
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
