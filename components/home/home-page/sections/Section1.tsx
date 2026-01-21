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
            <section className='w-full h-[550px]  md:h-[378px] lg:h-[562px] relative mt-[106px]  md:mt-[135px] xl:mt-[140px] flex items-end md:items-center px-4 sm:px-8 md:px-12 lg:pl-20'>

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


                            <Image src="/images/s1/mobile-banner.png" alt="Slide 1"
                                className='w-full h-full object-cover block md:hidden' fill />
                        </SwiperSlide>


                        <SwiperSlide className='w-full h-full relative'>
                            <Image src="/images/s1/rdh-s1-i-nimg.png" alt="Slide 1"
                                className='w-full h-full object-cover md:block hidden' fill />


                            <Image src="/images/s1/mobile-banner.png" alt="Slide 1"
                                className='w-full h-full object-cover block md:hidden' fill />
                        </SwiperSlide>
                    </Swiper>
                </div>


                {/* Left Side Containt Container  */}
                <div className='flex flex-col justify-center sm:justify-between gap-[12px] md:gap-8 lg:gap-20 z-10 relative  w-full md:max-w-[480px]'>
                    {/* Row 1 For Text  */}
                    <div className='flex flex-col gap-[8px] md:gap-4 text-center md:text-left'>
                        <h1 className='text-[18px] md:text-[30px] lg:text-[40px] font-[700] text-[#6C3E1A] w-full md:w-[480px] leading-[28px] sm:leading-[32px] md:leading-[36px] lg:leading-[42px] font-montserrat'>Authentic Rudraksha in Mauritius, selected with care</h1>
                        <p className='font-[500] text-[13px]   md:text-[16px] lg:text-[18px] text-[#6C3E1A] w-full lg:w-[410px] font-poppins'>A calm, learning-first space to understand mukhi, origin, sizing, and care, so your choice feels clear and confident.</p>
                    </div>


                    {/* Row 2 For Buttons  */}
                    <div className="flex flex-row gap-3 sm:gap-2 w-full lg:w-auto">
                        <button className='cursor-pointer w-full sm:min-w-[200px] lg:min-w-[233px] h-[44px] sm:h-[48px] lg:h-[50px] bg-[#6C3E1A] rounded-[4px] flex justify-center items-center gap-2 md:gap-2 px-1 hover:bg-[#5a3315] transition-colors'>
                            <p className='text-[12px]  lg:text-[15px] font-[700] text-[#ffffff] font-open-sans'>Explore Rudraksha</p>
                            <MdOutlineArrowOutward className='w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] lg:w-[30px] lg:h-[30px] text-white' />
                        </button>

                        <button className='cursor-pointer w-full sm:min-w-[200px] lg:min-w-[233px] h-[44px] sm:h-[48px] lg:h-[50px]  md:border-[#FFFFFF] rounded-[4px] flex justify-center items-center gap-2 md:gap-2 px-1 hover:bg-white/10 transition-colors bg-white md:bg-transparent
                        
                        border-[1px] border-black
                        '>
                            <p className='text-[12px]  lg:text-[15px] font-[700] text-black md:text-[#ffffff] font-open-sans'>Start with the Basics</p>
                            <MdOutlineArrowOutward className='w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] lg:w-[30px] lg:h-[30px] text-black md:text-white' />
                        </button>
                    </div>
                </div>


                {/* Absolute Positioned Overlay Div That Will Show On Mobile  */}
                <div className="absolute inset-0 w-full h-full z-0 md:hidden pointer-events-none">
                    <div
                        className="absolute left-0 top-0 h-full w-[50vw] max-w-full"
                        style={{
                            background: 'linear-gradient(to right, rgba(255,255,255,0.72) 0%, rgba(255,255,255,0.48) 60%, rgba(255,255,255,0.0) 100%)',
                            width: '40%'
                        }}
                    />
                </div>
            </section>
        </>
    )
}

export default Section1;