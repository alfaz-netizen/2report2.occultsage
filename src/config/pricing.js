/**
 * ====================================================================
 * VASTUWHEELS - INDEPENDENT LANDING PAGE & TOPOP PRICING CONFIGURATION
 * ====================================================================
 * Edit prices for each landing page & Thank You Topop Popup independently below!
 * Changing the price for FB1 (/fb1) will NOT affect the Main page (/), and vice versa.
 */

export const CAMPAIGN_PRICING = {
  // 1. Default Main Landing Page (https://report.globalinch.com/)
  main: {
    price: 1499,         // Offer Price in ₹
    originalPrice: 5999, // Strikethrough Price in ₹
    // Thank You Topop Upgrade Popup Pricing for Main Page (/)
    topop: {
      originalPrice: 4999,   // Strikethrough price in Topop (e.g. ₹4,999)
      initialPrice: 1999,    // Initial upgrade price in Topop before discount (e.g. ₹1,999)
      discountedPrice: 1799, // Final upgrade price after claiming 10% discount (e.g. ₹1,799)
    }
  },

  // 2. Dedicated FB1 Campaign Landing Page (https://report.globalinch.com/fb1)
  fb1: {
    price: 1499,         // Offer Price in ₹ (Edit here independently!)
    originalPrice: 5999, // Strikethrough Price in ₹
    // Thank You Topop Upgrade Popup Pricing for FB1 Page (/fb1)
    topop: {
      originalPrice: 4999,   // Strikethrough price in Topop for FB1 (Edit independently!)
      initialPrice: 1999,    // Initial upgrade price in Topop for FB1
      discountedPrice: 1799, // Final upgrade price after claiming 10% discount for FB1
    }
  }
};

/**
 * Helper function to retrieve the exact pricing object for the current URL path.
 * @param {string} pathname - e.g. "/", "/fb1", "/fb1/checkout", "/fb1/thankyou-hindi/topop", etc.
 * @returns {{ price: number, originalPrice: number, topop: { originalPrice: number, initialPrice: number, discountedPrice: number } }}
 */
export function getPricingForRoute(pathname = "") {
  if (typeof window !== "undefined" && !pathname) {
    pathname = window.location.pathname;
  }
  const cleanPath = (pathname || "").toLowerCase();

  // If user is on /fb1 or any /fb1/* route, return FB1 pricing
  if (cleanPath.includes("/fb1")) {
    return CAMPAIGN_PRICING.fb1;
  }

  // Default to Main Landing Page pricing
  return CAMPAIGN_PRICING.main;
}
