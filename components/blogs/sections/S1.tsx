import BlogsCard from "../cards/BlogsCard";

function S1() {

    const blogsData = [
        {
            imgPath: "/blogs/outer/LeftSide/blogs/rb3.jpg",
            title: "What It Is, How Mukhi Works, and How to Choose...",
            date: "February 24, 2026",
            slug: "what-it-is-how-mukhi-works-and-how-to-choose",
            para: "If you’ve ever seen someone wearing a Rudraksha and wondered what it really means...",
        },
        {
            imgPath: "/blogs/outer/LeftSide/blogs/rb1.jpg",
            title: "Indonesian Rudraksha vs Nepal Rudraksha: Which Is...",
            date: "February 24, 2026",
            slug: "indonesian-rudraksha-vs-nepal-rudraksha-which-is-better-for-daily-wear",
            para: "For ages, Rudraksha beads have been worn by saints, yogis, and those on a spiritual..."
        },
        {
            imgPath: "/blogs/outer/LeftSide/blogs/rb2.jpg",
            title: "Rudraksha Malas: Benefits, How to Wear & Care Tips...",
            date: "February 24, 2026",
            slug: "rudraksha-malas-benefits-how-to-wear-care-tips",
            para: "Rudraksha Malas are not just spiritual accessories, but rather sacred energizing tools..."
        },
        {
            imgPath: "/blogs/outer/LeftSide/blogs/rcb44.jpg",
            title: "Rudraksha Mala Sizes Explained (4mm, 6mm,...",
            date: "February 24, 2026",
            slug: "rudraksha-mala-sizes-explained-4mm-6mm-8mm-10mm-20mm",
            para: "Confused about which rudraksha mala size fits you? The ideal size depends upon....."
        },
        {
            imgPath: "/blogs/outer/LeftSide/blogs/11-mukhi-s1.jpg",
            title: "11 Mukhi Rudraksha: who it’s for, how to wear it, and what to look for....",
            date: "February 24, 2026",
            slug: "11-mukhi-rudraksha-who-its-for-how-to-wear-it-and-what-to-look-for",
            para: "Wondering where to buy 11 Mukhi Rudraksha in Mauritius? Knowing who..."
        },
        {
            imgPath: "/blogs/outer/LeftSide/blogs/how-to-avoid-scams-s1.jpg",
            title: "How to avoid scams when buying spiritual products...",
            date: "February 24, 2026",
            slug: "how-to-avoid-scams-when-buying-spiritual-products",
            para: "Though it is convenient to buy spiritual products online, it is also risky...."
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