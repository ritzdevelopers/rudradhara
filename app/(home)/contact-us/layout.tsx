import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Rudradhara | Mauritius' First Rudraksha Store Location",
  description: "Visit Mauritius' first Rudraksha selling shop. Rudradhara offers a calm, guided in-store experience with location convenience, expert support, and authentic Rudraksha.",
  keywords: [
    "Rudraksha shop Mauritius location",
    "Rudraksha store near me Mauritius",
    "visit Rudraksha shop Mauritius",
    "Rudradhara store address",
    "Rudraksha shop Port Louis",
    "authentic Rudraksha store visit",
    "contact Rudradhara",
    "Rudraksha store Mauritius",
    "first Rudraksha shop Mauritius",
    "Rudraksha store location"
  ],
  authors: [{ name: "Rudradhara" }],
  creator: "Rudradhara",
  publisher: "Rudradhara",
  openGraph: {
    title: "Contact Rudradhara | Mauritius' First Rudraksha Store Location",
    description: "Visit Mauritius' first Rudraksha selling shop. Rudradhara offers a calm, guided in-store experience with location convenience, expert support, and authentic Rudraksha.",
    type: "website",
    locale: "en_US",
    siteName: "Rudradhara",
    alternateLocale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Rudradhara | Mauritius' First Rudraksha Store Location",
    description: "Visit Mauritius' first Rudraksha selling shop. Rudradhara offers a calm, guided in-store experience with location convenience, expert support, and authentic Rudraksha.",
  },
  alternates: {
    canonical: "/contact-us",
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

export default function ContactLayout({children}: {children: React.ReactNode}) {
    return (
        <>{children}</>
    )
}