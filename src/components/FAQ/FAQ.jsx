import React, { useState } from "react";
import "./FAQ.css";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: "Do I need to break any walls or reconstruct my home for Vastu remedies?",
      a: "No! 100% Zero Demolition. Acharya Ji's remedies rely on elemental color balancing, micro metallic strips (copper/brass), crystal pyramid placements, and room usage adjustments. You don't need to break a single brick."
    },
    {
      q: "How fast will I get my Vastu PDF Report?",
      a: "Instantly! Once you submit your details and complete the ₹999 processing fee, your customized Vastu report is generated within 2 minutes and sent directly to your WhatsApp and Email ID."
    },
    {
      q: "Can I apply these Vastu remedies in a rented apartment?",
      a: "Yes! Since all remedies are non-destructive and non-demolition (like colored elemental tapes, crystal stones, or brass strips placed under doormats), they are 100% suitable for rented flats and offices."
    },
    {
      q: "How accurate is this Vastu report compared to an in-person visit?",
      a: "Extremely accurate! The VastuWheels algorithm calculates directional angles down to exact degrees using satellite compass technology combined with Acharya Ji's 15+ years of Vedic guidelines."
    },
    {
      q: "Can I talk to Acharya Ji or his expert team after receiving the report?",
      a: "Yes! Every report includes a special VIP discount coupon code to schedule a 1-on-1 direct phone or video consultation call with Acharya Ji's senior certified experts."
    }
  ];

  return (
    <section className="py-20 px-6 md:px-12 bg-white relative">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <span className="bg-orange-500/10 text-[#ea580c] border border-orange-300 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
            Got Questions?
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 font-sora">
            Frequently Asked <span className="orange-gradient-text">Questions</span>
          </h2>
          <p className="text-slate-600 text-base">
            Everything you need to know about our instant Vastu report & non-demolition remedies.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((f, i) => {
            const isOpen = openIdx === i;
            return (
              <div 
                key={i} 
                className="white-orange-card rounded-2xl overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-extrabold text-sm md:text-base text-slate-900 hover:text-[#ea580c] transition-colors cursor-pointer"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle size={20} className="text-[#f97316] shrink-0" />
                    <span>{f.q}</span>
                  </span>
                  {isOpen ? <ChevronUp size={20} className="text-[#f97316]" /> : <ChevronDown size={20} className="text-slate-400" />}
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-xs md:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4 font-normal">
                    {f.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
