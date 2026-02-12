"use client"
import React from "react";
import Link from "next/link";
import { MdOutlineArrowOutward } from "react-icons/md";

const S7 = () => {
  return (
    <section className="w-full pt-6 sm:pt-8 lg:pt-10 pb-10 sm:pb-14 lg:pb-[70px] px-4 sm:px-6 md:px-8 lg:px-[35px] xl:px-[70px] bg-white">
      <div className="max-w-[1372px] mx-auto">
        <div className="relative overflow-hidden bg-white rounded-[4px] shadow-[0_2px_16px_rgba(0,0,0,0.08)] p-5 sm:p-6 md:p-8 lg:p-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6 border border-[#F6DABC]">
          <div className="absolute top-0 right-0 w-[150px] sm:w-[180px] md:w-[200px] lg:w-[220px] aspect-square rounded-full bg-[#F5EBE0] translate-x-[40%] -translate-y-[35%] pointer-events-none" aria-hidden />
          <div className="relative z-10">
            <h3 className="font-montserrat font-bold text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] text-black mb-1 sm:mb-2">
              Not sure where to begin?
            </h3>
            <p className="font-montserrat text-[13px] sm:text-[14px] md:text-[16px] lg:text-[19px] text-black leading-relaxed">
              Start with <span className="font-bold">Rudraksha Basics</span>, then explore by purpose, daily wear, japa, or comfort.
            </p>
          </div>
          <Link
            href="/gallery"
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 inline-flex items-center justify-center gap-2 h-[42px] sm:h-[46px] lg:h-[50px] px-5 sm:px-6 rounded-[4px] bg-[#6C3E1A] text-white font-open-sans font-bold text-[13px] sm:text-[14px] lg:text-[15px] btn-slide2 shrink-0 w-full sm:w-auto"
            onClick={() => { try { localStorage.setItem('scrollToAnchor', 'rudraksha'); } catch {} }}
          >
           <p> Explore Rudraksha</p>
            <MdOutlineArrowOutward className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default S7;
