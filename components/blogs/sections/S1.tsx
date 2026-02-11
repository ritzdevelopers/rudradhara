import BlogsCard from "../cards/BlogsCard";

function S1() {

    const blogsData = [
        {
            imgPath: "/blogs/outer/LeftSide/blogs/rb1.jpg",
            title: "What It Is, How Mukhi Works, and How to Choose...",
            date: "February 24, 2026",
            slug: "what-it-is-how-mukhi-works-and-how-to-choose",
            para: "If you’ve ever seen someone wearing a Rudraksha and wondered what it really means..."
        },
        {
            imgPath: "/blogs/outer/LeftSide/blogs/rb2.jpg",
            title: "Indonesian Rudraksha vs Nepal Rudraksha: Which Is...",
            date: "February 24, 2026",
            slug: "indonesian-rudraksha-vs-nepal-rudraksha-which-is-better",
            para: "For ages, Rudraksha beads have been worn by saints, yogis, and those on a spiritual..."
        },
        {
            imgPath: "/blogs/outer/LeftSide/blogs/rb3.jpg",
            title: "Rudraksha Malas: Benefits, How to Wear & Care Tips...",
            date: "February 24, 2026",
            slug: "rudraksha-malas-benefits-how-to-wear-and-care-tips",
            para: "Rudraksha Malas are not just spiritual accessories, but rather sacred energizing tools..."
        },
        {
            imgPath: "/blogs/outer/LeftSide/blogs/rb4.jpg",
            title: "What It Is, How Mukhi Works, and How to Choose...",
            date: "February 24, 2026",
            slug: "what-it-is-how-mukhi-works-and-how-to-choose",
            para: "If you’ve ever seen someone wearing a Rudraksha and wondered what it really means..."
        },
        {
            imgPath: "/blogs/outer/LeftSide/blogs/rb5.jpg",
            title: "Indonesian Rudraksha vs Nepal Rudraksha: Which Is...",
            date: "February 24, 2026",
            slug: "indonesian-rudraksha-vs-nepal-rudraksha-which-is-better",
            para: "For ages, Rudraksha beads have been worn by saints, yogis, and those on a spiritual..."
        },
        {
            imgPath: "/blogs/outer/LeftSide/blogs/rb3.jpg",
            title: "Rudraksha Malas: Benefits, How to Wear & Care Tips...",
            date: "February 24, 2026",
            slug: "rudraksha-malas-benefits-how-to-wear-and-care-tips",
            para: "Rudraksha Malas are not just spiritual accessories, but rather sacred energizing tools..."
        },
    ]
    return (
        <section className="w-full flex flex-col gap-8">
            {
                blogsData.map((blog, index) => (
                    <BlogsCard key={index} {...blog} />
                ))
            }
        </section>
    )
}
export default S1;