import React from "react";
import Image from "next/image";

const comparisonData = [
  {
    property: "Typical size",
    nepali: "Bigger/Heavier",
    indonesian: "Smaller/Lighter",
  },
  {
    property: "Groove visibility",
    nepali: "Often bolder",
    indonesian: "More subtle",
  },
];

const S5 = () => {
  return (
    <section className="w-full py-[40px] sm:py-[50px] md:py-[60px] lg:py-[50px]  2xl:py-[90px] px-4 sm:px-6 md:px-8 lg:px-[35px] xl:px-[70px] 2xl:px-[80px] bg-white">
      <div className="max-w-[1300px] xl:max-w-[1400px] 2xl:max-w-[1600px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center gap-1 mb-[30px] sm:mb-[35px] md:mb-[40px] lg:mb-[50px] xl:mb-[55px] 2xl:mb-[60px]">
          {/* Step Badge */}
          <div className="relative w-[58px] h-[65px] sm:w-[62px] sm:h-[69px] md:w-[64px] md:h-[70px] lg:w-[65px] lg:h-[71px] xl:w-[68px] xl:h-[74px] 2xl:w-[70px] 2xl:h-[76px]">
            <div className="absolute top-0 left-0 w-[58px] h-[58px] sm:w-[62px] sm:h-[62px] md:w-[64px] md:h-[64px] lg:w-[65px] lg:h-[65px] xl:w-[68px] xl:h-[68px] 2xl:w-[70px] 2xl:h-[70px] rounded-full bg-[#EDD5A9] flex flex-col items-center justify-center">
              <span className="text-[9px] sm:text-[10px] md:text-[10px] lg:text-[11px] xl:text-[11px] 2xl:text-[12px] font-semibold text-[#6C3E1A] tracking-wide font-open-sans">
                STEP
              </span>
              <span className="text-[22px] sm:text-[24px] md:text-[24px] lg:text-[26px] xl:text-[27px] 2xl:text-[28px] font-bold text-[#6C3E1A] font-montserrat leading-none -mt-[2px]">
                4
              </span>
            </div>
            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0"
              style={{
                borderLeft: "8px solid transparent",
                borderRight: "8px solid transparent",
                borderTop: "10px solid #EDD5A9",
              }}
            />
          </div>

          {/* Title */}
          <h2 className="font-montserrat text-[24px] sm:text-[26px] md:text-[30px] lg:text-[38px] xl:text-[42px] 2xl:text-[46px] text-center text-[#1a1a1a] mt-1">
            <span className="font-bold">Nepal</span>
            <span className="font-normal text-[#888888] mx-1 sm:mx-2">vs</span>
            <span className="font-bold">Indonesian</span>
          </h2>
        </div>

        {/* Banner Container */}
        <div className="relative w-full rounded-[12px] sm:rounded-[16px] lg:rounded-[20px] overflow-hidden">
          {/* Banner Image */}
          <div className="relative w-full h-[300px] sm:h-[380px] md:h-[450px] lg:h-[520px] xl:h-[580px] 2xl:h-[640px]">
            <Image
              src="/learn/s5/VS_Banner.png"
              alt="Nepal vs Indonesian Rudraksha comparison"
              fill
              className="object-cover"
              sizes="1300px"
              priority
            />

           
           

            {/* Nepali Rudraksha Label */}
            <div className="absolute top-[15px] sm:top-[20px] md:top-[25px] lg:top-[35px] xl:top-[40px] 2xl:top-[45px] left-[15px] sm:left-[25px] md:left-[35px] lg:left-[50px] xl:left-[60px] 2xl:left-[70px]">
              <h3 className="font-montserrat font-bold text-[16px] sm:text-[18px] md:text-[22px] lg:text-[26px] xl:text-[30px] 2xl:text-[34px] text-white"
                style={{ textShadow: "1px 2px 4px rgba(0,0,0,0.4)" }}
              >
                Nepali Rudraksha
              </h3>
            </div>

            {/* Indonesian Rudraksha Label */}
            <div className="absolute top-[15px] sm:top-[20px] md:top-[25px] lg:top-[35px] xl:top-[40px] 2xl:top-[45px] right-[15px] sm:right-[25px] md:right-[35px] lg:right-[50px] xl:right-[60px] 2xl:right-[70px]">
              <h3 className="font-montserrat font-bold text-[16px] sm:text-[18px] md:text-[22px] lg:text-[26px] xl:text-[30px] 2xl:text-[34px] text-white"
                style={{ textShadow: "1px 2px 4px rgba(0,0,0,0.4)" }}
              >
                Indonesian Rudraksha
              </h3>
            </div>
          </div>

          {/* Comparison Table - Overlapping bottom of banner */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[92%] sm:w-[88%] md:w-[85%] lg:w-[82%] xl:w-[80%] 2xl:w-[78%]">
            <div className="rounded-t-[12px] sm:rounded-t-[14px] md:rounded-t-[16px] lg:rounded-t-[18px] xl:rounded-t-[20px] overflow-hidden">
              {comparisonData.map((item, index) => (
                <div
                  key={index}
                  className="grid grid-cols-3"
                >
                  {/* Nepali Value - Left */}
                  <div 
                    className="py-3 sm:py-4 px-3 sm:px-6 text-center flex items-center justify-center"
                    style={{ backgroundColor: "#F8DEAEB5" }}
                  >
                    <span className="font-open-sans text-[13px] sm:text-[14px] lg:text-[18px] text-[#000000] font-normal">
                      {item.nepali}
                    </span>
                  </div>

                  {/* Property Name - Center with arrows */}
                  <div className="py-3 sm:py-3.5 md:py-4 lg:py-4 xl:py-5 2xl:py-6 px-2 sm:px-3 md:px-4 lg:px-4 xl:px-5 2xl:px-6 text-center bg-[#FFFFFF] flex items-center justify-between relative">
                    {/* Left Arrow */}
                    {/* <Image
                      src="/learn/s5/left-arrow.svg"
                      alt="Left arrow"
                      width={20}
                      height={20}
                      className="w-[14px] h-[14px] sm:w-[16px] sm:h-[16px] md:w-[18px] md:h-[18px] lg:w-[20px] lg:h-[20px] "
                    /> */}
                    
                    {/* Property Text */}
                    <span className="font-open-sans font-bold text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] text-[#000000] text-center mx-auto">
                      {item.property}
                    </span>
                    
                    {/* Right Arrow */}
                    {/* <Image
                      src="/learn/s5/right_arrow.svg"
                      alt="Right arrow"
                      width={20}
                      height={20}
                      className="w-[14px] h-[14px] sm:w-[16px] sm:h-[16px] md:w-[18px] md:h-[18px] lg:w-[20px] lg:h-[20px] "
                    /> */}
                  </div>

                  {/* Indonesian Value - Right */}
                  <div 
                    className="py-3 sm:py-3.5 md:py-4 lg:py-4 xl:py-5 2xl:py-6 px-2 sm:px-4 md:px-5 lg:px-6 xl:px-7 2xl:px-8 text-center flex items-center justify-center"
                    style={{ backgroundColor: "#F8DEAEB5" }}
                  >
                    <span className="font-open-sans text-[11px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] text-[#000000] font-normal">
                      {item.indonesian}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default S5;
