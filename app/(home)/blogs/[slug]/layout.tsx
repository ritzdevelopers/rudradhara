import BlogLayout from "@/components/blogs/BlogLayout";
import Banner from "@/components/global/Banner";
import S2 from "@/components/blogs/sections/S2";

export default function BlogInnerLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className="mt-[140px] ">
            <Banner desktopImgPath="/blogs/outer/LeftSide/blog-outer-banner.jpg" mobileImgPath="/contact/s1/contact-us-mobile-banner.jpg" title="Blogs" />
            <BlogLayout>{children}</BlogLayout>
            <S2 heading="Not sure where to begin? " para="Start with Rudraksha Basics, then explore by purpose, daily wear, japa, or comfort."/>
        </main>
    )
}