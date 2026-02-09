import './globals.css';
// REMOVED /src from the paths below
import Script from 'next/script';
import Navbar from '@/components/navbar/Navbar'; 
import Footer from '@/components/footer/Footer'; 

export const metadata = {
  title: 'Padmavati Hospital',
  description: 'Hospital website',
  icons: {
    icon: '/favicon.png',   // 👈 use app/favicon.png as favicon
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4L1jzE6hJ+W+qk1eR9E6w=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
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
      </head>

      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}