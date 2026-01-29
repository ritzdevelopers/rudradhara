"use client"
import React, { useRef } from 'react'
import Image from 'next/image'
import styles from "./page.module.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';

function S4() {
    const swiperRef = useRef<any>(null);
    return (
        <section className="w-full relative flex flex-col px-4 sm:px-6 md:px-8 lg:px-[35px] xl:px-[70px] py-10 sm:py-12 md:py-14 lg:py-[70px] gap-10 sm:gap-12 md:gap-14 lg:gap-[70px]">

            {/* Row 1  */}
            <div className={`${styles.mainContainer} w-full flex flex-col justify-center items-center gap-8 sm:gap-10 md:gap-12 lg:gap-[55px]`}>
                {/* Div 1  */}
                <div className="flex flex-col justify-center items-center w-full text-center gap-6 sm:gap-8 md:gap-10 lg:gap-[45px]">
                    <h5 className="font-[700] text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] text-[#000000]">
                        What we stand for
                    </h5>

                    {/* Div 2  */}
                    <div className="md:flex grid grid-cols-2 md:flex-row flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-10 lg:gap-[70px]">
                        <div className="flex flex-col justify-center gap-3 sm:gap-4 lg:gap-[20px] items-center text-center">
                            <div className="w-[50px] sm:w-[55px] md:w-[60px] lg:w-[67px]">
                                <img src="/icons/education-before-purchase.png" alt="Education Icon" className="w-full h-full object-contain" />
                            </div>
                            <p className="font-[500] text-[14px] sm:text-[15px] lg:text-[16px]">
                                Education before purchase
                            </p>
                        </div>
                        <div className="flex flex-col justify-center gap-3 sm:gap-4 lg:gap-[20px] items-center text-center">
                            <div className="w-[35px] sm:w-[40px] md:w-[43px] lg:w-[46px]">
                                <img src="/icons/authenticity-over-claims.png" alt="Authenticity over claims" className="w-full h-full object-contain" />
                            </div>
                            <p className="font-[500] text-[14px] sm:text-[15px] lg:text-[16px]">Authenticity over claims</p>
                        </div>
                        <div className="flex flex-col justify-center gap-3 sm:gap-4 lg:gap-[20px] items-center text-center">
                            <div className="w-[40px] sm:w-[45px] md:w-[48px] lg:w-[51px]">
                                <img src="/icons/simplicity-over-confusion.png" alt="Simplicity over confusion" className="w-full h-full object-contain" />
                            </div>
                            <p className="font-[500] text-[14px] sm:text-[15px] lg:text-[16px]">Simplicity over confusion</p>
                        </div>
                        <div className="flex flex-col justify-center gap-3 sm:gap-4 lg:gap-[20px] items-center text-center">
                            <div className="w-[55px] sm:w-[60px] md:w-[65px] lg:w-[70px]">
                                <img src="/icons/respect-for-tradition.png" alt="Respect for tradition" className="w-full h-full object-contain" />
                            </div>
                            <p className="font-[500] text-[14px] sm:text-[15px] lg:text-[16px]">Respect for tradition</p>
                        </div>
                    </div>
                </div>

                {/* Div 2  */}
                <div className='flex justify-center items-center'>
                    <p className='font-[400] text-[14px] sm:text-[15px] lg:text-[16px] w-full max-w-[530px] px-4 lg:px-0 text-center'>Rudraksha is deeply personal. Our role is not to tell you what to believe, but to help you choose with clarity.</p>
                </div>
            </div>

            {/* Row 2 - Mobile Product Cards (Flipkart/Amazon Style) with Swiper */}
            <div className="w-full sm:hidden relative px-2">
                <Swiper
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    modules={[Navigation]}
                    loop={true}
                    spaceBetween={16}
                    slidesPerView="auto"
                    centeredSlides={false}
                    className="productSwiper"
                >
                    {/* Product Card 1 - Rudraksha */}
                    <SwiperSlide style={{ width: 'calc(100vw - 64px)', maxWidth: '330px' }}>
                        <div className="w-full bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
                            <div className="w-full h-[300px] relative bg-gray-50">
                                <Image src="/about/s4/ab-s4-i1.png" alt="Rudraksha" fill className="object-cover" />
                            </div>
                            <div className="p-4 text-center">
                                <h6 className="font-[700] text-[16px] text-[#000000] mb-2 line-clamp-2">
                                    Rudraksha
                                </h6>
                                <p className="font-[400] text-[13px] text-[#4A4A4A] leading-relaxed line-clamp-3">
                                    Certified, documented natural Rudraksha beads, presented with clear mukhi, origin, sizing, and care guidance.
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>

                    {/* Product Card 2 - Black mala */}
                    <SwiperSlide style={{ width: 'calc(100vw - 64px)', maxWidth: '330px' }}>
                        <div className="w-full bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
                            <div className="w-full h-[300px] relative bg-gray-50">
                                <Image src="/about/s4/ab-s4-i2.png" alt="Black mala" fill className="object-cover" />
                            </div>
                            <div className="p-4 text-center">
                                <h6 className="font-[700] text-[16px] text-[#000000] mb-2 line-clamp-2">
                                    Black mala
                                </h6>
                                <p className="font-[400] text-[13px] text-[#4A4A4A] leading-relaxed line-clamp-3">
                                    Lightweight black mala for daily practice, comfortable wear, clean finish, and simple care in humid weather.
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>

                    {/* Product Card 3 - Rashi Bracelet */}
                    <SwiperSlide style={{ width: 'calc(100vw - 64px)', maxWidth: '330px' }}>
                        <div className="w-full bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
                            <div className="w-full h-[300px] relative bg-gray-50">
                                <Image src="/about/s4/ab-s4-i3.png" alt="Rashi Bracelet" fill className="object-cover" />
                            </div>
                            <div className="p-4 text-center">
                                <h6 className="font-[700] text-[16px] text-[#000000] mb-2 line-clamp-2">
                                    Rashi Bracelet
                                </h6>
                                <p className="font-[400] text-[13px] text-[#4A4A4A] leading-relaxed line-clamp-3">
                                    Purpose-led rashi bracelet with clear design, comfortable fit, and everyday wear guidance for consistent use.
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>

                    {/* Product Card 4 - Live Copper Adiyogi */}
                    <SwiperSlide style={{ width: 'calc(100vw - 64px)', maxWidth: '330px' }}>
                        <div className="w-full bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
                            <div className="w-full h-[300px] relative bg-gray-50">
                                <Image src="/about/s4/ab-s4-i4.png" alt="Live Copper Adiyogi" fill className="object-cover" />
                            </div>
                            <div className="p-4 text-center">
                                <h6 className="font-[700] text-[16px] text-[#000000] mb-2 line-clamp-2">
                                    Live Copper Adiyogi
                                </h6>
                                <p className="font-[400] text-[13px] text-[#4A4A4A] leading-relaxed line-clamp-3">
                                    Live copper Adiyogi idol crafted for devotion, with authentic finish, weight clarity, and care instructions.
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>

                {/* Custom Navigation Buttons */}
                <div className="flex justify-center items-center gap-4 mt-6">
                    <button
                        onClick={() => swiperRef.current?.slidePrev()}
                        className="w-10 h-10 rounded-full bg-white border border-gray-300 shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors active:scale-95"
                        aria-label="Previous slide"
                    >
                        <IoChevronBack className="w-5 h-5 text-[#6C3E1A]" />
                    </button>
                    <button
                        onClick={() => swiperRef.current?.slideNext()}
                        className="w-10 h-10 rounded-full bg-white border border-gray-300 shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors active:scale-95"
                        aria-label="Next slide"
                    >
                        <IoChevronForward className="w-5 h-5 text-[#6C3E1A]" />
                    </button>
                </div>
            </div>

            {/* Row 2 - Desktop/Tablet Grid */}
            <div className={`${styles.mainContainer} w-full hidden sm:grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-0`}>
                <div className="w-[100%] h-[200px] h-[340px] lg:h-[258px] relative ">
                    <Image src="/about/s4/ab-s4-i1.png" alt="Rudraksha" fill className='object-cover' />

                    {/* Absolute Position Icon  */}
                    <div className="w-[20px] sm:w-[22px] lg:w-[25px] absolute top-[50%] transform -translate-y-1/2 -right-1 lg:-right-1"><img src="/icons/polygon-icn.png" alt="Verification Icon" className="w-full h-full" /></div>
                </div>
                <div className="w-[100%] h-auto min-h-[200px] sm:min-h-[220px] md:min-h-[240px] lg:h-[258px] flex flex-col justify-center items-center text-center p-4 sm:p-5 lg:p-10">
                    <h6 className="font-[700] text-[16px] sm:text-[17px] lg:text-[18px] mb-2 sm:mb-3">
                        Rudraksha
                    </h6>
                    <p className="font-[400] text-[14px] sm:text-[15px] lg:text-[16px]">
                        Certified, documented natural Rudraksha beads, presented with clear mukhi, origin, sizing, and care guidance.
                    </p>
                </div>
                <div className="w-[100%] h-[200px] h-[340px] lg:h-[258px] relative ">
                    <Image src="/about/s4/ab-s4-i2.png" alt="Rudraksha" fill className='object-cover' />
                            {/* Absolute Position Icon  */}
                            <div className="w-[20px] sm:w-[22px] lg:w-[25px] absolute top-[50%] transform -translate-y-1/2 -right-1 lg:-right-1"><img src="/icons/polygon-icn.png" alt="Verification Icon" className="w-full h-full" /></div>
                </div>
                <div className="w-[100%] h-auto min-h-[200px] sm:min-h-[220px] md:min-h-[240px] lg:h-[258px] flex flex-col justify-center items-center text-center p-4 sm:p-5 lg:p-10">
                    <h6 className="font-[700] text-[16px] sm:text-[17px] lg:text-[18px] mb-2 sm:mb-3">
                        Black mala
                    </h6>
                    <p className="font-[400] text-[14px] sm:text-[15px] lg:text-[16px]">
                        Lightweight black mala for daily practice, comfortable wear, clean finish, and simple care in humid weather.
                    </p>
                </div>

                <div className="w-[100%] h-auto min-h-[200px] sm:min-h-[220px] md:min-h-[240px] lg:h-[258px] flex flex-col justify-center items-center text-center p-4 sm:p-5 lg:p-10">
                    <h6 className="font-[700] text-[16px] sm:text-[17px] lg:text-[18px] mb-2 sm:mb-3">
                        Rashi Bracelet
                    </h6>
                    <p className="font-[400] text-[14px] sm:text-[15px] lg:text-[16px]">
                        Purpose-led rashi bracelet with clear design, comfortable fit, and everyday wear guidance for consistent use.
                    </p>
                </div>
                <div className="w-[100%] h-[200px] h-[340px] lg:h-[258px] relative ">
                    <Image src="/about/s4/ab-s4-i3.png" alt="Rudraksha" fill className='object-cover' />
                            {/* Absolute Position Icon  */}
                            <div className="w-[20px] sm:w-[22px] lg:w-[25px] absolute top-[50%] transform -translate-y-1/2 
                            rotate-180 lg:rotate-180 -left-1 lg:-right-1"><img src="/icons/polygon-icn.png" alt="Verification Icon" className="w-full h-full" /></div>
                </div>

                <div className="w-[100%] h-auto min-h-[200px] sm:min-h-[220px] md:min-h-[240px] lg:h-[258px] flex flex-col justify-center items-center text-center p-4 sm:p-5 lg:p-10">
                    <h6 className="font-[700] text-[16px] sm:text-[17px] lg:text-[18px] mb-2 sm:mb-3">
                        Live Copper Adiyogi
                    </h6>
                    <p className="font-[400] text-[14px] sm:text-[15px] lg:text-[16px]">
                        Live copper Adiyogi idol crafted for devotion, with authentic finish, weight clarity, and care instructions.
                    </p>
                </div>
                <div className="w-[100%] h-[200px] h-[340px] lg:h-[258px] relative ">
                    <Image src="/about/s4/ab-s4-i4.png" alt="Rudraksha" fill className='object-cover' />
                            {/* Absolute Position Icon  */}
                            <div className="w-[20px] sm:w-[22px] lg:w-[25px] absolute top-[50%] transform -translate-y-1/2 
                            rotate-180 lg:rotate-180 -left-1 lg:-right-1"><img src="/icons/polygon-icn.png" alt="Verification Icon" className="w-full h-full" /></div>
                </div>
            </div>
        </section>
    )
}

export default S4