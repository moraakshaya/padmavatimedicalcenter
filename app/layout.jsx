import './globals.css';
// REMOVED /src from the paths below
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
      {/* head content moved to app/head.jsx so that metadata API can
          merge page-specific values. */}

      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}