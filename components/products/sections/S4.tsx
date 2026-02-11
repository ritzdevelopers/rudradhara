"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const ARROW_ICON = "/products/s3/arrow.png";

const PRODUCTS = [
    { id: 1, title: "Kavach", image: "/products/s4/kavach.jpg", description: "Traditional protective kavach, presented with clear material and usage context.", href: "/gallery#kavach" },
    { id: 2, title: "Gems", image: "/products/s4/Gems.jpg", description: "Selected gemstones and semi precious spiritual items, with authenticity certificate, guidance on stone type and care.", href: "/gallery#gems" },
    { id: 3, title: "Shivling Set", image: "/products/s4/shivling.jpg", description: "Narmadeshwar, Spatik and Parad Shivling and worship sets with clear material details and respectful usage guidance.", href: "/gallery#shivling-set" },
    { id: 4, title: "Live Copper", image: "/products/s4/live_copper.jpg", description: "Exclusive Rare Copper-based Meru, Kali, Shree Yantra, Hanuman and Ram Lalla energised by Acharyas with absorbing capacity.", href: "/gallery#live-copper" },
    { id: 5, title: "Shankh", image: "/products/s4/shankh.jpg", description: "Shankh and sacred conch items, with simple guidance on types and handling.", href: "/gallery#shankh" },
    { id: 6, title: "Agarbatti", image: "/products/s4/agarbatti.jpg", description: "Incense sticks and Dhoop suited for daily prayers.", href: "/gallery#agarbatti" },
];

function ExpandButton({ label, details, canOpen = true, onOpenChange }: { label: string; details?: string; canOpen?: boolean; onOpenChange?: (open: boolean) => void }) {
    const [open, setOpen] = React.useState(false);
    const [anim, setAnim] = React.useState(false);
    const [pos, setPos] = React.useState<"top" | "bottom" | "center">("bottom");
    const [hpos, setHpos] = React.useState<"center" | "left">("center");
    const triggerRef = React.useRef<HTMLButtonElement | null>(null);
    return (
        <div className="relative flex items-center gap-1.5 sm:gap-2">
            <p className="font-normal text-black text-[12px] sm:text-[13px] lg:text-[14px] font-open-sans">{label}</p>
            <button
                type="button"
                ref={triggerRef}
                onClick={() => {
                    if (!details) return;
                    if (!open) {
                        const w = window.innerWidth;
                        if (w < 640) {
                            setPos("center");
                        } else {
                            if (!canOpen) return;
                            const rect = triggerRef.current?.getBoundingClientRect();
                            const estimated = 120;
                            const margin = 12;
                            if (rect && rect.bottom + estimated + margin > window.innerHeight) {
                                setPos("top");
                            } else {
                                setPos("bottom");
                            }
                            const estimatedWidth = 280;
                            if (rect) {
                                if (rect.left - estimatedWidth / 2 < margin) {
                                    setHpos("left");
                                } else {
                                    setHpos("center");
                                }
                            }
                        }
                        setOpen(true);
                        setTimeout(() => setAnim(true), 10);
                        if (w >= 640 && onOpenChange) onOpenChange(true);
                    } else {
                        setAnim(false);
                        if (onOpenChange) onOpenChange(false);
                        setTimeout(() => setOpen(false), 180);
                    }
                }}
                aria-expanded={open}
                aria-label={open ? "Hide details" : "Show details"}
                className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 rounded flex items-center justify-center bg-[#FDF0D9] text-[#6C3E1A] font-bold text-[12px] sm:text-[13px] lg:text-[14px] font-open-sans shrink-0 transition-colors hover:bg-[#E5CD99]"
            >
                {details ? (open ? "−" : "+") : "+"}
            </button>
            {details && open && pos !== "center" && (
                <div
                    className={`absolute ${hpos === "center" ? "left-6/5 -translate-x-1/2" : "left-0"} z-20 mx-auto w-[280px] sm:w-[300px] lg:w-[320px] max-w-[90vw] rounded border border-[#F6DABC] bg-[#FFF8EB] px-3 py-2 text-black shadow-sm transition-all duration-200 ease-out ${
                        pos === "top" ? "bottom-full -translate-y-2" : "top-full translate-y-2"
                    } ${anim ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
                >
                    <p className="text-center font-open-sans text-[12px] sm:text-[13px] lg:text-[14px] leading-relaxed">
                        {details}
                    </p>
                </div>
            )}
            {details && open && pos === "center" && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-black/20" onClick={() => { setAnim(false); if (onOpenChange) onOpenChange(false); setTimeout(() => setOpen(false), 180); }} />
                    <div className={`relative z-10 w-full max-w-[400px] rounded border border-[#F6DABC] bg-white px-4 py-3 text-black shadow-md transition-all duration-200 ease-out ${anim ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
                        <div className="w-full text-center mb-2">
                            <p className="font-bold text-black text-[13px] sm:text-[14px] lg:text-[15px] font-open-sans">{label}</p>
                        </div>
                        <p className="text-left font-open-sans text-[13px] sm:text-[14px] lg:text-[15px] leading-relaxed">
                            {details}
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}

function ProductCard({ title, image, description, href }: { title: string; image: string; description: string; href?: string }) {
    const [desktopOpenLabel, setDesktopOpenLabel] = React.useState<string | null>(null);
    return (
        <div className="flex flex-col">
            <div className="relative w-full aspect-[4/3] sm:h-[200px] md:h-[220px] lg:h-[240px] rounded-xl overflow-hidden">
                <Image src={image} alt={title} fill className="object-cover" sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw" />
                {href ? (
                    <Link href={href} aria-label={`Go to ${title} section`} className="absolute bottom-3 right-3 w-[35px] h-[27px] rounded flex items-center justify-center bg-white shadow-sm">
                        <Image src={ARROW_ICON} alt="" width={32} height={23} className="w-5 h-5 object-contain -rotate-90" style={{ filter: 'brightness(0) saturate(100%) invert(22%) sepia(34%) saturate(1186%) hue-rotate(346deg) brightness(96%) contrast(91%)' }} />
                    </Link>
                ) : (
                    <div className="absolute bottom-3 right-3 w-[35px] h-[27px] rounded flex items-center justify-center bg-white shadow-sm">
                        <Image src={ARROW_ICON} alt="" width={32} height={23} className="w-5 h-5 object-contain -rotate-90" style={{ filter: 'brightness(0) saturate(100%) invert(22%) sepia(34%) saturate(1186%) hue-rotate(346deg) brightness(96%) contrast(91%)' }} />
                    </div>
                )}
            </div>
            <div className="pt-3 sm:pt-4 pb-2">
                <h3 className="font-montserrat font-bold text-[#6C3E1A] text-[16px] sm:text-[18px] lg:text-[20px]">{title}</h3>
                <p className="font-open-sans font-normal text-black text-[12px] sm:text-[13px] lg:text-[14px] mt-1.5 sm:mt-2 leading-relaxed">{description}</p>
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 lg:gap-6 mt-2 sm:mt-3">
                    <ExpandButton
                        label="What you&apos;ll find"
                        details={
                            title === "Kavach"
                                ? "Different kavach types (as listed) for various purposes."
                                : title === "Gems"
                                    ? "Gem items and deity forms."
                                    : title === "Shivling Set"
                                        ? "Sets with lingam/jalhari and related pieces of various sizes."
                                        : title === "Live Copper"
                                            ? "Only available at RudraDhara Live copper with 21 day instructions."
                                            : title === "Shankh"
                                                ? "Shankh variants – Gold plated, Carved, Dakshinavarti and Authentic Natural Shankh."
                                                : title === "Agarbatti"
                                                    ? "Natural, Hand Rolled, Masala, Charcoal Free and a variety of Bambooless and other Agarbatti and Dhoop Sticks."
                                                    : undefined
                        }
                        canOpen={desktopOpenLabel === null || desktopOpenLabel === "What you&apos;ll find"}
                        onOpenChange={(state) => setDesktopOpenLabel(state ? "What you&apos;ll find" : null)}
                    />
                    <ExpandButton
                        label="How to choose"
                        details={
                            title === "Kavach"
                                ? "Intent, material, placement/wearing guidance."
                                : title === "Gems"
                                    ? "Stone type, size, finish, handling and care."
                                    : title === "Shivling Set"
                                        ? "Material, size, placement, care."
                                        : title === "Live Copper"
                                            ? "Purity, usage, Shastra approved and Results."
                                            : title === "Shankh"
                                                ? "Size, finish, purpose, care."
                                                : title === "Agarbatti"
                                                    ? "Fragrance profile, burn time, storage."
                                                    : undefined
                        }
                        canOpen={desktopOpenLabel === null || desktopOpenLabel === "How to choose"}
                        onOpenChange={(state) => setDesktopOpenLabel(state ? "How to choose" : null)}
                    />
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
                    <ProductCard key={product.id} title={product.title} image={product.image} description={product.description} href={product.href} />
                ))}
            </div>
        </section>
    );
}

export default S4;
