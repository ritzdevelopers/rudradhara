import React from 'react'
function Section3() {
    return (
        <section className='w-full min-h-[632px] px-20 py-[60px] flex justify-center  bg-[#EDD5A9]'>

            {/* Centered Align Container   */}
            <div className=' flex flex-col gap-22'>
                <div className="flex flex-col text-center gap-6 items-center ">
                    <h2 className='text-[34px] font-semibold text-[#000000]'>How we verify</h2>
                    <p className='text-[16px] font-[400] text-[#000000] max-w-[656px]'>Every Rudraksha is carefully examined through traditional methods, expert evaluation, and sacred authenticity checks before reaching you.</p>
                </div>

                <div className='flex justify-between w-full'>
                    {/* Circle 1  */}
                    <div className='w-[275px] h-[275px] border-[1px] border-dashed border-[#6C3E1A] rounded-full overflow-hidden'>
                        <div className="w-full h-full rounded-full p-8 flex flex-col justify-center items-center gap-2 text-center">
                            <img src="/icons/arr2.png" alt="" className='w-[40px] h-[40px]'/>
                            <p className="font-[700] text-[20px] text-[#000000]">Selection</p>
                            <p className="font-[400] text-[14px] text-[#000000]">Every Rudraksha is handpicked based on origin, bead quality, mukhi clarity, weight, and natural surface integrity.</p>
                        </div>
                    </div>

                    {/* Circle 2  */}
                    <div className='w-[341px] h-[294px] relative flex justify-center center -mt-8'>
                        <div className='w-[275px] h-[275px] border-[1px] border-dashed border-[#6C3E1A] rounded-full'>
                        <div className="w-full h-full rounded-full p-6 flex flex-col justify-center items-center gap-2 text-center">
                            <img src="/icons/finder.png" alt="" className='w-[40px] h-auto'/>
                            <p className="font-[700] text-[20px] text-[#000000]">Identification</p>
                            <p className="font-[400] text-[14px] text-[#000000]">Each bead is carefully identified through traditional methods and expert evaluation to confirm its mukhi and authenticity.</p>
                        </div>
                        </div>

                        {/* Absolute Positioned Arrows  */}

                        <div className="absolute bottom-0 left-0">
                            <img src="/icons/moon-arrow-2.png" alt="moon-arrow" className='w-[75px] h-[60px]' />
                        </div>

                        <div className="absolute bottom-0 right-0">
                            <img src="/icons/moon-arrow-2.png" alt="moon-arrow" className='w-[75px] h-[60px]' />
                        </div>
                    </div>

                    {/* Circle 3  */}
                    <div className='w-[275px] h-[275px] border-[1px] border-dashed border-[#6C3E1A] rounded-full'>
                    <div className="w-full h-full rounded-full p-6 flex flex-col justify-center items-center gap-2 text-center">
                            <img src="/icons/docs.png" alt="" className='w-[40px] h-auto'/>
                            <p className="font-[700] text-[20px] text-[#000000]">Documentation</p>
                            <p className="font-[400] text-[14px] text-[#000000]">Every Rudraksha is accompanied by proper certification, lab reports, and detailed records ensuring transparency and traceability.</p>
                        </div>
                    </div>


                    {/* Circle 4  */}
                    <div className='w-[341px] h-[294px] relative flex justify-center center -mt-8'>
                        <div className='w-[275px] h-[275px] border-[1px] border-dashed border-[#6C3E1A] rounded-full'>
                        <div className="w-full h-full rounded-full p-8 flex flex-col justify-center items-center gap-2 text-center">
                            <img src="/icons/electric.png" alt="" className='w-[40px] h-[40px]'/>
                            <p className="font-[700] text-[20px] text-[#000000]">Energisation</p>
                            <p className="font-[400] text-[14px] text-[#000000]">Rudrakshas are energised through time-honoured Vedic rituals, enhancing their spiritual alignment and intended vibrational balance.</p>
                        </div>
                        </div>

                        {/* Absolute Positioned Arrows  */}

                        <div className="absolute bottom-0 left-0">
                            <img src="/icons/moon-arrow-2.png" alt="moon-arrow" className='w-[75px] h-[60px]' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Section3;