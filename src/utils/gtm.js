// Google Tag Manager (GTM) Utility for Google Ads Landing Page (/ga)

export function initGtm(gtmId = import.meta.env.VITE_GTM_ID || "GTM-K5W28G3") {
  if (typeof window === "undefined") return;
  
  window.dataLayer = window.dataLayer || [];
  
  if (window.gtmInitialized) return;
  window.gtmInitialized = true;

  // Push gtm.start event
  window.dataLayer.push({
    'gtm.start': new Date().getTime(),
    event: 'gtm.js'
  });

  // Inject GTM script tag into <head>
  const f = document.getElementsByTagName('script')[0];
  const j = document.createElement('script');
  j.async = true;
  j.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;
  if (f && f.parentNode) {
    f.parentNode.insertBefore(j, f);
  } else {
    document.head.appendChild(j);
  }

  console.log(`[GTM] Initialized Google Tag Manager (${gtmId}) for Google Ads landing page (/ga)`);
}

export function trackGtmEvent(eventName, data = {}) {
  if (typeof window !== "undefined") {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: eventName,
      ...data
    });
    console.log(`[GTM Event] ${eventName}:`, data);
  }
}
