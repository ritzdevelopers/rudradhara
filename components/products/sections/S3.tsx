"use client";

import React from "react";
import Image from "next/image";

const RUDRAKSHA_IMG = "/products/s3/Product%20Page%20Banner-02%201.jpg";
const MALA_IMG = "/products/s3/Mask%20group%20(2).jpg";
const BRACELET_IMG = "/products/s3/Mask%20group%20(3).jpg";
const ARROW_ICON = "/products/s3/arrow.png";
const LEFT_ARROW = "/products/s3/left-arrow.svg";
const RIGHT_ARROW = "/products/s3/right_arrow.svg";

function ExpandRow({ label }: { label: string }) {
    return (
        <div className="flex items-center justify-center gap-2 sm:gap-3 py-1">
            <p className="font-bold text-black text-[12px] sm:text-[13px] lg:text-[14px] font-open-sans">{label}</p>
            <button
                type="button"
                className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 rounded flex items-center justify-center bg-[#FDF0D9] text-[#6C3E1A] font-bold text-[13px] sm:text-[14px] lg:text-[16px] font-open-sans shrink-0 transition-colors hover:bg-[#E5CD99]"
            >
                +
            </button>
        </div>
    );
}

function S3() {
    return (
        <section className="w-full bg-white pt-4 sm:pt-6 md:pt-8 pb-10 sm:pb-12 md:pb-14">
            <h2 className="font-montserrat font-bold text-black text-[26px] sm:text-[30px] md:text-[34px] lg:text-[38px] text-center mb-8 sm:mb-10 lg:mb-12 px-4">
                Core Categories
            </h2>

            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-0">
                {/* Left: Rudraksha – full height, image background */}
                <div className="relative min-h-[300px] sm:min-h-[380px] md:min-h-[420px] lg:min-h-[480px] overflow-hidden">
                    <Image
                        src={RUDRAKSHA_IMG}
                        alt="Rudraksha bead"
                        fill
                        className="object-cover"
                        sizes="(max-width: 1023px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-black/35 lg:bg-black/30" />
                    <div className="absolute inset-0 flex flex-col justify-between p-4 sm:p-5 md:p-6 lg:p-7">
                        <div>
                            <h3 className="font-montserrat font-bold text-white text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px]">
                                Rudraksha
                            </h3>
                            <p className="font-open-sans font-normal text-white text-[18px] sm:text-[13px] lg:text-[18px] mt-2 max-w-[280px] sm:max-w-[320px] leading-relaxed">
                                Certified Rudraksha, explained simply, by mukhi, origin, and size.
                            </p>
                        </div>
                        <div className="space-y-1.5 sm:space-y-2 mt-4 pr-12 sm:pr-14 lg:pr-16 w-[320px]">
                            <p className="font-bold text-white text-[12px] sm:text-[13px] lg:text-[14px] font-open-sans">
                                What you&apos;ll find
                            </p>
                            <p className="font-normal text-white/95 text-[11px] sm:text-[12px] lg:text-[13px] font-open-sans leading-snug">
                                1-21 Mukhi Rudraksha + Gauri Shankar, Garbh Gauri & special forms.
                            </p>
                            <p className="font-bold text-white text-[12px] sm:text-[13px] lg:text-[14px] font-open-sans mt-2">
                                How to choose
                            </p>
                            <p className="font-normal text-white/95 text-[11px] sm:text-[12px] lg:text-[13px] font-open-sans leading-snug">
                                Mukhi clarity, origin, bead size (mm), wear vs japa.
                            </p>
                        </div>
                        <div className="absolute bottom-4 right-4 sm:bottom-5 sm:right-5 lg:bottom-6 lg:right-6 w-[35px] h-[27px] rounded flex items-center justify-center bg-white shrink-0 shadow-sm">
                            <Image src={ARROW_ICON} alt="" width={32} height={32} className="w-5 h-5 object-contain -rotate-90" style={{ filter: 'brightness(0) saturate(100%) invert(22%) sepia(34%) saturate(1186%) hue-rotate(346deg) brightness(96%) contrast(91%)' }} />
                        </div>
                    </div>
                </div>

                {/* Right column: 2×2 grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-0 auto-rows-fr">
                    {/* Mala text - order-1 on mobile, order-1 on desktop */}
                    <div className="relative flex flex-col justify-center items-center p-4 sm:p-5 bg-white text-center order-1 sm:order-1">

                        {/* Arrow */}
                        <div className="absolute right-[-22px] top-1/2 -translate-y-1/2 cursor-pointer z-10">
                           <img src={RIGHT_ARROW} alt="Left Arrow" className="w-6 h-6" />
                        </div>

                        <h3 className="font-montserrat font-bold text-[#6C3E1A] text-[18px] sm:text-[20px]">
                            Mala
                        </h3>

                        <p className="font-open-sans font-normal text-black text-[13px] sm:text-[14px] lg:text-[15px] mt-1 max-w-[272px] leading-relaxed">
                            Rudraksha Mala, Spatik Mala, Karungali Mala, Black Mala for daily wear and japa, with clear bead sizing and formats.
                        </p>

                        <div className="mt-3">
                            <ExpandRow label="What you'll find" />
                            <ExpandRow label="How to choose" />
                        </div>
                    </div>


                    {/* Mala image - order-2 on mobile, order-2 on desktop */}
                    <div className="relative w-full aspect-[4/3] sm:h-auto sm:min-h-[200px] lg:min-h-[240px] overflow-hidden order-2 sm:order-2">
                        <Image
                            src={BRACELET_IMG}
                            alt="Mala"
                            fill
                            className="object-cover object-top sm:object-center"
                            sizes="100vw"
                        />
                    </div>


                    {/* Bracelet text - order-3 on mobile, order-4 on desktop */}
                    <div className="relative flex flex-col justify-center items-center p-4 sm:p-5 bg-white text-center order-3 sm:order-4">

                        {/* Arrow */}
                        <div className="absolute left-[-22px] top-1/2 -translate-y-1/2 cursor-pointer z-10">
                           <img src={LEFT_ARROW} alt="Left Arrow" className="w-6 h-6" />
                        </div>

                        <h3 className="font-montserrat font-bold text-[#6C3E1A] text-[18px] sm:text-[20px]">
                            Bracelet
                        </h3>
                        <p className="font-open-sans font-normal text-black text-[13px] sm:text-[14px] lg:text-[15px] mt-1 max-w-[272px] leading-relaxed">
                            Easy-to-wear Rudraksha, Horoscope, Semi & Precious Stones bracelets.
                        </p>
                        <div className="mt-3">
                            <ExpandRow label="What you'll find" />
                            <ExpandRow label="How to choose" />
                        </div>
                    </div>

                    {/* Bracelet image - order-4 on mobile, order-3 on desktop */}
                    <div className="relative w-full aspect-[4/3] sm:h-auto sm:min-h-[200px] lg:min-h-[240px] overflow-hidden order-4 sm:order-3">
                        <Image
                            src={MALA_IMG}
                            alt="Bracelet"
                            fill
                            className="object-cover object-top sm:object-center"
                            sizes="100vw"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}

export default S3;
