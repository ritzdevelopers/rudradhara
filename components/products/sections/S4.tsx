"use client";

import React from "react";
import Image from "next/image";

const ARROW_ICON = "/products/s3/arrow.png";

const PRODUCTS = [
    { id: 1, title: "Kavach", image: "/products/s4/kavach.jpg", description: "Traditional protective kavach, presented with clear material and usage context." },
    { id: 2, title: "Gems", image: "/products/s4/Gems.jpg", description: "Selected gemstones and semi precious spiritual items, with authenticity certificate, guidance on stone type and care." },
    { id: 3, title: "Shivling Set", image: "/products/s4/shivling.jpg", description: "Narmadeshwar, Spatik and Parad Shivling and worship sets with clear material details and respectful usage guidance." },
    { id: 4, title: "Live Copper", image: "/products/s4/live_copper.jpg", description: "Exclusive Rare Copper-based Meru, Kali, Shree Yantra, Hanuman and Ram Lalla energised by Acharyas with absorbing capacity." },
    { id: 5, title: "Shankh", image: "/products/s4/shankh.jpg", description: "Shankh and sacred conch items, with simple guidance on types and handling." },
    { id: 6, title: "Agarbatti", image: "/products/s4/agarbatti.jpg", description: "Incense sticks and Dhoop suited for daily prayers." },
];

function ExpandButton({ label }: { label: string }) {
    return (
        <div className="flex items-center gap-1.5 sm:gap-2">
            <p className="font-normal text-black text-[12px] sm:text-[13px] lg:text-[14px] font-open-sans">{label}</p>
            <button
                type="button"
                className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 rounded flex items-center justify-center bg-[#FDF0D9] text-[#6C3E1A] font-bold text-[12px] sm:text-[13px] lg:text-[14px] font-open-sans shrink-0 transition-colors hover:bg-[#E5CD99]"
            >
                +
            </button>
        </div>
    );
}

function ProductCard({ title, image, description }: { title: string; image: string; description: string }) {
    return (
        <div className="flex flex-col">
            <div className="relative w-full aspect-[4/3] sm:h-[200px] md:h-[220px] lg:h-[240px] rounded-xl overflow-hidden">
                <Image src={image} alt={title} fill className="object-cover" sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw" />
                <div className="absolute bottom-3 right-3 w-[35px] h-[27px] rounded flex items-center justify-center bg-white shadow-sm">
                    <Image src={ARROW_ICON} alt="" width={32} height={23} className="w-5 h-5 object-contain -rotate-90" style={{ filter: 'brightness(0) saturate(100%) invert(22%) sepia(34%) saturate(1186%) hue-rotate(346deg) brightness(96%) contrast(91%)' }} />
                </div>
            </div>
            <div className="pt-3 sm:pt-4 pb-2">
                <h3 className="font-montserrat font-bold text-[#6C3E1A] text-[16px] sm:text-[18px] lg:text-[20px]">{title}</h3>
                <p className="font-open-sans font-normal text-black text-[12px] sm:text-[13px] lg:text-[14px] mt-1.5 sm:mt-2 leading-relaxed">{description}</p>
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 lg:gap-6 mt-2 sm:mt-3">
                    <ExpandButton label="What you'll find" />
                    <ExpandButton label="How to choose" />
                </div>
            </div>
        </div>
    );
}

function S4() {
    return (
        <section className="w-full bg-[#FDF8F0] py-10 sm:py-12 md:py-14 lg:py-20 px-4 sm:px-6 md:px-10 lg:px-[35px] xl:px-[70px]">
            <h2 className="font-montserrat font-bold text-black text-[24px] sm:text-[28px] md:text-[32px] lg:text-[38px] text-center mb-8 sm:mb-10 lg:mb-14">
                Complementary Spiritual Essentials
            </h2>
            <div className="max-w-[1300px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-6 lg:gap-8">
                {PRODUCTS.map((product) => (
                    <ProductCard key={product.id} title={product.title} image={product.image} description={product.description} />
                ))}
            </div>
        </section>
    );
}

export default S4;
