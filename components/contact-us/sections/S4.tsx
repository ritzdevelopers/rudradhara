"use client"
import React, { useState } from "react";

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
        <section className="w-full py-[70px] px-20 relative flex justify-between gap-[54px]">
            {/* Left Side Contianer  */}
            <div className="max-w-[273]">
                <h5 className="font-[700] text-[40px]">
                    Send a <br /> Message
                </h5>
                <p className="font-[400] text-[20px]">
                    If you’re writing to us about Rudraksha, these details help us guide you faster:
                </p>
            </div>


            {/* Right Side Container  */}
            <div className="w-full">
                <form className="w-full flex flex-col gap-[20px]">
                    {/* Top Container  */}
                    <div className="flex justify-between">

                        {/* Left Side Form Input Fields Container  */}
                        <div className="w-full max-w-[462px] flex flex-col gap-[10px]">
                            <div className="flex flex-col gap-[10px]">
                                <input type="text" placeholder="Your Name *" className="w-full h-[50px] px-4 border-[1px] outline-none focus:border-[#6C3E1A] border-[#E4E1E1]  rounded-[2px] font-[400] text-[16px] placeholder:text-[#000000] focus:outline-none placeholder:text-[#4E4E4E]" required />

                                {/* Error Message  */}
                                {
                                    errors.name && (
                                        <p className="font-[400] text-[14px] text-[#F01414]">
                                            Please fill out  this field.
                                        </p>
                                    )
                                }
                            </div>

                            <div className="flex flex-col gap-[10px]">
                                <input type="text" placeholder="Your e-mail" className="w-full h-[50px] px-4 border-[1px] outline-none focus:border-[#6C3E1A] border-[#E4E1E1]  rounded-[2px] font-[400] text-[16px] placeholder:text-[#000000] focus:outline-none placeholder:text-[#4E4E4E]" required />

                                {/* Error Message  */}
                                {
                                    errors.email && (
                                        <p className="font-[400] text-[14px] text-[#F01414]">
                                            Please fill out  this field.
                                        </p>
                                    )
                                }
                            </div>

                            <div className="flex flex-col gap-[10px]">
                                <input type="text" placeholder="Phone *" className="w-full h-[50px] px-4 border-[1px] outline-none focus:border-[#6C3E1A] border-[#E4E1E1]  rounded-[2px] font-[400] text-[16px] placeholder:text-[#000000] focus:outline-none placeholder:text-[#4E4E4E]" required />

                                {/* Error Message  */}
                                {
                                    errors.phone && (
                                        <p className="font-[400] text-[14px] text-[#F01414]">
                                            Please fill out  this field.
                                        </p>
                                    )
                                }
                            </div>

                            <div className="flex flex-col gap-[10px]">
                                <input type="text" placeholder="Message *" className="w-full h-[117px] px-4 border-[1px] outline-none focus:border-[#6C3E1A] border-[#E4E1E1]  rounded-[2px] font-[400] text-[16px] placeholder:text-[#000000] focus:outline-none placeholder:text-[#4E4E4E]" required />

                                {/* Error Message  */}
                                {
                                    errors.message && (
                                        <p className="font-[400] text-[14px] text-[#F01414]">
                                            Please fill out  this field.
                                        </p>
                                    )
                                }
                            </div>
                        </div>

                        {/* Right Side Radio Buttons Container  */}
                        <div className="w-full max-w-[446px] flex flex-col gap-[20px]">
                            <p className="font-[600] text-[20px]">I'm interested in...</p>
                            <ul className="flex flex-col gap-[10px]">
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
                                                    className={`w-full flex items-center gap-[10px] rounded-full px-4 p-[10px] transition-colors ${selectedInterest === index ? 'bg-[#C87A2A]' : 'bg-[#FFFAF2]'
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
                                                        w-[20px] h-[20px]
                                                        border-[1px] border-[#EABB8C] 
                                                        rounded-full 
                                                        outline-none 
                                                        cursor-pointer
                                                        transition-all
                                                        checked:border-[6px] checked:border-white
                                                    `}
                                                    />
                                                    <label htmlFor={`interest-${index}`} className={`text-[16px] font-[400] ${selectedInterest === index ? 'text-[#FFFFFF]' : 'text-[#000000]'} cursor-pointer`}>
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
                        <button className="w-full h-[50px] flex justify-center items-center gap-2 rounded-[4px] font-[700] text-[16px] text-white cursor-pointer bg-[#6C3E1A]">
                            <p className="text-[16px] font-[700] text-white">Send a Message</p><img src="/icons/ct-arr1.png" alt="Send" className="w-[15px] h-[15px]" />
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default S4;