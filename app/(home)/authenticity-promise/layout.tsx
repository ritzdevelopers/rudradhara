import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Authenticity Promise | 100% Genuine Rudraksha Beads – Rudhradhara Mauritius",
    description: "Learn about Rudhradhara's authenticity promise with certified genuine rudraksha beads, verified sourcing, and trusted quality assurance in Mauritius.",
    keywords: [
        "authentic rudraksha beads",
        "certified rudraksha Mauritius",
        "genuine rudraksha",
        "rudraksha authenticity",
        "real rudraksha verification",
        "original rudraksha mala",
        "trusted rudraksha store"
    ],
    authors: [{ name: "Rudradhara" }],
    creator: "Rudradhara",
    publisher: "Rudradhara",
    openGraph: {
        title: "Authenticity Promise | 100% Genuine Rudraksha Beads – Rudhradhara Mauritius",
        description: "Learn about Rudhradhara's authenticity promise with certified genuine rudraksha beads, verified sourcing, and trusted quality assurance in Mauritius.",
        type: "website",
        locale: "en_US",
        siteName: "Rudradhara",
        alternateLocale: "en_GB",
    },
    twitter: {
        card: "summary_large_image",
        title: "Authenticity Promise | 100% Genuine Rudraksha Beads – Rudhradhara Mauritius",
        description: "Learn about Rudhradhara's authenticity promise with certified genuine rudraksha beads, verified sourcing, and trusted quality assurance in Mauritius.",
    },
    alternates: {
        canonical: "/authenticity-promise",
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

export default function AuthenticityPromiseLayout({ children }: { children: React.ReactNode }) {
    return (
        <>{children}</>
    )
}