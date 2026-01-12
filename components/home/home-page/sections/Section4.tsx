"use client"

import { MdOutlineArrowOutward } from "react-icons/md";

function Section4() {
    return (
        <section className="w-full px-20 py-[60px] flex justify-center items-center flex-col gap-6">
            {/* Centered Align Container  1*/}
            <div className="flex justify-between gap-6 w-full">
                {/* Left Side Contanier  */}
                <div className="w-[600px] h-[577px] bg-[url('/images/s4/s4-bg.png')] bg-cover bg-center bg-no-repeat">

                {/* Centered Align Container  */}
                    <div className="w-full h-full flex flex-col justify-between items-center px-14 pt-[60px] pb-[20px]">
                        {/* Top Row  */}
                        <div className="flex flex-col gap-2 justify-center items-center text-center text-white">
                            <h2 className="font-[600] text-[28px]">Complementary spiritual tools</h2>
                            <img src="/images/s4/dividers-collection-calligraphic-style.png" alt="" className="w-[300px] h-[58px]" />
                            <p className="font-[600] text-[16px]">We also keep a selection of Shankh, Pooja saaman, Murti, Chandan, Tilak, Yantra, Kavach, Shivling, and sacred items for those building a complete setup. </p>
                        </div>

                        {/* Bottom Row  */}
                        <div className="flex justify-center items-center">
                            <button className='cursor-pointer h-[50px] bg-white rounded-[4px] flex justify-center items-center gap-2 px-3 w-[180px]'>
                                <p className='text-[15px] font-bold text-[#6C3E1A]'>
                                    Explore More
                                </p>
                                <MdOutlineArrowOutward className='w-[30px] h-[30px] text-[#6C3E1A]' />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right Side Container  */}
                <div className="w-[590px] h-[577px] flex flex-col justify-between">
                    {/* Row 1  */}
                    <div className="flex flex-col gap-2">
                        <h2 className="font-[600] text-[34px]">Visit our store</h2>
                        <h3 className="font-[600] text-[24px]">Visit Rudradhara in Mauritius</h3>
                    </div>

                    {/* Row 2  */}
                    <div>
                        <p className="font-[400] text-[16px]">If you prefer understanding products in person, visit our store for a guided, unhurried experience.</p>
                    </div>

                    {/* Row 3  */}
                    <div className="flex flex-col gap-6">
                        <div className="flex justify-between">
                            {/* Col 1  */}
                            <div className="flex flex-col gap-2">
                                <p className="font-[600] text-[16px]">Hours</p>
                                <p className="font-[400] text-[16px]">Monday to Saturday: 10:00 AM – 6:00 PM</p>
                                <p className="font-[400] text-[16px]">Sunday: 10:00 AM – 2:00 PM</p>
                                <p className="font-[400] text-[14px] text-[#525252]">Shop can be opened on an appointment basis</p>
                            </div>
                            {/* Col 2  */}
                            <div className="flex flex-col gap-2">
                            <p className="font-[600] text-[16px]">Store address</p>
                            <p className="font-[400] text-[16px]">Royal Road Mare D’albert</p>
                            </div>
                        </div>

                        <div>
                            <button className='cursor-pointer h-[50px] bg-[#6C3E1A] rounded-[4px] flex justify-center items-center gap-2 px-3 w-[346px]'>
                                <p className='text-[15px] font-[700] text-white'>
                                Book an appointment on WhatsApp
                                </p>
                                <MdOutlineArrowOutward className='w-[30px] h-[30px] text-white' />
                            </button>
                            </div>
                    </div>

                    {/* Row 4  */}
                    <div className="w-full h-[197px]">
                        <img src="/images/s4/s4-location.png" alt="" className="w-full h-full object-cover" />
                    </div>
                </div>
            </div>

            {/* Centered Align Container 2  */}
            <div className="w-full flex justify-between gap-4">
                {/* Left Side Container  */}
                <div className="w-[428px] h-[250px] border-[1px] border-[#D7D7D7] flex flex-col justify-center items-center gap-6">
                    <h2 className="font-[600] text-[24px]">ISO 9001:2015 Certified Lab</h2>
                   <div className="flex justify-between gap-4">

                    {/* Left Side Container  */}
                    <div><img src="/images/s4/iaf.png" alt="" /></div>

                    {/* Right Side Container  */}
                    <div><img src="/images/s4/ias.png" alt="" /></div>
                   </div>
                </div>

                {/* Right Side Container  */}
                <div></div>

            </div>
        </section>
    )
}

export default Section4;