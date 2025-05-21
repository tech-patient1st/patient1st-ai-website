'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import Script from 'next/script';
import { useEffect } from 'react';

interface WindowWithDataLayer extends Window {
  dataLayer: Array<Record<string, unknown>>;
}

declare const window: WindowWithDataLayer;

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

export function pageview(url: string) {
  if (typeof window.dataLayer !== 'undefined') {
    window.dataLayer.push({
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

  useEffect(() => {
    if (pathname && GTM_ID) {
      // Combine pathname and searchParams to form the full URL path
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