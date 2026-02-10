"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type AnswerSegment = { type: "text"; content: string } | { type: "bold"; content: string };

const faqData: { question: string; answer: string | AnswerSegment[] }[] = [
  {
    question: "Do I need to be vegetarian to wear a Rudraksha?",
    answer: [
      { type: "text", content: "No, there is no strict requirement. What matters most is " },
      { type: "bold", content: "respect, devotion, and proper care" },
      { type: "text", content: " of your Rudraksha." },
    ],
  },
  {
    question: "Can women wear Rudraksha?",
    answer: [
      { type: "text", content: "No, there is no strict requirement. What matters most is " },
      { type: "bold", content: "respect, devotion, and proper care" },
      { type: "text", content: " of your Rudraksha." },
    ],
  },
  {


    question: "Which Rudraksha should I wear?",
   answer: [
      { type: "text", content: "No, there is no strict requirement. What matters most is " },
      { type: "bold", content: "respect, devotion, and proper care" },
      { type: "text", content: " of your Rudraksha." },
    ],                  
  },
  {
    question: "Can children wear Rudraksha?",
    answer: [
      { type: "text", content: "No, there is no strict requirement. What matters most is " },
      { type: "bold", content: "respect, devotion, and proper care" },
      { type: "text", content: " of your Rudraksha." },
    ], 
  },
  {
    question: "Can Rudraksha be worn while sleeping or exercising?",
    answer: [
      { type: "text", content: "No, there is no strict requirement. What matters most is " },
      { type: "bold", content: "respect, devotion, and proper care" },
      { type: "text", content: " of your Rudraksha." },
    ],  
    
  },
  {
    question: "Can Rudraksha be worn by people of all religions?",
    answer: [
      { type: "text", content: "No, there is no strict requirement. What matters most is " },
      { type: "bold", content: "respect, devotion, and proper care" },
      { type: "text", content: " of your Rudraksha." },
    ], 
  },
];

const S9 = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="w-full min-h-[678px] py-[40px] sm:py-[50px] md:py-[60px] lg:py-[70px] xl:py-[80px] 2xl:py-[90px] px-4 sm:px-6 md:px-8 lg:px-[35px] xl:px-[70px] 2xl:px-[80px] bg-[#FFFAF2]">
      <div className="max-w-[1372px] xl:max-w-[1500px] 2xl:max-w-[1700px] mx-auto w-full">
        {/* Top: Title left, FAQ list right */}
        <div className="flex flex-col lg:flex-row lg:items-start gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-14 2xl:gap-16 mb-10 sm:mb-12 md:mb-14 lg:mb-16 xl:mb-18 2xl:mb-20">
          <div className="w-full lg:max-w-[463px] xl:max-w-[500px] 2xl:max-w-[550px] shrink-0">
            <h2 className="font-montserrat font-bold text-[28px] sm:text-[32px] md:text-[36px] lg:text-[38px] xl:text-[42px] 2xl:text-[46px] text-[#000000] mb-2 sm:mb-3">
              Quick FAQs
            </h2>
            <p className="font-montserrat text-[14px] sm:text-[15px] md:text-[28px] lg:text-[28px] xl:text-[28px] 2xl:text-[28px] leading-relaxed text-[#000000]">
              Simple answers to the most common questions beginners have before
              choosing or wearing Rudraksha.
            </p>
          </div>

          <div className="w-full flex-1 min-w-0 lg:max-w-[651px] xl:max-w-[700px] 2xl:max-w-[750px] mx-auto lg:ml-[120px] xl:ml-[140px] 2xl:ml-[160px]">
            {faqData.map((item, index) => (
              <div
                key={index}
                className="border-b border-[#6C3E1A]"
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full flex items-start sm:items-center justify-between gap-2 sm:gap-3 md:gap-4 py-3 sm:py-4 md:py-4 lg:py-5 xl:py-6 text-left"
                >
                  <span className="flex-1 font-montserrat font-semibold text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px] 2xl:text-[19px] text-[#000000] pr-2 break-words">
                    {item.question}
                  </span>
                  <span className="shrink-0 w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 flex items-center justify-center rounded-full bg-[#6C3E1A] transition-all duration-1000 ease-in-out hover:scale-110">
                    <Image
                      src={
                        openIndex === index
                          ? "/learn/s9/down.svg"
                          : "/learn/s9/up.svg"
                      }
                      alt={openIndex === index ? "Collapse" : "Expand"}
                      width={10}
                      height={10}
                      className="w-[8px] h-[8px] sm:w-[9px] sm:h-[9px] md:w-[10px] md:h-[10px] transition-all duration-1000"
                    />
                  </span>
                </button>
                <div
                  className="grid transition-[grid-template-rows] duration-500 ease-in-out"
                  style={{
                    gridTemplateRows: openIndex === index ? "1fr" : "0fr",
                  }}
                >
                  <div className="overflow-hidden">
                    <div className="pb-3 sm:pb-4 md:pb-5 lg:pb-10 pl-0 pr-8 sm:pr-10 md:pr-12 lg:pr-14 w-full">
                      <p className="font-open-sans text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px] 2xl:text-[18px] leading-relaxed text-[#555555] break-words">
                        {Array.isArray(item.answer)
                          ? item.answer.map((seg, i) =>
                              seg.type === "bold" ? (
                                <strong key={i} className="font-semibold text-[#000000]">
                                  {seg.content}
                                </strong>
                              ) : (
                                <span key={i}>{seg.content}</span>
                              )
                            )
                          : item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA: Rudraksha should feel clear */}
        {/* <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-4 border-t border-[#E5DDD4]">
          <div>
            <h3 className="font-montserrat font-bold text-[22px] sm:text-[24px] text-[#1A1A1A] mb-1">
              Rudraksha should feel clear.
            </h3>
            <p className="font-open-sans text-[14px] sm:text-[15px] text-[#555555]">
              If anything feels confusing, reach out.
            </p>
          </div>
          <Link
            href="/#explore"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#EDD5A9] hover:bg-[#E5CD9F] text-[#1A1A1A] font-montserrat font-semibold text-[15px] sm:text-[16px] shrink-0"
          >
            Explore Rudraksha
            <Image
              src="/learn/s5/right_arrow.svg"
              alt=""
              width={16}
              height={16}
              className="w-4 h-4"
            />
          </Link>
        </div> */}
      </div>
    </section>
  );
};

export default S9;
