"use client"
import React, { useEffect } from "react";
import S1 from "./sections/S1";
import S2 from "./sections/S2";
import S3 from "./sections/S3";
import S4 from "./sections/S4";
import S5 from "./sections/S5";
import S6 from "./sections/S6";
import S7 from "./sections/S7";
import S8 from "./sections/S8";
import S9 from "./sections/S9";
import S10 from "./sections/S10";

function LearnHowToChoose() {
    const getOffset = () => {
        const nav = typeof window !== "undefined" ? document.querySelector("nav") : null;
        const h = nav ? nav.getBoundingClientRect().height : 120;
        return Math.round(h + 10);
    };

    useEffect(() => {
        let target = null as string | null;
        try { target = localStorage.getItem('scrollToAnchor'); } catch {}
        if (target) {
            const el = document.getElementById(target);
            if (el) {
                const top = el.getBoundingClientRect().top + window.scrollY - getOffset();
                window.scrollTo({ top, behavior: "smooth" });
            }
            try { localStorage.removeItem('scrollToAnchor'); } catch {}
        }
    }, []);
    return (
        <main className="md:mt-[140px] mt-[110px] w-full max-w-[100vw] min-w-0 overflow-x-hidden">
            <S1 />
            <S2 />
            <S3 />
            <S4 />
            <S5 />
            <S6 />
            <S7 />
            <S8 />
            <S9 />
            <S10 />
        </main>
    );
}

export default LearnHowToChoose;
