// src/lib/analytics.ts
type EventPayload = Record<string, string | number | boolean | null | undefined>;

// Conflicting Window.dataLayer declaration removed - now handled by src/types/global.d.ts
/*
declare global {
  interface Window {
    dataLayer: Array<{
      event?: string;
      event_name?: string;
      [key: string]: unknown;
    }>;
  }
}
*/

export const trackWebEvent = (name: string, params: EventPayload = {}) => {
  // Initialise the dataLayer if GTM hasn't created it yet
  // window.dataLayer is now globally typed
  window.dataLayer = window.dataLayer || [];

  window.dataLayer.push({
    event: 'custom_event',     // <<< GTM listens for this
    event_name: name,          // <<< your semantic name
    ...params,                 // <<< any extra dimensions
  });
};

// Legacy function for backward compatibility
export const pageview = (url: string) => {
  // window.dataLayer is now globally typed
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'pageview',
    page_path: url,
  });
};

// Legacy constant for backward compatibility
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-QX6K4Q4QQT';