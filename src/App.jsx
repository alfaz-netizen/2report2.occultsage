import React, { useState, useEffect } from "react";
import "./App.css";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
// import CelebrityTrust from "./components/CelebrityTrust/CelebrityTrust";
import ReportBenefits from "./components/ReportBenefits/ReportBenefits";
import ExclusiveBonuses from "./components/ExclusiveBonuses/ExclusiveBonuses";
import ReportValueStack from "./components/ReportValueStack/ReportValueStack";
import VideoTestimonials from "./components/VideoTestimonials/VideoTestimonials";
import Transparency from "./components/Transparency/Transparency";
import FAQ from "./components/FAQ/FAQ";
import StickyCTA from "./components/StickyCTA/StickyCTA";
import Footer from "./components/Footer/Footer";
import ReportForm from "./components/ReportForm/ReportForm";
import LegalPage from "./components/LegalPage/LegalPage";
import ThankYouPage from "./components/ThankYouPage/ThankYouPage";
import { trackPixelEvent, initMetaPixel, trackPageView } from "./utils/pixel";
import { captureUtmParams } from "./utils/utm";
import { getPricingForRoute } from "./config/pricing";

export default function App() {
  const [currentPage, setCurrentPage] = useState("landing"); // "landing" | "checkout" | "legal" | "thankyou"
  const [isFb1, setIsFb1] = useState(false); // Mode for /fb1 route (Pixel ID: 2606867239768678)
  const [currentPrefix, setCurrentPrefix] = useState(""); // Stores prefix like "/fb1"
  const [activeLegalDoc, setActiveLegalDoc] = useState("privacy");
  const [orderInfo, setOrderInfo] = useState({ 
    language: "English", 
    fullName: "", 
    phone: "",
    email: "",
    paymentId: ""
  });

  // Calculate current route's independent pricing configuration
  const currentPricing = getPricingForRoute(currentPrefix);

  // Sync URL path on mount, capture UTM parameters, & listen to browser navigation
  useEffect(() => {
    captureUtmParams(); // Capture UTM ad parameters immediately on site visit

    const handleUrlChange = () => {
      const rawPath = decodeURIComponent(window.location.pathname).toLowerCase();
      
      // Strictly allow ONLY /fb1 as the dedicated FB1 campaign route prefix
      const pathSegments = rawPath.split("/").filter(Boolean);
      let prefix = "";
      let actionRoute = rawPath;

      if (pathSegments.length > 0 && pathSegments[0] === "fb1") {
        prefix = "/fb1";
        actionRoute = "/" + pathSegments.slice(1).join("/");
      }

      setCurrentPrefix(prefix);

      // Dedicated FB1 Landing Page mode (/fb1 or /fb1/*)
      const fb1Mode = prefix === "/fb1";
      setIsFb1(fb1Mode);

      // Initialize active Meta Pixel and fire 1 Single PageView event with strict deduplication
      trackPageView();

      // Dynamic Canonical & Open Graph URL management: Sets exact page URL for /fb1 vs /
      const canonicalLink = document.querySelector("link[rel='canonical']");
      const ogUrlMeta = document.querySelector("meta[property='og:url']");
      const twitterUrlMeta = document.querySelector("meta[name='twitter:url']");
      const activeFullUrl = `https://report.globalinch.com${prefix || "/"}`;

      if (canonicalLink) canonicalLink.setAttribute("href", activeFullUrl);
      if (ogUrlMeta) ogUrlMeta.setAttribute("content", activeFullUrl);
      if (twitterUrlMeta) twitterUrlMeta.setAttribute("content", activeFullUrl);

      if (actionRoute.includes("hindi")) {
        setOrderInfo((prev) => ({ ...prev, language: "Hindi" }));
        setCurrentPage("thankyou");
      } else if (actionRoute.includes("english")) {
        setOrderInfo((prev) => ({ ...prev, language: "English" }));
        setCurrentPage("thankyou");
      } else if (actionRoute.includes("thank")) {
        setCurrentPage("thankyou");
      } else if (actionRoute.includes("checkout")) {
        setCurrentPage("checkout");
      } else if (actionRoute.includes("privacy") || actionRoute.includes("tnc") || actionRoute.includes("about") || actionRoute.includes("refund") || actionRoute.includes("disclaimer") || actionRoute.includes("contact") || actionRoute.includes("legal")) {
        setCurrentPage("legal");
        if (actionRoute.includes("tnc")) setActiveLegalDoc("tnc");
        else if (actionRoute.includes("about")) setActiveLegalDoc("about");
        else if (actionRoute.includes("refund")) setActiveLegalDoc("refund");
        else if (actionRoute.includes("disclaimer")) setActiveLegalDoc("disclaimer");
        else if (actionRoute.includes("contact")) setActiveLegalDoc("contact");
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
    // Trigger Meta Facebook Pixel AddToCart Event for the active Pixel ID with route's independent price
    trackPixelEvent("AddToCart", { value: currentPricing.price, currency: "INR" });
    
    // Build target URL path retaining campaign prefix (e.g. /fb1/checkout or /checkout)
    const targetUrl = currentPrefix ? `${currentPrefix}/checkout` : "/checkout";
    
    window.history.pushState({}, "", targetUrl);
    setCurrentPage("checkout");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavigateLegal = (docKey = "privacy") => {
    setActiveLegalDoc(docKey);
    const targetPath = currentPrefix ? `${currentPrefix}/${docKey}` : `/${docKey}`;
    window.history.pushState({}, "", targetPath);
    setCurrentPage("legal");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackToLanding = () => {
    const targetPath = currentPrefix ? currentPrefix : "/";
    window.history.pushState({}, "", targetPath);
    setCurrentPage("landing");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePaymentSuccess = (data) => {
    const selectedLang = data.language || "English";
    const defaultTag = (isFb1 || currentPrefix === "/fb1") ? "VW-FB1-" : "VW-FB-";
    const newOrder = {
      language: selectedLang,
      fullName: data.fullName || "",
      phone: data.phone || "",
      email: data.email || "",
      paymentId: data.paymentId || "",
      uniqueCustomerId: data.uniqueCustomerId || (defaultTag + Math.floor(10000000 + Math.random() * 90000000))
    };
    setOrderInfo(newOrder);

    try {
      localStorage.setItem("vastu_order_info", JSON.stringify(newOrder));
    } catch {}

    const langSlug = selectedLang === "Hindi" ? "thankyou-hindi" : "thankyou-english";
    const targetUrl = currentPrefix ? `${currentPrefix}/${langSlug}` : `/${langSlug}`;

    window.history.pushState({}, "", targetUrl);
    setCurrentPage("thankyou");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (currentPage === "checkout") {
    return (
      <ReportForm 
        onBack={handleBackToLanding} 
        onPaymentSuccess={handlePaymentSuccess} 
        price={currentPricing.price}
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
          const targetPath = currentPrefix ? `${currentPrefix}/${docKey}` : `/${docKey}`;
          window.history.pushState({}, "", targetPath);
        }}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#fffbf7] text-slate-900 font-sora flex flex-col selection:bg-orange-500 selection:text-white">
      
      {/* 1. Brand Header Only */}
      <Header onNavigateCheckout={handleNavigateCheckout} onBackToHome={handleBackToLanding} />

      {/* 2. Main Streamlined Landing Flow (Shared components with independent prices) */}
      <main className="flex-1 space-y-0">
        
        {/* Hero Section */}
        <Hero 
          onNavigateCheckout={handleNavigateCheckout} 
          onBackToHome={handleBackToLanding} 
          price={currentPricing.price}
          originalPrice={currentPricing.originalPrice}
        />

        {/* Section 2 Below Hero: Sahi Vastu Science Report Paane Ke Fayde */}
        <ReportBenefits 
          onNavigateCheckout={handleNavigateCheckout} 
          price={currentPricing.price}
          originalPrice={currentPricing.originalPrice}
        />

        {/* Section 3 Below ReportBenefits: 2 Exclusive FREE Bonuses */}
        <ExclusiveBonuses 
          onNavigateCheckout={handleNavigateCheckout} 
        />

        {/* Section 4: What You Get in Vastu Report (Value Stack) */}
        <ReportValueStack 
          onNavigateCheckout={handleNavigateCheckout} 
          price={currentPricing.price}
          originalPrice={currentPricing.originalPrice}
        />

        {/* Section 5A: Customer Video Feedback Testimonials */}
        <VideoTestimonials 
          onNavigateCheckout={handleNavigateCheckout} 
        />

        {/* Section 5B: Verified Customer Success Stories & Reviews (Trusted By Over 60,000+ Indian Families) */}
        <Transparency />

        {/* Section 6: Frequently Asked Questions */}
        <FAQ />

      </main>

      {/* Sticky Mobile Bottom Offer Bar */}
      <StickyCTA 
        onNavigateCheckout={handleNavigateCheckout} 
        price={currentPricing.price}
        originalPrice={currentPricing.originalPrice}
      />

      {/* Brand Footer */}
      <Footer onNavigateLegal={handleNavigateLegal} onBackToHome={handleBackToLanding} />

    </div>
  );
}
