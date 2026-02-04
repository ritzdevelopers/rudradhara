import React from "react";
import Image from "next/image";

const cards = [
  {
    title: "Loose Rudraksha",
    description: "Best for a personal start, one Rudraksha, clear mukhi, easy daily wear, simple care.",
    image: "/learn/s3/Mask group (1).png",
  },
  {
    title: "Bracelet",
    description: "Comfortable daily option, easy to wear, minimal fuss, good for consistent routine and travel.",
    image: "/learn/s3/Mask group (2).png",
  },
  {
    title: "Mala (108+1)",
    description: "Ideal for japa practice, supports clean counting, includes guru Rudraksha marker, steady daily rhythm.",
    image: "/learn/s3/Mask group (3).png",
  },
  {
    title: "Personal Combination",
    description: "Based on your Vedic birth sign, choose a set of Rudraksha that will improve your luck and help you in your chosen purpose.",
    image: "/learn/s3/Mask group (4).png",
  },
];

function S3() {
  return (
    <section className="w-full py-8 sm:py-10 md:py-12 lg:py-[50px] xl:py-[60px] 2xl:py-[70px] px-4 sm:px-6 md:px-8 lg:px-[35px] xl:px-[70px] 2xl:px-[80px] bg-white">
      <div className="max-w-[1300px] xl:max-w-[1400px] 2xl:max-w-[1600px] mx-auto">
        {/* Banner */}
        <div className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[352px] xl:h-[380px] 2xl:h-[400px] rounded-[5px] overflow-hidden">
          <Image src="/learn/s3/Learn Banner-02 1.png" alt="Choose the format background" fill className="object-cover" sizes="100vw" priority />
          <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-8">
            {/* Step Badge */}
            <div className="relative w-[46px] h-[54px] sm:w-[50px] sm:h-[58px] md:w-[54px] md:h-[62px] lg:w-[58px] lg:h-[66px] xl:w-[62px] xl:h-[70px] 2xl:w-[65px] 2xl:h-[73px]">
              <div className="absolute top-0 left-0 w-[46px] h-[46px] sm:w-[50px] sm:h-[50px] md:w-[54px] md:h-[54px] lg:w-[58px] lg:h-[58px] xl:w-[62px] xl:h-[62px] 2xl:w-[65px] 2xl:h-[65px] rounded-full bg-white flex flex-col items-center justify-center">
                <span className="text-[8px] sm:text-[9px] md:text-[9px] lg:text-[10px] xl:text-[10px] 2xl:text-[11px] font-semibold text-[#6C3E1A] tracking-wide font-open-sans">STEP</span>
                <span className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] 2xl:text-[26px] font-bold text-[#6C3E1A] font-montserrat leading-none -mt-px">2</span>
              </div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[8px] border-l-transparent border-r-transparent border-t-white " />
            </div>
            <h2 className="font-montserrat italic font-bold text-[20px] sm:text-[24px] md:text-[28px] lg:text-[36px] xl:text-[40px] 2xl:text-[44px] text-white mt-2">
              Choose the Format
            </h2>
          </div>
        </div>

        {/* Cards Container */}
        <div className="mt-[-40px] sm:mt-[-70px] md:mt-[-80px] lg:mt-[-110px] xl:mt-[-100px] 2xl:mt-[-110px] rounded-[5px] border border-[#E9D7C3] py-4 sm:py-5 md:py-6 lg:py-6 xl:py-7 2xl:py-8 px-3 sm:px-4 md:px-5 lg:px-6 xl:px-7 2xl:px-8 relative z-20 w-full mx-auto border-t-0 ">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-3">
            {cards.map((card) => (
              <div key={card.title} className="flex flex-col items-center text-center">
                <div className="relative w-full aspect-287/171 rounded-[8px] sm:rounded-[9px] md:rounded-[10px] overflow-hidden">
                  <Image src={card.image} alt={card.title} fill className="object-cover" sizes="(max-width: 639px) 50vw, (max-width: 1023px) 50vw, 25vw" />
                </div>
                <div className="mt-3 sm:mt-4 md:mt-5 px-1 sm:px-2 md:px-3">
                  <h3 className="font-montserrat font-bold text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[17px] text-[#1a1a1a] mb-1.5 sm:mb-2">{card.title}</h3>
                  <p className="font-open-sans text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[15px] text-black leading-[1.6] max-w-[200px] sm:max-w-[220px] md:max-w-[240px] lg:max-w-[200px] xl:max-w-[220px] 2xl:max-w-[240px] mx-auto">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default S3;