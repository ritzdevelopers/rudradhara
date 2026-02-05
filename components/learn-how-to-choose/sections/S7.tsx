import React from "react";

const checklistData = [
  {
    lookFor: "Clear product details: mukhi, origin, size (mm), format",
    avoid: "Overly glossy / varnished look that feels coated",
  },
  {
    lookFor: "Certification from reputed and ISO certified laboratories",
    avoid: "Perfectly identical Rudraksha in a set that look factory-made",
  },
  {
    lookFor: "Natural texture: matte to mildly natural sheen",
    avoid: "Carved-looking lines or suspiciously sharp grooves",
  },
  {
    lookFor: 'Visible, natural lines: not overly "perfect" or uniform',
    avoid: 'Big claims: "guaranteed results", "instant effects", medical promises',
  },
  {
    lookFor: "Clean drill hole: centered, neat, no messy residue",
    avoid: 'No documentation or vague "certified" wording with no proof',
  },
];

const S7 = () => {
  return (
    <section className="w-full pt-5 pb-[40px] sm:pb-[50px] md:pb-[60px] lg:pb-[70px] xl:pb-[80px] 2xl:pb-[90px] px-4 sm:px-6 md:px-8 lg:px-[35px] xl:px-[70px] 2xl:px-[80px] bg-white">
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
                6
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
            Confidence Checklist
          </h2>
        </div>

        {/* Checklist Table */}
        <div className="w-full overflow-hidden rounded-[8px] sm:rounded-[10px] md:rounded-[12px] border border-[#FFF2D9] relative">
          {/* Full-length vertical divider between Look for and Avoid */}
          <div
            className="absolute top-0 bottom-0 left-1/2 w-px -translate-x-1/2 z-10"
            style={{ backgroundColor: "#FFF2D9" }}
          />

          {/* Table Header */}
          <div className="grid grid-cols-2">
            <div className="bg-[#6C3E1A] py-3 sm:py-4 md:py-4 lg:py-5 xl:py-6 px-3 sm:px-4 md:px-5 lg:px-7 xl:px-8 2xl:px-10">
              <h3 className="font-montserrat font-semibold text-[14px] sm:text-[15px] md:text-[17px] lg:text-[19px] xl:text-[20px] 2xl:text-[22px] text-white text-center">
                Look for
              </h3>
            </div>
            <div className="bg-[#6C3E1A] py-3 sm:py-4 md:py-4 lg:py-5 xl:py-6 px-3 sm:px-4 md:px-5 lg:px-7 xl:px-8 2xl:px-10">
              <h3 className="font-montserrat font-semibold text-[14px] sm:text-[15px] md:text-[17px] lg:text-[19px] xl:text-[20px] 2xl:text-[22px] text-white text-center">
                Avoid
              </h3>
            </div>
          </div>

          {/* Table Rows */}
          {checklistData.map((item, index) => (
            <div
              key={index}
              className={`grid grid-cols-2 ${
                index !== checklistData.length - 1 ? "border-b border-[#FFF2D9]" : ""
              } ${index % 2 === 0 ? "bg-white" : "bg-[#FFF9EF]"}`}
            >
              {/* Look For Column */}
              <div className="py-3 sm:py-4 md:py-4 lg:py-5 xl:py-6 px-3 sm:px-4 md:px-5 lg:px-7 xl:px-8 2xl:px-10">
                <p className="font-open-sans text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px] 2xl:text-[18px] text-[#000000] text-center">
                  {item.lookFor}
                </p>
              </div>

              {/* Avoid Column */}
              <div className="py-3 sm:py-4 md:py-4 lg:py-5 xl:py-6 px-3 sm:px-4 md:px-5 lg:px-7 xl:px-8 2xl:px-10">
                <p className="font-open-sans text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px] 2xl:text-[18px] text-[#000000] text-center">
                  {item.avoid}
                </p>
              </div>    
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default S7;