"use client"

import Image from "next/image";
import { MdOutlineArrowOutward } from "react-icons/md";

function Section4() {
    return (
        <section className="w-full px-4 sm:px-8 md:px-12 lg:px-20 py-[40px] sm:py-[50px] lg:py-[60px] flex justify-center items-center flex-col gap-4 sm:gap-5 md:gap-6">
            {/* Centered Align Container  1*/}
            <div className="flex flex-col lg:flex-row main-container justify-between gap-4 sm:gap-5 md:gap-6 w-full">
                {/* Left Side Contanier  */}
                <div className="w-full lg:w-[600px] h-[350px] sm:h-[450px] md:h-[520px] lg:h-[577px] bg-[url('/images/s4/s4-bg.png')] bg-cover bg-center bg-no-repeat rounded-[4px]">

                    {/* Centered Align Container  */}
                    <div className="w-full h-full flex flex-col justify-between items-center px-6 sm:px-10 md:px-12 lg:px-14 pt-[30px] sm:pt-[40px] md:pt-[50px] lg:pt-[60px] pb-[15px] sm:pb-[18px] lg:pb-[20px]">
                        {/* Top Row  */}
                        <div className="flex flex-col gap-2 justify-center items-center text-center text-white">
                            <h2 className="font-[600] text-[18px] sm:text-[22px] md:text-[25px] lg:text-[28px] font-montserrat">Complementary spiritual tools</h2>
                            <img src="/images/s4/dividers-collection-calligraphic-style.png" alt="" className="w-[200px] h-[40px] sm:w-[250px] sm:h-[50px] md:w-[280px] md:h-[54px] lg:w-[300px] lg:h-[58px]" />
                            <p className="font-[600] text-[12px] sm:text-[14px] md:text-[15px] lg:text-[16px] font-open-sans px-2">We also keep a selection of Shankh, Pooja saaman, Murti, Chandan, Tilak, Yantra, Kavach, Shivling, and sacred items for those building a complete setup. </p>
                        </div>

                        {/* Bottom Row  */}
                        <div className="flex justify-center items-center">
                            <button className='cursor-pointer h-[44px] sm:h-[48px] lg:h-[50px] bg-white rounded-[4px] flex justify-center items-center gap-2 px-3 w-[160px] sm:w-[170px] lg:w-[180px] hover:bg-gray-100 transition-colors'>
                                <p className='text-[13px] sm:text-[14px] lg:text-[15px] font-bold text-[#6C3E1A]'>
                                    Explore More
                                </p>
                                <MdOutlineArrowOutward className='w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] lg:w-[30px] lg:h-[30px] text-[#6C3E1A]' />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right Side Container  */}
                <div className="w-full lg:w-[590px] h-auto lg:h-[577px] flex flex-col justify-between gap-4 sm:gap-5 md:gap-6 items-center lg:items-start">
                    {/* Row 1  */}
                    <div className="flex flex-col gap-2 text-center lg:text-left">
                        <h2 className="font-[600] text-[24px] sm:text-[28px] md:text-[32px] lg:text-[34px] font-montserrat">Visit our store</h2>
                        <h3 className="font-[600] text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-montserrat">Visit Rudradhara in Mauritius</h3>
                    </div>

                    {/* Row 2  */}
                    <div className="text-center lg:text-left">
                        <p className="font-[400] text-[14px] sm:text-[15px] md:text-[16px] font-open-sans">If you prefer understanding products in person, visit our store for a guided, unhurried experience.</p>
                    </div>

                    {/* Row 3  */}
                    <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 w-full items-center lg:items-start">
                        <div className="flex flex-col lg:flex-row justify-center lg:justify-between gap-4 sm:gap-6 w-full">
                            {/* Col 1  */}
                            <div className="flex flex-col gap-2 text-center lg:text-left">
                                <p className="font-[600] text-[14px] sm:text-[15px] md:text-[16px] font-open-sans">Hours</p>
                                <p className="font-[400] text-[14px] sm:text-[15px] md:text-[16px] font-open-sans">Monday to Saturday: 10:00 AM – 6:00 PM</p>
                                <p className="font-[400] text-[14px] sm:text-[15px] md:text-[16px] font-open-sans">Sunday: 10:00 AM – 2:00 PM</p>
                                <p className="font-[400] text-[12px] sm:text-[13px] md:text-[14px] text-[#525252] font-open-sans">Shop can be opened on an appointment basis</p>
                            </div>
                            {/* Col 2  */}
                            <div className="flex flex-col gap-2 text-center lg:text-left">
                                <p className="font-[600] text-[14px] sm:text-[15px] md:text-[16px] font-open-sans">Store address</p>
                                <p className="font-[400] text-[14px] sm:text-[15px] md:text-[16px] font-open-sans">Royal Road Mare D'albert</p>
                            </div>
                        </div>

                        <div className="w-full flex justify-center lg:justify-start">
                            <button className='cursor-pointer h-[44px] sm:h-[48px] lg:h-[50px] bg-[#6C3E1A] rounded-[4px] flex justify-center items-center gap-2 px-3 w-full sm:w-[300px] md:w-[320px] lg:w-[346px] hover:bg-[#5a3315] transition-colors'>
                                <p className='text-[13px] sm:text-[14px] lg:text-[15px] font-[700] text-white font-open-sans'>
                                    Book an appointment on WhatsApp
                                </p>
                                <MdOutlineArrowOutward className='w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] lg:w-[30px] lg:h-[30px] text-white' />
                            </button>
                        </div>
                    </div>

                    {/* Row 4  */}
                    <div className="w-full h-[150px] sm:h-[170px] md:h-[185px] lg:h-[197px] rounded-[4px] overflow-hidden">
                        <img src="/images/s4/s4-location.png" alt="Store Location" className="w-full h-full object-cover" />
                    </div>
                </div>
            </div>

            {/* Centered Align Container 2  */}
            <div className="w-full main-container flex flex-col lg:flex-row justify-between gap-4 sm:gap-5 md:gap-6 mt-4">
                {/* Left Side Container  */}
                <div className="w-full lg:w-[428px] h-auto lg:h-[250px] border-[1px] border-[#D7D7D7] flex flex-col justify-center items-center gap-4 sm:gap-5 md:gap-6 p-4 sm:p-5 md:p-6 rounded-[4px]">
                    <h2 className="font-[600] text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-montserrat text-center">ISO 9001:2015 Certified Lab</h2>
                    <div className="flex justify-center  gap-6 sm:gap-8 w-full">

                        {/* Left Side Container  */}
                        <div className="w-[140px] h-[90px] sm:w-[160px] sm:h-[105px] md:w-[176px] md:h-[115px]">
                            <Image
                                src="/images/s4/iaf.png"
                                alt="IAF Certification"
                                width={176}
                                height={115}
                                className="w-full h-full object-contain"
                            />
                        </div>

                        {/* Right Side Container  */}
                        <div className="w-[85px] h-[120px] sm:w-[95px] sm:h-[135px] md:w-[105px] md:h-[148px]">
                            <Image
                                src="/images/s4/ias.png"
                                alt="IAS Certification"
                                width={105}
                                height={148}
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </div>
                </div>

                {/* Right Side Container  */}
                <div className="w-full lg:w-[778px] h-[200px] sm:h-[220px] md:h-[240px] lg:h-[250px] bg-[url(/images/s4/s4img4.png)] bg-cover bg-no-repeat bg-center flex items-center justify-center lg:justify-start px-4 sm:px-6 md:px-8 rounded-[4px]">
                    <div className="flex flex-col gap-3 sm:gap-4 items-center lg:items-start text-center lg:text-left">
                        <h4 className="font-[700] text-[17px] sm:text-[24px] xl:text-[30px] text-white font-montserrat">Rudraksha should feel clear, <br /> not confusing.</h4>
                        <p className="font-[600] text-[14px] sm:text-[16px] md:text-[17px] lg:text-[18px] text-white font-open-sans">We keep it simple, transparent, and learning-first.</p>
                        <button className='cursor-pointer h-[44px] sm:h-[48px] lg:h-[50px] bg-white rounded-[4px] flex justify-center items-center gap-2 px-3 w-[180px] sm:w-[200px] lg:w-[221px] hover:bg-gray-100 transition-colors'>
                            <p className='text-[13px] sm:text-[14px] lg:text-[15px] font-bold text-[#6C3E1A] font-open-sans'>
                            Explore Rudraksha
                            </p>
                            <MdOutlineArrowOutward className='w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] lg:w-[30px] lg:h-[30px] text-[#6C3E1A]' />
                        </button>
                    </div>
                </div>

            </div>



            {/* Centered Align Container 3  */}
            <div className="w-full flex flex-col lg:flex-row main-container justify-between items-center gap-6 sm:gap-8 md:gap-10 lg:gap-6 mt-4 sm:mt-5 md:mt-6 lg:h-[583px]">

                {/* Left Side Container  */}
                <div className="flex flex-col justify-between gap-4 sm:gap-5 md:gap-6 lg:gap-2 xl:gap-6 w-full lg:w-[605px] items-center lg:items-start lg:h-full">
                    {/* Top Container  */}
                    <div className="flex flex-col gap-3 lg:gap-2 xl:gap-3 text-center lg:text-left w-full">
                        <p className="font-[600] text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] text-[#C87A2A] uppercase font-open-sans">ABOUT US</p>
                        <h5 className="font-[600] text-[24px] sm:text-[28px] md:text-[32px] lg:text-[34px] text-[#000000] font-montserrat">The clarity you've been looking for</h5>
                        <p className="font-[400] text-[14px] sm:text-[15px] md:text-[16px] text-[#000000] font-open-sans">We created Rudradhara to make Rudraksha easy to understand, not overwhelming. Every piece is selected with care and presented with clear information—so you can learn, compare, and choose with confidence, without pressure or confusion.</p>
                        <div className="w-full flex justify-center lg:justify-start">
                            <button className='cursor-pointer h-[44px] sm:h-[48px] lg:h-[50px] bg-[#6C3E1A] border-[1px] border-[#6C3E1A] rounded-[4px] flex justify-center items-center gap-2 px-3 w-full sm:w-[200px] lg:w-[221px] hover:bg-[#5a3315] transition-colors'>
                                <p className='text-[13px] sm:text-[14px] lg:text-[15px] font-bold text-[#ffffff] font-open-sans'>
                                About Rudradhara
                                </p>
                                <MdOutlineArrowOutward className='w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] lg:w-[30px] lg:h-[30px] text-[#ffffff]' />
                            </button>
                        </div>
                    </div>

                    {/* Bottom Container  */}
                    <div className="w-full bg-[#EDD5A9] rounded-[4px] p-4 lg:pl-4 xl:p-6   flex flex-col gap-3 sm:gap-4  xl:gap-4 text-center lg:text-left xl:h-[279px]">
                        <h6 className="font-[600] text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] text-[#000000] font-montserrat xl:text-[32px]">Start with understanding</h6>
                        <p className="font-[400] text-[14px] sm:text-[15px] md:text-[16px] text-[#000000] font-open-sans">
                            Rudraksha is deeply personal. <br />
                            That's why we focus on education first—covering mukhi, origin, sizing, care, and authenticity—before anything else.
                        </p>
                        <div className="w-full flex justify-center lg:justify-start">
                            <button className='cursor-pointer h-[44px] sm:h-[48px] lg:h-[50px] bg-white rounded-[4px] flex justify-center items-center gap-2 px-3 w-full sm:w-[220px] md:w-[240px] lg:w-[250px] hover:bg-gray-100 transition-colors'>
                                <p className='text-[13px] sm:text-[14px] lg:text-[15px] font-bold text-[#6C3E1A] font-open-sans'>
                                Visit the Learning Hub
                                </p>
                                <MdOutlineArrowOutward className='w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] lg:w-[30px] lg:h-[30px] text-[#6C3E1A]' />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right Side Container  */}
                <div className="w-full lg:w-[606px] 
                h-[300px] sm:h-[400px] md:h-[500px] lg:h-full relative rounded-[4px] overflow-hidden">
                    <Image src={"/images/s4/s4-img.png"} alt="About Rudradhara" fill className="w-full h-full object-cover rounded-[4px]"></Image>
                </div>
            </div>
        </section>
    )
}

export default Section4;