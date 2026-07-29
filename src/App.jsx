import React, { useState, useEffect } from "react";
import "./App.css";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
// import CelebrityTrust from "./components/CelebrityTrust/CelebrityTrust";
import ReportBenefits from "./components/ReportBenefits/ReportBenefits";
import ExclusiveBonuses from "./components/ExclusiveBonuses/ExclusiveBonuses";
import ReportValueStack from "./components/ReportValueStack/ReportValueStack";
import Transparency from "./components/Transparency/Transparency";
import FAQ from "./components/FAQ/FAQ";
import StickyCTA from "./components/StickyCTA/StickyCTA";
import Footer from "./components/Footer/Footer";
import ReportForm from "./components/ReportForm/ReportForm";
import LegalPage from "./components/LegalPage/LegalPage";
import ThankYouPage from "./components/ThankYouPage/ThankYouPage";
import { trackPixelEvent } from "./utils/pixel";
import { captureUtmParams } from "./utils/utm";

export default function App() {
  const [currentPage, setCurrentPage] = useState("landing"); // "landing" | "checkout" | "legal" | "thankyou"
  const [activeLegalDoc, setActiveLegalDoc] = useState("privacy");
  const [orderInfo, setOrderInfo] = useState({ 
    language: "English", 
    fullName: "", 
    phone: "",
    email: "",
    paymentId: ""
  });

  // Sync initial URL path on mount, capture UTM parameters, & listen to browser back/forward buttons
  useEffect(() => {
    captureUtmParams(); // Capture UTM ad parameters immediately on site visit

    const handleUrlChange = () => {
      // Decode URL (handles spaces or encoded characters like %20 in 'thankyou english')
      const rawPath = decodeURIComponent(window.location.pathname).toLowerCase();
      
      if (rawPath.includes("hindi")) {
        setOrderInfo((prev) => ({ ...prev, language: "Hindi" }));
        setCurrentPage("thankyou");
      } else if (rawPath.includes("english")) {
        setOrderInfo((prev) => ({ ...prev, language: "English" }));
        setCurrentPage("thankyou");
      } else if (rawPath.includes("thank")) {
        setCurrentPage("thankyou");
      } else if (rawPath.includes("checkout")) {
        setCurrentPage("checkout");
      } else if (rawPath.includes("privacy") || rawPath.includes("tnc") || rawPath.includes("about") || rawPath.includes("refund") || rawPath.includes("disclaimer") || rawPath.includes("legal")) {
        setCurrentPage("legal");
        if (rawPath.includes("tnc")) setActiveLegalDoc("tnc");
        else if (rawPath.includes("about")) setActiveLegalDoc("about");
        else if (rawPath.includes("refund")) setActiveLegalDoc("refund");
        else if (rawPath.includes("disclaimer")) setActiveLegalDoc("disclaimer");
        else setActiveLegalDoc("privacy");
      } else {
        setCurrentPage("landing");
      }
    };

    handleUrlChange();
    window.addEventListener("popstate", handleUrlChange);
    return () => window.removeEventListener("popstate", handleUrlChange);
  }, []);

  const handleNavigateCheckout = () => {
    // Trigger Meta Facebook Pixel AddToCart Event on CTA Button Clicks
    trackPixelEvent("AddToCart", { value: 996, currency: "INR" });
    window.history.pushState({}, "", "/checkout");
    setCurrentPage("checkout");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavigateLegal = (docKey = "privacy") => {
    setActiveLegalDoc(docKey);
    window.history.pushState({}, "", `/${docKey}`);
    setCurrentPage("legal");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackToLanding = () => {
    window.history.pushState({}, "", "/");
    setCurrentPage("landing");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePaymentSuccess = (data) => {
    const selectedLang = data.language || "English";
    setOrderInfo({
      language: selectedLang,
      fullName: data.fullName || "",
      phone: data.phone || "",
      email: data.email || "",
      paymentId: data.paymentId || "",
      uniqueCustomerId: data.uniqueCustomerId || ("VW-" + Math.floor(10000000 + Math.random() * 90000000))
    });

    const targetUrl = selectedLang === "Hindi" ? "/thankyou-hindi" : "/thankyou-english";
    window.history.pushState({}, "", targetUrl);
    setCurrentPage("thankyou");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (currentPage === "checkout") {
    return (
      <ReportForm 
        onBack={handleBackToLanding} 
        onPaymentSuccess={handlePaymentSuccess} 
      />
    );
  }

  if (currentPage === "thankyou") {
    return (
      <ThankYouPage 
        selectedLanguage={orderInfo.language} 
        fullName={orderInfo.fullName} 
        phone={orderInfo.phone} 
        email={orderInfo.email}
        paymentId={orderInfo.paymentId}
        uniqueCustomerId={orderInfo.uniqueCustomerId}
        onBackToHome={handleBackToLanding} 
      />
    );
  }

  if (currentPage === "legal") {
    return (
      <LegalPage 
        activeDoc={activeLegalDoc} 
        onBackToHome={handleBackToLanding}
        onSelectDoc={(docKey) => {
          setActiveLegalDoc(docKey);
          window.history.pushState({}, "", `/${docKey}`);
        }}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#fffbf7] text-slate-900 font-sora flex flex-col selection:bg-orange-500 selection:text-white">
      
      {/* 1. Brand Header Only */}
      <Header onNavigateCheckout={handleNavigateCheckout} onBackToHome={handleBackToLanding} />

      {/* 2. Main Streamlined Landing Flow */}
      <main className="flex-1 space-y-0">
        
        {/* Hero Section */}
        <Hero onNavigateCheckout={handleNavigateCheckout} onBackToHome={handleBackToLanding} />

        {/* Section 2 Below Hero: Sahi Vastu Science Report Paane Ke Fayde */}
        <ReportBenefits onNavigateCheckout={handleNavigateCheckout} />

        {/* Section 3 Below ReportBenefits: 2 Exclusive FREE Bonuses */}
        <ExclusiveBonuses onNavigateCheckout={handleNavigateCheckout} />

        {/* Section 4: What You Get in Vastu Report (Value Stack) */}
        <ReportValueStack onNavigateCheckout={handleNavigateCheckout} />

        {/* Section 5: Verified Customer Success Stories & Reviews */}
        <Transparency />

        {/* Section 6: Frequently Asked Questions */}
        <FAQ />

      </main>

      {/* Sticky Mobile Bottom Offer Bar */}
      <StickyCTA onNavigateCheckout={handleNavigateCheckout} />

      {/* Brand Footer */}
      <Footer onNavigateLegal={handleNavigateLegal} onBackToHome={handleBackToLanding} />

    </div>
  );
}
