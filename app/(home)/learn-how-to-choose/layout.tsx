import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Learn How to Choose Rudraksha | Rudradhara Guide",
  description: "Learn how to choose the right Rudraksha for yourself. A comprehensive guide on mukhi selection, authenticity verification, sizing, and proper care from Mauritius' first Rudraksha experts.",
  keywords: [
    "how to choose Rudraksha",
    "Rudraksha selection guide",
    "Rudraksha mukhi guide",
    "authentic Rudraksha identification",
    "Rudraksha buying guide",
    "Rudraksha for beginners",
    "Rudraksha care tips",
    "Rudradhara learning guide",
    "Rudraksha authenticity check",
    "choose right Rudraksha"
  ],
  authors: [{ name: "Rudradhara" }],
  creator: "Rudradhara",
  publisher: "Rudradhara",
  openGraph: {
    title: "Learn How to Choose Rudraksha | Rudradhara Guide",
    description: "Learn how to choose the right Rudraksha for yourself. A comprehensive guide on mukhi selection, authenticity verification, sizing, and proper care from Mauritius' first Rudraksha experts.",
    type: "website",
    locale: "en_US",
    siteName: "Rudradhara",
    alternateLocale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Learn How to Choose Rudraksha | Rudradhara Guide",
    description: "Learn how to choose the right Rudraksha for yourself. A comprehensive guide on mukhi selection, authenticity verification, sizing, and proper care.",
  },
  alternates: {
    canonical: "/learn-how-to-choose",
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

export default function LearnHowToChooseLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>
}
