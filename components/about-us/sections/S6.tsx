import React from 'react'
import styles from "./page.module.css";
function S6() {
    return (
        <section className='w-full  flex flex-col items-center py-10 sm:py-12 md:py-14 lg:py-[70px] px-4 sm:px-6 md:px-8 lg:px-[35px] xl:px-[70px] gap-10 sm:gap-12 md:gap-14 lg:gap-[70px]'>
            {/* Row 1  */}
            <div className={`${styles.mainContainer} w-full flex flex-col lg:flex-row lg:justify-between gap-8 sm:gap-10 lg:gap-0`}>
                {/* Left Side Container  */}
                <div className='flex flex-col gap-4 sm:gap-5 lg:gap-4 w-full lg:w-auto'>
                    {/* Top Text Container  */}
                    <div className="flex flex-col w-full lg:w-[480px]">
                        <h2 className="font-[700] text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px]">
                            RudraDhara <br /> Mauritius
                        </h2>
                        <p className="font-[400] text-[14px] sm:text-[15px] lg:text-[16px] mt-2 sm:mt-3">
                            RudraDhara is based in Mauritius, serving both local seekers through our store and those looking for authentic spiritual products online
                        </p>
                    </div>

                    {/* Bottom Container  */}
                    <div className='flex flex-col sm:flex-row lg:flex-row gap-4 sm:gap-6 lg:gap-0'>
                        {/* Card 1  */}
                        <div className='p-6 sm:p-7 lg:p-4 xl:p-8 border-[1px] border-[#E5E5E5] flex flex-col gap-4 sm:gap-5 lg:gap-[20px]'>
                            <p className='font-[400] text-[24px] sm:text-[26px] lg:text-[30px]'>In-store</p>

                            <div className='flex flex-col gap-5 sm:gap-6 lg:gap-[24px]'>
                                <p className='font-[400] text-[14px] sm:text-[15px] lg:text-[16px]'>A calm, guided environment where:</p>
                                <ul className='flex flex-col gap-3 sm:gap-4 lg:gap-[14px]'>
                                    <li>
                                        <div className="flex gap-3 sm:gap-4 lg:gap-[17px]">
                                            <img src="/icons/rudraksh-icn2.png" alt="Rudraksha Icon" className="w-[20px] h-[20px] sm:w-[22px] sm:h-[22px] lg:w-[23px] lg:h-[23px] mt-1 sm:mt-1.5 lg:mt-2 shrink-0" />
                                            <p className="font-[500] text-[16px] sm:text-[18px] lg:text-[20px] text-[#6C3E1A]">
                                                We want your questions
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex gap-3 sm:gap-4 lg:gap-[17px]">
                                            <img src="/icons/rudraksh-icn2.png" alt="Rudraksha Icon" className="w-[20px] h-[20px] sm:w-[22px] sm:h-[22px] lg:w-[23px] lg:h-[23px] mt-1 sm:mt-1.5 lg:mt-2 shrink-0" />
                                            <p className="font-[500] text-[16px] sm:text-[18px] lg:text-[20px] text-[#6C3E1A]">
                                                You can view pieces up close
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex gap-3 sm:gap-4 lg:gap-[17px]">
                                            <img src="/icons/rudraksh-icn2.png" alt="Rudraksha Icon" className="w-[20px] h-[20px] sm:w-[22px] sm:h-[22px] lg:w-[23px] lg:h-[23px] mt-1 sm:mt-1.5 lg:mt-2 shrink-0" />
                                            <p className="font-[500] text-[16px] sm:text-[18px] lg:text-[20px] text-[#6C3E1A]">
                                                Decisions are never rushed
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Card 2  */}
                        <div className='p-6 sm:p-7 lg:p-4 xl:p-8 flex flex-col gap-4 sm:gap-5 lg:gap-[20px]'>
                            <p className='font-[400] text-[24px] sm:text-[26px] lg:text-[30px]'>Online</p>

                            <div className='flex flex-col gap-5 sm:gap-6 lg:gap-[24px]'>
                                <p className='font-[400] text-[14px] sm:text-[15px] lg:text-[16px]'>A clear, transparent experience with:</p>
                                <ul className='flex flex-col gap-3 sm:gap-4 lg:gap-[14px]'>
                                    <li>
                                        <div className="flex gap-3 sm:gap-4 lg:gap-[17px]">
                                            <img src="/icons/rudraksh-icn2.png" alt="Rudraksha Icon" className="w-[20px] h-[20px] sm:w-[22px] sm:h-[22px] lg:w-[23px] lg:h-[23px] mt-1 sm:mt-1.5 lg:mt-2 shrink-0" />
                                            <p className="font-[500] text-[16px] sm:text-[18px] lg:text-[20px] text-[#6C3E1A]">
                                                Honest visuals
                                            </p>
                                        </div>

                                    </li>
                                    <li>
                                        <div className="flex gap-3 sm:gap-4 lg:gap-[17px]">
                                            <img src="/icons/rudraksh-icn2.png" alt="Rudraksha Icon" className="w-[20px] h-[20px] sm:w-[22px] sm:h-[22px] lg:w-[23px] lg:h-[23px] mt-1 sm:mt-1.5 lg:mt-2 shrink-0" />
                                            <p className="font-[500] text-[16px] sm:text-[18px] lg:text-[20px] text-[#6C3E1A]">
                                                Detailed descriptions
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex gap-3 sm:gap-4 lg:gap-[17px]">
                                            <img src="/icons/rudraksh-icn2.png" alt="Rudraksha Icon" className="w-[20px] h-[20px] sm:w-[22px] sm:h-[22px] lg:w-[23px] lg:h-[23px] mt-1 sm:mt-1.5 lg:mt-2 shrink-0" />
                                            <p className="font-[500] text-[16px] sm:text-[18px] lg:text-[20px] text-[#6C3E1A]">
                                                Straightforward explanations
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side Container  */}
                <div className='w-full lg:w-[422px] shrink-0'>
                    <div className="w-full flex justify-center items-center text-center py-5 sm:py-6 lg:py-6 px-6 sm:px-8 lg:px-12  border-[1px] border-[#E5E5E5]">
                        <p className='font-[400] text-[14px] sm:text-[15px] lg:text-[16px]'>Whether online or in-store, the experience stays the same: <span className='font-[700]'>
                            calm, respectful, and transparent.</span></p>
                    </div>
                    <div className="w-full">
                        <img src="/about/s6/ab-s6-i1.png" alt="RudraDhara Mauritius" className='w-full h-full object-cover' />
                    </div>
                    <div className="w-full">
                        <img src="/about/s6/ab-s6-i2.png" alt="RudraDhara Mauritius" className='w-full h-full object-cover' />
                    </div>
                </div>
            </div>

            {/* Row 2  */}
            <div className={`${styles.mainContainer} w-full flex flex-col justify-center items-center gap-6 sm:gap-8 lg:gap-[35px] text-center px-4 sm:px-6 lg:px-0`}>
                <h6 className="font-[400] text-[24px] sm:text-[28px] md:text-[32px] lg:text-[34px]">
                    At RudraDhara, we keep the journey <br className="hidden sm:block" />
                    <span className="font-[700]"> simple, informed, and honest.</span>
                </h6>
                
                <button className="w-full max-w-[223px] h-[44px] sm:h-[48px] lg:h-[50px] flex justify-center items-center gap-2 rounded-[4px] font-[700] text-[14px] sm:text-[15px] lg:text-[16px] text-white cursor-pointer bg-[#6C3E1A] hover:bg-[#5a3315] transition-colors">
                    <p className="text-[14px] sm:text-[15px] lg:text-[16px] font-[700] text-white">Explore Rudraksha</p>
                    <img src="/icons/ct-arr1.png" alt="Send" className="w-[13px] h-[13px] sm:w-[14px] sm:h-[14px] lg:w-[15px] lg:h-[15px]" />
                </button>
            </div>
        </section>
    )
}

export default S6;