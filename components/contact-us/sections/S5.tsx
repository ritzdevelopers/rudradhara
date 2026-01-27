"use client"
import React from "react";
import { useState } from "react";

function S5() {
    const [selectedFAQ, setSelectedFAQ] = useState([
        {
            id:1,
            question:"Do you provide certification and documentation?",
            answer:"Yes, our Rudraksha products are certified and documented.",
            isActive:true
        },
        {
            id:2,
            question:"How long does it take to get a response?",
            answer:"Yes, our Rudraksha products are certified and documented.",
            isActive:false
        },
        {
            id:3,
            question:"Can I learn the basics before choosing?",
            answer:"Yes, our Rudraksha products are certified and documented.",
            isActive:false
        },
        
    ])
    const handleFAQClick = (id: number) => {
        setSelectedFAQ(selectedFAQ.map(faq => faq.id === id ? { ...faq, isActive: !faq.isActive } : faq))
    }
    return (
        <section className="w-full py-[70px] bg-[#FFFAF2] px-20 relative flex justify-between">
            {/* Left Side Container  */}
            <div className="w-full">
                <h6 className="font-[700] text-[40px]">
                Before you reach out
                </h6>
                <p className="font-[400] text-[30px]">
                Frequently asked questions <br /> (FAQs)
                </p>
            </div>

            {/* Right Side Container  */}
            <div className="w-full max-w-[624px] ">
                <ul className="w-full flex flex-col gap-[10px]">
                {
                   selectedFAQ.map((faq)=>{
                    return (
                   <li key={faq.id} className="w-full">
                         <div key={faq.id} className="w-full flex flex-col gap-[20px] border-b-[1px] border-[#6C3E1A] pb-[20px] cursor-pointer relative" onClick={() => handleFAQClick(faq.id)}>
                            <h6 className="font-[600] text-[18px]">{faq.question}</h6>
                            {
                                faq.isActive && (
                                    <p className="font-[400] text-[16px]">{faq.answer}</p>
                                )
                            }



                            {/* Absolute Position Icon  */}
                            <div className="w-[29px] h-[29px] bg-[#6C3E1A] rounded-full absolute top-0 right-0 flex justify-center items-center">
                                <img src="/icons/faq-arr.png" alt="" className={`w-[10px] h-[10px] ${faq.isActive ? 'rotate-0' : '-rotate-90'}`} />
                            </div>
                        </div>
                   </li>
                    )
                   })
                }
                </ul>
            </div>
        </section>
    )
}
export default S5;