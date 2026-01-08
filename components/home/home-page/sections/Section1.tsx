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
                    width: 13px;
                    height: 13px;
                    background-color: #EDD5A9;
                    opacity: 1;
                }
                .mySwiper .swiper-pagination-bullet-active {
                    background-color: #FFFFFF;
                }
            `}</style>
            <section className='w-full h-[562px] relative  mt-[140px] flex items-center pl-20'>
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
                            <Image src="/images/s1/rdh-s1-banner1.png" alt="Slide 1" 
                            className='w-full h-full' fill/>
                        </SwiperSlide>


                        <SwiperSlide className='w-full h-full relative'>
                            <Image src="/images/s1/rdh-s1-banner1.png" alt="Slide 1" 
                            className='w-full h-full' fill/>
                        </SwiperSlide>

                        <SwiperSlide className='w-full h-full relative'>
                            <Image src="/images/s1/rdh-s1-banner1.png" alt="Slide 1" 
                            className='w-full h-full' fill/>
                        </SwiperSlide>

                        <SwiperSlide className='w-full h-full relative'>
                            <Image src="/images/s1/rdh-s1-banner1.png" alt="Slide 1" 
                            className='w-full h-full' fill/>
                        </SwiperSlide>

                        <SwiperSlide className='w-full h-full relative'>
                            <Image src="/images/s1/rdh-s1-banner1.png" alt="Slide 1" 
                            className='w-full h-full' fill/>
                        </SwiperSlide>
                    </Swiper>
                </div>


                {/* Left Side Containt Container  */}
                <div className='flex flex-col justify-between gap-20 z-10 relative'>
                    {/* Row 1 For Text  */}
                    <div>
                        <h1 className='text-[40px] font-bold text-[#EDDC96] w-[430px]'>Authentic Rudraksha in Mauritius, selected with care</h1>
                        <p className='font-medium text-[18px] text-[#ffffff] w-[390px]'>A calm, learning-first space to understand mukhi, origin, sizing, and care, so your choice feels clear and confident.</p>
                    </div>


                    {/* Row 2 For Buttons  */}
                    <div className="flex gap-2">
                        <button className='cursor-pointer min-w-[233px] h-[50px] bg-[#6C3E1A] rounded-[4px] flex justify-center items-center gap-2 px-3'>
                            <p className='text-[15px] font-bold text-[#ffffff]'>Explore Rudraksha</p>
                            <MdOutlineArrowOutward  className='w-[30px] h-[30px] text-white'/>
                        </button>

                        <button className='cursor-pointer min-w-[233px] h-[50px] border-[1px] border-[#FFFFFF] rounded-[4px] flex justify-center items-center gap-2 px-3'>
                            <p className='text-[15px] font-bold text-[#ffffff]'>Start with the Basics</p>
                            <MdOutlineArrowOutward  className='w-[30px] h-[30px] text-white'/>
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Section1;