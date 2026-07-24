import React, { useState } from "react";
import "./ReportValueStack.css";
import { 
  CheckCircle2, ShieldCheck, ArrowRight, 
  ChevronLeft, ChevronRight, Sparkles, Layers
} from "lucide-react";

import page1Img from "../../assets/vastu_report_page1.png";
import page2Img from "../../assets/vastu_report_page2.png";
import page3Img from "../../assets/vastu_report_page3.png";
import page4Img from "../../assets/vastu_report_page4.png";
import page5Img from "../../assets/vastu_report_page5.png";

export default function ReportValueStack({ onNavigateCheckout }) {
  const [activePageIndex, setActivePageIndex] = useState(0);

  const pagesData = [
    {
      id: 0,
      pageNo: "Section 01",
      badge: "16-Zone Energy Grid",
      title: "16-Directional Energy Heatmap Analysis",
      subtitle: "What Does Your Floorplan Energy Grid Signify?",
      desc: "Degree-calculated visual heatmap mapping North (Kuber), North-East (Ishan), South-West (Nairitya), and 13 other energy zones.",
      image: page1Img,
      features: [
        "Exact 16-Zone Compass degree mapping",
        "Visual energy imbalance heatmap (Red vs Green zones)",
        "Property Brahmasthan center energy score"
      ]
    },
    {
      id: 1,
      pageNo: "Section 02",
      badge: "Zero Demolition Fixes",
      title: "100% Non-Demolition Remedial Blueprint",
      subtitle: "No Wall Breaking or Reconstruction Required",
      desc: "Step-by-step easy fixes using color tapes, micro metallic strips (brass/copper), crystal pyramid placements, and room usage adjustments.",
      image: page2Img,
      features: [
        "Copper & Brass strip door threshold fixes",
        "Elemental Color Therapy (Green, Red, Blue tapes)",
        "Zero disruption for rented flats & offices"
      ]
    },
    {
      id: 2,
      pageNo: "Section 03",
      badge: "Vastu Scorecard",
      title: "Entrance & Room-by-Room Compliance Score",
      subtitle: "Individual Ratings for Main Areas",
      desc: "Individual energy ratings for your main entrance, kitchen, master bedroom, toilets, and overhead water storage with immediate corrective actions.",
      image: page3Img,
      features: [
        "Main entrance directional score (e.g. NE vs SE)",
        "Kitchen Agni zone energy rating",
        "Master bedroom South-West stability analysis"
      ]
    },
    {
      id: 3,
      pageNo: "Section 04",
      badge: "Kuber Cashflow Zone",
      title: "Kuber Wealth & Cashflow Multiplier Guide",
      subtitle: "Unlocking Financial Growth & Debt Recovery",
      desc: "How to activate your North Kuber wealth zone for continuous money inflow, debt recovery, pending payment clearance, and business cashflow.",
      image: page4Img,
      features: [
        "North Kuber zone locker & safe placement",
        "Blue color water element energy activator",
        "Financial obstacle removal blueprint"
      ]
    },
    {
      id: 4,
      pageNo: "Section 05",
      badge: "Astro-Vastu Alignment",
      title: "Personal Astro-Vastu Gemstone & Chakra Guide",
      subtitle: "Customized Remedies Based on Your DOB",
      desc: "Tailored planetary recommendations based on your birth date and janam kundali to remove personal career stagnation and health stress.",
      image: page5Img,
      features: [
        "DOB Kundali & Vastu Directional Synergy",
        "Rashi & Gemstone chakra balancing guide",
        "Personalized success & prosperity forecast"
      ]
    }
  ];

  const handleNext = () => {
    setActivePageIndex((prev) => (prev < pagesData.length - 1 ? prev + 1 : 0));
  };

  const handlePrev = () => {
    setActivePageIndex((prev) => (prev > 0 ? prev - 1 : pagesData.length - 1));
  };

  const activePage = pagesData[activePageIndex];

  // Feature Cards mapping (Left 3, Right 3)
  const leftFeatures = [
    { idx: 0, label: "16-Zone Directional Energy Heatmap", sub: "Degree directional mapping" },
    { idx: 1, label: "100% Non-Demolition Remedial Blueprint", sub: "Color tape & copper strip fixes" },
    { idx: 2, label: "Entrance & Room Vastu Scorecard", sub: "Individual compliance ratings" }
  ];

  const rightFeatures = [
    { idx: 3, label: "Kuber Wealth Zone & Cashflow Multiplier", sub: "North zone money inflow activator" },
    { idx: 4, label: "Astro-Vastu Gemstone & DOB Alignment", sub: "Personal planetary remedies" },
    { idx: 0, label: "Custom Tailored PDF Report", sub: "Instant delivery on WhatsApp & Email" }
  ];

  return (
    <section className="py-14 md:py-20 px-4 md:px-8 bg-gradient-to-b from-[#fffbf7] via-[#fff5eb] to-[#fffbf7] text-slate-900 overflow-hidden relative border-b border-orange-200/60">
      
      {/* Soft Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[950px] h-[600px] bg-orange-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1400px] mx-auto space-y-10 md:space-y-12 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 px-4 py-1.5 rounded-full text-xs font-bold text-[#ea580c]">
            <Layers size={15} className="text-[#f97316]" />
            <span>Interactive Vastu Report Preview</span>
          </div>

          <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 font-sora leading-tight tracking-tight">
            What Exactly Will You Get In <span className="orange-gradient-text">Your Personalised Vastu Science Report?</span>
          </h2>

          <p className="text-xs md:text-sm text-slate-600 font-semibold leading-relaxed">
            Click any feature pill or use the arrows to flip through sample report pages below.
          </p>
        </div>

        {/* Interactive 3-Column Layout: Left Feature Pills, Center Printed Paper Report Carousel, Right Feature Pills */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center pt-2">
          
          {/* LEFT COLUMN: 3 Feature Pills */}
          <div className="lg:col-span-3 space-y-3.5 order-2 lg:order-1">
            {leftFeatures.map((item, i) => (
              <div 
                key={i} 
                onClick={() => setActivePageIndex(item.idx)}
                className={`feature-pill-card ${activePageIndex === item.idx ? "active" : ""}`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-extrabold text-[#ea580c] uppercase tracking-wider">
                    Feature #{item.idx + 1}
                  </span>
                  {activePageIndex === item.idx && (
                    <CheckCircle2 size={16} className="text-[#ea580c]" />
                  )}
                </div>
                <h3 className="text-sm font-extrabold text-slate-900 font-sora pt-1">
                  {item.label}
                </h3>
                <p className="text-xs text-slate-500 font-medium pt-0.5">
                  {item.sub}
                </p>
              </div>
            ))}
          </div>

          {/* CENTER COLUMN: Realistic Printed Paper Report Carousel Viewer */}
          <div className="lg:col-span-6 flex flex-col items-center space-y-6 order-1 lg:order-2">
            
            {/* Nav Arrows + 3D Printed Paper Document Container */}
            <div className="w-full flex items-center justify-between gap-2 md:gap-4">
              
              {/* Left Arrow Button */}
              <button 
                onClick={handlePrev}
                aria-label="Previous Page"
                className="nav-arrow-btn shrink-0"
              >
                <ChevronLeft size={24} />
              </button>

              {/* 3D Printed Paper Document Page Card */}
              <div className="report-doc-stack p-5 md:p-6 flex-1 text-center space-y-4 relative bg-white">
                
                {/* Top Document Header Line */}
                <div className="flex items-center justify-between border-b border-orange-100 pb-2.5">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#f97316]" />
                    <span className="text-[11px] font-extrabold text-slate-900 uppercase tracking-widest">
                      VastuWheels Report Sheet
                    </span>
                  </div>
                  <span className="text-[11px] font-extrabold px-3 py-0.5 rounded-full bg-orange-100 text-[#ea580c] border border-orange-300">
                    {activePage.pageNo}
                  </span>
                </div>

                {/* Printed Paper Report Page Image */}
                <div className="report-paper-img-container shadow-md">
                  <img 
                    src={activePage.image} 
                    alt={activePage.title} 
                    className="report-paper-img"
                    loading="lazy"
                  />
                </div>

                {/* Active Page Caption & Key Highlights */}
                <div className="space-y-2 pt-1 text-left">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-extrabold text-slate-900 font-sora">
                      {activePage.subtitle}
                    </h3>
                    <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-orange-50 text-[#ea580c] border border-orange-200 shrink-0">
                      {activePage.badge}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 font-medium leading-snug">
                    {activePage.desc}
                  </p>
                </div>

                {/* Document Watermark Seal */}
                <div className="pt-1 flex items-center justify-center gap-2 text-[10px] text-slate-400 font-bold uppercase tracking-wider border-t border-slate-100">
                  <ShieldCheck size={14} className="text-emerald-600" />
                  <span>100% Certified Vedic Vastu Report Sheet</span>
                </div>

              </div>

              {/* Right Arrow Button */}
              <button 
                onClick={handleNext}
                aria-label="Next Page"
                className="nav-arrow-btn shrink-0"
              >
                <ChevronRight size={24} />
              </button>

            </div>

            {/* Carousel Page Indicator Dots */}
            <div className="flex items-center justify-center gap-2 pt-1">
              {pagesData.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActivePageIndex(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    activePageIndex === idx 
                      ? "w-8 bg-[#ea580c] shadow-md shadow-orange-500/40" 
                      : "w-2.5 bg-orange-200 hover:bg-orange-300"
                  }`}
                  aria-label={`Go to page slide ${idx + 1}`}
                />
              ))}
            </div>

          </div>

          {/* RIGHT COLUMN: 3 Feature Pills */}
          <div className="lg:col-span-3 space-y-3.5 order-3 lg:order-3">
            {rightFeatures.map((item, i) => (
              <div 
                key={i} 
                onClick={() => setActivePageIndex(item.idx)}
                className={`feature-pill-card ${activePageIndex === item.idx ? "active" : ""}`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-extrabold text-[#ea580c] uppercase tracking-wider">
                    Feature #{item.idx === 0 ? "1" : item.idx === 3 ? "4" : "5"}
                  </span>
                  {activePageIndex === item.idx && (
                    <CheckCircle2 size={16} className="text-[#ea580c]" />
                  )}
                </div>
                <h3 className="text-sm font-extrabold text-slate-900 font-sora pt-1">
                  {item.label}
                </h3>
                <p className="text-xs text-slate-500 font-medium pt-0.5">
                  {item.sub}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom Price Callout & Vibrant Orange Capsule CTA Button */}
        <div className="celeb-cta-box p-6 md:p-8 text-center max-w-4xl mx-auto space-y-5 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-orange-400 via-amber-500 to-orange-500" />

          {/* Pricing Highlight */}
          <div className="space-y-1">
            <div className="text-xs text-slate-500 uppercase tracking-widest font-bold">Total Package Value: ₹5,999</div>
            <div className="text-3xl md:text-5xl font-extrabold text-slate-900 font-sora flex items-center justify-center gap-3">
              <span className="orange-gradient-text">Today Only: ₹996</span>
              <span className="text-slate-400 text-lg md:text-2xl line-through font-normal">₹5,999</span>
            </div>
            <p className="text-xs md:text-sm text-emerald-700 font-bold">
              🎉 You Save ₹5,003 Special Ads Discount (83% Off)
            </p>
          </div>

          {/* Vibrant Orange Capsule CTA Button */}
          <div className="pt-2">
            <button 
              onClick={onNavigateCheckout}
              className="w-full sm:w-auto btn-orange-primary text-white font-black text-base sm:text-lg md:text-lg px-7 lg:px-12 py-4 lg:py-4.5 rounded-full shadow-2xl shadow-orange-500/35 flex items-center justify-center gap-3 mx-auto transition-all duration-300 transform hover:scale-[1.02] cursor-pointer border border-amber-300/40 leading-snug tracking-tight"
            >
              <Sparkles size={22} className="text-amber-200 animate-pulse shrink-0" />
              <span>BUY NOW at ₹996 only</span>
              <ArrowRight size={20} className="text-white shrink-0" />
            </button>
          </div>

          <div className="flex items-center justify-center gap-4 text-xs text-slate-500 font-medium pt-1">
            <span className="flex items-center gap-1"><ShieldCheck size={15} className="text-emerald-600" /> 100% Satisfaction Guarantee</span>
            <span>•</span>
            <span>Instant PDF Download on WhatsApp & Email</span>
          </div>

        </div>

      </div>
    </section>
  );
}
