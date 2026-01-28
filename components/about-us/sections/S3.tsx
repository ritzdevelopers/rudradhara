import React from 'react'
import Image from 'next/image';
import styles from "./page.module.css";
function S3() {
    return (
        <section className="w-full min-h-[400px] sm:min-h-[500px] md:min-h-[550px] lg:min-h-[613px] relative">
            <Image src="/about/s3/s3-banner.jpg" alt="About Image" fill className="w-full h-full object-cover"></Image>

            {/* Absolute Position Overlay Container with black gradient */}
            <div
                className="absolute inset-0 w-full h-full pointer-events-none"
                style={{
                    background: "linear-gradient(90deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.6) 40%, rgba(0,0,0,0.4) 100%)"
                }}
            >
                <div className={`${styles.mainContainer} w-full h-full relative flex flex-col lg:flex-row justify-center lg:justify-between lg:items-center px-4 sm:px-6 md:px-8 lg:px-[35px] xl:px-[70px] py-8 sm:py-10 md:py-12 lg:py-0`}>
                    {/* Left Side Container  */}
                    <div className="flex flex-col w-full lg:w-[35%] xl:w-[467px] gap-6 sm:gap-8 lg:gap-[40px] ">
                        <h4 className='font-[700] text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] text-[#ffffff]'>Why we exist</h4>

                        <div className="flex flex-col gap-4 sm:gap-5 lg:gap-[17px]">
                            <p className="font-[500] text-[12px] sm:text-[13px] lg:text-[14px] text-[#ffffff]">The question behind every decision:</p>
                            <ul className="flex flex-col gap-4 sm:gap-5 lg:gap-[26px]">
                                <li>
                                    <div className="flex gap-3 sm:gap-4 lg:gap-[17px]">
                                        <img src="/icons/rudraksh-icn.png" alt="Rudraksha Icon" className="w-[20px] h-[20px] sm:w-[22px] sm:h-[22px] lg:w-[23px] lg:h-[23px] mt-1 sm:mt-1.5 lg:mt-2 flex-shrink-0" />
                                        <p className="font-[500] text-[16px] sm:text-[18px] lg:text-[20px] text-[#EDD5A9]">
                                            Does this help the seeker feel more informed and confident?
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex gap-3 sm:gap-4 lg:gap-[17px]">
                                        <img src="/icons/rudraksh-icn.png" alt="Rudraksha Icon" className="w-[20px] h-[20px] sm:w-[22px] sm:h-[22px] lg:w-[23px] lg:h-[23px] mt-1 sm:mt-1.5 lg:mt-2 flex-shrink-0" />
                                        <p className="font-[500] text-[16px] sm:text-[18px] lg:text-[20px] text-[#EDD5A9]">
                                            Do you know if what you have is a genuine product?
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex gap-3 sm:gap-4 lg:gap-[17px]">
                                        <img src="/icons/rudraksh-icn.png" alt="Rudraksha Icon" className="w-[20px] h-[20px] sm:w-[22px] sm:h-[22px] lg:w-[23px] lg:h-[23px] mt-1 sm:mt-1.5 lg:mt-2 flex-shrink-0" />
                                        <p className="font-[500] text-[16px] sm:text-[18px] lg:text-[20px] text-[#EDD5A9]">
                                            Has this been energised with the right intentions?
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Right Side Container  */}
                    <div className={`${styles.marginRight} hidden lg:flex  flex-col text-center items-center relative gap-6 sm:gap-8 lg:gap-[35px] mt-6 sm:mt-8 lg:mt-0 lg:mr-40 xl:mr-30`}>

                        {/* Top Text Container   */}
                        <p className="font-[600] text-[16px] sm:text-[18px] lg:text-[20px] text-white">
                            Our approach is simple
                        </p>

                        {/* Center Align Image Container  */}
                        <div className='w-full max-w-[280px] sm:max-w-[320px] lg:w-[349px] relative'>
                            <img src="/about/s3/ab-s3-i1.png" alt="About Image" className="w-full h-full object-contain" />

                            {/* Absolute Text 1  */}
                            <p className="hidden lg:block absolute top-8 -left-[80px] font-[700] text-[17px] text-[#EDD5A9] text-center">No <br /> pressure</p>

                            {/* Absolute Text 2  */}
                            <p className="hidden lg:block absolute top-[60%] -left-[120px] font-[700] text-[17px] text-[#EDD5A9] text-center">No <br /> exaggeration</p>

                            {/* Absolute Text 3  */}
                            <p className="hidden lg:block absolute top-[50%] transform -translate-[50%] -right-[220px] font-[700] text-[17px] text-[#EDD5A9] text-center">
                                No unnecessary <br /> mystique
                            </p>

                            {/* Mobile/Tablet Text Display - Below Image */}
                            <div className="lg:hidden flex flex-col gap-3 mt-4">
                                <p className="font-[700] text-[14px] sm:text-[15px] text-[#EDD5A9] text-center">No pressure</p>
                                <p className="font-[700] text-[14px] sm:text-[15px] text-[#EDD5A9] text-center">No exaggeration</p>
                                <p className="font-[700] text-[14px] sm:text-[15px] text-[#EDD5A9] text-center">No unnecessary mystique</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default S3;