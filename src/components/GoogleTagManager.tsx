'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import Script from 'next/script';
import { useEffect } from 'react';

interface KlaroConfig {
  // Define a basic structure for Klaro config if known, otherwise use 'any'
  [key: string]: any;
}
interface KlaroInstance {
  setup: (config: KlaroConfig) => void;
  show: (config?: KlaroConfig, modal?: boolean) => void;
}

interface WindowWithDataLayer extends Window {
  dataLayer: Array<Record<string, any> | any[]>; // Allow objects or arrays for dataLayer items
  klaro?: KlaroInstance;
}

declare const window: WindowWithDataLayer;

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

// Simplified gtag function for pushing consent and other commands
function gtag(...args: any[]) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(args); // Push the arguments array directly
}

export function pageview(url: string) {
  if (typeof window.dataLayer !== 'undefined') {
    window.dataLayer.push({ // This is a standard dataLayer event object
      event: 'pageview',
      page: url,
    });
  } else {
    // Fallback for environments where dataLayer might not be initialized yet
    // or if GTM script failed to load.
    console.log('GTM dataLayer not found. Pageview event:', {
      event: 'pageview',
      page: url,
    });
  }
}

export default function GoogleTagManager() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Set default consent state *before* GTM script is even requested.
  // GTM will read this when it initializes.
  gtag('consent', 'default', {
    'ad_storage': 'denied',
    'analytics_storage': 'denied',
    'functionality_storage': 'denied', 
    'personalization_storage': 'denied',
    'security_storage': 'granted', 
    'wait_for_update': 500 
  });

  useEffect(() => {
    // Pageview tracking logic remains, it will fire after GTM is loaded
    // and if analytics_storage is granted.
    if (pathname && GTM_ID) {
      const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : "");
      pageview(url);
    }
  }, [pathname, searchParams]);

  if (!GTM_ID) {
    console.warn("Google Tag Manager ID (NEXT_PUBLIC_GTM_ID) is missing. GTM will not be initialized.");
    return null;
  }

  return (
    <>
      {/* GTM script is loaded after default consent is set */}
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','${GTM_ID}');
  `,
        }}
      />
      {/* GTM NoScript fallback */}
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
          title="Google Tag Manager noscript fallback"
        />
      </noscript>
    </>
  );
}