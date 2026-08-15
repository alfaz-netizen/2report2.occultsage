// Centralized Meta Facebook Pixel Manager with Idempotent Deduplication
// Main Landing Page (/) Pixel ID: 1032914616258314
// Dedicated FB1 Campaign (/fb1) Pixel ID: 2606867239768678

const PIXELS = {
  MAIN: "1032914616258314",
  FB1: "2606867239768678",
};

let pixelScriptInjected = false;
const initializedPixels = new Set();
let pageViewFiredForRoute = "";

export const getActivePixelId = (customerTag = "") => {
  if (typeof window !== "undefined") {
    const rawPath = window.location.pathname.toLowerCase();
    // Dedicated Google Ads campaign route (/ga) does NOT use Meta Facebook Pixel
    if (rawPath.includes("ga") || (customerTag && customerTag.includes("GA"))) {
      return null;
    }
    if (rawPath.includes("fb1") || (customerTag && customerTag.includes("FB1"))) {
      return PIXELS.FB1;
    }
  }
  return PIXELS.MAIN;
};

export const initFb1Pixel = () => {
  initMetaPixel(PIXELS.FB1);
};

export const initMetaPixel = (targetPixelId = null) => {
  if (typeof window === "undefined") return;
  const pixelId = targetPixelId || getActivePixelId();
  if (!pixelId) return; // Skip Meta Pixel for Google Ads /ga routes

  // Inject fbevents.js script tag dynamically ONCE
  if (!pixelScriptInjected && !window.fbq) {
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    pixelScriptInjected = true;
  }

  // Initialize specific pixel ID ONCE
  if (window.fbq && !initializedPixels.has(pixelId)) {
    try {
      const state = typeof window.fbq.getState === "function" ? window.fbq.getState() : null;
      if (state && state.pixels && Array.isArray(state.pixels) && state.pixels.some((p) => p.id === pixelId)) {
        initializedPixels.add(pixelId);
        return;
      }
    } catch (e) {}

    window.fbq("init", pixelId);
    initializedPixels.add(pixelId);
    console.log(`[FB Pixel] Initialized Pixel ID: ${pixelId}`);
  }
};

export const trackPageView = () => {
  if (typeof window === "undefined") return;
  const currentPath = window.location.pathname.toLowerCase();

  // Skip Meta Pixel PageView for Google Ads campaign route (/ga)
  if (currentPath.includes("ga")) return;

  // On initial page load, static HTML head snippet already fires PageView for root landing routes
  if (!pageViewFiredForRoute && (currentPath === "/" || currentPath === "/fb1" || currentPath === "/fb1/")) {
    pageViewFiredForRoute = currentPath;
    return;
  }

  // Strict Deduplication Guard: Prevent firing PageView multiple times on the same route
  if (pageViewFiredForRoute === currentPath) return;
  pageViewFiredForRoute = currentPath;

  const activePixelId = getActivePixelId();
  if (!activePixelId) return;

  initMetaPixel(activePixelId);

  if (window.fbq) {
    window.fbq("trackSingle", activePixelId, "PageView");
    console.log(`[FB Pixel] Fired Single PageView for ${activePixelId} on ${currentPath}`);
  }
};

export const trackPixelEvent = (eventName, params = {}, isCustom = false, overridePixelId = null) => {
  if (typeof window !== "undefined") {
    try {
      const activePixelId = overridePixelId || getActivePixelId();
      if (!activePixelId) return; // Skip Meta Pixel events on /ga routes

      initMetaPixel(activePixelId);

      if (window.fbq) {
        if (isCustom) {
          window.fbq("trackSingleCustom", activePixelId, eventName, params);
          console.log(`[FB Pixel Custom Event ${activePixelId}] ${eventName}:`, params);
        } else {
          window.fbq("trackSingle", activePixelId, eventName, params);
          console.log(`[FB Pixel Standard Event ${activePixelId}] ${eventName}:`, params);
        }
      }
    } catch (err) {
      console.warn("FB Pixel Error:", err);
    }
  }
};
