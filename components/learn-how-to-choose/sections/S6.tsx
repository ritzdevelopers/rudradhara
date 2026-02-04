import React from "react";
import Image from "next/image";

const sizeData = [
  { size: "4mm", image: "/learn/s6/4mm.png" , width: 50, height: 50 },
  { size: "6mm", image: "/learn/s6/6mm.png" , width: 50, height: 50 },
  { size: "8mm", image: "/learn/s6/8mm.png" , width: 50, height: 50 },
  { size: "10mm", image: "/learn/s6/10mm.png" , width: 50, height: 50 },
  { size: "10mm+", image: "/learn/s6/10mm+.png" , width: 50, height: 50 },
];

const OUTER_SIZE = 200; // 🔒 SAME for all circles

const S6 = () => {
  return (
    <section className="w-full py-[20px] sm:py-[40px] md:py-[50px] lg:py-[20px]  px-4 sm:px-6 md:px-8 lg:px-[35px] xl:px-[70px] 2xl:px-[80px] bg-white">
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
                5
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
          <h2 className="font-montserrat font-bold text-[24px] sm:text-[26px] md:text-[30px] lg:text-[38px] xl:text-[42px] 2xl:text-[46px] text-center text-[#1a1a1a] mt-1">
            Size Matters
          </h2>
        </div>

        {/* Size Selector */}
        <div className="flex flex-wrap justify-center items-end gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-7 2xl:gap-8">
          {sizeData.map((item, index) => {
           
     

            return (
              <div key={item.size} className="flex flex-col items-center">
                {/* OUTER CIRCLE (FIXED SIZE) */}
                <div
                  className="rounded-full border-2 border-[#F8DEAE] flex items-center justify-center bg-white"
                  style={{
                    width: `clamp(150px, ${OUTER_SIZE}px, 220px)`,
                    height: `clamp(150px, ${OUTER_SIZE}px, 220px)`,
                  }}
                >
                  {/* INNER IMAGE (VARIABLE SIZE) */}
                  <div
                    className="relative rounded-full overflow-hidden"
                    style={{
                      width: "clamp(130px, 87.5%, 195px)",
                      height: "clamp(130px, 87.5%, 195px)",
                    }}
                  >
                    <Image
                      src={item.image}
                      alt={`${item.size} Rudraksha`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Size Label */}
                <span className="font-montserrat font-semibold text-[13px] sm:text-[14px] md:text-[15px] lg:text-[17px] xl:text-[18px] 2xl:text-[20px] text-[#1a1a1a] mt-2 sm:mt-3 md:mt-4">
                  {item.size}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Divider - Full width (using negative margins to counteract section padding) */}
      <div 
        className="mt-[40px] sm:mt-[50px] md:mt-[60px] lg:mt-[70px] xl:mt-[80px] 2xl:mt-[90px] -mx-4 sm:-mx-6 md:-mx-8 lg:-mx-[35px] xl:-mx-[70px] 2xl:-mx-[80px]"
        style={{ height: "1px", backgroundColor: "#F8DEAE" }}
      />
    </section>
  );
};

export default S6;
