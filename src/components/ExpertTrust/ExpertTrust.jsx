import React from "react";
import "./ExpertTrust.css";
import { CheckCircle2, ShieldCheck, Award, ArrowRight, Star } from "lucide-react";
import acharyaPortraitImg from "../../assets/person-CLyhoU8C.webp";

export default function ExpertTrust({ onNavigateCheckout }) {
  return (
    <section className="py-14 px-4 md:px-8 bg-white relative">
      <div className="max-w-[1400px] mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="bg-orange-500/10 text-[#ea580c] border border-orange-300 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
            Revered Vedic Vastu Scholar
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 font-sora">
            Why Over <span className="orange-gradient-text">60,000+ Indian Families</span> Trust Acharya Ji
          </h2>
          <p className="text-slate-600 text-base font-normal">
            15+ Years of Vedic Vastu Mastery combined with 100% Zero-Demolition scientific energy balancing.
          </p>
        </div>

        {/* Content Grid: Left Acharya Portrait, Right Trust Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Acharya Ji Image Frame */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="white-orange-card p-4 rounded-3xl border-2 border-orange-200 shadow-xl bg-white max-w-md w-full">
              <div className="rounded-2xl overflow-hidden bg-gradient-to-b from-orange-100 to-white aspect-[4/5] relative">
                <img 
                  src={acharyaPortraitImg} 
                  alt="Acharya Ji - Vastu Scholar" 
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md p-3 rounded-xl border border-orange-200 text-center shadow-md">
                  <div className="text-sm font-extrabold text-slate-900 font-sora flex items-center justify-center gap-1">
                    <span>Acharya Ji</span>
                    <CheckCircle2 size={16} className="text-emerald-600" />
                  </div>
                  <div className="text-[11px] text-[#ea580c] font-bold">15+ Yrs Non-Demolition Mastery</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Trust Pillars */}
          <div className="lg:col-span-7 space-y-5">
            <div className="space-y-4">
              
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-orange-50/80 border border-orange-200">
                <div className="p-2.5 bg-white text-[#ea580c] rounded-xl border border-orange-200 shrink-0">
                  <ShieldCheck size={22} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">100% Zero Wall Demolition Guarantee</h3>
                  <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                    No breaking walls, moving kitchens, or reconstruction. Remedies use elemental colors, metal strips, and sacred energy crystals.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-orange-50/80 border border-orange-200">
                <div className="p-2.5 bg-white text-[#ea580c] rounded-xl border border-orange-200 shrink-0">
                  <Award size={22} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">ISO 9001:2015 Certified Energy Engine</h3>
                  <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                    Calculations are based on 16 directional energy zones mapped to exact degrees using satellite compass precision.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-orange-50/80 border border-orange-200">
                <div className="p-2.5 bg-white text-[#ea580c] rounded-xl border border-orange-200 shrink-0">
                  <Star size={22} className="fill-amber-500 text-amber-500" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">Instant WhatsApp & Email Report Delivery</h3>
                  <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                    Get your custom PDF report within 2 minutes of completing your details. No long waiting period.
                  </p>
                </div>
              </div>

            </div>

            <button 
              onClick={onNavigateCheckout}
              className="btn-orange-primary text-sm md:text-base px-8 py-4 flex items-center justify-center gap-2 cursor-pointer shadow-lg"
            >
              <span>Get Report & Consult Acharya Ji @ ₹999/-</span>
              <ArrowRight size={18} />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
