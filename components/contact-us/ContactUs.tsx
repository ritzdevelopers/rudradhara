 "use client";
 
import React, { useEffect } from "react";
import Banner from "../global/Banner";
import S2 from "./sections/S2";
import S3 from "./sections/S3";
import S4 from "./sections/S4";
import S5 from "./sections/S5";
import S6 from "./sections/S6";


function ContactUs(){
    useEffect(() => {
        const scrollTo = (id: string) => {
            const tryScroll = () => {
                const el = document.getElementById(id);
                if (el) {
                    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                } else {
                    setTimeout(tryScroll, 100);
                }
            };
            setTimeout(tryScroll, 0);
        };
        let visitFlag = null as string | null;
        try { visitFlag = localStorage.getItem('scrollToVisitStore'); } catch {}
        if (visitFlag) {
            scrollTo('visit-our-store');
            try { localStorage.removeItem('scrollToVisitStore'); } catch {}
        }
        let anchor = null as string | null;
        try { anchor = localStorage.getItem('scrollToAnchor'); } catch {}
        if (anchor) {
            scrollTo(anchor);
            try { localStorage.removeItem('scrollToAnchor'); } catch {}
        }
    }, []);
    return (
        <main className="md:mt-[140px] mt-[110px]">
        <Banner desktopImgPath="/contact/s1/contact-banner1.png" mobileImgPath="/contact/s1/contact-us-mobile-banner.jpg" title="Contact Us" />
        <S2 />
        <S3 />
        <S4 />
        <S5 />
        <S6 />
        </main>
    );
}

export default ContactUs;
