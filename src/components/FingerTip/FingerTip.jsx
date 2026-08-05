import React from "react";
import "./FingerTip.css";
import { Compass, ShieldCheck, Star, Download, Video } from "lucide-react";

export default function FingerTip() {
  return (
    <section className="py-20 px-6 md:px-12 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="bg-orange-500/10 text-[#ea580c] border border-orange-300 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
            VastuWheels Mobile App
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 font-sora">
            Vastu Analysis & AR Scanner <span className="orange-gradient-text">At Your Fingertips</span>
          </h2>
          <p className="text-slate-600 text-base">
            Use the VastuWheels App to scan room directions with live camera AR, calculate compliance scores, and talk directly with Acharya Ji's certified consultants.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left App Feature Cards */}
          <div className="lg:col-span-6 space-y-4">
            
            <div className="white-orange-card p-6 rounded-3xl flex items-start gap-5">
              <div className="p-3.5 bg-orange-50 text-[#f97316] rounded-2xl border border-orange-200">
                <Compass size={24} />
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-slate-900">Live AR Compass Room Scanner</h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-normal">
                  Point your smartphone camera towards any wall or door. The app overlays 16 Vastu directional zones in real-time.
                </p>
              </div>
            </div>

            <div className="white-orange-card p-6 rounded-3xl flex items-start gap-5">
              <div className="p-3.5 bg-emerald-50 text-emerald-600 rounded-2xl border border-emerald-200">
                <ShieldCheck size={24} />
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-slate-900">Zero-Demolition Remedy Guide</h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-normal">
                  Instant recommendations for color tapes, brass strips, and crystal placements tailored to your floorplan.
                </p>
              </div>
            </div>

            <div className="white-orange-card p-6 rounded-3xl flex items-start gap-5">
              <div className="p-3.5 bg-blue-50 text-blue-600 rounded-2xl border border-blue-200">
                <Video size={24} />
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-slate-900">1-on-1 Video Consultation</h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-normal">
                  Book direct video or phone calls with verified Vastu experts trained under Acharya Ji for personalized guidance.
                </p>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2 bg-orange-50 px-4 py-2 rounded-xl border border-orange-200 text-xs font-semibold text-slate-800">
                <Star size={15} className="fill-amber-500 text-amber-500" />
                <span>4.8/5 Rating on App Store</span>
              </div>
              <div className="flex items-center gap-2 bg-orange-50 px-4 py-2 rounded-xl border border-orange-200 text-xs font-semibold text-slate-800">
                <Download size={15} className="text-emerald-600" />
                <span>50,000+ App Downloads</span>
              </div>
            </div>

          </div>

          {/* Right Phone Mockup Container */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-sm rounded-[44px] border-4 border-slate-900 bg-slate-950 p-4 shadow-2xl overflow-hidden">
              
              {/* Phone Top Notch */}
              <div className="w-32 h-4 bg-slate-900 rounded-b-xl mx-auto mb-4" />

              {/* App Interface Visual */}
              <div className="bg-white rounded-[32px] p-6 space-y-5 text-center shadow-inner">
                <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#f97316] to-[#fd9635] text-white font-extrabold flex items-center justify-center mx-auto shadow-lg shadow-orange-500/30">
                  <Compass size={32} className="text-white animate-spin-slow" />
                </div>

                <div className="space-y-1">
                  <h4 className="text-lg font-extrabold text-slate-900 font-sora">VastuWheels Mobile</h4>
                  <p className="text-xs text-[#ea580c] font-bold">Scanning North-West Direction...</p>
                </div>

                <div className="bg-orange-50 p-4 rounded-2xl border border-orange-200 text-left text-xs space-y-1.5">
                  <div className="flex items-center justify-between font-bold">
                    <span className="text-slate-900">Main Entrance (NW)</span>
                    <span className="text-emerald-700">Score: 82%</span>
                  </div>
                  <p className="text-[11px] text-slate-600 leading-relaxed font-medium">
                    Air element zone active. Recommendation: Place silver metallic wind chime to boost banking support.
                  </p>
                </div>

                <button 
                  onClick={() => {
                    const el = document.getElementById("vastu-diagnostic-form");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="w-full btn-orange-primary text-xs py-3.5 flex items-center justify-center gap-1 cursor-pointer"
                >
                  <span>BUY NOW at ₹1499 only</span>
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
