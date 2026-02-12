"use client";
import Section1 from "./sections/Section1";
import React, { useEffect } from 'react';
import Section2 from './sections/Section2';
import Section3 from './sections/Section3';
import Section4 from './sections/Section4';

function Home() {
    useEffect(() => {
        let anchor = null as string | null;
        try { anchor = localStorage.getItem('scrollToAnchor'); } catch {}
        if (anchor) {
            const tryScroll = () => {
                const el = document.getElementById(anchor as string);
                if (el) {
                    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                } else {
                    setTimeout(tryScroll, 100);
                }
            };
            setTimeout(tryScroll, 0);
            try { localStorage.removeItem('scrollToAnchor'); } catch {}
        }
    }, []);
    return (
        <div>
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
        </div>
    )
}

export default Home;
