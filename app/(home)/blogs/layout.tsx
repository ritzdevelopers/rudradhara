import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Rudradhara Knowledge Hub | Rudraksha Knowledge & Authenticity",
    description: "Dive into a wealth of spiritual wisdom. Rudradhara combines education and authenticity, helping Mauritius choose original Rudraksha beads with clarity, trust, and expert support.",
    keywords: [
        "rudraksha knowledge",
        "authentic rudraksha guide",
        "mukhi rudraksha",
        "rudradhara blog",
        "spiritual education mauritius",
        "rudradhara mauritius",
        "trusted rudraksha store",
        "original rudraksha beads",
        "mauritius spiritual shop",
        "rudraksha authenticity"
    ],
    authors: [{ name: "Rudradhara" }],
    creator: "Rudradhara",
    publisher: "Rudradhara",
    openGraph: {
        title: "Rudradhara Knowledge Hub | Rudraksha Knowledge & Authenticity",
        description: "Dive into a wealth of spiritual wisdom. Rudradhara combines education and authenticity, helping Mauritius choose original Rudraksha beads with clarity, trust, and expert support.",
        type: "website",
        locale: "en_US",
        siteName: "Rudradhara",
        alternateLocale: "en_GB",
    },
    twitter: {
        card: "summary_large_image",
        title: "Rudradhara Knowledge Hub | Rudraksha Knowledge & Authenticity",
        description: "Dive into a wealth of spiritual wisdom. Rudradhara combines education and authenticity, helping Mauritius choose original Rudraksha beads with clarity, trust, and expert support.",
    },
    alternates: {
        canonical: "/blogs",
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

export default function BlogsLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            {children}
        </>
    )
}