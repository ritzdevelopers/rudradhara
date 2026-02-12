"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const PRODUCT_IMAGES = [
    { src: "/products/s4/agarbatti.jpg", alt: "Agarbatti" },
    { src: "/products/s4/Gems.jpg", alt: "Gems" },
    { src: "/products/s4/kavach.jpg", alt: "Kavach" },
    { src: "/products/s4/live_copper.jpg", alt: "Live Copper" },
    { src: "/products/s4/shankh.jpg", alt: "Shankh" },
    { src: "/products/s4/shivling.jpg", alt: "Shivling" },
];

function S6() {
    const [activeIndex, setActiveIndex] = useState(1);
    const sliderRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handlePrev = () => setActiveIndex((prev) => (prev === 0 ? PRODUCT_IMAGES.length - 1 : prev - 1));
    const handleNext = () => setActiveIndex((prev) => (prev === PRODUCT_IMAGES.length - 1 ? 0 : prev + 1));

    useEffect(() => {
        if (sliderRef.current) {
            const slider = sliderRef.current;
            const activeSlide = slider.children[activeIndex] as HTMLElement;
            if (activeSlide) {
                const scrollPosition = activeSlide.offsetLeft - (slider.offsetWidth / 2) + (activeSlide.offsetWidth / 2);
                slider.scrollTo({ left: scrollPosition, behavior: "smooth" });
            }
        }
    }, [activeIndex]);

    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
        setStartX(e.pageX - (sliderRef.current?.offsetLeft || 0));
        setScrollLeft(sliderRef.current?.scrollLeft || 0);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging) return;
        e.preventDefault();
        const walk = (e.pageX - (sliderRef.current?.offsetLeft || 0) - startX) * 2;
        if (sliderRef.current) sliderRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleDragEnd = () => setIsDragging(false);

    return (
        <section className="w-full bg-white py-10 sm:py-12 md:py-14 lg:py-10">
            <div className="px-4 sm:px-6 md:px-10 lg:px-[35px] xl:px-[70px] max-w-[1440px] mx-auto mb-6 sm:mb-8 lg:mb-12">
                <div className="flex flex-col md:flex-col lg:flex-row items-center md:items-center lg:items-center justify-between gap-4 md:gap-4 lg:gap-0">
                    <h2 className="font-montserrat font-bold text-black text-[20px] sm:text-[24px] md:text-[28px] lg:text-[40px] leading-tight text-center md:text-center lg:text-left order-1">
                        Products Gallery
                    </h2>
                    <div className="flex items-center gap-2 sm:gap-3 order-2 lg:order-2">
                        <button onClick={handlePrev} className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center hover:opacity-70 transition-opacity" aria-label="Previous slide">
                            <Image src="/products/s6/left.svg" alt="Previous" width={24} height={24} className="w-5 h-5 sm:w-6 sm:h-6" />
                        </button>
                        <button onClick={handleNext} className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center hover:opacity-70 transition-opacity" aria-label="Next slide">
                            <Image src="/products/s6/right.svg" alt="Next" width={24} height={24} className="w-5 h-5 sm:w-6 sm:h-6" />
                        </button>
                    </div>
                </div>
            </div>

            <div className="relative w-full overflow-hidden">
                <div
                    ref={sliderRef}
                    className="flex items-center gap-3 sm:gap-4 lg:gap-6 overflow-x-auto scrollbar-hide px-4 sm:px-6 md:px-10 lg:px-[35px] xl:px-[70px] cursor-grab active:cursor-grabbing"
                    style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleDragEnd}
                    onMouseLeave={handleDragEnd}
                >
                    {PRODUCT_IMAGES.map((image, index) => {
                        const isActive = index === activeIndex;
                        return (
                            <div
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                className={`relative shrink-0 rounded-[8px] sm:rounded-[10px] lg:rounded-[12px] overflow-hidden cursor-pointer transition-all duration-500 ease-out ${
                                    isActive
                                        ? "w-[calc(100vw-48px)] max-w-[340px] h-[380px] sm:w-[280px] sm:h-[320px] md:w-[340px] md:h-[380px] lg:w-[400px] lg:h-[440px]"
                                        : "w-[calc(100vw-48px)] max-w-[340px] h-[380px] sm:w-[220px] sm:h-[260px] md:w-[280px] md:h-[320px] lg:w-[320px] lg:h-[360px]"
                                }`}
                            >
                                <Image src={image.src} alt={image.alt} fill className="object-cover" sizes="(max-width: 640px) 220px, (max-width: 768px) 280px, (max-width: 1024px) 340px, 400px" />
                                <div className={`absolute inset-0 bg-white transition-opacity duration-500 ${isActive ? "opacity-0" : "opacity-40"}`} />
                            </div>
                        );
                    })}
                </div>
            </div>

            {activeIndex === PRODUCT_IMAGES.length - 1 && (
                <div className="flex justify-center mt-6 sm:mt-8 px-4">
                    <Link href="/gallery" target="_blank" rel="noopener noreferrer">
                    <button
                        type="button"
                        className="h-[42px] sm:h-[46px] lg:h-[50px] px-5 sm:px-6 rounded-[4px] bg-[#6C3E1A] text-white font-open-sans font-bold text-[13px] sm:text-[14px] lg:text-[15px] hover:bg-[#5a3516] transition-colors shrink-0"
                    >
                        View More Products
                    </button>
                    </Link>
                </div>
            )}

            <div className="w-full h-[1px] bg-[#F8DEAE] mt-10 sm:mt-12 lg:mt-16" />
        </section>
    );
}

export default S6;
