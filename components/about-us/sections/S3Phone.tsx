import React from 'react';
import Image from 'next/image';
import styles from "./page.module.css";

function S3Phone() {
    return (
        <section className="w-full relative block md:hidden">
            {/* Background Image with natural height */}
            <div className="w-full relative">
                <Image 
                    src="/about/s3/mobile-section-img.jpg" 
                    alt="About Image" 
                    width={800}
                    height={1200}
                    className="w-full h-auto object-cover"
                    priority
                />
                
                {/* Absolute Position Overlay Container with black gradient */}
                <div
                    className="absolute inset-0 w-full h-full"
                    style={{
                        background: "linear-gradient(90deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.6) 40%, rgba(0,0,0,0.4) 100%)"
                    }}
                >
                <div className={`${styles.mainContainer} w-full h-full relative flex flex-col justify-center px-4 sm:px-6 py-8 sm:py-10`}>
                    {/* Left Side Container  */}
                    <div className="flex flex-col w-full gap-6 sm:gap-8">
                        <h4 className='font-[700] text-[28px] sm:text-[32px] text-[#ffffff] font-montserrat'>Why we exist</h4>

                        <div className="flex flex-col gap-4 sm:gap-5">
                            <p className="font-[500] text-[12px] sm:text-[16px] text-[#ffffff] font-poppins">The question behind every decision:</p>
                            <ul className="flex flex-col gap-4 sm:gap-5">
                                <li>
                                    <div className="flex gap-3 sm:gap-4">
                                        <img src="/icons/rudraksh-icn.png" alt="Rudraksha Icon" className="w-[20px] h-[20px] sm:w-[22px] sm:h-[22px] mt-1 sm:mt-1.5 flex-shrink-0" />
                                        <p className="font-[500] text-[16px] sm:text-[22px] text-[#EDD5A9] font-poppins">
                                            Does this help the seeker feel more informed and confident?
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex gap-3 sm:gap-4">
                                        <img src="/icons/rudraksh-icn.png" alt="Rudraksha Icon" className="w-[20px] h-[20px] sm:w-[22px] sm:h-[22px] mt-1 sm:mt-1.5 flex-shrink-0" />
                                        <p className="font-[500] text-[16px] sm:text-[22px] text-[#EDD5A9] font-poppins">
                                            Do you know if what you have is a genuine product?
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex gap-3 sm:gap-4">
                                        <img src="/icons/rudraksh-icn.png" alt="Rudraksha Icon" className="w-[20px] h-[20px] sm:w-[22px] sm:h-[22px] mt-1 sm:mt-1.5 flex-shrink-0" />
                                        <p className="font-[500] text-[16px] sm:text-[22px] text-[#EDD5A9] font-poppins">
                                            Has this been energised with the right intentions?
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Right Side Container - Mobile Version */}
                    <div className="flex flex-col text-center items-center relative gap-6 sm:gap-8 mt-6 sm:mt-8">
                        {/* Top Text Container   */}
                        <p className="font-[600] text-[16px] sm:text-[18px] text-white font-montserrat">
                            Our approach is simple
                        </p>

                        {/* Center Align Image Container  */}
                        <div className='w-full max-w-[207px] relative'>
                            <Image 
                                src="/about/s3/ab-s3-i11.png" 
                                alt="About Image" 
                                width={349}
                                height={211}
                                className="w-full h-auto object-contain" 
                            />

                            {/* Mobile Text Display - Below Image */}
                            <div className="flex flex-col mt-4">
                                <p className="font-[700] text-[14px] sm:text-[15px] text-[#EDD5A9] text-center font-open-sans">No pressure</p>
                                <p className="font-[700] text-[14px] sm:text-[15px] text-[#EDD5A9] text-center font-open-sans">No exaggeration</p>
                                <p className="font-[700] text-[14px] sm:text-[15px] text-[#EDD5A9] text-center font-open-sans">No unnecessary mystique</p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
}

export default S3Phone;