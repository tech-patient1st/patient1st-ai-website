'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import Script from 'next/script';
import { useEffect } from 'react';

// Local Klaro type definitions removed as global.d.ts should handle Window.klaro
/*
interface KlaroConfig {
  [key: string]: any;
}
interface KlaroInstance {
  setup: (config: KlaroConfig) => void;
  show: (config?: KlaroConfig, modal?: boolean) => void;
}
*/

// WindowWithDataLayer interface and local window declaration removed.
// Relying on the globally augmented Window type from src/types/global.d.ts
/*
interface WindowWithDataLayer extends Window {
  dataLayer: Array<Record<string, any> | any[]>;
  klaro?: KlaroInstance;
}
declare const window: WindowWithDataLayer;
*/

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

// gtag function is likely not needed here anymore if not setting default consent.
// If you have other uses for a gtag shim, keep it, otherwise it can be removed.
/*
function gtag(command: 'consent', action: 'default' | 'update', parameters: Record<string, string | number | boolean | undefined>): void;
function gtag(...args: unknown[]): void;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function gtag(...args: any[]) { 
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(args); 
  }
}
*/

export function pageview(url: string) {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'pageview',
      page: url,
    });
  } else {
    console.log('GTM dataLayer not found. Pageview event:', {
      event: 'pageview',
      page: url,
    });
  }
}

export default function GoogleTagManager() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Default consent gtag call REMOVED
  /*
  gtag('consent', 'default', {
    'ad_storage': 'denied',
    'analytics_storage': 'denied',
    'functionality_storage': 'denied',
    'personalization_storage': 'denied',
    'security_storage': 'granted',
    'wait_for_update': 500
  });
  */

  useEffect(() => {
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