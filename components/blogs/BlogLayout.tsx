import { MdOutlineArrowOutward, MdSearch } from "react-icons/md";
import RecentBlogs from "./cards/RecentBlogs";
import GalleryImgs from "./cards/GalleryImgs";
import styles from "./page.module.css";
function BlogLayout({ children }: { children: React.ReactNode }) {

    const recentBlogsData = [
        {
            imgPath: "/blogs/outer/RightSide/rcb1.jpg",
            title: "What It Is, How Mukhi Works, and How to Choose...",
            date: "February 24, 2026",
            slug: "what-it-is-how-mukhi-works-and-how-to-choose"
        },
        {
            imgPath: "/blogs/outer/RightSide/rcb2.jpg",
            title: "Indonesian Rudraksha vs Nepal Rudraksha: Which Is...",
            date: "February 24, 2026",
            slug: "indonesian-rudraksha-vs-nepal-rudraksha-which-is-better"
        },
        {
            imgPath: "/blogs/outer/RightSide/rcb3.jpg",
            title: "Rudraksha Malas: Benefits, How to Wear & Care Tips...",
            date: "February 24, 2026",
            slug: "rudraksha-malas-benefits-how-to-wear-and-care-tips"
        },
        {
            imgPath: "/blogs/outer/RightSide/rcb4.jpg",
            title: "What It Is, How Mukhi Works, and How to Choose...",
            date: "February 24, 2026",
            slug: "what-it-is-how-mukhi-works-and-how-to-choose"
        },
        {
            imgPath: "/blogs/outer/RightSide/rcb5.jpg",
            title: "Indonesian Rudraksha vs Nepal Rudraksha: Which Is...",
            date: "February 24, 2026",
            slug: "indonesian-rudraksha-vs-nepal-rudraksha-which-is-better"
        }
    ]

    const galleryImgsData = [
        {
            imgPath: "/blogs/outer/RightSide/rdgi1.jpg",
        },
        {
            imgPath: "/blogs/outer/RightSide/rdgi2.jpg",
        },
        {
            imgPath: "/blogs/outer/RightSide/rdgi3.jpg",
        },
        {
            imgPath: "/blogs/outer/RightSide/rdgi4.jpg",
        },
        {
            imgPath: "/blogs/outer/RightSide/rdgi5.jpg",
        },
        {
            imgPath: "/blogs/outer/RightSide/rdgi6.jpg",
        },
    ]

    const productsImgsData = [
        {
            imgPath: "/blogs/outer/RightSide/rcp1.jpg",
        },
        {
            imgPath: "/blogs/outer/RightSide/rcp2.jpg",
        },
        {
            imgPath: "/blogs/outer/RightSide/rcp3.jpg",
        },
        {
            imgPath: "/blogs/outer/RightSide/rcp4.jpg",
        },
        {
            imgPath: "/blogs/outer/RightSide/rcp5.jpg",
        },
        {
            imgPath: "/blogs/outer/RightSide/rcp6.jpg",
        },
    ]
    return (
        <main className="w-full flex justify-center  items-center px-10 py-[70px] ">
            {/* Center Align Container  */}
            <div className={`w-full flex justify-between gap-8 ${styles.mainContainer}`}>
                {/* Left Side Container  */}
                <div className="w-[calc(100%-391px)]">
                    {children}

                </div>


                {/* Right Side Container  */}
                <div className="w-[451px] flex flex-col gap-4 sticky top-0">
                    {/* Row 1  */}
                    <div className="w-full bg-[#FFF9EF] flex flex-col justify-center items-center rounded-[10px] text-center px-8 py-8 gap-4">
                        <p className="font-[600] text-[20px]">
                            Search
                        </p>
                        <div className="w-full h-[1px] bg-[#E5E4E3]"></div>
                        <div className="relative w-full rounded-full h-[46px] overflow-hidden">
                            <input type="text" className="w-full pl-10 h-full rounded-full border-none outline-none bg-white px-4 font-[400] text-[14px] text-[#484848] placeholder:text-[#484848] placeholder:font-[400] placeholder:text-[14px]" placeholder="Search ..." />

                            <MdSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-[#484848] text-[20px]" />
                        </div>
                    </div>


                    {/* Row 2  */}
                    <div className="w-full bg-[#FFF9EF] flex flex-col justify-center items-center rounded-[10px]  px-8  gap-4 py-8">
                        <p className="font-[600] text-[20px] text-center">
                            Recent Blog
                        </p>
                        <div className="w-full h-[1px] bg-[#E5E4E3]"></div>
                        <div className="w-full flex flex-col gap-2">
                            {
                                recentBlogsData.map((blog, index) => (
                                    <RecentBlogs key={index} {...blog} />
                                ))
                            }
                        </div>
                    </div>


                       {/* Row 3  */}
                       <div className="w-full bg-[#FFF9EF] flex flex-col justify-center items-center rounded-[10px]  px-8  gap-4 py-8">
                        <p className="font-[600] text-[20px] text-center">
                        Gallery
                        </p>
                        <div className="w-full h-[1px] bg-[#E5E4E3]"></div>
                        <div className="w-full grid grid-cols-3 gap-2">
                            {
                                galleryImgsData.map((blog, index) => (
                                    <GalleryImgs key={index} {...blog} />
                                ))
                            }
                        </div>
                        <div className="flex justify-center items-center">
                        <button className='cursor-pointer h-[38px] bg-white rounded-[4px] flex justify-center items-center gap-2 px-3 w-[144px] btn-slide'>
                                <p className='text-[13px] sm:text-[14px] lg:text-[15px] font-[600] text-[#6C3E1A] font-open-sans'>
                                Explore all
                                </p>
                                <MdOutlineArrowOutward className='w-[24px] h-[24px] text-[#6C3E1A]' />
                            </button>
                        </div>
                    </div>


                    
                       {/* Row 4  */}
                       <div className="w-full bg-[#FFF9EF] flex flex-col justify-center items-center rounded-[10px]  px-8  gap-4 py-8">
                        <p className="font-[600] text-[20px] text-center">
                        Products
                        </p>
                        <div className="w-full h-[1px] bg-[#E5E4E3]"></div>
                        <div className="w-full grid grid-cols-3 gap-2">
                            {
                                productsImgsData.map((blog, index) => (
                                    <GalleryImgs key={index} {...blog} />
                                ))
                            }
                        </div>
                        <div className="flex justify-center items-center">
                        <button className='cursor-pointer h-[38px] bg-white rounded-[4px] flex justify-center items-center gap-2 px-3 w-[193px] btn-slide'>
                                <p className='text-[13px] sm:text-[14px] lg:text-[15px] font-[600] text-[#6C3E1A] font-open-sans'>
                                Explore Products
                                </p>
                                <MdOutlineArrowOutward className='w-[24px] h-[24px] text-[#6C3E1A]' />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default BlogLayout;