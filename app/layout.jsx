import './globals.css';
// REMOVED /src from the paths below
import Navbar from '@/components/navbar/Navbar'; 
import Footer from '@/components/footer/Footer'; 

export const metadata = {
  title: 'Padmavati Hospital',
  description: 'Hospital website',
  icons: {
    icon: '/favicon.png',   // 👈 hospital icon
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4L1jzE6hJ+W+qk1eR9E6w=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>

      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}