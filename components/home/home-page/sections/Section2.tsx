"use client"
import Image from 'next/image';
import React from 'react';
import { MdOutlineArrowOutward } from 'react-icons/md';

function Section2() {
    return (
        <section className='w-full flex justify-center items-center px-4 sm:px-8 md:px-12 lg:px-20 py-[30px] md:py-[50px] lg:py-[60px]'>
            {/* Centered Align Container  */}
            <div className="w-full main-container flex flex-col gap-8 sm:gap-12 md:gap-16 lg:gap-[85px]">

                {/* Row 1 For   */}
                <div className='flex flex-col gap-4 sm:gap-6 md:gap-[25px]'>
                    <div className='text-center'><h2 className='text-[24px] sm:text-[28px] md:text-[32px] lg:text-[34px] font-semibold text-[#000000] font-montserrat'>Trust Pillars</h2></div>

                    <div>
                        {/* Image Container  */}
                        <div className='w-full h-[180px] sm:h-[220px] md:h-[240px] lg:h-[264px] relative overflow-hidden rounded-[4px]'>
                            <Image fill src="/images/s2/rdh-s2-i-1-1.png" alt="Trust Pillar Image" className='w-full h-full object-cover'></Image>
                        </div>

                        {/* Cards Container  */}
                        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8 md:gap-12 lg:gap-[150px] -mt-8 sm:-mt-10 md:-mt-12 lg:-mt-14 px-4">
                            {[
                                {
                                    icn: "/icons/verified1.png",
                                    ttl: "Verified selection",
                                    para: "We focus on natural quality, clear identification, and consistent sorting standards.",
                                    height: "h-[46px]",
                                    width: "w-[37px]",
                                },
                                {
                                    icn: "/icons/human-mind2.png",
                                    ttl: "Clear product clarity",
                                    para: "Mukhi, origin, size (mm), and care guidance are shown upfront.",
                                    height: "h-[48px]",
                                    width: "w-[50px]",
                                }, {
                                    icn: "/icons/oil-calc2.png",
                                    ttl: "Professional Curation",
                                    para: "A detailed list of Rudrakshas, Yantras, Kavach, and more.",
                                    height: "h-[37px]",
                                    width: "w-[36px]",
                                }].map((ob, idx) => {
                                    return (
                                        <div key={idx} className='w-full sm:w-[250px] md:w-[270px] flex flex-col justify-center items-center gap-3 sm:gap-[15px]'>
                                            <div className='w-[70px] h-[70px] sm:w-[80px] sm:h-[80px] md:w-[86px] md:h-[86px] relative bg-[#EDD5A9] rounded-full'>
                                                <img src={ob.icn} alt={ob.ttl} className={`${ob.height} ${ob.width} absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 `} />
                                            </div>
                                            <div className='text-center'><h3 className='text-[16px] sm:text-[18px] md:text-[20px] font-[600] text-[#000000] font-montserrat'>{ob.ttl}</h3></div>
                                            <div className='text-center'><p className='text-[14px] sm:text-[15px] md:text-[16px] font-[400] text-[#000000] font-open-sans'>{ob.para}</p></div>
                                        </div>
                                    )
                                })}
                        </div>
                    </div>
                </div>


                {/* Row 2 For  */}
                <div className="w-full flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:items-start gap-8 lg:gap-4 xl:gap-6 2xl:gap-0">
                    {/* Left Side Container  */}
                    <div className="w-full lg:w-[600px] xl:w-[700px] 2xl:w-[785px] flex flex-col gap-12  md:gap-[30px] items-center lg:items-start">

                        {/* Row 1  */}
                        <div className="flex flex-col text-center lg:text-left">
                            <p className='font-[600] text-[14px] sm:text-[15px] md:text-[16px] text-[#C87A2A] uppercase font-montserrat'>Start here</p>
                            <h2 className='text-[24px] sm:text-[28px] md:text-[32px] lg:text-[34px] font-[400] text-[#000000] font-montserrat leading-tight'>New to Rudraksha? <br />
                                <span className='font-[600]'> Start with these</span> <span className="text-[#C87A2A] font-[600]"> quick guides.</span></h2>
                        </div>

                        {/* Row 2  */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 w-full">
                            {
                                [{
                                    img: "/images/s2/rudrakhs-basics.png",
                                    ttl: "Rudraksha basics",
                                    para: "Mukhi, origin, sizing, and common misconceptions",
                                }, {
                              img: "/images/s2/jaap-maala.png",
                                    ttl: "Daily wear vs Japa mala",
                                    para: "What suits your routine",
                                }, {
                                    img: "/images/s2/s2-c3-i3-3.png",
                                    ttl: "Nepal/Java/Bhadraksh",
                                    para: "What's different and how to choose",
                                },
                                {
                                    img: "/images/s2/s2-c4-i4-4.png",
                                    ttl: "Real vs fake checklist",
                                    para: "What to look for before you decide",
                                },
                                ].map((ob, idx) => {
                                    return (
                                        <div key={idx} className='flex flex-col gap-2 sm:gap-3 items-center lg:items-start'>
                                            {/* Image Container  */}
                                            <div className="relative flex justify-center lg:justify-start" style={{ width: "auto", minHeight: "87px" }}>
                                                <Image
                                                    src={ob.img}
                                                    alt={ob.ttl}
                                                    width={138}
                                                    height={87}
                                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 138px"
                                                    className="object-contain w-auto h-full "
                                                />
                                            </div>
                                            <div className='flex flex-col gap-1 sm:gap-2 text-center lg:text-left'>
                                                <h2 className='text-[16px] sm:text-[17px] md:text-[18px] font-[600] text-[#000000] font-montserrat'>{ob.ttl}</h2>
                                                <p className='text-[14px] sm:text-[15px] md:text-[16px] font-[400] text-[#000000] font-open-sans'>{ob.para}</p>
                                            </div>
                                        </div>
                                    )
                                })}
                        </div>

                        {/* Row 3  */}
                        <div className='w-full flex justify-center lg:justify-start'>
                            <button className='cursor-pointer w-[72%] md:w-auto sm:min-w-[200px] h-[44px] sm:h-[48px] md:h-[50px] bg-[#6C3E1A] rounded-[4px] flex justify-center items-center gap-2 px-3 hover:bg-[#5a3315] transition-colors'>
                                <p className='text-[14px] sm:text-[15px] font-bold text-[#ffffff] font-open-sans'>Start Learning</p>
                                <MdOutlineArrowOutward className='w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] md:w-[30px] md:h-[30px] text-white' />
                            </button>
                        </div>
                    </div>

                    {/* Right Side Container  */}
                    <div className='hidden lg:block w-full lg:w-[350px] xl:w-[450px] 2xl:min-w-[594px] relative min-h-[400px] lg:min-h-[450px] xl:min-h-[520px] 2xl:min-h-[580px]'>
                        <div className="absolute lg:left-4 xl:-left-28 top-0 z-10 lg:w-[250px] lg:h-[250px] xl:w-[400px] xl:h-[400px] abs-dv">
                            <div className="relative w-full h-full">
                                <Image src="/images/s2/s2-rght-i1.png" alt="Rudraksha Basics" fill className='object-cover rounded-[4px]' />
                            </div>
                        </div>

                        <div className="absolute lg:right-4  xl:right-0 bottom-0 xl:-bottom-10 z-5 lg:w-[250px] lg:h-[250px] xl:w-[400px] xl:h-[400px]">
                            <div className="relative w-full h-full">
                                <Image src="/images/s2/s2-rght-i2-2.png" alt="Rudraksha Basics" fill className='object-cover rounded-[4px]' />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Row 3  */}
                <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 justify-center items-center">
                    <div className='flex justify-center items-center text-center'>
                        <h2 className='font-[600] mt-4 md:mt-0 text-[24px] sm:text-[28px] md:text-[32px] lg:text-[34px] text-[#000000] font-montserrat'>Rudraksha collections </h2>
                    </div>

                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
                        {
                            [
                                {
                                    img: "/images/s2/Loose-Rudraksha-Beads.png",
                                    ttl: "Loose Rudraksha Beads",
                                    ttl2: "(Mukhi 1–21)",
                                    para: "Explore mukhi-wise options, and understand how to interpret size, groove clarity, and origin.",
                                    btnTxt: "Explore Loose Beads",
                                },
                                {
                                    img: "/images/s2/Loose-Rudraksha-Beads2.png",
                                    ttl: "Rudraksha Malas",
                                    ttl2: "(Japa + Daily Wear)",
                                    para: "Learn about bead size, weight, comfort, and traditional formats like 108+1.",
                                    btnTxt: "Explore Malas",
                                },
                                {
                                    img: "/images/s2/Rudraksha-breaslets.png",
                                    ttl: "Rudraksha",
                                    ttl2: "Bracelets",
                                    para: "A comfortable format for daily wear, with clear sizing and care guidance.",
                                    btnTxt: "Explore Bracelets",
                                },
                                {
                                    img: "/images/s2/Special-rudrakhsh.png",
                                    ttl: "Special",
                                    ttl2: "Rudraksha",
                                    para: "Distinct forms like Ganesh, Gauri Shankar, and Garbh Gauri, with clear context and handling guidance.",
                                    btnTxt: "Explore Special Rudraksha",
                                },
                            ].map((ob, idx) => {
                                return (
                                    <div key={idx} className='flex flex-col text-center w-full max-w-[300px] mx-auto justify-between gap-2 md:gap-3'>
                                        <div className='w-full overflow-hidden rounded-[4px] h-[150px] sm:h-[170px] md:h-[180px] relative'>
                                            <Image src={ob.img} alt={ob.ttl} fill className='object-cover'></Image>
                                        </div>
                                        <div>
                                            <h2 className='font-[600] font-montserrat text-[16px] sm:text-[18px] md:text-[20px] text-[#000000]'>
                                                {ob.ttl}
                                            </h2>
                                            {
                                                ob.ttl2 && <h2 className='font-[600] font-montserrat text-[16px] sm:text-[18px] md:text-[20px] text-[#000000]'> {ob.ttl2}</h2>
                                            }
                                        </div>
                                        <p className='text-[14px] sm:text-[15px] md:text-[16px] font-[400] text-[#000000] font-open-sans mb-2 sm:mb-4'>{ob.para}</p>

                                        <button className='cursor-pointer h-[44px] sm:h-[48px] md:h-[50px] border-[#6C3E1A] border-[1px] rounded-[4px] flex justify-center items-center gap-2 px-3 hover:bg-[#6C3E1A] hover:text-white transition-colors group'>
                                            <p className='text-[13px] sm:text-[14px] md:text-[15px] font-bold text-[#6C3E1A] group-hover:text-white transition-colors'>{ob.btnTxt}</p>
                                            <MdOutlineArrowOutward className='w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] md:w-[30px] md:h-[30px] text-[#6C3E1A] group-hover:text-white transition-colors' />
                                        </button>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section2;