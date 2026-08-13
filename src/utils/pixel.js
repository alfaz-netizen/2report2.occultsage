// Safe Meta Facebook Pixel Helper
// Default FB Pixel ID: 1032914616258314 (Main Landing Page /)
// Dedicated FB1 Landing Page Pixel ID: 2606867239768678 (/fb1)

export const initFb1Pixel = () => {
  if (typeof window !== "undefined" && window.fbq) {
    if (!window.fb1PixelInitialized) {
      window.fbq('init', '2606867239768678');
      window.fb1PixelInitialized = true;
      console.log('[FB Pixel] Initialized FB1 Pixel: 2606867239768678');
    }
  }
};

export const getActivePixelId = () => {
  if (typeof window !== "undefined") {
    const rawPath = window.location.pathname.toLowerCase();
    if (rawPath.includes("/fb1")) {
      return "2606867239768678";
    }
  }
  return "1032914616258314";
};

export const trackPixelEvent = (eventName, params = {}, isCustom = false) => {
  if (typeof window !== "undefined" && window.fbq) {
    try {
      const activePixelId = getActivePixelId();

      // Ensure FB1 pixel is initialized if on /fb1
      if (activePixelId === "2606867239768678") {
        initFb1Pixel();
      }

      if (isCustom) {
        window.fbq("trackSingleCustom", activePixelId, eventName, params);
        console.log(`[FB Pixel Custom Event ${activePixelId}] ${eventName}:`, params);
      } else {
        window.fbq("trackSingle", activePixelId, eventName, params);
        console.log(`[FB Pixel Standard Event ${activePixelId}] ${eventName}:`, params);
      }
    } catch (err) {
      console.warn("FB Pixel Error:", err);
    }
  }
};
