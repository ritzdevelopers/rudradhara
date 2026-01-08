"use client";
import Section1 from "./sections/Section1";
import React from 'react';
import Section2 from './sections/Section2';
import Section3 from './sections/Section3';

function Home() {
    return (
        <div>
            <Section1 />
            <Section2 />
            <Section3 />
        </div>
    )
}

export default Home;