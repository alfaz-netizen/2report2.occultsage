import React, { useState } from "react";
import "./UnlockEnergy.css";
import { Compass, CheckCircle2, ShieldAlert, Sparkles } from "lucide-react";

export default function UnlockEnergy() {
  const [activeZone, setActiveZone] = useState("N");

  const zones = {
    N: {
      name: "North (Kuber Zone)",
      element: "Water Element",
      planet: "Mercury / Lord Kuber",
      ideal: "Main Entrance, Cash Locker, Living Room",
      defect: "Red color, Kitchen or Toilet here blocks new job offers & business cash flow.",
      remedy: "Place a green plant or blue crystal pyramid; avoid red colors or fire items.",
      color: "from-cyan-500/20 to-blue-500/20 border-cyan-400"
    },
    NE: {
      name: "North-East (Ishan Zone)",
      element: "Water & Ether",
      planet: "Jupiter / Lord Shiva",
      ideal: "Pooja Room, Meditation, Water Source",
      defect: "Toilet or heavy clutter here causes severe mental stress & health issues.",
      remedy: "Keep completely clean, place a brass bowl filled with fresh water & flowers.",
      color: "from-blue-500/20 to-indigo-500/20 border-blue-400"
    },
    E: {
      name: "East (Indra Zone)",
      element: "Air / Wood Element",
      planet: "Sun / Lord Indra",
      ideal: "Main Entrance, Socializing Room, Windows",
      defect: "Heavy wall cuts or toilets here destroy social network & political support.",
      remedy: "Hang a green wooden sun carved frame or copper sun emblem on the East wall.",
      color: "from-emerald-500/20 to-teal-500/20 border-emerald-400"
    },
    SE: {
      name: "South-East (Agni Zone)",
      element: "Fire Element",
      planet: "Venus / Agni Dev",
      ideal: "Kitchen, Electric Meter, Fireplace",
      defect: "Water tanks, blue paint, or toilets here extinguish financial growth & health.",
      remedy: "Use a red light bulb or green marble slab under stove; avoid blue/black.",
      color: "from-rose-500/20 to-orange-500/20 border-rose-400"
    },
    S: {
      name: "South (Yama Zone)",
      element: "Fire & Earth",
      planet: "Mars / Lord Yama",
      ideal: "Master Bedroom, Office Desk facing North",
      defect: "Water sources or main entrance without protection causes fame loss.",
      remedy: "Place red jasper crystals or copper pyramid strips under entrance doorway.",
      color: "from-red-500/20 to-amber-500/20 border-red-400"
    },
    SW: {
      name: "South-West (Nairitya Zone)",
      element: "Earth Element",
      planet: "Rahu / Nairitya",
      ideal: "Master Bedroom, Heavy Storage, Vault",
      defect: "Toilet, kitchen, or cut here causes financial debt & marriage breakdown.",
      remedy: "Place yellow brass pyramid, heavy furniture, or golden quartz crystals.",
      color: "from-amber-500/20 to-yellow-500/20 border-amber-400"
    },
    W: {
      name: "West (Varun Zone)",
      element: "Space / Metal Element",
      planet: "Saturn / Lord Varun",
      ideal: "Dining Room, Children Study Room, Savings",
      defect: "Sloping floor or garbage here destroys returns on investments.",
      remedy: "Place white/silver metal items, space globe, or round metallic clock.",
      color: "from-gray-500/20 to-slate-400/20 border-gray-300"
    },
    NW: {
      name: "North-West (Vayu Zone)",
      element: "Air & Space",
      planet: "Moon / Vayu Dev",
      ideal: "Guest Room, Finished Product Goods Storage",
      defect: "Fire or heavy clutter here causes legal disputes & lack of bank support.",
      remedy: "Hang a 6-rod silver wind chime or place white marble sphere.",
      color: "from-teal-500/20 to-cyan-400/20 border-teal-300"
    }
  };

  const current = zones[activeZone];

  return (
    <section className="py-20 px-6 md:px-12 bg-[#070a14] relative">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="bg-amber-500/10 text-amber-300 border border-amber-500/30 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
            Interactive Vastu Energy Wheel
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white font-sora">
            Explore Your Home's <span className="gold-gradient-text">16 Energy Zones</span> & Remedies
          </h2>
          <p className="text-gray-300 text-base">
            Click any direction on the 3D compass below to inspect its governing element, potential defect risks, and non-demolition remedies.
          </p>
        </div>

        {/* 3D Compass & Inspection Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left 3D Compass Graphic & Selector */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full glass-panel p-4 flex items-center justify-center border-2 border-amber-500/40 shadow-2xl">
              
              {/* Generated 3D Compass Backdrop */}
              <img 
                src="/vastu-compass-glow.png" 
                alt="3D Vastu Compass Graphic" 
                className="absolute inset-4 w-[calc(100%-32px)] h-[calc(100%-32px)] object-cover rounded-full opacity-60 pointer-events-none"
              />

              {/* Center Core */}
              <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-amber-500 via-orange-500 to-amber-300 text-black font-extrabold flex flex-col items-center justify-center p-2 text-center shadow-2xl z-10">
                <Compass size={28} className="text-black mb-1 animate-pulse" />
                <span className="text-xs uppercase font-sora tracking-wider">{activeZone} Zone</span>
              </div>

              {/* 8 Direction Buttons */}
              {Object.keys(zones).map((code, index) => {
                const angle = (index * 45 - 90) * (Math.PI / 180);
                const radius = 135; // px
                const x = radius * Math.cos(angle);
                const y = radius * Math.sin(angle);
                const isActive = activeZone === code;

                return (
                  <button
                    key={code}
                    onClick={() => setActiveZone(code)}
                    style={{
                      transform: `translate(${x}px, ${y}px)`
                    }}
                    className={`absolute w-12 h-12 rounded-full text-xs font-extrabold flex items-center justify-center transition-all cursor-pointer shadow-lg ${
                      isActive
                        ? "bg-amber-400 text-black ring-4 ring-amber-500/50 scale-110 z-20 font-sora"
                        : "bg-[#0f172a] text-gray-200 border border-gray-700 hover:border-amber-400 hover:text-white"
                    }`}
                  >
                    {code}
                  </button>
                );
              })}

            </div>
            <p className="text-xs text-gray-400 mt-5 text-center font-medium">
              👆 Tap any direction code (N, NE, E, SE, S, SW, W, NW) to inspect remedies
            </p>
          </div>

          {/* Right Inspection Card */}
          <div className="lg:col-span-7">
            <div className={`glass-panel p-8 rounded-3xl border ${current.color} shadow-2xl space-y-6 transition-all duration-300`}>
              
              <div className="flex flex-wrap items-center justify-between border-b border-gray-800 pb-5 gap-3">
                <div>
                  <span className="text-xs font-bold text-amber-300 uppercase tracking-wider">
                    {current.element}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-white font-sora mt-0.5">
                    {current.name}
                  </h3>
                </div>
                <div className="bg-amber-500/15 text-amber-300 px-3.5 py-1.5 rounded-full border border-amber-500/30 text-xs font-bold">
                  {current.planet}
                </div>
              </div>

              <div className="space-y-1.5">
                <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1.5">
                  <CheckCircle2 size={15} /> Ideal Usage & Placement:
                </span>
                <p className="text-sm text-gray-200 bg-[#070a14] p-4 rounded-2xl border border-gray-800">
                  {current.ideal}
                </p>
              </div>

              <div className="space-y-1.5">
                <span className="text-xs font-semibold text-rose-400 flex items-center gap-1.5">
                  <ShieldAlert size={15} /> Defect Consequence:
                </span>
                <p className="text-xs md:text-sm text-gray-300 bg-rose-500/10 p-4 rounded-2xl border border-rose-500/30">
                  {current.defect}
                </p>
              </div>

              <div className="space-y-1.5">
                <span className="text-xs font-semibold text-amber-300 flex items-center gap-1.5">
                  <Sparkles size={15} className="text-amber-400" /> 100% Non-Demolition Solution:
                </span>
                <p className="text-xs md:text-sm text-amber-100 bg-amber-500/10 p-4 rounded-2xl border border-amber-500/30 font-medium leading-relaxed">
                  {current.remedy}
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
