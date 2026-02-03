"use client";

import React from "react";
import Image from "next/image";

const BANNER_SRC = "/products/s1/Product%20Page%20Banner-01%20(1)%201.jpg";

function S1() {
    return (
        <section className="w-full relative h-[220px] sm:h-[280px] md:h-[320px] lg:h-[366px] overflow-hidden">
            <div className="absolute inset-0">
                <Image
                    src={BANNER_SRC}
                    alt="Products – Rudraksha and sacred items"
                    fill
                    className="object-cover object-center"
                    priority
                    quality={95}
                    sizes="100vw"
                />
            </div>
            <h1 className="absolute top-1/2 -translate-y-1/2 left-4 sm:left-8 md:left-12 lg:left-[61px] text-white font-montserrat font-bold text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px]">
                Products
            </h1>
        </section>
    );
}

export default S1;
