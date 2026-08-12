import React from "react";
import "./HowWeHelp.css";
import { Hammer, ShieldCheck, Sparkles, Palette, Compass, CheckCircle2 } from "lucide-react";
import acharyaGroupImg from "../../assets/Group-219-1.png";

export default function HowWeHelp() {
  const remedies = [
    {
      title: "Element & Color Therapy",
      desc: "Neutralize negative entrance energies using targeted elemental colors (Red for SE, Yellow for SW, Green for E) without moving a single wall.",
      icon: Palette
    },
    {
      title: "Metal & Strip Energy Shielding",
      desc: "Install micro-brass, copper, or stainless steel strips under flooring or doorways to cut off toxic radiation & ground defect energies.",
      icon: ShieldCheck
    },
    {
      title: "Pyramid & Crystal Alignment",
      desc: "Amplify weak positive zones (like North Kuber zone for cash) using energized Vedic pyramids and natural gemstone crystals.",
      icon: Sparkles
    },
    {
      title: "Directional Energy Zone Sync",
      desc: "Align your property's 16 directional zones with space energy balancing for rapid peace, growth and family harmony.",
      icon: Compass
    }
  ];

  return (
    <section className="py-20 px-6 md:px-12 bg-gradient-to-b from-[#fffbf7] via-[#fff5eb] to-[#fffbf7] relative">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Headline */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="bg-orange-500/10 text-[#ea580c] border border-orange-500/30 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
            100% Non-Demolition Science
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 font-sora">
            Why Break Walls When You Can <span className="orange-gradient-text">Balance Energies Non-Destructively</span>?
          </h2>
          <p className="text-slate-600 text-base">
            Traditional consultants force expensive wall demolitions. Acharya Ji's scientific Vastu methods balance cosmic energies with zero destruction.
          </p>
        </div>

        {/* Content Layout: Left Graphic / Acharya Ji, Right 4 Science Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Acharya Graphic Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md rounded-3xl p-2.5 bg-gradient-to-b from-orange-300 via-orange-100 to-white shadow-2xl">
              <div className="bg-white rounded-2xl overflow-hidden p-4 relative border border-orange-200">
                <img 
                  src={acharyaGroupImg} 
                  alt="Acharya Ji Vastu Science" 
                  className="w-full h-auto object-contain rounded-xl"
                />

                <div className="mt-4 bg-orange-50 p-3.5 rounded-xl border border-orange-200 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <Hammer className="text-rose-600" size={18} />
                    <span className="text-slate-800 font-bold">Demolition Required:</span>
                  </div>
                  <span className="bg-emerald-100 text-emerald-700 font-extrabold px-3 py-1 rounded border border-emerald-300">
                    0% (ZERO WALL BREAKING)
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right 4 Remedy Pillars */}
          <div className="lg:col-span-7 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {remedies.map((r, idx) => {
                const IconComp = r.icon;
                return (
                  <div key={idx} className="white-orange-card white-orange-card-hover p-6 rounded-2xl space-y-2">
                    <div className="p-3 bg-orange-50 text-[#f97316] rounded-xl w-fit border border-orange-200">
                      <IconComp size={22} />
                    </div>
                    <h3 className="text-base font-bold text-slate-900">{r.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">{r.desc}</p>
                  </div>
                );
              })}
            </div>

            {/* Proof Points */}
            <div className="bg-white border border-orange-200 p-5 rounded-2xl flex flex-wrap items-center justify-between gap-4 shadow-sm">
              <div className="flex items-center gap-2 text-xs text-slate-800 font-semibold">
                <CheckCircle2 size={16} className="text-emerald-600" />
                <span>100% Rental Property Friendly</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-800 font-semibold">
                <CheckCircle2 size={16} className="text-emerald-600" />
                <span>Fast Results within 21-45 Days</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-800 font-semibold">
                <CheckCircle2 size={16} className="text-emerald-600" />
                <span>Budget-Friendly Solutions</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}