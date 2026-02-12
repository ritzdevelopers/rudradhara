"use client";

import React from "react";
import styles from "./page.module.css";
import { MdOutlineArrowOutward } from "react-icons/md";
function S3() {
    const handlePhoneClick = () => {
        window.location.href = "tel:+23052590394";
    };

    const handleEmailClick = () => {
        window.location.href = "mailto:contact@rudradhara.mu";
    };

    const handleWhatsAppClick = () => {
        const whatsappUrl = `https://wa.me/23052590394`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <section className="w-full py-10 sm:py-12 md:py-14 lg:py-[70px] px-4 sm:px-6 md:px-8 lg:px-10 border-b-[1px] border-t-[1px] border-[#F6DABC] flex flex-col items-center gap-6 sm:gap-8 md:gap-10 lg:gap-[45px]">

            {/* Center Align Container   */}
            <div className={`flex flex-col items-center gap-6 sm:gap-8 md:gap-10 lg:gap-[45px] ${styles.mainContainer} w-full`}>
                {/* Row 1  */}
                <div id="visit-our-store" className="flex justify-center items-center text-center w-full px-4 sm:px-6 lg:px-0 scroll-mt-[140px]">
                    <h3 className="font-[700] text-[24px] sm:text-[28px] md:text-[32px] lg:text-[40px] font-montserrat">Visit Our Store in Mauritius</h3>
                </div>

                {/* Row 2  */}
                <div className="w-full flex flex-col gap-6 sm:gap-8 lg:gap-[30px]">
                    {/* Grid Div 1  */}
                    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-[20px]">
                        <div className="w-full max-w-full lg:max-w-[403px] sm:h-[380px]  md:h-[302px] border-[1px] border-[#F6DABC] p-3 sm:p-4 mx-auto lg:mx-0">
                            <img src="/contact/s3/ct-s3-i1.png" alt="Rudraksha Store" className="w-full h-full object-cover" />
                        </div>

                        <div className="w-full max-w-full lg:max-w-[403px] h-auto min-h-[220px] sm:min-h-[260px] md:min-h-[280px] lg:h-[302px] border-[1px] border-[#F6DABC] p-4 sm:p-5 lg:p-4 flex flex-col justify-center items-center gap-4 md:gap-[0px] xl:gap-[27px] mx-auto lg:mx-0">
                            <div className="flex flex-col gap-0 text-center">
                                <p className="font-[500] text-[14px] font-montserrat">Store address</p>
                                <p className="font-[400] text-[20px] sm:text-[24px] md:text-[26px] lg:text-[29px] font-open-sans">Royal Road Mare D'albert</p>
                            </div>

                            <div 
                                className="flex flex-col items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
                                onClick={handlePhoneClick}
                            >
                                <div className="w-[40px] h-[40px] sm:w-[45px] sm:h-[45px] lg:w-[49px] lg:h-[49px] border-[1px] border-[#EEEEEE] rounded-full flex justify-center items-center">
                                    <img src="/icons/phone-icn.png" alt="Phone" className="w-[16px] sm:w-[17px] lg:w-[18px]" />
                                </div>
                                <p className="font-[400] text-[14px] sm:text-[15px] lg:text-[16px] font-open-sans"><span className="font-[700]">+230</span> 5259 0394</p>
                            </div>


                            <div 
                                className="flex flex-col items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
                                onClick={handleEmailClick}
                            >
                                <div className="w-[40px] h-[40px] sm:w-[45px] sm:h-[45px] lg:w-[49px] lg:h-[49px] border-[1px] border-[#EEEEEE] rounded-full flex justify-center items-center">
                                    <img src="/icons/mail-icn.png" alt="Mail" className="w-[16px] sm:w-[17px] lg:w-[18px]" />
                                </div>
                                <p className="font-[400] text-[14px] sm:text-[15px] lg:text-[16px] font-open-sans">contact@rudradhara.mu</p>
                            </div>
                        </div>


                        <div className="w-full max-w-full lg:max-w-[403px] h-auto min-h-[220px] sm:min-h-[260px] md:min-h-[280px] lg:h-[302px] p-4 sm:p-5 md:p-0 lg:p-4 flex flex-col justify-center items-center gap-4 sm:gap-6 lg:gap-[0px] xl:gap-[25px] text-center mx-auto lg:mx-0">

                            <div className="w-[100px] sm:w-[110px] lg:w-[123px] h-auto"><img src="/contact/s3/ct-s3-logo.png" alt="Rudraksha Store" className="w-full h-full object-cover" /></div>

                            <div className="text-center flex flex-col gap-2 sm:gap-3 lg:gap-[8px]">
                                <p className="font-[600] text-[18px] sm:text-[19px] lg:text-[20px] font-montserrat">
                                    Hours
                                </p>
                                <p className="font-[400] text-[14px] sm:text-[15px] lg:text-[16px] font-open-sans">Monday to Saturday: 10:00 AM – 6:00 PM <br />
                                    Sunday: 10:00 AM – 2:00 PM
                                </p>
                            </div>

                            <div className="text-center flex flex-col gap-3 sm:gap-4 lg:gap-[15px] w-full">
                                <p className="font-[400] text-[12px] sm:text-[13px] lg:text-[14px] text-[#525252] font-open-sans">
                                    Shop can be opened on an appointment basis
                                </p>
                                <button 
                                    onClick={handleWhatsAppClick}
                                    className="w-full px-4 sm:px-5 lg:px-6 h-[44px] sm:h-[48px] lg:h-[50px] bg-[#6C3E1A] btn-slide2 flex justify-center items-center gap-2 rounded-[4px]   text-white cursor-pointer "
                                >
                                    <p className="text-[11px] lg:text-[12px] xl:text-[16px] font-[700] text-white font-open-sans whitespace-nowrap sm:text-[10px]">Book an appointment on WhatsApp</p>
                                    <MdOutlineArrowOutward className='w-[24px] h-[24px] text-white inline-block shrink-0' />
                                </button>
                            </div>


                        </div>

                        <div onClick={() => window.open("https://www.google.com/maps/place/Rudradhara/@-20.4196885,57.626261,17z/data=!4m6!3m5!1s0x217c61f33f805451:0xbd07abafc401afd!8m2!3d-20.4195462!4d57.6270698!16s%2Fg%2F11zkqykf7q!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDEyMC4wIKXMDSoKLDEwMDc5MjA3M0gBUAM%3D", "_blank")} className="w-full hidden md:block lg:hidden max-w-full lg:max-w-[403px] h-auto min-h-[220px] sm:min-h-[260px] md:min-h-[280px] lg:h-[302px]  flex flex-col justify-center items-center gap-4 sm:gap-6 lg:gap-[0px] xl:gap-[25px] text-center mx-auto lg:mx-0">
                            <img src="/contact/s3/ct-s3-map.png" alt="Rudraksha Store" className="w-full h-full object-center object-cover" />
                        </div>
                    </div>

                    {/* Div 2  */}
                    <div className="w-full flex  flex-col block md:hidden lg:block items-center text-center gap-4 sm:gap-5 lg:gap-[16px] px-4 sm:px-6 lg:px-0">
                        <div onClick={() => window.open("https://www.google.com/maps/place/Rudradhara/@-20.4196885,57.626261,17z/data=!4m6!3m5!1s0x217c61f33f805451:0xbd07abafc401afd!8m2!3d-20.4195462!4d57.6270698!16s%2Fg%2F11zkqykf7q!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDEyMC4wIKXMDSoKLDEwMDc5MjA3M0gBUAM%3D", "_blank")} className="w-full h-[220px] cursor-pointer md:h-auto mb-5">
                            <img src="/contact/s3/ct-s3-map.png" alt="Rudraksha Store" className="w-full h-full object-cover" />
                        </div>
                        <p className="font-[400] text-[13px] lg:text-[16px] text-[#000000] max-w-full sm:max-w-[400px] lg:max-w-[540px] px-4 sm:px-6 lg:px-0 self-center m-auto font-open-sans">For the best experience, please send us a message before visiting us to allow you explore the Store calmly.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default S3;
