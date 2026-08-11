/**
 * ====================================================================
 * VASTUWHEELS - UTM TRACKING PARAMETERS HELPER UTILITY
 * ====================================================================
 * Automatically captures all ad campaign UTM parameters from URL query string
 * and stores them in sessionStorage so they persist across checkout navigation.
 */

const ALL_UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "utm_id",
  "utm_source_platform",
  "utm_creative_format",
  "utm_marketing_tactic"
];

// Capture UTM params from window.location.search and save into sessionStorage
export function captureUtmParams() {
  try {
    if (typeof window === "undefined") return {};
    
    const searchParams = new URLSearchParams(window.location.search);
    const captured = {};
    let foundAny = false;

    ALL_UTM_KEYS.forEach((key) => {
      const val = searchParams.get(key);
      if (val) {
        captured[key] = val;
        foundAny = true;
      }
    });

    // If new UTM parameters exist in current URL, update sessionStorage
    if (foundAny) {
      sessionStorage.setItem("vastu_utm_params", JSON.stringify(captured));
      return captured;
    }

    // Otherwise, retrieve previously stored UTM parameters from sessionStorage
    const stored = sessionStorage.getItem("vastu_utm_params");
    return stored ? JSON.parse(stored) : {};
  } catch (err) {
    console.error("UTM Capture Error:", err);
    return {};
  }
}

// Get clean individual UTM params for Razorpay Notes & Webhooks
export function getUtmParamsForNotes() {
  const params = captureUtmParams();
  
  return {
    utm_source: params.utm_source || "organic / none",
    utm_medium: params.utm_medium || "organic / none",
    utm_campaign: params.utm_campaign || "organic / none",
    utm_term: params.utm_term || "organic / none",
    utm_content: params.utm_content || "organic / none",
    utm_id: params.utm_id || "organic / none",
    utm_platform: params.utm_platform || params.utm_source_platform || "organic / none",
    utm_creative_format: params.utm_creative_format || "organic / none",
    utm_marketing_tactic: params.utm_marketing_tactic || "organic / none"
  };
}
