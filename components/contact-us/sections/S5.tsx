"use client"
import React from "react";
import { useState } from "react";
import styles from "./page.module.css";
function S5() {
    const [selectedFAQ, setSelectedFAQ] = useState([
        {
            id: 1,
            question: "Do you provide certification and documentation?",
            answer: "Yes, our Rudraksha products are certified and documented.",
            isActive: true
        },
        {
            id: 2,
            question: "How long does it take to get a response?",
            answer: "We respond as quickly as possible.",
            isActive: false
        },
        {
            id: 3,
            question: "Can I learn the basics before choosing?",
            answer: "Yes. Start with Learn How to Choose and Rudraksha Basics.",
            isActive: false
        },

    ])
    const handleFAQClick = (id: number) => {
        setSelectedFAQ(selectedFAQ.map(faq => faq.id === id ? { ...faq, isActive: !faq.isActive } : faq))
    }
    return (
        <section className="w-full py-10 sm:py-12 md:py-14 lg:py-[70px] bg-[#FFFAF2] px-4 sm:px-6 md:px-8 lg:px-10 relative flex justify-center items-center">
            {/* Center Align Container  */}
            <div className={`flex flex-col lg:flex-row lg:justify-between w-full ${styles.mainContainer} gap-6 sm:gap-8 lg:gap-6`}>
                {/* Left Side Container  */}
                <div className="w-full lg:w-auto text-center lg:text-left">
                    <h6 className="font-[700] text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px]">
                        Before you reach out
                    </h6>
                    <p className="font-[400] text-[22px] sm:text-[24px] md:text-[26px] lg:text-[30px] mt-2 sm:mt-3">
                        Frequently asked questions <br /> <span className="font-[700]"> (FAQs)</span>
                    </p>
                </div>

                {/* Right Side Container  */}
                <div className="w-full lg:max-w-[624px]">
                    <ul className="w-full flex flex-col gap-3 sm:gap-4 lg:gap-[10px]">
                        {
                            selectedFAQ.map((faq) => {
                                return (
                                    <li key={faq.id} className="w-full">
                                        <div className="w-full flex flex-col gap-4 sm:gap-5 lg:gap-[20px] border-b-[1px] border-[#6C3E1A] pb-4 sm:pb-5 lg:py-[10px] cursor-pointer relative pr-10 sm:pr-12 lg:pr-0 transition-all duration-300" onClick={() => handleFAQClick(faq.id)}>
                                            <h6 className="font-[600] text-[16px] sm:text-[17px] lg:text-[18px] pr-8 sm:pr-10 lg:pr-0 transition-all duration-300">{faq.question}</h6>
                                            <div className={`overflow-hidden transition-all duration-300 ${faq.isActive ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                                <p className="font-[400] text-[14px] sm:text-[15px] lg:text-[16px]">{faq.answer}</p>
                                            </div>

                                            {/* Absolute Position Icon  */}
                                            <div className="w-[24px] h-[24px] sm:w-[26px] sm:h-[26px] lg:w-[29px] lg:h-[29px] bg-[#6C3E1A] rounded-full absolute top-[50%] translate-y-[-50%] right-0 flex justify-center items-center">
                                                <img src="/icons/faq-arr.png" alt="" className={`w-[8px] h-[8px] sm:w-[9px] sm:h-[9px] lg:w-[10px] lg:h-[10px] transition-transform duration-300 ${faq.isActive ? 'rotate-0' : '-rotate-90'}`} />
                                            </div>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}
export default S5;