import './globals.css';
import Script from 'next/script';
// REMOVED /src from the paths below
import Navbar from '@/components/navbar/Navbar'; 
import Footer from '@/components/footer/Footer'; 

export const metadata = {
  title: 'Padmavati Hospital',
  description: 'Hospital website',
  icons: {
    icon: '/favicon.png',   // 👈 use app/favicon.png as favicon
  },
  verification: {
    google: '59bJe5b02qLO_qXKfZQ5AfHFuuC-VvzRo3DGIZ8zcFg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
         {/* ✅ Google Analytics Script */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-9WBPT4T1YW"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-9WBPT4T1YW');
          `}
        </Script>
      </body>
    </html>
  );
}