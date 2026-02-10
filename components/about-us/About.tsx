import React from "react";
import Banner from "../global/Banner";
import S2 from "./sections/S2";
import S3 from "./sections/S3";
import S4 from "./sections/S4";
import S5 from "./sections/S5";
import S6 from "./sections/S6";
import S3Phone from "./sections/S3Phone";
import S4Phone from "./sections/S4Phone";

function About() {

    //about-us-mobile-banner.jpg
    return (
        <main className="md:mt-[140px] mt-[110px]">
            <Banner desktopImgPath="/about/s1/about-banner1.png" mobileImgPath="/about/s1/about-us-mobile-banner.jpg" title="About Us" />
            <S2 />
            <S3 />
            <S3Phone />
            <S4 />
            <S4Phone />
            <S5 />
            <S6 />
        </main>
    )
}

export default About;