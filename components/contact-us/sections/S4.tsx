"use client"
import React, { useState } from "react";
import styles from "./page.module.css";
function S4() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });
    const [errors, setErrors] = useState({
        name: false,
        email: false,
        phone: false,
        message: false,
    });
    const [selectedInterest, setSelectedInterest] = useState<number | null>(null);
    return (
        <section className="w-full py-10 sm:py-12 md:py-14 lg:py-[70px] px-4 sm:px-6 md:px-8 lg:px-10 relative flex justify-center items-center">
            {/* Absolute Positioned Elips Image  */}
            <div className="absolute top-[30px] left-0 w-auto h-[204px] z-0 hidden lg:block 2xl:hidden">
                <img src="/contact/elips/elips-1.png" alt="Elips" className="w-full h-full" />
            </div>

            {/* Center Align Container  */}
            <div className={`flex flex-col lg:flex-row lg:justify-between gap-6 sm:gap-8 md:gap-10 lg:gap-[54px] w-full ${styles.mainContainer} `}>

                {/* Left Side Contianer  */}
                <div className="w-full lg:max-w-[273px] z-10 text-center lg:text-left">
                    <h5 className="font-[700] text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px]">
                        Send a <br className="hidden lg:block 2xl:hidden"/> Message
                    </h5>
                    <p className="font-[400] text-[16px] sm:text-[18px] lg:text-[20px] mt-2 sm:mt-3">
                        If you're writing to us about Rudraksha, these details help us guide you faster:
                    </p>
                </div>


                {/* Right Side Container  */}
                <div className="w-full z-10">
                    <form className="w-full flex flex-col gap-4 sm:gap-5 lg:gap-[20px]">
                        {/* Top Container  */}
                        <div className="flex flex-col lg:flex-row lg:justify-between gap-6 sm:gap-8 lg:gap-[40px]">

                            {/* Left Side Form Input Fields Container  */}
                            <div className="w-full lg:max-w-[462px] flex flex-col gap-3 sm:gap-4 lg:gap-[10px]">
                                <div className="flex flex-col gap-2 sm:gap-3 lg:gap-[10px]">
                                    <input type="text" placeholder="Your Name *" className="w-full h-[44px] sm:h-[48px] lg:h-[50px] px-4 border-[1px] outline-none focus:border-[#6C3E1A] border-[#E4E1E1] rounded-[2px] font-[400] text-[14px] sm:text-[15px] lg:text-[16px] placeholder:text-[#000000] focus:outline-none placeholder:text-[#4E4E4E]" required />

                                    {/* Error Message  */}
                                    {
                                        errors.name && (
                                            <p className="font-[400] text-[12px] sm:text-[13px] lg:text-[14px] text-[#F01414]">
                                                Please fill out  this field.
                                            </p>
                                        )
                                    }
                                </div>

                                <div className="flex flex-col gap-2 sm:gap-3 lg:gap-[10px]">
                                    <input type="email" placeholder="Your e-mail" className="w-full h-[44px] sm:h-[48px] lg:h-[50px] px-4 border-[1px] outline-none focus:border-[#6C3E1A] border-[#E4E1E1] rounded-[2px] font-[400] text-[14px] sm:text-[15px] lg:text-[16px] placeholder:text-[#000000] focus:outline-none placeholder:text-[#4E4E4E]" required />

                                    {/* Error Message  */}
                                    {
                                        errors.email && (
                                            <p className="font-[400] text-[12px] sm:text-[13px] lg:text-[14px] text-[#F01414]">
                                                Please fill out  this field.
                                            </p>
                                        )
                                    }
                                </div>

                                <div className="flex flex-col gap-2 sm:gap-3 lg:gap-[10px]">
                                    <input type="tel" placeholder="Phone *" className="w-full h-[44px] sm:h-[48px] lg:h-[50px] px-4 border-[1px] outline-none focus:border-[#6C3E1A] border-[#E4E1E1] rounded-[2px] font-[400] text-[14px] sm:text-[15px] lg:text-[16px] placeholder:text-[#000000] focus:outline-none placeholder:text-[#4E4E4E]" required />

                                    {/* Error Message  */}
                                    {
                                        errors.phone && (
                                            <p className="font-[400] text-[12px] sm:text-[13px] lg:text-[14px] text-[#F01414]">
                                                Please fill out  this field.
                                            </p>
                                        )
                                    }
                                </div>

                                <div className="flex flex-col gap-2 sm:gap-3 lg:gap-[10px]">
                                    <textarea placeholder="Message *" className="w-full h-[100px] sm:h-[110px] lg:h-[117px] px-4 py-3 border-[1px] outline-none focus:border-[#6C3E1A] border-[#E4E1E1] rounded-[2px] font-[400] text-[14px] sm:text-[15px] lg:text-[16px] placeholder:text-[#000000] focus:outline-none placeholder:text-[#4E4E4E] resize-none" required />

                                    {/* Error Message  */}
                                    {
                                        errors.message && (
                                            <p className="font-[400] text-[12px] sm:text-[13px] lg:text-[14px] text-[#F01414]">
                                                Please fill out  this field.
                                            </p>
                                        )
                                    }
                                </div>
                            </div>

                            {/* Right Side Radio Buttons Container  */}
                            <div className="w-full lg:max-w-[446px] flex flex-col gap-4 sm:gap-5 lg:gap-[20px]">
                                <p className="font-[600] text-[18px] sm:text-[19px] lg:text-[20px] text-center lg:text-left">I'm interested in...</p>
                                <ul className="flex flex-col gap-3 sm:gap-4 lg:gap-[10px]">
                                    {
                                        [
                                            { text: "Are you looking for the ", bold: "best Rudraksha for you", end: "?" },
                                            { text: "Do you want to explore ", bold: "daily wear or japa", end: " ?" },
                                            { text: "Do you prefer a ", bold: "bracelet, mala, or single bead", end: "?" },
                                            { text: "Any preference for ", bold: "Nepal vs Indonesian", end: "?" },
                                            { text: "Comfort preference: ", bold: "light / balanced / bold", end: "" }
                                        ].
                                            map((item, index: number) => (
                                                <li key={index} className="w-full">
                                                    <div
                                                        className={`w-full flex items-center gap-2 sm:gap-3 lg:gap-[10px] rounded-full px-3 sm:px-4 p-2 sm:p-3 lg:p-[10px] transition-colors ${selectedInterest === index ? 'bg-[#C87A2A]' : 'bg-[#FFFAF2]'
                                                            }`}
                                                    >
                                                        <input
                                                            type="radio"
                                                            name="interest"
                                                            id={`interest-${index}`}
                                                            checked={selectedInterest === index}
                                                            onChange={() => setSelectedInterest(index)}
                                                            className={`
                                                        appearance-none 
                                                        w-[18px] h-[18px] sm:w-[19px] sm:h-[19px] lg:w-[20px] lg:h-[20px]
                                                        border-[1px] border-[#EABB8C] 
                                                        rounded-full 
                                                        outline-none 
                                                        cursor-pointer
                                                        transition-all
                                                        checked:border-[5px] sm:checked:border-[5px] lg:checked:border-[6px] checked:border-white
                                                        shrink-0
                                                    `}
                                                        />
                                                        <label htmlFor={`interest-${index}`} className={` text-[13px] xl:text-[16px] font-[400] ${selectedInterest === index ? 'text-[#FFFFFF]' : 'text-[#000000]'} cursor-pointer`}>
                                                            {item.text}
                                                            <span className="font-[700]">{item.bold}</span>
                                                            {item.end}
                                                        </label>
                                                    </div>
                                                </li>
                                            ))
                                    }
                                </ul>
                            </div>
                        </div>

                        {/* Bottom Submit Button Container  */}
                        <div className="w-full flex justify-center items-center">
                            <button className="w-full h-[44px] sm:h-[48px] lg:h-[50px] flex justify-center items-center gap-2 rounded-[4px] font-[700] text-[14px] sm:text-[15px] lg:text-[16px] text-white cursor-pointer bg-[#6C3E1A] hover:bg-[#5a3315] transition-colors">
                                <p className="text-[14px] sm:text-[15px] lg:text-[16px] font-[700] text-white">Send a Message</p>
                                <img src="/icons/ct-arr1.png" alt="Send" className="w-[13px] h-[13px] sm:w-[14px] sm:h-[14px] lg:w-[15px] lg:h-[15px]" />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default S4;