import React, { useEffect } from 'react';
import Script from 'next/script';

const GoogleTagManager: React.FC = () => {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'G-R0VJVC9SKX');
  }, []);

  return (
    <>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-R0VJVC9SKX" strategy="afterInteractive" />
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-R0VJVC9SKX');
        `}
      </Script>
    </>
  );
};

export default GoogleTagManager;
