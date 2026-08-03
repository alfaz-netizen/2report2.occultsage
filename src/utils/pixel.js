// Safe Meta Facebook Pixel Helper (Pixel ID: 784709589609056)
export const trackPixelEvent = (eventName, params = {}, isCustom = false) => {
  if (typeof window !== "undefined" && window.fbq) {
    try {
      if (isCustom) {
        window.fbq("trackCustom", eventName, params);
        console.log(`[FB Pixel Custom Event] ${eventName}:`, params);
      } else {
        window.fbq("track", eventName, params);
        console.log(`[FB Pixel Standard Event] ${eventName}:`, params);
      }
    } catch (err) {
      console.warn("FB Pixel Error:", err);
    }
  }
};
