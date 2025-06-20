import Script from 'next/script';

export default function LinkedInInsightTag() {
  return (
    <>
      {/* LinkedIn Insight Tag Scripts */}
      <Script 
        id="linkedin-insight-init"
        strategy="afterInteractive"
      >
        {`
          _linkedin_partner_id = "7269180";
          window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
          window._linkedin_data_partner_ids.push(_linkedin_partner_id);
        `}
      </Script>
      <Script 
        id="linkedin-insight-tracker"
        strategy="afterInteractive"
      >
        {`
          (function(l) {
            if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
            window.lintrk.q=[]}
            var s = document.getElementsByTagName("script")[0];
            var b = document.createElement("script");
            b.type = "text/javascript";b.async = true;
            b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
            s.parentNode.insertBefore(b, s);
          })(window.lintrk);
        `}
      </Script>
      
      {/* LinkedIn Insight Tag - Noscript fallback */}
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img height="1" width="1" style={{display:'none'}} alt="" src="https://px.ads.linkedin.com/collect/?pid=7269180&fmt=gif" />
      </noscript>
    </>
  );
} 