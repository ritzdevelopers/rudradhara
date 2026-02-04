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

            {/* Cards Grid - 4 alag alag cards, har ek apni styling ke liye */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-3 md:gap-4 lg:gap-3 xl:gap-4 2xl:gap-5 max-w-[1300px] xl:max-w-[1400px] 2xl:max-w-[1600px] mx-auto">
                {/* Card 1 - Daily wear */}
                <div
                    className="relative flex flex-col bg-white rounded-[20px] border-[1px] border-[#EDD589] w-[290px] h-[382px] max-w-full mx-auto overflow-hidden card-1"
                >
                    <div className="relative h-[200px] w-full overflow-hidden shrink-0">
                        <img
                            src="/learn/s2/bracelt.png"
                            alt="Daily wear - green beaded bracelet"
                            className="object-cover"
                        />
                    </div>
                    <div className="flex flex-col gap-3 p-4 sm:p-5 pt-2 sm:pt-3 flex-1 min-h-[152px] text-left">
                        <h3 className="font-montserrat font-bold text-[18px] sm:text-[20px] text-[#1a1a1a">
                            Daily wear
                        </h3>
                        <p className="font-open-sans font-normal text-[16px] sm:text-[16px] text-[#000000] leading-[1.75]">
                            Comfort-first choice for regular wear, light on skin, easy to maintain, suits busy routines daily.
                        </p>
                    </div>
                </div>

                {/* Card 2 - Japa */}
                <div
                    className="relative flex flex-col bg-white rounded-[20px] border border-[#EDD589] w-[290px] h-[382px] max-w-full mx-auto overflow-hidden card-2"
                >
                    <div className="relative h-[200px] w-full overflow-hidden shrink-0">
                        <img
                            src="/learn/s2/Japa.png"
                            alt="Japa - mantra mala for meditation"
                            className="w-full  object-cover"
                        />
                    </div>
                    <div className="flex flex-col gap-3 p-4 sm:p-5 pt-2 sm:pt-3 flex-1 min-h-[152px] text-left">
                        <h3 className="font-montserrat font-bold text-[18px] sm:text-[20px] text-[#1a1a1a">
                            Japa
                        </h3>
                        <p className="font-open-sans font-normal text-[16px] sm:text-[16px] text-[#000000] leading-[1.75]">
                            For mantra repetition, supports steady counting, helps focus, ideal with 108 mala and calm breath.
                        </p>
                    </div>
                </div>

                {/* Card 3 - Protection & Religious */}
                <div
                    className="relative flex flex-col bg-white rounded-[20px] border-[1px] border-[#EDD589] w-[290px] h-[382px] max-w-full mx-auto overflow-hidden card-3"
                >
                    <div className="relative h-[200px] w-full overflow-hidden shrink-0">
                        <img
                            src="/learn/s2/Protection%20%26%20Religious.png"
                            alt="Protection & Religious - sacred beads"
                            className="w-full  object-cover"
                        />
                    </div>
                    <div className="flex flex-col gap-3 p-4 sm:p-5 pt-2 sm:pt-3 flex-1 min-h-[152px] text-left">
                        <h3 className="font-montserrat font-bold text-[18px] sm:text-[20px] text-[#1a1a1a">
                            Protection & Religious
                        </h3>
                        <p className="font-open-sans font-normal text-[16px] sm:text-[16px] text-[#000000] leading-[1.75]">
                            Tradition-led option for prayer and rituals, worn respectfully, chosen for meaning, not complexity alone today.
                        </p>
                    </div>
                </div>

                {/* Card 4 - Gift */}
                <div
                    className="relative flex flex-col bg-white rounded-[20px] border-[1px] border-[#EDD589] w-[290px] h-[382px] max-w-full mx-auto overflow-hidden card-4"
                >
                    <div className="relative h-[200px] w-full overflow-hidden shrink-0">
                        <img
                            src="/learn/s2/Gift.png"
                            alt="Gift - thoughtful bead gift"
                            className="w-full  object-cover"
                        />
                    </div>
                    <div className="flex flex-col gap-3 p-4 sm:p-5 pt-2 sm:pt-3 flex-1 min-h-[152px] text-left">
                        <h3 className="font-montserrat font-bold text-[18px] sm:text-[20px] text-[#1a1a1a">
                            Gift
                        </h3>
                        <p className="font-open-sans font-normal text-[16px] sm:text-[16px] text-[#000000] leading-[1.75] w-[223px]">
                            A meaningful gift for loved ones, simple to wear, easy to care, and thoughtfully chosen.
                        </p>
                    </div>
                </div>
            </div>
        </section >
    );
}

export default S2;
