import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Products | Rudraksha, Malas & Sacred Items | Rudradhara",
  description: "Explore authentic Rudraksha beads, malas, kavach, bracelets, and sacred items. Sourced with care, chosen with clarity. Mauritius' first dedicated Rudraksha store.",
  keywords: [
    "Rudraksha products",
    "Rudraksha beads",
    "Rudraksha mala",
    "kavach",
    "Rudraksha bracelet",
    "sacred items Mauritius",
    "authentic Rudraksha",
    "Rudradhara products",
    "Rudraksha store",
    "buy Rudraksha",
  ],
  authors: [{ name: "Rudradhara" }],
  creator: "Rudradhara",
  publisher: "Rudradhara",
  openGraph: {
    title: "Our Products | Rudraksha, Malas & Sacred Items | Rudradhara",
    description: "Explore authentic Rudraksha beads, malas, kavach, bracelets, and sacred items. Sourced with care, chosen with clarity.",
    type: "website",
    locale: "en_US",
    siteName: "Rudradhara",
    alternateLocale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Products | Rudraksha, Malas & Sacred Items | Rudradhara",
    description: "Explore authentic Rudraksha beads, malas, kavach, bracelets, and sacred items. Sourced with care, chosen with clarity.",
  },
  alternates: {
    canonical: "/products",
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

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
