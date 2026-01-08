import React from 'react'
function Section3() {
    return (
        <section className='w-full min-h-[632px] px-20 py-[60px] flex justify-center  bg-[#EDD5A9]'>

            {/* Centered Align Container   */}
            <div className='w-[80%] flex flex-col gap-22'>
                <div className="flex flex-col text-center gap-6 items-center">
                    <h2 className='text-[34px] font-semibold text-[#000000]'>How we verify</h2>
                    <p className='text-[16px] font-[400] text-[#000000] max-w-[656px]'>Every Rudraksha is carefully examined through traditional methods, expert evaluation, and sacred authenticity checks before reaching you.</p>
                </div>

                <div className='flex justify-between '>
                    {/* Circle 1  */}
                    <div className='w-[275px] h-[275px] border-[1px] border-dashed border-[#6C3E1A] rounded-full'></div>

                    {/* Circle 2  */}
                    <div className='w-[341px] h-[294px] relative flex justify-center center -mt-8'>
                        <div className='w-[275px] h-[275px] border-[1px] border-dashed border-[#6C3E1A] rounded-full'></div>

                        {/* Absolute Positioned Arrows  */}

                        <div className="absolute bottom-0 left-0">
                            <img src="/icons/moon-arrow-2.png" alt="moon-arrow" className='w-[75px] h-[60px]' />
                        </div>

                        <div className="absolute bottom-0 right-0">
                            <img src="/icons/moon-arrow-2.png" alt="moon-arrow" className='w-[75px] h-[60px]' />
                        </div>
                    </div>

                    {/* Circle 3  */}
                    <div className='w-[275px] h-[275px] border-[1px] border-dashed border-[#6C3E1A] rounded-full'></div>


                    {/* Circle 4  */}
                    <div className='w-[341px] h-[294px] relative flex justify-center center -mt-8'>
                        <div className='w-[275px] h-[275px] border-[1px] border-dashed border-[#6C3E1A] rounded-full'></div>

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