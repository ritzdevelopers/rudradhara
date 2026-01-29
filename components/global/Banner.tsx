import React from "react";
import Image from "next/image";
import styles from "./page.module.css";
function Banner({desktopImgPath, mobileImgPath, title}: {desktopImgPath: string, mobileImgPath: string, title: string}) {

    return (
        <section className={`${styles.bannerHeight} w-full relative h-[366px]`}>
            <Image src={desktopImgPath} alt="Banner" fill className="hidden md:block" />
            <Image src={mobileImgPath} alt="Banner" fill className="block md:hidden" />

            {/* Absolute Positioned Content  */}
            <div className="absolute inset-0 flex flex-col justify-center  lg:pl-20 pl-4">
                <h1 className="text-[32px] font-bold text-white">{title}</h1>
            </div>
        </section>

    )
}

export default Banner;