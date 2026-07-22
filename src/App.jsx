import React, { useState } from "react";
import "./App.css";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import CelebrityTrust from "./components/CelebrityTrust/CelebrityTrust";
import ReportBenefits from "./components/ReportBenefits/ReportBenefits";
import ExclusiveBonuses from "./components/ExclusiveBonuses/ExclusiveBonuses";
import ReportValueStack from "./components/ReportValueStack/ReportValueStack";
import Transparency from "./components/Transparency/Transparency";
import FAQ from "./components/FAQ/FAQ";
import StickyCTA from "./components/StickyCTA/StickyCTA";
import Footer from "./components/Footer/Footer";
import ReportForm from "./components/ReportForm/ReportForm";

export default function App() {
  const [currentPage, setCurrentPage] = useState("landing"); // "landing" | "checkout"

  const handleNavigateCheckout = () => {
    setCurrentPage("checkout");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackToLanding = () => {
    setCurrentPage("landing");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (currentPage === "checkout") {
    return <ReportForm onBack={handleBackToLanding} />;
  }

  return (
    <div className="min-h-screen bg-[#fffbf7] text-slate-900 font-sora flex flex-col selection:bg-orange-500 selection:text-white">
      
      {/* 1. Brand Header Only */}
      <Header onNavigateCheckout={handleNavigateCheckout} />

      {/* 2. Main Streamlined Landing Flow */}
      <main className="flex-1 space-y-0">
        
        {/* Hero Section */}
        <Hero onNavigateCheckout={handleNavigateCheckout} />

        {/* Section 1 Below Hero: Top Industrialists & Celebrities Who Follow Vastu Science */}
        <CelebrityTrust onNavigateCheckout={handleNavigateCheckout} />

        {/* Section 2 Below CelebrityTrust: Sahi Vastu Science Report Paane Ke Fayde */}
        <ReportBenefits onNavigateCheckout={handleNavigateCheckout} />

        {/* Section 3 Below ReportBenefits: 2 Exclusive FREE Bonuses */}
        <ExclusiveBonuses onNavigateCheckout={handleNavigateCheckout} />

        {/* Section 4: What You Get in 24-Page Vastu Report (Value Stack) */}
        <ReportValueStack onNavigateCheckout={handleNavigateCheckout} />

        {/* Section 5: Verified Customer Success Stories & Reviews */}
        <Transparency />

        {/* Section 6: Frequently Asked Questions */}
        <FAQ />

      </main>

      {/* Sticky Mobile Bottom Offer Bar */}
      <StickyCTA onNavigateCheckout={handleNavigateCheckout} />

      {/* Brand Footer */}
      <Footer />

    </div>
  );
}
