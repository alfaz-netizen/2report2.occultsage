import React, { useState, useRef } from "react";
import "./VideoTestimonials.css";
import { Play, Star, CheckCircle2, Video, Sparkles, UserCheck, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

import alkaVideo from "../../assets/ALKA MAM TESTIMONIAL .mp4";
import dineshVideo from "../../assets/DINESH SIR-.mp4";
import samsherVideo from "../../assets/samsher sir.mp4";

import alkaPoster from "../../assets/alka_poster.jpg";
import dineshPoster from "../../assets/dinesh_poster.jpg";
import samsherPoster from "../../assets/samsher_poster.jpg";

export default function VideoTestimonials({ onNavigateCheckout }) {
  const [playingVideo, setPlayingVideo] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const videoRefs = [useRef(null), useRef(null), useRef(null)];
  const sliderRef = useRef(null);

  const videosData = [
    {
      id: "samsher",
      name: "Samsher",
      designation: "Business Owner",
      location: "Punjab",
      rating: 5,
      videoUrl: samsherVideo,
      posterUrl: samsherPoster,
      tagline: "Business Growth & Cash Flow",
      quote: "Mene business space ke liye Vastu report nikalwaya aur Acharya Ji ki remedies follow kine. Business cash flow aur growth me bohot bada improvement aaya!"
    },
    {
      id: "dinesh",
      name: "Dinesh",
      designation: "Verified Homeowner",
      location: "Jaipur, Rajasthan",
      rating: 5,
      videoUrl: dineshVideo,
      posterUrl: dineshPoster,
      tagline: "House Vastu & Family Peace",
      quote: "Mene apne ghar ka Vastu report nikalwaya aur simple remedies follow kine. Ghar ka environment, health aur overall peace bilkul sahi ho gaya!"
    },
    {
      id: "alka",
      name: "Alka",
      designation: "Relationship & Harmony",
      location: "Delhi NCR",
      rating: 5,
      videoUrl: alkaVideo,
      posterUrl: alkaPoster,
      tagline: "Relationship Harmony & Peace",
      quote: "Ghar me hamesha larai aur negative stress rehta tha. Vastu report ke baad remedies follow karte hi relationships aur ghar me shanti ho gayi!"
    }
  ];

  const togglePlay = (index) => {
    const videoRef = videoRefs[index].current;
    if (!videoRef) return;

    if (videoRef.paused) {
      videoRefs.forEach((ref, i) => {
        if (i !== index && ref.current) {
          ref.current.pause();
        }
      });
      videoRef.play();
      setPlayingVideo(index);
    } else {
      videoRef.pause();
      setPlayingVideo(null);
    }
  };

  const handleScrollTo = (index) => {
    if (sliderRef.current && sliderRef.current.children[index]) {
      sliderRef.current.children[index].scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
      setActiveIndex(index);
    }
  };

  const handleNext = () => {
    const next = (activeIndex + 1) % videosData.length;
    handleScrollTo(next);
  };

  const handlePrev = () => {
    const prev = (activeIndex - 1 + videosData.length) % videosData.length;
    handleScrollTo(prev);
  };

  const handleScroll = () => {
    if (!sliderRef.current) return;
    const scrollLeft = sliderRef.current.scrollLeft;
    const itemWidth = sliderRef.current.children[0]?.offsetWidth || 280;
    const newIndex = Math.round(scrollLeft / itemWidth);
    if (newIndex >= 0 && newIndex < videosData.length && newIndex !== activeIndex) {
      setActiveIndex(newIndex);
    }
  };

  return (
    <section className="py-16 px-3 sm:px-6 md:px-12 bg-gradient-to-b from-white via-orange-50/40 to-[#fffbf7] relative overflow-hidden">
      
      {/* Background Subtle Geometry Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#f97316_0.5px,transparent_0.5px)] [background-size:24px_24px] opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-8 md:space-y-10 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 px-2">
          <span className="inline-flex items-center gap-1.5 bg-orange-500/10 text-[#ea580c] border border-orange-300/80 text-xs font-extrabold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
            <Video size={14} className="text-[#ea580c]" />
            <span>Real Customer Video Reviews</span>
          </span>
          
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-slate-900 font-sora leading-tight sm:leading-snug">
            Watch Real <span className="orange-gradient-text">Customer Video Feedback</span>
          </h2>
          
          <p className="text-slate-600 text-xs sm:text-base font-medium leading-relaxed">
            Hear directly from Samsher, Dinesh, and Alka about their real transformation experience with Acharya Ji's Vastu Analysis Report.
          </p>
        </div>

        {/* 3 Video Cards Container: Peek-through Horizontal Slider on Mobile | 3-Column Grid on Desktop */}
        <div className="relative">
          {/* Floating Left Arrow Button on Left Side of Cards (Mobile View Only) */}
          <button
            onClick={handlePrev}
            aria-label="Previous Video"
            className="md:hidden absolute -left-1 top-[42%] -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white/95 text-[#ea580c] border-2 border-orange-400 shadow-xl flex items-center justify-center backdrop-blur-md active:scale-90 hover:bg-orange-50 transition-all cursor-pointer"
          >
            <ChevronLeft size={22} className="stroke-[3]" />
          </button>

          {/* Floating Right Arrow Button on Right Side of Cards (Mobile View Only) */}
          <button
            onClick={handleNext}
            aria-label="Next Video"
            className="md:hidden absolute -right-1 top-[42%] -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white/95 text-[#ea580c] border-2 border-orange-400 shadow-xl flex items-center justify-center backdrop-blur-md active:scale-90 hover:bg-orange-50 transition-all cursor-pointer animate-pulse"
          >
            <ChevronRight size={22} className="stroke-[3]" />
          </button>

          <div 
            ref={sliderRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none gap-3 sm:gap-4 px-3 sm:px-4 pb-3 md:pb-0 md:grid md:grid-cols-3 md:overflow-visible md:gap-6 lg:gap-8"
          >
            {videosData.map((item, index) => {
              const isPlaying = playingVideo === index;
              return (
                <div 
                  key={item.id}
                  className="w-[78vw] max-w-[295px] sm:w-[320px] md:w-auto shrink-0 snap-start bg-white rounded-3xl border-2 border-orange-200/80 overflow-hidden video-card-shadow video-card-hover flex flex-col justify-between"
                >
                  {/* Video Container Box */}
                  <div className="relative aspect-[9/16] sm:aspect-[4/5] bg-slate-950 overflow-hidden group">
                    <video
                      ref={videoRefs[index]}
                      src={item.videoUrl}
                      poster={item.posterUrl}
                      controls={isPlaying}
                      playsInline
                      preload="metadata"
                      onEnded={() => setPlayingVideo(null)}
                      onPause={() => {
                        if (playingVideo === index) setPlayingVideo(null);
                      }}
                      className="w-full h-full object-cover"
                    />

                    {/* Play Overlay Button */}
                    {!isPlaying && (
                      <div 
                        onClick={() => togglePlay(index)}
                        className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent flex flex-col items-center justify-center gap-3 cursor-pointer group-hover:bg-slate-950/40 transition-all"
                      >
                        <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-gradient-to-r from-[#ea580c] to-[#f97316] text-white flex items-center justify-center shadow-2xl shadow-orange-500/50 transform group-hover:scale-110 transition-transform border-2 border-amber-200/80">
                          <Play size={28} className="fill-white translate-x-0.5" />
                        </div>
                        <span className="text-xs sm:text-sm font-extrabold text-white bg-slate-900/80 px-4 py-1.5 rounded-full border border-white/20 backdrop-blur-md">
                          Tap To Watch Feedback
                        </span>
                      </div>
                    )}

                    {/* Top Customer Info Badge */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none z-10">
                      <span className="bg-slate-900/80 text-white text-[11px] font-bold px-3 py-1 rounded-full border border-white/20 backdrop-blur-md flex items-center gap-1">
                        <UserCheck size={12} className="text-emerald-400" />
                        <span>{item.designation}</span>
                      </span>
                      <span className="bg-orange-500/90 text-white text-[11px] font-extrabold px-2.5 py-1 rounded-full backdrop-blur-md flex items-center gap-1">
                        <Star size={11} className="fill-white text-white" /> 5.0
                      </span>
                    </div>
                  </div>

                  {/* Card Footer Details */}
                  <div className="p-4 sm:p-6 space-y-3 bg-gradient-to-b from-white to-orange-50/30 flex-1 flex flex-col justify-between">
                    <div className="space-y-2">
                      {/* Rating Stars */}
                      <div className="flex items-center gap-1">
                        {[...Array(item.rating)].map((_, i) => (
                          <Star key={i} size={15} className="fill-amber-400 text-amber-400" />
                        ))}
                        <span className="text-xs text-slate-500 font-semibold ml-1.5">Verified Feedback</span>
                      </div>

                      {/* Customer Name & Location */}
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-extrabold text-slate-900 font-sora flex items-center gap-1.5">
                          <span>{item.name}</span>
                          <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                        </h3>
                        <span className="text-xs font-medium text-slate-500">{item.location}</span>
                      </div>

                      <p className="text-xs text-slate-600 font-medium italic leading-relaxed pt-1">
                        "{item.quote}"
                      </p>
                    </div>

                    <div className="pt-3 border-t border-orange-100/80">
                      <span className="text-[11px] font-extrabold text-[#ea580c] bg-orange-50 border border-orange-200 px-3 py-1 rounded-full inline-block">
                        {item.tagline}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Interactive Dots & Hint */}
        <div className="flex flex-col items-center justify-center gap-2 md:hidden pt-1">
          <div className="flex items-center gap-2">
            {videosData.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => handleScrollTo(idx)}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  activeIndex === idx
                    ? "w-7 h-2.5 bg-[#ea580c] shadow-sm"
                    : "w-2.5 h-2.5 bg-orange-200 hover:bg-orange-300"
                }`}
                aria-label={`Go to video ${idx + 1}`}
              />
            ))}
          </div>
          <span className="text-[11px] font-extrabold text-[#ea580c] bg-orange-50 border border-orange-200 px-3.5 py-0.5 rounded-full shadow-sm">
            👈 Tap side arrows or swipe to watch all 3 videos 👉
          </span>
        </div>

        {/* CTA Button */}
        <div className="text-center pt-2">
          <button 
            onClick={onNavigateCheckout}
            className="w-full sm:w-auto btn-orange-primary text-white font-black text-sm sm:text-base px-8 sm:px-12 py-4 rounded-full shadow-2xl shadow-orange-500/35 inline-flex items-center justify-center gap-2.5 transition-all duration-300 transform hover:scale-[1.02] cursor-pointer border border-amber-300/40"
          >
            <Sparkles size={18} className="text-amber-200 animate-pulse shrink-0" />
            <span>BUY NOW at ₹1,499 only & Get Report</span>
            <ArrowRight size={18} className="text-white shrink-0" />
          </button>
        </div>

      </div>
    </section>
  );
}
