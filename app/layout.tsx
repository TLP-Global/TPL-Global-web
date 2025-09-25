import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.tplglobal.net/"),
  title: {
    default: "TPL Global | Top U.S. Immigration Consultant for Indians",
    template: "%s | TPL Global",
  },
  description:
    "We help individuals and families worldwide with U.S. visas, green cards, and citizenship. Practical advice. Careful execution. Book a consultation.",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "US immigration for Indians",
    "U.S. visa consultant",
    "immigration lawyer",
    "B-1 B-2 visa",
    "K-1 visa",
    "IR-1 CR-1",
    "family green card",
    "asylum",
    "U visa",
    "T visa",
    "VAWA",
    "SIJ",
    "citizenship N-400",
    "Tejas G. Pate, Esq.l",
    "TPL Global",
  ],
  openGraph: {
    type: "website",
    url: "https://www.tplglobal.net/",
    siteName: "TPL Global",
    title:
      "Clear and effective U.S. immigration strategy | Wherever you are in the world.",
    description:
      "Visas, green cards, and citizenship for individuals and families. Practical advice. Careful execution.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "TPL Global — U.S. Immigration",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TPL Global — U.S. Immigration for Individuals & Families",
    description:
      "Step-by-step help with visas, green cards, and citizenship. Practical advice. Careful execution.",
    images: ["/og/tpl-global-og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;
        j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
        f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-M8PTDHG2');`}
        </Script>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-YN7C1JVPV5"
          strategy="afterInteractive"
        />
        <Script id="ga-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YN7C1JVPV5');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M8PTDHG2"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
