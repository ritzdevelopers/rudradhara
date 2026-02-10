import React from "react";
import Image from "next/image";

function S1() {
    return (
        <section className="w-full relative h-[250px] xs:h-[280px] sm:h-[300px] md:h-[340px] lg:h-[372px] xl:h-[400px] 2xl:h-[420px]">
            {/* Desktop Banner Image */}
            <Image 
                src="/learn/s1/Mask group.png" 
                alt="Learn How to Choose the Right Rudraksha Banner" 
                width={1373}
                height={372}
                className="hidden md:block w-full h-full object-cover"
                priority
                quality={100}
                unoptimized
            />
            
            {/* Mobile Banner Image */}
            <Image 
                src="/learn/s1/Learn-Banner_for-Mob.png" 
                alt="Learn How to Choose the Right Rudraksha Banner" 
                width={1373}
                height={372}
                className="block md:hidden w-full h-full object-cover"
                priority
                quality={100}
                unoptimized
            />

            {/* Overlay for better text visibility on mobile */}
            <div className="absolute inset-0 bg-black/20 md:bg-transparent" />

            {/* Absolute Positioned Content */}
            <div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
                <div className="max-w-[280px] xs:max-w-[320px] sm:max-w-[380px] md:max-w-[450px] lg:max-w-[500px] xl:max-w-[550px] 2xl:max-w-[600px]">
                    <h1 className="text-[20px] xs:text-[22px] sm:text-[26px] md:text-[30px] lg:text-[38px] xl:text-[42px] 2xl:text-[48px] font-bold text-white font-montserrat leading-[1.3] sm:leading-[1.25]">
                        Learn How to Choose <br className="hidden sm:block" />
                        the Right Rudraksha
                    </h1>
                </div>
            </div>
        </section>
    );
}

export default S1;
