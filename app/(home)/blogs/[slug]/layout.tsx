import BlogLayout from "@/components/blogs/BlogLayout";
import Banner from "@/components/global/Banner";
import S2 from "@/components/blogs/sections/S2";
import blogsData from "@/blogs_data.json";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const blog = blogsData.find((blog) => blog.slug === slug);
    
    if (!blog) {
        return {
            title: "Blog Not Found",
        };
    }

    return {
        title: blog.meta_title || blog.title,
        description: blog.meta_description || "",
        keywords: blog.meta_keywords || [],
        authors: [{ name: "Rudradhara" }],
        creator: "Rudradhara",
        publisher: "Rudradhara",
        openGraph: {
            title: blog.meta_title || blog.title,
            description: blog.meta_description || "",
            type: "article",
            locale: "en_US",
            siteName: "Rudradhara",
            alternateLocale: "en_GB",
        },
        twitter: {
            card: "summary_large_image",
            title: blog.meta_title || blog.title,
            description: blog.meta_description || "",
        },
        alternates: {
            canonical: `/blogs/${slug}`,
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
}

export default async function BlogInnerLayout({ children, params }: { children: React.ReactNode, params: Promise<{ slug: string }> }) {

    const { slug } = await params;
    const blog = blogsData.find((blog) => blog.slug === slug);
    if (!blog) {
        notFound();
    }

    return (
        <main className="md:mt-[140px] mt-[110px] w-full">
            <Banner desktopImgPath={blog.desktop_banner || ""} mobileImgPath={blog.mobile_banner || ""} title={blog.title} />
            <BlogLayout>{children}</BlogLayout>
            <S2 heading="Not sure where to begin? " para="Start with Rudraksha Basics, then explore by purpose, daily wear, japa, or comfort."/>
        </main>
    )
}