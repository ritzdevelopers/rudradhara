import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | Rudraksha, Malas & Sacred Items | Rudradhara",
  description: "Explore our gallery of Rudraksha beads, malas, kavach, bracelets, and sacred items. Sourced with care, chosen with clarity. Mauritius' first dedicated Rudraksha store.",
  authors: [{ name: "Rudradhara" }],
  creator: "Rudradhara",
  publisher: "Rudradhara",
  openGraph: {
    title: "Gallery | Rudraksha, Malas & Sacred Items | Rudradhara",
    description: "Explore authentic Rudraksha beads, malas, kavach, bracelets, and sacred items. Sourced with care, chosen with clarity.",
    type: "website",
    locale: "en_US",
    siteName: "Rudradhara",
    alternateLocale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gallery | Rudraksha, Malas & Sacred Items | Rudradhara",
    description: "Explore authentic Rudraksha beads, malas, kavach, bracelets, and sacred items. Sourced with care, chosen with clarity.",
  },
  alternates: {
    canonical: "/gallery",
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
