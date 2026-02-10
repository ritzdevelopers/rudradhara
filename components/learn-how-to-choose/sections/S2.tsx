"use client";

import React from "react";

function S2() {
    return (
        <section className="w-full py-[40px] sm:py-[50px] md:py-[60px] lg:py-[70px] xl:py-[80px] 2xl:py-[90px] px-4 sm:px-6 md:px-8 lg:px-[35px] xl:px-[70px] 2xl:px-[80px] bg-white">
            {/* Section Header */}
            <div className="flex flex-col items-center gap-1 mb-[30px] sm:mb-[35px] md:mb-[40px] lg:mb-[50px] xl:mb-[55px] 2xl:mb-[60px]">
                {/* Step Badge - Custom Made */}
                <div className="relative w-[58px] h-[65px] sm:w-[62px] sm:h-[69px] md:w-[64px] md:h-[70px] lg:w-[65px] lg:h-[71px] xl:w-[68px] xl:h-[74px] 2xl:w-[70px] 2xl:h-[76px]">
                    {/* Circle */}
                    <div className="absolute top-0 left-0 w-[58px] h-[58px] sm:w-[62px] sm:h-[62px] md:w-[64px] md:h-[64px] lg:w-[65px] lg:h-[65px] xl:w-[68px] xl:h-[68px] 2xl:w-[70px] 2xl:h-[70px] rounded-full bg-[#EDD5A9] flex flex-col items-center justify-center">
                        <span className="text-[9px] sm:text-[10px] md:text-[10px] lg:text-[11px] xl:text-[11px] 2xl:text-[12px] font-semibold text-[#6C3E1A] tracking-wide font-open-sans">
                            STEP
                        </span>
                        <span className="text-[22px] sm:text-[24px] md:text-[24px] lg:text-[26px] xl:text-[27px] 2xl:text-[28px] font-bold text-[#6C3E1A] font-montserrat leading-none -mt-[2px]">
                            1
                        </span>
                    </div>
                    {/* Triangle Pointer */}
                    <div
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0"
                        style={{
                            borderLeft: '8px solid transparent',
                            borderRight: '8px solid transparent',
                            borderTop: '10px solid #EDD5A9',
                        }}
                    />
                </div>

                {/* Title */}
                <h2 className="font-montserrat font-bold text-[24px] sm:text-[26px] md:text-[30px] lg:text-[38px] xl:text-[42px] 2xl:text-[46px] text-center text-[#1a1a1a] mt-1">
                    Decide your Purpose
                </h2>
            </div>

            {/* Cards Grid - 2x2 on mobile/md, 4 in a row on lg+ */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-7 2xl:gap-8 max-w-[1300px] xl:max-w-[1400px] 2xl:max-w-[1600px] mx-auto">
                {/* Card 1 - Daily wear */}
                <div
                    className="relative flex flex-col bg-white rounded-[12px] sm:rounded-[16px] md:rounded-[20px] border-[1px] border-[#EDD589] w-full overflow-hidden card-1"
                >
                    <div className="relative w-full    aspect-[4/3] lg:w-full overflow-hidden shrink-0">
                        <img
                            src="/learn/s2/bracelt.png"
                            alt="Daily wear - green beaded bracelet"
                            className="object-cover object-center sm:w-[85%] md:w-[74%]"
                        />
                    </div>
                    <div className="flex flex-col gap-0.5 sm:gap-1 lg:gap-2 px-2 sm:px-3 md:px-4 lg:px-5 pt-1.5 pb-2 sm:pb-3 md:pb-4 lg:pb-5 flex-1 text-left">
                        <h3 className="font-montserrat font-bold text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-[#1a1a1a]">
                            Daily wear
                        </h3>
                        <p className="font-open-sans font-normal text-[10px] sm:text-[12px] md:text-[16px] lg:text-[16px] text-[#000000] leading-[1.6] sm:leading-[1.7] lg:leading-[1.75] max-w-[130px] sm:max-w-full lg:max-w-[237px] mb:pt-[0px]">
                            Comfort-first choice for regular wear, light on skin, easy to maintain, suits busy routines daily.
                        </p>
                    </div>
                </div>

                {/* Card 2 - Japa */}
                <div
                    className="relative flex flex-col bg-white rounded-[12px] sm:rounded-[16px] md:rounded-[20px] border border-[#EDD589] w-full overflow-hidden card-2"
                >
                    <div className="relative w-full aspect-[4/3] overflow-hidden shrink-0">
                        <img
                            src="/learn/s2/Japa.png"
                            alt="Japa - mantra mala for meditation"
                            className="object-cover object-center"
                        />
                    </div>
                    <div className="flex flex-col gap-0.5 sm:gap-1 lg:gap-2 px-2 sm:px-3 md:px-4 lg:px-5 pt-1.5 pb-2 sm:pb-3 md:pb-4 lg:pb-5 flex-1 text-left">
                        <h3 className="font-montserrat font-bold text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-[#1a1a1a]">
                            Japa
                        </h3>
                        <p className="font-open-sans font-normal text-[10px] sm:text-[12px] md:text-[16px] lg:text-[16px] text-[#000000] leading-[1.6] sm:leading-[1.7] lg:leading-[1.75] max-w-[130px] sm:max-w-full lg:max-w-[240px] mb:pt-[0px]">
                            For mantra repetition, supports steady counting, helps focus, ideal with 108 mala and calm breath.
                        </p>
                    </div>
                </div>

                {/* Card 3 - Protection & Religious */}
                <div
                    className="relative flex flex-col bg-white rounded-[12px] sm:rounded-[16px] md:rounded-[20px] border-[1px] border-[#EDD589] w-full overflow-hidden card-3"
                >
                    <div className="relative w-full aspect-[4/3] overflow-hidden shrink-0">
                        <img
                            src="/learn/s2/Protection%20%26%20Religious.png"
                            alt="Protection & Religious - sacred beads"
                            className=" object-cover object-center"
                        />
                    </div>
                    <div className="flex flex-col gap-0.5 sm:gap-1 lg:gap-2 px-2 sm:px-3 md:px-4 lg:px-5 pt-1.5 pb-2 sm:pb-3 md:pb-4 lg:pb-5 flex-1 text-left">
                        <h3 className="font-montserrat font-bold text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-[#1a1a1a]">
                            Protection & Religious
                        </h3>
                        <p className="font-open-sans font-normal text-[10px] sm:text-[12px] md:text-[16px] lg:text-[16px] text-[#000000] leading-[1.6] sm:leading-[1.7] lg:leading-[1.75] max-w-[130px] sm:max-w-full lg:max-w-[248px] mb:pt-[0px]">
                            Tradition-led option for prayer and rituals, worn respectfully, chosen for meaning, not complexity alone today.
                        </p>
                    </div>
                </div>

                {/* Card 4 - Gift */}
                <div
                    className="relative flex flex-col bg-white rounded-[12px] sm:rounded-[16px] md:rounded-[20px] border-[1px] border-[#EDD589] w-full overflow-hidden card-4"
                >
                    <div className="relative w-full aspect-[4/3] overflow-hidden shrink-0">
                        <img
                            src="/learn/s2/Gift.png"
                            alt="Gift - thoughtful bead gift"
                            className=" object-cover object-center"
                        />
                    </div>
                    <div className="flex flex-col gap-0.5 sm:gap-1 lg:gap-2 px-2 sm:px-3 md:px-4 lg:px-5 pt-1.5 pb-2 sm:pb-3 md:pb-4 lg:pb-5 flex-1 text-left">
                        <h3 className="font-montserrat font-bold text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-[#1a1a1a]">
                            Gift
                        </h3>
                        <p className="font-open-sans font-normal text-[10px] sm:text-[12px] md:text-[16px] lg:text-[16px] text-[#000000] leading-[1.6] sm:leading-[1.7] lg:leading-[1.75] max-w-[130px] sm:max-w-full lg:max-w-[223px] mb:pt-[0px]">
                            A meaningful gift for loved ones, simple to wear, easy to care, and thoughtfully chosen.
                        </p>
                    </div>
                </div>
            </div>
        </section >
    );
}

export default S2;
