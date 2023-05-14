import React, { useEffect } from 'react';
import Script from 'next/script';

const GoogleTagManager: React.FC = () => {
  useEffect(() => {
    (window as any).dataLayer = (window as any).dataLayer || [];
    function gtag(config: any) {
      (window as any).dataLayer.push(config);
    }
    gtag({ 'js': new Date() });
    gtag({ 'config': 'G-R0VJVC9SKX' });
  }, []);

  return (
    <>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-R0VJVC9SKX" strategy="afterInteractive" />
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
          (window.dataLayer = window.dataLayer || []).push({
            'gtm.start': new Date().getTime(),
            event: 'gtm.js'
          });
        `}
      </Script>
    </>
  );
};

export default GoogleTagManager;
