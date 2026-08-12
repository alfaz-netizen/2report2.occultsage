import React, { useState, useEffect } from "react";
import "./Transparency.css";
import { Star, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";

import indianCoupleImg from "../../assets/indian_couple_review.png";
import indianManImg from "../../assets/indian_man_review.png";
import indianWomanImg from "../../assets/indian_woman_review.png";
import indianBusinessmanImg from "../../assets/indian_businessman_review.png";
import indianFemaleArchitectImg from "../../assets/indian_female_architect_review.png";
import indianGentlemanImg from "../../assets/indian_gentleman_review.png";
import indianItProImg from "../../assets/indian_it_pro_review.png";
import indianLawyerFemaleImg from "../../assets/indian_lawyer_female_review.png";
import indianTechFounderImg from "../../assets/indian_tech_founder_review.png";
import indianHomemakerImg from "../../assets/indian_homemaker_woman_review.png";
import indianDoctorImg from "../../assets/indian_doctor_review.png";
import indianEngineerImg from "../../assets/indian_engineer_review.png";
import indianTraderImg from "../../assets/indian_trader_review.png";
import indianConsultantImg from "../../assets/indian_consultant_review.png";
import indianTeacherImg from "../../assets/indian_teacher_review.png";
import indianStoreOwnerImg from "../../assets/indian_store_owner_review.png";

export default function Transparency() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      name: "Rajesh & Sunita Sharma",
      location: "Delhi NCR",
      rating: 5,
      issue: "South-West Toilet causing severe debt & business losses",
      result: "Used Acharya Ji's brass strip & color therapy. Within 40 days, pending client payments got cleared!",
      image: indianCoupleImg
    },
    {
      name: "Sanjay Singhania",
      location: "Ahmedabad, Gujarat",
      rating: 5,
      issue: "Heavy obstacles in factory expansion & cashflow blockage",
      result: "Placed North Kuber zone element & brass helix. Sales increased 3X within 60 days without breaking walls!",
      image: indianBusinessmanImg
    },
    {
      name: "Vikram Malhotra",
      location: "Mumbai, Maharashtra",
      rating: 5,
      issue: "North-East Kitchen causing severe insomnia & health stress",
      result: "Implemented elemental green marble slab & crystal remedies without demolition. Health improved greatly!",
      image: indianManImg
    },
    {
      name: "Kavita Krishnamurthy",
      location: "Chennai, Tamil Nadu",
      rating: 5,
      issue: "Lack of career growth & delayed job promotions for 3 years",
      result: "Followed Acharya Ji's directional desk alignment & blue zone balancing remedies. Promoted to Senior Director!",
      image: indianFemaleArchitectImg
    },
    {
      name: "Dr. Ananya Reddy",
      location: "Bengaluru, Karnataka",
      rating: 5,
      issue: "South-East Water tank creating marriage disputes & friction",
      result: "Applied red color shielding remedy on SE entrance. Relationship harmony & peace restored completely.",
      image: indianWomanImg
    },
    {
      name: "Rameshwar Prasad Gupta",
      location: "Varanasi, UP",
      rating: 5,
      issue: "Constant arguments at home & child study focus issues",
      result: "Shifted study direction to East and placed copper helix. Son scored 96% in board exams!",
      image: indianGentlemanImg
    },
    {
      name: "Rohan Deshmukh",
      location: "Hyderabad, Telangana",
      rating: 5,
      issue: "Business partnership disputes & stuck inventory payments",
      result: "Applied South-East fire zone balancing without breaking a single brick. Received long-pending ₹14 Lakh dues!",
      image: indianItProImg
    },
    {
      name: "Priya Verma",
      location: "Pune, Maharashtra",
      rating: 5,
      issue: "Continuous financial drainage & unexpected medical bills",
      result: "Corrected North-West air element imbalance using elemental metal strips. Family savings stabilized in 30 days.",
      image: indianLawyerFemaleImg
    },
    {
      name: "Kunal Shah",
      location: "Surat, Gujarat",
      rating: 5,
      issue: "Sleepless nights & constant anxiety due to South entrance defect",
      result: "Installed Acharya Ji's elemental door shield remedy. Energy felt lighter and peaceful sleep returned immediately.",
      image: indianTechFounderImg
    },
    {
      name: "Savita Agarwal",
      location: "Jaipur, Rajasthan",
      rating: 5,
      issue: "Ancestral property sale stuck for 2 years without buyers",
      result: "Applied West Varun zone remedy as per report instructions. Property sold at full market price within 45 days!",
      image: indianHomemakerImg
    },
    {
      name: "Amitabh & Neha Banerjee",
      location: "Kolkata, West Bengal",
      rating: 5,
      issue: "North-West storage defect causing repeated loan rejections",
      result: "Placed elemental metal strip and brass spiral. Received ₹25 Lakh commercial loan approval within 3 weeks!",
      image: indianTraderImg
    },
    {
      name: "Sunil Kumar Nair",
      location: "Kochi, Kerala",
      rating: 5,
      issue: "South-West main entrance causing high employee turnover",
      result: "Applied copper door boundary remedy. Team stability, office productivity, and client trust restored completely!",
      image: indianEngineerImg
    },
    {
      name: "Meenakshi & Suresh Sundaram",
      location: "Madurai, Tamil Nadu",
      rating: 5,
      issue: "East zone kitchen defect creating health lethargy & fatigue",
      result: "Installed green marble stone base & elemental air balancing remedy. Health & energy levels improved remarkably!",
      image: indianDoctorImg
    },
    {
      name: "Deepak & Shalini Joshi",
      location: "Dehradun, Uttarakhand",
      rating: 5,
      issue: "South-East bedroom defect causing sudden household cash drain",
      result: "Shifted bed alignment to South-West and placed red zone element. Monthly savings increased by 40% in 30 days!",
      image: indianConsultantImg
    },
    {
      name: "Manish & Pooja Chawla",
      location: "Ludhiana, Punjab",
      rating: 5,
      issue: "North-East toilet creating severe career blockage & stagnation",
      result: "Applied Acharya Ji's zero-demolition color tape & crystal pyramid remedy. Received dream job offer in top MNC!",
      image: indianTeacherImg
    },
    {
      name: "Harish Chandra Patel",
      location: "Indore, Madhya Pradesh",
      rating: 5,
      issue: "West zone energy defect blocking commercial showroom footfall",
      result: "Placed West Varun element & brass helix as advised. Showroom footfall and sales doubled in 30 days!",
      image: indianStoreOwnerImg
    }
  ];

  const stats = [
    { label: "Reports Generated", val: "60,000+" },
    { label: "Demolition Required", val: "0%" },
    { label: "Customer Satisfaction", val: "99.4%" },
    { label: "ISO Certified Rating", val: "4.7 / 5" }
  ];

  const [isMobile, setIsMobile] = useState(() => typeof window !== "undefined" && window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = isMobile ? reviews.length - 1 : reviews.length - 3;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <section className="py-20 px-6 md:px-12 bg-gradient-to-b from-[#fffbf7] via-[#fff5eb] to-[#fffbf7] relative">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto flex flex-col items-center">
          <span className="inline-block bg-orange-500/10 text-[#ea580c] border border-orange-300 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-3 sm:mb-4">
            Verified Success Stories (10,000+ Reviews)
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-slate-900 font-sora leading-tight sm:leading-snug mb-3">
            Trusted By Over <span className="orange-gradient-text">60,000+ Indian Families</span>
          </h2>
          <p className="text-slate-600 text-xs sm:text-base font-medium leading-relaxed">
            See real experiences from homeowners and business owners across India who transformed their wealth, health, and family peace using Acharya Ji's zero-demolition remedies.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4">
          {stats.map((s, i) => (
            <div key={i} className="white-orange-card p-3 sm:p-5 md:p-6 text-center rounded-2xl sm:rounded-3xl flex flex-col justify-center items-center overflow-hidden">
              <div className="text-xl sm:text-3xl md:text-4xl font-extrabold text-[#ea580c] font-sora tracking-tight whitespace-nowrap leading-none">
                {s.val}
              </div>
              <div className="text-[10px] sm:text-xs md:text-sm text-slate-600 mt-1.5 font-semibold leading-tight">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* 🎠 HORIZONTAL SLIDER CAROUSEL SECTION */}
        <div className="relative pt-4 px-2 md:px-10">
          
          {/* Left Arrow Button */}
          <button
            onClick={handlePrev}
            aria-label="Previous Review"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-30 bg-white hover:bg-orange-50 text-slate-800 hover:text-[#ea580c] p-3 rounded-full border-2 border-orange-300 shadow-xl transition-all duration-200 transform hover:scale-110 cursor-pointer hidden md:flex items-center justify-center"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={handleNext}
            aria-label="Next Review"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-30 bg-white hover:bg-orange-50 text-slate-800 hover:text-[#ea580c] p-3 rounded-full border-2 border-orange-300 shadow-xl transition-all duration-200 transform hover:scale-110 cursor-pointer hidden md:flex items-center justify-center"
          >
            <ChevronRight size={24} />
          </button>

          {/* Carousel Track Wrapper */}
          <div className="overflow-hidden rounded-3xl">
            <div 
              className="flex transition-transform duration-500 ease-out gap-0 md:gap-6"
              style={{ transform: `translateX(-${currentIndex * (isMobile ? 100 : (100 / 3 + 0.8))}%)` }}
            >
              {reviews.map((r, idx) => (
                <div 
                  key={idx} 
                  className="w-full md:w-[calc(33.333%-16px)] shrink-0 white-orange-card white-orange-card-hover p-6 md:p-7 rounded-3xl flex flex-col justify-between space-y-5"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex text-amber-500 gap-0.5">
                        {[...Array(r.rating)].map((_, i) => (
                          <Star key={i} size={15} className="fill-amber-500 text-amber-500" />
                        ))}
                      </div>
                      <span className="text-[11px] bg-emerald-100 text-emerald-800 border border-emerald-300 px-2.5 py-0.5 rounded-full font-extrabold flex items-center gap-1">
                        <CheckCircle2 size={11} className="text-emerald-600" /> Verified
                      </span>
                    </div>

                    <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200 text-xs">
                      <span className="text-rose-600 font-bold">Issue Before Vastu:</span>
                      <p className="text-slate-700 mt-0.5 font-medium">{r.issue}</p>
                    </div>

                    <div className="bg-orange-50 p-3.5 rounded-2xl border border-orange-200 text-xs">
                      <span className="text-[#ea580c] font-bold">Result After Remedy:</span>
                      <p className="text-slate-800 mt-0.5 font-medium">{r.result}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3.5 pt-4 border-t border-slate-100">
                    <img 
                      src={r.image} 
                      alt={r.name} 
                      className="w-12 h-12 rounded-full object-cover border-2 border-[#f97316] shadow-sm shrink-0" 
                    />
                    <div>
                      <div className="text-sm font-extrabold text-slate-900 font-sora">{r.name}</div>
                      <div className="text-xs text-slate-500 font-medium">{r.location}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls for Mobile & Slide Indicators */}
          <div className="flex items-center justify-between md:justify-center gap-4 pt-6">
            <button
              onClick={handlePrev}
              className="md:hidden bg-white text-slate-800 p-2.5 rounded-full border border-orange-300 shadow-md"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Smart 5-Dot Dynamic Sliding Window Pagination */}
            <div className="flex justify-center items-center gap-2">
              {(() => {
                const totalDots = maxIndex + 1;
                const maxVisibleDots = 5;
                
                if (totalDots <= maxVisibleDots) {
                  return [...Array(totalDots)].map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                        currentIndex === idx 
                          ? "w-8 bg-[#ea580c]" 
                          : "w-2.5 bg-orange-200 hover:bg-orange-300"
                      }`}
                    />
                  ));
                }

                // Dynamic 5-dot sliding window logic centered around currentIndex
                let start = Math.max(0, Math.min(currentIndex - 2, totalDots - maxVisibleDots));
                let end = start + maxVisibleDots;

                const visibleDots = [];
                for (let i = start; i < end; i++) {
                  visibleDots.push(i);
                }

                return visibleDots.map((dotIdx) => {
                  const isActive = currentIndex === dotIdx;
                  return (
                    <button
                      key={dotIdx}
                      onClick={() => setCurrentIndex(dotIdx)}
                      className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                        isActive 
                          ? "w-8 bg-[#ea580c]" 
                          : "w-2.5 bg-orange-200 hover:bg-orange-300"
                      }`}
                    />
                  );
                });
              })()}
            </div>

            <button
              onClick={handleNext}
              className="md:hidden bg-white text-slate-800 p-2.5 rounded-full border border-orange-300 shadow-md"
            >
              <ChevronRight size={20} />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
