import React from "react";

const S8 = () => {
  return (
    <section className="w-full bg-white py-[40px] sm:py-[50px] md:py-[60px] lg:py-[70px] xl:py-[80px] 2xl:py-[90px] px-4 sm:px-6 md:px-8 lg:px-[35px] xl:px-[70px] 2xl:px-[80px]">
      <div className="max-w-[1300px] xl:max-w-[1400px] 2xl:max-w-[1600px] mx-auto">
        {/* Main Grid - Left column (header + 2 cards) and Right column (2 cards) */}
        <div className="flex flex-col lg:flex-row gap-5 sm:gap-6 md:gap-7 lg:gap-8 xl:gap-9 2xl:gap-10">
          {/* Left Column */}
          <div className="flex flex-col gap-6 lg:w-1/2">
            {/* Header – Step 7 badge + Care & Longevity */}
            <div className="flex flex-col items-center lg:items-start">
              <div className="relative w-[58px] h-[65px] sm:w-[62px] sm:h-[69px] md:w-[64px] md:h-[70px] lg:w-[65px] lg:h-[71px] xl:w-[68px] xl:h-[74px] 2xl:w-[70px] 2xl:h-[76px] shrink-0">
                <div className="absolute top-0 left-0 w-[58px] h-[58px] sm:w-[62px] sm:h-[62px] md:w-[64px] md:h-[64px] lg:w-[65px] lg:h-[65px] xl:w-[68px] xl:h-[68px] 2xl:w-[70px] 2xl:h-[70px] rounded-full bg-[#EDD5A9] flex flex-col items-center justify-center">
                  <span className="text-[9px] sm:text-[10px] md:text-[10px] lg:text-[11px] xl:text-[11px] 2xl:text-[12px] font-semibold text-[#6C3E1A] tracking-wide font-open-sans">
                    STEP
                  </span>
                  <span className="text-[22px] sm:text-[24px] md:text-[24px] lg:text-[26px] xl:text-[27px] 2xl:text-[28px] font-bold text-[#6C3E1A] font-montserrat leading-none -mt-[2px]">
                    7
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
              <h2 className="font-montserrat font-bold text-[24px] sm:text-[26px] md:text-[30px] lg:text-[38px] xl:text-[42px] 2xl:text-[46px] text-[#1A1A1A] mt-1 md:mt-2 text-center lg:text-left">
                Care & Longevity
              </h2>
            </div>

            {/* Card 1: Keep It Clean and Pure */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="sm:w-[45%] shrink-0 overflow-hidden rounded-[10px]">
                <img
                  src="/learn/s8/clean.jpg"
                  alt="Keep It Clean and Pure"
                  className="w-full h-[180px] sm:h-full object-cover"
                />
              </div>
              <div className="flex-1 flex flex-col justify-center p-4 sm:p-5 md:p-6 rounded-[10px] border border-[#EDD5A9] bg-white">
                <h3 className="font-montserrat font-semibold text-[16px] sm:text-[18px] md:text-[20px] text-[#000000] mb-1 sm:mb-2">
                  Keep It Clean and Pure
                </h3>
                <p className="font-open-sans text-[13px] sm:text-[14px] md:text-[15px] leading-relaxed text-[#000000] break-words">
                  Gently wipe your Rudraksha and rinse with clean water
                  occasionally to maintain its natural energy. Apply natural
                  oils like mustard, & ghee every few months to protect it.
                </p>
              </div>
            </div>

            {/* Card 3: Protect from Chemicals - Single container with image having its own border */}
            <div className="flex flex-col sm:flex-row gap-4 p-4 rounded-[10px] border border-[#EDD5A9] bg-white sm:h-[196px]">
              <div className="sm:w-[45%] shrink-0 overflow-hidden rounded-[10px] border border-[#EDD5A9]">
                <img
                  src="/learn/s8/chemical.jpg"
                  alt="Protect from Chemicals"
                  className="w-full aspect-[16/10] sm:h-full object-cover sm:object-top rounded-[8px]"
                />
              </div>
              <div className="flex-1 flex flex-col justify-center p-4 sm:p-5 md:p-6 lg:p-4 ml-1">
                <h3 className="font-montserrat font-semibold text-[16px] sm:text-[18px] md:text-[20px] text-[#000000] mb-1 sm:mb-2">
                  Protect from Chemicals
                </h3>
                <p className="font-open-sans text-[13px] sm:text-[14px] md:text-[16px] leading-relaxed text-[#000000] wrap-break-word">
                  Remove your Rudraksha before using soaps, perfumes, or
                  cleaning agents to preserve its natural energy.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - top aligns with Step 7 badge (left column start) */}
          <div className="flex flex-col gap-6 lg:w-1/2">
            {/* Card 2: Handle Gently */}
            <div className="flex flex-col sm:flex-row gap-4 lg:h-[302px]">
              <div className="sm:w-[55%] shrink-0 overflow-hidden rounded-[10px]">
                <img
                  src="/learn/s8/gently.jpg"
                  alt="Handle Gently"
                  className="w-full h-[200px] sm:h-full object-cover"
                />
              </div>
              <div className="flex-1 flex flex-col justify-center p-4 sm:p-5 md:p-6 rounded-[10px] bg-[#EDD5A9]">
                <h3 className="font-montserrat font-semibold text-[16px] sm:text-[18px] md:text-[20px] text-[#000000] mb-1 sm:mb-2">
                  Handle Gently
                </h3>
                <p className="font-open-sans text-[13px] sm:text-[14px] md:text-[15px] leading-relaxed text-[#000000] break-words">
                  Avoid dropping, striking, or rough use, and treat each
                  Rudraksha as a living part of your spiritual practice. Keep it
                  close with reverence and treat it as a sacred companion in
                  your spiritual journey.
                </p>
              </div>
            </div>

            {/* Card 4: Keep It Personal - Single container with image having its own border */}
            <div className="flex flex-col sm:flex-row gap-4 rounded-[10px] bg-white border border-[#EDD5A9] p-4">
              <div className="sm:w-[55%] shrink-0 overflow-hidden rounded-[10px] border border-[#EDD5A9]">      
                <img
                  src="/learn/s8/personal.jpg"
                  alt="Keep It Personal"
                  className="w-full h-[180px] sm:h-full lg:h-full object-cover rounded-[8px]"
                />
              </div>
              <div className="flex-1 flex flex-col justify-center p-4 sm:p-5 md:p-6 lg:p-2 ml-1">
                <h3 className="font-montserrat font-semibold text-[16px] sm:text-[18px] md:text-[20px] text-[#000000] mb-1 sm:mb-2">
                  Keep It Personal
                </h3>
                <p className="font-open-sans text-[13px] sm:text-[14px] md:text-[15px] leading-relaxed text-[#000000] wrap-break-word">
                  Your Rudraksha carries your energy; avoid sharing it with
                  others to maintain its spiritual potency. Meditate, chant, or
                  pray while wearing or holding your Rudraksha to amplify its
                  spiritual and positive benefits.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default S8;
