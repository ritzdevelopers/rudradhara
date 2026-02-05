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
    <section className="w-full pt-5 pb-[40px] sm:pb-[50px] md:pb-[60px] lg:pb-[70px] xl:pb-[80px] 2xl:pb-[90px] px-4 sm:px-6 md:px-8 lg:px-[35px] xl:px-[70px] 2xl:px-[80px] bg-white">
      <div className="max-w-[1300px] xl:max-w-[1400px] 2xl:max-w-[1600px] mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center gap-1 mb-[30px] sm:mb-[35px] md:mb-[40px] lg:mb-[50px] xl:mb-[55px] 2xl:mb-[60px]">
          <div className="relative w-[58px] h-[65px]">
            <div className="absolute top-0 left-0 w-[58px] h-[58px] rounded-full bg-[#EDD5A9] flex flex-col items-center justify-center">
              <span className="text-[9px] font-semibold text-[#6C3E1A] tracking-wide">
                STEP
              </span>
              <span className="text-[22px] font-bold text-[#6C3E1A] leading-none -mt-[2px]">
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

            {/* Labels */}
            <div className="absolute top-[25px] left-[35px]">
              <h3 className="font-montserrat font-bold text-white text-[22px]">
                Nepali Rudraksha
              </h3>
            </div>

            <div className="absolute top-[25px] right-[35px]">
              <h3 className="font-montserrat font-bold text-white text-[22px]">
                Indonesian Rudraksha
              </h3>
            </div>
          </div>

          {/* Comparison Table */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[92%] sm:w-[88%] md:w-[85%] lg:w-[82%] xl:w-[80%] 2xl:w-[78%]">
            
            <div className="relative rounded-t-[20px] overflow-hidden">

              {/* LEFT ARROW (single) */}
              <Image
                src="/learn/s5/left-arrow.svg"
                alt="Left arrow"
                width={20}
                height={20}
                className="absolute left-[32%] top-1/2 -translate-y-1/2 z-10"
              />

              {/* RIGHT ARROW (single) */}
              <Image
                src="/learn/s5/right_arrow.svg"
                alt="Right arrow"
                width={20}
                height={20}
                className="absolute right-[32%] top-1/2 -translate-y-1/2 z-10"
              />

              {comparisonData.map((item, index) => (
                <div key={index} className="grid grid-cols-3">

                  {/* Nepali */}
                  <div
                    className="py-3 sm:py-4 px-3 sm:px-6 text-center flex items-center justify-center"
                    style={{ backgroundColor: "#F8DEAEB5" }}
                  >
                    <span className="font-open-sans text-[14px] lg:text-[18px] text-black">
                      {item.nepali}
                    </span>
                  </div>

                  {/* Center Property */}
                  <div className="py-4 px-4 text-center bg-white flex items-center justify-center">
                    <span className="font-open-sans font-bold text-[14px] lg:text-[18px] text-black">
                      {item.property}
                    </span>
                  </div>

                  {/* Indonesian */}
                  <div
                    className="py-4 px-4 text-center flex items-center justify-center"
                    style={{ backgroundColor: "#F8DEAEB5" }}
                  >
                    <span className="font-open-sans text-[14px] lg:text-[18px] text-black">
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
