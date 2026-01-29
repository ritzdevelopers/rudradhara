import React from 'react'
function S5() {
    return (
        <section className='w-full min-h-[400px] sm:min-h-[500px] md:min-h-[580px] lg:min-h-[632px] px-4 sm:px-6 md:px-8 lg:px-[35px] xl:px-[70px] py-[40px] sm:py-[50px] lg:py-[60px] flex justify-center bg-[#EDD5A9] bg-[url("/about/s5/ab-s4-bg.png")] bg-no-repeat bg-center bg-cover'>

            {/* Centered Align Container   */}
            <div className='w-full main-container flex flex-col justify-center gap-6 sm:gap-8 md:gap-12 lg:gap-[88px]'>
                <div className="flex flex-col text-center gap-4 sm:gap-5 md:gap-6 items-center">
                    <h2 className='text-[24px] sm:text-[28px] md:text-[32px] lg:text-[34px] font-semibold text-[#000000] font-montserrat'>How we verify</h2>
                    <p className='text-[14px] sm:text-[15px] md:text-[16px] font-[400] text-[#000000] max-w-full sm:max-w-[500px] md:max-w-[600px] lg:max-w-[656px] font-open-sans px-4'>Every Rudraksha is carefully examined through traditional methods, expert evaluation, and sacred authenticity checks before reaching you.</p>
                </div>

                <div className='flex flex-col sm:flex-row flex-wrap lg:flex-nowrap justify-center lg:justify-between gap-4 sm:gap-6 md:gap-8 lg:gap-2 xl:gap-8 w-full max-w-full'>
                    {/* Circle 1  */} 
                    <div className='w-[240px] sm:w-[240px] md:w-[260px] lg:flex-1 lg:max-w-[275px] xl:max-w-[285px] 2xl:max-w-[300px] aspect-square border-[1px] border-dashed border-[#6C3E1A] crcle-container rounded-full overflow-hidden mx-auto shrink-0 hover:border-solid hover:bg-white transition-all duration-300 cursor-pointer hover:border-white'>
                        <div className="w-full h-full rounded-full p-4 sm:p-6 md:p-8 xl:p-10 flex flex-col justify-center items-center gap-4 text-center overflow-hidden">
                            <img src="/icons/final_arr2.png" alt="Selection" className='w-[32px] h-[32px] sm:w-[36px] sm:h-[36px] md:w-[40px] md:h-[40px] shrink-0'/>
                            <p className="font-[700] text-[16px] sm:text-[18px] lg:text-[20px] text-[#000000] font-montserrat leading-tight circle-bold">Selection</p>
                            <p className="font-[400] text-[12px] sm:text-[13px] md:text-[14px] text-[#000000] font-poppins leading-tight circle-light">Every Rudraksha is handpicked based on origin, bead quality, mukhi clarity, weight, and natural surface integrity.</p>
                        </div>
                    </div>

                    {/* Circle 2  */}
                    <div className='w-[240px] sm:w-[240px] md:w-[260px] lg:flex-1 lg:max-w-[275px] xl:max-w-[285px] 2xl:max-w-[300px] h-[240px] sm:h-[240px] md:h-[260px] lg:h-auto relative flex justify-center items-center mx-auto lg:mx-0 lg:-mt-20 shrink-0'>
                        <div className='w-full max-w-[240px] sm:max-w-[240px] md:max-w-[260px] lg:max-w-full aspect-square border-[1px] border-dashed border-[#6C3E1A] crcle-container rounded-full overflow-hidden hover:border-solid hover:bg-white transition-all duration-300 cursor-pointer hover:border-white'>
                        <div className="w-full h-full rounded-full p-4 sm:p-5 md:p-6 xl:p-8 flex flex-col justify-center items-center gap-4 text-center overflow-hidden">
                            <img src="/icons/final_magnifying_glass.png" alt="Identification" className='w-[32px] sm:w-[36px] md:w-[40px] h-auto shrink-0'/>
                            <p className="font-[700] text-[16px] sm:text-[18px] lg:text-[20px] text-[#000000] font-montserrat leading-tight circle-bold">Identification</p>
                            <p className="font-[400] text-[12px] sm:text-[13px] md:text-[14px] text-[#000000] font-poppins leading-tight circle-light">Each bead is carefully identified through traditional methods and expert evaluation to confirm its mukhi and authenticity.</p>
                        </div>
                        </div>

                        {/* Absolute Positioned Arrows  */}
                        <div className="hidden xl:block absolute bottom-4 -left-10">
                            <img src="/icons/moon-arrow-2.png" alt="moon-arrow" className='w-[75px] h-[60px]' />
                        </div>

                        <div className="hidden xl:block absolute bottom-8 -right-10">
                            <img src="/icons/moon-arrow-2.png" alt="moon-arrow" className='w-[75px] h-[60px]' />
                        </div>
                    </div>

                    {/* Circle 3  */}
                    <div className='w-[240px] sm:w-[240px] md:w-[260px] lg:flex-1 lg:max-w-[275px] xl:max-w-[285px] 2xl:max-w-[300px] aspect-square mx-auto shrink-0 relative'>
                        <div className="w-full h-full aspect-square crcle-container rounded-full overflow-hidden">
                            <div className="w-full h-full rounded-full p-4 sm:p-5 md:p-6 xl:p-10 flex flex-col justify-center items-center gap-3 text-center overflow-hidden border-1 border-dashed border-[#6C3E1A] hover:border-solid hover:bg-white transition-all duration-300 cursor-pointer hover:border-white">
                                <img src="/icons/docs.png" alt="Documentation" className='w-[32px] sm:w-[36px] md:w-[40px] h-auto shrink-0'/>
                                <p className="font-[700] text-[16px] sm:text-[18px] lg:text-[20px] text-[#000000] font-montserrat leading-tight circle-bold">Documentation</p>
                                <p className="font-[400] text-[12px] sm:text-[13px] lg:text-[14px] text-[#000000] font-poppins leading-tight circle-light">Every Rudraksha is accompanied by proper certification, lab reports, and detailed records ensuring transparency and traceability.</p>
                            </div>
                        </div>

                       
                    </div>


                    {/* Circle 4  */}
                    <div className='w-[240px] sm:w-[240px] md:w-[260px] lg:flex-1 lg:max-w-[275px] xl:max-w-[285px] 2xl:max-w-[300px] h-[240px] sm:h-[240px] md:h-[260px] lg:h-auto relative flex justify-center items-center mx-auto lg:mx-0 lg:-mt-8 shrink-0'>
                        <div className='w-full max-w-[240px] sm:max-w-[240px] md:max-w-[260px] lg:max-w-full aspect-square border-[1px] border-dashed border-[#6C3E1A] crcle-container rounded-full overflow-hidden
                        hover:border-solid cursor-pointer hover:bg-white transition-all duration-300 cursor-pointer hover:border-white
                        '>
                        <div className="w-full h-full rounded-full p-4 sm:p-6 md:p-8 xl:p-10 flex flex-col justify-center items-center gap-3 text-center overflow-hidden">
                            <img src="/icons/final-electric.png" alt="Energisation" className='w-[32px] h-[32px] sm:w-[36px] sm:h-[36px] md:w-[40px] md:h-[40px] shrink-0'/>
                            <p className="font-[700] text-[16px] sm:text-[18px] lg:text-[20px] text-[#000000] font-montserrat leading-tight circle-bold">Energisation</p>
                            <p className="font-[400] text-[12px] sm:text-[13px] md:text-[14px] text-[#000000] font-poppins leading-tight circle-light">Rudrakshas are energised through time-honoured Vedic rituals, enhancing their spiritual alignment and intended vibrational balance.</p>
                        </div>
                        </div>

                        {/* Absolute Positioned Arrows  */}
                        <div className="hidden xl:block absolute bottom-1 -left-10">
                            <img src="/icons/moon-arrow-2.png" alt="moon-arrow" className='w-[75px] h-[60px]' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default S5;