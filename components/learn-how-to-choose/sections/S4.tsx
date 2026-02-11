import React from "react";
import Image from "next/image";


const rudrakshaData = [
  // Row 1 (index 0-5)
  { name: "1 Mukhi", image: "/learn/s4/1-mukhi.png", borderTop: true, borderRight: true, borderBottom: true, borderLeft: true },
  { name: "2 Mukhi", image: "/learn/s4/2-mukhi.png", borderTop: false, borderRight: true, borderBottom: true, borderLeft: true },
  { name: "3 Mukhi", image: "/learn/s4/3-mukhi.png", borderTop: true, borderRight: true, borderBottom: true, borderLeft: true },
  { name: "4 Mukhi", image: "/learn/s4/4-mukhi.png", borderTop: false, borderRight: true, borderBottom: true, borderLeft: true },
  { name: "5 Mukhi", image: "/learn/s4/5-mukhi.png", borderTop: true, borderRight: true, borderBottom: true, borderLeft: true },
  { name: "6 Mukhi", image: "/learn/s4/6-mukhi.png", borderTop: false, borderRight: false, borderBottom: false, borderLeft: true },
  // Row 2 (index 6-11)
  { name: "7 Mukhi", image: "/learn/s4/7-mukhi.png", borderTop: true, borderRight: true, borderBottom: true, borderLeft: false },
  { name: "8 Mukhi", image: "/learn/s4/8-mukhi.png", borderTop: true, borderRight: true, borderBottom: true, borderLeft: true },
  { name: "9 Mukhi", image: "/learn/s4/9-mukhi.png", borderTop: true, borderRight: true, borderBottom: true, borderLeft: true },
  { name: "10 Mukhi", image: "/learn/s4/10-mukhi.png", borderTop: true, borderRight: true, borderBottom: true, borderLeft: true },
  { name: "11 Mukhi", image: "/learn/s4/11-mukhi.png", borderTop: true, borderRight: true, borderBottom: true, borderLeft: true },
  { name: "12 Mukhi", image: "/learn/s4/12-mukhi.png", borderTop: true, borderRight: true, borderBottom: true, borderLeft: true },
  // Row 3 (index 12-17)
  { name: "13 Mukhi", image: "/learn/s4/13-mukhi.png", borderTop: true, borderRight: true, borderBottom: true, borderLeft: true },
  { name: "14 Mukhi", image: "/learn/s4/14-mukhi.png", borderTop: true, borderRight: true, borderBottom: true, borderLeft: true },
  { name: "15 Mukhi", image: "/learn/s4/15-mukhi.png", borderTop: true, borderRight: true, borderBottom: true, borderLeft: true },
  { name: "16 Mukhi", image: "/learn/s4/16-mukhi.png", borderTop: true, borderRight: true, borderBottom: true, borderLeft: true },
  { name: "17 Mukhi", image: "/learn/s4/17-mukhi.png", borderTop: true, borderRight: true, borderBottom: true, borderLeft: true },
  { name: "18 Mukhi", image: "/learn/s4/18-mukhi.png", borderTop: true, borderRight: false, borderBottom: false, borderLeft: true },
  // Row 4 (index 18-23)
  { name: "19 Mukhi", image: "/learn/s4/19-mukhi.png", borderTop: true, borderRight: true, borderBottom: true, borderLeft: false },
  { name: "20 Mukhi", image: "/learn/s4/20-mukhi.png", borderTop: true, borderRight: true, borderBottom: true, borderLeft: true },
  { name: "21 Mukhi", image: "/learn/s4/21-mukhi.png", borderTop: true, borderRight: true, borderBottom: true, borderLeft: true },
  { name: "Gauri Shankar", image: "/learn/s4/gauri-shankar.png", borderTop: true, borderRight: true, borderBottom: true, borderLeft: true },
  { name: "Trijuti", image: "/learn/s4/trijuti.png", borderTop: true, borderRight: true, borderBottom: true, borderLeft: true },
  { name: "Chaturbhagi", image: "/learn/s4/chaturbhagi.png", borderTop: true, borderRight: true, borderBottom: true, borderLeft: true },
  // Row 5 (index 24-29)
  { name: "Sawaar", image: "/learn/s4/sawaar.png", borderTop: true, borderRight: true, borderBottom: true, borderLeft: true },
  { name: "Nandi", image: "/learn/s4/nandi.png", borderTop: true, borderRight: true, borderBottom: false, borderLeft: true },
  { name: "Kamal", image: "/learn/s4/kamal.png", borderTop: true, borderRight: true, borderBottom: true, borderLeft: true },
  { name: "Shankhakar", image: "/learn/s4/shankhakar.png", borderTop: true, borderRight: true, borderBottom: false, borderLeft: true },
  { name: "Hanuman", image: "/learn/s4/hanuman.png", borderTop: true, borderRight: true, borderBottom: true, borderLeft: true },
  { name: "Varaha", image: "/learn/s4/varaha.png", borderTop: true, borderRight: false, borderBottom: false, borderLeft: true },
] as {
  name: string;
  image: string;
  borderTop: boolean;
  borderRight: boolean;
  borderBottom: boolean;
  borderLeft: boolean;
}[];

const S4 = () => {
  const getCellBorderStyles = (item: typeof rudrakshaData[0]) => {
    const borderColor = "#F8DEAE";
    return {
      borderTop: item.borderTop ? `1px solid ${borderColor}` : "none",
      borderRight: item.borderRight ? `1px solid ${borderColor}` : "none",
      borderBottom: item.borderBottom ? `1px solid ${borderColor}` : "none",
      borderLeft: item.borderLeft ? `1px solid ${borderColor}` : "none",
    };
  };

  return (
    <section className="w-full pt-20 pb-[40px] sm:pb-[50px] md:pb-[60px] lg:pb-[70px] xl:pb-[80px] 2xl:pb-[90px] px-4 sm:px-6 md:px-8 lg:px-[35px] xl:px-[70px] 2xl:px-[80px] bg-white">
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
                3
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
          <h2 id="understand-mukhi" className="font-montserrat font-bold text-[24px] sm:text-[26px] md:text-[30px] lg:text-[38px] xl:text-[42px] 2xl:text-[46px] text-center text-[#1a1a1a] mt-1">
            Understand Mukhi
          </h2>
        </div>

        {/* Rudraksha Grid - Table style borders */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {rudrakshaData.map((item, index) => {
            const borderStyles = getCellBorderStyles(item);
            
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center p-3 sm:p-4 md:p-5 lg:p-6 xl:p-7 2xl:p-8 bg-white"
                style={borderStyles}
              >
                {/* Image */}
                <div className="relative w-[60px] h-[60px] sm:w-[75px] sm:h-[75px] md:w-[85px] md:h-[85px] lg:w-[100px] lg:h-[100px] xl:w-[110px] xl:h-[110px] 2xl:w-[120px] 2xl:h-[120px] mb-2 sm:mb-3">
                  <Image
                    src={item.image}
                    alt={`${item.name} Rudraksha`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 60px, (max-width: 768px) 75px, (max-width: 1024px) 85px, 110px"
                  />
                </div>

                {/* Name */}
                <h3 className="font-montserrat font-bold text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[17px] text-[#1a1a1a]">
                  {item.name}
                </h3>
                <p className="font-open-sans text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[15px] text-[#666666]">
                  Rudraksha
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default S4;
