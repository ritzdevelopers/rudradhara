"use client";

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
            slug: "indonesian-rudraksha-vs-nepal-rudraksha-which-is-better-for-daily-wear"
        },
        {
            imgPath: "/blogs/outer/RightSide/rcb3.jpg",
            title: "Rudraksha Malas: Benefits, How to Wear & Care Tips...",
            date: "February 24, 2026",
            slug: "rudraksha-malas-benefits-how-to-wear-care-tips"
        },
        {
            imgPath: "/blogs/outer/LeftSide/blogs/rb44.jpg",
            title: "Rudraksha Mala Sizes Explained (4mm, 6mm,...",
            date: "February 24, 2026",
            slug: "rudraksha-mala-sizes-explained-4mm-6mm-8mm-10mm-20mm",
        },
        {
            imgPath: "/blogs/outer/RightSide/rcb5.jpg",
            title: "11 Mukhi Rudraksha: who it’s for, how to wear...",
            date: "February 24, 2026",
            slug: "11-mukhi-rudraksha-who-its-for-how-to-wear-it-and-what-to-look-for"
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
        <main className="w-full flex justify-center items-center px-4 py-8 sm:px-6 sm:py-10 md:px-8 md:py-12 lg:px-10 lg:py-14 xl:px-10 xl:py-[70px]">
            {/* Center Align Container  */}
            <div className={`w-full flex flex-col-reverse xl:flex-row xl:justify-around gap-6 sm:gap-7 md:gap-8 ${styles.mainContainer}`}>
                {/* Left Side Container  */}
                <div className="w-full xl:w-[calc(100%-420px)] order-2 xl:order-1">
                    {children}

                </div>


                {/* Right Side Container  */}
                <div className="w-full xl:w-[420px] flex flex-col gap-4 xl:sticky xl:top-0 order-1 xl:order-2 h-fit">
                    {/* Row 1  */}
                    <div className="w-full bg-[#FFF9EF] flex flex-col justify-center items-center rounded-[10px] text-center px-4 py-6  gap-3 sm:gap-3.5 md:gap-4">
                        <p className="font-[600] text-[16px] sm:text-[17px] md:text-[18px] lg:text-[19px] xl:text-[20px] font-montserrat">
                            Search
                        </p>
                        <div className="w-full h-[1px] bg-[#E5E4E3]"></div>
                        <div className="relative w-full rounded-full h-[42px] sm:h-[44px] md:h-[45px] xl:h-[46px] overflow-hidden">
                            <input type="text" className="w-full pl-10 h-full rounded-full border-none outline-none bg-white px-4 font-[400] text-[13px] sm:text-[13.5px] md:text-[14px] text-[#484848] placeholder:text-[#484848] placeholder:font-[400] placeholder:text-[13px] sm:placeholder:text-[13.5px] md:placeholder:text-[14px] font-open-sans" placeholder="Search ..." />

                            <MdSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-[#484848] text-[18px] sm:text-[19px] md:text-[20px]" />
                        </div>
                    </div>


                    {/* Row 2  */}
                    <div className="w-full bg-[#FFF9EF] flex flex-col justify-center items-center rounded-[10px] px-4 py-6  gap-3 sm:gap-3.5 md:gap-4">
                        <p className="font-[600] text-[16px] sm:text-[17px] md:text-[18px] lg:text-[19px] xl:text-[20px] text-center font-montserrat">
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
                       <div className="w-full bg-[#FFF9EF] flex flex-col justify-center items-center rounded-[10px] px-4 py-6  gap-3 sm:gap-3.5 md:gap-4">
                        <p className="font-[600] text-[16px] sm:text-[17px] md:text-[18px] lg:text-[19px] xl:text-[20px] text-center font-montserrat">
                        Gallery
                        </p>
                        <div className="w-full h-[1px] bg-[#E5E4E3]"></div>
                        <div className="w-full grid grid-cols-3 md:grid-cols-6 xl:grid-cols-3 gap-2">
                            {
                                galleryImgsData.map((blog, index) => (
                                    <GalleryImgs link="/gallery" key={index} {...blog} />
                                ))
                            }
                        </div>
                        <div className="flex justify-center items-center">
                        <button onClick={()=>window.open("/gallery", "_blank")} className='cursor-pointer h-[36px] sm:h-[37px] md:h-[38px] bg-white rounded-[4px] flex justify-center items-center gap-2 px-3 w-[130px] sm:w-[137px] md:w-[144px] btn-slide'>
                                <p className='text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] font-[600] text-[#6C3E1A] font-open-sans'>
                                Explore all
                                </p>
                                <MdOutlineArrowOutward className='w-[22px] h-[22px] sm:w-[23px] sm:h-[23px] md:w-[24px] md:h-[24px] text-[#6C3E1A]' />
                            </button>
                        </div>
                    </div>


                    
                       {/* Row 4  */}
                       <div className="w-full bg-[#FFF9EF] flex flex-col justify-center items-center rounded-[10px] px-4 py-6  gap-3 sm:gap-3.5 md:gap-4">
                        <p className="font-[600] text-[16px] sm:text-[17px] md:text-[18px] lg:text-[19px] xl:text-[20px] text-center font-montserrat">
                        Products
                        </p>
                        <div className="w-full h-[1px] bg-[#E5E4E3]"></div>
                        <div className="w-full grid grid-cols-3 md:grid-cols-6 xl:grid-cols-3 gap-2">
                            {
                                productsImgsData.map((blog, index) => (
                                    <GalleryImgs link="/products" key={index} {...blog} />
                                ))
                            }
                        </div>
                        <div className="flex justify-center items-center">
                        <button onClick={()=>window.open("/products", "_blank")} className='cursor-pointer h-[36px] sm:h-[37px] md:h-[38px] bg-white rounded-[4px] flex justify-center items-center gap-2 px-3 w-[175px] sm:w-[184px] md:w-[193px] btn-slide'>
                                <p className='text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] font-[600] text-[#6C3E1A] font-open-sans'>
                                Explore Products
                                </p>
                                <MdOutlineArrowOutward className='w-[22px] h-[22px] sm:w-[23px] sm:h-[23px] md:w-[24px] md:h-[24px] text-[#6C3E1A]' />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default BlogLayout;