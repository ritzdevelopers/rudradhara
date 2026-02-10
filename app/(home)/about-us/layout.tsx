import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Rudradhara | Mauritius' First Dedicated Rudraksha Store",
  description: "Rudradhara is Mauritius' first dedicated Rudraksha store, created to bring clarity, authenticity, and correct understanding of Rudraksha through education-first practices.",
  keywords: [
    "first Rudraksha store in Mauritius",
    "Rudradhara Mauritius",
    "authentic Rudraksha seller Mauritius",
    "Rudraksha experts Mauritius",
    "genuine Rudraksha shop",
    "Rudraksha guidance Mauritius",
    "Rudradhara story",
    "about Rudradhara",
    "Rudraksha store Mauritius",
    "authentic Rudraksha"
  ],
  authors: [{ name: "Rudradhara" }],
  creator: "Rudradhara",
  publisher: "Rudradhara",
  openGraph: {
    title: "About Rudradhara | Mauritius' First Dedicated Rudraksha Store",
    description: "Rudradhara is Mauritius' first dedicated Rudraksha store, created to bring clarity, authenticity, and correct understanding of Rudraksha through education-first practices.",
    type: "website",
    locale: "en_US",
    siteName: "Rudradhara",
    alternateLocale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Rudradhara | Mauritius' First Dedicated Rudraksha Store",
    description: "Rudradhara is Mauritius' first dedicated Rudraksha store, created to bring clarity, authenticity, and correct understanding of Rudraksha through education-first practices.",
  },
  alternates: {
    canonical: "/about-us",
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

export default function AboutUsLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>
}