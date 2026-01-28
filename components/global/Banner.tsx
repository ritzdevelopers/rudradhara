import React from "react";
import Image from "next/image";
import styles from "./page.module.css";
function Banner({imgPath, title}: {imgPath: string, title: string}) {

    return (
        <section className={`${styles.bannerHeight} w-full relative h-[366px]`}>
            <Image src={imgPath} alt="Banner" fill />

            {/* Absolute Positioned Content  */}
            <div className="absolute inset-0 flex flex-col justify-center  pl-20">
                <h1 className="text-[32px] font-bold text-white">{title}</h1>
            </div>
        </section>

    )
}

export default Banner;