import BlogLayout from "@/components/blogs/BlogLayout";
import Banner from "@/components/global/Banner";
import S2 from "@/components/blogs/sections/S2";
import blogsData from "@/blogs_data.json";
export default async function BlogInnerLayout({ children, params }: { children: React.ReactNode, params: Promise<{ slug: string }> }) {

    const { slug } = await params;
    const blog = blogsData.find((blog) => blog.slug === slug);
    if (!blog) {
        return <div>Blog not found slug: {slug}</div>;
    }

    return (
        <main className="md:mt-[140px] mt-[110px] w-full">
            <Banner desktopImgPath={blog.desktop_banner || ""} mobileImgPath={blog.mobile_banner || ""} title={blog.title} />
            <BlogLayout>{children}</BlogLayout>
            <S2 heading="Not sure where to begin? " para="Start with Rudraksha Basics, then explore by purpose, daily wear, japa, or comfort."/>
        </main>
    )
}