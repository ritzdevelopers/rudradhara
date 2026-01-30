import React from 'react'
import Image from 'next/image';
import styles from "./page.module.css";
function S3() {
    return (
        <section className="w-full min-h-[400px] sm:min-h-[500px]  lg:min-h-[613px] relative hidden md:block">
            <Image src="/about/s3/s3-banner.jpg" alt="About Image" fill className="w-full h-full object-cover"></Image>

            {/* Absolute Position Overlay Container with black gradient */}
            <div
                className="absolute inset-0 w-full h-full"
                style={{
                    background: "linear-gradient(90deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.6) 40%, rgba(0,0,0,0.4) 100%)"
                }}
            >
                <div className={`${styles.mainContainer} w-full h-full relative flex flex-col md:flex-row justify-center md:justify-around lg:justify-between lg:items-center lg:px-[35px] xl:px-[70px] py-8 sm:py-10 md:py-12 lg:py-0`}>
                    {/* Left Side Container  */}
                    <div className="flex flex-col w-full md:w-[50%] lg:w-[35%] xl:w-[467px] gap-6 sm:gap-8 lg:gap-[40px] ">
                        <h4 className='font-[700] text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] text-[#ffffff] font-montserrat'>Why we exist</h4>

                        <div className="flex flex-col gap-4 sm:gap-5 lg:gap-[17px]">
                            <p className="font-[500] text-[12px] sm:text-[16px] lg:text-[14px] text-[#ffffff] font-poppins">The question behind every decision:</p>
                            <ul className="flex flex-col gap-4 sm:gap-5 lg:gap-[26px]">
                                <li>
                                    <div className="flex gap-3 sm:gap-4 lg:gap-[17px]">
                                        <img src="/icons/rudraksh-icn.png" alt="Rudraksha Icon" className="w-[20px] h-[20px] sm:w-[22px] sm:h-[22px] lg:w-[23px] lg:h-[23px] mt-1 sm:mt-1.5 lg:mt-2 flex-shrink-0" />
                                        <p className="font-[500] text-[16px] sm:text-[22px] lg:text-[20px] text-[#EDD5A9] font-poppins">
                                            Does this help the seeker feel more informed and confident?
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex gap-3 sm:gap-4 lg:gap-[17px]">
                                        <img src="/icons/rudraksh-icn.png" alt="Rudraksha Icon" className="w-[20px] h-[20px] sm:w-[22px] sm:h-[22px] lg:w-[23px] lg:h-[23px] mt-1 sm:mt-1.5 lg:mt-2 flex-shrink-0" />
                                        <p className="font-[500] text-[16px] sm:text-[22px] lg:text-[20px] text-[#EDD5A9] font-poppins">
                                            Do you know if what you have is a genuine product?
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex gap-3 sm:gap-4 lg:gap-[17px]">
                                        <img src="/icons/rudraksh-icn.png" alt="Rudraksha Icon" className="w-[20px] h-[20px] sm:w-[22px] sm:h-[22px] lg:w-[23px] lg:h-[23px] mt-1 sm:mt-1.5 lg:mt-2 flex-shrink-0" />
                                        <p className="font-[500] text-[16px] sm:text-[22px] lg:text-[20px] text-[#EDD5A9] font-poppins">
                                            Has this been energised with the right intentions?
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Right Side Container  */}
                    <div className={`${styles.marginRight} hidden md:flex  flex-col text-center items-center relative gap-6 sm:gap-8 lg:gap-[35px] mt-3 lg:mt-0 lg:mt-0 lg:mr-40 xl:mr-30`}>

                        {/* Top Text Container   */}
                        <p className="font-[600] text-[16px] sm:text-[18px] lg:text-[20px] text-white font-montserrat">
                            Our approach is simple
                        </p>

                        {/* Center Align Image Container  */}
                        <div className='w-full max-w-[280px] sm:max-w-[320px] md:w-auto md:h-[211px] lg:h-auto lg:w-[349px] relative'>
                            <img src="/about/s3/ab-s3-i11.png" alt="About Image" className="w-full h-full object-contain" />

                            {/* Absolute Text 1  */}
                            <p className="hidden lg:block absolute top-8 -left-[80px] font-[700] text-[17px] text-[#EDD5A9] text-center font-open-sans">No <br /> pressure</p>

                            {/* Absolute Text 2  */}
                            <p className="hidden lg:block absolute top-[60%] -left-[120px] font-[700] text-[17px] text-[#EDD5A9] text-center font-open-sans">No <br /> exaggeration</p>

                            {/* Absolute Text 3  */}
                            <p className="hidden lg:block absolute top-[50%] transform -translate-[50%] -right-[220px] font-[700] text-[17px] text-[#EDD5A9] text-center font-open-sans ">
                                No unnecessary <br /> mystique
                            </p>

                            {/* Mobile/Tablet Text Display - Below Image */}
                            <div className="lg:hidden flex flex-col  mt-4">
                                <p className="font-[700] text-[14px] sm:text-[15px] text-[#EDD5A9] text-center font-open-sans">No pressure</p>
                                <p className="font-[700] text-[14px] sm:text-[15px] text-[#EDD5A9] text-center font-open-sans">No exaggeration</p>
                                <p className="font-[700] text-[14px] sm:text-[15px] text-[#EDD5A9] text-center font-open-sans">No unnecessary mystique</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default S3;