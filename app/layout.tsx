import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.tplglobal.net/'), 
  title: {
    default: 'TPL Global | Top U.S. Immigration Consultant for Indians',
    template: '%s | TPL Global',
  },
  description:
    'We help individuals and families worldwide with U.S. visas, green cards, and citizenship. Practical advice. Careful execution. Book a consultation.',
  alternates: {
    canonical: '/',
  },
  keywords: [
    'US immigration for Indians',
    'U.S. visa consultant',
    'immigration lawyer',
    'B-1 B-2 visa',
    'K-1 visa',
    'IR-1 CR-1',
    'family green card',
    'asylum',
    'U visa',
    'T visa',
    'VAWA',
    'SIJ',
    'citizenship N-400',
    'Tejas G. Pate, Esq.l',
    'TPL Global',
  ],
  openGraph: {
    type: 'website',
    url: 'https://www.tplglobal.net/',
    siteName: 'TPL Global',
    title: 'Clear and effective U.S. immigration strategy | Wherever you are in the world.',
    description:
      'Visas, green cards, and citizenship for individuals and families. Practical advice. Careful execution.',
    images: [
      {
        url: '/logo.png', 
        width: 1200,
        height: 630,
        alt: 'TPL Global — U.S. Immigration',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TPL Global — U.S. Immigration for Individuals & Families',
    description:
      'Step-by-step help with visas, green cards, and citizenship. Practical advice. Careful execution.',
    images: ['/og/tpl-global-og.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}


