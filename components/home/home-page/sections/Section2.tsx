"use client"
import Image from 'next/image';
import React from 'react';
import { MdOutlineArrowOutward } from 'react-icons/md';

function Section2() {
    return (
        <section className='w-full flex justify-center items-center px-20 py-[60px]'>
            {/* Centered Align Container  */}
            <div className="w-full flex flex-col gap-[85px]">

                {/* Row 1 For   */}
                <div className='flex flex-col gap-[25px]'>
                    <div className='text-center'><h2 className='text-[34px] font-semibold text-[#000000]'>Trust Pillars</h2></div>

                    <div>
                        {/* Image Container  */}
                        <div className='w-full h-[264px] relative'>
                            <Image fill src="/images/s2/rdh-s2-i1.png" alt="Trust Pillar Image" className='w-full h-full object-cover'></Image>
                        </div>

                        {/* Cards Container  */}
                        <div className="flex justify-center items-center gap-[150px] -mt-14">
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
                                        <div key={idx} className='w-[250px] flex flex-col justify-center items-center gap-[15px]'>
                                            <div className='w-[86px] h-[86px] relative bg-[#EDD5A9] rounded-full'>
                                                <img src={ob.icn} alt={ob.ttl} className={`${ob.height} ${ob.width} absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 `} />
                                            </div>
                                            <div className='text-center'><h3 className='text-[20px] font-semibold text-[#000000]'>{ob.ttl}</h3></div>
                                            <div className='text-center'><p className='text-[16px] font-[400] text-[#000000]'>{ob.para}</p></div>
                                        </div>
                                    )
                                })}
                        </div>
                    </div>
                </div>


                {/* Row 2 For  */}
                <div className="w-full flex justify-between">
                    {/* Left Side Container  */}
                    <div className="w-[785px] flex flex-col gap-[30px]">

                        {/* Row 1  */}
                        <div className="flex flex-col">
                            <p className='font-[600] text-[16px] text-[#C87A2A] uppercase'>Start here</p>
                            <h2 className='text-[34px] font-[400] text-[#000000]'>New to Rudraksha? <br />
                                <span className='font-[600]'> Start with these</span> <span className="text-[#C87A2A] font-[600]"> quick guides.</span></h2>
                        </div>

                        {/* Row 2  */}
                        <div className="grid grid-cols-2 gap-8">
                            {
                                [{
                                    img: "/images/s2/s2-c1-i1.png",
                                    ttl: "Rudraksha basics",
                                    para: "Mukhi, origin, sizing, and common misconceptions",
                                }, {
                                    img: "/images/s2/s2-c2-i2.png",
                                    ttl: "Daily wear vs Japa mala",
                                    para: "What suits your routine",
                                }, {
                                    img: "/images/s2/s2-c3-i3.png",
                                    ttl: "Nepal/Java/Bhadraksh",
                                    para: "What’s different and how to choose",
                                },
                                {
                                    img: "/images/s2/s2-c4-i4.png",
                                    ttl: "Real vs fake checklist",
                                    para: "What to look for before you decide",
                                },
                                ].map((ob, idx) => {
                                    return (
                                        <div key={idx} className='flex flex-col gap-3'>
                                            {/* Image Container  */}
                                            <div className="relative w-auto min-h-[92px] max-w-[138px]">
                                                <Image src={ob.img} alt={ob.ttl} fill className='object-contain' />
                                            </div>
                                            <div className='flex flex-col gap-2'>
                                                <h2 className='text-[18px] font-[600] text-[#000000]'>{ob.ttl}</h2>
                                                <p className='text-[16px] font-[400] text-[#000000]'>{ob.para}</p>
                                            </div>
                                        </div>
                                    )
                                })}
                        </div>

                        {/* Row 3  */}
                        <div>
                            <button className='cursor-pointer min-w-[200px] h-[50px] bg-[#6C3E1A] rounded-[4px] flex justify-center items-center gap-2 px-3'>
                                <p className='text-[15px] font-bold text-[#ffffff]'>Start Learning</p>
                                <MdOutlineArrowOutward className='w-[30px] h-[30px] text-white' />
                            </button>
                        </div>
                    </div>

                    {/* Right Side Container  */}
                    <div className='min-w-[594px] relative min-h-[200px]'>
                        <div className="absolute left-0 top-0 z-10 w-[400px] h-[400px]">
                            <div className="relative w-full h-full">
                                <Image src="/images/s2/s2-rght-i1.png" alt="Rudraksha Basics" fill className='object-cover' />
                            </div>
                        </div>

                        <div className="absolute right-0 bottom-0 z-5 w-[400px] h-[400px] ">
                            <div className="relative w-full h-full">
                                <Image src="/images/s2/s2-rght-i2.png" alt="Rudraksha Basics" fill className='object-cover' />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Row 3  */}
                <div className="grid grid-cols-4 gap-26">
                    {
                        [
                            {
                                img: "/images/s2/s2-r3-i1.png",
                                ttl: "Loose Rudraksha Beads",
                                ttl2: "(Mukhi 1–21)",
                                para: "Explore mukhi-wise options, and understand how to interpret size, groove clarity, and origin.",
                                btnTxt: "Explore Loose Beads",
                            },
                            {
                                img: "/images/s2/s2-r3-i2.png",
                                ttl: "Rudraksha Malas",
                                ttl2: "(Japa + Daily Wear)",
                                para: "Learn about bead size, weight, comfort, and traditional formats like 108+1.",
                                btnTxt: "Explore Malas",
                            },
                            {
                                img: "/images/s2/s2-r3-i3.png",
                                ttl: "Rudraksha",
                                ttl2: "Bracelets",
                                para: "A comfortable format for daily wear, with clear sizing and care guidance.",
                                btnTxt: "Explore Bracelets",
                            },
                            {
                                img: "/images/s2/s2-r3-i4.png",
                                ttl: "Special",
                                ttl2: "Rudraksha",
                                para: "Distinct forms like Ganesh, Gauri Shankar, and Garbh Gauri, with clear context and handling guidance.",
                                btnTxt: "Explore Special Rudraksha",
                            },
                        ].map((ob, idx) => {
                            return (
                                <div key={idx} className='flex flex-col text-center w-[300px] justify-between gap-2'>
                                    <div className='w-[300px] h-[180px] relative'>
                                        <Image src={ob.img} alt={ob.ttl} fill className='object-cover'></Image>
                                    </div>
                                  <div>
                                  <h2 className='font-[600] text-[20px] text-[#000000]'>
                                        {ob.ttl}
                                    </h2>
                                    {
                                        ob.ttl2 && <h2 className='font-[600] text-[20px] text-[#000000]'> {ob.ttl2}</h2>
                                    }
                                  </div>
                                    <p className='text-[16px] font-[400] text-[#000000] mb-4'>{ob.para}</p>

                                    <button className='cursor-pointer h-[50px] border-[#6C3E1A] border-[1px] rounded-[4px] flex justify-center items-center gap-2 px-3'>
                                        <p className='text-[15px] font-bold text-[#6C3E1A]'>{ob.btnTxt}</p>
                                        <MdOutlineArrowOutward className='w-[30px] h-[30px] text-[#6C3E1A]' />
                                    </button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Section2;