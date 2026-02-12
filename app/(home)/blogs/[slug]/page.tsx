import BlogDetails from "@/components/blogs/sections/inner/BlogDetails";
import blogsData from "@/blogs_data.json";
import { notFound } from "next/navigation";


async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const blog = blogsData.find((blog) => blog.slug === slug);
   
    if (!blog) {
        return notFound();
    }
    return (
        <>
            <BlogDetails blog={blog} />
        </>
    )
}
export default Page;