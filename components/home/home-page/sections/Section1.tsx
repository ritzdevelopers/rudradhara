"use client";
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

import { MdOutlineArrowOutward } from "react-icons/md";
import Image from 'next/image';

function Section1() {
    return (
        <>
            <style>{`
                .mySwiper .swiper-pagination-bullet {
                    width: 10px;
                    height: 10px;
                    background-color: #EDD5A9;
                    opacity: 1;
                }
                .mySwiper .swiper-pagination-bullet-active {
                    background-color: #FFFFFF;
                }
                @media (min-width: 640px) {
                    .mySwiper .swiper-pagination-bullet {
                        width: 12px;
                        height: 12px;
                    }
                }
                @media (min-width: 1024px) {
                    .mySwiper .swiper-pagination-bullet {
                        width: 13px;
                        height: 13px;
                    }
                }
            `}</style>
            <section className='w-full h-[550px]  md:h-[378px] lg:h-[562px] relative mt-[106px]  md:mt-[135px] xl:mt-[140px] flex items-center px-4 sm:px-8 md:px-12 lg:pl-20'>

                <div className="absolute inset-0 w-full h-full z-0">
                    <Swiper
                        spaceBetween={0}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper w-full h-full"
                    >
                        <SwiperSlide className='w-full h-full relative'>
                            <Image src="/images/s1/rdh-s1-i-nimg.png" alt="Slide 1"
                                className='w-full h-full object-cover md:block hidden' fill />


                            <Image src="/images/s1/rdh-phone2.jpg" alt="Slide 1"
                                className='w-full h-full object-cover block md:hidden' fill />
                        </SwiperSlide>


                        <SwiperSlide className='w-full h-full relative'>
                            <Image src="/images/s1/rdh-s1-i-nimg.png" alt="Slide 1"
                                className='w-full h-full object-cover md:block hidden' fill />


                            <Image src="/images/s1/rdh-phone2.jpg" alt="Slide 1"
                                className='w-full h-full object-cover block md:hidden' fill />
                        </SwiperSlide>
                    </Swiper>
                </div>


                {/* Left Side Containt Container  */}
                <div className='flex flex-col justify-center sm:justify-between gap-8 sm:gap-12 md:gap-8 lg:gap-20 z-10 relative w-[57%] md:max-w-[480px]'>
                    {/* Row 1 For Text  */}
                    <div className='flex flex-col gap-3 sm:gap-4'>
                        <h1 className='text-[18px] md:text-[30px] lg:text-[40px] font-[700] text-[#6C3E1A] w-full md:w-[480px] leading-[28px] sm:leading-[32px] md:leading-[36px] lg:leading-[42px] font-montserrat'>Authentic Rudraksha in Mauritius, selected with care</h1>
                        <p className='font-[500] text-[14px] sm:text-[16px] md:text-[16px] lg:text-[18px] text-[#6C3E1A] w-full lg:w-[410px] font-poppins'>A calm, learning-first space to understand mukhi, origin, sizing, and care, so your choice feels clear and confident.</p>
                    </div>


                    {/* Row 2 For Buttons  */}
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-2 w-full lg:w-auto">
                        <button className='cursor-pointer w-full sm:min-w-[200px] lg:min-w-[233px] h-[44px] sm:h-[48px] lg:h-[50px] bg-[#6C3E1A] rounded-[4px] flex justify-center items-center md:gap-2 px-3 hover:bg-[#5a3315] transition-colors'>
                            <p className='text-[12px]  lg:text-[15px] font-[700] text-[#ffffff] font-open-sans'>Explore Rudraksha</p>
                            <MdOutlineArrowOutward className='w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] lg:w-[30px] lg:h-[30px] text-white' />
                        </button>

                        <button className='cursor-pointer w-full sm:min-w-[200px] lg:min-w-[233px] h-[44px] sm:h-[48px] lg:h-[50px] border-[1px] border-[#FFFFFF] rounded-[4px] flex justify-center items-center md:gap-2 px-3 hover:bg-white/10 transition-colors'>
                            <p className='text-[12px]  lg:text-[15px] font-[700] text-[#ffffff] font-open-sans'>Start with the Basics</p>
                            <MdOutlineArrowOutward className='w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] lg:w-[30px] lg:h-[30px] text-white' />
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Section1;