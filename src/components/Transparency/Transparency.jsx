import React from "react";
import "./Transparency.css";
import { Star, CheckCircle2 } from "lucide-react";

import indianCoupleImg from "../../assets/indian_couple_review.png";
import indianManImg from "../../assets/indian_man_review.png";
import indianWomanImg from "../../assets/indian_woman_review.png";

export default function Transparency() {
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
      name: "Vikram Malhotra",
      location: "Mumbai",
      rating: 5,
      issue: "North-East Kitchen causing severe insomnia & health stress",
      result: "Implemented elemental green marble slab & crystal remedies without breaking walls. Health improved greatly!",
      image: indianManImg
    },
    {
      name: "Dr. Ananya Reddy",
      location: "Bengaluru",
      rating: 5,
      issue: "South-East Water tank creating marriage disputes",
      result: "Applied red color shielding remedy on SE entrance. Relationship harmony restored completely.",
      image: indianWomanImg
    }
  ];

  const stats = [
    { label: "Reports Generated", val: "60,000+" },
    { label: "Demolition Required", val: "0%" },
    { label: "Customer Satisfaction", val: "99.4%" },
    { label: "ISO Certified Rating", val: "4.7 / 5" }
  ];

  return (
    <section className="py-20 px-6 md:px-12 bg-gradient-to-b from-[#fffbf7] via-[#fff5eb] to-[#fffbf7] relative">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="bg-orange-500/10 text-[#ea580c] border border-orange-300 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
            Verified Success Stories
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 font-sora">
            Trusted By Over <span className="orange-gradient-text">60,000+ Indian Families</span>
          </h2>
          <p className="text-slate-600 text-base">
            See real experiences from homeowners who transformed their financial growth and family peace using Acharya Ji's zero-demolition remedies.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <div key={i} className="white-orange-card p-6 text-center rounded-3xl">
              <div className="text-3xl md:text-4xl font-extrabold text-[#ea580c] font-sora">{s.val}</div>
              <div className="text-xs md:text-sm text-slate-600 mt-1 font-semibold">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, idx) => (
            <div key={idx} className="white-orange-card white-orange-card-hover p-6 md:p-8 rounded-3xl flex flex-col justify-between space-y-5">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-500 gap-0.5">
                    {[...Array(r.rating)].map((_, i) => (
                      <Star key={i} size={15} className="fill-amber-500" />
                    ))}
                  </div>
                  <span className="text-[11px] bg-emerald-100 text-emerald-800 border border-emerald-300 px-2.5 py-0.5 rounded-full font-extrabold flex items-center gap-1">
                    <CheckCircle2 size={11} className="text-emerald-600" /> Verified Purchase
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
                <img src={r.image} alt={r.name} className="w-12 h-12 rounded-full object-cover border-2 border-[#f97316] shadow-sm shrink-0" />
                <div>
                  <div className="text-sm font-extrabold text-slate-900">{r.name}</div>
                  <div className="text-xs text-slate-500 font-medium">{r.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
