"use client";

import React from "react";
import Image from "next/image";

const MATERIAL_IMG = "/products/s5/material.jpg";
const CARE_STORAGE_IMG = "/products/s5/care_storage.jpg";
const CERTIFICATION_IMG = "/products/s5/certification.jpg";

function S5() {
    return (
        <section className="w-full bg-white py-10 sm:py-12 md:py-14 lg:py-20 px-4 sm:px-6 md:px-10 lg:px-[35px] xl:px-[70px] relative">
            <div className="max-w-[1300px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6">
                    {/* Left Column */}
                    <div className="lg:col-span-5 flex flex-col">
                        <div className="mb-6 sm:mb-8 lg:mb-10">
                            <h2 className="font-montserrat font-bold text-black text-[24px] sm:text-[28px] md:text-[32px] lg:text-[40px] leading-tight whitespace-nowrap">
                                How we present products
                            </h2>
                            <h3 className="font-montserrat font-normal text-black text-[18px] sm:text-[22px] md:text-[26px] lg:text-[28px] mt-2">
                                Clarity comes first
                            </h3>
                            <p className="font-open-sans font-normal text-black text-[13px] sm:text-[14px] lg:text-[16px] mt-3 sm:mt-4 leading-relaxed max-w-[400px]">
                                Across categories, we keep product information simple and consistent:
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                            <div className="relative w-full sm:w-[280px] md:w-[300px] lg:w-[358px] aspect-[358/201] rounded-xl overflow-hidden shrink-0">
                                <Image src={MATERIAL_IMG} alt="Material, size, and what's included" fill className="object-cover" sizes="(max-width: 639px) 100vw, (max-width: 1023px) 280px, 358px" />
                            </div>
                            <p className="font-open-sans font-semibold text-black text-[14px] sm:text-[15px] lg:text-[16px] leading-relaxed sm:mt-auto sm:mb-4 max-w-[180px]">
                                Material, size, and what&apos;s included
                            </p>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-3 lg:gap-4 lg:ml-auto">
                        <div className="flex flex-col items-center sm:items-start">
                            <div className="relative w-full max-w-[281px] aspect-[281/299] rounded-[10px] overflow-hidden">
                                <Image src={CARE_STORAGE_IMG} alt="Care and storage basics" fill className="object-cover" sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 281px" />
                            </div>
                            <p className="font-open-sans font-semibold text-black text-[14px] sm:text-[15px] lg:text-[18px] mt-3 sm:mt-4 text-center sm:text-left">
                                Care and storage basics
                            </p>
                        </div>
                        <div className="flex flex-col items-center sm:items-start">
                            <div className="relative w-full max-w-[281px] aspect-[281/299] rounded-[10px] overflow-hidden bg-[#F5EFE0]">
                                <Image src={CERTIFICATION_IMG} alt="Certification and documentation for Rudraksha" fill className="object-cover" sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 281px" />
                            </div>
                            <p className="font-open-sans font-semibold text-black text-[18px] sm:text-[15px] lg:text-[18px] mt-3 sm:mt-4 text-center sm:text-left max-w-[288px]">
                                Certification and documentation for Rudraksha
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute left-0 right-0 bottom-0 h-[1px] bg-[#F8DEAE]" />
        </section>
    );
}

export default S5;
