import Link from "next/link";
import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";

function S2() {
    return (
        <section className="w-full bg-white py-8 sm:py-10 md:py-12 lg:py-14 px-4 sm:px-6 md:px-8 lg:px-[35px] xl:px-[70px]">
            <div className="w-full max-w-[929px] mx-auto flex flex-col items-center text-center gap-6 sm:gap-7 lg:gap-8">
                <h2 className="font-bold text-black text-[26px] sm:text-[30px] md:text-[34px] lg:text-[38px] font-montserrat">
                    Explore Our Products
                </h2>

                <p className="font-normal text-black text-[14px] sm:text-[15px] md:text-[18px] lg:text-[24px] leading-relaxed font-montserrat">
                    RudraDhara is built around{" "}
                    <span className="font-bold">Rudraksha and spiritual products</span>, presented with clarity, certification, and documentation.
                </p>

                <p className="font-normal text-black text-[14px] sm:text-[15px] lg:text-[16px] leading-relaxed font-montserrat max-w-[889px]">
                    Alongside Rudraksha, we also carry an important & thoughtful range of spiritual essentials that many customers use as part of a complete practice setup and many wonders of our Shastras and scriptures to guide you in your journey.
                </p>

                <p className="font-normal text-black text-[14px] sm:text-[15px] lg:text-[16px] leading-relaxed font-montserrat max-w-[889px]">
                    Use this page to explore each category and understand what to look for, materials, sizing, and how each item is typically used.
                </p>
                
                <Link href="/learn-how-to-choose" target="_blank" rel="noopener noreferrer" aria-label="Learn How To Choose">
                <button
                    type="button"
                    className="bg-[#6C3E1A] btn-slide2 cursor-pointer text-white h-[44px] sm:h-[48px] px-6 sm:px-8 rounded-[4px] font-open-sans font-bold text-[14px] sm:text-[15px] flex items-center justify-center gap-2"
                >
                    <span>Learn How To Choose</span>
                    <MdOutlineArrowOutward className="w-5 h-5 shrink-0" />
                </button>
                </Link>
            </div>
        </section>
    );
}

export default S2;
