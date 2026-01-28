import Image from "next/image";
import React from "react";
import styles from "./page.module.css";

function S2() {
    return (
        <section className="w-full   flex flex-col gap-[40px] sm:gap-[50px] lg:gap-[70px] lg:py-[70px] py-[35px] px-4 sm:px-6 md:px-8 lg:px-[35px] xl:px-[70px]">

            {/* Row 1  */}
            <div className={`${styles.mainContainer} flex flex-col gap-[30px] sm:gap-[35px] lg:gap-[40px]`}>
                {/* Top Content   */}
                <div className="w-full flex justify-center items-center text-center flex-col">
                    <h1 className="font-[700] text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px]">About RudraDhara</h1>
                    <p className="font-[500] text-[14px] sm:text-[15px] lg:text-[16px]">Your Spiritual Universe</p>
                </div>

                {/* Main Content  */}
                <div className="flex flex-col lg:flex-row lg:justify-between gap-6">
                    <div className="w-full lg:w-[55%] xl:w-[45%]">
                        <p className="font-[400] text-[14px] sm:text-[15px] lg:text-[16px] leading-relaxed text-center lg:text-left">
                            Rudradhara was established with a clear purpose: to bring authenticity and integrity to the world of Rudraksha and spiritual accessories. <br /> <br />
                            Inspired by the enduring wisdom of our Shastras, which articulate the spiritual and scientific significance of these sacred elements, we aim to preserve their true value. <br /> <br />
                            In an industry challenged by widespread imitation and misinformation, Rudradhara stands as a trusted platform committed to offering genuine spiritual products and presenting the richness of this sacred tradition with transparency, responsibility, and respect.
                        </p>
                    </div>
                    <div className="w-full lg:w-[45%] xl:w-[626px] h-[200px] sm:h-[240px] md:h-[360px] lg:h-[282px] relative">
                        <Image src={"/about/s2/ab-s1-i1.png"} alt="About Image" fill className="w-full h-full object-cover"></Image>
                    </div>
                </div>
            </div>

            {/* Row 2   */}
            <div className="w-full flex justify-center items-center">
                {/* Main Container  */}
                <div className="relative flex flex-col lg:flex-row lg:justify-center lg:items-center gap-8 md:gap-12 lg:gap-0 xl:gap-20 w-full">
                    {/* Col 1  */}
                    <div className="flex  lg:flex-col gap-6 sm:gap-8 lg:gap-[37px] w-full lg:w-auto items-center justify-center lg:justify-start lg:items-start">
                        <div className="w-full max-w-[335px] lg:w-[335px] relative">
                            {/* Main Text Container  */}
                            <div className="w-full relative z-10 bg-[#EDD5A9] md:rounded-full gap-[10px] h-[200px] sm:min-h-[170px] lg:min-h-[180px] flex flex-col justify-center
                                     items-center text-center">
                                <h3 className="font-[700] text-[14px] sm:text-[15px] lg:text-[16px] px-4 sm:px-6 lg:px-18 mb-2">Offer Authenticity You Can Trust</h3>
                                <p className="font-[400] text-[12px] sm:text-[13px] lg:text-[14px] px-4 sm:px-6 lg:px-10">All products are carefully verified and lab certified for authenticity.</p>
                            </div>

                            {/* Absolute Container  */}
                            <div className="hidden xl:block absolute -top-[20px] -right-[122px] w-[126px] h-[126px]">
                                <img src="/about/s2/lft-wire-1.png" alt="About Image" className="w-full h-full" />
                            </div>
                        </div>
                        <div className="w-full max-w-[335px] lg:w-[335px] relative">
                            {/* Main Text Container  */}
                            <div className="w-full relative z-10 bg-[#EDD5A9] md:rounded-full gap-[10px] h-[200px] sm:min-h-[170px] lg:min-h-[180px] flex flex-col justify-center
                                     items-center text-center">
                                <h3 className="font-[700] text-[14px] sm:text-[15px] lg:text-[16px] px-4 sm:px-6 lg:px-18 mb-2">Guide and Educate with Sincerity</h3>
                                <p className="font-[400] text-[12px] sm:text-[13px] lg:text-[14px] px-4 sm:px-6 lg:px-10">We help seekers choose with clarity and confidence.</p>
                            </div>

                             {/* Absolute Container  */}
                             <div className="hidden xl:block absolute -top-[107px] right-[10px] w-[126px] h-[126px]">
                                <img src="/about/s2/lft-wire-2.png" alt="About Image" className="w-full h-full" />
                            </div>
                        </div>
                    </div>

                    {/* Col 2  */}
                    <div className="flex flex-col items-center gap-6 sm:gap-8 lg:gap-[40px] text-center order-first lg:order-none">
                        <p className="font-[600] text-[18px] sm:text-[20px] lg:text-[22px]">
                            Our purpose is clear
                        </p>

                        {/* Logo 1  */}
                        <div className="w-full max-w-[280px] sm:max-w-[320px] lg:w-[361px] h-[220px] sm:h-[260px] lg:h-[298px] relative">
                            <Image src={"/about/s2/ab-s1-logo1.png"} alt="About Image" fill className="w-full h-full object-contain"></Image>
                        </div>

                        {/* Logo 2  */}
                        <div className="w-full max-w-[220px] sm:max-w-[250px] lg:w-[285px] h-auto relative">
                            <img src={"/about/s2/ab-s1-logo2.png"} alt="About Image" className="w-full h-full object-contain"></img>
                        </div>
                    </div>

                    {/* Col 3  */}
                    <div className="flex lg:flex-col gap-6 sm:gap-8 lg:gap-[37px] w-full lg:w-auto items-center justify-center lg:justify-start lg:items-start">
                        <div className="w-full max-w-[335px] lg:w-[335px] relative">
                            {/* Main Text Container  */}
                            <div className="w-full relative z-10 bg-[#EDD5A9] md:rounded-full gap-[10px] h-[200px] sm:min-h-[170px] lg:min-h-[180px] flex flex-col justify-center
                                     items-center text-center">
                                <h3 className="font-[700] text-[14px] sm:text-[15px] lg:text-[16px] px-4 sm:px-6 lg:px-18 mb-2">Bring Tradition to Life</h3>
                                <p className="font-[400] text-[12px] sm:text-[13px] lg:text-[14px] px-4 sm:px-6 lg:px-10">Handpicked offerings rooted in wisdom and devotion, made for daily life.</p>
                            </div>

                                {/* Absolute Container  */}
                                <div className="hidden xl:block absolute top-[0px] -left-[122px] w-[126px] h-[115px]">
                                <img src="/about/s2/rght-wire-1.png" alt="About Image" className="w-full h-full" />
                            </div>
                        </div>
                        <div className="w-full max-w-[335px] lg:w-[335px] relative">
                            {/* Main Text Container  */}
                            <div className="w-full relative z-10 bg-[#EDD5A9] md:rounded-full gap-[10px] h-[200px] sm:min-h-[170px] lg:min-h-[180px] flex flex-col justify-center
                                     items-center text-center">
                                <h3 className="font-[700] text-[14px] sm:text-[15px] lg:text-[16px] px-4 sm:px-6 lg:px-18 mb-2">Support You Every Step of the Way</h3>
                                <p className="font-[400] text-[12px] sm:text-[13px] lg:text-[14px] px-4 sm:px-6 lg:px-10">We stand with you as a trusted partner in your spiritual journey.</p>
                            </div>

                              {/* Absolute Container  */}
                              <div className="hidden xl:block absolute -top-[95px] left-[10px] w-[126px] h-[115px]">
                                <img src="/about/s2/rght-wire-2.png" alt="About Image" className="w-full h-full" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default S2;