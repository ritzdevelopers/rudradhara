import type { Metadata } from "next";
import { Geist, Geist_Mono, Open_Sans, Montserrat, Poppins } from "next/font/google";
import "../../app/globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Buy Original Rudraksha & Spiritual Tools at Mauritius' First Rudraksha Store | Rudradhara",
  description: "Rudradhara is Mauritius' first dedicated Rudraksha selling shop, offering authentic beads with clear guidance on mukhi, origin, sizing, and care. A learning-first, transparent experience.",
  keywords: [
    "Mauritius Rudraksha store",
    "first Rudraksha shop in Mauritius",
    "authentic Rudraksha Mauritius",
    "Rudraksha selling shop Mauritius",
    "genuine Rudraksha beads Mauritius",
    "Rudraksha store Port Louis",
    "Rudradhara",
    "Rudraksha beads",
    "authentic Rudraksha",
    "Rudraksha shop",
    "Rudraksha",
    "shiv rudraksha",
    "spiritual store mauritius",
    "shivling set"
  ],
  authors: [{ name: "Rudradhara" }],
  creator: "Rudradhara",
  publisher: "Rudradhara",
  openGraph: {
    title: "Buy Original Rudraksha & Spiritual Tools at Mauritius' First Rudraksha Store | Rudradhara",
    description: "Rudradhara is Mauritius' first dedicated Rudraksha selling shop, offering authentic beads with clear guidance on mukhi, origin, sizing, and care. A learning-first, transparent experience.",
    type: "website",
    locale: "en_US",
    siteName: "Rudradhara",
    alternateLocale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Buy Original Rudraksha & Spiritual Tools at Mauritius' First Rudraksha Store | Rudradhara",
    description: "Rudradhara is Mauritius' first dedicated Rudraksha selling shop, offering authentic beads with clear guidance on mukhi, origin, sizing, and care.",
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden w-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${openSans.variable} ${montserrat.variable} ${poppins.variable} antialiased overflow-x-hidden w-full`}
        suppressHydrationWarning
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
