import Script from 'next/script';

export default function Head() {
  return (
    <>
      {/* site verification & favicons, pulled out of the layout to let Next insert
          metadata automatically */}
      <meta
        name="google-site-verification"
        content="59bJe5b02qLO_qXKfZQ5AfHFuuC-VvzRo3DGIZ8zcFg"
      />
      <link rel="icon" type="image/png" href="/favicon.png" />
      <link rel="shortcut icon" href="/favicon.ico" />

      {/* font‑awesome stylesheet */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4L1jzE6hJ+W+qk1eR9E6w=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />

      {/* Google Analytics via next/script; head.jsx is a server component so Script
          components will render correctly. */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-9WBPT4T1YW"
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);} 
        gtag('js', new Date());
        gtag('config', 'G-9WBPT4T1YW');`}
      </Script>
    </>
  );
}
