import BlogDetails from "@/components/blogs/sections/inner/BlogDetails";
import blogsData from "@/blogs_data.json";



async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const blog = blogsData.find((blog) => blog.slug === slug);
    console.log('params', slug);
    if (!blog) {
        return <div>Blog not found slug: {slug}</div>;
    }
    return (
        <>
            <BlogDetails blog={blog} />
        </>
    )
}
export default Page;