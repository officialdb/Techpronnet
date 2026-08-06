import type { Metadata } from 'next';
import { Space_Grotesk, Inter, Manrope } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import TopBar from '@/components/layout/TopBar';
import AOSInit from '@/components/AOSInit';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: {
    default: 'Techpronnet Technologies | Your General Tech Solution Providers',
    template: '%s | Techpronnet Technologies'
  },
  description: 'Enterprise technology solutions spanning Software Development, Security CCTV & Access Control, Solar & Renewable Energy, Networking Infrastructure, and Managed IT Support.',
  keywords: ['Techpronnet', 'Software Development', 'Solar Panel Installation', 'CCTV Security Systems', 'Office Networking', 'IT Support', 'Tech Solutions'],
  authors: [{ name: 'Techpronnet Technologies' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://techpronnet.com',
    siteName: 'Techpronnet Technologies',
    title: 'Techpronnet Technologies | Your General Tech Solution Providers',
    description: 'Custom Software, Solar Energy, CCTV Security, Enterprise Networking & Managed IT Support.',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, alt: 'Techpronnet Technologies' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Techpronnet Technologies',
    description: 'Your General Tech Solution Providers',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} ${manrope.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          integrity="sha512-SfTiTlX6kk+qitfevl/7LibUOeJWlt9rbyDn92a1DqWOw9vWG2MFoays0sgObmWazO5BQPiFucnnEAjpAB+/Sw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col justify-between">
        <AOSInit />
        <div>
          <TopBar />
          <Navbar />
          <main>{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
